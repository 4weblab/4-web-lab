

## Sistemazione definitiva Meta Tag Open Graph e Twitter

### Interventi previsti

**1. `index.html` — Meta tag statici (per crawler senza JS)**

Sostituzione di tutti i meta tag OG e Twitter attualmente presenti con i valori definitivi:

- `og:title` = titolo ufficiale della home
- `og:description` = descrizione SEO completa
- `og:url` = `https://www.4weblab.it/`
- `og:image` = `https://www.4weblab.it/og-image.jpg`
- `og:type` = `website`
- `og:locale` = `it_IT`
- `twitter:card` = `summary_large_image`
- `twitter:title`, `twitter:description`, `twitter:image` allineati ai valori OG
- Rimozione di ogni riferimento a `lovable.dev`
- Rimozione del meta `twitter:site` che punta a `@Lovable`

**2. `src/App.tsx` — React Helmet (per crawler con JS)**

Allineamento di tutti i meta tag OG e Twitter agli stessi identici valori dello statico. Rimozione dei commenti TODO e del blocco `siteMetadata` con placeholder. L'`og:url` avra il trailing slash corretto.

**3. Immagine OG**

L'immagine caricata dall'utente e un'immagine di riferimento/anteprima. Il file `og-image.jpg` verra caricato manualmente dall'utente nel percorso `/og-image.jpg` (root pubblica del dominio). Nessun file immagine verra copiato nel progetto.

---

### Dettagli tecnici

File modificati:
- `index.html` — sostituzione blocco meta tag nella `<head>`
- `src/App.tsx` — allineamento Helmet, rimozione TODO e placeholder Lovable

Nessuna modifica a layout, componenti o struttura del sito.

