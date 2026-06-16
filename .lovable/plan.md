# Piano: Integrazione JSON-LD nella pagina Vera Method

Aggiungo i dati strutturati JSON-LD nel componente `<Helmet>` della pagina `src/pages/DemoPersonalTrainerVeraMethod.tsx`, come previsto inizialmente, coerenti con il pattern usato nelle altre pagine di concept (es. R.B. s.n.c.).

## File modificato
- `src/pages/DemoPersonalTrainerVeraMethod.tsx` — un solo blocco modificato dentro `<Helmet>` (righe ~1057-1076), nessuna modifica al markup visibile.

## Schemi inclusi

1. **WebPage** — canonical, name, description, inLanguage `it-IT`, isPartOf 4 Web Lab, primaryImageOfPage = hero WebP, publisher = 4 Web Lab.
2. **Person** (entità fittizia "Giulia Conti") — name, jobTitle "Personal Trainer", areaServed Padova, knowsAbout (allenamento funzionale femminile, pre/post partum, ricomposizione corporea, mobilità), description coerente con la sezione Bio. Marcata chiaramente come demo: `description` include "Brand fittizio realizzato come concept da 4 Web Lab".
3. **Service** — serviceType "Personal Training per donne", provider = Person Giulia Conti, areaServed Padova, hasOfferCatalog con i 3 programmi (Vera 1:1, Vera Small Group, Vera Online).
4. **FAQPage** — le 5 FAQ presenti nell'array `FAQS` (mappate 1:1 da `q`/`a`).
5. **BreadcrumbList** — Home → Realizzazioni → Personal Trainer Vera Method (concept).

## Note tecniche
- Tutti gli schemi vanno in un unico `<script type="application/ld+json">` con `@graph`, per evitare di duplicare `@context` e mantenere il payload compatto.
- Le URL usano `https://4weblab.it` (no `www`, da memoria progetto).
- `primaryImageOfPage` usa il path della hero WebP servita da Vite; per JSON-LD uso un URL assoluto basato sul dominio + il filename pubblico del bundle? Per semplicità e coerenza con le altre demo pages, uso un URL placeholder testuale del file (`/assets/vera-method-hero.webp`) come fatto altrove — verifico prima il pattern usato in `DemoRbSncEdilizia.tsx` e replico l'approccio identico (URL costruito o stringa relativa convertita in assoluta).
- Nessuna modifica a CSS, routing, sitemap, o componenti React esistenti.
- Nessuna modifica alle FAQ visibili: il JSON-LD rispecchia esattamente q/a esistenti per evitare disallineamento Google.

## Cosa NON cambia
- Nessuna modifica al contenuto visibile, palette, immagini, form, header/footer, route, sitemap.
- Nessuna modifica ad altre pagine.
