

# Nuovo articolo blog: "Perché il tuo sito non si trova su Google"

Creazione del 6° articolo del blog seguendo il template consolidato e aggiornamento di tutti i punti di registrazione necessari.

## Contenuti dell'articolo

- **Slug**: `perche-il-tuo-sito-non-si-trova-su-google`
- **URL**: `/blog/perche-il-tuo-sito-non-si-trova-su-google`
- **H1**: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)"
- **Meta title**: "Perché il tuo sito non si trova su Google (soluzioni 2026)"
- **Meta description**: "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026."
- **Categoria**: "SEO & Visibilità" (nuova, coerente col tema)
- **Data pubblicazione**: `2026-04-24` (oggi, coerente con la cronologia esistente che termina al 20 aprile)
- **Tempo di lettura**: calcolato dinamicamente (~600 parole → 3 min)

## Struttura della pagina

Stesso template di `BlogOutdatedWebsiteArticle.tsx`:
- Hero con breadcrumb visibile, pill "Blog 4 Web Lab", H1, riga meta (data + reading time).
- Box intro con i 5 paragrafi forniti.
- Sezioni body (6 H2 + conclusione) ciascuna in card con divisore arancione.
- `<RelatedArticles />` prima della CTA.
- CTA finale uniformata con copy standard del sito: titolo "Vuoi capire perché il tuo sito non compare su Google?", testo fornito dal cliente, **bottone "Richiedi una valutazione gratuita"** (CTA standard di sito, sostituisce "Richiedi una consulenza" come da memory `lead-generation-strategy`) → `/contatti`.

### Juice link interni inseriti in modo naturale nei paragrafi
- Nella sezione "Hai un sito ma non compare su Google" → link a `/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026`.
- Nella sezione "Le persone cercano servizi…" → link a `/realizzazione-siti-web-padova` come esempio di posizionamento locale.
- Nella sezione "Un sito fatto da solo…" → link a `/blog/siti-web-creati-con-intelligenza-artificiale`.
- Nella sezione "Se il sito è lento…" → link a `/quanto-costa-sito-web` collegato a "investire in un sito ben fatto".

## Asset immagine

Nuovo asset `src/assets/blog-sito-non-trovato-google.jpg` (formato JPG coerente con gli altri asset blog, già usati così in `blogArticles.ts`). Generato come immagine editoriale: laptop con risultati Google, tonalità coerenti col blog (blu/grigio), nessun testo sovraimposto. Dimensioni 1200×750.

## File coinvolti

**Nuovi:**
- `src/pages/BlogNotFoundOnGoogleArticle.tsx`
- `src/assets/blog-sito-non-trovato-google.jpg`

**Modificati:**
- `src/data/blogArticles.ts` — nuovo oggetto in `blogArticles[]` + aggiornamento mappe `related` di altri articoli (aggiungo questo slug come correlato a "Sito obsoleto" e "Quanto costa", che sono i due tematicamente più affini).
- `src/App.tsx` — import lazy + nuova `<Route>`.
- `src/pages/Blog.tsx` — nuova card nell'array `articles` (prima posizione: più recente) + propagazione automatica nello schema `CollectionPage`.
- `public/sitemap.xml` — nuova `<url>` con `lastmod` 2026-04-24 e `priority` 0.8.

## Schema.org e meta

- JSON-LD `BlogPosting` completo (autore Carlo Fullin, publisher 4 Web Lab, image, datePublished/Modified, mainEntityOfPage).
- JSON-LD `BreadcrumbList`.
- Meta OG/Twitter con immagine dedicata.
- `<link rel="canonical">` esplicito.

## Esito atteso

Articolo pubblicato e indicizzabile, registrato in tutti i punti del sito (data file, routing, indice blog, sitemap, schema). Cronologia editoriale aggiornata al 24 aprile 2026. Interlinking che spinge traffico verso 3 landing/articoli strategici.

