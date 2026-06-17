## Obiettivo
Migliorare `/siti-web-aziendali` per AEO (citabilità da ChatGPT/Perplexity/Google AI Overviews) e GEO (copertura Veneto + Italia), in linea con il nuovo H1 e copy.

## Interventi

### 1. Meta tag allineati al nuovo posizionamento
- `<title>`: "Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab"
- `meta description` + `og:*` + `twitter:*` coerenti, mantenendo il prezzo "da 899€" (trigger AEO).
- `canonical` invariato.

### 2. Nuova sezione "Cos'è un sito web aziendale" (definizione AEO)
Paragrafo 40–60 parole in apertura, che inizia con *"Un sito web aziendale è…"*. Formato preferito dai LLM per citazioni dirette.

### 3. FAQ riscritte answer-first + 3 nuove
- Riscrivere le 4 risposte esistenti in stile "risposta-prima-frase".
- Aggiungere:
  - "Quanto costa un sito web aziendale in Veneto?" (include range 899€–1.299€+)
  - "Quali tipi di siti web aziendali esistono?" (vetrina / multipagina / corporate / e-commerce)
  - "Realizzate siti web aziendali anche fuori Padova?" (elenco province venete + Italia)
- Sincronizzare `FAQPage` JSON-LD.

### 4. Tabella comparativa "Sito vetrina vs aziendale vs corporate"
`<table>` semantica con 3 colonne e 4 righe (pagine, obiettivo, costo indicativo, ideale per). Le tabelle sono uno dei formati più citati dagli AI engine.

### 5. Sezione "Come realizziamo un sito web aziendale" (processo)
5 step numerati: Analisi → Strategia → Design → Sviluppo → Lancio & SEO. JSON-LD `HowTo` annesso.

### 6. Schema markup arricchito
- Aggiungere `LocalBusiness` con:
  - `areaServed`: Padova, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno + "Italia"
  - `priceRange`: **"€899+"** (formato valido e più informativo del classico "€€", come hai suggerito)
  - `geo` (Legnaro, PD)
  - riferimenti `@id` a Organization globale
- Estendere `Service.offers` in `AggregateOffer` con `lowPrice: "899"` / `highPrice: "1299"` / `priceCurrency: "EUR"`.
- Aggiungere `SpeakableSpecification` sui paragrafi-risposta (definizione + FAQ) per ricerca vocale/AI.
- Mantenere `BreadcrumbList` esistente.

### 7. Copertura GEO testuale
- 1 paragrafo nella sezione "Siti multipagina e strutturati" con menzione esplicita delle province venete (no keyword stuffing).
- Microcopy "Aziende clienti in Veneto e in tutta Italia" sopra il form.

### 8. Interlinking semantico
- Link contestuale a `/realizzazione-siti-web-padova` dal blocco GEO.
- Link a `/faq-realizzazione-siti-web` sotto le FAQ.

## Dettagli tecnici
- File unico: `src/pages/SitiWebAziendali.tsx`.
- Nessuna nuova immagine, nessuna modifica a routing / sitemap / robots / `index.html`.
- Nuovi blocchi JSON-LD inseriti dentro `<Helmet>` come ulteriori `<script type="application/ld+json">`.

## Fuori scope
Generazione OG image, modifiche al pricing reale, nuove pagine satellite per città venete (eventuale fase 2).