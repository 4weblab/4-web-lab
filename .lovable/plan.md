## Rimozione box "Offerta di Primavera"

### Modifiche a `src/components/Hero.tsx`

1. **Eliminare il box promo** (righe ~108-124): l'intero `<div className="w-full max-w-sm lg:mt-8">` contenente il riquadro "🌸 Promozione / Offerta di Primavera / Sconto 20% / Scopri di più".

2. **Semplificare il layout flex** del contenitore padre: poiché resta solo la colonna sinistra, rimuovere `flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20` (oppure tenere solo `flex justify-center`) per evitare wrapper inutili.

3. **Rimuovere l'import non più usato** `ArrowRight` da `lucide-react` (resta solo `ArrowDown`). Rimuovere anche l'import `Link` da `react-router-dom` se non più referenziato nel file.

### Memoria
Aggiornare `mem://marketing/promotional-content` per riflettere che la "Offerta di Primavera" non è più mostrata in Hero (box rimosso). Aggiornare anche la riga Core dell'index se cita il box.

### Cosa NON tocco
- Nessuna modifica a JSON-LD, SEO, altre sezioni o pagine.
- Nessuna modifica alla pagina `/siti-web-aziendali` (a cui il box rimandava).
