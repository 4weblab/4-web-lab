

# Ottimizzazione SEO Blog: Schema, Meta e Sitemap

Implementazione dei punti 1, 2 e 5 per migliorare l'indicizzazione e la presentazione del blog nei risultati di ricerca.

## 1. Schema.org BlogPosting sui singoli articoli

Aggiornamento dello JSON-LD in tutti i 5 articoli del blog:
- `src/pages/BlogAiWebsiteArticle.tsx`
- `src/pages/BlogGdprArticle.tsx`
- `src/pages/BlogOutdatedWebsiteArticle.tsx`
- `src/pages/BlogSiteVsSocialArticle.tsx`
- `src/pages/BlogWebsiteCostArticle.tsx`

Modifiche per ciascun articolo:
- `@type`: da `Article` → `BlogPosting`
- `author`: passa a `Person` ("Carlo Fullin") con `url` verso la home `https://4weblab.it/`
- `publisher`: resta `Organization` "4 Web Lab" con logo
- `image`: usa l'immagine di copertina specifica dell'articolo (URL assoluto verso l'asset importato)
- `mainEntityOfPage`: aggiunto con URL canonico dell'articolo
- `inLanguage`: `"it-IT"`
- `articleSection`: categoria (es. "Guide siti web", "Privacy & GDPR", "Costi", "AI", "Strategia digitale")
- `datePublished` e `dateModified`: già presenti, verifica/uniformazione

Inoltre, su ogni articolo viene aggiunto un secondo blocco JSON-LD `BreadcrumbList`:
```text
Home → Blog → Titolo articolo
```

## 2. Schema.org indice blog + Open Graph specifici

**Indice `/blog` (`src/pages/Blog.tsx`)**
- Arricchimento di ogni voce di `blogPost` con: `image` (immagine specifica), `datePublished`, `author` (Person)
- Aggiunta blocco `BreadcrumbList` (Home → Blog)

**Open Graph e meta articolo per ogni articolo**
- `og:image`: sostituire `og-image.jpg` generica con l'immagine di copertina specifica dell'articolo (URL assoluto)
- `og:type`: da `website` → `article`
- Nuovi meta: `article:published_time`, `article:modified_time`, `article:author`, `article:section`
- `twitter:image`: allineato all'immagine specifica
- Verifica `canonical` su ogni articolo (già presenti, controllo correttezza)

## 3. Sitemap aggiornata

`public/sitemap.xml`:
- Aggiunta voce mancante: `/blog/sito-web-obsoleto-...` (già presente, verificare)
- Aggiunta voci pagine satellite mancanti se necessarie
- Verifica che tutte le 5 URL articoli + `/blog` abbiano `lastmod` aggiornato e `priority` 0.7-0.8 (già impostati, controllo)
- Allineamento `lastmod` alla data di pubblicazione/aggiornamento dichiarata negli schema

## Dettagli tecnici

**Pattern condiviso:** ogni articolo importa già la propria immagine come modulo Vite (es. `import blogGdprPrivacy from "@/assets/..."`). Per JSON-LD e OG serve un URL assoluto: si concatena l'asset importato con il dominio (es. `https://4weblab.it${blogGdprPrivacy}`) — Vite restituisce un path con hash, valido in produzione.

**Autore:** "Carlo Fullin" come `Person`, con `url: "https://4weblab.it/"` (in assenza di pagina autore dedicata, fuori scope per ora).

**Articoli e categorie suggerite:**
- AI Website → "Tecnologia & AI"
- GDPR → "Privacy & Compliance"
- Outdated Website → "Strategia digitale"
- Site vs Social → "Strategia digitale"
- Website Cost → "Guide & Costi"

**Nessuna modifica visiva**: tutto l'intervento è su `<Helmet>` e JSON-LD, l'aspetto del blog rimane invariato. UX (breadcrumb visibile, related articles, reading time) e testo SEO sull'indice restano fuori scope e verranno discussi nei punti 3 e 4 successivamente.

## Esito atteso

- Rich results idonei come `BlogPosting` (eligibilità per Google Discover e card articolo).
- Anteprime social con immagine corretta per ogni articolo (LinkedIn, Facebook, X, WhatsApp).
- Migliore E-E-A-T grazie ad autore Persona dichiarato.
- Breadcrumb nei risultati Google.
- Sitemap pulita e coerente con i metadati.

