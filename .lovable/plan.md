
## Nuovo articolo blog: Aruba SuperSite

### Slug & route
- Slug: `aruba-supersite-conviene-davvero-limiti-e-cosa-sapere`
- Route: `/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere`

### Meta SEO
- **Title** (<60): `Aruba SuperSite conviene? Limiti e cosa sapere prima`
- **Description** (<160): `Aruba SuperSite è davvero la soluzione giusta per il tuo sito? Limiti, tempi nascosti e cosa valutare prima di scegliere una piattaforma fai-da-te.`
- Canonical, OG, Twitter, BreadcrumbList + BlogPosting JSON-LD (stesso pattern di `BlogSiteVsSocialArticle.tsx`).
- Categoria: `Strategia digitale`
- Data pubblicazione/modifica: `2026-06-09`

### Ottimizzazione SEO/AEO/GEO (senza stravolgere)
- Rielaboro paragrafi mantenendo i concetti, ma includendo keyword: "Aruba SuperSite", "piattaforma fai-da-te", "sito web professionale", "alternativa Aruba SuperSite", "creare sito web Padova".
- Frasi brevi, domande dirette (AEO-friendly).
- H2 tematizzati riprendendo le sezioni dell'articolo originale (8 sezioni + conclusione).
- Frase locale GEO: riferimento a Padova/Veneto nella conclusione.

### Interlinking interno
- `creare-sito-web-da-soli-conviene` (sezione "Il vero costo nascosto")
- `siti-web-piattaforme-preventivi-online-conviene` (sezione "Essere online non significa essere visibili" o "Aruba è cattiva soluzione")
- `perche-il-tuo-sito-non-si-trova-su-google` (sezione visibilità Google)
- `quanto-costa-un-sito-web-nel-2026` (sezione costi nascosti)
- CTA finale a `/contatti`

### Related articles (in `blogArticles.ts`)
Related: `creare-sito-web-da-soli-conviene`, `siti-web-piattaforme-preventivi-online-conviene`.
Aggiorno anche `related` di un paio di articoli esistenti per puntare al nuovo (es. `creare-sito-web-da-soli-conviene` → aggiunge nuovo articolo).

### Immagini esempio (lightbox)
Due screenshot caricati: `favesrl.it` e `importirrigation.com`.
- Converto entrambe in **WebP** (qualità ~82, larghezza max 1600px) e le salvo in `src/assets/`:
  - `blog-aruba-example-favesrl.webp`
  - `blog-aruba-example-importirrigation.webp`
- Genero anche **hero article image WebP** con imagegen (1024x640) — schermata stilizzata di builder fai-da-te — per coerenza con gli altri articoli.
- Nuova sezione "Esempi di siti realizzati con piattaforme fai-da-te" con grid 2 colonne (1 col mobile). Ogni thumbnail è un `<button>` (accessibile) che apre un **lightbox modale React**:
  - Overlay scuro `bg-background/90 backdrop-blur`
  - Immagine centrata, max-w 90vw / max-h 90vh, `object-contain`
  - Bottone **X** in alto a destra, visibile e cliccabile (icona Lucide `X` dentro pulsante con bg + aria-label "Chiudi")
  - Chiusura anche su click overlay e tasto `Esc`
  - Body scroll lock quando aperto
  - Trap focus minimo (autofocus su X)
  - Caption con didascalia (nome sito + nota "esempio sito realizzato con piattaforma fai-da-te")

Componente lightbox locale dentro la pagina articolo (state-driven, niente nuove dipendenze).

### File da creare
- `src/pages/BlogArubaSupersiteArticle.tsx` (stessa struttura di `BlogSiteVsSocialArticle.tsx` + sezione esempi + lightbox)
- `src/assets/blog-aruba-supersite.jpg` (hero — imagegen, poi useremo .jpg standard come gli altri)
- `src/assets/blog-aruba-example-favesrl.webp`
- `src/assets/blog-aruba-example-importirrigation.webp`

### File da modificare
- `src/App.tsx` — aggiungo `lazy` import + `<Route>` per il nuovo articolo
- `src/data/blogArticles.ts` — aggiungo nuovo `BlogArticle` in testa, aggiorno `related` di articoli affini
- `public/sitemap.xml` — aggiungo `<url>` per la nuova pagina con `lastmod` `2026-06-09` e aggiorno `lastmod` di `/blog` a `2026-06-09`
- `public/llms-full.txt` — aggiungo riferimento al nuovo articolo

### Note tecniche
- Immagini lazy con `loading="lazy"`, `width`/`height` espliciti (WebP).
- Hero usa `<img>` standard (no Framer Motion su H1).
- Lightbox: portal non necessario (z-index alto basta). `role="dialog"` + `aria-modal="true"`.
- Reading time calcolato da `wordCount` (~720).

Procedo?
