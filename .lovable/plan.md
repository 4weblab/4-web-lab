## Obiettivo
Trasformare lo stub `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto` in un case study completo, **fattuale** (zero metriche inventate), basato su screenshot reali e dati Lighthouse verificabili. Approccio scelto: **Opzione 3** — case study senza numeri di business inventati, con focus su Lighthouse/PageSpeed reali (95 mobile, 96 desktop, 100 SEO, 100 Best Practice) come prova oggettiva. Tono **asciutto-istituzionale**, terza persona, nessun inserto personale.

## Asset forniti dall'utente
- `home.jpg` — hero nuovo sito (desktop)
- `mobile.jpg` — vista mobile pagina interna
- `realizzaz.jpg` — dettaglio scheda realizzazione
- `pi1.jpg` — PageSpeed mobile (95/95/100/100)
- `pi2.jpg` — PageSpeed desktop (96/91/100/100)
- `sfondo.webp` — screenshot vecchio sito 2010

Tutte le immagini verranno convertite/ottimizzate in WebP (qualità 82), ridimensionate (max-width 1600 per gli screenshot full, 900 per il mobile mockup, 1400 per i PageSpeed) e salvate in `src/assets/case-rb-snc/`. I `.jpg` originali non vengono committati.

## Nuova struttura della pagina

```
1. HERO (rivisto, minimo)
   - Trust-strip sotto la CTA: "Sito live · Lighthouse 95/96 · SEO 100/100 · Campagna Ads attiva"

2. IL CONTESTO
   - "Un sito del 2010, fermo a 16 anni fa"
   - Bullet: HTML legacy, no mobile, no SEO/AEO, no schema, concorrenza già modernizzata
   - Screenshot `sfondo.webp` con etichetta "Sito precedente · 2010"

3. OBIETTIVI DEL CLIENTE (3 punti)
   - Sito moderno con tono professionale
   - Massimizzazione dei risultati su Google (organico + Ads)
   - Presentazione chiara dei servizi di bonifica amianto e rifacimento coperture

4. LA SOLUZIONE — INTERVENTO IN 4 AREE
   a) Restyling completo da zero (1 mese e mezzo)
   b) Ottimizzazione tecnica & Core Web Vitals
   c) SEO on-page, SEO locale Veneto, schema LocalBusiness
   d) Campagna Google Ads dedicata, attualmente attiva

5. BEFORE / AFTER VISIVO
   - Griglia 2 colonne: BEFORE (`sfondo.webp`) vs AFTER (`home.jpg`)
   - Sotto: mockup mobile (`mobile.jpg`) + dettaglio scheda interna (`realizzaz.jpg`)

6. RISULTATI TECNICI VERIFICABILI (solo dati reali)
   - Due card PageSpeed: Mobile 95 · Desktop 96, con i 4 score per ciascuna
   - Nota: "Per rispetto della privacy del cliente non vengono pubblicati dati di traffico, CTR o conversioni. I punteggi Lighthouse sopra sono verificabili in autonomia su pagespeed.web.dev."
   - Link diretto a PageSpeed Insights con URL rb-snc.it pre-compilato

7. TIMELINE
   - "1 mese e mezzo dal brief al live" — 3 step: Brief & strategia · Design & sviluppo · Lancio & Ads

8. APPROCCIO TECNICO (sintetico)
   - Design system custom, immagini WebP, dati strutturati, mobile-first, accessibilità

9. CTA FINALE (rifinita, tono asciutto)
```

## Stile copy
- Terza persona / forma impersonale ("È stato realizzato…", "Il sito è stato sviluppato…")
- Nessun "noi", nessun aneddoto personale, nessuna testimonianza
- Spazio lasciato per inserire in futuro una review Google del cliente (sezione "testimonianza" NON creata ora)

## SEO / EEAT
- **Title** (≤60): `R.B. s.n.c. Cittadella · sito, SEO e Google Ads | 4 Web Lab`
- **Meta description** (≤160): `Case study reale: restyling completo, ottimizzazione SEO e campagna Google Ads per R.B. s.n.c., impresa edile specializzata in rimozione eternit a Cittadella (PD).`
- JSON-LD `CreativeWork` esteso con `dateCreated`/`datePublished` 2026, `keywords` ampliato, `workExample` con URL del sito live.
- `BreadcrumbList` invariato.

## File modificati
- `src/pages/DemoRbSncEdilizia.tsx` — riscrittura sezioni post-hero
- `src/assets/case-rb-snc/` (nuova cartella) — 6 immagini WebP ottimizzate
- `public/sitemap.xml` — `lastmod` aggiornato

## File NON modificati
- Nessun cambio a colori, tipografia, design tokens, Header, Footer, routing
- Nessun cambio alla card di `/realizzazioni`

## Esclusioni esplicite
- Nessuna metrica di business inventata (CTR, lead, posizionamenti, % traffico)
- Nessuna testimonianza (riservata a futura review Google del cliente)
- Nessun budget Ads, nessun dato di campagna

## Verifica
Build automatica + screenshot Playwright della pagina renderizzata per controllare layout before/after e caricamento WebP.
