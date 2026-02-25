

## Piano

Centrare il blocco dei link nel footer aggiungendo `justify-center` al contenitore flex della bottom bar.

### Modifica in `src/components/Footer.tsx`

Riga 69: cambiare `justify-between` in `justify-center` nel div della bottom bar, così tutti gli elementi (copyright, P.IVA, link) saranno centrati.

```tsx
// Da:
<div className="border-t border-primary-foreground/12 pt-8 flex flex-row flex-wrap justify-between items-center gap-x-6 gap-y-2">

// A:
<div className="border-t border-primary-foreground/12 pt-8 flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-2">
```

Un solo file modificato: `src/components/Footer.tsx`.

