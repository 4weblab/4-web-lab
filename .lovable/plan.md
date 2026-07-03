## Nuova hero home — Skyline Padova "fatto di codice"

### Concept visivo
Reinterpretazione della hero attuale con effetto **tech dissolve**: Basilica di Sant'Antonio e Prato della Valle emergono da flussi verticali di codice sorgente, come se l'architettura si materializzasse dai caratteri.

- Silhouette architettonica riconoscibile (cupole, campanili, ovale del Prato) costruita/dissolta in colonne di caratteri di codice stile Matrix ma raffinato
- Palette coerente col brand: navy profondo `#0B1F3A → #12365F` di fondo, caratteri di codice in azzurro tenue e accenti arancio `#F97316` sui punti focali (cupole, keyword del codice)
- Particelle luminose che salgono verso l'alto, senso di "compilazione in corso"
- Sottili linee di connessione / grid digitale nel cielo
- **Safe zone scura a sinistra** per garantire leggibilità H1 e CTA
- Zero testo leggibile in italiano/inglese che possa distrarre, zero loghi, zero volti
- Il codice è motivo visivo (glyph astratti + snippet plausibili tipo HTML/JS), non deve competere col titolo

### Deliverable — 3 varianti WebP
Stessi percorsi già cablati in `src/components/Hero.tsx`, nessuna modifica alla struttura del componente:

| File | Dimensioni |
|---|---|
| `public/hero/hero-bg-desktop.webp` | 1920×1070 |
| `public/hero/hero-bg-tablet.webp` | 1280×900 |
| `public/hero/hero-bg-mobile.webp` | 640×900 (portrait) |

Composizione derivata dallo stesso master 1920 per garantire coerenza cromatica tra le tre viste; mobile ricentrata sulla Basilica.

### Alt text aggiornato
Sostituisco l'`alt` corrente per riflettere la nuova immagine:

> "Skyline di Padova con Basilica di Sant'Antonio e Prato della Valle stilizzati in codice sorgente — 4 Web Lab, agenzia web tech a Padova"

Mantiene keyword locali ("Padova", "agenzia web"), aggiunge segnale tech, descrive fedelmente il contenuto visivo.

### File toccati
- `src/components/Hero.tsx` → solo attributo `alt` (riga 39)
- `public/hero/hero-bg-desktop.webp` → rigenerato
- `public/hero/hero-bg-tablet.webp` → rigenerato
- `public/hero/hero-bg-mobile.webp` → rigenerato

### Note tecniche
- Generazione con `imagegen--generate_image` tier `standard` a 1920×1088, poi crop/resize con PIL per le tre varianti e encoding WebP quality 82 (stessa pipeline già usata)
- `<link rel="preload">` in `index.html`, `fetchPriority="high"`, `width/height` espliciti: nessun impatto su LCP
- Nessuna modifica a CSS, layout, overlay o Framer Motion
