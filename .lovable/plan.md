## Obiettivo
Rendere `/realizzazioni` accessibile solo via link diretto, ma invisibile a motori di ricerca, AI crawler, sitemap e link interni — finché non sarà pronta per il pubblico.

## Cosa cambia

### 1. Meta robots noindex sulla pagina
In `src/pages/Realizzazioni.tsx` modifico l'`<Helmet>`:
- `<meta name="robots" content="noindex, nofollow" />`
- `<meta name="googlebot" content="noindex, nofollow" />`
- Rimuovo `<link rel="canonical">` e i tag `og:*`/`twitter:*` (inutili e fuorvianti su pagina noindex)
- Rimuovo lo schema JSON-LD `CollectionPage` (non vogliamo segnalarla)

### 2. Rimozione dalla sitemap
In `public/sitemap.xml` elimino l'entry `<url><loc>https://4weblab.it/realizzazioni</loc>...</url>`.

### 3. Esclusione esplicita in robots.txt
In `public/robots.txt` aggiungo:
```
User-agent: *
Disallow: /realizzazioni
```
(mantenendo `Allow: /` e la direttiva `Sitemap:` esistenti)

### 4. Rimozione da llms.txt
In `public/llms.txt` elimino la riga `- [Realizzazioni](/realizzazioni): ...` per non segnalarla agli AI crawler.

### 5. Verifica link interni
Controllo se `/realizzazioni` è linkata da Header, Footer, Hero, ServicesSection o altre pagine. Se sì, rimuovo i link visibili (la rotta resta attiva, raggiungibile solo digitando l'URL).

## Cosa NON cambia
- La rotta `/realizzazioni` in `src/App.tsx` resta attiva → la pagina è raggiungibile via link diretto
- Il file `Realizzazioni.tsx` non viene cancellato, solo "smarcato" dai segnali SEO
- Nessuna modifica al design o al contenuto della pagina

## File toccati
- `src/pages/Realizzazioni.tsx` — meta noindex, rimozione canonical/og/JSON-LD
- `public/sitemap.xml` — rimozione entry
- `public/robots.txt` — aggiunta Disallow
- `public/llms.txt` — rimozione riga
- Eventuali componenti con link a `/realizzazioni` (da verificare)

## Risultato
Google, Bing, ChatGPT, Perplexity e gli altri crawler non indicizzeranno né scansioneranno `/realizzazioni`. Tu potrai continuare a sviluppare la pagina e visualizzarla aprendo direttamente l'URL nel browser. Quando sarà pronta basterà rifare il percorso al contrario.