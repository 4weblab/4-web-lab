# Uniformare il sistema breadcrumb su tutto il sito

## Obiettivo
Allineare la presenza del breadcrumb visivo (UI) con quella dello schema JSON-LD `BreadcrumbList` su **tutte le pagine** del sito, eliminando le incoerenze tra ciò che vede l'utente e ciò che vede Google. Oggi il sistema è completo solo sui 6 articoli del blog.

## Stato attuale
- **Blog (indice)**: ha JSON-LD ma NON ha UI → mismatch
- **6 pagine articolo**: complete (UI + JSON-LD) → OK
- **Tutte le altre pagine** (landing, FAQ, contatti, demo, legali): nessun breadcrumb, né UI né JSON-LD

## Approccio
Generalizzare il componente `BlogBreadcrumb` in un componente unico **`PageBreadcrumb`** che:
- accetta una lista di segmenti (label + path opzionale)
- renderizza la UI accessibile (già presente: `aria-label`, `aria-current`, `ChevronRight`)
- emette automaticamente lo schema JSON-LD `BreadcrumbList` corrispondente, così la UI e i dati strutturati restano sempre sincronizzati per costruzione

In questo modo basterà inserire `<PageBreadcrumb items={[...]} />` in ogni pagina e si ottengono entrambe le cose.

## Pagine da aggiornare e gerarchia proposta

| Pagina | Breadcrumb |
|---|---|
| `/blog` (Blog.tsx) | Home › Blog |
| `/realizzazione-siti-web-padova` | Home › **Realizzazione siti web Padova** |
| `/realizzazione-siti-web-per-professionisti` | Home › Siti per professionisti |
| `/siti-web-per-negozi` | Home › Siti per negozi |
| `/siti-web-aziendali` | Home › Siti aziendali |
| `/faq-realizzazione-siti-web` | Home › FAQ |
| `/contatti` | Home › Contatti |
| `/privacy` | Home › Privacy Policy |
| `/cookie` | Home › Cookie Policy |
| **6 articoli blog** | Home › Blog › [Titolo] (migrazione da `BlogBreadcrumb` a `PageBreadcrumb`) |

**Esclusioni**:
- **Pagine demo** (`/demo-*`): sono mockup commerciali per clienti, non parte della struttura di navigazione SEO → nessun breadcrumb
- **`NotFound` (404)**: non ha senso indicizzarlo nei breadcrumb
- **Home (`/`)**: per convenzione la pagina root non mostra breadcrumb

## Dettagli tecnici

### Nuovo componente `src/components/PageBreadcrumb.tsx`
- Props: `items: { label: string; to?: string }[]` (l'ultimo item è la pagina corrente, senza `to`)
- Render UI: stessa struttura visiva di `BlogBreadcrumb`, ma con due varianti di colore tramite prop `variant?: "light" | "dark"` (default `light`) per supportare sfondi hero scuri (blog/articoli) e sfondi chiari (pagine landing/legali)
- Genera internamente il JSON-LD `BreadcrumbList` con `react-helmet-async` `<Helmet>` annidato, mappando ogni item con `position`, `name` e `item` (URL assoluto `https://4weblab.it{to}`); l'ultimo item usa l'URL corrente della pagina

### Migrazione articoli blog
- Sostituire `<BlogBreadcrumb currentTitle="..." />` con `<PageBreadcrumb items={[{label:"Home",to:"/"},{label:"Blog",to:"/blog"},{label:"..."}]} />` nei 6 file articolo
- **Rimuovere** lo `<script type="application/ld+json">` con `BreadcrumbList` già presente nei 6 articoli + in `Blog.tsx`, perché ora viene emesso dal componente (evita duplicati)
- Eliminare il file `src/components/BlogBreadcrumb.tsx` (sostituito)

### Inserimento nelle landing
Posizionare `<PageBreadcrumb>` all'interno della sezione Hero di ciascuna landing, sopra l'H1, in linea con il pattern già usato negli articoli. Per le landing con hero scura usare `variant="light"`, per pagine legali (privacy/cookie/contatti se hanno hero chiara) usare `variant="dark"`.

### Niente impatto su
- `src/components/ui/breadcrumb.tsx` (shadcn primitive, resta intoccato)
- Schema globale `ProfessionalService` in `App.tsx`
- Altri JSON-LD esistenti (Article, FAQPage, CollectionPage, ecc.)

## Risultato atteso
- Coerenza UI ↔ dati strutturati su tutte le pagine indicizzabili
- Migliore navigazione utente sulle landing satellite
- Possibile miglioramento dei rich result Google (breadcrumb visibili in SERP) per le landing locali e di servizio, oltre che per il blog
- Codice DRY: un solo componente sorgente per breadcrumb visivo + schema
