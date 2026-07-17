## Problema

Lo screenshot del "Rich Result Test" di Google mostra la pagina vuota. Causa probabile: Googlebot (o il renderer del test) scatta lo screenshot prima che React abbia montato l'app e che i font/immagini self-hosted siano dipinti. Il segnale attuale `window.prerenderReady` scatta dopo 2 `requestAnimationFrame` (pochi ms dopo il primo render), quindi:

- non serve al Rich Result Test (Google non legge `prerenderReady`, quel flag è per Prerender.io/Rendertron)
- scatta troppo presto: hero, font e immagini LCP potrebbero non essere ancora dipinti

## Cosa consiglio

Attacchiamo il problema su due fronti, senza toccare business logic.

### 1. Migliorare il First Paint per il renderer di Google

- **Fallback SSR-like in `index.html`**: inserire dentro `<div id="root">` un markup statico minimale con H1, sottotitolo e CTA della Hero (stessi testi già presenti in `Hero.tsx`), stilizzato inline in modo che sia visibile immediatamente anche prima che il bundle JS venga eseguito. React lo sovrascrive al mount senza flicker percepibile.
- **Preload esplicito dell'immagine LCP** della Hero in `<link rel="preload" as="image" fetchpriority="high">` in `index.html` (se non già presente per la variante attualmente servita).
- **Preload dei font `.woff2` critici** (Inter Variable + Playfair 700) con `<link rel="preload" as="font" type="font/woff2" crossorigin>` così il testo del fallback viene dipinto con il font corretto subito.

### 2. Rendere affidabile `window.prerenderReady`

Sostituire in `src/main.tsx` il doppio `requestAnimationFrame` con una sequenza che attende eventi reali:

```text
1. attende il mount di React (callback in createRoot render)
2. attende `document.fonts.ready`
3. attende `window.load` (immagini)
4. imposta prerenderReady = true, con timeout di sicurezza a 4s
```

Questo aiuta i prerenderer di terze parti; per Googlebot vero il punto 1 è quello risolutivo.

### Cosa NON faccio

- Non introduco SSR/Next.js: fuori scope, rischio alto.
- Non tocco copy, layout, colori, business logic.
- Non aggiungo un `setTimeout(2000)` cieco: rallenta gli utenti reali e non risolve lo screenshot vuoto se React non è ancora montato.

## File toccati

- `index.html` — fallback statico dentro `#root`, preload font e immagine LCP.
- `src/main.tsx` — logica `prerenderReady` basata su `fonts.ready` + `window.load` con timeout.

## Verifica

- Build passata.
- Playwright: disabilito JS e faccio screenshot → il fallback statico della Hero deve essere visibile.
- Playwright: con JS attivo → nessun flicker, layout identico all'attuale.
- Al termine, l'utente ripete il Rich Result Test di Google per confermare che lo screenshot non è più vuoto (nota: il test cachea, potrebbe servire qualche minuto).
