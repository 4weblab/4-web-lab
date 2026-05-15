## Obiettivo

Allineare il SEO della demo `/realizzazioni/demo-metalmeccanica` alla stessa logica EEAT-first applicata alla demo dentistica: tutto il SEO e i blocchi JSON-LD devono spingere **4 Web Lab** come autore/creator/publisher; "AURUM Meccanica" resta solo come soggetto del concept fittizio. La pagina rimane `noindex,nofollow`.

## Stato attuale (verificato in `src/pages/DemoMetalmeccanica.tsx`, righe 1005–1026)

- `<title>`: "Tech Demo Metalmeccanica | Concept Website per Carpenteria e CNC" — non cita 4 Web Lab.
- `description`: cita 4 Web Lab ma soggetto secondario.
- Meta robots `noindex, nofollow` già presenti (corretti, da mantenere).
- og: title/description/site_name presenti ma title brand-second.
- **Nessun blocco JSON-LD** nella pagina (assente del tutto).
- Disclaimer e form già attribuiscono i lead a 4 Web Lab (ok).

## Modifiche al file `src/pages/DemoMetalmeccanica.tsx`

### 1. Meta tag (riscrittura del blocco `<Helmet>`)
- `<title>` → `4 Web Lab · Concept Web Design Premium per Aziende Metalmeccaniche (Tech Demo)`
- `description` → brand-first: «4 Web Lab realizza siti web premium per aziende metalmeccaniche e carpenteria industriale. Tech demo concettuale che mostra il nostro approccio a UX industriale, schede macchina/processo e SEO B2B.»
- `og:title` / `og:description` allineati brand-first.
- Aggiungere `<meta name="author" content="4 Web Lab" />`.
- Mantenere `noindex, nofollow`, canonical, og:site_name, theme-color.

### 2. JSON-LD — aggiungere 4 blocchi tutti centrati su 4 Web Lab (stesso schema della demo dentistica)

**a. `Organization` (4 Web Lab)** — `@id: https://4weblab.it/#organization`
- name, legalName "4 Web Lab di Fullin Carlo", vatID 05765760284, foundingDate 2026
- founder Carlo Fullin (jobTitle, sameAs LinkedIn)
- address (Via Belluno 44, Legnaro, PD, 35020, IT)
- areaServed `["IT", "Veneto"]`
- `knowsAbout`: ["Web design per aziende metalmeccaniche", "UX B2B industriale", "SEO B2B manufacturing", "Realizzazione siti web carpenteria e CNC", "Schede tecniche di processo su web", "Lead generation industriale"]
- contactPoint (telefono +393514656042, email info@4weblab.it)
- sameAs (Google share + LinkedIn)

**b. `CreativeWork`** — `@id: <canonical>#concept`
- name: "Concept di sito web premium per azienda metalmeccanica — by 4 Web Lab"
- author/creator/producer/publisher/copyrightHolder → tutti `@id` Organization
- about: "Web design, UX e SEO B2B per aziende metalmeccaniche realizzati da 4 Web Lab"
- keywords brand-first: «agenzia web design metalmeccanica», «realizzazione siti web carpenteria», «4 Web Lab industriale», «web design B2B manufacturing», «SEO aziende meccaniche»

**c. `BreadcrumbList`**
- Home → Realizzazioni → "Concept metalmeccanico premium · 4 Web Lab"

**d. `WebPage`** — `@id: <canonical>#webpage`
- name brand-first, isPartOf WebSite 4 Web Lab
- about/author/creator/publisher → `@id` Organization
- mainEntity → `@id` CreativeWork

### 3. Cosa NON cambia

- `noindex, nofollow` resta.
- Nessun cambiamento al contenuto visivo/UX della demo.
- Nessuno schema `Organization` / `LocalBusiness` riferito ad AURUM (mantenuta integrità semantica: brand fittizio).
- Disclaimer "brand fittizio" nel footer e nel form restano.

## Deliverable

Un solo edit a `src/pages/DemoMetalmeccanica.tsx` che riscrive il blocco `<Helmet>` (righe ~1005–1026) aggiungendo i 4 blocchi JSON-LD.
