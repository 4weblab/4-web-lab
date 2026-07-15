## Obiettivo
Ridurre l'effetto trasparenza del menu mobile aperto (hamburger) in modo che i link di navigazione siano più leggibili, mantenendo un aspetto premium coerente con il design system.

## Contesto attuale
In `src/components/Header.tsx` il menu mobile aperto utilizza:
- `background: 'var(--glass-bg)'` (`hsla(0, 0%, 100%, 0.72)`)
- `backdropFilter: 'blur(20px)'`

L'elevata trasparenza del vetro satina e sovrappone il contenuto della pagina sottostante, rendendo i link meno leggibili su alcuni sfondi.

## Modifica proposta
Aggiornare lo stile inline del pannello mobile menu (`#mobile-menu`) in `src/components/Header.tsx`:
- Sostituire il background glass con un colore di superficie più opaco, ad esempio `bg-background/95` o un valore custom `hsla(0, 0%, 100%, 0.95)`.
- Mantenere un blur leggero (es. `blur(12px)`) per conservare continuità visiva con l'header, ma ridotto rispetto ai 20px attuali.
- Mantenere il bordo e l'ombra esistenti per non perdere la profondità.

## Verifica
- Verificare in anteprima mobile che il menu aperto copra bene lo sfondo sottostante e che i link siano nitidi.
- Confermare che la chiusura/apertura continui a funzionare correttamente.

## File coinvolto
- `src/components/Header.tsx`