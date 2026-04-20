

L'utente fornisce la meta description ufficiale per la home. La applico identica nei 3 file (Index.tsx, App.tsx, index.html), allineando anche title, og:* e twitter:* per eliminare le incoerenze rilevate.

## Description ufficiale Home (155 char)
> Agenzia Web Padova specializzata in siti professionali per negozi, professionisti e PMI. Pacchetti da 249€ tutto incluso. Siti veloci, ottimizzati SEO e con assistenza locale. Preventivo gratuito in 24 ore!

## Title ufficiale Home (confermo quello già attivo a runtime in Index.tsx)
> Agenzia Web Padova | Siti Professionali per Negozi, Professionisti e Aziende | 4 Web Lab

## Modifiche

### 1. `src/pages/Index.tsx` (Helmet runtime, vince su `/`)
- `<title>`: invariato (già corretto)
- `meta name="description"`: sostituire la frase troncata con la description ufficiale
- `og:title`: allineare al `<title>`
- `og:description`: allineare alla description ufficiale

### 2. `src/App.tsx` (`siteMetadata` fallback globale)
- `title` → title ufficiale
- `description` → description ufficiale
- (twitter:* e og:* leggono da `siteMetadata` → si aggiornano automaticamente)

### 3. `index.html` (meta statici nel sorgente HTML)
- `<title>` → title ufficiale
- `meta name="description"` → description ufficiale
- `og:title` + `og:description` → idem
- `twitter:title` + `twitter:description` → idem

## Cosa NON tocco
- JSON-LD businessSchema (non contiene title/description testuali della home)
- canonical, og:url, og:image, og:locale
- Tutti gli altri file

## Risultato atteso
Title + description identici e coerenti su:
- HTML statico (index.html → utile per crawler che non eseguono JS)
- Fallback Helmet globale (App.tsx → tutte le pagine senza Helmet proprio)
- Helmet della Home (Index.tsx → vince a runtime su `/`)

Pricing aggiornato da "400€" (vecchio) a "249€" (attuale) ovunque.

