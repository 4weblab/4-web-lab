## 🎯 Obiettivo
Ridurre il LCP (Largest Contentful Paint) della homepage attualmente segnalato a ~3s da PageSpeed Insights, intervenendo principalmente sull'immagine Hero e sul preload.

## 📊 Diagnosi attuale

**Immagine Hero (`src/assets/hero-bg.webp`)**
- Dimensioni: **1920×1070 px**, peso **55 KB**
- Servita identica a TUTTI i device (mobile compreso, dove ne basterebbe ~750px di larghezza)
- Su mobile (390px viewport) il browser scarica e decodifica un'immagine 5x più grande del necessario → ~150-300ms sprecati nella decodifica

**Preload sbagliato in `index.html`**
```html
<link rel="preload" as="image" href="/src/assets/hero-bg.webp" ...>
```
⚠️ Il path `/src/assets/...` **non esiste in produzione**: Vite rinomina il file in `/assets/hero-bg-[hash].webp`. Quindi **il preload attuale fallisce silenziosamente** in produzione e il browser scopre l'immagine solo quando React monta il componente Hero. Questo è probabilmente il fattore #1 del LCP a 3s.

**Font Google bloccanti** (parziale)
- Già caricati con `media="print" onload="this.media='all'"` (ok)
- Ma `Playfair Display` viene usato negli H1 della Hero → senza preload del WOFF2, il testo Hero subisce un FOUT/swap che può ritardare il LCP

## 🛠️ Piano di intervento

### 1. Generare varianti responsive dell'immagine Hero
Creare 3 varianti WebP partendo dall'attuale:
- `hero-bg-mobile.webp` → **800×446px** (~20-25 KB) per viewport ≤640px
- `hero-bg-tablet.webp` → **1280×713px** (~35-40 KB) per viewport ≤1280px
- `hero-bg.webp` (esistente, 1920×1070) → desktop

Quality 75-78, metodo 6 (massima compressione).

### 2. Sostituire `<img>` con `<picture>` in `src/components/Hero.tsx`
```tsx
<picture>
  <source media="(max-width: 640px)" srcSet={heroBgMobile} type="image/webp" />
  <source media="(max-width: 1280px)" srcSet={heroBgTablet} type="image/webp" />
  <img src={heroBg} alt="..." width={1920} height={1070}
       fetchPriority="high" decoding="async" ... />
</picture>
```

### 3. Correggere il preload in `index.html` (CRITICO)
Rimuovere il preload con path `/src/assets/...` rotto. Sostituire con preload responsive dinamico che funziona in produzione. Due opzioni:

**Opzione A — `imagetools`/manifest** (complesso, richiede plugin Vite)

**Opzione B (consigliata)** — Spostare l'asset in `public/` così il path resta stabile:
- Mettere le 3 varianti in `public/hero/hero-bg-{mobile,tablet,desktop}.webp`
- Preload nell'`index.html` con `imagesrcset` + `imagesizes` (supportato da Chrome/Edge/Safari):
```html
<link rel="preload" as="image"
      href="/hero/hero-bg-desktop.webp"
      imagesrcset="/hero/hero-bg-mobile.webp 800w, /hero/hero-bg-tablet.webp 1280w, /hero/hero-bg-desktop.webp 1920w"
      imagesizes="100vw"
      fetchpriority="high" />
```
- In `Hero.tsx` referenziare i path assoluti `/hero/hero-bg-...webp` invece dell'import da `@/assets/`.

### 4. Preload font Playfair Display
Il LCP element è l'H1 con Playfair Display. Aggiungere in `index.html`:
```html
<link rel="preload" as="font" type="font/woff2" crossorigin
      href="https://fonts.gstatic.com/s/playfairdisplay/v37/...woff2" />
```
(va recuperato l'URL esatto del WOFF2 della variante 700/800 latin)

In alternativa, più sicuro: self-hostare solo il subset latin di Playfair 700/800 nella cartella `public/fonts/` ed eliminare la dipendenza da fonts.googleapis (risparmio ulteriore di ~200ms su connessione mobile).

### 5. Verifica e benchmark
Dopo gli interventi:
- `nix run nixpkgs#imagemagick` per verificare le dimensioni dei file generati
- Test locale con `bun run build && bun run preview`
- Suggerire all'utente di rilanciare PageSpeed Insights post-deploy

## 📁 File da modificare/creare

**Nuovi**
- `public/hero/hero-bg-mobile.webp`
- `public/hero/hero-bg-tablet.webp`
- `public/hero/hero-bg-desktop.webp` (copia dell'attuale)

**Modificati**
- `index.html` — fix preload immagine + preload font Playfair
- `src/components/Hero.tsx` — `<picture>` con sorgenti responsive

**Da rimuovere (opzionale)**
- `src/assets/hero-bg.webp` se non più referenziato altrove

## 📈 Risultato atteso
- Su mobile: peso immagine Hero **da 55 KB a ~20 KB** (-65%)
- Preload effettivamente funzionante in produzione → **LCP -500/-1000ms**
- Font Playfair preloaded → niente FOUT ritardato sull'H1
- Target realistico PageSpeed mobile: **da 3s a ~1.2-1.5s** sul LCP

## ⚠️ Rischi / note
- Le immagini in `public/` non passano per il fingerprinting di Vite, quindi su update dell'immagine bisogna cambiare nome file (o accettare cache fino a invalidation CDN). Per la Hero, che cambia raramente, è accettabile.
- Il preload con `imagesrcset` non è supportato da Firefox (~3% utenti IT mobile) — ma il fallback `href` desktop viene comunque scaricato, nessun degrado funzionale.
