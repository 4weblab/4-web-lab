import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, MapPin, Zap, Sparkles, MessageCircle, Store, Briefcase, Building2, Check } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import Footer from "@/components/Footer";
import albProssimita from "@/assets/albignasego-prossimita.webp";
import albVelocita from "@/assets/albignasego-velocita.webp";
import albIa from "@/assets/albignasego-ia.webp";

const TITLE = "Web Agency Albignasego (PD) | Siti Web da 490€";
const DESCRIPTION =
  "Realizzazione siti web ultra-veloci per negozi e attività di Albignasego e zona sud di Padova. Contatto diretto, preventivo in 24h.";
const URL = "https://4weblab.it/realizzazione-siti-web-albignasego";

const vantaggi = [
  {
    image: albProssimita,
    alt: "Incontro diretto tra sviluppatore e titolare di un negozio",
    icon: MapPin,
    title: "Prossimità Reale",
    description:
      "Nessun intermediario o call center. Parli direttamente con chi sviluppa il codice, a pochi minuti da Albignasego e dalla zona sud di Padova.",
  },
  {
    image: albVelocita,
    alt: "Sito web ultra-veloce con architettura Jamstack",
    icon: Zap,
    title: "Zero Manutenzione",
    description:
      "Architettura Jamstack pura: il tuo sito resta veloce e sicuro senza doverci pensare, anche nei periodi di maggiore afflusso di clienti.",
  },
  {
    image: albIa,
    alt: "Assistente IA che consiglia un'attività locale",
    icon: Sparkles,
    title: "Pronti per l'IA",
    description:
      "In una zona con tanti negozi e professionisti in concorrenza diretta, farsi consigliare da Google e da ChatGPT fa la differenza. Ottimizziamo il tuo sito per questo.",
  },
];

const pacchetti = [
  {
    icon: Store,
    name: "Siti per Negozi",
    price: "490€",
    features: ["Sito vetrina one-page", "Ottimizzazione SEO locale", "Modulo contatti e WhatsApp", "Consegna in pochi giorni"],
    to: "/siti-web-per-negozi",
  },
  {
    icon: Briefcase,
    name: "Siti per Professionisti",
    price: "990€",
    features: ["Sito multipagina su misura", "Blog e area news inclusa", "Dati strutturati per l'IA", "Posizionamento locale avanzato"],
    to: "/siti-web-per-professionisti",
    highlight: true,
  },
  {
    icon: Building2,
    name: "Siti Web Aziendali",
    price: "1.890€",
    features: ["Architettura completa per PMI", "Contenuti e copywriting dedicati", "SEO tecnica e AEO/GEO", "Integrazioni e aree riservate"],
    to: "/siti-web-aziendali",
  },
];

