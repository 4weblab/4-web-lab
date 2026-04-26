## Obiettivo
Allineare lo structured data (JSON-LD) della home con la nuova offerta commerciale: niente più noleggio a 49€/mese, prezzi a partire da 249€.

## Modifiche a `src/App.tsx`

### 1. `priceRange` (riga 96)
- **Prima**: `"priceRange": "249€ - 699€+"`
- **Dopo**: `"priceRange": "249€ - 699€+"` ✅ già corretto, lasciato invariato (parte da 249€).

### 2. `hasOfferCatalog` (righe 121-145)
Rimuovo l'offerta "Sito web a noleggio - tutto incluso" (49€/mese, righe 125-136) e mantengo solo l'offerta una tantum "Sito web in acquisto", aggiornando `lowPrice` per riflettere l'inizio della forchetta a 249€.

**Risultato finale del catalogo offerte:**
```json
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Servizi 4 Web Lab",
  "itemListElement": [
    {
      "@type": "Offer",
      "name": "Realizzazione sito web professionale",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "249",
        "priceCurrency": "EUR"
      },
      "description": "Siti web professionali a partire da 249€ — pacchetti tutto incluso per negozi, professionisti e PMI."
    }
  ]
}
```

## Aggiornamento memoria
- Aggiornare `mem://project/business-objectives` rimuovendo il riferimento al modello noleggio 49€/mese e indicando che l'offerta commerciale attuale parte da 249€ una tantum.
- Aggiornare `mem://index.md` (sezione Core) sostituendo la riga `Pricing: 49€/mo rental or 399€+ one-time.` con `Pricing: a partire da 249€ una tantum.`
- Valutare l'archiviazione/rimozione di `mem://features/operational-rental-model` poiché il modello noleggio non è più attivo (verrà segnato come deprecato nella memoria).

## File NON modificati
- `src/components/RentalSection.tsx` e `src/components/PricingSection.tsx`: restano file orfani non importati. Non li elimino in questo intervento (richiesta non esplicita), ma posso farlo in un passaggio successivo se vuoi ripulire il repository.

## Verifica post-modifica
- Controllo TypeScript (`tsc --noEmit`) per confermare che non ci siano regressioni.
- Validazione mentale del JSON-LD: catalogo offerte ridotto a 1 elemento coerente con il nuovo posizionamento commerciale.
