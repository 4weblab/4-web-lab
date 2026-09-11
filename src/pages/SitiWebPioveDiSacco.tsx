import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Zap, Sparkles, MessageCircle, Store, Briefcase, Building2, Check, HelpCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import pioveProssimita from "@/assets/piove-prossimita.webp";
import pioveVelocita from "@/assets/piove-velocita.webp";
import pioveIa from "@/assets/piove-ia.webp";

const TITLE = "Web Agency Piove di Sacco | Siti Web per Negozi e PMI da 490€";
const DESCRIPTION =
  "Realizzazione siti web ultra-veloci a Piove di Sacco e Saccisica. Zero WordPress, zero abbonamenti, contatto diretto e consegna rapida in 14 giorni.";
const URL = "https://4weblab.it/realizzazione-siti-web-piove-di-sacco";

const vantaggi = [
  {
    image: pioveProssimita,
    alt: "Incontro diretto tra sviluppatore e titolare di attività a Piove di Sacco",
    icon: MapPin,
    title: "Prossimità Reale",
    description:
      "Nessun intermediario o call center. Parli direttamente con chi sviluppa il codice a due passi dalla tua attività nella Saccisica.",
  },
  {
    image: pioveVelocita,
    alt: "Sito web ultra-veloce con architettura Jamstack a Piove di Sacco",
    icon: Zap,
    title: "Zero Manutenzione",
    description:
      "Architettura Jamstack pura. Nessun plugin che si rompe, nessun aggiornamento mensile obbligatorio, velocità 100/100 fissa.",
  },
  {
    image: pioveIa,
    alt: "Sito web di Piove di Sacco consigliato dai motori di ricerca e dagli assistenti IA",
    icon: Sparkles,
    title: "Pronti per l'IA",
    description:
      "Ottimizzazione nativa per farti consigliare da Google e dai motori di risposta artificiali (ChatGPT, Perplexity).",
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

const MinimalFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container-section">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-1 text-sm text-primary-foreground/55">
            <span>© {currentYear} 4 Web Lab. Tutti i diritti riservati.</span>
            <span className="hidden md:inline text-primary-foreground/25">|</span>
            <span>4 Web Lab di Fullin Carlo — P.IVA: 05765760284</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Home
            </Link>
            <Link to="/privacy" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const faqs = [
  {
    question: "Quanto costa un sito web a Piove di Sacco?",
    answer:
      "Il prezzo parte da 490€ per un sito One-Page pensato per negozi e attività locali, da 990€ per un Sito Vetrina professionale, da 1.890€ per un Sito Aziendale multipagina — la stessa struttura di prezzi che applichiamo in tutta la provincia di Padova.",
  },
  {
    question: "Quanto tempo serve per realizzare un sito a Piove di Sacco?",
    answer:
      "In genere 14 giorni per un sito One-Page o Vetrina, fino a 3-4 settimane per un sito aziendale più articolato.",
  },
  {
    question: "Realizzate siti per negozi del centro storico di Piove di Sacco?",
    answer:
      "Sì, in particolare per le attività coinvolte nel distretto \"Piove di Shopping\": un sito web ben fatto è il naturale completamento di iniziative come questa per valorizzare botteghe storiche e negozi di vicinato.",
  },
];

const SitiWebPioveDiSacco = () => {
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
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Realizzazione siti web Piove di Sacco", item: URL },
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
                name: "Realizzazione siti web a Piove di Sacco e Saccisica",
                provider: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "City", name: "Piove di Sacco" },
                  { "@type": "City", name: "Codevigo" },
                  { "@type": "City", name: "Ponte Longo" },
                  { "@type": "AdministrativeArea", name: "Saccisica" },
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
      <Header satelliteMode />

      <main id="main-content">
        {/* Hero */}
        <section className="page-hero">
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="piove-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#piove-hero-noise)" />
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
                Sviluppo Siti Web a Piove di Sacco: Soluzioni per Negozi, Studi e PMI Senza WordPress
              </h1>
              <p
                className="body-large text-primary-foreground/95 mb-10 max-w-3xl mx-auto text-balance"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                Sei un'attività commerciale o un professionista a Piove di Sacco? Realizziamo siti web ultra-veloci, sicuri e pronti
                per l'IA. Zero call infinite con agenzie lontane: ci sediamo al tavolo e in 14 giorni il tuo business è online.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById("contatti-piove")?.scrollIntoView({ behavior: "smooth" })}
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
                Sede a due passi dalla Saccisica • Preventivo in 24 ore • Online in 14 giorni
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Identità locale */}
        <section className="section-padding bg-surface-alt-2">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="section-divider" />
              <h2 className="heading-3 mb-5">Il capoluogo della Saccisica</h2>
              <p className="body-large text-muted-foreground text-balance">
                Con oltre 20.000 abitanti, Piove di Sacco è il capoluogo non ufficiale della Saccisica — un centro storico medievale a pianta quadrilatera, un tempo cinto da mura e torri. Il commercio locale si sta muovendo attivamente verso la valorizzazione digitale: il distretto “Piove di Shopping”, promosso da Ascom Confcommercio e dal Comune, punta a rilanciare botteghe storiche e negozi di vicinato del centro. Il tuo sito web è il passo naturale in questa stessa direzione — non un optional.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vantaggi */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">Perché scegliere un web studio vicino a Piove di Sacco</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                Tre vantaggi concreti per le attività di Piove di Sacco, Codevigo, Ponte Longo e di tutta la Saccisica.
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

        {/* FAQ */}
        <section className="section-padding bg-surface-alt-2 border-b border-border/30">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h2 className="heading-2">Domande frequenti</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-piove-di-sacco-${index}`}
                      className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6"
                    >
                      <AccordionTrigger className="text-left py-5 hover:no-underline">
                        <span className="font-semibold text-foreground text-base pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
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
          id="contatti-piove"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)", scrollMarginTop: "var(--header-height)" }}
        >
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="piove-contact-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#piove-contact-noise)" />
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

      <MinimalFooter />

      <Footer />
    </>
  );
};

export default SitiWebPioveDiSacco;
