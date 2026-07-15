## Problema

Attualmente la top notification bar e l'header sticky si sovrappongono su desktop e mobile perché:

- `TopNotificationBar` è `fixed top-0` con `minHeight: var(--notification-bar-height)`. Il contenuto (prefisso + icona + frase lunga) va spesso a capo, quindi l'altezza reale della barra supera il valore CSS (2.5rem desktop / 3.75rem ≤640px).
- `Header` è `fixed` con `top: var(--notification-bar-height)`: usa il valore statico, non l'altezza reale. Risultato: l'header copre la parte bassa della barra a certi breakpoint (es. ~641–900px, o quando la frase va su 2 righe in desktop).
- Anche i `<main>` interni usano `pt-[var(--header-height)]` senza sommare la barra, quindi il primo contenuto (hero) resta parzialmente coperto.

## Obiettivo

Un solo valore CSS `--notification-bar-height` sempre allineato all'altezza reale della barra a qualsiasi viewport, così header e contenuto scendono automaticamente.

## Modifiche

### 1. `src/components/TopNotificationBar.tsx`
- Aggiungere un `ref` al wrapper della barra.
- In `useLayoutEffect`, misurare `ref.current.offsetHeight` e scriverlo su `document.documentElement.style.setProperty('--notification-bar-height', px + 'px')`.
- Aggiornare la misura con `ResizeObserver` (per wrap del testo su resize) e `window.addEventListener('resize')` come fallback.
- Cleanup: rimuovere la property al unmount.
- Rimuovere il `minHeight` inline (non serve più: la barra fluisce con il contenuto e il resto del layout la segue).

### 2. `src/index.css`
- Mantenere i valori di default `--notification-bar-height: 2.5rem;` come fallback pre-idratazione (SSR / prima paint).
- Rimuovere la media query `@media (max-width: 640px) { --notification-bar-height: 3.75rem; }` — ora l'altezza è dinamica.

### 3. Padding top di `<main>` nelle pagine interne
- Nei ~13 file dove `main` ha `pt-[var(--header-height)]`, sostituire con una utility CSS unica `.pt-app-header` definita in `index.css` come:
  ```css
  .pt-app-header { padding-top: calc(var(--header-height) + var(--notification-bar-height)); }
  ```
  Applicare la classe al posto della vecchia utility inline. In alternativa (equivalente) usare Tailwind arbitrary `pt-[calc(var(--header-height)+var(--notification-bar-height))]`.
- Verificare che le `.page-hero` non abbiano padding-top ridondante (restano invariate: sono contenute in `main` già spostato).

### 4. Verifica

- Build e ispezione visiva su mobile (375px), tablet (768px), desktop (1440px):
  - Barra e header non si sovrappongono.
  - Hero non è tagliato in cima.
  - Menu mobile aperto scende sotto l'header (già `top-full`, ok).
- `scroll-padding-top` in `html` continua a usare la stessa formula (già corretta).

## Note tecniche

- `useLayoutEffect` (non `useEffect`) per evitare un frame in cui l'header è posizionato con il valore vecchio.
- Nessun cambio ai contenuti della barra, al copy, ai colori o al comportamento sticky dell'header.
- Nessuna modifica alla logica di scroll offset in `handleNavClick` (legge già la var aggiornata).
