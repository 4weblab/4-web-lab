

## Nuova pagina satellite /siti-web-aziendali + correzioni scroll + link interni

### Panoramica

Creazione di una nuova pagina satellite ottimizzata SEO per keyword legate a "sito web aziendale" e "siti web per aziende", con correzione del comportamento di scroll su tutte le pagine satellite e aggiunta di link interni contestuali nella home page.

---

### 1. Nuova pagina: `src/pages/SitiWebAziendali.tsx`

Creazione del file seguendo la stessa struttura della pagina esistente `/realizzazione-siti-web-per-professionisti`, con le seguenti sezioni:

**Hero (solo testo, sfondo gradient-surface)**
- H1: "Siti web aziendali strutturati e multipagina"
- Sottotitolo che descrive il servizio per aziende e PMI in tutta Italia, con architetture scalabili e orientate alla crescita
- CTA "Contattaci ora" che porta alla sezione contatti della home

**Sezione H2 -- "Perche un'azienda ha bisogno di un sito strutturato"**
- Griglia di 4 card (stile card-glass) con: credibilita, presenza online, acquisizione contatti, SEO e crescita
- Keyword integrate naturalmente: "sito web aziendale", "realizzazione sito web azienda"

**Sezione H2 -- "Cosa realizziamo per le aziende"**
- Layout a due colonne: testo a sinistra, immagine a destra
- Descrizione di siti multipagina, architetture scalabili, sezioni dedicate
- Immagine: placeholder con Unsplash (ambiente ufficio/mockup) o immagine decorativa coerente

**Sezione H2 -- "Siti multipagina e strutturati"**
- Layout a due colonne invertito: immagine a sinistra, testo a destra
- Concetti di struttura, navigazione chiara, gerarchia contenuti, scalabilita

**Sezione H2 -- "Il nostro metodo"**
- Processo in 4 step (stile identico alla pagina professionisti): Analisi, Progettazione, Sviluppo, Revisione e lancio
- Adattato al contesto aziendale

**Sezione H2 -- "Perche scegliere 4weblab"**
- Lista con CheckCircle2 (stile identico alla pagina professionisti)
- Focus su realizzazione siti web aziendali

**CTA finale**
- Sfondo gradient-hero con invito al contatto
- Pulsante "Contattaci ora" + link "Scopri tutti i servizi" verso home

Icone utilizzate: Building2, TrendingUp, Layers, Settings, Award, ArrowRight, CheckCircle2 (da lucide-react, gia installata).

---

### 2. Registrazione rotta in `src/App.tsx`

Aggiunta della nuova rotta `/siti-web-aziendali` che punta al componente `SitiWebAziendali`, prima della rotta catch-all.

---

### 3. Correzione comportamento scroll su tutte le pagine

Aggiunta di uno `useEffect` con `window.scrollTo(0, 0)` in:
- `src/pages/SitiWebAziendali.tsx` (nuova pagina)
- `src/pages/SitiWebProfessionisti.tsx` (pagina esistente)

In alternativa, creazione di un componente `ScrollToTop` globale in `src/App.tsx` che usa `useLocation` di react-router-dom per fare scroll to top ad ogni cambio di pathname. Questa soluzione e preferibile perche copre automaticamente tutte le pagine presenti e future.

---

### 4. Link interni nella home page

Modifica dei seguenti componenti per aggiungere link contestuali a `/siti-web-aziendali`:

**`src/components/StrengthsSection.tsx` (riga 46)**
- "piccole e medie imprese" diventa `<Link to="/siti-web-aziendali">piccole e medie imprese</Link>`

**`src/components/AboutSection.tsx` (riga 32)**
- Le occorrenze di "aziende" (2 presenti) diventano `<Link to="/siti-web-aziendali">aziende</Link>`

**`src/components/ServicesSection.tsx` (righe 13, 21, 27, 33, 39, 45)**
- Le occorrenze di "aziende" nelle descrizioni dei servizi diventano `<Link to="/siti-web-aziendali">aziende</Link>`

**`src/components/Hero.tsx` (riga 68)**
- "piccole medie imprese" diventa `<Link to="/siti-web-aziendali">piccole medie imprese</Link>`
- Stile coerente: `text-primary-foreground/90 hover:underline font-medium` (per mantenere visibilita su sfondo scuro)

Tutti i link avranno lo stile `text-accent hover:underline font-medium` (tranne quelli su sfondo scuro della Hero).

---

### Dettagli tecnici

- La pagina utilizza gli stessi componenti `AnimatedSection`, `StaggerContainer`, `StaggerItem` gia usati nella pagina professionisti
- Stili CSS: riuso completo delle classi esistenti (`card-glass`, `icon-box`, `section-padding`, `container-section`, `heading-1`, `heading-2`, `btn-primary`, `btn-outline-light`)
- Il componente `ScrollToTop` viene creato come wrapper dentro `BrowserRouter` in `App.tsx` usando `useLocation` + `useEffect`
- Nessuna modifica al menu di navigazione principale
- Nessun nuovo pacchetto necessario

