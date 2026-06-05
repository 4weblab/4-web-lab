## Obiettivo
Rendere tutto il sito AEO/GEO-friendly con soli interventi additivi (JSON-LD, meta, file di crawler). Nessuna modifica a struttura, layout, copy o immagini.

## Interventi

### 1. JSON-LD sitewide in `index.html`
- Aggiungere `Organization` (logo, contatti, `sameAs`, areaServed) e `WebSite` (con `potentialAction` SearchAction simbolica). Diventa la base entità per tutti i LLM.
- Verificare e mantenere i JSON-LD già presenti.

### 2. Meta robots esteso in `index.html`
Sostituire `<meta name="robots" content="index, follow">` con:
`<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">`
→ permette ad AI Overviews / featured snippet di usare estratti più lunghi.

### 3. `BreadcrumbList` JSON-LD su tutte le pagine satellite e blog
Aggiunta di un blocco `<script type="application/ld+json">` dentro `<Helmet>` esistente, in:
- `SitiWebAziendali`, `SitiWebProfessionisti`, `SitiWebNegozi`, `SitiWebPadova`, `FaqSitiWeb`
- `Realizzazioni` + tutte le demo
- Tutti gli articoli del blog
- `Contact`, `PrivacyPolicy`, `CookiePolicy` (BreadcrumbList minimo)

### 4. `Speakable` schema sulle FAQ esistenti
Aggiungere `speakable` al JSON-LD `FAQPage` già presente in `FaqSitiWeb` e `PosizionamentoGoogleEAi`.

### 5. `robots.txt`: esplicitare crawler AI
Aggiungere blocchi `User-agent:` espliciti con `Allow: /` per:
GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended, OAI-SearchBot, Bytespider, Amazonbot.
Mantenere intatti i blocchi esistenti.

### 6. `public/llms-full.txt`
Nuovo file companion di `llms.txt` con descrizioni più estese di servizi, pacchetti, prezzi, FAQ chiave e dati di contatto. Solo metadata + sintesi (no copy delle pagine).

### 7. `Article` JSON-LD sugli articoli blog
Verifica e, dove mancante, aggiunta di `Article` con `headline`, `author`, `datePublished`, `dateModified`, `image`, `publisher` (Organization riferimento).

## File toccati
- `index.html`
- `public/robots.txt`
- `public/llms-full.txt` (nuovo)
- Tutte le pagine `src/pages/*.tsx` listate sopra (solo aggiunta di blocchi `<script>` dentro `<Helmet>` esistenti)

## Cosa NON tocchiamo
- Copy, H1/H2, struttura DOM, layout, design, immagini, componenti UI
- `sitemap.xml` (resta come è)
- `llms.txt` (resta come è)

## Impatto
- Zero modifiche visive.
- Zero impatto su performance (gli script JSON-LD non bloccano il rendering).
- Beneficio: ogni pagina diventa interpretabile dai motori di risposta e dai LLM con segnali entità, breadcrumb e snippet espliciti.
