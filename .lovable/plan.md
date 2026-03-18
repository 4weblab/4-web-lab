

## Piano: Aggiungere link nella prima FAQ preview in homepage

**File**: `src/components/HomeFaqPreview.tsx`

**Modifica**: Nella prima FAQ preview (riga ~32), aggiungere dopo il testo della risposta un link "Leggi 'Quanto costa un sito web nel 2026?'" che punta a `/quanto-costa-sito-web`, con stile più piccolo e coerente con il resto del sito.

**Dettaglio tecnico**:
- Importare `Link` da `react-router-dom` (già disponibile nel file)
- Modificare il campo `answer` del primo elemento dell'array `previewFaqs` trasformandolo in JSX, aggiungendo un `<Link>` su una nuova riga con classi `text-sm text-accent hover:underline`
- Aggiornare il rendering nel componente per supportare JSX nell'answer (attualmente usa `<p>{faq.answer}</p>`)

