

## Piano: Aggiungere link alla pagina "Quanto costa un sito web" nella prima FAQ

**File**: `src/pages/FaqSitiWeb.tsx`

**Modifica**: Nella prima FAQ (`costo-sito-web`), aggiungere dopo il testo esistente un elemento `<Link>` a capo con testo "Quanto costa un sito web nel 2026?" in dimensione leggermente ridotta, che punta a `/quanto-costa-sito-web`.

**Dettaglio tecnico**:
- Importare `Link` da `react-router-dom`
- Modificare il campo `answer` della prima FAQ trasformandolo in JSX con il testo attuale + un `<br />` + un `<Link>` stilizzato più piccolo (es. `text-sm text-accent hover:underline`)
- Il componente `FaqItem` già supporta JSX nell'answer grazie al rendering con `{faq.answer}`

