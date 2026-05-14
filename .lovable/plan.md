## Obiettivo

Rendere la pagina `/faq-realizzazione-siti-web` (e l'anteprima in home) ottimale per essere citata dagli **AI Overviews di Google, SGE, ChatGPT Search, Perplexity e Gemini**, mantenendo il tono attuale.

## Cosa cambia

### 1. Restyling delle 8 risposte esistenti (formato AI-snippet)
Ogni risposta riscritta in struttura **TL;DR + dettaglio**:
- Prima frase: risposta secca con dato/numero quando possibile (es. "Sì." / "Da 199€." / "2-4 settimane.")
- Poi 1-2 frasi di contesto come oggi
- Tono identico all'attuale (professionale-divulgativo)
- `answerText` dello schema riallineato al nuovo testo

### 2. Nuove FAQ AI-focused (6 domande)
Aggiunte alla pagina principale:
- "I siti web servono ancora nel 2026 con l'arrivo dell'AI?"
- "Come fa il mio sito a comparire negli AI Overviews di Google?"
- "Cos'è la SGE (Search Generative Experience) e come cambia la SEO?"
- "Un sito generato con ChatGPT, Wix AI o tool no-code è affidabile?"
- "Quanto è importante la velocità di un sito per Google e per gli AI?"
- "Serve ancora avere un blog se l'AI risponde direttamente agli utenti?"

Tutte con interlinking verso articoli esistenti del blog (AI website, DIY website, not-found-on-google, outdated-website).

### 3. Schema JSON-LD arricchito
Sulla pagina FAQ:
- `FAQPage` aggiornato con tutte le 14 Q&A
- `BreadcrumbList` JSON-LD (oggi solo visivo)
- `speakable` su FAQPage per voice search / AI assistant
- Property `about` e `mentions` con entità chiave: Google, AI Overviews, SGE, GDPR, Padova, sito web

### 4. Fix UX accordion mobile
`max-h-96` → `max-h-[800px]` per evitare clip su risposte lunghe (specie le nuove FAQ AI).

### 5. Interlinking rinforzato
- Aggiungere link incrociati tra le FAQ AI e le landing `/siti-web-aziendali`, `/siti-web-per-professionisti`, `/realizzazione-siti-web-padova`
- Aggiornare `HomeFaqPreview` per includere 1 nuova FAQ AI tra le 3 in anteprima (mantenendo il CTA "Leggi tutte")

### 6. Meta tag pagina
- `<title>` aggiornato: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" (≤60 char)
- `description` aggiornata per includere keyword "AI Overviews" e "SGE"

## Cosa NON cambia
- Design, colori, layout della pagina
- Componenti `FaqItem`, animazioni, breadcrumb visivo
- Footer, header, ContactSection
- Pricing, CTA principali
- Nessuna nuova pagina (resta tutto su `/faq-realizzazione-siti-web`)

## File toccati
- `src/pages/FaqSitiWeb.tsx` — riscrittura array `faqs`, nuovo schema JSON-LD, fix max-h, meta tag
- `src/components/HomeFaqPreview.tsx` — sostituzione di 1 FAQ con una AI-focused
- `mem://features/landing-pages/faq-page` — aggiornamento memoria con nuova struttura

## Risultato atteso
La pagina diventa una delle prime fonti che gli AI generativi citano in italiano per query come *"quanto costa un sito web 2026"*, *"sito generato con AI funziona"*, *"cosa sono gli AI Overviews"*, aumentando autorevolezza e traffico qualificato verso 4 Web Lab.