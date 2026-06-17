## Obiettivo
Rendere `/realizzazione-siti-web-padova` più forte su **AEO** (risposte dirette in Google AI Overviews, ChatGPT, Perplexity) e **GEO** (rilevanza geografica su Padova e provincia), allineando lo stile a quanto già fatto su `/siti-web-aziendali`.

## Modifiche (solo `src/pages/SitiWebPadova.tsx`)

### 1. Meta & Title
- `<title>`: "Realizzazione Siti Web a Padova e Provincia | da 199€ | 4 Web Lab"
- `meta description`: rinforzo con "Padova e provincia", "preventivo gratuito" e leva prezzo "da 199€" mantenuta. Aggiornare anche `og:*` e `twitter:*` coerenti.
- `canonical` invariato.

### 2. Sezione "Cos'è un sito web professionale a Padova" (definizione AEO)
Nuovo blocco breve (40–60 parole) subito dopo l'Hero, con class `aeo-definition`. Definizione netta e citabile da LLM ("Un sito web professionale a Padova è…"). Posizionata sopra la sezione "Perché scegliere…".

### 3. Copertura GEO testuale
- Citazione esplicita (in modo naturale, no keyword stuffing) dei principali comuni della provincia: Padova, Abano Terme, Albignasego, Selvazzano, Vigonza, Cadoneghe, Rubano, Legnaro, Este, Monselice, Cittadella, Piove di Sacco.
- Microcopy "Sede operativa a Legnaro (PD) – serviamo Padova e tutta la provincia" sotto il form contatti.

### 4. Tabella comparativa "Negozio vs Professionista vs Azienda" (a Padova)
Tabella responsive in nuova sezione tra "Cosa realizziamo" e "Metodo": 3 colonne (target tipico, pagine, range prezzo da 199€/549€/899€+). Formato spesso citato da AI Overviews/Perplexity.

### 5. FAQ "answer-first" (nuova sezione + JSON-LD FAQPage)
Nuova sezione FAQ con accordion (riusando il pattern di SitiWebAziendali se disponibile, altrimenti `<details>` semantici) con risposte direct-answer. 6 domande:
1. Quanto costa realizzare un sito web a Padova? (risposta: da 199€, range 199–1.299€+)
2. In quanto tempo viene realizzato un sito a Padova?
3. Lavorate solo a Padova città o anche in provincia?
4. È possibile incontrarvi di persona a Padova?
5. Offrite SEO locale per posizionarsi su Padova?
6. Realizzate siti anche per clienti fuori Padova?

Ogni `<p>` di risposta riceve la class `aeo-faq-answer` per la `SpeakableSpecification`.

### 6. Schema markup arricchito (JSON-LD `@graph`)
Sostituire i due blocchi attuali con un unico `@graph` contenente:
- **LocalBusiness** (`@id` `#business`): nome 4 Web Lab, indirizzo sede Legnaro (PD), `geo` (lat/lng Legnaro), `telephone` +39 351 465 6042, `priceRange` "€199+", `areaServed` con tutti i comuni elencati al punto 3 + "Provincia di Padova", `url`, `sameAs` se disponibili.
- **Service** (esistente, esteso): `AggregateOffer` con `lowPrice: "199"`, `highPrice: "1299"`, `priceCurrency: "EUR"`, `offerCount`.
- **FAQPage** con le 6 Q&A del punto 5.
- **SpeakableSpecification** su `.aeo-definition` e `.aeo-faq-answer`.
- **BreadcrumbList** invariata.

### 7. Interlinking semantico aggiuntivo
- Link contestuale a `/siti-web-aziendali`, `/realizzazione-siti-web-per-professionisti`, `/siti-web-per-negozi` (già presenti, da preservare) e nuovo link a `/faq-realizzazione-siti-web` dalla nuova FAQ ("Vedi tutte le FAQ").

## Fuori scopo
- Nessuna modifica a `index.html`, `robots.txt`, `sitemap.xml`, routing, asset/immagini.
- Nessuna modifica ad altre pagine.

## Conferma
Procedo con tutti i punti 1–7, oppure indica quali escludere/posticipare (es. tabella comparativa o sezione FAQ).