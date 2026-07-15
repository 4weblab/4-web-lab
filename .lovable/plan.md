
## Obiettivo

Due interventi separati e sequenziali:

1. **Menu hamburger anche su tablet** — attualmente la nav desktop si attiva già da 768px (`md:`) e con 8 voci (Home, Siti web, Realizzazioni, SEO & AI, Google ADS, Blog, FAQ, Contatti) va in overflow o si sovrappone al logo su tablet in portrait/landscape stretti.
2. **Audit sitewide dei testi che escono dai riquadri** su mobile/tablet, partendo dal caso segnalato: le label `Prestazioni / Accessibilità / Best Practice / SEO` nella griglia 4-colonne dei punteggi PageSpeed nel case study RB.

---

## 1. Header — hamburger fino a desktop largo

File: `src/components/Header.tsx`

Cambiare il breakpoint di attivazione della nav orizzontale da `md` (768px) a `lg` (1024px) su tutti gli elementi coinvolti:

- `<ul className="hidden md:flex …">` → `hidden lg:flex`
- Bottone hamburger `className="md:hidden …"` → `lg:hidden`
- Blocco satelliteMode (back links) desktop `hidden md:flex` → `hidden lg:flex`, mobile `md:hidden` → `lg:hidden`
- Menu mobile aperto: `md:hidden` → `lg:hidden`
- Colore label logo: `md:text-foreground` → `lg:text-foreground` (per coerenza con lo stato scroll)

Nessuna modifica al comportamento: hamburger e drawer già esistono, si estende semplicemente la loro fascia di attivazione a tablet.

## 2. Audit responsive testi in overflow

### 2a. Fix immediato PageSpeed cards (RB)

File: `src/pages/DemoRbSncEdilizia.tsx` (righe ~314-321)

La griglia `grid-cols-4` con label `text-[10px] uppercase tracking-wider` fa uscire "Accessibilità" e "Best Practice" dai riquadri su schermi < 400px perché la card è dentro un `md:grid-cols-2` che su mobile occupa l'intera larghezza divisa per 4 celle strette.

Interventi:
- `text-[10px]` → `text-[10px] leading-tight break-words hyphens-auto` con `lang="it"` a livello di container per spezzatura corretta.
- Aggiungere `px-2 sm:px-3` per ridurre padding orizzontale su mobile.
- Su mobile molto stretti (<380px) valutare `grid-cols-2` con 2 righe invece di 4 colonne, tramite `grid-cols-2 xs:grid-cols-4` oppure sempre `grid-cols-4` con font ridotto a `text-[9px]` <sm.

Approccio scelto: mantenere `grid-cols-4` (leggibilità del pattern "4 metriche Lighthouse") ma:
- `text-[9px] sm:text-[10px]`
- `break-words hyphens-auto`
- Padding orizzontale ridotto `px-1.5 sm:px-3`
- `min-w-0` sulle celle per consentire lo shrinking del testo.

### 2b. Audit sitewide

Passata sistematica su tutte le pagine e componenti principali con Playwright a 3 viewport (360, 768, 1024) per rilevare overflow:

- Home: `Hero`, `AboutSection`, `StrengthsSection` (bento), `UserRoutingSection`, `ContactSection`, `Footer`
- Landing: `SitiWebAziendali`, `SitiWebProfessionisti`, `SitiWebNegozi`, `SitiWebPadova`, `PosizionamentoGoogleEAi`, `PubblicitaGoogleAds`, `Realizzazioni`, `FaqSitiWeb`, `Contact`, `Blog`
- Demo/Case: `DemoRbSncEdilizia`, `DemoPersonalTrainerVeraMethod`, `DemoStudioDentisticoPremium`, `DemoBoutiqueBB`, `DemoFlowerAtelier`, `DemoFotovoltaico`, `DemoMetalmeccanica`
- Articoli blog

Pattern da correggere in modo mirato quando trovati:
- Titoli/heading con parole lunghe (es. "Personalizzazione") in colonne strette → `text-balance`, `break-words`, `hyphens-auto` con `lang="it"` sull'`<html>` o sul container.
- Griglie a N colonne con label brevi maiuscole → riduzione font e padding sotto sm, oppure wrap forzato.
- Pill/badge con testo lungo (`ShieldCheck` inline-flex) → `flex-wrap` sui container.
- Prezzi/numeri con simboli (es. `199€ una tantum`) → `whitespace-nowrap` sul numero, `flex-wrap` sul container.
- Card bento con contenuto denso → padding responsive `p-4 sm:p-6 md:p-8`, `min-w-0` interno.

### Metodologia audit

Script Playwright che per ciascun URL:
1. Naviga a 360×800, 768×1024, 1024×1366.
2. Confronta `scrollWidth` di ogni figlio diretto di `<section>`, `<article>`, `.card-*`, `[class*="grid"]` con la propria `clientWidth`.
3. Riporta gli elementi in overflow con selettore, testo e viewport.
4. Screenshot puntuale delle zone rilevate.

Output: tabella di casi ordinati per gravità → fix iterativi per file.

## Dettagli tecnici

- Verifica finale con `bunx tsgo` e Playwright screenshot ai tre viewport delle pagine più critiche (Home, RB, SitiWebAziendali) per confermare zero overflow orizzontale (`document.documentElement.scrollWidth === clientWidth`).
- Nessuna modifica al design system tokens: solo utility responsive e microcorrezioni locali.
- Aggiunta `lang="it"` sull'`<html>` in `index.html` se non già presente, per attivare l'hyphenation italiana quando si usa `hyphens-auto`.

## Ordine di esecuzione

1. Fix Header hamburger a `lg:` (5 min, alto impatto immediato su tablet).
2. Fix mirato griglia PageSpeed cards RB.
3. Audit Playwright multi-viewport → lista overflow.
4. Fix a batch per file, ripassata di verifica.
