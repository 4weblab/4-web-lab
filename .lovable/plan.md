## Diagnosi attuale

La pagina è già solida (definizione AEO, tabella comparativa, FAQ con `aeo-faq-answer`, JSON-LD `@graph` completo con LocalBusiness + Service + FAQPage + HowTo + Speakable). Confronto con i miglioramenti recenti su `/realizzazione-siti-web-padova` e `Index.tsx` evidenzia però queste lacune:

**Copy**
- Sezione "Perché un'azienda ha bisogno di un sito strutturato": paragrafo intro generico e ripetitivo (concetti già coperti dalla definizione AEO sopra).
- "Cosa realizziamo per le aziende": 3 paragrafi che dicono in 130 parole quello che si può dire in 60.
- "Siti multipagina e strutturati": 4 paragrafi con ridondanze ("ecosistema digitale", "architettura informativa", "scalabilità") + chiusura GEO che ripete quanto già nella tabella e nella FAQ.
- Hero sub-copy lungo (37 parole) e poco scansionabile.

**Struttura / efficacia commerciale**
- Manca un **answer box "answer-first"** sopra-piega (subito dopo l'H1) sul modello Padova: 1 frase + 3 bullet (chi/cosa/dove/da quanto), ottimo per AI Overviews e Speakable.
- Manca un **teaser realizzazioni reali** (R.B. s.n.c., Vera Method, Studio Dentistico) che è invece presente su Padova e dà EEAT immediato.
- Manca una **sezione "Zone servite"** con chip cliccabili (le città sono solo nel JSON-LD e in un paragrafo discorsivo, non scansionabili).
- Manca un **blocco di interlinking discorsivo** verso le pagine pillar correlate (professionisti, negozi, Padova, SEO/AI), oggi i link sono sparsi nei paragrafi e poco visibili.
- "Cosa realizziamo" e "Siti multipagina" trattano lo stesso tema da angolazioni diverse → fondibili in una sola sezione più snella con bullet.

**SEO/AEO**
- Title attuale (66 char): "Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab" — manca il prezzo come ancora CTR; recente pattern del sito lo include.
- Description non menziona "Google Ads" né "AI", ora keyword pillar nella strategia.
- Mancano nel JSON-LD: `alternateName` sul Service, una `Question` esplicita su "cosa fa un'agenzia di siti web aziendali" (intent informazionale crescente), `priceRange` già OK.

## Cosa propongo

### 1. Hero — copy più asciutto + answer box AEO
- Sub-copy ridotto a ~20 parole, benefit-first.
- Subito sotto l'H1 (prima della prossima sezione) aggiungo un **answer box** `.aeo-answer`: 1 frase secca ("4 Web Lab realizza siti web aziendali multipagina per PMI italiane, con sede a Legnaro (PD), da 899€ una tantum.") + 3 bullet con icone (Esperienza, Copertura nazionale, SEO+Ads inclusi).

### 2. Fusione "Perché serve" + "Cosa realizziamo" + "Multipagina" → 2 sezioni snelle
- **"Cosa otteniamo per la tua azienda"** (era "Perché un'azienda…"): elimino il paragrafo intro generico, tengo le 4 card che già funzionano. -1 paragrafo di testo morto.
- **"Come è strutturato un sito web aziendale 4 Web Lab"** (fusione delle due sezioni con immagini): riduco da 7 paragrafi totali a 3 paragrafi + bullet list di 5 elementi concreti (architettura multipagina, sezioni servizi, CMS, performance, scalabilità). Tengo entrambe le immagini ma in un unico blocco a 2 colonne.

### 3. Nuova sezione "Realizzazioni recenti" (teaser 3 card)
- 3 card immagine+titolo che linkano alle pagine reali già esistenti: R.B. s.n.c. (case study reale), Studio Dentistico Premium (concept), Vera Method (concept). Modello identico a quello implementato su Padova.
- Forte segnale EEAT, riduce il tasso di abbandono, dà materiale concreto da mostrare.

### 4. Nuova sezione "Zone servite" con chip
- 7 chip cliccabili (Padova → link a /realizzazione-siti-web-padova, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno) + microcopy "operiamo in tutta Italia da remoto".
- Stesso pattern di Padova, GEO scansionabile per Google e AI.

### 5. Blocco interlinking discorsivo verso pillar
- Sostituisce il paragrafo geo ridondante nella sezione "multipagina". 1 paragrafo che linka in modo naturale a: `/realizzazione-siti-web-per-professionisti`, `/siti-web-per-negozi`, `/posizionamento-google-e-ai`, `/pubblicita-google-ads`, `/realizzazione-siti-web-padova`.

### 6. AEO/GEO — potenziamento JSON-LD e meta
- **Title** (≤60): `Siti Web Aziendali da 899€ · Veneto e Italia | 4 Web Lab`
- **Description** (≤160): `Siti web aziendali professionali da 899€: design su misura, SEO per Google e AI, Google Ads. Per PMI in Veneto e in tutta Italia. Preventivo in 24h.`
- Aggiungo `alternateName: ["Sito web per aziende", "Sito web corporate"]` al nodo `Service`.
- Aggiungo 2 Q&A alla FAQPage: "Cosa fa un'agenzia di siti web aziendali" e "Un sito web aziendale aiuta davvero ad acquisire clienti B2B?" (sia visibili che nel JSON-LD).
- Estendo `Speakable.cssSelector` includendo `.aeo-answer` (nuovo answer box).

### 7. Aggiornamento sitemap
- `lastmod` di `/siti-web-aziendali` portato a `2026-06-29` per attivare IndexNow.

## File toccati

```text
src/pages/SitiWebAziendali.tsx — restyling sezioni, copy snellito, nuove sezioni teaser+zone+interlinking, JSON-LD esteso, title/description
public/sitemap.xml             — lastmod aggiornato
```

## File NON toccati
Header, Footer, design tokens, immagini esistenti (riuso `aziendali-mockup.webp` + `aziendali-team.webp` + le 3 immagini realizzazioni già presenti in `src/assets`), nessun nuovo componente.

## Esclusioni esplicite
- Nessuna nuova immagine generata.
- Nessuna metrica inventata.
- Nessuna modifica al pricing o ai contenuti del form.
- Nessuna modifica visiva al design system.

## Verifica
Build automatica + lettura veloce per controllare bilanciamento sezioni, lunghezza copy e validità JSON-LD.
