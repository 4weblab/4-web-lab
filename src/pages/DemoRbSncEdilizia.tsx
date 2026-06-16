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
import { ArrowRight, ExternalLink, Search, Target, Sparkles, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroImg from "@/assets/rb-snc-edilizia.webp";

const URL_LIVE = "https://rb-snc.it";
const URL_PAGE = "https://4weblab.it/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto";

const DemoRbSncEdilizia = () => {
  return (
    <>
      <Helmet>
        <title>Caso studio R.B s.n.c. — sito web, SEO e Google Ads per rimozione eternit a Cittadella | 4 Web Lab</title>
        <meta
          name="description"
          content="Caso studio reale 4 Web Lab: restyling completo del sito, ottimizzazione SEO e campagna Google Ads per R.B s.n.c. di Bertoluzzo e Ragazzo, impresa edile specializzata in rimozione amianto e rifacimento tetti a Cittadella (PD)."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={URL_PAGE} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={URL_PAGE} />
        <meta property="og:title" content="Caso studio R.B s.n.c. — sito web, SEO e Google Ads | 4 Web Lab" />
        <meta
          property="og:description"
          content="Restyling, SEO e Google Ads per un'impresa edile di Cittadella (PD) specializzata in rimozione eternit e rifacimento tetti. Caso studio reale 4 Web Lab."
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
            keywords:
              "rimozione eternit Cittadella, rifacimento tetti Padova, sito web edilizia, Google Ads edilizia, SEO impresa edile, R.B s.n.c.",
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

      <main id="main-content" className="pt-[var(--header-height)]">
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

        {/* INTRO + PREVIEW */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-2 mb-6">Il progetto in breve</h2>
              <p className="body-base text-muted-foreground mb-4">
                <strong>R.B. s.n.c. di Bertoluzzo e Ragazzo</strong> è un'impresa edile attiva nel Veneto, specializzata
                in <strong>rimozione eternit</strong> (smaltimento amianto) e <strong>rifacimento tetti</strong>.
                Ha scelto 4 Web Lab per un intervento completo su presenza online e acquisizione clienti.
              </p>
              <p className="body-base text-muted-foreground mb-10">
                Il lavoro ha incluso un <strong>restyling completo del sito</strong>, l'<strong>ottimizzazione SEO</strong>
                (struttura, contenuti, dati strutturati, Core Web Vitals) e l'attivazione di una
                <strong> campagna Google Ads</strong> mirata al bacino locale, con focus su preventivi e contatti qualificati.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {[
                  { icon: Sparkles, title: "Restyling completo", desc: "Nuovo design, struttura chiara, mobile-first." },
                  { icon: Search, title: "Ottimizzazione SEO", desc: "On-page, schema, performance, SEO locale." },
                  { icon: Target, title: "Google Ads", desc: "Campagna a pagamento per lead qualificati." },
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" style={{ background: "var(--gradient-accent)" }}>
                      <b.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h3 className="text-base font-semibold mb-1.5">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 md:p-8 border border-dashed border-border bg-muted/30">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" /> Case study in preparazione
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Stiamo preparando la scheda completa con sfida, soluzione, screenshot before/after e i risultati
                  ottenuti su SEO e campagne Google Ads. Nel frattempo puoi vedere il lavoro dal vivo:
                </p>
                <ul className="space-y-2 mb-2">
                  {["Sito web restilizzato e responsive", "SEO on-page e SEO locale Veneto", "Campagna Google Ads attiva"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
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