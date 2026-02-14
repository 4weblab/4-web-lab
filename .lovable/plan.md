

## Aggiornamento Title della Home Page

Sostituire il title attuale con il nuovo testo fornito, aggiornando sia `src/App.tsx` (dove Helmet lo imposta a runtime) sia `index.html` (fallback statico).

### Dettagli tecnici

**File 1: `src/App.tsx`**
- Riga 22: sostituire il valore di `siteMetadata.title` con `"Siti web professionali per negozi, professionisti di settore e aziende in tutta Italia | 4weblab"`

**File 2: `index.html`**
- Riga 7: aggiornare il tag `<title>` con lo stesso testo
- Riga 12: aggiornare `og:title` con lo stesso testo

