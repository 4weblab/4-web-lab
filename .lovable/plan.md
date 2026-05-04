# Pulizia residui pagine legacy (opzione B – soft)

Mantengo i redirect 301 verso gli articoli del blog (buono per SEO) e rimuovo solo i residui orfani.

## Modifiche

1. **Eliminare i file componente orfani** (non più importati da nessuna parte):
   - `src/pages/CreareSitoConAI.tsx`
   - `src/pages/QuantoCostaSitoWeb.tsx`

2. **Pulire `public/_redirects`**:
   - rimuovere la riga `/quanto-costa-un-sito-web  /quanto-costa-sito-web  301` (redirect a catena ridondante; chi arriva su `/quanto-costa-sito-web` viene già rediretto dal `<Navigate>` in App.tsx all'articolo del blog)

3. **Aggiornare la memoria del progetto** (`mem://index.md`):
   - rimuovere le voci `Pricing Guide` e `AI Comparison` dall'elenco Memories (le pagine non esistono più come landing autonome)
   - eliminare i relativi file di memoria `mem://features/landing-pages/pricing-guide` e `mem://features/landing-pages/ai-comparison-page`

## Cosa resta invariato

- I due `<Route>` con `<Navigate replace>` in `src/App.tsx` rimangono → `/creare-sito-con-intelligenza-artificiale` e `/quanto-costa-sito-web` continuano a redirezionare 301 verso i rispettivi articoli del blog
- Sitemap già pulita, nessun link interno coinvolto
