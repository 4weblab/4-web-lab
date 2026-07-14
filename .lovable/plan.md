## Obiettivo

Eliminare la duplicazione dei JSON-LD sitewide (`#business` e `#website`) mantenendo **tutte** le informazioni oggi fornite a Google, e migliorare al contempo la leggibilità server-side (SEO tool che non eseguono JS).

## Stato attuale

Due copie di `#business` e `#website` vengono emesse su ogni pagina:

- **`index.html`** (statico, crawler-friendly senza JS): versione "leggera" con `knowsAbout`, `slogan`, `description`.
- **`src/App.tsx`** (via Helmet, richiede JS): versione "ricca" con `founder`, `vatID`, `foundingDate`, `priceRange`, `geo`, `openingHoursSpecification`, `hasOfferCatalog`.

Google deduplica per `@id`, ma:
- Peso inutile su ogni pagina (2× lo stesso oggetto).
- I tool SEO statici vedono solo la versione povera.
- Rischio di divergenza nel tempo (già oggi i due oggetti non coincidono).

## Strategia

**Una sola fonte di verità, statica in `index.html`**, che contenga l'**unione** dei campi delle due versioni attuali. Rimozione totale dei due blocchi da `App.tsx`.

Vantaggi:
- Zero perdita di informazioni per Google.
- Crawler e tool SEO senza JS vedono subito il dato completo.
- `-1` script JSON-LD per pagina (meno lavoro per Helmet, HTML più pulito).
- Fine del rischio di drift tra le due copie.

## Modifiche

### 1. `index.html` — unificare `#business`

Sostituire l'attuale `LocalBusiness` con la versione unificata, includendo tutti i campi che oggi esistono solo in `App.tsx`:

- `name: "4 Web Lab di Fullin Carlo"` (versione legale completa da App.tsx)
- `description` (da index.html)
- `slogan` (da index.html)
- `knowsAbout` (da index.html)
- `founder` con `sameAs` LinkedIn (da App.tsx)
- `foundingDate: "2026"` (da App.tsx)
- `vatID: "05765760284"` (da App.tsx)
- `priceRange: "€€"` (da App.tsx)
- `geo` con lat/lng (da App.tsx)
- `openingHoursSpecification` (da App.tsx)
- `hasOfferCatalog` (da App.tsx)
- `address` completo (già presente, invariato)
- `areaServed` (già uniformato: Veneto, Padova, Venezia)
- `sameAs`: unione dei due (Google Business + LinkedIn founder)
- `telephone`, `email`, `logo`, `image` (invariati)

`#website` in `index.html` resta invariato.

### 2. `src/App.tsx` — rimuovere i duplicati

Eliminare dal `<Helmet>` globale i due blocchi `<script type="application/ld+json">`:
- Quello con `@id: https://4weblab.it/#business`
- Quello con `@id: https://4weblab.it/#website`

Mantenere invariato il resto (`<html lang>`, `<meta robots>`).

### 3. Nessun impatto sulle pagine interne

Le landing di servizio (`SitiWebPadova`, `SitiWebAziendali`, `PubblicitaGoogleAds`, ecc.) continuano a emettere i loro `Service` / `#localbusiness` / `WebPage` / `FAQPage` — restano invariate perché portano informazioni **specifiche di pagina** che non appartengono al blocco sitewide.

## Verifica

- `rg -n "@id.*#business" index.html src/App.tsx` → una sola occorrenza in `index.html`.
- `rg -n "@id.*#website" index.html src/App.tsx` → una sola occorrenza in `index.html`.
- Ispezione HTML server-side (view-source) mostra il JSON-LD completo con tutti i campi.
- Google Rich Results Test sull'homepage: `LocalBusiness` valido con tutti i campi (founder, geo, openingHours, offerCatalog…).
- Build senza errori.

## File toccati

1. `index.html` — sostituzione blocco `#business` con versione unificata.
2. `src/App.tsx` — rimozione dei due `<script type="application/ld+json">` dall'Helmet globale.

## Cosa NON tocchiamo

- Pagine interne (Service, LocalBusiness locali, WebPage, FAQPage, BreadcrumbList).
- Case study / concept (CreativeWork, Person, Service dedicati).
- `areaServed` già uniformato nella sessione precedente.
- Sitemap, robots, llms-full.txt.
