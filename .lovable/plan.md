## Obiettivo

Generare HTML statico pre-renderizzato per ogni route del sito durante `vite build`, così che:
- Google e altri crawler vedano contenuto completo senza aspettare JS
- Lo screenshot del Rich Result Test mostri la pagina reale
- Netlify, al push su GitHub, esegua già `vite build` → pubblichi automaticamente le pagine HTML pre-renderizzate senza plugin extra

Sì, è fattibile. Il flusso Netlify non cambia: continua a lanciare `npm run build` dopo il push, ma l'output di `dist/` contiene già un `index.html` per ogni route (`/`, `/siti-web-per-professionisti`, `/blog/...`, ecc.) invece di un solo `index.html` SPA.

## Approccio consigliato: `vite-react-ssg`

Tra le opzioni valutate:
- **`vite-react-ssg`** ✅ — pensato per Vite + React + React Router, hydration automatica, integrazione minima. Consigliato.
- `react-snap` — usa Puppeteer, più fragile, deprecato di fatto.
- `vike` / TanStack Start — richiederebbero refactor completo dell'app.

Restiamo su `vite-react-ssg`.

## Modifiche previste

### 1. Dipendenze
- Aggiungere `vite-react-ssg` (dev + runtime).
- Nessuna rimozione: React Router, Helmet, Vite restano invariati.

### 2. Entry point
- `src/main.tsx`: sostituire `createRoot(...).render(<App />)` con l'entry `ViteReactSSG` che riceve le routes.
- `src/App.tsx`: estrarre l'array di routes in un file dedicato (`src/routes.tsx`) per riusarlo lato SSG e lato client. `BrowserRouter` viene gestito internamente da `vite-react-ssg`.
- Le pagine lazy (`lazy(() => import(...))`) restano compatibili: SSG le importa in fase di build.

### 3. Config build
- `vite.config.ts`: aggiungere l'opzione `ssgOptions` per elencare le route dinamiche (in questo caso sono tutte statiche, quindi la scoperta automatica basta) e settare `script: 'async'`.
- `package.json`: cambiare `"build": "vite build"` in `"build": "vite-react-ssg build"`. `dev` resta `vite`.

### 4. Fallback statico e prerenderReady
- Rimuovere il fallback HTML manuale dentro `<div id="root">` in `index.html`: non serve più, ogni pagina avrà il proprio markup pre-renderizzato.
- Semplificare `main.tsx`: il flag `window.prerenderReady` non è più necessario (l'HTML è già pronto lato server). Lo lasciamo per sicurezza ma settato a `true` subito.

### 5. Cose da verificare/adattare
- **`window`/`document` in import top-level**: `initAnalyticsBridge`, GA snippet in `index.html`, cookie banner. Vanno spostati dentro `useEffect` o guardati con `typeof window !== 'undefined'`. Al momento `initAnalyticsBridge` è già in `useEffect` — OK. Verificare `src/lib/consent.ts` e `TopNotificationBar.tsx`.
- **Helmet**: `react-helmet-async` funziona con SSG via `HelmetProvider` — già presente. `vite-react-ssg` estrae i tag `<head>` per pagina automaticamente.
- **Navigazione hash / ScrollToTop**: funzionano lato client dopo hydration, invariato.
- **Componenti che usano `useLocation`, `useNavigate`**: OK, SSG li supporta.
- **Redirect (`<Navigate>`)**: SSG li segue e genera l'HTML della destinazione — verifichiamo che non generi HTML doppio.

### 6. Netlify
- Nessun file di config extra. Il plugin IndexNow esistente continua a funzionare (legge `dist/sitemap.xml`).
- `_redirects` va tenuto: le route pre-renderizzate coprono il caso "refresh su path deep", ma il fallback SPA resta utile per eventuali path non pre-renderizzati.

## Rischi noti

- **Errori di build su `window`/`document`**: risolvibili con guardie, ma richiedono un giro di verifica.
- **Tempo di build più lungo**: da ~10s a ~30–60s per ~35 route. Accettabile.
- **Route dinamiche future**: se in futuro aggiungerai pagine con parametri (`/blog/:slug` da CMS), andranno elencate in `ssgOptions.includedRoutes`. Oggi tutte le route sono statiche, quindi nessun problema.

## Verifica post-implementazione

1. `npm run build` locale → controllare che `dist/` contenga un `index.html` per ogni route (`dist/siti-web-per-professionisti/index.html`, ecc.).
2. Aprire uno di questi file HTML e confermare che H1, meta title, JSON-LD siano già presenti senza JS.
3. `npm run preview` + navigazione client-side per confermare che l'hydration non rompa nulla.
4. Push su GitHub → build Netlify → Rich Result Test sulla home per verificare lo screenshot.

## Domanda aperta

Confermi di procedere con `vite-react-ssg`? Se preferisci una soluzione più semplice ma meno robusta (`react-snap` con Puppeteer già installato in build), posso proporla in alternativa — ma la sconsiglio.
