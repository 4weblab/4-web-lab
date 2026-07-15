## Obiettivo
Rimuovere la Top Notification Bar da tutte le pagine "concept" (demo fittizi) mantenendola sulla pagina reale di R.B. s.n.c. e sul resto del sito.

## Analisi
Attualmente `TopNotificationBar` è montato globalmente in `src/App.tsx` all'interno di `BrowserRouter`, quindi ha accesso al contesto di `react-router-dom`. La soluzione più pulita è rendere il componente consapevole della route corrente e restituire `null` sulle pagine concept.

## Pagine interessate
Concept da escludere:
- `/realizzazioni/demo-metalmeccanica`
- `/realizzazioni/demo-studio-dentistico-premium`
- `/realizzazioni/demo-fotovoltaico`
- `/realizzazioni/boutique-bb-luxury-rooms`
- `/realizzazioni/demo-flower-atelier`
- `/realizzazioni/demo-personal-trainer-vera-method`

Pagina reale da mantenere:
- `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto`

Tutte le altre pagine mantengono la barra.

## Implementazione
1. In `src/components/TopNotificationBar.tsx` importare `useLocation` da `react-router-dom`.
2. Definire un array con i path dei concept demo.
3. All'inizio del componente, se il pathname corrente corrisponde a uno dei concept, restituire `null`.
4. Mantenere invariata la logica di altezza dinamica (`ResizeObserver` + CSS variable) per tutte le altre pagine.
5. Non modificare `src/App.tsx` (il componente rimane montato globalmente).

## Verifica
- Eseguire build per controllare errori TypeScript.
- Verificare visivamente che la barra non compaia sui concept demo.
- Verificare che la barra rimanga visibile su `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto`, home e altre pagine.