## Hero uniformi + immagine home ritagliata su tutte le pagine interne

### Obiettivo
Uniformare l'altezza delle hero delle pagine non-home e sostituire lo sfondo puramente gradient con un ritaglio dell'immagine hero della home (skyline Padova + codice), con overlay per garantire leggibilità del testo.

### 1. Nuova immagine di sfondo per hero interne
Ritaglio dell'immagine hero della home (1920×1088) in due varianti WebP orizzontali dedicate alle hero brevi delle pagine interne:

| File | Dimensioni | Uso |
|---|---|---|
| `public/hero/hero-mini-desktop.webp` | 1920×560 | ≥768px, focus sullo skyline con codice |
| `public/hero/hero-mini-mobile.webp` | 800×500 | <768px, centrato sulla Basilica |

Rimangono invariati gli asset della home (`hero-bg-desktop/tablet/mobile.webp`).

### 2. Nuova classe utility `.page-hero`
Aggiunta a `src/index.css`, applica in un colpo solo tutto quello che oggi è duplicato in 22 file:

```css
.page-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  min-height: 440px;               /* desktop — dimensione media */
  padding: 4rem 0;                 /* garantisce respiro se il testo cresce */
  background:
    linear-gradient(90deg,
      hsl(210 73% 10% / 0.78) 0%,
      hsl(210 73% 10% / 0.55) 55%,
      hsl(210 73% 10% / 0.35) 100%),
    var(--gradient-hero);          /* fallback prima che l'immagine carichi */
  background-image:
    linear-gradient(90deg,
      hsl(210 73% 10% / 0.78) 0%,
      hsl(210 73% 10% / 0.55) 55%,
      hsl(210 73% 10% / 0.35) 100%),
    url("/hero/hero-mini-desktop.webp");
  background-size: cover;
  background-position: center right;
}

@media (max-width: 767px) {
  .page-hero {
    min-height: 360px;
    padding: 3rem 0;
    background-image:
      linear-gradient(180deg,
        hsl(210 73% 10% / 0.75) 0%,
        hsl(210 73% 10% / 0.55) 100%),
      url("/hero/hero-mini-mobile.webp");
    background-position: center;
  }
}
```

- `min-height` = altezza media garantita; se il contenuto è più alto (h1 lungo + paragrafo + CTA) il `flex` + `padding` fanno espandere naturalmente la sezione senza tagli
- Overlay lineare integrato → testo bianco resta ben leggibile
- Fallback gradient identico all'attuale → nessun "flash" durante il caricamento immagine

### 3. Refactor delle hero — sostituzione mirata

In ogni pagina target, sostituisco **solo la prima** sezione hero (top pagina):

**Prima:**
```tsx
<section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
```

**Dopo:**
```tsx
<section className="page-hero">
```

Le sezioni "CTA finale" (che usano lo stesso `var(--gradient-hero)` in fondo alle pagine) **restano invariate** — l'immagine di sfondo va solo sulla hero in cima.

### 4. Pagine coinvolte (tutte tranne home)

Servizi e informative principali:
- `SitiWebProfessionisti.tsx`, `SitiWebNegozi.tsx`, `SitiWebAziendali.tsx`
- `SitiWebPadova.tsx`, `PosizionamentoGoogleEAi.tsx`, `PubblicitaGoogleAds.tsx`
- `Contact.tsx`, `Realizzazioni.tsx`, `FaqSitiWeb.tsx`, `Blog.tsx`
- `PrivacyPolicy.tsx`, `CookiePolicy.tsx`

Articoli blog (11):
- `BlogWebsiteCostArticle`, `BlogQuotePlatformsArticle`, `BlogOutdatedWebsiteArticle`, `BlogDiyWebsiteArticle`, `BlogSiteVsSocialArticle`, `BlogAiWebsiteArticle`, `BlogArubaSupersiteArticle`, `BlogNotFoundOnGoogleArticle`, `BlogGdprArticle`

**Escluse**:
- `Index.tsx` (home — mantiene la sua hero full-screen originale)
- `NotFound.tsx` (non ha hero)
- Pagine `Demo*` (`DemoRbSncEdilizia`, `DemoPersonalTrainerVeraMethod`, `DemoMetalmeccanica`, `DemoFotovoltaico`, `DemoFlowerAtelier`, `DemoBoutiqueBB`, `DemoStudioDentisticoPremium`) → sono showcase di progetti e hanno già la loro hero con l'immagine specifica del progetto; sostituirla con lo skyline snaturerebbe la vetrina. Confermami se vuoi includerle comunque

### 5. Note tecniche
- Immagini ritagliate con PIL (stessa pipeline già usata) da `/tmp/hero-code.jpg`, encoding WebP quality 82
- Nessuna modifica ai testi h1 / breadcrumb / CTA nelle hero
- `container-section relative z-10` interno resta invariato → contenuti sempre sopra l'overlay
- Preload immagine non necessario (non è LCP delle pagine interne, che generalmente hanno h1 come LCP)
- Nessun impatto su Framer Motion, layout o accessibilità
