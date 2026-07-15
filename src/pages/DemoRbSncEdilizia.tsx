/**
 * DemoRbSncEdilizia.tsx
 * -----------------------------------------------------------------------------
 * Caso studio REALE — R.B s.n.c. di Bertoluzzo e Ragazzo (Cittadella, PD).
 * Settore: rimozione eternit / amianto e rifacimento tetti.
 * Sito live: https://rb-snc.it
 *
 * Stato: stub indicizzabile. I contenuti completi (sfida, soluzione, risultati
 * SEO/Ads, screenshot before/after) saranno aggiunti in un secondo momento.
 * -----------------------------------------------------------------------------
 */

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ExternalLink, Search, Target, Sparkles, CheckCircle2, Gauge, Calendar, Layers, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroImg from "@/assets/rb-snc-edilizia.webp";
import beforeImg from "@/assets/case-rb-snc/before-2010.webp";
import afterDesktop from "@/assets/case-rb-snc/after-desktop.webp";
import afterMobile from "@/assets/case-rb-snc/after-mobile.webp";
import afterDetail from "@/assets/case-rb-snc/after-detail.webp";
import psMobile from "@/assets/case-rb-snc/pagespeed-mobile.webp";
import psDesktop from "@/assets/case-rb-snc/pagespeed-desktop.webp";

const URL_LIVE = "https://rb-snc.it";
const URL_PAGE = "https://4weblab.it/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto";

