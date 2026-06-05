## Schema markup polish — 8 correzioni di coerenza

Tutti gli schemi principali esistono già. Queste correzioni eliminano incoerenze residue che riducono la chiarezza del knowledge graph per Google.

### 1. `areaServed` incoerente — allinea tutto al GBP (Padova + Veneto)
Tre Service schema dichiarano `Country: IT`, contraddicendo il GBP e l'entità `#business` (che ora è Padova+Veneto). Realizzazioni include anche "Italia" di troppo.

- `src/pages/SitiWebNegozi.tsx` L84 → `[City Padova, AdministrativeArea Veneto]`
- `src/pages/SitiWebAziendali.tsx` L111 → idem
- `src/pages/SitiWebProfessionisti.tsx` L66 → idem
- `src/pages/Realizzazioni.tsx` L176-180 → rimuovere `{ "@type": "Country", name: "Italia" }`, restano Padova + Veneto

### 2. Service schema — aggiungi `isPartOf` + `inLanguage` + `@id`
Le 4 landing service-page non si legano al WebSite globale. Aggiungere su ciascuno dei Service schema (Negozi, Aziendali, Professionisti, Padova):
```js
"@id": "<url-pagina>#service",
inLanguage: "it-IT",
isPartOf: { "@id": "https://4weblab.it/#website" },
```

### 3. Service "Negozi/Professionisti/Aziendali" — usa `priceSpecification` invece di `price` secco
Il `price: "199"` da solo viene letto da Google come prezzo fisso, mentre la realtà è "da 199€". Sostituire con `priceSpecification: { minPrice, priceCurrency }` (stesso pattern già usato in SitiWebPadova e App.tsx).

### 4. Demo pages — uniformare `isPartOf` al `@id` globale
- `DemoMetalmeccanica.tsx` L1046, `DemoStudioDentisticoPremium.tsx`, `DemoFotovoltaico.tsx`: oggi ridefiniscono inline `isPartOf: { "@type": "WebSite", name: "4 Web Lab", url: "https://4weblab.it/" }`. Sostituire con `isPartOf: { "@id": "https://4weblab.it/#website" }` (come già fa FlowerAtelier e BoutiqueBB).
- Uniformare `inLanguage: "it"` → `"it-IT"` su Metalmeccanica/Dentistico/Fotovoltaico (FlowerAtelier già usa it-IT).

### 5. ContactPage — aggiungi `isPartOf` + breadcrumb reference
`src/pages/Contact.tsx` L65-72: il ContactPage non si lega al WebSite globale. Aggiungere `isPartOf: { "@id": "https://4weblab.it/#website" }` e `inLanguage: "it-IT"`.

### 6. CollectionPage Blog — aggiungi `isPartOf`
`src/pages/Blog.tsx` L121-154: aggiungere `isPartOf: { "@id": "https://4weblab.it/#website" }` e `publisher: { "@id": "https://4weblab.it/#business" }` a livello CollectionPage (oggi è solo nei singoli BlogPosting).

### 7. FAQPage — aggiungi `isPartOf` su FaqSitiWeb
`src/pages/FaqSitiWeb.tsx` `faqSchema`: aggiungere `inLanguage: "it-IT"` e `isPartOf: { "@id": "https://4weblab.it/#website" }`.

### 8. Index FAQPage + BreadcrumbList minimale
`src/pages/Index.tsx`: la BreadcrumbList con solo "Home" (L123-136) è inutile/rumorosa per Google. Rimuoverla (la home non ha breadcrumb visibile). Aggiungere invece `inLanguage: "it-IT"` al FAQPage L89-120.

### Cosa NON tocco
- Articoli blog (BlogPosting già completi: headline, author, publisher, dates, mainEntityOfPage, articleSection, image, inLanguage)
- Hero/copy/layout di qualunque pagina
- Schema della home `ProfessionalService` con aggregateRating/review (già conforme)
- PageBreadcrumb component (BreadcrumbList JSON-LD già emesso correttamente)
- `vatID`, `foundingDate: 2026`, `priceRange: €€` (dati cliente, non bug schema)

### Risultato atteso
- Knowledge graph completamente connesso (#website ↔ #business ↔ tutte le pagine via isPartOf)
- Zero contraddizioni areaServed GBP↔schema
- Service prezzi "a partire da" interpretati correttamente
- Lingua uniforme it-IT ovunque

Stima impatto: medio. Non sblocca nuove rich results ma rinforza E-E-A-T e coerenza entità — segnale importante per AI Overviews / SGE.
