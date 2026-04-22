
Obiettivo: eseguire un audit SEO completo del sito e correggere le lacune principali su meta tag, alt text, dati strutturati, canonical, sitemap e segnali social/technical SEO, senza alterare i contenuti delle pagine oltre al necessario per la SEO.

Interventi da eseguire

1. Allineare metadata pagina per pagina
- Verificare che ogni pagina indicizzabile abbia:
  - title univoco
  - meta description univoca
  - canonical coerente con la route reale
  - robots corretto
  - og:title, og:description, og:url, og:image
  - twitter:title, twitter:description, twitter:image, twitter:url
- Completare i tag mancanti nelle pagine che oggi hanno solo parte dei metadati:
  - `src/pages/Blog.tsx`
  - `src/pages/BlogAiWebsiteArticle.tsx`
  - `src/pages/BlogWebsiteCostArticle.tsx`
  - `src/pages/Contact.tsx`
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/CookiePolicy.tsx`
  - eventuali altre pagine indicizzabili prive di social meta completi
- Uniformare il fallback globale in `src/App.tsx` con eventuali tag utili mancanti, senza sovrascrivere i metadati specifici delle singole pagine.

2. Correggere canonical e SEO delle vecchie landing ora reindirizzate
- Le vecchie pagine legacy risultano ancora presenti nel codice con canonical propri:
  - `src/pages/CreareSitoConAI.tsx`
  - `src/pages/QuantoCostaSitoWeb.tsx`
- Dato che oggi le relative route fanno redirect verso gli articoli blog, evitare incoerenze SEO:
  - decidere se mantenerle solo come codice non raggiunto oppure de-ottimizzarle chiaramente
  - rimuovere il rischio di duplicazione dei segnali SEO con i nuovi articoli
- Verificare che sitemap e linking interno puntino solo agli URL finali.

3. Migliorare alt text e accessibilità semantica delle immagini
- Correggere immagini decorative/contenutistiche con `alt=""` non giustificato.
- Caso già individuato:
  - `src/components/UserRoutingSection.tsx` usa immagini-card cliccabili senza alt descrittivo
- Mantenere `alt=""` solo per immagini puramente decorative.
- Controllare anche hero, card blog, logo e immagini nelle landing per assicurare:
  - alt coerente con il contenuto
  - niente keyword stuffing
  - testo utile all’utente

4. Rafforzare i dati strutturati
- Mantenere il `ProfessionalService` globale.
- Completare i dati strutturati dove mancano o sono deboli:
  - articoli blog: `Article` più completo con headline, description, publisher, mainEntityOfPage, url, datePublished/dateModified, image
  - pagina blog indice: valutare `Blog` o `CollectionPage`
  - pagina contatti: valutare `ContactPage`
- Verificare che FAQ schema usi testo serializzabile correttamente e non contenuti React complessi dove possibile.

5. Sistemare sitemap e copertura indicizzabile
- Aggiornare `public/sitemap.xml` per includere tutte le pagine realmente indicizzabili, ad esempio:
  - `/blog`
  - `/contatti`
  - eventuali altre pagine principali mancanti
- Escludere URL legacy reindirizzati o non più destinati all’indicizzazione.
- Verificare coerenza tra sitemap, canonical e route effettive.

6. Rifinire SEO tecnico di base
- Aggiornare `index.html` se necessario per includere tag base mancanti lato social/fallback.
- Controllare presenza e coerenza di:
  - meta author
  - language
  - favicon/social preview fallback
- Verificare che `public/robots.txt` punti correttamente alla sitemap finale.
- Mantenere `noindex, nofollow` sulle demo e sulla 404.

7. Controllo qualità finale
- Fare un passaggio finale su tutte le pagine principali:
  - home
  - landing negozi/professionisti/aziendali/padova
  - faq
  - blog indice
  - articoli blog
  - contatti
  - privacy/cookie
- Confermare per ciascuna:
  - un solo H1
  - metadati univoci
  - canonical corretto
  - alt text presenti dove servono
  - structured data coerente
  - sitemap allineata

Esito atteso
- Nessuna pagina importante resta con metadata incompleti o generici.
- Gli articoli blog hanno social meta e schema completi.
- Nessun URL legacy manda segnali SEO in conflitto con i nuovi articoli.
- Le immagini cliccabili e contenutistiche hanno alt text corretti.
- Sitemap e robots risultano coerenti con la struttura attuale del sito.

Dettagli tecnici
- File sicuramente coinvolti:
  - `src/App.tsx`
  - `index.html`
  - `public/sitemap.xml`
  - `public/robots.txt` (solo se serve)
  - `src/components/UserRoutingSection.tsx`
  - `src/pages/Blog.tsx`
  - `src/pages/BlogAiWebsiteArticle.tsx`
  - `src/pages/BlogWebsiteCostArticle.tsx`
  - `src/pages/Contact.tsx`
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/CookiePolicy.tsx`
  - possibile pulizia/coerenza in `src/pages/CreareSitoConAI.tsx` e `src/pages/QuantoCostaSitoWeb.tsx`

Note emerse dall’audit
- `Blog.tsx`, `BlogAiWebsiteArticle.tsx` e `BlogWebsiteCostArticle.tsx` non mostrano attualmente meta Twitter completi.
- `Contact.tsx` ha canonical e Open Graph parziali ma non completi.
- `PrivacyPolicy.tsx` e `CookiePolicy.tsx` hanno Open Graph ma non Twitter meta.
- `UserRoutingSection.tsx` ha immagini-card con `alt=""` pur essendo link tematici.
- `sitemap.xml` al momento non include almeno `/blog` e `/contatti`.
- Esistono ancora file legacy (`CreareSitoConAI.tsx`, `QuantoCostaSitoWeb.tsx`) con SEO autonoma, mentre le route pubbliche corrispondenti sono già reindirizzate ai nuovi articoli.
