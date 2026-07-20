# Audit tecnico completo del sito

Obiettivo: verificare l'intero codice del progetto, individuare problemi, ridondanze, incongruenze di gerarchia e opportunità di alleggerimento — **senza modificare nulla in questa fase**. Il risultato sarà un report con priorità e proposte di intervento; le correzioni verranno eseguite solo dopo tua approvazione (una per volta o in blocco, come preferisci).

## Aree di verifica

### 1. Sintassi e qualità del codice
- Errori TypeScript / warning `tsgo` su tutto `src/`.
- Warning ESLint (regole React, hooks, a11y).
- Import inutilizzati, variabili morte, `console.log` residui.
- File orfani non referenziati (es. `RentalSection.tsx` già noto come deprecato).

### 2. Gerarchia semantica (SEO/AEO)
- Controllo H1/H2/H3 su tutte le pagine (`Index`, `SitiWebPadova`, `SitiWebAziendali`, `SitiWebProfessionisti`, `SitiWebNegozi`, `FaqSitiWeb`, `PosizionamentoGoogleEAi`, `PubblicitaGoogleAds`, `Blog*`, `Demo*`, `Realizzazioni`, `Contact`).
- Verifica: un solo H1 per pagina, nessun salto di livello (H2→H4), coerenza con il contenuto.
- Landmark HTML (`main`, `nav`, `footer`, `section`) e `aria-*`.

### 3. Metadati e JSON-LD
- Presenza e correttezza di `<title>`, `meta description`, canonical, OG/Twitter su ogni pagina.
- Validità dei JSON-LD (Organization, WebSite, BreadcrumbList, FAQPage, Service, HowTo, Article) — schema corretto, `@id` coerenti, nessun duplicato tra `index.html` e Helmet.
- Sitemap.xml e robots.txt allineati con le rotte reali in `src/routes.tsx`.

### 4. Performance e alleggerimento
- Bundle size: dipendenze pesanti o duplicate (`react-helmet-async` già sistemato, verificare altre).
- Immagini: tutte WebP con `width`/`height` espliciti e `loading="lazy"` dove serve; preload solo per LCP.
- Font: verificare che `@fontsource` carichi solo i weight effettivamente usati.
- Componenti lazy-loaded correttamente vs. eager per LCP.
- CSS: classi Tailwind ridondanti, `src/index.css` e `src/App.css` (quest'ultimo potenzialmente residuo del template).

### 5. Struttura e coerenza
- Duplicazioni tra pagine (sezioni copy-incollate che potrebbero diventare componenti condivisi).
- Coerenza dei CTA sitewide ("Richiedi una valutazione gratuita", link WhatsApp `wa.me/393514656042`).
- Coerenza del design system (colori tokenizzati vs. hardcoded, uso di `text-white`/`bg-black` proibiti).
- Rotte in `src/routes.tsx` vs. link interni: dead link, redirect corretti.

### 6. GDPR / Consent Mode
- Verifica che nessuno script di terze parti carichi prima del consenso.
- Coerenza tra `CookieBanner`, `consent.ts`, `analytics.ts` e lo snippet in `index.html`.

### 7. Build e SSG
- Output `dist/` pulito, tutte le rotte pre-renderizzate, nessun warning di build.
- Verifica che il fallback statico nell'`index.html` non entri in conflitto con l'idratazione React.

## Deliverable

Un report suddiviso in:
- **Bloccanti** (bug, errori di build, JSON-LD non validi)
- **Alta priorità** (gerarchia semantica, SEO, performance LCP)
- **Media** (pulizia codice, deduplicazioni, refactor)
- **Bassa** (nice-to-have, micro-ottimizzazioni)

Per ogni problema: file:linea, spiegazione, fix proposto e stima d'impatto.

## Nota
Questa fase è **solo di analisi (read-only)**. Al termine ti presenterò il report e decideremo insieme cosa correggere e in che ordine — non toccherò il codice senza tuo via libera.
