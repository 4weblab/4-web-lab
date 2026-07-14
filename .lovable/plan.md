## Obiettivo
Allineare i tag SEO della Home e l'H1 della Hero alla nuova value proposition, eliminando il prezzo dai meta tag e inserendo "Google Ads" nel titolo principale.

## Modifiche

### 1. Tag SEO in `src/pages/Index.tsx`
- Sostituire `<title>` con: **"Web Agency Padova | Realizzazione Siti Web, SEO e Google Ads | 4 Web Lab"**
- Sostituire `<meta name="description">` con: **"4 Web Lab è la web agency a Padova specializzata in realizzazione siti web professionali, SEO avanzata per Google e AI, e campagne Google Ads mirate."**
- Allineare di conseguenza i tag Open Graph e Twitter:
  - `og:title`, `twitter:title`
  - `og:description`, `twitter:description`
- Aggiornare il JSON-LD `WebPage` (`name`) per riflettere il nuovo title.
- Lasciare invariati gli altri schema (Organization, WebSite, FAQPage, Service, HowTo, ProfessionalService) poiché già coerenti.

### 2. H1 in `src/components/Hero.tsx`
- Mantenere layout a tre righe.
- Modificare la terza riga da **"SITI WEB, SEO, CONSULENZA"** a **"SITI WEB, SEO, GOOGLE ADS"**.
- Lasciare invariato il paragrafo descrittivo sottostante.

### 3. Verifica
- Build del progetto per confermare assenza di errori.
- Controllo visivo della Hero e dei meta tag nel sorgente renderizzato.

## File coinvolti
- `src/pages/Index.tsx`
- `src/components/Hero.tsx`