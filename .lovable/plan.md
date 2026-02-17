

## Disposizione orizzontale dei link rapidi su mobile

Attualmente i tre link "Chi siamo", "Servizi" e "Contatti" nel footer sono disposti in colonna (`space-y-3` sulla `ul`). La modifica li disporra in riga solo su mobile.

### Modifiche tecniche

**File: `src/components/Footer.tsx` (riga 50)**

Sostituire le classi della `<ul>` da:
```
className="space-y-3"
```
a:
```
className="flex flex-row gap-4 md:flex-col md:gap-0 md:space-y-3"
```

Questo applica `flex-row` con `gap-4` su mobile, e ripristina il layout verticale con `space-y-3` da `md` in su.

