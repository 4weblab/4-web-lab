
## Problema

Sulla home (e potenzialmente su ogni route) vengono renderizzati più `<link rel="canonical">` perché provengono da tre fonti che non si deduplicano tra loro:

1. **`index.html`** (riga 38): `<link rel="canonical" href="https://4weblab.it/" />` — statico, presente su OGNI pagina servita.
2. **`src/App.tsx`** (Helmet globale): aggiunge un secondo canonical su ogni route.
3. **`src/pages/Index.tsx`** (e tutte le altre pagine): ognuna ha il proprio canonical.

`react-helmet-async` deduplica i `<meta>` per `name`/`property`, ma **non deduplica i `<link>` per `rel`**: vengono accodati. Quindi un crawler che esegue JS vede 2-3 canonical, un crawler che non esegue JS ne vede comunque 2 (statico + JS-injected resta nel DOM).

Stessa logica si applica anche ad altri `<link>` eventualmente duplicati, ma al momento il canonical è l'unico `<link rel>` SEO-critico ripetuto.

## Soluzione

Regola: **un solo canonical per route, emesso dal Helmet della pagina**.

### Modifiche

1. **`index.html`** — rimuovere la riga `<link rel="canonical" href="https://4weblab.it/" />`.
   - Anche `og:url`, `og:title`, `og:description`, `twitter:*`, `og:image` rimangono come fallback per i crawler social che non eseguono JS (LinkedIn, Slack, Facebook): vanno bene, sono dedupabili e servono come baseline.
   - Lasciare solo `og:url` statico è ok perché viene sovrascritto da Helmet sui crawler JS.

2. **`src/App.tsx`** — rimuovere dal `<Helmet>` globale:
   - `<link rel="canonical" href={siteMetadata.url} />`
   
   Mantenere invece title/description/og/twitter di fallback (sono `<meta>`, vengono deduplicati correttamente dal Helmet di pagina).

3. **Verifica per-route canonical** — controllare che ogni pagina abbia il proprio `<link rel="canonical">` nel proprio Helmet. Da una scansione veloce risulta che le pagine principali (`Index`, `Realizzazioni`, demo, satellite, blog, FAQ, Contact, Privacy, Cookie) lo hanno già. Eventuali pagine mancanti vanno aggiunte.
   - Da verificare in particolare: `PrivacyPolicy`, `CookiePolicy`, `Blog`, articoli blog, `NotFound` (NotFound dovrebbe avere `noindex` invece di canonical).

4. **Nessuna modifica al sitemap / robots / structured data**: il problema è solo nei tag `<link>` del `<head>`.

## Verifica post-fix

- Ispezionare `view-source` della home in preview: deve esserci **un solo** `<link rel="canonical">`.
- Stessa verifica su `/realizzazioni`, una demo (`/realizzazioni/demo-flower-atelier`) e una pagina satellite (`/siti-web-per-negozi`).
- Confermare che il canonical mostrato è quello corretto della route (non `https://4weblab.it/` su tutte).

## Rischi

- Bassissimi: rimuovere canonical da `index.html` e dall'Helmet globale non rompe nulla finché ogni route ha il proprio. Tutte le route già lo hanno.
- I crawler social (no-JS) non vedranno canonical → comportamento neutro: in assenza, prendono l'URL della richiesta come canonical, che è ciò che vogliamo.
