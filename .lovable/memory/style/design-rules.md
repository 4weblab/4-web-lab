---
name: Design rules (Emil Kowalski + Impeccable)
description: Regole UI di riferimento per modifiche future: tipografia, colore, layout, motion, copy, a11y. Il brief del cliente vince.
type: preference
---
Applicare solo alle nuove modifiche; non rifare il sito esistente senza richiesta. Il brand attuale (font, palette, stile) ha precedenza.

# Regole di design e qualità UI (knowledge per Lovable)

Ogni regola è ricavata dai repo originali e marcata con la fonte:

- **[E]** = `emilkowalski/skill` (commit 85e8e23, licenza MIT): `emil-design-eng`, `mobile-native`, `pick-ui-library`, `performance-cheatsheet.md`
- **[I]** = `pbakaus/impeccable` (commit e0881d2, engine 0.1.5, licenza Apache 2.0): `SKILL.src.md`, `craft-floor`, `typeset`, `layout`, `colorize`, `animate`, `optimize` e le 61 regole del detector (`antipatterns.json`)

Le regole sono riformulate; valori numerici e snippet di codice sono quelli delle fonti. Non c'è nulla di aggiunto da altre fonti.

## 0. Precedenze

- Il brief del cliente vince: font, palette, stile e materiali già decisi si rispettano anche se una regola qui sotto li sconsiglia. [I]
- In una modifica puntuale si conserva identità, comportamento, copy e tutto ciò che è fuori dallo scopo. Prima di sostituire copy fattuale o aggiungere claim, chiedere. [I]
- Costruisci completo, ispeziona una volta (desktop e mobile insieme), correggi tutto in un solo giro, al massimo un secondo controllo, poi fermati. Niente auto-verifiche a ciclo aperto. [I]

## 1. Modalità della pagina [I]

Si sceglie dalla pagina, non dal prodotto.

- **Persuade** (landing, pricing, campagne): il design è il prodotto, il motion può avere una voce.
- **Operate** (app, dashboard, admin, impostazioni): scansione rapida e coerenza prima dell'espressività, il motion serve solo a feedback e stato.
- **Read** (blog, guide, documentazione): struttura per la comprensione, una famiglia tipografica ben calibrata.
- **Experience** (portfolio, gallerie): l'opera guida, l'interfaccia si ritrae.

## 2. Tipografia

- Body ≥ 16px (1rem). Testo funzionale (link, bottoni, label, celle, meta) mai sotto 11px. [I]
- Misura del testo 65–75ch (max-width). Righe oltre ~80 caratteri sono un errore. [I]
- Line-height del body 1.5–1.7, mai sotto 1.3. [I]
- Gerarchia: tra titolo e body serve almeno un passo di scala ≥ 1.25× (sotto quella soglia la gerarchia è piatta), ruoli riconoscibili a colpo d'occhio, scala definita, ruoli identici tra schermate. Usa peso, spazio e tono oltre alla dimensione. [I]
- Display max 6rem. Tracking non sotto -0.04em. Tracking oltre 0.05em solo su label brevi in maiuscolo. Maiuscolo solo per label e titoli brevi. [I]
- Un h1 lungo non va a dimensione display: accorcia il testo o riduci il corpo. [I]
- Più spazio sopra un titolo che sotto. Nessun livello di heading saltato (h1 → h3). [I]
- Non giustificare il body senza `hyphens: auto`. Tra paragrafi usa spazio oppure rientro, non entrambi. [I]
- Su sfondo scuro compensa: un po' più di line-height e tracking, e un peso in più se serve. [I]
- Meno famiglie possibili. Una seconda famiglia solo per un ruolo che nessun'altra può svolgere. [I]
- Inter, Roboto, Fraunces, Geist, Plus Jakarta Sans e Space Grotesk sono i default di ogni interfaccia generata: scegli un font con personalità (salvo brand del cliente). Un serif corsivo oversize come headline dell'hero è lo stesso cliché (salvo registro editoriale). [I]
- Numeri di dati/tabelle con cifre tabulari. [I]
- Font: carica solo file e pesi usati, `font-display: swap` o `optional`, subset, preload dei critici, fallback con metriche compatibili, pochi pesi. [I]
- Rispetta zoom del browser e impostazioni font dell'utente. [I]

