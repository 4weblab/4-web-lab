

# Punto 4: SEO on-page indice blog `/blog`

Ottimizzazione della pagina indice del blog per migliorarne il posizionamento organico e renderla competitiva su query informazionali.

## Cosa cambia

### 1. Meta tag ottimizzati
- **Title**: da `Blog siti web e SEO | 4 Web Lab` → `Blog siti web 2026: guide, costi e SEO | 4 Web Lab`
  - Include l'anno (freshness signal) e le query principali.
- **Meta description**: riscrittura più ricca di keyword e con call-to-action implicita.
  - Esempio: *"Guide pratiche 2026 su siti web, costi reali, GDPR, SEO e intelligenza artificiale. Consigli per aziende, professionisti e negozi firmati 4 Web Lab, agenzia web di Padova."*
- **Keywords meta** (opzionale, basso peso SEO ma innocuo).

### 2. Testo SEO sotto l'H1 (200-300 parole)
Aggiunta di un breve paragrafo introduttivo subito sotto l'H1 nell'hero, oppure (preferibile) come **sezione dedicata tra hero e griglia articoli**, con sfondo bianco/neutro per non spezzare il ritmo visivo.

Contenuto del testo:
- Cosa trovi nel blog (guide, casi pratici, costi, scelte tecniche).
- A chi si rivolge (aziende, professionisti, negozi, attività locali a Padova e in tutta Italia).
- Argomenti principali coperti (siti web, SEO locale, GDPR, AI, costi, noleggio).
- Tono coerente con il resto del sito: chiaro, diretto, professionale, no markettese.
- Include in modo naturale keyword: "siti web", "agenzia web Padova", "guide SEO", "costi sito web", "GDPR", "intelligenza artificiale".
- Chiusura con micro-CTA testuale verso `/contatti` (link inline, non bottone).

### 3. H2 della sezione articoli
- Da `I nostri articoli` → `Ultime guide e approfondimenti` (più keyword-rich).
- Sottotitolo arricchito con keyword secondarie.

### 4. Interlinking interno (in fondo alla pagina)
Aggiunta di una piccola sezione **"Esplora i nostri servizi"** sotto la griglia articoli, con 3-4 link testuali alle landing principali:
- Siti web aziendali
- Siti web per professionisti
- Quanto costa un sito web
- Realizzazione siti web Padova

Questo rinforza l'interlinking SEO e distribuisce link equity dalle pagine blog (che ricevono traffico informazionale) verso le landing transazionali.

### 5. Schema.org integrazione
- Aggiunta di `WebSite` con `SearchAction` (sitelinks searchbox) **solo se** vogliamo abilitare la searchbox nei risultati Google. Da valutare — di norma utile su siti con search interna, che non abbiamo. **Proposta: skip.**
- Aggiunta `description` arricchita nel `CollectionPage` esistente, allineata alla nuova meta description.

## File coinvolti

- `src/pages/Blog.tsx` — unico file modificato:
  - `<Helmet>`: aggiornamento title, description, keywords, JSON-LD.
  - Hero: H1 invariato, sottotitolo leggermente arricchito.
  - Nuova sezione SEO text tra hero e griglia articoli.
  - H2 sezione articoli aggiornato.
  - Nuova sezione interlinking finale prima del Footer.

## Cosa NON cambia

- Layout generale, spaziature, colori, animazioni: invariati.
- Le 5 card articolo: invariate.
- Header/Footer: invariati.
- Sitemap: già aggiornata al punto 5.

## Esito atteso

- Migliore ranking dell'indice `/blog` su query come "blog siti web 2026", "guide siti web aziendali", "blog SEO Padova".
- Più contesto semantico per Google → maggiore probabilità di passaggio di authority dagli articoli alla pagina indice e viceversa.
- Interlinking che porta traffico dal blog alle pagine commerciali.
- Nessun impatto su performance (testo statico, no nuovi asset).

## Domanda aperta

Vuoi che il **testo SEO introduttivo** sia:
- **A)** Una sezione dedicata visibile tra hero e griglia (consigliato — più impatto SEO e UX).
- **B)** Inserito direttamente nell'hero, espandendo il sottotitolo attuale (più compatto, meno spazio per keyword).

Se non specifichi, procedo con l'opzione **A**.

