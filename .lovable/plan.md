
# Interlinking sito-wide: juice link contestuali su tutte le pagine

Obiettivo: distribuire link interni naturali tra le pagine del sito per rafforzare la SEO topica, aumentare il tempo sul sito e guidare l'utente verso landing/articoli pertinenti. Inserimento esclusivamente nei paragrafi di testo, in punti dove il link è coerente con la frase. Nessuna modifica a layout, struttura o tono.

## Stato attuale

- **Pagine ben linkate**: `SitiWebPadova` (2 link a articoli), `SitiWebNegozi` (2 box "altri profili"), `BlogNotFoundOnGoogleArticle` (4 juice link contestuali), `HomeFaqPreview` (1 link costi), `FaqSitiWeb` (1 link costi).
- **Pagine senza link contestuali nel body**: `SitiWebAziendali`, `SitiWebProfessionisti`, `BlogWebsiteCostArticle`, `BlogSiteVsSocialArticle`, `BlogOutdatedWebsiteArticle`, `BlogGdprArticle`, `BlogAiWebsiteArticle`, `Contact`.

Quasi tutti gli articoli del blog hanno solo la CTA finale "Richiedi una valutazione gratuita". È il buco più importante.

## Principi di inserimento

1. **Naturalezza prima di tutto**: il link deve sembrare un riferimento utile, mai forzato. Anchor text descrittivo (3–6 parole), mai "clicca qui".
2. **Massimo 2–3 link contestuali per pagina** (oltre a CTA, header, footer e RelatedArticles esistenti).
3. **Anchor text variato**: evitare ripetizioni esatte tra pagine diverse.
4. **Nessuna nuova sezione, nessun nuovo paragrafo**: si modifica solo il testo già presente integrando il link.
5. **Niente link a pagina corrente** né link reciproci ridondanti se già presenti via `RelatedArticles`.

## Mappa interlinking (cosa va dove)

### Landing principali

**`SitiWebAziendali.tsx`**
- Sezione "Quanto costa un sito web aziendale" → link su "valutazione senza impegno" o riferimento a guida costi: linka frase tipo "il costo dipende da struttura, contenuti e obiettivi" alla guida → `/blog/quanto-costa-un-sito-web-nel-2026` (anchor: "una panoramica dei costi reali").
- Sezione "Cosa realizziamo per le aziende" → frase su crescita nel tempo → `/realizzazione-siti-web-padova` se si parla di territorio, oppure link al rinnovo sito → `/blog/sito-web-obsoleto-5-segnali-...` (anchor: "rinnovare un sito ormai datato").
- FAQ "Serve davvero un sito web per un'azienda oggi?" → la risposta cita Google: linkare a `/blog/perche-il-tuo-sito-non-si-trova-su-google` (anchor: "essere trovati su Google").

**`SitiWebProfessionisti.tsx`**
- Sezione "Cosa deve comunicare un sito web per professionisti" → frase su credibilità online → link a `/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026` (anchor: "presenza professionale rispetto ai soli social").
- Sezione "Quanto costa un sito web per professionisti" → naturalmente verso `/blog/quanto-costa-un-sito-web-nel-2026` (anchor: "cosa incide davvero sul prezzo di un sito").
- Sezione "Perché scegliere 4 Web Lab" → in chiusura, link a `/realizzazione-siti-web-padova` se cita Padova/territorio (anchor: "studio professionale con sede a Padova").

**`SitiWebNegozi.tsx`**
- Sezione "Perché oggi un negozio senza sito web perde clienti" → riferimento a Google → `/blog/perche-il-tuo-sito-non-si-trova-su-google` (anchor: "non comparire nelle ricerche dei clienti").
- Sezione "Siti web progettati per negozi locali" → link a `/realizzazione-siti-web-padova` (anchor: "negozi della provincia di Padova").
- Sezione "Quanto costa un sito web per negozi" → link a `/blog/quanto-costa-un-sito-web-nel-2026` (anchor: "guida completa ai costi di un sito").

**`SitiWebPadova.tsx`** — già ben linkata, aggiungo solo:
- Sezione "Operativi a Padova e provincia" → 1 nuovo link a `/blog/perche-il-tuo-sito-non-si-trova-su-google` o a una landing categoria, dove parla di tessuto imprenditoriale.

**`FaqSitiWeb.tsx`** — già ha 1 link contestuale. Aggiungo 2–3 link nelle risposte FAQ esistenti dove pertinente:
- FAQ su AI → link a `/blog/siti-web-creati-con-intelligenza-artificiale`.
- FAQ su tempistiche/qualità → link a `/blog/sito-web-obsoleto-...`.
- FAQ su Google/SEO (se presente) → link a `/blog/perche-il-tuo-sito-non-si-trova-su-google`.

