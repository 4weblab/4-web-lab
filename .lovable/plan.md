Attualmente l'attività è identificata in modo non omogeneo nei dati strutturati:

- `index.html`: `@type` `Organization`, `@id` `https://4weblab.it/#business`
- `src/App.tsx`: `@type` `ProfessionalService`, `@id` `https://4weblab.it/#business`
- `src/pages/Index.tsx`: `@type` `ProfessionalService`, `@id` `https://4weblab.it/#business` (con recensioni)
- `src/pages/SitiWebPadova.tsx`: `@type` `LocalBusiness`, `@id` `https://4weblab.it/#business`
- `src/pages/SitiWebAziendali.tsx`: `@type` `["LocalBusiness","ProfessionalService"]`, `@id` `https://4weblab.it/#business`
- `src/pages/PubblicitaGoogleAds.tsx`: `@type` `["LocalBusiness","ProfessionalService"]`, `@id` `https://4weblab.it/#business`

Nessuno di questi schema usa il tipo schema.org `InternetMarketingService`, che corrisponde alla categoria Google Business Profile "Servizio di marketing su Internet". Inoltre lo stesso `@id` `#business` viene ridefinito con tipi diversi, il che può frammentare l'entità agli occhi di Google.

### Proposta

1. **Tipo canonico per `#business`**
   Impostare l'entità principale `#business` come `LocalBusiness` con `additionalType: "https://schema.org/InternetMarketingService"`.
   - `LocalBusiness` è sottoclasse di `Organization`, quindi rimane valida come `publisher`/`author`/`copyrightHolder` sui `CreativeWork`.
   - Supporta NAP, geo coordinate, `openingHoursSpecification` e `priceRange`.
   - `additionalType` comunica a Google la categoria GBP senza rompere i riferimenti esistenti.

2. **Aggiornare le definizioni globali**
   - `src/App.tsx`: cambiare `@type` da `ProfessionalService` a `LocalBusiness` e aggiungere `additionalType`.
   - `src/pages/Index.tsx`: allineare il `ProfessionalService` con recensioni allo stesso `LocalBusiness` + `additionalType`.
   - `index.html`: allineare lo schema statico a `LocalBusiness` + `additionalType` (oppure, se si preferisce un'entità brand separata, lasciarlo come `Organization` con `@id` `#organization` e collegarlo a `#business` tramite `parentOrganization`).

3. **Risolvere le ridefinizioni di `#business` nelle pagine interne**
   - `SitiWebPadova.tsx`, `SitiWebAziendali.tsx`, `PubblicitaGoogleAds.tsx`: spostare lo schema locale su un `@id` diverso (es. `https://4weblab.it/#localbusiness`) e collegarlo a `#business` tramite `parentOrganization` o `branchOf`. Mantenere `provider: { "@id": "https://4weblab.it/#business" }` per il servizio.

4. **Affinare il copy semantico**
   - Aggiornare `description` e `knowsAbout` per includere "servizio di marketing su Internet" e termini correlati (SEO, Google Ads, web marketing).
   - Verificare che NAP, `sameAs` e orari siano identici a quelli del profilo Google Business.

5. **Validazione**
   - Build del progetto.
   - Verifica che non ci siano errori JSON-LD (virgole trailing, ID duplicati).
   - Eventuale test con Rich Results Test / Schema Markup Validator su una pagina di esempio.

### Note tecniche

- Non è necessario modificare i riferimenti `{ "@id": "https://4weblab.it/#business" }` nelle altre pagine, perché `LocalBusiness` eredita da `Organization`.
- Se si preferisce un'entità brand separata, si può tenere `index.html` come `Organization` con `@id` `#organization` e usare `parentOrganization` su `#business`.