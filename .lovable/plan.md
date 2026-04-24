# IndexNow: notifica automatica a Bing/Yandex al deploy

Implementazione del protocollo IndexNow per far indicizzare istantaneamente le pagine del sito su Bing, Yandex, Seznam e Naver ogni volta che viene effettuato un deploy su Netlify. Google **non** supporta IndexNow, quindi continuerà a basarsi su sitemap + crawling naturale (nessun impatto negativo).

## Logica di funzionamento

1. **Primo deploy con IndexNow attivo** → notifica **tutti** gli URL della sitemap (16 URL).
2. **Deploy successivi** → confronta `sitemap.xml` corrente con uno snapshot della versione precedente e notifica **solo** gli URL con `lastmod` nuovo o modificato. Se nessun URL è cambiato, nessuna chiamata viene effettuata.
3. Lo snapshot della sitemap precedente viene salvato nella cache di build di Netlify, così persiste tra un deploy e l'altro senza finire nel repo.

## Componenti da creare

### 1. File chiave IndexNow (verifica proprietà)
- `public/{KEY}.txt` — file di testo che contiene **solo** la chiave (32+ caratteri esadecimali). Serve a Bing/Yandex per verificare che siamo i proprietari del dominio.
- La chiave viene generata una sola volta (es. `a1b2c3d4e5f6...`) e usata sia come nome del file sia come contenuto.
- Diventa accessibile a `https://4weblab.it/{KEY}.txt`.

### 2. Netlify Build Plugin locale
Cartella `netlify/plugins/indexnow/`:
- `manifest.yml` — dichiara il plugin.
- `index.js` — script Node che gira nello stage **`onSuccess`** del build (= solo se il build va a buon fine):
  1. Legge `public/sitemap.xml` (parsing XML semplice con regex, niente dipendenze).
  2. Legge lo snapshot precedente da `netlify/cache/sitemap-prev.xml` (se esiste).
  3. Calcola il diff: URL nuovi + URL con `lastmod` cambiato.
  4. Se è il primo run (snapshot mancante) → invia tutti gli URL.
  5. POST a `https://api.indexnow.org/indexnow` con il payload JSON standard:
     ```json
     {
       "host": "4weblab.it",
       "key": "{KEY}",
       "keyLocation": "https://4weblab.it/{KEY}.txt",
       "urlList": ["https://4weblab.it/...", "..."]
     }
     ```
  6. Salva la sitemap corrente come nuovo snapshot in cache.
  7. Logga in console di Netlify: numero URL inviati, status code della risposta.
- Gestione errori soft: se la chiamata fallisce, il deploy **non** viene bloccato (semplice `console.warn`).

### 3. `netlify.toml` (root del progetto)
Crea il file (non esiste ancora) con:
- Dichiarazione del plugin locale `[[plugins]] package = "./netlify/plugins/indexnow"`.
- Configurazione cache directory per persistere lo snapshot tra build.

### 4. Aggiornamento `mem://index.md`
Aggiungo una riga in Core: "IndexNow attivo via Netlify plugin: notifica Bing/Yandex su ogni deploy con diff sitemap" → così nelle sessioni future ricordo che esiste e non lo reimplemento.

## File coinvolti

**Nuovi:**
- `public/{generata-runtime}.txt` — file chiave (generato durante l'implementazione)
- `netlify/plugins/indexnow/manifest.yml`
- `netlify/plugins/indexnow/index.js`
- `netlify.toml`

**Modificati:**
- `mem://index.md` (annotazione nelle Core memory)

**Non toccati:**
- Sitemap, robots.txt, codice React, sistema blog: **nessuna modifica**. Il plugin lavora solo a livello build, non runtime.

## Dettagli tecnici

- **Nessuna nuova dipendenza npm**: il plugin usa solo `node:fs`, `node:path` e `fetch` (già disponibile in Node 18+ usato da Netlify).
- **Chiave**: genero una stringa hex casuale di 64 caratteri (raccomandato dal protocollo, max 128).
- **Endpoint usato**: `https://api.indexnow.org/indexnow` (endpoint generico che propaga a tutti i motori partecipanti — non serve chiamare Bing/Yandex separatamente).
- **Rate limit**: IndexNow accetta fino a 10.000 URL per richiesta, ampiamente sufficiente.
- **Idempotenza**: ri-notificare lo stesso URL non causa penalizzazioni, ma il diff evita rumore inutile nei log.
- **Cache Netlify**: la directory `netlify/cache/` è gestita automaticamente da Netlify Build via `utils.cache.save()` / `utils.cache.restore()` esposti dal runtime del plugin.

## Workflow futuro (cosa succederà automaticamente)

1. Pubblichi un nuovo articolo blog → io aggiorno `sitemap.xml` come faccio già adesso.
2. Tu clicchi **Publish** su Lovable → Netlify ribuilda.
3. Plugin parte a fine build, vede che `/blog/nuovo-articolo` ha `lastmod` nuovo, fa POST a IndexNow.
4. Bing/Yandex crawlano la pagina entro pochi minuti/ore.
5. Nei log di deploy Netlify vedrai una riga tipo: `[IndexNow] Notified 1 URL(s), response: 200`.

## Limitazioni note

- **Google non partecipa a IndexNow** (al 2026). Per Google continua a valere: sitemap + Search Console + qualità dei contenuti.
- Funziona solo **dopo** che il sito è stato pubblicato su Netlify e il file chiave è raggiungibile pubblicamente.
- Al primissimo deploy verranno notificati tutti i 16 URL (comportamento corretto e desiderato).
