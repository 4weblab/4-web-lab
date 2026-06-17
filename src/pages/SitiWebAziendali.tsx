import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  Building2,
  TrendingUp,
  Layers,
  Settings,
  Award,
  ArrowRight,
  CheckCircle2,
  Globe,
  LayoutTemplate,
  Wrench,
  ChevronDown,
} from "lucide-react";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import mockupImg from "@/assets/aziendali-mockup.webp";
import teamImg from "@/assets/aziendali-team.webp";

const SitiWebAziendali = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti-aziendali");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab</title>
        <meta
          name="description"
          content="Siti web aziendali da 899€: design su misura, SEO e assistenza per PMI e aziende in Veneto e in tutta Italia. Preventivo gratuito in 24h da 4 Web Lab."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://4weblab.it/siti-web-aziendali" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/siti-web-aziendali" />
        <meta property="og:title" content="Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab" />
        <meta
          property="og:description"
          content="Siti web aziendali da 899€ per PMI e aziende in Veneto e in tutta Italia. Design su misura, SEO integrato, preventivo gratuito in 24h."
        />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/siti-web-aziendali" />
        <meta name="twitter:title" content="Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Siti web aziendali da 899€ per PMI e aziende in Veneto e in tutta Italia. Design su misura, SEO integrato, preventivo gratuito in 24h."
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": "https://4weblab.it/siti-web-aziendali#breadcrumb",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Siti web aziendali", item: "https://4weblab.it/siti-web-aziendali" },
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://4weblab.it/siti-web-aziendali#webpage",
                url: "https://4weblab.it/siti-web-aziendali",
                name: "Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab",
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                breadcrumb: { "@id": "https://4weblab.it/siti-web-aziendali#breadcrumb" },
                about: { "@id": "https://4weblab.it/siti-web-aziendali#service" },
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: [".aeo-definition", ".aeo-faq-answer"],
                },
              },
              {
                "@type": ["LocalBusiness", "ProfessionalService"],
                "@id": "https://4weblab.it/#business",
                name: "4 Web Lab",
                url: "https://4weblab.it/",
                telephone: "+39 351 465 6042",
                priceRange: "€899+",
                image: "https://4weblab.it/og-image.webp",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Legnaro",
                  addressRegion: "PD",
                  addressCountry: "IT",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 45.3447,
                  longitude: 11.9606,
                },
                areaServed: [
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                  { "@type": "City", name: "Vicenza" },
                  { "@type": "City", name: "Verona" },
                  { "@type": "City", name: "Treviso" },
                  { "@type": "City", name: "Rovigo" },
                  { "@type": "City", name: "Belluno" },
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "Country", name: "Italia" },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://4weblab.it/siti-web-aziendali#service",
                name: "Realizzazione Siti Web Aziendali",
                description:
                  "Realizziamo siti web aziendali su misura per PMI e imprese in Veneto e in tutta Italia: design professionale, architettura scalabile, SEO integrato.",
                serviceType: "Corporate Web Design",
                category: "Web Development",
                url: "https://4weblab.it/siti-web-aziendali",
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                provider: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                  { "@type": "City", name: "Vicenza" },
                  { "@type": "City", name: "Verona" },
                  { "@type": "City", name: "Treviso" },
                  { "@type": "City", name: "Rovigo" },
                  { "@type": "City", name: "Belluno" },
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "Country", name: "Italia" },
                ],
                offers: {
                  "@type": "AggregateOffer",
                  url: "https://4weblab.it/siti-web-aziendali",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "EUR",
                  lowPrice: "899",
                  highPrice: "1299",
                  offerCount: 3,
                },
              },
              {
                "@type": "FAQPage",
                "@id": "https://4weblab.it/siti-web-aziendali#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quanto costa un sito web aziendale in Veneto?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un sito web aziendale in Veneto costa da 899€ una tantum per la versione base, da 1.299€ per un sito multipagina strutturato, mentre i progetti su misura vengono quotati in base agli obiettivi. I prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quanto tempo serve per realizzare un sito web aziendale?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un sito web aziendale richiede in media da 2 a 6 settimane: pochi giorni per una versione base, fino a 4–6 settimane per un sito multipagina strutturato con contenuti su misura, ottimizzazione SEO e integrazioni dedicate.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Serve davvero un sito web per un'azienda oggi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: oltre il 90% delle persone cerca un'azienda su Google prima di contattarla. Senza un sito web professionale un'impresa perde credibilità, contatti qualificati e visibilità rispetto ai competitor già presenti online.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Qual è la differenza tra sito vetrina e sito aziendale?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un sito vetrina ha 1–3 pagine e presenta in sintesi l'attività, mentre un sito aziendale è multipagina e strutturato per descrivere servizi, identità e contatti, generare lead e posizionarsi su Google con un'architettura scalabile.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Quali tipi di siti web aziendali esistono?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Esistono quattro principali tipi di sito web aziendale: sito vetrina (presenza essenziale), sito multipagina (presentazione strutturata di servizi e azienda), sito corporate (grandi aziende con più sedi o lingue) ed e-commerce (vendita online di prodotti).",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Realizzate siti web aziendali anche fuori Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: realizziamo siti web aziendali per imprese in tutto il Veneto (Padova, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno) e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Posso aggiornare il sito in autonomia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: il sito può essere progettato con un pannello di amministrazione che permette di modificare testi, immagini e nuove sezioni in autonomia, senza intervenire sul codice.",
                    },
                  },
                ],
              },
              {
                "@type": "HowTo",
                "@id": "https://4weblab.it/siti-web-aziendali#howto",
                name: "Come realizziamo un sito web aziendale",
                description:
                  "Il metodo in 4 fasi di 4 Web Lab per progettare e pubblicare un sito web aziendale efficace.",
                totalTime: "P30D",
                step: [
                  { "@type": "HowToStep", position: 1, name: "Analisi e briefing", text: "Raccogliamo informazioni su azienda, obiettivi di business e pubblico di riferimento." },
                  { "@type": "HowToStep", position: 2, name: "Progettazione", text: "Definiamo struttura, architettura informativa e design coerente con l'identità aziendale." },
                  { "@type": "HowToStep", position: 3, name: "Sviluppo", text: "Sviluppiamo il sito con tecnologie moderne, performance elevate e SEO integrato." },
                  { "@type": "HowToStep", position: 4, name: "Revisione e lancio", text: "Condividiamo il risultato per le modifiche, pubblichiamo il sito e forniamo supporto." },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "Siti aziendali" },
                ]}
              />
              <h1 className="heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground">
                Siti Web Aziendali Professionali: Performance e Conversione per il tuo Business
              </h1>
              <p className="body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
                Progettiamo siti web aziendali su misura per aziende che puntano a un'immagine autorevole e a un ecosistema digitale capace di generare contatti e valore concreto, ovunque operi la tua impresa.
              </p>
              <button onClick={handleContactClick} className="btn-primary inline-flex items-center gap-2 px-10 py-5">
                Richiedi una valutazione gratuita
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* Perché un'azienda ha bisogno di un sito strutturato */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Building2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché un'azienda ha bisogno di un sito strutturato</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-8" delay={0.1}>
                <p>
                  Un sito web aziendale non è un semplice biglietto da visita digitale: è uno strumento strategico per
                  la crescita del business. La realizzazione di un sito web per aziende richiede un approccio
                  strutturato che tenga conto di obiettivi, pubblico e posizionamento nel mercato.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                {[
                  {
                    title: "Credibilità e autorevolezza",
                    description:
                      "Un sito web aziendale professionale trasmette solidità e affidabilità, elementi fondamentali per conquistare la fiducia di clienti e partner.",
                  },
                  {
                    title: "Presenza online solida",
                    description:
                      "Essere presenti online con un sito strutturato significa farsi trovare dove i clienti cercano: su Google, sui motori di ricerca, sul web.",
                  },
                  {
                    title: "Acquisizione contatti",
                    description:
                      "Un sito web per aziende ben progettato facilita la conversione dei visitatori in contatti qualificati attraverso form, call-to-action e percorsi chiari.",
                  },
                  {
                    title: "SEO e crescita nel tempo",
                    description:
                      "La realizzazione di un sito web aziendale ottimizzato per i motori di ricerca garantisce visibilità crescente e un flusso costante di nuove opportunità.",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400">
                      <h3 className="font-bold text-foreground mb-2.5">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Cosa realizziamo per le aziende */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Layers className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa realizziamo per le aziende</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" direction="left">
                  <p className="mb-6">
                    Progettiamo e sviluppiamo siti web aziendali multipagina con architetture pensate per crescere
                    insieme al business. Ogni progetto nasce da un'analisi approfondita delle esigenze dell'azienda e si
                    traduce in una struttura chiara, navigabile e orientata alla conversione. Esempi e concept nelle nostre <Link to="/realizzazioni" className="text-accent hover:underline font-medium">realizzazioni</Link>.
                  </p>
                  <p className="mb-6">
                    I nostri siti web per aziende includono sezioni dedicate ai servizi, all'identità aziendale, ai
                    contatti e a ogni area strategica del business. Realizziamo architetture scalabili, pronte per
                    evolversi nel tempo con nuove pagine, funzionalità e contenuti.
                  </p>
                  <p>
                    Ogni sito è sviluppato con tecnologie moderne che garantiscono velocità, sicurezza e un'esperienza
                    utente ottimale su qualsiasi dispositivo, evitando i limiti tipici di un{" "}
                    <Link
                      to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
                      className="text-accent hover:underline font-medium"
                    >
                      sito ormai datato che fa perdere clienti
                    </Link>
                    .
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <img
                    src={mockupImg}
                    alt="Esempio sito web aziendale multipagina realizzato da 4 Web Lab"
                    className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Siti multipagina e strutturati */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Siti multipagina e strutturati</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left" className="order-2 md:order-1">
                  <img
                    src={teamImg}
                    alt="Illustrazione della struttura di un sito web multipagina con pagine collegate e ottimizzazione SEO"
                    className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatedSection>
                <AnimatedSection
                  className="prose prose-lg max-w-none text-muted-foreground order-1 md:order-2"
                  direction="right"
                >
                  <p className="mb-6">
                    Un sito web aziendale strutturato non è semplicemente un sito con più pagine: è un ecosistema
                    digitale progettato con una gerarchia dei contenuti chiara, una navigazione intuitiva e
                    un'architettura informativa che guida il visitatore verso le azioni desiderate.
                  </p>
                  <p className="mb-6">
                    Progettiamo siti web per piccole e medie imprese con strutture che facilitano l'indicizzazione sui
                    motori di ricerca, migliorano l'esperienza utente e permettono di aggiungere nuove sezioni senza
                    compromettere la coerenza complessiva.
                  </p>
                  <p className="mb-6">
                    La scalabilità è al centro del nostro approccio: ogni sito è pensato per accompagnare la crescita
                    dell'azienda nel tempo, adattandosi a nuove esigenze e opportunità.
                  </p>
                  <p>
                    Sia che la tua azienda sia in Veneto o in qualsiasi altra parte d'Italia, 4 Web Lab porta online il
                    tuo business.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Quanto costa un sito web aziendale */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-6">
                <div className="icon-box w-13 h-13">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Quanto costa un sito web aziendale</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-10" delay={0.1}>
                <p>
                  Il costo di un sito web aziendale dipende da struttura, contenuti e obiettivi. Ogni progetto di
                  realizzazione siti web aziendali viene sviluppato su misura per creare uno strumento utile e concreto
                  per l'azienda. Per un quadro più ampio puoi anche leggere la nostra{" "}
                  <Link
                    to="/blog/quanto-costa-un-sito-web-nel-2026"
                    className="text-accent hover:underline font-medium"
                  >
                    guida ai costi reali di un sito web nel 2026
                  </Link>
                  .
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-10" staggerDelay={0.1}>
                {[
                  {
                    icon: Globe,
                    label: "Base",
                    title: "Sito base",
                    price: "A partire da 899€",
                    priceNote: "IVA esclusa",
                    description:
                      "Soluzione essenziale per avere una presenza online chiara e professionale, con struttura semplice e contenuti mirati.",
                  },
                  {
                    icon: LayoutTemplate,
                    label: "Intermedio",
                    title: "Sito aziendale strutturato",
                    price: "A partire da 1.299€",
                    priceNote: "IVA esclusa",
                    description:
                      "Progetto completo con più pagine, organizzazione dei contenuti e struttura pensata per presentare un sito web aziendale in modo efficace.",
                  },
                  {
                    icon: Wrench,
                    label: "Avanzato",
                    title: "Progetto su misura",
                    price: "Preventivo da definire",
                    priceNote: "",
                    description:
                      "Soluzione personalizzata in base agli obiettivi dell'azienda, con funzionalità specifiche e sviluppo dedicato.",
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center p-10 border border-border/50 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-card-hover)]">
                      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
                        {item.label}
                      </span>
                      <div className="icon-box w-16 h-16 mx-auto mb-5">
                        <item.icon className="w-7 h-7 text-accent-foreground" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="mt-5 pt-5 border-t border-border/50">
                        <p className="text-base font-semibold text-foreground">{item.price}</p>
                        {item.priceNote && (
                          <p className="text-xs text-muted-foreground mt-1">{item.priceNote}</p>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <AnimatedSection className="text-center" delay={0.3}>
                <p className="text-muted-foreground mb-6">
                  Se desideri capire quale soluzione è più adatta alla tua attività, puoi richiedere una valutazione
                  senza impegno.
                </p>
                <button
                  onClick={handleContactClick}
                  className="btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base"
                >
                  Richiedi una valutazione gratuita
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Domande frequenti sui siti web aziendali */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti sui siti per imprese</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <p className="text-muted-foreground mb-8">
                  Risposte rapide alle domande più comuni sui siti web aziendali
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      question: "Quanto tempo serve per realizzare un sito web aziendale?",
                      answer:
                        "Dipende dalla complessità del progetto. Un sito semplice può essere realizzato in pochi giorni, mentre un sito più strutturato richiede più tempo per essere sviluppato e ottimizzato correttamente.",
                    },
                    {
                      question: "Serve davvero un sito web per un'azienda oggi?",
                      answer:
                        <>
                          Sì. Oggi la maggior parte delle persone cerca informazioni su Google prima di contattare
                          un'azienda. Senza un sito web professionale si rischia di perdere opportunità e credibilità —
                          ed è esattamente il problema che spieghiamo nell'articolo{" "}
                          <Link
                            to="/blog/perche-il-tuo-sito-non-si-trova-su-google"
                            className="text-accent hover:underline font-medium"
                          >
                            perché il tuo sito non si trova su Google
                          </Link>
                          .
                        </>,
                    },
                    {
                      question: "Qual è la differenza tra sito vetrina e sito aziendale?",
                      answer:
                        "Un sito vetrina è più semplice e ha poche pagine, mentre un sito aziendale è strutturato per presentare in modo completo servizi, competenze e valore dell'azienda.",
                    },
                    {
                      question: "Posso aggiornare il sito in autonomia?",
                      answer:
                        "Sì, il sito può essere progettato in modo da permettere aggiornamenti semplici senza dover intervenire sul codice.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6"
                    >
                      <AccordionTrigger className="text-left py-5 hover:no-underline">
                        <h3 className="font-semibold text-foreground text-base pr-4">{faq.question}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Il nostro metodo */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il nostro metodo</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-8">
                  In 4 Web Lab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato, pensato per
                  collaborazioni da remoto con aziende in tutta Italia. Il nostro processo garantisce trasparenza, tempi
                  certi e qualità in ogni fase della realizzazione del sito web aziendale.
                </p>
                <StaggerContainer className="space-y-5 mb-8" staggerDelay={0.1}>
                  {[
                    {
                      step: "01",
                      title: "Analisi e briefing",
                      description:
                        "Raccogliamo le informazioni sulla tua azienda, i tuoi obiettivi di business e il pubblico di riferimento attraverso un confronto strutturato.",
                    },
                    {
                      step: "02",
                      title: "Progettazione",
                      description:
                        "Definiamo la struttura del sito, l'architettura delle informazioni e il design in linea con l'identità aziendale e gli obiettivi di crescita.",
                    },
                    {
                      step: "03",
                      title: "Sviluppo",
                      description:
                        "Realizziamo il sito web aziendale con tecnologie moderne, garantendo velocità, sicurezza, responsività e ottimizzazione SEO.",
                    },
                    {
                      step: "04",
                      title: "Revisione e lancio",
                      description:
                        "Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo supporto per la gestione.",
                    },
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                        <div className="icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p>
                  Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per aziende ovunque
                  si trovino, mantenendo comunicazione costante e risultati misurabili.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Perché scegliere 4 Web Lab */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché scegliere 4 Web Lab</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Siamo una realtà strutturata specializzata nella realizzazione di siti web aziendali. Ecco cosa ci
                  distingue:
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                  {[
                    "Specializzazione nei siti web per aziende e PMI: conosciamo le dinamiche e le esigenze delle imprese",
                    "Architetture scalabili: ogni sito è progettato per crescere insieme al tuo business",
                    "Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto in tutta Italia",
                    "Ottimizzazione SEO integrata: ogni pagina è costruita per posizionarsi sui motori di ricerca",
                    "Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace e aggiornato",
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p>
                  Scegliere 4 Web Lab significa affidarsi a un partner affidabile per la realizzazione di un sito web
                  aziendale che rappresenti al meglio la tua impresa e ne accompagni la crescita.
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    to="/realizzazione-siti-web-per-professionisti"
                    className="block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      Sito web per partita iva li fate? →
                    </span>
                  </Link>
                  <Link
                    to="/siti-web-per-negozi"
                    className="block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      Vorrei fare il sito del mio negozio →
                    </span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contatti-aziendali"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="az-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#az-cta-noise)" />
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
                  Richiedi un preventivo per il tuo sito web aziendale
                </h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Vuoi realizzare un sito web aziendale strutturato e professionale? Contattaci per un confronto senza
                  impegno: lavoriamo con Aziende in tutta Italia.
                </p>
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

export default SitiWebAziendali;
