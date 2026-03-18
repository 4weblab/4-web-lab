

## Piano: Inserire il form di contatto nella sezione CTA finale

### Modifica

**File**: `src/pages/QuantoCostaSitoWeb.tsx`

- Aggiungere l'import di `ContactFormWeb3Forms`
- Nella sezione CTA finale (righe 336-366), sostituire il bottone "Richiedi un preventivo gratuito" e il testo sotto con il componente `<ContactFormWeb3Forms />` integrato nel layout, mantenendo titolo e sottotitolo
- Il form apparirà centrato sotto il testo introduttivo, con larghezza massima coerente (`max-w-xl`)

