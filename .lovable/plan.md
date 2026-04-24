

# Punto 3: UX e navigazione interna sui singoli articoli + date scaglionate

Implementazione di breadcrumb visibile, meta articolo, articoli correlati e CTA uniformata. In aggiunta, ridistribuzione delle date di pubblicazione su tutti gli articoli in ordine cronologico crescente tra il 1° marzo e il 20 aprile 2026.

## Date assegnate (cronologia incrementale)

Ordine scelto in base alla logica editoriale (dal foundational al più recente):

| Articolo | datePublished | dateModified |
|---|---|---|
| Quanto costa un sito web | 2026-03-04 | 2026-03-04 |
| Sito web o social | 2026-03-15 | 2026-03-15 |
| Sito web obsoleto | 2026-03-26 | 2026-03-26 |
| Siti web con AI | 2026-04-08 | 2026-04-08 |
| GDPR siti web | 2026-04-20 | 2026-04-20 |

Le stesse date verranno propagate in:
- `<meta property="article:published_time">` e `article:modified_time`
- JSON-LD `BlogPosting` (`datePublished`, `dateModified`)
- Riga meta visibile sotto l'H1
- `public/sitemap.xml` (`<lastmod>` di ciascuna URL articolo)
- `src/data/blogArticles.ts` (fonte unica)

## Cosa cambia (UX)

### 1. Breadcrumb visibile
Nuovo `src/components/BlogBreadcrumb.tsx` con `Home › Blog › Titolo`, posizionato in cima all'hero sopra il pill "Blog 4 Web Lab", stile chiaro su sfondo scuro (`text-primary-foreground/70`, hover `/100`).

### 2. Meta visibili sotto l'H1
Riga discreta con: data pubblicazione (formato italiano "4 marzo 2026") · tempo di lettura calcolato (parole ÷ 200, `Math.ceil`). "Aggiornato il" mostrato solo se diverso.

### 3. Articoli correlati prima della CTA finale
Nuovo `src/components/RelatedArticles.tsx`: 2 card (immagine WebP lazy, titolo, excerpt breve, link "Leggi l'articolo →"), griglia 2 colonne desktop / 1 colonna mobile. Selezione tramite mappa statica `related: [slug, slug]` per ciascun articolo.

### 4. CTA finale uniformata
Tutti gli articoli usano "Richiedi una valutazione gratuita" (CTA standard del sito). Sottotitolo specifico per articolo invariato.

### 5. Fonte dati centralizzata
Nuovo `src/data/blogArticles.ts` con array di tutti gli articoli (slug, title, shortTitle, excerpt, image, datePublished, dateModified, category, related, fullText per reading time). Usato da `RelatedArticles`, dai 5 articoli e (opzionalmente) da `Blog.tsx`.

## File coinvolti

**Nuovi:**
- `src/data/blogArticles.ts`
- `src/components/BlogBreadcrumb.tsx`
- `src/components/RelatedArticles.tsx`

**Modificati:**
- `src/pages/BlogAiWebsiteArticle.tsx`
- `src/pages/BlogGdprArticle.tsx`
- `src/pages/BlogOutdatedWebsiteArticle.tsx`
- `src/pages/BlogSiteVsSocialArticle.tsx`
- `src/pages/BlogWebsiteCostArticle.tsx`
- `src/pages/Blog.tsx` (aggiornamento date nelle card e nello schema `CollectionPage`)
- `public/sitemap.xml` (allineamento `lastmod` alle nuove date)

## Cosa NON cambia

Layout articoli, hero, body, animazioni, header/footer, pagina indice (eccetto date e schema).

## Dettagli tecnici

**Reading time:** funzione `calcReadingTime(text: string)` in `blogArticles.ts`, basata su 200 wpm.

**Articoli correlati:** mappa statica deterministica in `blogArticles.ts`, no algoritmo runtime.

**Coerenza date:** unica fonte (`blogArticles.ts`) → propagata a UI, JSON-LD, meta OG, sitemap. Zero disallineamenti.

## Esito atteso

- Date realistiche e scaglionate → percezione di blog attivo nel tempo, non "tutto pubblicato lo stesso giorno".
- Breadcrumb visibile + reading time → migliore UX e CTR sui rich snippet.
- Articoli correlati → riduzione bounce rate, più pagine viste per sessione.
- CTA coerente con il resto del sito.