**`Contact.tsx`** — pagina conversione: 1–2 link discreti nelle sezioni informative (non nel form):
- Eventuale frase introduttiva o sezione contatti laterale → link a `/blog` o a una landing categoria pertinente. Massimo 1 link, se già non c'è.

### Articoli del blog (priorità alta — oggi sono "vicoli ciechi")

Per ciascuno aggiungo **2 juice link contestuali** in punti naturali del body, mantenendo lo stile già usato in `BlogNotFoundOnGoogleArticle` (`text-accent font-medium hover:underline`).

**`BlogWebsiteCostArticle.tsx`** (Quanto costa un sito web)
- Quando parla di siti AI/economici → link a `/blog/siti-web-creati-con-intelligenza-artificiale`.
- Quando parla di siti che invecchiano o vanno rifatti → link a `/blog/sito-web-obsoleto-...`.
- Eventualmente link a `/realizzazione-siti-web-padova` se cita zona/territorio.

**`BlogSiteVsSocialArticle.tsx`** (Sito vs Social)
- Quando parla di farsi trovare → link a `/blog/perche-il-tuo-sito-non-si-trova-su-google`.
- Quando parla di asset di proprietà o investimento → link a `/blog/quanto-costa-un-sito-web-nel-2026`.

**`BlogOutdatedWebsiteArticle.tsx`** (Sito obsoleto)
- Quando parla di velocità/Google → link a `/blog/perche-il-tuo-sito-non-si-trova-su-google`.
- Quando parla di rifacimento/budget → link a `/blog/quanto-costa-un-sito-web-nel-2026`.

**`BlogGdprArticle.tsx`** (GDPR)
- Quando parla di sito strutturato/professionale → link a `/siti-web-aziendali`.
- Quando parla di siti vecchi non a norma → link a `/blog/sito-web-obsoleto-...`.

**`BlogAiWebsiteArticle.tsx`** (Siti con AI)
- Quando parla di costi → link a `/blog/quanto-costa-un-sito-web-nel-2026`.
- Quando parla di siti che non si posizionano → link a `/blog/perche-il-tuo-sito-non-si-trova-su-google`.

### Pagine NON modificate

- `Index.tsx` (Home) e suoi componenti: già ricca di link via `UserRoutingSection`, `ServicesSection`, `HomeFaqPreview`. Lascio intatta.
- `Blog.tsx`: indice articoli, già è un hub di link.
- Pagine `Demo*`, `PrivacyPolicy`, `CookiePolicy`, `NotFound`: irrilevanti per interlinking SEO.
- `Header.tsx` e `Footer.tsx`: navigazione globale, già linkano verso le aree principali.

## File modificati

- `src/pages/SitiWebAziendali.tsx`
- `src/pages/SitiWebProfessionisti.tsx`
- `src/pages/SitiWebNegozi.tsx`
- `src/pages/SitiWebPadova.tsx`
- `src/pages/FaqSitiWeb.tsx`
- `src/pages/Contact.tsx` (solo se trovo punto naturale)
- `src/pages/BlogWebsiteCostArticle.tsx`
- `src/pages/BlogSiteVsSocialArticle.tsx`
- `src/pages/BlogOutdatedWebsiteArticle.tsx`
- `src/pages/BlogGdprArticle.tsx`
- `src/pages/BlogAiWebsiteArticle.tsx`

Totale stimato: **~22–26 nuovi link contestuali** distribuiti in modo equilibrato. Nessun file nuovo, nessuna modifica a `RelatedArticles`, schema, sitemap, routing o data file.

## Stile dei link

- Articoli blog: `className="text-accent font-medium hover:underline"` (coerente con `BlogNotFoundOnGoogleArticle`).
- Landing: `className="text-accent hover:underline font-medium"` (coerente con `SitiWebPadova`).
- Tutti i link aprono nella stessa scheda (navigazione interna SPA).

## Esito atteso

- Ogni articolo del blog smette di essere un vicolo cieco: 2 link contestuali + RelatedArticles + CTA + Header.
- Ogni landing principale rinforza il legame con le altre landing e con il blog.
- Distribuzione di "link juice" più equa verso le pagine commerciali strategiche (`/realizzazione-siti-web-padova`, `/siti-web-aziendali`) e verso gli articoli più SEO-rilevanti.
- Nessuna percezione di "spam interno": ogni link è dentro una frase che lo giustifica.
