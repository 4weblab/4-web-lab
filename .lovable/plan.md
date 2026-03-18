

## Piano: Collegare il bottone alla sezione noleggio in homepage

### Modifica

**File**: `src/pages/QuantoCostaSitoWeb.tsx` (riga 289-294)

Cambiare l'`href` del link da `/noleggio-sito-web` a `/#noleggio`. Trasformarlo in un `Link` di react-router-dom con `to="/#noleggio"` oppure semplicemente usare `href="/#noleggio"` — che navigherà alla homepage e scrollerà alla sezione con `id="noleggio"` (già presente in `RentalSection.tsx`).

Dato che siamo su una pagina satellite, serve navigare alla home e poi scrollare. Userò un tag `<a>` con `href="/#noleggio"` che è il modo più semplice e affidabile.

