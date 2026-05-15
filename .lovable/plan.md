## Obiettivo

Su `/realizzazioni/demo-studio-dentistico-premium` il SEO e tutti i blocchi JSON-LD devono spingere l'EEAT di **4 Web Lab** (l'agenzia che ha realizzato il concept), non dello studio dentistico fittizio "Aurea". La pagina resta `noindex,nofollow` ma, se mai indicizzata da bot interni / shared via link, deve comunicare in modo univoco che l'autore/expert è 4 Web Lab.

## Stato attuale (verificato in `src/pages/DemoStudioDentisticoPremium.tsx`)

- `<title>` e `description` citano già 4 Web Lab ma mettono "Studio Dentistico Premium" davanti.
- 3 blocchi JSON-LD presenti:
  1. `CreativeWork` — `name: "Concept sito per studio dentistico premium"`, `creator: 4 Web Lab` (ok ma debole su EEAT).
  2. `BreadcrumbList` — ok, già su `4weblab.it`.
  3. `WebPage` — `isPartOf: WebSite 4 Web Lab` (ok), description neutra.
- Nessun blocco `Organization` di 4 Web Lab con segnali EEAT (founder, areaServed, sameAs, expertise, contact).
- Nessun `author` esplicito. Nessun `Person` (Carlo Fullin) per autorialità.

## Modifiche al file `src/pages/DemoStudioDentisticoPremium.tsx`

### 1. Meta tag
- `<title>` → `4 Web Lab · Concept Web Design Premium per Studi Dentistici (Tech Demo)` (4 Web Lab in posizione iniziale, brand-first).
- `description` → riscritta mettendo 4 Web Lab come soggetto: «4 Web Lab realizza siti web premium per studi dentistici. Tech demo concettuale che mostra il nostro approccio a UX healthcare, Digital Smile Design e prenotazione online.»
- `og:title` / `og:description` allineati allo stesso messaggio brand-first.
- `og:site_name` = `4 Web Lab`.
- Aggiungere `<meta name="author" content="4 Web Lab" />`.

### 2. JSON-LD — sostituire i 3 blocchi con 4 blocchi tutti centrati su 4 Web Lab

**a. `Organization` (4 Web Lab)** — nuovo, EEAT-first:
- `name`, `legalName: "4 Web Lab di Fullin Carlo"`, `vatID: "05765760284"`
- `url: https://4weblab.it/`
- `founder: { @type: Person, name: "Carlo Fullin" }`
- `areaServed: "IT"`, `knowsAbout: ["Web design per studi dentistici", "UX healthcare", "SEO locale", "Digital Smile Design web", ...]`
- `contactPoint` con telefono `+39 351 465 6042`
- `sameAs`: link social/Google Business già usati nel resto del sito (verifico in `index.html` o `Footer`).

**b. `CreativeWork`** — riscritto:
- `name: "Concept di sito web premium per studio dentistico — by 4 Web Lab"`
- `author` + `creator` + `producer` = riferimento `@id` all'Organization 4 Web Lab.
- `publisher` = stessa Organization.
- `about: "Web design e UX per studi dentistici"`.
- Rimuovere keyword generiche "demo sito dentista" e privilegiare keyword 4 Web Lab-centric: «agenzia web design dentisti», «realizzazione siti studi dentistici», «web design healthcare Italia».

**c. `BreadcrumbList`** — invariato (già 4weblab.it).

**d. `WebPage`** — aggiungere:
- `author` + `creator` = `@id` Organization 4 Web Lab
- `publisher` = stessa Organization
- `mainEntity` = `@id` del CreativeWork
- description riscritta brand-first.

Tutti i blocchi collegati tramite `@id` per dare un grafo coerente a Google (anche se la pagina è noindex, è buona prassi e rafforza il dominio 4weblab.it tramite i link interni dal resto del sito).

### 3. Cosa NON cambia

- `noindex, nofollow` resta (richiesta esplicita precedente).
- Nessun cambiamento al contenuto visivo/UX della demo.
- Nessuno schema `Dentist` / `LocalBusiness` / `MedicalBusiness` (mantenuta integrità semantica: lo studio è fittizio).
- I disclaimer "brand fittizio" nel footer e nel form restano.

## Deliverable

Un solo edit a `src/pages/DemoStudioDentisticoPremium.tsx` che riscrive il blocco `<Helmet>` (righe ~1476–1550).
