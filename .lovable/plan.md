# Audit Schema Markup — esecuzione completa (esclusa areaServed Padova)

Eseguo gli step A, B, C, D del piano di audit. **Escludo** l'estensione `areaServed` per Padova (Legnaro/Abano/Vigonza/…) — lo affronteremo dopo come step separato.

## Step A — Unificazione entità globale (`src/App.tsx` + `src/pages/Index.tsx`)

- Aggiungo `WebSite` globale (`@id: "https://4weblab.it/#website"`, `publisher: {@id: "#business"}`) dentro l'Helmet globale di `App.tsx`.
- Rimuovo da `App.tsx` i campi `aggregateRating` + `review` (resta solo l'identità ProfessionalService pulita) → li **sposto in `Index.tsx`** come blocco aggiuntivo che estende `#business` (vincolo Google: review snippet visibili sulla pagina).
- Rimuovo il blocco `WebSite` duplicato appena aggiunto in `Index.tsx` (ora vive globale).
- Cambio `priceRange: "199€ - 899€+"` → `priceRange: "€€"`.

## Step B — Allineamento Demo + Realizzazioni (6 file)

In `Realizzazioni.tsx`, `DemoMetalmeccanica.tsx`, `DemoBoutiqueBB.tsx`, `DemoFotovoltaico.tsx`, `DemoStudioDentisticoPremium.tsx`, `DemoFlowerAtelier.tsx`:

- **Rimuovo** il blocco `Organization` locale con `@id: "#organization"`.
- Sostituisco ogni `{@id: "https://4weblab.it/#organization"}` con `{@id: "https://4weblab.it/#business"}`.
- I riferimenti a `{@id: "#website"}` ora risolvono al WebSite globale di Step A.

Risultato: una sola identità aziendale unificata in tutto il sito.

## Step C — `Service` + `offers` mancanti (4 landing)

- **`SitiWebNegozi.tsx`**: aggiungo blocco `Service` con `serviceType "Web Design for Local Shops"`, `provider: {@id: "#business"}`, `offers: {Offer, price: "199", priceCurrency: "EUR"}`. Lascio invariato il `FAQPage` esistente.
- **`SitiWebAziendali.tsx`**: aggiungo `Service` analogo con `offers` 899€. Lascio `FAQPage` invariato.
- **`SitiWebProfessionisti.tsx`**: aggiungo `offers: {price: "549", priceCurrency: "EUR"}` al `Service` esistente. Verifico se in pagina ci sono FAQ visibili: se sì aggiungo `FAQPage` (controllo durante esecuzione).
- **`SitiWebPadova.tsx`**: aggiungo `offers` (PriceSpecification `minPrice: "199", maxPrice: "899"`) al `Service` esistente. **NON** tocco `areaServed` (rinviato).

## Step D — Rifiniture

- `Blog.tsx`: aggiungo `mainEntityOfPage: {"@type": "WebPage", "@id": <article url>}` a ogni `BlogPosting` nella collection.
- `foundingDate`: lascio `"2026"` (plausibile, 4 Web Lab è giovane). Se vuoi una data precisa dimmela.

## Verifica post-implementazione

1. Rileggo i file modificati per confermare validità `@id` references.
2. Build automatica Lovable verifica TS/sintassi.
3. Suggerimento finale: avviare scan SEO Lovable per conferma esterna.

## File toccati (totale: 11)

App.tsx · Index.tsx · Realizzazioni.tsx · DemoMetalmeccanica.tsx · DemoBoutiqueBB.tsx · DemoFotovoltaico.tsx · DemoStudioDentisticoPremium.tsx · DemoFlowerAtelier.tsx · SitiWebNegozi.tsx · SitiWebAziendali.tsx · SitiWebProfessionisti.tsx · SitiWebPadova.tsx (Service offers, no areaServed) · Blog.tsx

## Cosa NON tocco
Copy, layout, componenti, design system, PageBreadcrumb, FaqSitiWeb, Contact, blog articles individuali, `areaServed` Padova (rinviato).
