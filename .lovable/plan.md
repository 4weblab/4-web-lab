## Obiettivo
Ridurre latenza e richieste esterne migrando i font Google (Inter + Playfair Display) al self-hosting via `@fontsource-variable`, servendoli dal bundle Vite invece che da `fonts.googleapis.com` / `fonts.gstatic.com`.

## Perché conviene
- Elimina 2 preconnect + 1 richiesta CSS blocking verso Google Fonts
- I file `.woff2` diventano asset locali con hash, con caching CDN aggressivo di Netlify
- Migliora LCP e riduce CLS del font swap
- Rimuove una dipendenza terza (privacy/GDPR: nessun IP inviato a Google Fonts)

## Modifiche

### 1. Installare dipendenze
- `@fontsource-variable/inter` (variable font, un solo file per tutti i pesi 400–700)
- `@fontsource/playfair-display` con pesi 600/700/800

### 2. `src/main.tsx` — importare i CSS dei font
```ts
import "@fontsource-variable/inter";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";
```

### 3. `index.html` — rimuovere
- `<link rel="preconnect" ...googleapis>` e `...gstatic>`
- `<link rel="preload" ...playfairdisplay...woff2>` esterno
- `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?...">` + relativo `<noscript>`

### 4. `src/index.css` — aggiornare font-family
- `font-family: 'Inter Variable', 'Inter', system-ui, sans-serif;`
- Playfair Display resta invariato (il nome famiglia è lo stesso)

### 5. Verifica
- `bun run build` → nessun errore
- Verifica visiva rapida: la Hero e i titoli devono mantenere lo stesso rendering tipografico
- Controllo network: nessuna chiamata a fonts.gstatic.com/googleapis.com

## Altre dipendenze valutate — non tocco
- **framer-motion** già lazy nei componenti non-LCP (memory rule). Ok.
- **lucide-react**: import tree-shakeable per icona, nessun bundle bloat.
- **date-fns v3**: già modular.
- **embla, radix**: usati, non alleggeribili senza refactor.

Se in seguito vuoi, valutiamo `vite-plugin-compression` (gzip/brotli pre-build) o code splitting per rotte pesanti, ma sono ottimizzazioni separate da questo intervento sui font.
