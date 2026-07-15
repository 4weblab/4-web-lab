Piano di modifica per lo schema `LocalBusiness` sitewide in `index.html`.

## Modifiche richieste
1. **Aggiornare `priceRange`** da `"€€"` a `"199 - 1299+"`.
2. **Rimuovere i blocchi `address` e `geo`** (inclusi `PostalAddress` e `GeoCoordinates`).
3. **Aggiornare `hasOfferCatalog` / `PriceSpecification`** per allineare `minPrice` e `maxPrice` ai nuovi valori:
   - `minPrice`: `"199"`
   - `maxPrice`: `"1299+"`
   - `priceCurrency`: `"EUR"` (già presente, confermato)

## File coinvolto
- `index.html` — unico file che contiene lo schema `#business` sitewide con `priceRange`, `address` e `geo`.

## Verifica
- Validare la sintassi JSON-LD risultante.
- Eseguire la build per confermare che non ci siano errori.

## Nota
Le pagine di servizio (`SitiWebPadova.tsx`, `SitiWebAziendali.tsx`, `PubblicitaGoogleAds.tsx`) mantengono i propri `priceRange` specifici del servizio e non vengono toccati, coerentemente con la richiesta di modificare solo il JSON sitewide appena mostrato.