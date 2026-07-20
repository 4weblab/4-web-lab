# Ottimizzazione PageSpeed: GA differito + CSS critico inline

Due interventi indipendenti, entrambi compatibili con `vite-react-ssg build`.

## 1. Differire Google Analytics (gtag.js)

**Situazione attuale (`index.html`)**
- Consent Mode v2 inline (piccolo, non bloccante) → **da mantenere così com'è**: serve subito per rispettare il default `denied`.
- `<script async src="…gtag/js?id=G-HWVJ1KWYSN">` in `<head>` → viene comunque messo in coda subito dal parser, contribuisce al forced reflow segnalato da PSI e occupa main thread durante l'LCP.

**Modifica**
- Rimuovere il tag `<script async src="…gtag/js">` dall'`<head>`.
- Sostituirlo con un piccolo loader inline che carica `gtag.js` **dopo** il primo rendering, usando in ordine di preferenza:
  1. `requestIdleCallback` (con timeout di sicurezza ~3s),
  2. fallback `setTimeout(…, 2500)` se il browser non supporta idle,
  3. anticipazione al primo `pointerdown` / `scroll` / `keydown` (ascoltatori `{ once: true, passive: true }`) così l'utente interattivo non paga ritardi.
- Il loader crea `<script async src="https://www.googletagmanager.com/gtag/js?id=G-HWVJ1KWYSN">` e lo appende a `<head>`. `dataLayer` e `gtag()` esistono già (dichiarati inline), quindi le chiamate `consent`/`config` fatte prima del load restano in coda e vengono elaborate normalmente da GA4 all'arrivo.
- `gtag('config', 'G-HWVJ1KWYSN', …)` continua a essere invocato inline: GA4 lo processa quando lo script è pronto — nessuna perdita di pageview.

Impatto atteso: main-thread libero durante FCP/LCP, forced reflow eliminato, nessuna regressione funzionale su Consent Mode.

## 2. CSS critico inline (rimozione del render-blocking `app-*.css`)

**Situazione attuale**
- Vite emette un unico bundle CSS globale (~Tailwind + tokens + shadcn) referenziato con `<link rel="stylesheet">` in ogni HTML pre-renderizzato da `vite-react-ssg`. È render-blocking.

**Strategia scelta: `beasties` come postbuild step**
- `beasties` (fork attivo di `critters`, mantenuto da Nuxt) analizza ciascun HTML generato, inlina in `<style>` solo le regole effettivamente usate dall'above-the-fold della singola pagina e converte il `<link rel="stylesheet">` originale in `<link rel="preload" as="style" onload="this.rel='stylesheet'">` con `<noscript>` di fallback.
- Perfettamente compatibile con SSG: opera **dopo** `vite-react-ssg build`, quindi non tocca il pipeline Vite né il bundling.
- Il CSS "full" resta un file separato, cache-friendly, e viene caricato in modo asincrono → l'idratazione React lo trova già disponibile praticamente sempre.

**Passi**
1. `npm i -D beasties`.
2. Aggiungere `scripts/inline-critical-css.mjs` che:
   - trova tutti gli `.html` sotto `dist/`,
   - istanzia `new Beasties({ path: 'dist', preload: 'swap', pruneSource: false, logLevel: 'warn' })`,
   - per ogni file esegue `process(html)` e sovrascrive.
3. Aggiornare `package.json`:
   - `"build": "vite-react-ssg build && node scripts/inline-critical-css.mjs"`
   - `"build:dev"` invariato oppure con lo stesso postbuild (a scelta).
4. `pruneSource: false` — non rimuoviamo regole dal file completo, così le route client-side navigate dopo l'idratazione hanno comunque tutti gli stili.
5. `preload: 'swap'` — pattern raccomandato: `preload` + swap a stylesheet on load + `<noscript>` fallback (già gestito da beasties).

**Alternativa considerata e scartata**
- `vite build --cssCodeSplit=false` / manualChunks: non risolve il render-blocking, sposta solo dove viene servito.
- Inlining totale del CSS in ogni HTML: aumenta drasticamente il peso di ogni pagina e vanifica la cache condivisa. Beasties fa la scelta corretta (solo above-the-fold inline, resto in preload).

## 3. Verifica

- Eseguire `npm run build` e controllare:
  - build completa senza errori,
  - ogni `dist/**/*.html` contiene un `<style>` con regole critiche + `<link rel="preload" as="style" …>` per il CSS completo,
  - `<head>` non contiene più il tag `<script async src="…gtag/js">` (solo il loader inline + il piccolo bootstrap Consent Mode),
  - all'apertura del sito in preview il pageview GA4 arriva comunque (dopo idle) e nessuna FOUC visibile su Hero.

## File toccati

- `index.html` — rimozione `<script async>` GA, aggiunta loader differito.
- `package.json` — nuovo `postbuild` integrato nel comando `build`, aggiunta devDep `beasties`.
- `scripts/inline-critical-css.mjs` (nuovo) — postbuild che inlina critical CSS su tutti gli HTML di `dist/`.

Nessuna modifica a `src/**`, a `vite.config.ts` o alla configurazione SSG.
