
## Problema

Tag meta duplicati nel `<head>` finale perché esistono in più fonti contemporaneamente:

- **`index.html`** statico: title, `description`, `og:type/url/title/description/image/locale`, `twitter:card/url/title/description/image`
- **`src/App.tsx`** `<Helmet>` globale: stessi tag (title, description, og:*, twitter:*)
- **`src/pages/*.tsx`** `<Helmet>` per-route: stessi tag con valori specifici della pagina

`react-helmet-async` deduplica tra i propri tag (per `name`/`property`), ma **non tocca** i tag statici già presenti in `index.html`. Quindi nel DOM finale ogni route ha 2 description, 2 og:title, ecc. → l'audit SEO segnala "more than one meta description".

## Soluzione

Regola: **un solo set di meta SEO per route, gestito dall'Helmet della pagina**.
`index.html` resta minimo: solo tag tecnici (charset, viewport, preload, font, favicon). Niente più SEO/social meta statici.

### Modifiche

1. **`index.html`** — rimuovere tutti i tag che vengono già emessi dai Helmet:
   - `<title>`
   - `<meta name="description">`
   - `<meta name="author">`
   - Tutti i `<meta property="og:*">`
   - Tutti i `<meta name="twitter:*">`
   
   Mantenere: charset, viewport, favicon, preload immagini Hero, preconnect fonts, preload Playfair, stylesheet fonts (no-script fallback).
   
   Trade-off accettato: i crawler social che non eseguono JS (alcuni bot vecchi) non vedranno preview ricche dal raw HTML. Tuttavia:
   - Tutte le route già emettono il set completo via Helmet
   - Googlebot/Bingbot/LinkedIn/Facebook moderni eseguono JS
   - Eliminare i duplicati è prioritario per evitare segnalazioni SEO e canonical/description ambigui

2. **`src/App.tsx`** — rimuovere dal `<Helmet>` globale tutti i meta SEO/social duplicati:
   - `<title>` + `<meta name="title">`
   - `<meta name="description">`
   - `<meta property="og:*">` (type, url, title, description, image, locale, site_name)
   - `<meta name="twitter:*">` (card, url, title, description, image, site)
   - `<meta name="author">`
   
   Mantenere nel Helmet globale solo:
   - `<meta name="robots" content="index, follow">` (utile come default ereditabile)
   - `<html lang="it">`
   - Il JSON-LD `ProfessionalService` globale (non duplicato, valido sitewide)

3. **Pagine**: nessuna modifica. Ogni route già emette il proprio set completo via Helmet.

## Verifica post-fix

- Aprire `view-source` (raw HTML) sulla home: deve esserci **0 meta description** statiche (verranno aggiunte solo dopo l'idratazione JS dal Helmet della pagina).
- Aprire DevTools → Elements → `<head>` su home, `/realizzazioni`, una demo: deve esserci **una sola** `<meta name="description">`, **un solo** `<title>`, **un solo** `<link rel="canonical">`, **un solo** set `og:*`/`twitter:*`.
- Confermare che i valori sono quelli specifici della route (non la home fallback).

## Rischi

- **Anteprime social no-JS**: i crawler più vecchi che non eseguono JS non vedranno og:image/title/description nel raw HTML. Accettabile: i crawler social moderni eseguono JS e l'audit SEO è più importante.
- **Flash di titolo vuoto**: nessuno, perché Helmet imposta il titolo prima del paint utile.
- Nessun altro side-effect: routing, performance, JSON-LD e canonical restano gestiti come oggi.
