## Obiettivo

Aggiungere R.B s.n.c. di Bertoluzzo e Ragazzo (Cittadella, PD) — rimozione eternit e rifacimento tetti — come **primo progetto** nella pagina `/realizzazioni`, marcato come lavoro reale (non concept). Predisporre la pagina di dettaglio (stub) da completare in seguito. Rafforzare i segnali EEAT a livello sitewide e di pagina.

---

## 1. Nuova card in /realizzazioni (prima posizione)

In `src/pages/Realizzazioni.tsx`, in cima all'array `projects`:

- **slug**: `realizzazione-sito-web-edilizia-rb-snc-veneto`
- **title**: "Sito web R.B s.n.c. — rimozione eternit e rifacimento tetti, Cittadella (PD)"
- **badge**: `Progetto reale` (nuovo stile distintivo vs "Concept" — pillola verde/accent piena anziché bianca, per dare gerarchia visiva immediata)
- **description**: una riga che racconta il lavoro effettivamente svolto: restyling completo, SEO on-page e campagna Google Ads attiva, settore edilizia specializzata
- **features**: ["Restyling completo", "Ottimizzazione SEO", "Campagna Google Ads"]
- **image**: nuova immagine WebP (vedi §2)
- **alt**: descrittivo ed EEAT-friendly, include settore + città

Per supportare un badge "reale" diverso dal "Concept" senza riscrivere la card:
- Estendere l'interface `Project` con `badgeVariant?: "concept" | "real"` (default `concept`).
- Nel render della pillola del badge, applicare uno stile pieno accent (es. `bg-accent text-accent-foreground`) quando `badgeVariant === "real"`, mantenendo l'attuale `bg-card/95` per i concept.

Aggiornare il blocco INTRO della pagina per riflettere che ora ci sono progetti reali in evidenza ("Il primo della lista è un lavoro reale online, gli altri sono concept dimostrativi…") — micro-modifica al paragrafo esistente, niente nuove sezioni.

## 2. Immagine card

Generare con `imagegen--generate_image` (tier `standard`, formato 16:10 → 1600x1000, salvataggio in `src/assets/rb-snc-edilizia.webp`) una foto realistica di:
- operai con DPI completi (tute bianche, maschere) su un tetto in fase di rimozione lastre di cemento-amianto e installazione di nuova copertura metallica
- luce diurna, atmosfera professionale, palette coerente col sito (cieli chiari, accenti caldi sui materiali)
- nessun testo nell'immagine, nessun logo

Salvataggio diretto in WebP (rispetta la regola sitewide).

## 3. Pagina dedicata stub

Nuovo file `src/pages/DemoRbSncEdilizia.tsx` — pagina **minima ma indicizzabile e già SEO-corretta**, da espandere in un secondo momento:

- Header + Footer del sito principale (non layout demo immersivo come gli altri concept: questa è una case study reale)
- Hero con titolo "Caso studio · R.B s.n.c. — rimozione eternit e rifacimento tetti", breadcrumb, immagine
- Una sezione "In preparazione" con outline dei contenuti che arriveranno (sfida, soluzione, risultati SEO/Ads) + CTA per visitare il sito live: **https://rb-snc.it** (target `_blank`, `rel="noopener external"`)
- CTA secondaria verso `/contatti` con il copy standard "Richiedi una valutazione gratuita"
- Helmet completo: title, description, canonical self-reference, og:*, JSON-LD `CreativeWork` (autore = 4 Web Lab, about = il cliente) + `BreadcrumbList`

Route: aggiungere in `src/App.tsx` la rotta `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto` → `DemoRbSncEdilizia`, con `React.lazy` come le altre demo.

Sitemap: nuovo `<url>` in `public/sitemap.xml` come prima entry sotto `/realizzazioni` (priorità 0.8, changefreq monthly, lastmod oggi).

## 4. Boost EEAT sitewide

Migliorare i segnali Experience/Expertise/Authoritativeness/Trust:

- **`/realizzazioni` Helmet**: aggiornare title e description per evidenziare la presenza di **lavori reali pubblicati**, non solo concept (es. "Realizzazioni siti web reali + concept | 4 Web Lab Padova"). Aggiornare anche og:title / twitter:title / description coerenti.
- **CollectionPage JSON-LD** (`/realizzazioni`): estendere ogni `ListItem` con `image` e `description`, e aggiungere `position` ordinato in modo che R.B sia #1. Aggiungere proprietà `about` con i settori coperti.
- **Organization JSON-LD** in `index.html`: aggiungere/estendere il campo `knowsAbout` includendo "rimozione amianto", "siti web edilizia", "Google Ads gestionale", "SEO locale Veneto" — rafforza topical authority. Aggiungere `slogan` se mancante.
- **`public/llms-full.txt`**: nuova sezione "Casi studio reali" con 3-4 righe su R.B s.n.c. (cliente reale, settore, servizi erogati, URL live `https://rb-snc.it`) — segnale EEAT diretto per LLM crawler.
- **`public/robots.txt`**: nessuna modifica (già allow esplicito per crawler AI).

## 5. Verifiche post-build

- Build pulita
- Card R.B presente in prima posizione, badge "Progetto reale" visibile
- Route nuova navigabile (stub indicizzabile)
- Sitemap valida (lastmod nel formato YYYY-MM-DD esistente)
- JSON-LD `/realizzazioni` valido (ItemList con 6 elementi + nuova entry in testa)

---

## Dettagli tecnici

```text
File modificati:
  src/pages/Realizzazioni.tsx           # nuovo project in cima, badgeVariant
  src/App.tsx                           # nuova route lazy
  index.html                            # Organization JSON-LD: knowsAbout esteso
  public/sitemap.xml                    # nuova <url> in testa /realizzazioni
  public/llms-full.txt                  # sezione "Casi studio reali"

File creati:
  src/pages/DemoRbSncEdilizia.tsx       # stub case study, indicizzabile
  src/assets/rb-snc-edilizia.webp       # immagine card (imagegen standard 1600x1000)

Memoria da aggiornare (post-build):
  mem://index.md  → riga Core su "Primo progetto reale pubblicato: R.B s.n.c."
  mem://features/landing-pages/case-study-rb-snc (nuovo) → cliente reale, URL live, stato stub
```

Domande aperte: nessuna — procedo con questi parametri appena approvi.