## 3. Colore

- Contrasto: testo e placeholder ≥ 4.5:1, testo grande ≥ 3:1, controlli, icone e focus ≥ 3:1. Verifica anche stati, overlay, testo su immagini, entrambi i temi. [I]
- Su superfici colorate il testo secondario deriva dal colore dello sfondo o del primo piano, mai grigio. [I]
- Costruisci ruoli, non campioni: canvas, superfici elevate, testo primario/secondario, azione/focus/selezione, bordi, stati (successo, avviso, errore, info). [I]
- Il colore più forte occupa una regione o un ruolo deciso, non accenti sparsi. Il colore della CTA primaria non si spende in decorazione. [I]
- Mai colore come unico segnale: aggiungi testo, icona, forma o posizione. [I]
- Dark mode progettato con elevazione e contrasto propri, non l'inversione del tema chiaro. [I]
- Per nuove palette web preferire OKLCH. [I]
- Da evitare: gradienti viola/violetto, ciano su scuro, sfondo crema/beige scelto per riflesso, tema chiaro/scuro scelto per categoria (scegli da chi usa il sito, dove, con che luce). [I]
- Testo con gradiente: no, l'enfasi viene da peso o dimensione. [I]
- Ombre: con offset e blur morbido, neutre. No alone colorato a offset zero, no radial halo o spotlight decorativi, no ombre a blocco (`4px 4px 0`) fuori da un mondo neobrutalista. Bordo sottile più ombra ampia = sceglierne uno. [I]

## 4. Layout e struttura

- Squint test: sfocando, devono restare leggibili elemento primario, secondario e gruppi principali. [I]
- Raggruppa per prossimità prima di aggiungere contenitori. Card annidate: mai. Card identiche icona+titolo+testo come struttura di pagina: no. [I]
- Ritmo: gruppi stretti, separazioni ampie, non un solo valore di spazio ovunque. Scala di spacing a base 4, `gap` per i fratelli. [I]
- Padding interno ≥ 8px (meglio 12–16px) in contenitori con bordo o sfondo. Body mai a filo del viewport: almeno 16px (meglio 24–32px) di padding laterale, oppure max-width con margini auto. [I]
- Responsive strutturale (riordina, comprimi, reflow), con ordine DOM e focus uguali all'ordine visivo. Target touch usabili anche se il segno è piccolo. [I]
- Nella prima viewport le colonne devono essere bilanciate. Un contenitore con `overflow: hidden` non deve tagliare tooltip o menu. [I]
- Da evitare: hero-metric (numero grande + label + statistiche), kicker o eyebrow sopra i titoli (vietato), chip eyebrow nell'hero, numeri di sezione 01/02/03 (salvo sequenza che è informazione), icona in tile quadrato sopra il titolo, bordo colorato laterale >1px su card/alert, bordo accent su card arrotondata, modal per un task che non richiede interruzione. [I]
- Da evitare: glassmorphism decorativo, sparkline e anelli di progresso decorativi, monospace come costume "tech", emoji o glifi Unicode al posto delle icone (usa una libreria reale, stesso tratto e peso), marquee che scorre da solo, puntini pulsanti decorativi, cursore lampeggiante finto, illustrazioni hero fatte di forme SVG primitive, clip-path che imita sagome organiche, strisce o griglie decorative, zoom/rotazione dell'immagine in hover. [I]

## 5. Copy dell'interfaccia [I]

