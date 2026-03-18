

## Problema: il prezzo nella tabella è ancora "da 99€/mese"

Il file `src/pages/QuantoCostaSitoWeb.tsx` alla riga 120 contiene ancora il valore hardcoded `'da 99€/mese'` nell'array dati della tabella. La modalità edit potrebbe aver mostrato un'anteprima della modifica senza salvarla effettivamente nel codice.

## Piano

**File**: `src/pages/QuantoCostaSitoWeb.tsx`, riga 120

Cambiare il valore `prezzo` da `'da 99€/mese'` a `'da 49€/mese'` nell'oggetto della riga "Noleggio sito web":

```tsx
{ tipo: 'Noleggio sito web', prezzo: 'da 49€/mese', target: 'Chi vuole evitare investimento iniziale' },
```

Modifica singola, una riga.

