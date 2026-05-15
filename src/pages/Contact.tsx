import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Ear, Search, Lightbulb, Store, Briefcase, Building2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const whatsappNumber = "393514656042";
const whatsappMessage = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");

const Contact = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const pageTitle = "Contattaci | 4 Web Lab";
  const pageDescription =
    "Contatta 4 Web Lab per una consulenza gratuita. Raccontaci la tua attività e ti diremo come possiamo aiutarti a creare un sito web che porta risultati.";
  const pageUrl = "https://4weblab.it/contatti";
  const pageImage = "https://4weblab.it/og-image.jpg";

  const steps = [
    {
      icon: Ear,
      title: "Ascoltiamo le tue esigenze",
      description: "Capire cosa ti serve davvero è il primo passo. Ti chiediamo come lavori, chi sono i tuoi clienti e quali risultati vuoi ottenere.",
    },
    {
      icon: Search,
      title: "Analizziamo la tua attività",
      description: "Studiamo il tuo settore, la concorrenza e il pubblico a cui ti rivolgi per costruire una strategia su misura.",
    },
    {
      icon: Lightbulb,
      title: "Proponiamo la soluzione giusta",
      description: "Ti consigliamo il sito più adatto: per negozi, professionisti o aziende. Senza forzature, solo ciò che serve davvero.",
    },
  ];

  const solutions = [
    { icon: Store, label: "Siti per negozi", href: "/siti-web-per-negozi" },
    { icon: Briefcase, label: "Siti per professionisti", href: "/realizzazione-siti-web-per-professionisti" },
    { icon: Building2, label: "Siti aziendali", href: "/siti-web-aziendali" },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            mainEntity: { "@id": "https://4weblab.it/#business" },
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        {/* HERO */}
        <section
          className="relative overflow-hidden pt-[calc(var(--header-height)+4rem)] pb-20 md:pt-[calc(var(--header-height)+6rem)] md:pb-28"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="contact-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#contact-hero-noise)" />
            </svg>
          </div>
          <div className="absolute -top-24 right-1/3 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[140px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary-foreground/5 blur-[120px]" aria-hidden="true" />

          <div className="container-section relative z-10 text-center max-w-3xl mx-auto">
            <PageBreadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Contatti" },
              ]}
            />
            <div className="w-16 h-1 rounded-full mx-auto mb-8 bg-accent" />
            <h1 className="heading-1 text-primary-foreground mb-6">Contattaci</h1>
            <p className="body-large text-primary-foreground/75 text-balance">
              Raccontaci la tua attività e ti diremo come possiamo aiutarti a creare un sito web che porta risultati. Nel frattempo puoi sfogliare le nostre <Link to="/realizzazioni" className="text-accent hover:underline font-medium">realizzazioni</Link>.
            </p>
          </div>
        </section>

        {/* COME LAVORIAMO */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto text-center mb-14">
              <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-accent" />
              <h2 className="heading-2 text-foreground mb-4">Come lavoriamo</h2>
              <p className="body-large text-muted-foreground text-balance">
                Un metodo semplice e trasparente per capire insieme la soluzione migliore per te.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
              {steps.map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="relative h-full p-7 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                    <div className="absolute top-5 right-6 text-5xl font-serif font-bold text-accent/15 leading-none">
                      {idx + 1}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                      <step.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* FORM DI CONTATTO */}
        <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="contact-form-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#contact-form-noise)" />
            </svg>
          </div>
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]" aria-hidden="true" />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-2xl mx-auto text-center mb-10">
              <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-accent" />
              <h2 className="heading-2 text-primary-foreground mb-4">Compila il form</h2>
              <p className="body-large text-primary-foreground/70 text-balance">
                Ti ricontattiamo entro poche ore con una prima valutazione gratuita e senza impegno.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="max-w-2xl mx-auto">
              <div className="p-6 md:p-10 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 shadow-2xl">
                <ContactFormWeb3Forms />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CONTATTO DIRETTO */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
              <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-accent" />
              <h2 className="heading-2 text-foreground mb-4">Preferisci un contatto diretto?</h2>
              <p className="body-large text-muted-foreground text-balance">
                Se ti è più comodo, scrivici via email o su WhatsApp. Ti rispondiamo personalmente, senza filtri o automatismi.
              </p>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              <a
                href="mailto:info@4weblab.it"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Mail className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground truncate">info@4weblab.it</p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-[#25D366]/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Contattaci su WhatsApp"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                  <p className="font-semibold text-foreground">+39 351 465 6042</p>
                </div>
              </a>
            </div>
            <p className="text-xs text-muted-foreground/80 text-center mt-4">
              <strong>WhatsApp da PC richiede WhatsApp Web.</strong>
            </p>
          </div>
        </section>

        {/* NON SAI DA DOVE PARTIRE */}
        <section className="section-padding bg-muted/30">
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto text-center mb-12">
              <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-accent" />
              <h2 className="heading-2 text-foreground mb-4">Non sai da dove partire?</h2>
              <p className="body-large text-muted-foreground text-balance">
                Se non sei sicuro di cosa ti serve, dai un'occhiata alle pagine dedicate per capire quale soluzione è più adatta alla tua attività.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto" staggerDelay={0.08}>
              {solutions.map((s) => (
                <StaggerItem key={s.href}>
                  <Link
                    to={s.href}
                    className="group flex flex-col items-center text-center gap-4 p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                      <s.icon className="w-7 h-7 text-accent" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-lg font-semibold text-foreground">{s.label}</span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                      Scopri di più <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CHIUSURA */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto text-center">
              <div className="w-12 h-1 rounded-full mx-auto mb-6 bg-accent" />
              <p className="body-large text-foreground text-balance leading-relaxed">
                Dietro ogni progetto ci sono persone, idee e tempo dedicato. Quando ci scrivi, parli con noi: nessun call center, nessuna risposta automatica.
              </p>
              <p className="body-base text-muted-foreground text-balance mt-4">
                Saremo felici di ascoltare la tua storia e capire come possiamo esserti utili.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
