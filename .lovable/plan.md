

## Analisi LCP — Criticità trovate e piano di fix

### Problemi identificati

**1. Preload rotto in index.html**
La riga 7 di `index.html` fa preload di `/src/assets/hero-bg.png` — un file che non esiste più (ora è `.webp`). Questo preload fallisce silenziosamente e non aiuta l'LCP.

**2. Font Google Fonts bloccante il rendering**
In `src/index.css` riga 1, `@import url(...)` per Google Fonts è render-blocking: il browser deve scaricare il CSS dei font prima di poter mostrare qualsiasi contenuto. Carica 3 famiglie (Inter, Oswald, Playfair Display) con molti pesi.

**3. Font Oswald caricato ma mai usato**
Il font `Oswald` è importato ma non viene utilizzato da nessuna parte nel CSS o nei componenti. È peso morto.

**4. Framer Motion sull'elemento LCP**
L'`<h1>` nella Hero (probabile elemento LCP) è avvolto in `motion.h1` con `initial={{ opacity: 0 }}`. Questo significa che il testo più grande della pagina parte invisibile e appare solo dopo che il JS di Framer Motion si è caricato ed eseguito, ritardando l'LCP.

**5. Nessun lazy loading per le sezioni below-the-fold**
Tutti i componenti della homepage (About, Strengths, Services, Rental, Pricing, FAQ, Contact) sono importati staticamente e inclusi nel bundle iniziale, aumentando il JS che blocca il rendering.

---

### Piano di intervento

#### Step 1 — Fix preload hero image
- In `index.html`: correggere il path del preload da `.png` a `.webp` e aggiungere `type="image/webp"`

#### Step 2 — Font: da @import a link preconnect + preload
- Rimuovere `@import url(...)` da `index.css`
- Rimuovere Oswald (non usato)
- Aggiungere in `index.html` `<head>`:
  - `<link rel="preconnect" href="https://fonts.googleapis.com">`
  - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  - `<link rel="stylesheet" href="..." media="print" onload="this.media='all'">` (caricamento non-blocking)
  - Fallback `<noscript>` con il link diretto

#### Step 3 — Rimuovere animazione dall'elemento LCP
- In `Hero.tsx`: cambiare `motion.h1` in un semplice `<h1>` per il titolo principale, così il testo è visibile immediatamente senza attendere JS
- Mantenere le animazioni sugli elementi secondari (paragrafo, CTA, promo box)

#### Step 4 — Lazy loading sezioni below-the-fold
- In `Index.tsx`: usare `React.lazy()` + `Suspense` per i componenti non visibili al primo caricamento (da AboutSection in giù)
- Questo riduce il bundle JS iniziale e velocizza il First Paint

#### Step 5 — Rimuovere il commento TODO in index.html
- Pulizia: rimuovere il commento `<!-- TODO: Set the document title -->` che non serve

---

### Dettagli tecnici

| Problema | Impatto LCP | Fix |
|----------|------------|-----|
| Preload sbagliato | Alto — risorsa critica non precaricata | Correggere path |
| @import font | Alto — render-blocking | Link async in head |
| Oswald inutilizzato | Medio — bytes scaricati per nulla | Rimuovere |
| motion.h1 opacity:0 | Alto — LCP invisibile fino a JS | Tag h1 statico |
| No code splitting | Medio — JS bundle troppo grande | React.lazy |

