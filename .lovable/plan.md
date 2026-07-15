## Problema

Su mobile, la Top Notification Bar va a capo su 2 righe e diventa più alta. Il menu sticky (`fixed` con `top: var(--notification-bar-height)`) scende di conseguenza e si sovrappone all'H1 della Hero della home.

Causa: mentre tutte le pagine interne applicano `padding-top: calc(var(--header-height) + var(--notification-bar-height))` sul `<main>`, la home (`src/pages/Index.tsx`) non lo fa perché la Hero usa `min-h-screen` con contenuto centrato verticalmente. Quando la bar cresce, l'header scivola nell'area centrale della Hero e copre il testo.

La variabile `--notification-bar-height` è già aggiornata dinamicamente dal `ResizeObserver` in `TopNotificationBar.tsx`, quindi basta consumarla correttamente nella Hero.

## Fix

**`src/components/Hero.tsx`** — sostituire `min-h-screen` con altezza calcolata al netto delle barre fisse, e riservare padding-top pari all'ingombro combinato di notification bar + header, così il contenuto resta perfettamente centrato nella viewport visibile:

```tsx
<section
  className="relative flex items-center justify-center overflow-hidden"
  style={{
    background: 'var(--gradient-hero)',
    minHeight: 'calc(100svh - var(--header-height) - var(--notification-bar-height, 0px))',
    paddingTop: 'calc(var(--header-height) + var(--notification-bar-height, 0px))',
  }}
>
```

Note tecniche:
- `100svh` (small viewport height) evita il salto causato dalla barra URL mobile.
- Fallback `0px` per la variabile prima che il ResizeObserver la imposti (evita `calc(... - )` non valido).
- Il `py-24` interno resta per il respiro tipografico; l'`align-items: center` centra il contenuto nello spazio effettivamente visibile.

## Verifica

Playwright headless a viewport 390×812:
1. Caricare `/`, misurare `--notification-bar-height` reale (2 righe attese).
2. Verificare che `header.getBoundingClientRect().bottom` sia ≤ posizione top dell'H1 della Hero (nessuna sovrapposizione).
3. Screenshot mobile per conferma visiva.
4. Ripetere a 1440px desktop per non regredire.

Nessuna modifica ad altre pagine: usano già il padding-top corretto sul `<main>`.
