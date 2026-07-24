# Audit & refactoring gerarchia Heading Tags

Obiettivo: gerarchia semantica pulita (un solo H1, H2 per macro-sezioni, H3 per card/FAQ/sotto-blocchi, nessun salto illogico) mantenendo intatto il design attuale. Nessuna modifica su `src/pages/Demo*` e su primitive UI (`ui/card.tsx`, `ui/alert.tsx`).

## Regole applicate

- Ogni pagina: un solo `<h1>` (nella hero/titolo principale).
- Titoli di macro-sezioni: `<h2>`.
- Card, item FAQ, sotto-blocchi interni a una sezione: `<h3>`.
- Salti (`h2 → h4`) vietati; se serve un ulteriore livello dopo H3, usare `<h4>`.
- Etichette/badge (es. "In sintesi", "SOLUZIONI SU MISURA") come `<p>`/`<span>` stilizzati.
- Se cambiando il tag il rendering visivo cambia, si preserva l'aspetto con classi Tailwind (`text-2xl`, `text-xl`, `font-bold`, ecc.) — nessuna modifica visibile.

## Interventi per file

### `src/pages/SitiWebPadova.tsx`
- L.286 `<h2>` del box "In sintesi" → `<h3>` (è un pannello riassuntivo dentro una sezione, non una macro-sezione).
- L.306 `<h3 className="heading-2">` "Come un Web Studio Locale…" → `<h2>` (è il titolo della sezione "Perché scegliere un web studio a Padova").
- L.322 `<h2>` "Web studio a Padova: perché la prossimità fa la differenza" → `<h3>` (sotto-blocco della stessa sezione, evita due H2 nella stessa `<section>`).
- L.361 `<h3 className="heading-2">` "Soluzioni Web su Misura…" → `<h2>` (è il titolo della sezione "Cosa realizziamo a Padova").
- L.541 `<h3 className="heading-2">` "Sviluppo Siti Web a Padova e Provincia…" → `<h2>` (titolo della sezione "Zone servite").
- Card interne (L.398, 521, 621) restano `<h3>` — corretto.

### `src/pages/SitiWebAziendali.tsx`
- L.289 `<h3>` "Cos'è un sito web aziendale" appare prima dell'H2 della sezione (L.299): scambio semantico — l'H2 di sezione ("Perché un'azienda ha bisogno…") va posizionato come primo heading della `<section>`, e "Cos'è un sito web aziendale" resta `<h3>` (definizione AEO dentro la sezione).
  - Implementazione: sposto l'header con `<h2>` (attualmente L.295–300) sopra il blocco definizione (L.288–293), così l'ordine DOM diventa H2 → H3.
- L.388, 427, 486 `<h3 className="heading-2">` rimangono `<h3>` (già corretti da modifica precedente, sono sotto-blocchi di sezioni H2).

### `src/pages/PosizionamentoGoogleEAi.tsx`
- L.267 `<h2>` "In sintesi" (label uppercase in box AEO) → `<p className="font-bold text-foreground text-sm uppercase tracking-wider m-0">` (è un'etichetta, non una macro-sezione).

### `src/pages/PubblicitaGoogleAds.tsx`
- L.295 `<h2>` "Cos'è Google ADS e come funziona" (dentro riquadro AEO) → `<h3>` con classi che preservano lo stile (`font-bold text-foreground text-xl mb-3`). La sezione successiva "Perché fare pubblicità su Google" (L.315) resta H2 come titolo di macro-sezione.

### `src/pages/FaqSitiWeb.tsx`
- Attualmente: H1 (hero) poi direttamente `<h3>` per ogni domanda FAQ — manca l'H2 di sezione.
- Aggiungere un `<h2>` "Domande frequenti sui siti web" (visualmente `sr-only` oppure integrato con l'intro già presente) all'inizio del blocco lista FAQ, così gli H3 delle domande sono correttamente subordinati.

### `src/components/AboutSection.tsx`
- L.100 `<h3 className="heading-3">` "La parola a chi ha scelto 4 Web Lab" → `<h2>` (è una macro-sezione distinta — testimonials — con proprio divider). Applico `className="heading-3 mb-2"` invariata per preservare stile visivo.
- L.66 `<h3 className="sr-only">` "Le garanzie tecniche" resta `<h3>` (sotto-blocco della sezione principale — coerente).
- L.88 card `<h3>` resta.

### `src/components/HomeFaqPreview.tsx`
- Le domande dell'anteprima FAQ sono `<p className="font-semibold …">` (L.60): promossi a `<h3>` con le stesse classi per preservare lo stile. L'H2 di sezione già presente (L.47) diventa così padre semantico corretto.

### Componenti già corretti (nessuna modifica)
- `Hero.tsx`, `StrengthsSection.tsx`, `ServicesSection.tsx`, `UserRoutingSection.tsx`, `ContactSection.tsx`, `MapSection.tsx`, `PricingSection.tsx`, `RelatedArticles.tsx`, `Footer.tsx` (H3 come titoli colonne footer — accettabile fuori dal main), `CookieBanner.tsx`.
- Pagine blog e `Blog.tsx`, `Contact.tsx`, `Realizzazioni.tsx`, `PrivacyPolicy.tsx`, `CookiePolicy.tsx`, `SitiWebNegozi.tsx`, `SitiWebProfessionisti.tsx`, `NotFound.tsx` — gerarchia già conforme.

## Dettagli tecnici

- Tutti i cambi di tag preservano `className` esistente o aggiungono classi Tailwind equivalenti (`text-2xl`, `text-xl`, `font-bold`, `uppercase tracking-wider`) per mantenere identico il rendering.
- Le classi CSS di progetto `heading-1/2/3` sono solo di stile: cambiare il tag HTML non altera la resa se la classe viene preservata.
- Verifica finale: `npm run build` (SSG) per confermare 0 errori TS/ESLint, ispezione veloce Playwright su Home, `/realizzazione-siti-web-padova`, `/siti-web-aziendali`, `/faq-realizzazione-siti-web`, `/pubblicita-google-ads`, `/posizionamento-google-e-ai` per confermare che l'aspetto visivo non è cambiato.

## Fuori scope

- Pagine `Demo*` (escluse su richiesta).
- Primitive shadcn (`card.tsx`, `alert.tsx`).
- Riscritture di copy o modifiche di layout/style oltre a quanto necessario per preservare l'aspetto.
