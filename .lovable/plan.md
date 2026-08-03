# Piano: Risolvere il doppio redirect per il vecchio URL professionisti

## Problema
Il vecchio URL `/realizzazione-siti-web-per-professionisti` è gestito contemporaneamente da due meccanismi diversi:

1. `public/_redirects` — redirect 301 lato server verso `/siti-web-per-professionisti`.
2. `src/routes.tsx:26-28` — route React Router con `<Navigate replace>` che esegue un redirect client-side via JavaScript.

Questa sovrapposizione può confondere i crawler e i motori di ricerca:
- Se SSG genera un file statico per il vecchio path, Netlify potrebbe servire l'`index.html` prodotto da React prima di applicare la regola `_redirects`, trasformando il 301 SEO-friendly in un redirect JS lato client.
- Google e altri crawler potrebbero interpretare la pagina come esistente anziché come spostata permanentemente, diluendo il segnale di ranking verso il nuovo URL.

## Soluzione proposta
Rimuovere la route client-side `realizzazione-siti-web-per-professionisti` da `src/routes.tsx` e lasciare che `public/_redirects` gestisca da solo il redirect 301 lato server. Il vecchio URL non ha più link interni attivi, quindi la route React non è necessaria per la navigazione SPA.

## Azioni
1. **Rimuovere** il blocco route in `src/routes.tsx` (righe 25-28).
2. **Verificare** che `public/_redirects` contenga ancora la regola 301 corretta.
3. **Controllare** gli altri redirect client-side presenti in `routes.tsx` (`creare-sito-con-intelligenza-artificiale` e `quanto-costa-sito-web`) per lo stesso potenziale conflitto e applicare lo stesso trattamento se non hanno link interni.
4. **Eseguire** build SSG per confermare che il vecchio path non generi più un file statico e che non ci siano errori di routing.
5. **Verificare** con una richiesta HTTP diretta che il vecchio URL restituisca 301 verso il nuovo URL.

## Risultato atteso
- Un solo canale di redirect per il vecchio URL (301 lato server).
- Nessun file HTML statico generato per il vecchio path durante il build.
- Trasferimento corretto dell'autorità SEO verso `/siti-web-per-professionisti`.
