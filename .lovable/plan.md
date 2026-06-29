## Obiettivo
Restyling completo (copy + struttura) della pagina `/realizzazione-siti-web-padova` per massimizzare SEO/GEO/AEO, sfruttando le query che già generano impression (408 in 3 mesi, ma solo 1 click → forte gap CTR da chiudere) e creando interlinking strategico verso le altre pagine top per impression.

## Diagnosi attuale
- **Query principali captate** (Search Console, ultimi 3 mesi):
  1. realizzazione siti web padova (73)
  2. siti web padova (65)
  3. sviluppo siti web padova (30)
  4. creazione siti web padova (28)
  5. realizzazione siti internet padova (23)
  6. creazione siti internet padova (14)
  7. web studio padova (12)
  8. realizzazione sito web padova (12)
  9. realizzazione siti padova (11)
- **Problema CTR**: 408 impression → 1 click. Title e meta description attuali non agganciano. La keyword "web studio padova" e le varianti "internet" non compaiono nel copy.
- **Struttura**: pagina già ben impostata ma con H2 generici, sezioni testuali dense e poco scannabili, nessun blocco "answer-first" sopra la piega oltre al definition block, nessuna prova sociale/realizzazioni inline.

## Nuova struttura della pagina (ordine sezioni)

```
1. HERO (rivisto)
   - H1 nuovo + sub-copy che integra varianti keyword
   - 2 CTA (consulenza gratuita + WhatsApp)
   - Trust-strip: sede Legnaro (PD) · da 199€ · risposta in 24h · clienti in tutta la provincia

2. ANSWER BOX AEO (nuovo, sopra-piega)
   - Risposta diretta in 2 frasi a "quanto costa / quanto tempo / chi siamo"
   - .aeo-definition wrapper (già usato per Speakable)

3. PERCHÉ SCEGLIERE UN WEB STUDIO A PADOVA (rivisto)
   - H2 keyword-rich ("Web studio a Padova: perché conta la prossimità")
   - 5 bullet potenziati + micro-prova ("Sede a Legnaro, raggiungibile in 15 min da Padova centro")

4. SERVIZI PER NEGOZI / PROFESSIONISTI / AZIENDE (mantenuto + rafforzato)
   - Cards con prezzi una tantum visibili
   - Link interni alle 3 landing → interlinking diretto verso top-impression pages

5. TABELLA COMPARATIVA (mantenuta, spostata qui)

6. METODO 4 STEP (mantenuto, compatto)

7. ZONE SERVITE (nuovo, GEO-focus)
   - Mini-mappa testuale con i 12 comuni della provincia in chip cliccabili (no link, solo visual)
   - Paragrafo discorsivo con co-occorrenze "creazione siti web Padova", "sviluppo siti internet Padova", "realizzazione sito web Padova"
   - Riuso `MapSection` esistente se compatibile (sede Legnaro)

8. CASI / REALIZZAZIONI (nuovo blocco snello)
   - 2-3 anteprime da `Realizzazioni` o demo già esistenti (DemoRbSncEdilizia, DemoStudioDentisticoPremium, DemoBoutiqueBB) con link → /realizzazioni
   - Prova visiva → migliora CTR e tempo sulla pagina

9. BLOCCO INTERLINKING DISCORSIVO (nuovo)
   - Paragrafo con link contestuali a:
     · /siti-web-aziendali (214 impr)
     · /realizzazione-siti-web-per-professionisti (90 impr)
     · /siti-web-per-negozi (84 impr)
     · /blog/quanto-costa-un-sito-web-nel-2026
     · /blog/siti-web-creati-con-intelligenza-artificiale (70 impr)
     · /blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere (55 impr)
     · /posizionamento-google-e-ai
     · /pubblicita-google-ads (link già presente, mantenuto)

10. FAQ AEO (estesa)
    - Aggiunte domande che intercettano varianti keyword:
      · "Cosa fa un web studio a Padova?"
      · "Qual è la differenza tra realizzazione e sviluppo siti web?"
      · "Come scegliere un'agenzia per la creazione di siti internet a Padova?"
    - Mantenute le 6 esistenti

11. CTA FINALE (mantenuta, copy rifinito)
```

## Copy & SEO – modifiche chiave

### Title & Meta
- **Title** (≤60 char): `Realizzazione Siti Web Padova | Web Studio da 199€ | 4 Web Lab`
- **Meta description** (≤160 char): `Web studio a Padova: realizzazione e sviluppo di siti web professionali per negozi, studi e aziende. Da 199€, SEO locale, preventivo gratuito in 24h.`
- Aggiornati anche og: e twitter: corrispondenti.

### H1
Da: *"Realizzazione Siti Web a Padova – la soluzione web per il tuo business"*
A: **"Realizzazione Siti Web a Padova: il tuo web studio locale per negozi, professionisti e aziende"**
(integra "web studio padova", mantiene la keyword primaria a inizio).

### H2 keyword-rich (rivisti)
- "Web studio a Padova: perché la prossimità fa la differenza"
- "Creazione e sviluppo siti web a Padova per ogni tipo di attività"
- "Realizzazione sito web a Padova: il nostro metodo in 4 passi"
- "Zone servite: Padova città e tutta la provincia"
- "Realizzazioni: alcuni siti internet creati a Padova"
- "Domande frequenti su realizzazione siti web a Padova"

### Co-occorrenze keyword distribuite naturalmente
"realizzazione siti web Padova", "sviluppo siti web Padova", "creazione siti web Padova", "siti internet Padova", "web studio Padova", "agenzia web Padova" — sparse nei paragrafi senza keyword stuffing.

## JSON-LD aggiornato
- `Service.name`: aggiunto alias `"Realizzazione e sviluppo siti web a Padova"`
- `LocalBusiness`: aggiunto `alternateName: "Web Studio Padova"`
- `FAQPage`: aggiunte 3 nuove Q&A allineate alle varianti keyword
- Mantenuti BreadcrumbList, SpeakableSpecification, AggregateOffer

## File modificati
- `src/pages/SitiWebPadova.tsx` (riscrittura sezioni + Helmet)

## File NON modificati
- Nessun nuovo componente: si riusano `AnimatedSection`, `StaggerContainer`, `PageBreadcrumb`, `Accordion`, `ContactFormWeb3Forms`, `MapSection`.
- Nessun cambio a sitemap, header, footer, colori, design tokens.
- Nessuna nuova immagine: si riusano eventuali asset esistenti delle realizzazioni.

## Esclusioni esplicite
- Non si toccano le altre pagine (interlinking parte solo *dalla* pagina Padova).
- Non si cambia palette, font, spaziature globali.
- Non si modifica la rotta né il canonical URL.

## Verifica
Build automatica + check visivo del preview a `/realizzazione-siti-web-padova` dopo l'implementazione.
