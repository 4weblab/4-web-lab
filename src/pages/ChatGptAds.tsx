import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Bot,
  Target,
  TrendingUp,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Gem,
  UserCheck,
  Sparkles,
  HelpCircle,
  Sparkle,
} from "lucide-react";
import ContactFormChatGptAds from "@/components/ContactFormChatGptAds";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";

const PAGE_URL = "https://4weblab.it/chatgpt-ads";
const TITLE = "Gestione Campagne ChatGPT Ads | Pubblicità su AI per Aziende | 4 Web Lab";
const DESCRIPTION =
  "Intercetta i tuoi clienti su ChatGPT mentre cercano soluzioni e prendono decisioni d'acquisto. Gestione professionale campagne ChatGPT Ads con 4 Web Lab.";
const WA_URL =
  "https://wa.me/393514656042?text=" +
  encodeURIComponent("Ciao Carlo, vorrei informazioni sulla gestione campagne ChatGPT Ads");

const benefits = [
  {
    icon: Bot,
    title: "Intento di Ricerca Ad Alto Valore",
    desc: "L'utente interagisce con l'IA quando ha un problema concreto da risolvere o sta confrontando soluzioni d'acquisto.",
  },
  {
    icon: Target,
    title: "Vantaggio dei Primi Arrivati (First-Mover)",
    desc: "Entra nella piattaforma prima che i costi per clic (CPC) aumentino e la concorrenza sature il settore.",
  },
  {
    icon: TrendingUp,
    title: "Targeting Conversazionale e Contestuale",
    desc: "Gli annunci vengono mostrati esattamente nel contesto della discussione pertinente al tuo prodotto o servizio.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    title: "Servizi B2B e Consulenza Aziendale",
    desc: "Decisori e responsabili acquisti usano l'IA per selezionare fornitori e valutare soluzioni prima di contattarti.",
  },
  {
    icon: Gem,
    title: "Prodotti e Servizi ad Alto Scontrino",
    desc: "Percorsi d'acquisto lunghi e ragionati, dove il confronto tra alternative avviene sempre più dentro ChatGPT.",
  },
  {
    icon: UserCheck,
    title: "Lead Generation Qualificata",
    desc: "Contatti che arrivano già informati sul problema e sulle possibili soluzioni: meno attrito, più conversioni.",
  },
  {
    icon: Sparkles,
    title: "Brand Awareness per Soluzioni Innovative",
    desc: "Fai conoscere un prodotto nuovo nel momento esatto in cui l'utente esplora il tema con l'intelligenza artificiale.",
  },
];

const steps = [
  {
    n: "01",
    title: "Analisi di Fattibilità & Target",
    desc: "Verifichiamo se il tuo settore è adatto a ChatGPT Ads, definiamo pubblico, obiettivi e conversazioni da presidiare.",
  },
  {
    n: "02",
    title: "Setup ChatGPT Ads Manager & Tracciamenti",
    desc: "Configuriamo account, campagne, budget e il tracciamento delle conversioni sul tuo sito, in modo conforme al GDPR.",
  },
  {
    n: "03",
    title: "Copywriting Conversazionale & Creative",
    desc: "Scriviamo messaggi pensati per il formato dialogico dell'IA: chiari, utili e coerenti con il contesto della domanda.",
  },
  {
    n: "04",
    title: "Monitoraggio, Testing & Ottimizzazione ROI",
    desc: "Test continui su messaggi e pubblici, controllo del costo per lead e ottimizzazione progressiva del ritorno sull'investimento.",
  },
];

