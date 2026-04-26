## Diagnosi del warning "URL duplicato"

Ho fatto l'audit di tutti i 16 file con JSON-LD. Il warning di Google **non** dipende da un duplicato all'interno del blocco globale di `App.tsx`, ma dal fatto che su **alcune pagine vengono iniettate due entità che descrivono lo stesso business** (ProfessionalService/Organization), ognuna con un `url` diverso. Google le interpreta come "stesso ente con URL discordanti".

### Pagine con conflitto

| Pagina | Problema |
|---|---|
| `/realizzazione-siti-web-padova` | Global `ProfessionalService` (url `https://4weblab.it/`) + locale `ProfessionalService` (url `.../realizzazione-siti-web-padova`) + `provider.url: https://4weblab.it` (senza slash) |
| `/realizzazione-siti-web-per-professionisti` | Stesso schema della Padova page, con url `.../realizzazione-siti-web-per-professionisti` |
| `/quanto-costa-sito-web` | Global `ProfessionalService` + locale `Organization` (url `https://4weblab.it`) → due entità business diverse per la stessa azienda |
| `/contatti` | Global `ProfessionalService` + `ContactPage.mainEntity` `Organization` (url `https://4weblab.it/`) → seconda entità business |
| Articoli blog (×6) e `/blog` | `BlogPosting/CollectionPage` con `publisher: Organization` (senza url o con url home) → duplica l'entità business globale |

Le pagine con solo `FAQPage` (Negozi, Aziendali, CreareSitoConAI, FaqSitiWeb) **non hanno conflitti**.

## Strategia di fix

Adotto il pattern raccomandato da schema.org: **una sola entità "business" canonica** definita in `App.tsx` con `@id: https://4weblab.it/#business`, e tutte le altre entità nelle pagine la **referenziano** invece di ridefinirla.

### Regola generale

- Entità business globale (in `App.tsx`): unica fonte di verità, mantiene `@id` e `url`.
- Ogni `provider`, `publisher`, `mainEntity` business nelle pagine → diventa `{ "@id": "https://4weblab.it/#business" }` (riferimento, non duplicato).
- Le entità "pagina-specifiche" (`ProfessionalService` di Padova/Professionisti) → vengono **rimosse** perché il global già copre il business; al loro posto, se serve marcare il servizio specifico, useremo un `Service` con `provider: { "@id": "https://4weblab.it/#business" }` (entità diversa, no conflitto con ProfessionalService globale).

### Modifiche file per file

**1. `src/pages/SitiWebPadova.tsx`** (righe 38-47)
Sostituire l'attuale `ProfessionalService` con un `Service` che referenzia il business:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Realizzazione Siti Web a Padova",
  "description": "Agenzia web a Padova: realizziamo siti professionali per negozi, studi e aziende del territorio con SEO locale e assistenza dedicata.",
  "serviceType": "Web Design",
  "areaServed": { "@type": "City", "name": "Padova", "containedInPlace": { "@type": "Country", "name": "IT" } },
  "url": "https://4weblab.it/realizzazione-siti-web-padova",
  "provider": { "@id": "https://4weblab.it/#business" }
}
```

**2. `src/pages/SitiWebProfessionisti.tsx`** (righe 57-69)
Stesso pattern: `Service` invece di `ProfessionalService`, provider come riferimento `@id`.

**3. `src/pages/QuantoCostaSitoWeb.tsx`** (righe 54-60)
Rimuovere completamente il blocco `Organization` separato. Il `FAQPage` rimane invariato. Il business è già coperto dal global.

**4. `src/pages/Contact.tsx`** (righe 63-78)
Cambiare `mainEntity` in riferimento:
```json
"mainEntity": { "@id": "https://4weblab.it/#business" }
```

**5. Articoli blog (×6) + `Blog.tsx`**
Sostituire ogni `publisher: { "@type": "Organization", "name": "4 Web Lab", "logo": {...} }` con:
```json
"publisher": { "@id": "https://4weblab.it/#business" }
```
File coinvolti: `BlogAiWebsiteArticle.tsx`, `BlogWebsiteCostArticle.tsx`, `BlogSiteVsSocialArticle.tsx`, `BlogGdprArticle.tsx`, `BlogOutdatedWebsiteArticle.tsx`, `BlogNotFoundOnGoogleArticle.tsx`, `Blog.tsx`.

**6. `src/App.tsx`** — nessuna modifica
L'entità globale resta esattamente com'è (con `@id` + `url` + `address` + `openingHours` + `hasOfferCatalog`). È la fonte canonica.

## Validazione

Dopo le modifiche:
- Eseguo `tsc --noEmit` per verificare che i `JSON.stringify` restino validi.
- Suggerisco di ripassare le pagine modificate sul Rich Results Test di Google (`https://search.google.com/test/rich-results`) per confermare che il warning scompaia.

## Risultato atteso

- Una sola entità business per pagina → warning "URL duplicato" risolto su tutte le pagine.
- Articoli blog continuano a essere validi come `BlogPosting` con publisher correttamente collegato.
- Le pagine landing (Padova, Professionisti) mantengono il loro schema di servizio specifico, ma come `Service` (compatibile e non in conflitto col business globale).