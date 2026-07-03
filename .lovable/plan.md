## Nuova hero home — Skyline Padova scuro premium

### Concept visivo
Skyline stilizzato di Padova (Prato della Valle, Basilica di Sant'Antonio, Palazzo della Ragione) reinterpretato in chiave contemporanea:
- Palette navy profondo (#0B1F3A → #12365F) con accenti arancio brand (#F97316) come luci calde su cupole e finestre
- Sagome architettoniche pulite in silhouette, atmosfera all'imbrunire / blue hour
- Cielo con leggera texture a griglia digitale / linee di connessione tech sottili sullo sfondo
- Luce laterale sinistra → destra per lasciare respiro al testo bianco H1 (compatibile con l'overlay lineare già presente sul lato sinistro)
- Zero testo/logo nell'immagine, zero volti riconoscibili
- Composizione con "safe zone" a sinistra scura per garantire leggibilità H1 e CTA

### Deliverable — 3 varianti WebP
Tutte servite da `public/hero/` (percorsi già cablati in `Hero.tsx`, nessuna modifica al codice necessaria):

| File | Dimensioni | Uso |
|---|---|---|
| `public/hero/hero-bg-mobile.webp` | 640×900 (portrait 16:22) | ≤640px |
| `public/hero/hero-bg-tablet.webp` | 1280×900 | 641–1280px |
| `public/hero/hero-bg-desktop.webp` | 1920×1070 | ≥1281px |

Le tre varianti manterranno stessa palette e composizione, con la mobile ricomposta in verticale (skyline centrato più stretto) per non tagliare gli elementi architettonici chiave.

### Alt text
L'`alt` attuale ("Sito web professionale realizzato da 4 Web Lab per PMI e professionisti") non descrive più l'immagine. Sostituito con:

> "Skyline stilizzato di Padova al tramonto con Basilica di Sant'Antonio e Prato della Valle — 4 Web Lab, agenzia web locale"

SEO-friendly, include keyword "Padova" + "agenzia web" + brand, descrive fedelmente l'immagine.

### File toccati
- `src/components/Hero.tsx` → aggiornamento solo dell'attributo `alt` (riga 39)
- `public/hero/hero-bg-mobile.webp` → rigenerato
- `public/hero/hero-bg-tablet.webp` → rigenerato
- `public/hero/hero-bg-desktop.webp` → rigenerato

### Note tecniche
- Generazione con `imagegen--generate_image` in tier `standard` per fedeltà architettonica, salvataggio come `.jpg` intermedio in `/tmp` poi conversione a `.webp` con `cwebp` (quality 82) per ottimizzare peso e mantenere il formato richiesto dal `<picture>` esistente
- `<link rel="preload">` in `index.html` per la variante desktop resta valido (stesso path)
- Nessun impatto su LCP: dimensioni, `fetchPriority="high"`, `width/height` espliciti già in place
- Nessuna modifica a Framer Motion o al layout della sezione
