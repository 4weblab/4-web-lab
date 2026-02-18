
## Contatti Footer — layout orizzontale

### Modifica unica

**File: `src/components/Footer.tsx`** — sezione "Contact Info" (riga 71)

Cambiare la `<ul>` da layout verticale a orizzontale, wrappando i 3 elementi su più righe se necessario su mobile:

```tsx
// Prima
<ul className="space-y-3">

// Dopo
<ul className="flex flex-wrap gap-x-6 gap-y-3">
```

- `flex` mette gli elementi in riga
- `flex-wrap` permette il wrap su schermi stretti
- `gap-x-6` dà respiro orizzontale tra i link
- `gap-y-3` mantiene spaziatura verticale se wrappano

Il titolo `h3` "Contatti" rimane invariato (già `hidden md:block`).

Nessun'altra modifica.