- I controlli nominano la loro azione. Gli errori nominano il problema e come recuperare.
- Sostituisci buzzword (streamline, empower, supercharge, world-class, enterprise-grade, next-generation, cutting-edge) con un verbo e un nome specifici.
- No saturazione di trattini lunghi. No cadenza aforistica ripetuta su 3+ sezioni ("Non una feature. Una piattaforma."). Non ripetere lo stesso testo 3+ volte nella stessa card.

## 6. Motion

**Decidere se animare** [E]
- Azioni da tastiera ripetute o frequentissime: nessuna animazione. Hover e navigazione di liste: ridotti. Modali, drawer, toast: standard. Onboarding e celebrazioni: si può aggiungere piacere.
- Ogni animazione ha uno scopo: coerenza spaziale, stato, spiegazione, feedback, evitare cambi bruschi. Se è solo "bella" e si vede spesso, non animare.

**Composizione** [I]
- Un solo momento autorato per superficie, non lo stesso fade-and-rise su ogni sezione. Stagger solo quando una lista appare come lista, con ritardo totale limitato.
- Il contenuto è visibile di default: se lo script fallisce la pagina non deve restare nascosta.
- Sui Read e Operate niente coreografia al caricamento.

**Easing** [E][I]
- Entrate e uscite: ease-out. Movimento sullo schermo: ease-in-out. Hover/colore: ease. Moto costante: linear. Default: ease-out.
- Mai ease-in nella UI, mai bounce o elastic per riflesso. Definisci una sola curva come token. Curve indicate dalle fonti: `cubic-bezier(0.23, 1, 0.32, 1)` [E], `cubic-bezier(0.77, 0, 0.175, 1)` per movimento sullo schermo [E], `cubic-bezier(0.16, 1, 0.3, 1)` [I].

**Durate** [E][I]
- Press 100–160ms, tooltip 125–200ms, dropdown 150–250ms, modali/drawer 200–500ms. La UI resta sotto ~300ms. Un'entrata "autorata" può arrivare a 500–800ms. L'uscita è più veloce dell'entrata.

**Dettagli di componenti** [E]
- Bottoni: `:active` con `scale(0.97)` (range 0.95–0.98).
- Mai partire da `scale(0)`: `scale(0.95)` più opacity.
- Popover con `transform-origin` sul trigger. I modali restano centrati.
- Tooltip: dopo il primo aperto, i vicini si aprono subito senza animazione.
- Elementi che si attivano spesso: transition (interrompibili), non keyframe. Per l'entrata CSS usa `@starting-style` quando supportato.
- Crossfade che non convince: `blur(2px)` durante la transizione, animated blur sempre < 20px.

**Tecnica e performance** [E][I]
- Base: `transform` e `opacity`. Blur, filter, clip-path, mask, shadow solo in regioni piccole e isolate, verificate fluide. Non animare `width`, `height`, `top`, `left`, margin, padding (usa transform o `grid-template-rows`).
- Mai `transition: all`: elenca le proprietà. `will-change` solo quando vedi il problema e mai ovunque.
- CSS per animazioni predeterminate (girano fuori dal main thread), JS o WAAPI per quelle dinamiche e interrompibili. Non aggiungere una dipendenza se lo stack già lo fa.
- Framer Motion / motion: le scorciatoie `x`/`y` non sono accelerate in hardware, usa la stringa `transform` completa. Per animazioni a ogni frame scrivi su `ref.current.style`, non nello state.
- Scroll-driven solo se il legame con lo scroll porta significato, con fallback. Loop non essenziali si fermano fuori schermo.

**Accessibilità** [E][I]
- `prefers-reduced-motion` con alternativa intenzionale: via movimento e posizione, restano opacity e colore che spiegano lo stato. Meno e più gentile, non zero.
- Hover solo dentro `@media (hover: hover) and (pointer: fine)`.
- Spring (solo per drag, gesture, effetti decorativi): bounce 0.1–0.3. Stagger: 30–80ms tra elementi.

