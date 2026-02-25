

## Piano

Aggiungere `text-center` al div della bottom bar (riga 70) per centrare anche il testo interno, oltre al già presente `justify-center`.

### Modifica in `src/components/Footer.tsx`

Riga 70: aggiungere `text-center` alle classi del div.

```tsx
// Da:
<div className="border-t border-primary-foreground/12 pt-8 flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">

// A:
<div className="border-t border-primary-foreground/12 pt-8 flex flex-col items-center text-center gap-x-6 gap-y-2">
```

Cambio da `flex-row flex-wrap justify-center` a `flex-col items-center text-center` per impilare gli elementi verticalmente e centrare tutto il testo.

Un solo file modificato: `src/components/Footer.tsx`.

