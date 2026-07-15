## Obiettivo
Sostituire l'attuale hero image (Padova + skyline in codice) con una nuova immagine coerente con il posizionamento del sito, in stile **astratto tech-geo Veneto** con palette **navy + arancio** brand.

## Concept visivo
Composizione astratta e sofisticata che rappresenti:
- Sagoma stilizzata della regione **Veneto** (o area Padova) come base geografica
- **Nodi luminosi** interconnessi (rete/network) con Padova come punto focale evidenziato
- Elementi tech sottili: linee dati, griglia, particelle, connessioni che ricordano SEO/AI/traffico organico
- **Palette**: navy profondo (#0a1e3a / #12294d) come sfondo dominante, accenti **arancio** brand (glow, nodi principali, linee dati) e blu-ciano freddi come contrappunto
- Atmosfera premium, editoriale, non fotografica — ricorda una data-visualization d'autore
- Ampia zona a sinistra volutamente "calma" (poco affollata) per lasciare respiro a H1 e CTA sopra l'overlay scuro

## Deliverable immagini
Tre varianti WebP mantenendo dimensioni/proporzioni attuali:
- `public/hero/hero-bg-desktop.webp` — 1920×1070
- `public/hero/hero-bg-tablet.webp` — 1280×720 circa (proporzione attuale)
- `public/hero/hero-bg-mobile.webp` — 800×1200 circa (orientamento mobile con soggetto centrato/spostato per essere leggibile dietro il testo)
- `public/hero/hero-mini-desktop.webp` — versione ridotta usata dalle pagine satellite (`.page-hero`), stessa composizione ma crop più compatto

Tutte in `.webp` di qualità ottimizzata.

## Coerenza tecnica
- Aggiornati **solo** i file immagine: non modifico markup, `srcset`, `preload` in `index.html`, né la classe `.page-hero` in `src/index.css`. I path e le proporzioni restano invariati, quindi tutte le pagine (index + satellite) recepiscono automaticamente il nuovo asset.
- **Alt text** aggiornato in `src/components/Hero.tsx` per riflettere il nuovo soggetto (mappa astratta Veneto + rete dati) mantenendo keyword "Padova / 4 Web Lab / web agency".
- Nessuna modifica ad altri componenti o al layout.

## Passi
1. Generare la variante **desktop** (1920×1070) come immagine master con imagegen (modello premium per qualità typografia/nitidezza dei nodi).
2. Derivare **tablet**, **mobile** e **mini-desktop** con edit_image per garantire coerenza cromatica e compositiva tra le varianti.
3. Sostituire i 4 file esistenti in `public/hero/`.
4. Aggiornare l'`alt` in `Hero.tsx`.
5. Verifica build + screenshot rapido della home per validare LCP e leggibilità del testo sopra l'immagine.

## Non incluso
- Nessuna modifica a JSON-LD, SEO, sitemap, palette CSS o altri asset.
- Nessuna nuova sezione o componente.
