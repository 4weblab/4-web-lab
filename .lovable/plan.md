## Obiettivo
Aggiornare il copy dell'unica `Offer` presente in `hasOfferCatalog` all'interno del JSON-LD globale in `src/App.tsx`, per rafforzare il posizionamento locale su Padova.

## Modifiche puntuali

**File**: `src/App.tsx` (blocco `<script type="application/ld+json">`, dentro `hasOfferCatalog.itemListElement[0]`)

- `name`:
  - **Prima**: `"Realizzazione sito web professionale"`
  - **Dopo**: `"Realizzazione siti web professionali a Padova"`
- `description`:
  - **Prima**: `"Siti web professionali a partire da 249€ — pacchetti tutto incluso per negozi, professionisti e PMI."`
  - **Dopo**: `"Sviluppo siti web su misura per negozi, aziende e professionisti a Padova e provincia."`

Resto del JSON-LD (priceSpecification, minPrice 249 EUR, ProfessionalService, orari 09:00–19:00, ecc.) **invariato**.

## Verifica
- `tsc --noEmit` per confermare che il JSON resti sintatticamente valido.
- Grep per assicurarsi che non esistano altre occorrenze del vecchio copy da allineare.

## Note
Nessun impatto su UI o componenti React: la modifica è limitata ai metadati strutturati per i motori di ricerca.
