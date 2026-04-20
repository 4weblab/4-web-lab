

## Fix metadata e pricing — 3 interventi

### 1. `src/pages/SitiWebProfessionisti.tsx`
Allineare `og:title` al `<title>` esistente:
- `og:title` → `Siti web per Professionisti di settore, SEO locale e personalizzati | 4 Web Lab`

### 2. `src/pages/SitiWebAziendali.tsx`
Allineare `og:title` al `<title>` esistente:
- `og:title` → `Realizzazione Siti Web Aziendali Padova | 4 Web Lab`

### 3. `src/pages/FaqSitiWeb.tsx`
Aggiornare la risposta FAQ "Quanto costa realizzare un sito web?":
- Sostituire `da circa 400€ + IVA` → `a partire da 249€`
- Mantenere il resto della risposta invariato (struttura one-page, pagine, SEO, link a /quanto-costa-sito-web)

## Cosa NON tocco
- `<title>`, `meta description`, `og:description` di Professionisti e Aziendali (già coerenti)
- Tutte le altre FAQ
- JSON-LD, canonical, og:url, og:image

## Risultato
- 100% delle pagine con `<title>` = `og:title` e `description` = `og:description`
- Pricing coerente "249€" ovunque (FAQ inclusa)