const DemoRbSncEdilizia = () => {
  return (
    <>
      <Helmet>
        <title>R.B. s.n.c. Cittadella · sito, SEO e Google Ads | 4 Web Lab</title>
        <meta
          name="description"
          content="Case study reale: restyling completo, ottimizzazione SEO e campagna Google Ads per R.B. s.n.c., impresa edile specializzata in rimozione eternit a Cittadella (PD)."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={URL_PAGE} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={URL_PAGE} />
        <meta property="og:title" content="R.B. s.n.c. Cittadella · sito, SEO e Google Ads | 4 Web Lab" />
        <meta
          property="og:description"
          content="Case study reale: restyling, SEO e Google Ads per un'impresa edile di Cittadella (PD) specializzata in rimozione eternit e rifacimento tetti."
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `${URL_PAGE}#case-study`,
            name: "Restyling sito web, SEO e Google Ads per R.B s.n.c.",
            url: URL_PAGE,
            inLanguage: "it-IT",
            datePublished: "2026-06-29",
            dateCreated: "2026-06-29",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            author: { "@id": "https://4weblab.it/#business" },
            creator: { "@id": "https://4weblab.it/#business" },
            about: {
              "@type": "Organization",
              name: "R.B s.n.c. di Bertoluzzo e Ragazzo",
              url: URL_LIVE,
              areaServed: { "@type": "City", name: "Cittadella" },
              description:
                "Impresa edile specializzata in rimozione eternit (amianto) e rifacimento tetti, con sede a Cittadella (Padova).",
            },
            workExample: { "@type": "WebSite", url: URL_LIVE, name: "rb-snc.it" },
            keywords:
              "rimozione eternit Cittadella, rifacimento tetti Padova, sito web edilizia, Google Ads edilizia, SEO impresa edile, restyling sito edile Veneto, R.B. s.n.c.",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" },
              { "@type": "ListItem", position: 3, name: "R.B s.n.c. — Edilizia Cittadella", item: URL_PAGE },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[calc(var(--header-height)+var(--notification-bar-height))]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28" style={{ background: "var(--gradient-hero)" }}>
          <div aria-hidden className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }} />
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <PageBreadcrumb
                variant="light"
                items={[
                  { label: "Home", to: "/" },
                  { label: "Realizzazioni", to: "/realizzazioni" },
                  { label: "R.B s.n.c. — Edilizia Cittadella" },
                ]}
              />
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-accent-foreground bg-accent shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Caso studio reale · pubblicato
              </span>
              <h1 className="heading-1 text-primary-foreground mb-6 text-balance">
                R.B. s.n.c. — sito web, SEO e Google Ads per rimozione eternit e rifacimento tetti a Cittadella
              </h1>
              <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-balance">
                Restyling completo del sito, ottimizzazione SEO on-page e campagna Google Ads attiva per
                <strong> R.B. s.n.c. di Bertoluzzo e Ragazzo</strong>, impresa edile specializzata in
                rimozione amianto e rifacimento coperture con sede a Cittadella (PD).
              </p>
              <a
                href={URL_LIVE}
                target="_blank"
                rel="noopener external"
                className="hero-cta hero-cta-primary"
              >
                Visita il sito live
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-primary-foreground/80">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Sito live</span>
                <span className="inline-flex items-center gap-1.5"><Gauge className="w-4 h-4 text-accent" /> Lighthouse 95 / 96</span>
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent" /> SEO 100/100</span>
                <span className="inline-flex items-center gap-1.5"><Target className="w-4 h-4 text-accent" /> Campagna Ads attiva</span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMMAGINE COVER */}
        <section className="bg-background pt-12 md:pt-16">
          <div className="container-section">
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
              <img
                src={heroImg}
                alt="Operaio specializzato con DPI completi durante la rimozione di lastre di eternit su un tetto industriale in Veneto — caso studio R.B s.n.c. realizzato da 4 Web Lab"
                width={1600}
                height={1000}
                loading="eager"
                decoding="async"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* IL CONTESTO */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Il contesto</span>
                <h2 className="heading-2 mb-5">Un sito del 2010, fermo a 16 anni fa</h2>
                <p className="body-base text-muted-foreground mb-4">
                  Il sito precedente di R.B. s.n.c. risaliva al 2010 e mostrava tutti i limiti
                  di un'impostazione tecnica ormai superata. La concorrenza, nello stesso settore
                  della bonifica amianto e del rifacimento coperture, si era già aggiornata da tempo.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Markup HTML legacy non più allineato agli standard attuali",
                    "Esperienza mobile assente: layout pensato solo per desktop",
                    "Nessuna ottimizzazione SEO, GEO o AEO",
                    "Assenza totale di dati strutturati e schema markup",
                    "Tempi di caricamento e Core Web Vitals fuori soglia",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="rounded-2xl overflow-hidden border border-border bg-muted" style={{ boxShadow: "var(--shadow-md)" }}>
                <img
                  src={beforeImg}
                  alt="Screenshot del sito web precedente di R.B. s.n.c., realizzato nel 2010, con grafica datata e layout solo desktop"
                  width={1600}
                  height={721}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
                <figcaption className="text-xs text-muted-foreground px-4 py-2 border-t border-border bg-card">
                  Sito precedente · 2010
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* OBIETTIVI */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Obiettivi del cliente</span>
              <h2 className="heading-2 mb-4">Cosa è stato richiesto</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { t: "Immagine professionale", d: "Un sito moderno, coerente con la natura tecnica e specialistica del lavoro svolto in cantiere." },
                { t: "Risultati su Google", d: "Massimizzare la visibilità organica e attivare un canale a pagamento per i preventivi qualificati." },
                { t: "Servizi chiari", d: "Presentare in modo lineare bonifica amianto, smaltimento eternit e rifacimento coperture." },
              ].map((o) => (
                <div key={o.t} className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <h3 className="text-base font-semibold mb-2">{o.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LA SOLUZIONE */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">La soluzione</span>
              <h2 className="heading-2 mb-4">L'intervento, in quattro aree</h2>
              <p className="body-base text-muted-foreground">
                Il progetto è stato ricostruito da zero in circa un mese e mezzo, dal brief operativo
                fino alla messa online e all'attivazione della campagna pubblicitaria.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, t: "Restyling completo da zero", d: "Nuova architettura informativa, design system dedicato, gerarchia chiara dei contenuti, mobile-first nativo." },
                { icon: Gauge, t: "Ottimizzazione tecnica & Core Web Vitals", d: "Immagini WebP, asset minimi, font non bloccanti, LCP controllato, layout shift azzerato." },
                { icon: Search, t: "SEO on-page e SEO locale Veneto", d: "Title e meta dedicati, struttura H1-H2 coerente, schema LocalBusiness, copertura territoriale Cittadella e Veneto." },
                { icon: Target, t: "Campagna Google Ads dedicata", d: "Setup completo e gestione della campagna a pagamento, attualmente attiva e focalizzata sulle keyword di servizio." },
              ].map((b) => (
                <div key={b.t} className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                    <b.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-base font-semibold mb-2">{b.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Before / After</span>
              <h2 className="heading-2 mb-4">Il salto visivo, in due immagini</h2>
              <p className="body-base text-muted-foreground">
                A sinistra il sito storico del 2010. A destra il nuovo rb-snc.it, online dal 2026.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <figure className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-md)" }}>
                <img src={beforeImg} alt="Sito web R.B. s.n.c. nel 2010, design legacy non responsive" width={1600} height={721} loading="lazy" decoding="async" className="w-full h-auto block" />
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-2 border-t border-border">Before · 2010</figcaption>
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-md)" }}>
                <img src={afterDesktop} alt="Nuovo sito web R.B. s.n.c., homepage 2026 con hero scuro e CTA arancione" width={1600} height={711} loading="lazy" decoding="async" className="w-full h-auto block" />
                <figcaption className="text-xs font-semibold uppercase tracking-wider text-accent px-4 py-2 border-t border-border">After · 2026</figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-6 max-w-6xl mx-auto mt-6">
              <figure className="rounded-2xl overflow-hidden border border-border bg-card flex items-center justify-center p-4" style={{ boxShadow: "var(--shadow-sm)" }}>
                <img src={afterMobile} alt="Vista mobile di una pagina interna del nuovo sito R.B. s.n.c., scheda intervento di bonifica amianto" width={900} height={780} loading="lazy" decoding="async" className="w-full h-auto block max-w-[420px]" />
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-sm)" }}>
                <img src={afterDetail} alt="Dettaglio scheda realizzazione: bonifica amianto su copertura industriale, dati strutturati e informazioni tecniche" width={1600} height={727} loading="lazy" decoding="async" className="w-full h-auto block" />
                <figcaption className="text-xs text-muted-foreground px-4 py-2 border-t border-border">Dettaglio scheda realizzazione · vista desktop</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* RISULTATI TECNICI */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Risultati misurabili</span>
              <h2 className="heading-2 mb-4">Risultati tecnici verificabili</h2>
              <p className="body-base text-muted-foreground">
                I dati di seguito provengono da Google PageSpeed Insights (Lighthouse) e sono verificabili
                in autonomia inserendo l'URL <strong>rb-snc.it</strong> su <a href="https://pagespeed.web.dev/analysis?url=https%3A%2F%2Frb-snc.it%2F" target="_blank" rel="noopener external" className="underline decoration-accent underline-offset-2">pagespeed.web.dev</a>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { img: psMobile, label: "Mobile", scores: [["Prestazioni", 95], ["Accessibilità", 95], ["Best Practice", 100], ["SEO", 100]] },
                { img: psDesktop, label: "Desktop", scores: [["Prestazioni", 96], ["Accessibilità", 91], ["Best Practice", 100], ["SEO", 100]] },
              ].map((card) => (
                <div key={card.label} className="rounded-2xl overflow-hidden border border-border bg-card" style={{ boxShadow: "var(--shadow-md)" }}>
                  <div className="px-5 py-3 border-b border-border flex items-center justify-between">
                    <span className="text-sm font-semibold">PageSpeed · {card.label}</span>
                    <span className="text-xs text-muted-foreground">rb-snc.it</span>
                  </div>
                  <img src={card.img} alt={`Report PageSpeed Insights ${card.label} per rb-snc.it`} width={1400} height={card.label === "Mobile" ? 638 : 634} loading="lazy" decoding="async" className="w-full h-auto block" />
                  <div className="grid grid-cols-4 border-t border-border" lang="it">
                    {card.scores.map(([k, v]) => (
                      <div key={k} className="min-w-0 px-1.5 sm:px-3 py-3 text-center border-r last:border-r-0 border-border">
                        <div className="text-xl sm:text-2xl font-bold text-foreground">{v}</div>
                        <div className="text-[9px] sm:text-[10px] leading-tight uppercase tracking-wider text-muted-foreground mt-0.5 break-words hyphens-auto">{k}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground max-w-3xl mx-auto text-center mt-10 italic">
              Per rispetto della privacy del cliente non vengono pubblicati dati di traffico, CTR
              o conversioni della campagna Google Ads. I punteggi Lighthouse sopra restano
              verificabili pubblicamente.
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container-section">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Timeline</span>
              <h2 className="heading-2 mb-3">Un mese e mezzo dal brief al live</h2>
              <p className="body-base text-muted-foreground">
                Il progetto è partito da zero: il sito precedente non era recuperabile né come base
                tecnica né come impostazione di contenuti.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { n: "01", t: "Brief & strategia", d: "Analisi del settore, mappatura servizi, keyword e architettura del nuovo sito." },
                { n: "02", t: "Design & sviluppo", d: "Design system dedicato, sviluppo mobile-first, ottimizzazione tecnica e SEO." },
                { n: "03", t: "Lancio & Ads", d: "Messa online, indicizzazione, attivazione e gestione della campagna Google Ads." },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}>
                  <div className="text-3xl font-bold text-accent mb-2">{s.n}</div>
                  <h3 className="text-base font-semibold mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" /> {s.t}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROCCIO TECNICO */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">Approccio tecnico</span>
              <h2 className="heading-2 mb-6">Scelte tecniche alla base del risultato</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Design system custom (no template generici)",
                  "Immagini WebP con dimensioni esplicite",
                  "Dati strutturati JSON-LD (LocalBusiness, schema servizi)",
                  "Layout mobile-first nativo, breakpoint controllati",
                  "Accessibilità: contrasti, focus visibile, alt text",
                  "Indicizzazione: sitemap, robots, canonical puliti",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <Layers className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
                <div className="relative z-10">
                  <h2 className="heading-2 text-primary-foreground mb-5 text-balance">
                    Vuoi un risultato simile per la tua azienda?
                  </h2>
                  <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                    Sito web, SEO e Google Ads gestiti insieme da un unico partner. Parliamone senza impegno.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/contatti" className="hero-cta hero-cta-primary">
                      Richiedi una valutazione gratuita
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={URL_LIVE}
                      target="_blank"
                      rel="noopener external"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                    >
                      Apri rb-snc.it
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-primary-foreground/60 mt-4">
                    Nessun impegno. Risposta entro 24h lavorative.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DemoRbSncEdilizia;