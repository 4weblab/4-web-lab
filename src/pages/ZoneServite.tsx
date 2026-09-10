import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const TITLE = "Zone Servite: Realizzazione Siti Web in Provincia di Padova | 4 Web Lab";
const DESCRIPTION =
  "Scopri dove realizziamo siti web ultra-veloci: Padova, Legnaro, Piove di Sacco, Ponte San Nicolò, Albignasego, Vigonza, Abano Terme e Cittadella.";
const URL = "https://4weblab.it/zone-servite";
const IMAGE = "https://4weblab.it/og-image.webp";

const zones = [
  {
    name: "Padova",
    description: "Il cuore della provincia, per artigiani, professionisti e PMI.",
    href: "/realizzazione-siti-web-padova",
  },
  {
    name: "Legnaro",
    description: "La nostra sede, porta d'accesso alla Saccisica.",
    href: "/realizzazione-siti-web-legnaro",
  },
  {
    name: "Piove di Sacco",
    description: "Il polo commerciale della Saccisica.",
    href: "/realizzazione-siti-web-piove-di-sacco",
  },
  {
    name: "Ponte San Nicolò",
    description: "Zona industriale e corridoio commerciale sulla Piovese.",
    href: "/realizzazione-siti-web-ponte-san-nicolo",
  },
  {
    name: "Albignasego",
    description: "Il tessuto commerciale più denso della cintura sud.",
    href: "/realizzazione-siti-web-albignasego",
  },
  {
    name: "Vigonza",
    description: "Il territorio in maggiore espansione a nord-est.",
    href: "/realizzazione-siti-web-vigonza",
  },
  {
    name: "Abano Terme",
    description: "Hotel, benessere e commercio del Bacino Euganeo.",
    href: "/realizzazione-siti-web-abano-terme",
  },
  {
    name: "Cittadella",
    description: "Artigianato e commercio storico dell'Alta Padovana.",
    href: "/realizzazione-siti-web-cittadella",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${URL}#webpage`,
  url: URL,
  name: "Zone Servite in Provincia di Padova",
  description: DESCRIPTION,
  inLanguage: "it-IT",
  isPartOf: { "@type": "WebSite", "@id": "https://4weblab.it/#website" },
  about: {
    "@type": "Service",
    name: "Realizzazione siti web",
    provider: { "@type": "Organization", "@id": "https://4weblab.it/#organization", name: "4 Web Lab" },
  },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: zones.length,
    itemListElement: zones.map((zone, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Realizzazione siti web ${zone.name}`,
      url: `https://4weblab.it${zone.href}`,
    })),
  },
};

const ZoneServite = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        {/* Hero */}
        <section className="page-hero">
          <div className="container-section relative z-10 text-center">
            <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "Zone Servite" }]} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-5">
              Le Zone che Serviamo in Provincia di Padova
            </h1>
            <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Otto aree, un solo standard: siti web ultra-veloci, pronti per Google e per l'IA, con un unico
              referente dall'inizio alla fine.
            </p>
          </div>
        </section>

        {/* Zone grid */}
        <section className="py-16 md:py-24" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {zones.map((zone) => (
                <StaggerItem key={zone.href}>
                  <Link
                    to={zone.href}
                    className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <span
                      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: "var(--gradient-accent)" }}
                      aria-hidden="true"
                    >
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </span>
                    <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
                      Siti web a {zone.name}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{zone.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Scopri di più
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container-section text-center">
            <AnimatedSection>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                Non vedi la tua zona?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Scrivici comunque: lavoriamo in tutta la provincia di Padova e oltre.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contatti"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Richiedi una valutazione gratuita
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href="https://wa.me/393514656042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Scrivici su WhatsApp
                </a>
              </div>
              <p className="mt-4 text-xs text-primary-foreground/50 hidden md:block">
                Da desktop si aprirà WhatsApp Web: puoi continuare la chat dal computer.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ZoneServite;
