
## Diagnosi attuale

**Ridondanze copy (sotto-piega lunga e ripetitiva)**
- `AboutSection`: il blocco intro + i due paragrafi successivi ripetono 3 volte "siti professionali per professionisti, negozi e aziende in tutta Italia". La citazione "Il nostro obiettivo…" è anonima e non aggiunge EEAT.
- `StrengthsSection`: 6 card di cui 3 dicono di fatto la stessa cosa (Supporto dedicato / Sempre operativo / Sicurezza generica). Riducibili a 4 punti distintivi.
- `ServicesSection`: 6 card in carousel; "Siti web professionali" duplica `UserRoutingSection`, "Restyling" e "Gestione contenuti" sono micro-servizi che appesantiscono il flusso decisionale.
- `UserRoutingSection`: testi card con 4 righe ciascuna — il prezzo viene letto bene, il resto è didascalico.

**Interlinking presente**
Padova (About) · Realizzazioni (About) · Google Ads (About) · Professionisti/Negozi/Aziendali (Strengths + Routing) · Blog 1 articolo (FAQ preview) · FAQ completa.
**Mancanti / deboli**
- Nessun link a `/posizionamento-google-e-ai` (servizio differenziante SEO/AEO/GEO).
- Nessun link a un case study reale (`/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto`) → perdita di segnale EEAT in home.
- Nessun link a `/contatti` come pagina (solo scroll all'ancora).

**AEO/GEO**
- Solo `FAQPage` + `AggregateRating` + `Review`. Manca `Service` con catalogo, `SpeakableSpecification`, `HowTo` (processo in 4 step), `BreadcrumbList` per la home, `sameAs` su Organization già in `index.html` (da verificare).
- Nessun "answer box" testuale sopra-piega (chi/cosa/dove/da quanto) facilmente estraibile da AI Overviews / Perplexity.

---

## Cosa propongo

### 1. `AboutSection` — sfrondare e trasformare in Answer Box
- Sostituire l'intro + 2 paragrafi con: **un blocco "answer-first"** di 2 frasi (chi siamo, cosa facciamo, dove, da quando) + 3 bullet sintetici (esperienza, processo, copertura nazionale). Stesso tono, metà del testo.
- Eliminare la quote anonima.
- Mantenere le 3 card "Approccio / Risultati / Su misura" (sono brevi e chiare).
- Mantenere testimonianze (EEAT) e link Google Maps.
- **Aggiungere** 1 link contestuale a `/posizionamento-google-e-ai` (frase "siti pensati per posizionarsi su Google e sulle AI come ChatGPT, Gemini, Perplexity").
- **Aggiungere** 1 link contestuale al case study `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto` (frase "Vedi un caso reale: R.B. s.n.c.…").

### 2. `StrengthsSection` — da 6 a 4 punti distintivi
Mantengo: **Performance / SEO integrata / Mobile-first / Supporto dedicato**.
Rimuovo: "Sicurezza garantita" e "Sempre operativo" (generici, dati per scontati).
Riscrivo i copy in tono benefit-oriented (1 frase, 14-18 parole).
H2 invariato; lascio l'attuale interlinking (professionisti/negozi/aziendali).

### 3. `ServicesSection` — da 6 a 4 card, niente carousel su desktop
Mantengo 4 macro-servizi allineati al business reale: **Siti web** (link a `/siti-web-aziendali`), **SEO e visibilità AI** (link a `/posizionamento-google-e-ai`), **Google Ads** (nuova, link a `/pubblicita-google-ads`), **Restyling**.
- Rimuovo Manutenzione / Gestione contenuti / Consulenza (assorbite in altre pagine o nel form contatti).
- Su desktop griglia 4 colonne statica (carousel solo su mobile) → meno JS, miglior LCP/INP, scansione più rapida da parte di utenti e crawler.
- H2 più orientato all'utente: "Cosa possiamo fare per la tua presenza online".

### 4. `UserRoutingSection` — copy più conciso
- Da ~30 parole/card → ~18 parole/card, mantenendo il prezzo "da 199€ / 549€ / 899€" come ancora visiva (resta visibile e indicizzabile).
- Blocco "Non esiste un sito giusto per tutti…": invariato (funziona come transizione psicologica).

### 5. `HomeFaqPreview` — invariato nella struttura, +1 link
- Aggiungo nella terza FAQ ("…servono ancora nel 2026 con l'arrivo dell'AI?") un link inline a `/posizionamento-google-e-ai` (rafforza il cluster AEO/GEO).

### 6. AEO/GEO — potenziamento JSON-LD in `Index.tsx`
Aggiungo (mantenendo quanto già presente):
- `@type: "Service"` con `serviceType`, `areaServed: "IT"`, `provider: { @id: "#business" }`, e `hasOfferCatalog` con i 3 pacchetti (199/549/899).
- `@type: "HowTo"` "Come realizziamo il tuo sito web" — 4 step coerenti col reale processo (Brief gratuito → Progettazione → Sviluppo & SEO → Pubblicazione & supporto).
- `SpeakableSpecification` sui selettori `h1`, `.aeo-answer` (la classe del nuovo answer box).
- `BreadcrumbList` con singolo nodo Home (allinea pattern delle altre pagine).
- Verifico in `index.html` la presenza di `Organization.sameAs` (LinkedIn, Google Maps, Instagram se attivi) — se mancano li aggiungo lì.

### 7. SEO meta — micro-tuning Title/Description
- **Title** (≤60): `Agenzia Web Padova · Siti, SEO e Google Ads da 199€ | 4 Web Lab`
- **Description** (≤160): `Agenzia web di Padova: siti professionali da 199€, SEO per Google e AI (ChatGPT, Gemini), campagne Google Ads. Preventivo gratuito in 24h.`
(Inserisce il keyword "Google Ads" oggi assente, e "AI" per GEO.)

---

## File toccati

```text
src/pages/Index.tsx                 — JSON-LD esteso (Service+HowTo+Speakable+Breadcrumb), title/description
src/components/AboutSection.tsx     — riscrittura intro + 2 paragrafi → answer box + bullet, +2 link contestuali
src/components/StrengthsSection.tsx — da 6 a 4 card, copy riscritto
src/components/ServicesSection.tsx  — da 6 a 4 card, desktop in grid statica, mobile carousel, +link Ads/SEO-AI
src/components/UserRoutingSection.tsx — copy card più conciso
src/components/HomeFaqPreview.tsx   — +1 link inline su FAQ AI
index.html                          — solo se mancano sameAs su Organization
```

## File NON toccati
Hero, ContactSection, Footer, Header, design tokens, colori, immagini.

## Esclusioni esplicite
- Niente nuovi componenti, nessuna modifica visiva al design system.
- Nessuna metrica inventata.
- Nessuna modifica alla struttura URL / routing.

## Verifica
Build automatica + screenshot Playwright della home per controllare densità testo, layout 4-col desktop di Services, e visibilità dell'answer box sopra la piega.
