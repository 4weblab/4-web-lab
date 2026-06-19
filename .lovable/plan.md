## Obiettivo
Creare la pagina `/pubblicita-google-ads` per vendere il servizio di gestione completa Google ADS (negozi, professionisti, aziende) con SEO/GEO/AEO al massimo livello, in stile coerente con le altre landing (`SitiWebAziendali`, `SitiWebPadova`).

## Routing & Navigazione
- Nuovo file `src/pages/PubblicitaGoogleAds.tsx`, lazy import in `src/App.tsx`, route `/pubblicita-google-ads`.
- Voce nel menu principale (`Navbar`/header) e link nel footer, accanto a "SEO & AI".
- Aggiunta URL in `public/sitemap.xml`.

## Keyword target
- Primarie: "pubblicità google", "come fare pubblicità su google", "google ads agenzia", "campagne google ads".
- Secondarie: "come pubblicizzare la propria attività", "annunci google", "sponsorizzata google", "gestione google ads", "google ads per negozi/professionisti/aziende".
- GEO: Veneto, Padova e provincia (Legnaro, Abano, Albignasego, Vigonza, Selvazzano, Cadoneghe, Rubano, Este, Monselice, Cittadella, Piove di Sacco) + "in tutta Italia".

## Struttura pagina (sezioni)
1. **Hero** — H1 "Pubblicità su Google ADS: porta la tua attività davanti a chi sta già cercando". Sottotitolo orientato al beneficio (clienti reali, ROI misurabile). CTA principale "Richiedi una consulenza gratuita" + CTA WhatsApp. Hero image WebP.
2. **AEO Definition Block** (`aeo-definition`) — paragrafo 45–60 parole: "Cos'è Google ADS e come funziona la pubblicità su Google" in stile risposta diretta per AI Overviews/Perplexity.
3. **Perché fare pubblicità su Google** — 6 benefici a icone (intento di acquisto alto, risultati immediati, misurabilità, controllo budget, scalabilità, targeting locale). Senza tecnicismi.
4. **Per chi è il servizio** — 3 card (Negozi/locali fisici, Professionisti, Aziende/B2B) con esempi concreti di obiettivi tipici, senza prezzi per tipologia. Immagine WebP di supporto.
5. **Tipi di campagne che gestiamo** — chip/grid leggera: Search, Performance Max, Shopping, Display, YouTube, Remarketing, Local. Una riga ciascuna.
6. **Il nostro metodo in 5 step** — Analisi → Strategia & keyword → Setup campagne → Ottimizzazione continua → Report mensile. Markup `HowTo`. Immagine WebP a fianco.
7. **Prezzi & consulenza gratuita** — sezione dedicata che spiega perché non esiste un listino fisso (obiettivi, settore, concorrenza, area geografica, budget media). Forte CTA verso consulenza gratuita. Niente fasce € per tipo cliente.
8. **Google ADS in Veneto e in tutta Italia** — paragrafo GEO con elenco province e città, gestione 100% da remoto + sede operativa Legnaro (PD).
9. **FAQ answer-first** (`aeo-faq-answer`, accordion) — 7 domande:
   - Quanto costa fare pubblicità su Google?
   - In quanto tempo si vedono i risultati?
   - Qual è il budget minimo consigliato?
   - Google ADS funziona per piccole attività locali?
   - Differenza tra Google ADS e SEO?
   - Gestite campagne anche fuori dal Veneto?
   - Cosa include la consulenza gratuita?
10. **CTA finale** — form Web3Forms (riusato da pattern esistente, key 2afa7184…, note GDPR Art 6.1.b) + WhatsApp con warning desktop.

## SEO / Helmet
- `<title>` ≤ 60ch: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab".
- Meta description ≤ 160ch focalizzata su consulenza gratuita + Veneto/Italia.
- Canonical, og:*, twitter:* self-reference su `https://4weblab.it/pubblicita-google-ads`.
- `robots`: `index, follow, max-snippet:-1, max-image-preview:large`.

## JSON-LD (single `@graph`)
- `Service` (`serviceType: "Google Ads Management"`, provider = LocalBusiness 4 Web Lab, `areaServed` Veneto + Italia, `offers.priceSpecification` testuale "su preventivo / consulenza gratuita", **niente** AggregateOffer numerico).
- `LocalBusiness` ref con telefono, indirizzo Legnaro, geo.
- `FAQPage` con le 7 Q&A.
- `HowTo` con i 5 step.
- `BreadcrumbList` (Home → Pubblicità Google ADS).
- `SpeakableSpecification` su `.aeo-definition` e `.aeo-faq-answer`.
- `WebPage` con `primaryImageOfPage`.

## Immagini (WebP, generate con tool, salvate come `.asset.json` via lovable-assets)
1. **Hero** (1600×900) — visualizzazione astratta premium di una SERP Google con annunci evidenziati, palette navy/arancio coerente con il sito.
2. **Sezione "Per chi"** (1200×800) — laptop + grafico crescita lead, stile minimal premium light blue-grey.
3. **Sezione "Metodo"** (1200×800) — workflow astratto step-by-step.
- Tutte WebP, `fetchpriority="high"` solo sull'hero, `loading="lazy"` sulle altre, dimensioni esplicite. Hero preload in Helmet.

## Stile & Componenti
- Riuso pattern e tokens di `SitiWebAziendali.tsx` / `SitiWebPadova.tsx`: bg bianco/light blue-grey, CTA rounded-xl navy/arancio, accordion shadcn, icone lucide-react (Megaphone, Target, TrendingUp, MapPin, Search, BarChart3, ShoppingBag, Youtube, HelpCircle, Layers, Sparkles).
- Niente Framer Motion sull'H1 (rispetto CWV memory).
- ScrollToTop già globale.

## Interlinking
- Link contestuali a `/posizionamento-google-e-ai`, `/siti-web-aziendali`, `/siti-web-per-negozi`, `/realizzazione-siti-web-per-professionisti`, `/realizzazione-siti-web-padova`, `/faq-realizzazione-siti-web`.
- Aggiungere link inverso da `/posizionamento-google-e-ai` (sezione correlata) verso la nuova pagina.

## File toccati
- `src/pages/PubblicitaGoogleAds.tsx` (nuovo)
- `src/App.tsx` (route + lazy)
- `src/components/Navbar.tsx` (voce menu)
- `src/components/Footer.tsx` (link)
- `src/pages/PosizionamentoGoogleEAi.tsx` (link reciproco, modifica minima)
- `public/sitemap.xml` (nuova URL)
- `src/assets/google-ads-hero.webp.asset.json` + 2 supporto (via lovable-assets)

## Non incluso (per restare nello scope)
- Nessuna modifica al pricing memory (prezzi siti web invariati).
- Nessun nuovo articolo blog (lo possiamo proporre in seguito).
