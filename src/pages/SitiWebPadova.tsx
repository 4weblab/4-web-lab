import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CheckCircle2, MapPin, Briefcase, Settings, Globe, MessageCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const SitiWebPadova = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    window.location.href = "/#contatti";
  };

  return (
    <>
      <Helmet>
        <title>Realizzazione Siti Web Padova | da 199€ | 4 Web Lab</title>
        <meta
          name="description"
          content="Agenzia web a Padova: siti professionali per aziende, negozi e professionisti da 199€. SEO locale, design moderno e preventivo gratuito in 24h."
        />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta property="og:title" content="Realizzazione Siti Web Padova | da 199€ | 4 Web Lab" />
        <meta
          property="og:description"
          content="Agenzia web a Padova: siti professionali per aziende, negozi e professionisti da 199€. SEO locale, design moderno e preventivo gratuito in 24h."
        />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta name="twitter:title" content="Realizzazione Siti Web Padova | da 199€ | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Agenzia web a Padova: siti professionali per aziende, negozi e professionisti da 199€. SEO locale, design moderno e preventivo gratuito in 24h."
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Realizzazione Siti Web a Padova",
            description:
              "Agenzia web a Padova: realizziamo siti professionali per negozi, studi e aziende del territorio con SEO locale e assistenza dedicata.",
            serviceType: "Web Design",
            areaServed: { "@type": "City", name: "Padova", containedInPlace: { "@type": "Country", name: "IT" } },
            url: "https://4weblab.it/realizzazione-siti-web-padova",
            provider: { "@id": "https://4weblab.it/#business" },
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          {/* Noise texture */}
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="padova-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#padova-hero-noise)" />
            </svg>
          </div>
          <div className="hero-spotlight" aria-hidden="true" />
          <div
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
            aria-hidden="true"
          />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Realizzazione siti web Padova" }]} />
              <h1
                className="heading-1 text-primary-foreground mb-8 text-balance"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" }}
              >
                Realizzazione Siti Web a Padova – la soluzione web per il tuo business
              </h1>
              <p
                className="body-large text-primary-foreground/90 mb-10 max-w-3xl mx-auto text-balance"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                Realizziamo siti professionali per negozi, professionisti e aziende di Padova e provincia. Da 199€, SEO locale e supporto continuativo.
              </p>
              <button
                onClick={() => document.getElementById("contatti-padova")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary text-lg px-10 py-4"
                aria-label="Richiedi una consulenza"
              >
                Richiedi una consulenza
              </button>
              <p className="text-primary-foreground/50 text-sm mt-5">
                Sede operativa a Padova – lavoriamo con clienti in tutta Italia.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Sezione 1 – Perché scegliere una realtà con sede a Padova */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Testo a sinistra */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="icon-box w-13 h-13">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h2 className="heading-2">Perché affidarsi a un’agenzia web con sede a Padova</h2>
                  </div>
                  <p className="body-base text-muted-foreground">
                    Avere un punto di riferimento locale significa poter contare su una comunicazione più diretta, una
                    comprensione profonda del territorio e la possibilità di un confronto anche dal vivo.
                  </p>
                </div>

                {/* Lista a destra */}
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {[
                    "Conoscenza del tessuto imprenditoriale locale",
                    "Comunicazione diretta e senza intermediari",
                    "Possibilità di confronto anche dal vivo su richiesta",
                    "Supporto continuativo dopo la pubblicazione",
                    "Struttura organizzata",
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 2 – Cosa realizziamo a Padova */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-14">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="icon-box w-13 h-13">
                    <Briefcase className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <h2 className="heading-2">
                  Servizi web per negozi, professionisti e aziende di Padova
                </h2>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
                {[
                  {
                    title: "Siti web per professionisti",
                    description:
                      "Presenze digitali autorevoli per liberi professionisti e studi che vogliono farsi trovare e trasmettere fiducia online.",
                    link: "/realizzazione-siti-web-per-professionisti",
                    linkLabel: "Scopri il servizio",
                  },
                  {
                    title: "Siti web per negozi",
                    description:
                      "Siti moderni e funzionali per attività commerciali che desiderano presentarsi al meglio e attrarre nuovi clienti dal territorio.",
                    link: "/siti-web-per-negozi",
                    linkLabel: "Scopri il servizio",
                  },
                  {
                    title: "Siti web aziendali strutturati",
                    description:
                      "Piattaforme web complete per aziende che necessitano di una presenza online solida, organizzata e orientata alla conversione.",
                    link: "/siti-web-aziendali",
                    linkLabel: "Scopri il servizio",
                  },
                ].map((card, index) => (
                  <StaggerItem key={index}>
                    <div
                      className={`card-elevated h-full flex flex-col ${card.link ? "cursor-pointer" : ""}`}
                      onClick={card.link ? () => navigate(card.link!) : undefined}
                    >
                      <h3 className="heading-3 mb-3">{card.title}</h3>
                      <p className="text-muted-foreground body-base mb-6 flex-1">{card.description}</p>
                      {card.link && (
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-1.5 text-accent font-semibold link-underline text-sm"
                        >
                          {card.linkLabel} →
                        </Link>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Sezione 3 – Il nostro metodo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-12">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Un metodo chiaro e rapido</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="body-base text-muted-foreground mb-10 max-w-3xl">
                  Ogni progetto di realizzazione siti web segue un percorso strutturato, pensato per garantire qualità,
                  trasparenza e risultati misurabili.
                </p>
              </AnimatedSection>

              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                {[
                  {
                    step: "01",
                    title: "Analisi dell'attività",
                    description:
                      "Studiamo il tuo settore, i tuoi obiettivi e il contesto competitivo per definire le fondamenta del progetto.",
                  },
                  {
                    step: "02",
                    title: "Progettazione struttura",
                    description:
                      "Definiamo architettura delle informazioni, layout e design in linea con la tua identità e le aspettative del tuo pubblico.",
                  },
                  {
                    step: "03",
                    title: "Sviluppo ottimizzato SEO",
                    description:
                      "Realizziamo il sito con tecnologie moderne, velocità di caricamento elevata e ottimizzazione per i motori di ricerca.",
                  },
                  {
                    step: "04",
                    title: "Pubblicazione e supporto",
                    description:
                      "Lanciamo il sito e restiamo al tuo fianco con assistenza continuativa per aggiornamenti e miglioramenti.",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex gap-6 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                      <div className="icon-box w-14 h-14 rounded-full flex-shrink-0 text-lg font-bold text-accent-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg mb-1.5">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Sezione 4 – Operiamo a Padova e provincia */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Globe className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Operativi a Padova e provincia</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  La nostra sede operativa a Padova ci permette di essere un riferimento concreto per le attività del
                  territorio. Lavoriamo con{" "}
                  <Link
                    to="/realizzazione-siti-web-per-professionisti"
                    className="text-accent hover:underline font-medium"
                  >
                    professionisti
                  </Link>
                  ,{" "}
                  <Link to="/siti-web-per-negozi" className="text-accent hover:underline font-medium">
                    commercianti
                  </Link>{" "}
                  e{" "}
                  <Link to="/siti-web-aziendali" className="text-accent hover:underline font-medium">
                    aziende
                  </Link>{" "}
                  della provincia di Padova, offrendo un servizio che combina la vicinanza di una realtà locale con la
                  solidità di un metodo collaudato a livello nazionale.
                </p>
                <p>
                  Che la tua attività sia nel centro di Padova o in uno dei comuni della provincia, il nostro approccio
                  resta lo stesso: ascolto, progettazione su misura e un risultato finale che rispecchia davvero la tua
                  attività. Puoi sfogliare alcune <Link to="/realizzazioni" className="text-accent hover:underline font-medium">realizzazioni e concept</Link>. La conoscenza del tessuto imprenditoriale padovano ci consente di proporre soluzioni
                  realmente efficaci, senza formule standardizzate.
                </p>
                <p className="mt-6">
                  Offriamo anche soluzioni specifiche per ogni settore. Per approfondire i costi, consulta la nostra
                  guida su{" "}
                  <Link
                    to="/blog/quanto-costa-un-sito-web-nel-2026"
                    className="text-accent hover:underline font-medium"
                  >
                    quanto costa un sito web nel 2026
                  </Link>
                  , oppure scopri se conviene{" "}
                  <Link
                    to="/blog/siti-web-creati-con-intelligenza-artificiale"
                    className="text-accent hover:underline font-medium"
                  >
                    creare un sito con intelligenza artificiale
                  </Link>
                  .
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 5 – CTA forte locale */}
        <section
          id="contatti-padova"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          {/* Noise texture */}
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="padova-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#padova-cta-noise)" />
            </svg>
          </div>
          <div
            className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]"
            aria-hidden="true"
          />

          <div className="container-section relative z-10">
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Box sinistra - CTA */}
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h2 className="heading-2 text-primary-foreground mb-6">
                  Vuoi realizzare un sito web professionale a Padova?
                </h2>
                <p className="body-large text-primary-foreground/70 mb-8">Contattaci per un confronto senza impegno.</p>
                <div className="text-center">
                  <a
                    href="https://wa.me/393514656042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      role="img"
                      aria-label="WhatsApp"
                      className="w-6 h-6"
                    >
                      <circle cx="256" cy="256" r="256" fill="#25D366" />
                      <path
                        fill="#FFFFFF"
                        d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z"
                      />
                    </svg>
                    Scrivici su Whatsapp
                  </a>
                  <p className="text-xs text-primary-foreground/50 mt-2 text-center">
                    <strong>Richiede WhatsApp Web su PC</strong>
                  </p>
                </div>
              </div>

              {/* Box destra - Form */}
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
                <ContactFormWeb3Forms />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SitiWebPadova;
