## Obiettivo

Creare una pagina satellite verticale dedicata a **SEO, AEO e GEO**, posizionata come servizio commerciale di 4 Web Lab ma strutturata in formato AEO (Answer Engine Optimization) per essere citata da Google AI Overviews, ChatGPT, Perplexity, Gemini e Copilot.

## Routing & Header

- **Nuova route**: `/posizionamento-google-e-ai` (lazy-loaded in `src/App.tsx`).
- **Header globale** (`src/components/Header.tsx`): aggiungere voce `{ label: 'SEO & AI', href: '/posizionamento-google-e-ai' }` tra "Realizzazioni" e "Blog". Stesso comportamento dei link route esistenti (Link react-router, visibile sia desktop che mobile menu).
- **Footer** (`src/components/Footer.tsx`): aggiungere link nella sezione servizi/legal per rinforzare l'interlinking.

## Struttura pagina (AEO-first)

La pagina segue il pattern delle altre satellite (`SitiWebAziendali`, `SitiWebProfessionisti`): `Header satelliteMode={true}` + `PageBreadcrumb` + `<main>` + `Footer` + `WhatsAppButton` + `Helmet` con JSON-LD.

Sezioni in ordine:

1. **Hero** (H1 unico): "Posizionamento su Google e AI: SEO, AEO e GEO per la tua attività"  
   Sottotitolo che risponde subito alla domanda "cosa fa 4 Web Lab in ambito SEO/AEO/GEO". CTA primario "Richiedi una valutazione gratuita" (ancora al form) + CTA secondario WhatsApp.

2. **"In sintesi" (TL;DR AEO)**: box riassuntivo di 3-4 frasi dirette, pensato per essere estratto da LLM (chi siamo, cosa facciamo, dove operiamo, prezzo "da preventivo").

3. **Tre definizioni Q&A** (cuore AEO): tre blocchi separati con H2 come domanda esplicita:
   - "Cos'è la SEO (Search Engine Optimization)?"
   - "Cos'è l'AEO (Answer Engine Optimization)?"
   - "Cos'è la GEO (Generative Engine Optimization)?"  
   Ogni blocco: risposta in 1-2 frasi (≤300 caratteri) + paragrafo esteso + lista puntata "Cosa include".

4. **Differenze tra SEO, AEO e GEO**: tabella comparativa (target, segnali, formato contenuto, KPI). Ottima per featured snippet e citazione LLM.

5. **"Come lavoriamo" (servizio commerciale)**: 4-5 step del processo (audit, strategia keyword/entità, ottimizzazione on-page + structured data, contenuti AEO/GEO, monitoraggio). Tono concreto, senza prezzi.

6. **FAQ estesa** (8-10 domande) con `<Accordion>` shadcn, marcate anche nel JSON-LD `FAQPage`. Domande tipo: "Quanto tempo serve per vedere risultati?", "Lavorate anche fuori Padova?", "Includete la scrittura dei contenuti?", "Cos'è una entità nel contesto SEO?", "Come ottimizzate per ChatGPT/Perplexity?", "Serve un sito nuovo o ottimizzate quello esistente?", "Date garanzie di posizionamento?", "Quanto costa il servizio?".

7. **Interlinking** (sezione "Approfondisci"): grid di card con link verso:
   - Home `/`
   - `/siti-web-aziendali`
   - `/realizzazione-siti-web-per-professionisti`
   - `/siti-web-per-negozi`
   - `/realizzazione-siti-web-padova`
   - `/faq-realizzazione-siti-web`
   - `/blog` (e 2 articoli rilevanti: "perché il tuo sito non si trova su Google", "GDPR siti web 2026").

8. **Form richiesta informazioni**: riuso di `ContactFormWeb3Forms` con `id="contatti"` come ancora. Note GDPR Art. 6.1.b sotto submit (memory pattern).

9. **CTA finale** + WhatsApp + breadcrumb.

## SEO / AEO tecnico

- **`<Helmet>`** per-route:
  - `<title>` ≤60 char: "SEO, AEO e GEO: posizionamento su Google e AI | 4 Web Lab"
  - `<meta description>` ≤160 char focalizzata su servizio + Padova.
  - `<link rel="canonical" href="https://4weblab.it/posizionamento-google-e-ai" />`
  - OG/Twitter coerenti, no www.
- **JSON-LD** stackati:
  - `Service` (provider → `#business`, areaServed Padova/Veneto, serviceType "SEO, AEO, GEO").
  - `FAQPage` con tutte le Q&A della FAQ.
  - `BreadcrumbList` Home → SEO & AI.
  - `WebPage` con `isPartOf` → `#website` e `about` → entità SEO/AEO/GEO.
- **Sitemap** (`public/sitemap.xml`): aggiungere `<url>` per la nuova pagina con `<lastmod>2026-06-05</lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>0.8</priority>`. IndexNow notificherà Bing/Yandex al deploy.
- **llms.txt** (`public/llms.txt`): aggiungere riga con titolo + URL per favorire crawling LLM.
- **Semantica**: un solo H1, H2 per ogni domanda principale, microdata implicito tramite JSON-LD, alt text esplicito su eventuali immagini (WebP con width/height).

## Estetica

Coerente con visual-direction memory: sfondo white / light blue-grey, accenti navy + orange, card `rounded-xl`, soft shadow. Niente Framer Motion sull'H1 (LCP). Sezioni successive possono usare `AnimatedSection` esistente.

## File toccati

- **Nuovo**: `src/pages/PosizionamentoGoogleEAi.tsx`
- **Modificati**:
  - `src/App.tsx` (route lazy + import)
  - `src/components/Header.tsx` (nuova voce navItems)
  - `src/components/Footer.tsx` (link)
  - `public/sitemap.xml` (nuova `<url>` + bump lastmod home)
  - `public/llms.txt` (nuova riga)

## Memory update (post-implementazione)

Aggiungerò `mem://features/landing-pages/seo-aeo-geo-page` con H1, slug, struttura sezioni e JSON-LD usato, e aggiornerò l'index.