const SitiWebPonteSanNicolo = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Realizzazione siti web Albignasego", item: URL },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${URL}#webpage`,
                url: URL,
                name: TITLE,
                description: DESCRIPTION,
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                provider: { "@id": "https://4weblab.it/#business" },
                offers: {
                  "@type": "AggregateOffer",
                  url: URL,
                  availability: "https://schema.org/InStock",
                  priceCurrency: "EUR",
                  lowPrice: "490",
                  highPrice: "1890",
                  offerCount: 3,
                },
              },
              {
                "@type": "Service",
                name: "Realizzazione siti web ad Albignasego e zona sud di Padova",
                provider: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "City", name: "Albignasego" },
                  { "@type": "City", name: "Selvazzano Dentro" },
                  { "@type": "City", name: "Maserà di Padova" },
                  { "@type": "City", name: "Due Carrare" },
                ],
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "EUR",
                  lowPrice: "490",
                  highPrice: "1890",
                  offerCount: 3,
                },
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Header minimale - landing pura */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="container-section flex items-center justify-between py-5" aria-label="Navigazione landing">
          <Link to="/" aria-label="Vai alla home" className="flex items-center gap-2.5 rounded-lg hover:opacity-90 transition-opacity">
            <img alt="4 Web Lab logo" className="w-9 h-9 rounded-lg object-contain" src="/logo.webp" width={36} height={36} decoding="async" />
            <span className="font-serif text-xl font-semibold text-primary-foreground">4 Web Lab</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Visita il sito principale
          </Link>
        </nav>
      </header>

      <main id="main-content">
        {/* Hero */}
        <section className="page-hero">
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="alb-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#alb-hero-noise)" />
            </svg>
          </div>
          <div className="hero-spotlight" aria-hidden="true" />
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" aria-hidden="true" />

          <div className="container-section relative z-10 pt-16">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1
                className="heading-1 text-primary-foreground mb-6 text-balance"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" }}
              >
                Sviluppo Siti Web ad Albignasego: Soluzioni per Negozi, Professionisti e PMI Senza WordPress
              </h1>
              <p
                className="body-large text-primary-foreground/95 mb-10 max-w-3xl mx-auto text-balance"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                Sei un'attività di Albignasego o della zona sud di Padova? Creiamo siti web ultra-veloci, sicuri e
                pronti per l'IA. Zero call infinite con agenzie lontane: ci sediamo al tavolo e in 14 giorni sei
                online.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById("contatti-albignasego")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary text-lg px-10 py-4"
                  aria-label="Richiedi una valutazione gratuita"
                >
                  Richiedi una valutazione gratuita
                </button>
                <a
                  href="https://wa.me/393514656042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground/95 hover:bg-primary-foreground/10 transition-all text-base font-semibold"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" /> Scrivici su WhatsApp
                </a>
              </div>
              <p className="text-primary-foreground/95 text-sm sm:text-base font-medium mt-6">
                Sede a Legnaro (PD) • Preventivo in 24 ore • Online in 14 giorni
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Differenziazione locale */}
        <section className="section-padding bg-surface-alt-2">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="section-divider" />
              <h2 className="heading-3 mb-5">Un territorio con un'identità precisa</h2>
              <p className="body-large text-muted-foreground text-balance">
                Con quasi 27.000 abitanti, Albignasego è il secondo comune più popoloso della provincia di Padova — un
                tessuto commerciale denso lungo la Strada Provinciale Conselvana, a soli 3 km dal centro storico. Che
                la tua attività sia a San Tommaso, San Lorenzo, Carpanedo o in uno degli altri quartieri, il tuo sito
                deve competere in una delle zone commerciali più vive della cintura padovana, non limitarsi a esistere
                online.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vantaggi */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">Perché scegliere un web studio vicino ad Albignasego</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                Tre vantaggi concreti per le attività di Albignasego, Selvazzano Dentro, Maserà di Padova, Due Carrare
                e di tutta la zona sud.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
              {vantaggi.map((v) => (
                <StaggerItem key={v.title}>
                  <article className="group h-full overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.18)]">
                    <img
                      src={v.image}
                      alt={v.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="p-6 md:p-7">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/10 transition-transform duration-500 group-hover:scale-105">
                        <v.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="font-sans text-xl font-bold mb-3">{v.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Prezzi */}
        <section className="section-padding bg-surface-alt-2">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">Prezzi chiari, senza sorprese</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                Tre pacchetti trasparenti, una tantum. Sai subito quanto investi: niente preventivi al rialzo, niente
                perditempo.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
              {pacchetti.map((p) => (
                <StaggerItem key={p.name}>
                  <article
                    className={`h-full rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                      p.highlight
                        ? "border-accent/40 bg-card shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.25)]"
                        : "border-border/40 bg-card/40 backdrop-blur-xl hover:bg-card/60 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.18)]"
                    }`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/10">
                      <p.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-sans text-xl font-bold mb-2">{p.name}</h3>
                    <p className="mb-5">
                      <span className="text-sm text-muted-foreground">a partire da</span>{" "}
                      <span className="text-3xl font-black text-foreground">{p.price}</span>
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={p.to} className="text-sm font-semibold text-accent hover:underline underline-offset-4">
                      Scopri il pacchetto →
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-xs text-muted-foreground mt-6">Prezzi IVA esclusa.</p>
          </div>
        </section>

        {/* Conversione: doppia CTA */}
        <section
          id="contatti-albignasego"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)", scrollMarginTop: "var(--header-height)" }}
        >
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="alb-contact-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#alb-contact-noise)" />
            </svg>
          </div>
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="text-center mb-10">
                <div className="section-divider" />
                <h2 className="heading-2 text-primary-foreground mb-5">Parliamone di persona</h2>
                <p className="body-large text-primary-foreground/75 max-w-xl mx-auto text-balance">
                  Scrivici su WhatsApp per una risposta immediata, oppure compila il modulo: ti ricontattiamo entro 24
                  ore con un preventivo o un'analisi SEO gratuita del tuo sito attuale.
                </p>
              </AnimatedSection>

              <AnimatedSection className="text-center mb-10">
                <a
                  href="https://wa.me/393514656042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                  style={{ background: "#25D366", boxShadow: "0 12px 30px -10px rgba(37, 211, 102, 0.5)" }}
                >
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                  Scrivici su WhatsApp
                </a>
                <p className="text-xs text-primary-foreground/50 mt-3 hidden md:block">
                  Da desktop si aprirà WhatsApp Web: puoi continuare la chat dal computer.
                </p>
              </AnimatedSection>

              <AnimatedSection>
                <ContactFormWeb3Forms />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SitiWebPonteSanNicolo;
