

## Piano

Modificare la riga 339 di `src/pages/CreareSitoConAI.tsx`: sostituire il `<button>` con un `<a>` che punta a `https://wa.me/393516826560`, con `target="_blank"` e `rel="noopener noreferrer"`.

Attualmente il bottone usa `onClick` con `window.location.href = '/#contatti'` — va convertito in un link diretto WhatsApp.

### Modifica

**File:** `src/pages/CreareSitoConAI.tsx` (riga 339)

Sostituire:
```tsx
<button onClick={() => { window.location.href = '/#contatti'; }} className="inline-flex ...">
```

Con:
```tsx
<a href="https://wa.me/393516826560" target="_blank" rel="noopener noreferrer" className="inline-flex ...">
```

E chiudere con `</a>` invece di `</button>` (riga 345).

Nessun altro file modificato.

