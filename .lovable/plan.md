## Obiettivo
Aggiungere a ogni pagina del sito **un solo link discorsivo** (in linea con il testo, non un bottone) verso `/pubblicita-google-ads`, con anchor text variato e contestuale al contenuto della pagina ospitante.

## Regole generali
- **1 link per pagina**, integrato in un paragrafo esistente (no nuove sezioni dedicate).
- Anchor text **vario** (no ripetizione esatta) ma sempre con keyword pertinenti: "pubblicità su Google ADS", "campagne Google ADS", "fare pubblicità su Google", "Google ADS gestite da noi", ecc.
- Usare `<Link to="/pubblicita-google-ads">` (React Router) sulle pagine SPA; `<a href>` solo se la pagina già usa quello stile.
- Posizionare il link dove **fluisce naturalmente** nel discorso (es. dopo un riferimento a visibilità, traffico, acquisizione clienti, Google, SEO).
- **Escludere**: `PubblicitaGoogleAds.tsx` (self), `NotFound.tsx`, `CookiePolicy.tsx`, `PrivacyPolicy.tsx` (pagine legali/utility).

## Pagine da modificare e dove inserire il link

### Servizi principali
1. **Index.tsx** (Home) — link in `AboutSection` o in un blocco testuale: "…oltre ai siti web, possiamo anche [gestire le tue campagne Google ADS](…)".
2. **SitiWebNegozi.tsx** — paragrafo su visibilità locale: "…e se vuoi accelerare i risultati, possiamo affiancare il sito con [campagne Google ADS mirate]".
3. **SitiWebProfessionisti.tsx** — sezione su acquisizione clienti: "…per ottenere richieste subito, valuta anche [la pubblicità su Google ADS]".
4. **SitiWebAziendali.tsx** — paragrafo su lead B2B: "…integrabile con [campagne Google ADS per generare lead qualificati]".
5. **SitiWebPadova.tsx** — sezione locale Padova: "…per le attività di Padova che vogliono risultati immediati offriamo anche [gestione Google ADS]".
6. **PosizionamentoGoogleEAi.tsx** — paragrafo SEO vs ADS: "…mentre la SEO costruisce visibilità nel tempo, [Google ADS] porta traffico immediato; i due canali si rafforzano".
7. **Realizzazioni.tsx** — chiusura/intro: "…oltre ai siti realizzati, gestiamo anche [campagne Google ADS]".
8. **FaqSitiWeb.tsx** — in una risposta esistente che parla di traffico/visibilità, link a "[pubblicità su Google ADS]".
9. **Contact.tsx** — nel paragrafo "Non sai da dove partire?" o nell'hero, riga discorsiva con link "[gestione Google ADS]".

### Blog (9 articoli)
Inserire 1 link contestuale nel corpo di ciascun articolo:
10. **BlogNotFoundOnGoogleArticle.tsx** — naturale: parla di non comparire su Google → "…oppure [investire in pubblicità su Google ADS] per comparire subito".
11. **BlogAiWebsiteArticle.tsx** — accenno traffico/promozione → link.
12. **BlogArubaSupersiteArticle.tsx** — in confronto piattaforme/visibilità.
13. **BlogDiyWebsiteArticle.tsx** — passaggio su come farsi trovare.
14. **BlogGdprArticle.tsx** — link più sottile, es. in conclusione su strumenti di marketing conformi.
15. **BlogOutdatedWebsiteArticle.tsx** — passaggio su rilancio sito + traffico.
16. **BlogQuotePlatformsArticle.tsx** — confronto canali acquisizione.
17. **BlogSiteVsSocialArticle.tsx** — paragrafo su canali di traffico, ottimo per ADS.
18. **BlogWebsiteCostArticle.tsx** — sezione su investimenti complementari.

### Demo (escluse di default)
Le pagine `Demo*.tsx` sono showcase per clienti specifici e non rappresentano contenuto editoriale del sito 4 Web Lab; **non vengono modificate** (no interlinking forzato in demo di terzi).

## Tecnica
- Per ogni file: 1 modifica chirurgica `apply_patch` che aggiunge un `<Link>` (importato se non già presente) all'interno di un paragrafo esistente.
- Verifica build automatica al termine.

## Esclusioni esplicite
- Nessuna nuova sezione, nessun bottone, nessun cambio di layout.
- Nessuna modifica a sitemap, JSON-LD o memoria.
- Pagine demo non toccate (confermami se invece le vuoi includere).
