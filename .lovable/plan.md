## Obiettivo

Ridurre il peso di JavaScript e CSS caricati sulla Homepage (`/`) mantenendo **struttura, contenuti e resa visiva identici**. Interventi mirati al bundle globale (Layout + componenti Home) senza rimuovere funzionalità.

## Diagnosi (già verificata sul codice)

- La Home renderizza: `Header`, `Hero`, `AboutSection`, `StrengthsSection`, `UserRoutingSection`, `HomeFaqPreview`, `ContactSection`, `Footer`.
- Nessuno di questi componenti usa direttamente `framer-motion`, `sonner`, `@radix-ui/react-toast`, `@tanstack/react-query`.
- Sono però **importati sempre** tramite `src/Layout.tsx` (Toaster, Sonner, QueryClientProvider, TooltipProvider) e tramite `src/components/CookieBanner.tsx` (framer-motion) → finiscono nel chunk iniziale.
- `src/index.css` è 511 righe, con regole custom da verificare/purge.

## Interventi

### 1. Rimuovere Framer Motion dal chunk iniziale della Home
`CookieBanner` è l'unico consumer di `framer-motion` caricato in Layout. Sostituire le due `motion.div` + `AnimatePresence` con transizioni CSS equivalenti (fade+slide su `data-state`), mantenendo identico look e timing. Effetto: `framer-motion` esce dal bundle globale (~35 kB gz).

### 2. Lazy-load di banner e widget non critici
In `src/Layout.tsx` avvolgere in `React.lazy` + `Suspense` (mount dopo `requestIdleCallback` / primo scroll):
- `CookieBanner` (già gated dal consenso, non serve al first paint)
- `CookiePreferencesButton`
- `TopNotificationBar`

Nessun impatto visivo: appaiono comunque entro pochi ms, ma escono dal critical path JS.

### 3. Toaster / Sonner / QueryClient fuori dal Layout globale
La Home non usa toast né query. Opzioni (scelgo la prima):
- Rimuovere `Toaster`, `Sonner`, `QueryClientProvider` da `Layout.tsx` e montarli solo dove servono (es. nelle pagine con form / azioni). `TooltipProvider` resta perché usato in vari punti — oppure anch'esso viene lazy-mounted.
- Effetto: rimuove `@radix-ui/react-toast`, `sonner`, `@tanstack/react-query` dal bundle iniziale della Home.

### 4. Pulizia CSS globale
- Audit di `src/index.css`: rimozione regole non referenziate (verifica con `rg` classe per classe delle utility custom tipo `.hero-cta-*`, `.aeo-answer`, ecc. — restano solo quelle usate).
- Verifica che `@tailwindcss/typography` sia effettivamente usato (se solo blog article pages, ok; se non ci sono `prose` altrove resta comunque tree-shaken da Tailwind JIT).
- Nessuna modifica ai design token.

### 5. Verifica bundle
Dopo le modifiche eseguo `bun run build` e ispeziono `dist/assets/*.js` / `*.css` per confermare la riduzione. Riporto delta prima/dopo.

## Cosa NON tocco
- Markup JSX / gerarchia heading / testi.
- Design tokens, palette, font.
- Hero (LCP), preload, critical CSS inlining già in place.
- JSON-LD, meta tag, SSG pipeline.
- Altre pagine oltre alla Home: beneficieranno dello stesso bundle globale più leggero senza modifiche dedicate.

## Rischi
- CookieBanner senza framer-motion: rischio microdifferenza di easing → mitigato replicando cubic-bezier attuale in CSS.
- Rimuovere `QueryClientProvider` da Layout: se una pagina lo usa in futuro va reintrodotto localmente. Controllo preventivo con `rg "useQuery|useMutation"` prima di rimuoverlo.

## Deliverable
File toccati previsti: `src/Layout.tsx`, `src/components/CookieBanner.tsx`, `src/index.css`. Nessun cambio di dipendenze in `package.json` in questa fase (eventuale `bun remove framer-motion` solo se nessun altra pagina lo usa — attualmente lo usano `PricingSection`, `WhatsAppButton`, alcuni demo, quindi resta installato ma non entra nel chunk Home).
