

## Obiettivo
Sostituire tutte le occorrenze testuali del brand "4weblab" con "4 Web Lab" in tutto il sito, **preservando** URL, email e dati strutturati che usano il dominio `4weblab.it` o l'indirizzo `info@4weblab.it`.

## Regola di sostituzione
- ✅ Sostituire: `4weblab` quando appare come brand text (in title, og:title, descrizioni, alt text, JSON-LD `name`, link visibili, copy)
- ❌ NON toccare:
  - `4weblab.it` (dominio negli URL canonical, og:url, sitemap, link interni, JSON-LD `url`)
  - `info@4weblab.it` (email)
  - `393514656042` (numero WhatsApp)

## File da modificare (12 file, ~ separate occorrenze brand)

| File | Occorrenze brand "4weblab" → "4 Web Lab" |
|---|---|
| `index.html` | title, og:title, twitter:title (3x) |
| `src/App.tsx` | `siteMetadata.title` |
| `src/pages/SitiWebAziendali.tsx` | og:title, alt mockup, sezione "Perché scegliere 4weblab" (heading + copy) |
| `src/pages/SitiWebProfessionisti.tsx` | title, og:title, JSON-LD `name`, `provider.name` |
| `src/pages/SitiWebNegozi.tsx` | eventuali title/og:title (da verificare) |
| `src/pages/SitiWebPadova.tsx` | eventuali occorrenze brand testuali |
| `src/pages/CreareSitoConAI.tsx` | title, og:title |
| `src/pages/FaqSitiWeb.tsx` | title, og:title |
| `src/pages/QuantoCostaSitoWeb.tsx` | eventuali title/og:title |
| `src/pages/DemoPlatiumed.tsx` | title "Demo 4weblab" |
| `src/pages/DemoSI2000.tsx` | title + 2x link "Home 4weblab" |
| Eventuali altri file Demo* con riferimenti brand | da scansionare e correggere |

## Approccio operativo
1. Leggere ogni file della lista per identificare con precisione tutte le occorrenze testuali (escludendo URL/email).
2. Eseguire le sostituzioni mirate con `code--line_replace`.
3. Re-eseguire la ricerca `4weblab` per verificare che le residue siano tutte e sole quelle dei domini/email (whitelist).

## Note
- Coerenza con la memoria progetto: il brand corretto è "4 Web Lab" (vedi Footer, già conforme).
- Nessuna modifica a logica, layout o styling. Solo testo brand.
- Nessun impatto SEO negativo: title/description restano coerenti, cambia solo la grafia del brand (più leggibile e allineata al logo).

