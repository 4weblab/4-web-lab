

## Piano: Evidenziare la riga "Noleggio sito web" nella tabella

**File**: `src/pages/QuantoCostaSitoWeb.tsx` (riga 122)

Modificare la classe della riga "Noleggio sito web" (ultimo elemento, idx=4) per applicare uno sfondo accent distinguibile. Aggiungere una condizione: se `row.tipo === 'Noleggio sito web'`, applicare sfondo `bg-accent/10` con bordo sinistro accent, altrimenti mantenere lo stile alternato esistente. Aggiungere anche un badge "Più scelto" accanto al nome.

**Modifica concreta** (riga 122):
```tsx
<tr key={idx} className={`border-b border-border/40 transition-colors hover:bg-accent/5 ${
  row.tipo === 'Noleggio sito web' 
    ? 'bg-accent/10 border-l-4 border-l-accent' 
    : idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'
}`}>
```

E nella cella del tipo (riga 123), aggiungere un badge per la riga noleggio:
```tsx
<td className="py-5 px-6 text-foreground font-semibold text-sm">
  {row.tipo}
  {row.tipo === 'Noleggio sito web' && (
    <span className="ml-2 text-xs font-bold text-accent bg-accent/15 px-2 py-0.5 rounded-full">
      Più scelto
    </span>
  )}
</td>
```