const faqs = [
  {
    q: "Quanto costa iniziare una campagna su ChatGPT Ads?",
    a: "Il budget pubblicitario viene definito in base ai tuoi obiettivi e al settore. Raccomandiamo un test iniziale di 2-3 mesi per raccogliere dati significativi.",
  },
  {
    q: "È adatto alla mia azienda?",
    a: "ChatGPT Ads è particolarmente efficace per i servizi B2B, la consulenza, i prodotti complessi e per tutte le attività che beneficiano di una ricerca basata sull'intento.",
  },
  {
    q: "Come tracciamo i risultati e le conversioni?",
    a: "Configuriamo il tracciamento avanzato delle conversioni per monitorare contatti, lead e vendite generate dalle interazioni su ChatGPT.",
  },
];

const ChatGptAds = () => {
  const scrollToForm = () => {
    const el = document.getElementById("contatti-chatgpt-ads");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}/#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "ChatGPT Ads", item: PAGE_URL },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}/#webpage`,
                url: PAGE_URL,
                name: TITLE,
                description: DESCRIPTION,
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
                about: { "@id": `${PAGE_URL}/#service` },
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: [".aeo-definition", ".aeo-faq-answer"],
                },
              },
              {
                "@type": "Service",
                "@id": `${PAGE_URL}/#service`,
                name: "Gestione Campagne ChatGPT Ads",
                provider: {
                  "@type": "LocalBusiness",
                  name: "4 Web Lab",
                  url: "https://4weblab.it",
                },
                description:
                  "Servizio specializzato di configurazione, ottimizzazione e gestione campagne pubblicitarie su ChatGPT Ads per aziende e professionisti.",
                areaServed: "IT",
                serviceType: "AI Advertising & Digital Marketing",
                url: PAGE_URL,
                inLanguage: "it-IT",
              },
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}/#faq`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Chi gestisce campagne ChatGPT Ads in Italia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "4 Web Lab offre servizi specializzati di gestione e ottimizzazione per campagne pubblicitarie sulla piattaforma ChatGPT Ads Manager.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Come funziona la pubblicità su ChatGPT?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ChatGPT Ads consente di posizionare messaggi e soluzioni sponsorizzate direttamente all'interno delle conversazioni e delle ricerche degli utenti sulla piattaforma OpenAI.",
                    },
                  },
                  ...faqs.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* SECTION 1: Hero */}
        <section className="page-hero">
          <div className="container-section relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <PageBreadcrumb items={[{ label: "Home", to: "/" }, { label: "ChatGPT Ads" }]} />
                <h1 className="heading-1 mb-6 font-extrabold tracking-tight text-primary-foreground">
                  Gestione Campagne ChatGPT Ads per Aziende
                </h1>
                <p className="aeo-definition body-large text-primary-foreground/80 mb-8 text-balance">
                  4 Web Lab è tra le prime agenzie in Italia a gestire campagne pubblicitarie su ChatGPT Ads.
                  Intercettiamo i tuoi clienti target direttamente mentre utilizzano l'intelligenza artificiale
                  per cercare soluzioni, confrontare prodotti e prendere decisioni d'acquisto.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToForm}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"
                  >
                    Richiedi Analisi di Fattibilità
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Parla subito su WhatsApp
                  </a>
                </div>
                <p className="text-xs text-primary-foreground/60 mt-3">
                  Nessun impegno · Risposta entro 24h · <strong>WhatsApp richiede WhatsApp Web su PC</strong>
                </p>
              </div>

              {/* Mockup conversazionale */}
              <div className="w-full">
                <div className="rounded-2xl bg-white/95 border border-white/40 shadow-2xl p-4 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-border">
                    <span className="w-7 h-7 rounded-full bg-foreground/90 flex items-center justify-center">
                      <Sparkle className="w-4 h-4 text-white" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">ChatGPT</span>
                  </div>

                  <div className="flex justify-end">
                    <p className="max-w-[85%] rounded-2xl rounded-br-sm bg-muted px-4 py-2.5 text-sm text-foreground">
                      Qual è il miglior fornitore per automatizzare i preventivi in azienda?
                    </p>
                  </div>

                  <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-background border border-border px-4 py-3 text-sm text-muted-foreground">
                    Dipende dal tuo settore e dal volume di richieste. Ecco alcune soluzioni utilizzate dalle PMI
                    italiane…
                  </div>

                  <div className="rounded-2xl border border-accent/40 bg-accent/5 px-4 py-3.5">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-accent-foreground bg-accent/20 rounded-full px-2.5 py-0.5 mb-2">
                      Sponsorizzato
                    </span>
                    <p className="text-sm font-semibold text-foreground mb-1">La tua azienda, qui.</p>
                    <p className="text-xs text-muted-foreground">
                      Il tuo messaggio compare nel momento esatto in cui l'utente sta valutando una soluzione come
                      la tua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Perché */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Bot className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h2 className="heading-2">Il Nuovo Canale Pubblicitario Conversazionale</h2>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.08}>
                {benefits.map((b, i) => (
                  <StaggerItem key={i}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400">
                      <div className="icon-box w-12 h-12 mb-4">
                        <b.icon className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* SECTION 3: Scenari d'uso */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Target className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h2 className="heading-2">A chi si rivolge ChatGPT Ads</h2>
              </AnimatedSection>
              <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.08}>
                {useCases.map((u, i) => (
                  <StaggerItem key={i}>
                    <div className="card-glass h-full flex gap-4 items-start hover:-translate-y-1.5 transition-all duration-400">
                      <div className="icon-box w-12 h-12 shrink-0">
                        <u.icon className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-foreground mb-2 break-words">{u.title}</h3>
                        <p className="text-sm text-muted-foreground">{u.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* SECTION 4: Metodo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h2 className="heading-2">Come Strutturiamo la Tua Campagna</h2>
              </AnimatedSection>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
                {steps.map((s) => (
                  <StaggerItem key={s.n}>
                    <div className="card-glass h-full">
                      <span className="block text-3xl font-extrabold text-accent/40 mb-3">{s.n}</span>
                      <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <h2 className="heading-2">Domande Frequenti su ChatGPT Ads</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-2xl border border-border bg-white px-6 transition-all duration-300 hover:border-accent/15"
                    >
                      <AccordionTrigger className="text-left py-5 hover:no-underline">
                        <h3 className="font-semibold text-foreground text-base pr-4">{faq.q}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Ti interessa anche la visibilità organica sull'IA?{" "}
                  <Link to="/posizionamento-google-e-ai" className="text-accent hover:underline font-medium">
                    Scopri SEO &amp; AI
                  </Link>{" "}
                  oppure{" "}
                  <Link to="/pubblicita-google-ads" className="text-accent hover:underline font-medium">
                    le campagne Google Ads
                  </Link>
                  .
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SECTION 6: Contatto */}
        <section
          id="contatti-chatgpt-ads"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]"
            aria-hidden="true"
          />
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-3xl mb-10">
              <h2 className="heading-2 text-primary-foreground mb-4">
                Inizia Subito a Pubblicizzare la Tua Attività su ChatGPT
              </h2>
              <p className="body-large text-primary-foreground/70">
                Compila il modulo per ricevere un'analisi di fattibilità gratuita o contattaci direttamente su
                WhatsApp.
              </p>
            </AnimatedSection>
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch" delay={0.1}>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
                <ContactFormChatGptAds />
              </div>
              <div className="rounded-2xl p-8 border-2 border-[#25D366]/60 bg-[#25D366]/10 flex flex-col justify-center">
                <div className="icon-box w-12 h-12 mb-4 bg-[#25D366]">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-3">
                  Preferisci un contatto immediato?
                </h3>
                <p className="text-primary-foreground/75 mb-6">
                  Scrivici direttamente su WhatsApp per verificare in tempo reale la fattibilità per la tua azienda.
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Avvia Chat su WhatsApp
                </a>
                <p className="text-xs text-primary-foreground/50 mt-3">
                  <strong>Richiede WhatsApp Web su PC</strong>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ChatGptAds;