## 7. Mobile [E]

Baseline da avere prima del primo componente:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content" />
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a" />
```

```css
html {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  /* overscroll-behavior: none; solo per app, non per documenti con pull-to-refresh */
}
input, textarea, select { font-size: 16px; }
button, a, [role="button"] {
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
}
@media (hover: hover) and (pointer: fine) { /* tutti gli :hover qui */ }
```

- Il colore di `theme-color` è quello in cima alla pagina (header), non il colore del brand.
- Mai `user-scalable=no` o `maximum-scale=1`: il fix dello zoom sugli input è il font a 16px.
- Altezze: `100dvh` per shell di app, `100svh` per hero, mai `100vh` per UI ancorata in basso.
- Safe area con `env(safe-area-inset-*, 0px)` (serve `viewport-fit=cover`).
- Feedback al press con `:active`, non solo al click. `user-select: none` solo sui controlli, mai sul body.
- Carosello: `touch-action: pan-y`, o meglio scroll nativo con `scroll-snap`.
- Tastiere corrette nei form: `inputmode`, `type=email/tel`, `enterkeyhint`.
- Non dichiarare risolto un fix mobile dall'emulazione: serve un telefono reale.

## 8. Performance [I][E]

- Misura prima e dopo. Target: LCP < 2.5s, INP < 200ms, CLS < 0.1. Non ottimizzare ciò che non è lento.
- Immagini: WebP/AVIF, dimensione reale, `srcset`, qualità 80–85%, lazy solo sotto la piega (mai above-the-fold). `width`/`height` o `aspect-ratio` per evitare shift.
- Non iniettare contenuto sopra quello già visibile. Riserva lo spazio di embed e media.
- JS: code splitting per rotta e componente, import dinamici per componenti pesanti, via dipendenze e script di terze parti inutili.
- Liste lunghe: virtualizzazione o `content-visibility: auto`. CSS `contain` per regioni indipendenti.
- Prova su dispositivi reali e su rete lenta, non solo su desktop veloce. Non sacrificare l'accessibilità per la velocità.

## 9. Stati e finitura [I]

- Ogni elemento interattivo ha hover, disabled, loading, error, empty e focus da tastiera visibile. Controlli funzionanti, contenuti reali, niente `<img>` senza src.
- Le parti che non hai disegnato portano il design: selezione del testo, caret, scrollbar, focus ring, underline offset, cifre tabulari vanno tematizzati dalla palette.
- Il testo non deve mai traboccare o finire sotto un altro elemento, a nessun breakpoint.

## 10. Librerie consigliate [E]

Se il progetto ne usa già una equivalente, non cambiarla: segnala e basta.

- Toast: Sonner. Codici OTP: input-otp. Command menu: cmdk. Primitive UI accessibili (dialog, popover, menu, select): base-ui.
- Animazione generale con spring, layout, exit, gesture: motion. Un semplice hover o fade non lo richiede, basta CSS.
- Numeri animati: NumberFlow. Grafici: recharts (dati live: Liveline). Drag and drop: dnd kit. Liste lunghe: Virtuoso.
- Stato: zustand. Classi condizionali: clsx, con varianti tipizzate: cva. Tema chiaro/scuro senza flash: next-themes.

## Non incluso

- Dei repo non sono stati letti: i comandi e riferimenti Impeccable `critique`, `audit`, `polish`, `harden`, `onboard`, `distill`, `bolder`, `quieter`, `delight`, `overdrive`, `clarify`, `adapt`, e delle skill di Emil `animate`, `review-animations`, `apple-design` e le altre.
- Le indicazioni di Impeccable di "osare al massimo" e di scegliere un mondo visivo nuovo sono state escluse: per i siti dei clienti prevale il brief (sezione 0).
- Le regole di Impeccable sul tooling (PRODUCT.md, DESIGN.md, detector CLI) non si applicano a Lovable.
