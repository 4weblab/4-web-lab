import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Megaphone,
  Target,
  TrendingUp,
  MapPin,
  Search,
  BarChart3,
  ShoppingBag,
  Youtube,
  HelpCircle,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Zap,
  Repeat,
  Store,
  UserCheck,
  Building2,
} from "lucide-react";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import heroImg from "@/assets/google-ads-hero.webp";
import targetingImg from "@/assets/google-ads-targeting.webp";
import methodImg from "@/assets/google-ads-method.webp";

const PAGE_URL = "https://4weblab.it/pubblicita-google-ads";

const faqs = [
  {
    q: "Quanto costa fare pubblicità su Google?",
    a: "Il costo della pubblicità su Google ADS è composto da due voci: il budget media speso direttamente su Google (gestito dal cliente) e il compenso per la gestione professionale delle campagne. Non esiste un listino fisso perché il budget ideale dipende da settore, obiettivi, concorrenza e area geografica: per questo offriamo una consulenza iniziale gratuita per definire la strategia più sostenibile.",
  },
  {
    q: "In quanto tempo si vedono i risultati con Google ADS?",
    a: "Con Google ADS i primi click e contatti arrivano nelle prime 24–72 ore dalla pubblicazione delle campagne. I risultati ottimali si raggiungono in genere dopo 4–8 settimane di ottimizzazione continua, quando l'algoritmo ha raccolto dati sufficienti per migliorare progressivamente costi e conversioni.",
  },
  {
    q: "Qual è il budget minimo consigliato per Google ADS?",
    a: "Non esiste un budget minimo imposto da Google, ma per ottenere dati significativi e risultati misurabili consigliamo di partire da un investimento mensile coerente con il proprio mercato di riferimento. In consulenza gratuita analizziamo concorrenza e parole chiave e ti proponiamo una soglia realistica per il tuo settore.",
  },
  {
    q: "Google ADS funziona per piccole attività locali?",
    a: "Sì: Google ADS è particolarmente efficace per attività locali (negozi, professionisti, studi) perché permette di intercettare solo chi cerca un prodotto o servizio in una specifica area geografica, anche a livello di quartiere o raggio in km. Il targeting geografico riduce gli sprechi e massimizza le richieste qualificate.",
  },
  {
    q: "Qual è la differenza tra Google ADS e SEO?",
    a: "Google ADS porta visibilità immediata a pagamento: gli annunci compaiono in cima ai risultati di ricerca fin dal primo giorno e si paga per click. La SEO è il posizionamento organico nel medio-lungo periodo, gratuito ma più lento. I due canali sono complementari e funzionano al meglio se usati insieme.",
  },
  {
    q: "Gestite campagne Google ADS anche fuori dal Veneto?",
    a: "Sì: gestiamo campagne Google ADS per clienti in tutta Italia. La nostra sede operativa è a Legnaro (PD), ma lavoriamo al 100% da remoto con confronti regolari via call, email e WhatsApp, garantendo lo stesso livello di servizio ovunque si trovi l'attività.",
  },
  {
    q: "Cosa include la consulenza gratuita iniziale?",
    a: "La consulenza gratuita include analisi della tua attività e dei competitor, individuazione delle parole chiave principali, stima del budget consigliato e proposta di strategia con tipologie di campagne più adatte ai tuoi obiettivi. Nessun impegno: al termine ricevi un quadro chiaro per decidere se procedere.",
  },
];

const howToSteps = [
  {
    n: "01",
    title: "Analisi & obiettivi",
    desc: "Studiamo attività, mercato, concorrenza e definiamo insieme gli obiettivi misurabili (chiamate, richieste preventivo, vendite, prenotazioni).",
  },
  {
    n: "02",
    title: "Strategia & keyword",
    desc: "Selezioniamo le parole chiave a più alto intento di acquisto, scegliamo le tipologie di campagna e impostiamo budget e targeting geografico.",
  },
  {
    n: "03",
    title: "Setup campagne",
    desc: "Configuriamo account Google ADS, conversioni tracciate, annunci, estensioni e landing page coerenti per massimizzare il tasso di conversione.",
  },
  {
    n: "04",
    title: "Ottimizzazione continua",
    desc: "Monitoriamo quotidianamente costi, conversioni e qualità del traffico, escludiamo keyword inefficaci e miglioriamo offerte e creatività.",
  },
  {
    n: "05",
    title: "Report mensile",
    desc: "Ricevi un report chiaro con risultati, costo per contatto, ROI stimato e prossimi passi strategici. Sempre comprensibile, senza tecnicismi inutili.",
  },
];

const PubblicitaGoogleAds = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti-google-ads");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Pubblicità Google ADS | Gestione Campagne | 4 Web Lab</title>
        <meta
          name="description"
          content="Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita per la tua strategia pubblicitaria."
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" />
        <meta
          property="og:description"
          content="Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content="Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" />
        <meta
          name="twitter:description"
          content="Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id": `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Pubblicità Google ADS", item: PAGE_URL },
                ],
              },
              {
                "@type": "WebPage",
                "@id": `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab",
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
                about: { "@id": `${PAGE_URL}#service` },
                primaryImageOfPage: "https://4weblab.it/og-image.webp",
                speakable: {
                  "@type": "SpeakableSpecification",
                  cssSelector: [".aeo-definition", ".aeo-faq-answer"],
                },
              },
              {
                "@type": "LocalBusiness",
                "additionalType": "https://schema.org/InternetMarketingService",
                "@id": "https://4weblab.it/#localbusiness",
                name: "4 Web Lab",
                url: "https://4weblab.it/",
                telephone: "+39 351 465 6042",
                priceRange: "Su preventivo — consulenza gratuita",
                image: "https://4weblab.it/og-image.webp",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Legnaro",
                  addressRegion: "PD",
                  addressCountry: "IT",
                },
                geo: { "@type": "GeoCoordinates", latitude: 45.3447, longitude: 11.9606 },
                parentOrganization: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                ],
              },
              {
                "@type": "Service",
                "@id": `${PAGE_URL}#service`,
                name: "Gestione Campagne Google ADS",
                serviceType: "Google Ads Management",
                category: "Digital Advertising",
                description:
                  "Gestione completa di campagne Google ADS (Search, Performance Max, Shopping, Display, YouTube, Remarketing, Local) per negozi, professionisti e aziende in Veneto e in tutta Italia. Setup, ottimizzazione continua e report mensile.",
                url: PAGE_URL,
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                provider: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                ],
                offers: {
                  "@type": "Offer",
                  url: PAGE_URL,
                  availability: "https://schema.org/InStock",
                  priceCurrency: "EUR",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "EUR",
                    description:
                      "Preventivo personalizzato in base a obiettivi, settore e area geografica. Consulenza strategica iniziale gratuita.",
                  },
                },
              },
              {
                "@type": "FAQPage",
                "@id": `${PAGE_URL}#faq`,
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "HowTo",
                "@id": `${PAGE_URL}#howto`,
                name: "Come gestiamo una campagna Google ADS",
                description: "Il metodo in 5 fasi di 4 Web Lab per gestire campagne Google ADS efficaci.",
                step: howToSteps.map((s, i) => ({
                  "@type": "HowToStep",
                  position: i + 1,
                  name: s.title,
                  text: s.desc,
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[calc(var(--header-height)+var(--notification-bar-height))]">
        {/* Hero */}
        <section className="page-hero">
          <div className="container-section relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <PageBreadcrumb
                  items={[{ label: "Home", to: "/" }, { label: "Pubblicità Google ADS" }]}
                />
                <h1 className="heading-1 mb-6 font-extrabold tracking-tight text-primary-foreground">
                  Pubblicità su Google ADS: porta la tua attività davanti a chi sta già cercando
                </h1>
                <p className="body-large text-primary-foreground/80 mb-8 text-balance">
                  Gestione completa delle campagne Google ADS per negozi, professionisti e aziende. Strategia,
                  setup, ottimizzazione continua e report mensili chiari, per trasformare il budget pubblicitario in
                  contatti e clienti reali.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleContactClick}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4"
                  >
                    Richiedi una consulenza gratuita
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/393514656042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Scrivici su WhatsApp
                  </a>
                </div>
                <p className="text-xs text-primary-foreground/60 mt-3">
                  Nessun impegno · Risposta entro 24h · <strong>WhatsApp richiede WhatsApp Web su PC</strong>
                </p>
              </div>
              <div>
                <img
                  src={heroImg}
                  alt="Pubblicità Google ADS: annunci sponsorizzati in cima ai risultati di ricerca"
                  width={1536}
                  height={1024}
                  fetchPriority="high"
                  decoding="async"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AEO Definition */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15">
                <h3 className="font-bold text-foreground text-xl mb-3">Cos'è Google ADS e come funziona</h3>
                <p className="aeo-definition text-muted-foreground leading-relaxed">
                  Google ADS (ex Google AdWords) è la piattaforma pubblicitaria di Google che permette a qualsiasi
                  attività di mostrare annunci in cima ai risultati di ricerca, su YouTube, Gmail e su milioni di
                  siti partner. Si paga solo quando un utente interagisce con l'annuncio (pay-per-click) e si possono
                  controllare budget, area geografica e pubblico di destinazione in tempo reale.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Perché fare pubblicità */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Megaphone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché fare pubblicità su Google</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-8" delay={0.1}>
                <p>
                  La domanda non è più "come pubblicizzare la propria attività", ma <strong>dove</strong> farlo per
                  intercettare clienti pronti ad acquistare. Google ADS ti mette davanti a chi sta cercando
                  attivamente ciò che offri, esattamente nel momento decisionale.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
                {[
                  {
                    icon: Target,
                    title: "Intento di acquisto alto",
                    desc: "Intercetti utenti che stanno già cercando il tuo prodotto o servizio: il pubblico più caldo possibile.",
                  },
                  {
                    icon: Zap,
                    title: "Risultati immediati",
                    desc: "Le campagne portano traffico qualificato dal primo giorno, senza attendere i tempi della SEO organica.",
                  },
                  {
                    icon: BarChart3,
                    title: "Tutto misurabile",
                    desc: "Sai esattamente quanto spendi, quanti contatti ricevi e qual è il costo per cliente acquisito.",
                  },
                  {
                    icon: Sliders,
                    title: "Budget sotto controllo",
                    desc: "Stabilisci tu il budget giornaliero o mensile. Puoi aumentarlo, ridurlo o metterlo in pausa in ogni momento.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Scalabile",
                    desc: "Una volta trovata la formula che funziona, puoi aumentare l'investimento e moltiplicare i risultati.",
                  },
                  {
                    icon: MapPin,
                    title: "Targeting locale preciso",
                    desc: "Mostri gli annunci solo nella tua area di interesse: città, provincia, quartiere o raggio in km.",
                  },
                ].map((b, i) => (
                  <StaggerItem key={i}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400">
                      <div className="icon-box w-12 h-12 mb-4">
                        <b.icon className="w-5 h-5 text-accent-foreground" />
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

        {/* Per chi è il servizio */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Per chi è il servizio Google ADS</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" direction="left">
                  <p className="mb-6">
                    Gestiamo campagne Google ADS per qualsiasi tipo di attività che voglia farsi trovare online e
                    generare contatti qualificati: <strong>negozi e locali fisici</strong>,{" "}
                    <strong>professionisti</strong>, <strong>aziende e PMI</strong>. Cambia la strategia, non
                    l'efficacia del canale.
                  </p>
                  <p>
                    Le campagne sono cucite addosso al settore e agli obiettivi: prenotazioni per uno studio,
                    chiamate per un negozio di quartiere, richieste preventivo per un'azienda B2B, vendite per un
                    e-commerce.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <img
                    src={targetingImg}
                    alt="Dashboard analytics campagne Google ADS con grafico di crescita lead"
                    width={1536}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
              </div>
              <StaggerContainer className="grid md:grid-cols-3 gap-6 mt-10" staggerDelay={0.1}>
                {[
                  {
                    icon: Store,
                    title: "Negozi e locali fisici",
                    desc: "Più clienti in negozio, prenotazioni tavoli, indicazioni stradali e telefonate dirette grazie alle campagne Search e Local.",
                  },
                  {
                    icon: UserCheck,
                    title: "Professionisti",
                    desc: "Studi medici, legali, consulenti, personal trainer: campagne per generare appuntamenti e richieste di preventivo qualificate.",
                  },
                  {
                    icon: Building2,
                    title: "Aziende e PMI",
                    desc: "Lead generation B2B, lancio prodotti, presenza nei mercati di interesse e vendite e-commerce con Performance Max e Shopping.",
                  },
                ].map((c, i) => (
                  <StaggerItem key={i}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center">
                      <div className="icon-box w-14 h-14 mx-auto mb-4">
                        <c.icon className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Tipi di campagne */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Layers className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Tipi di campagne Google ADS che gestiamo</h2>
              </AnimatedSection>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.06}>
                {[
                  { icon: Search, name: "Search", desc: "Annunci testuali sui risultati di ricerca Google" },
                  { icon: Sparkles, name: "Performance Max", desc: "Campagne automatiche multi-canale ad alta resa" },
                  { icon: ShoppingBag, name: "Shopping", desc: "Schede prodotto con immagine e prezzo per e-commerce" },
                  { icon: Layers, name: "Display", desc: "Banner visivi sui siti partner del network Google" },
                  { icon: Youtube, name: "YouTube ADS", desc: "Video pubblicitari prima e durante i contenuti YouTube" },
                  { icon: Repeat, name: "Remarketing", desc: "Annunci a chi ha già visitato il tuo sito web" },
                  { icon: MapPin, name: "Local", desc: "Annunci geolocalizzati per portare clienti in negozio" },
                ].map((t, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                      <div className="icon-box w-10 h-10 flex-shrink-0">
                        <t.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-0.5">{t.name}</h3>
                        <p className="text-xs text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Metodo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <BarChart3 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il nostro metodo in 5 step</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
                <AnimatedSection direction="left">
                  <img
                    src={methodImg}
                    alt="Workflow gestione campagne Google ADS in 5 step"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                    {howToSteps.map((s) => (
                      <StaggerItem key={s.n}>
                        <div className="flex gap-5 items-start p-5 rounded-2xl bg-accent/3 border border-accent/8 hover:bg-accent/6 hover:border-accent/15 transition-all duration-400">
                          <div className="icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground">
                            {s.n}
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-1.5">{s.title}</h3>
                            <p className="text-sm text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Prezzi & consulenza */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <div className="icon-box w-14 h-14 mx-auto mb-6">
                  <Sparkles className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2 mb-6">Quanto costa la pubblicità su Google?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Non esiste un listino fisso per tipologia di cliente, e diffidate di chi ne propone uno. Il costo
                  della pubblicità su Google ADS dipende da variabili reali: obiettivi che vuoi raggiungere, settore
                  di attività, livello di concorrenza, area geografica e budget media che intendi investire.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Per questo il primo passo migliore è una <strong>consulenza completamente gratuita</strong>:
                  analizziamo insieme la tua attività, valutiamo il potenziale e ti proponiamo una strategia
                  trasparente con stima del budget media e del compenso di gestione.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <StaggerContainer className="grid sm:grid-cols-2 gap-4 text-left mb-10" staggerDelay={0.08}>
                  {[
                    "Analisi attività e competitor",
                    "Stima budget consigliato",
                    "Strategia su misura",
                    "Nessun impegno",
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-accent/10">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground font-medium">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <button
                  onClick={handleContactClick}
                  className="btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base"
                >
                  Richiedi la consulenza gratuita
                  <ArrowRight className="w-5 h-5" />
                </button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* GEO: Veneto e Italia */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Google ADS in Veneto e in tutta Italia</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-4">
                  La nostra sede operativa è a <strong>Legnaro (PD)</strong>, nel cuore del Veneto. Gestiamo campagne
                  Google ADS per attività in tutta la regione — Padova, Abano Terme, Albignasego, Selvazzano Dentro,
                  Vigonza, Cadoneghe, Rubano, Este, Monselice, Cittadella, Piove di Sacco, Venezia, Vicenza, Verona,
                  Treviso, Rovigo, Belluno — e in <strong>qualsiasi altra regione d'Italia</strong>.
                </p>
                <p>
                  Lavoriamo al 100% da remoto con un metodo collaudato di confronti via call, email e WhatsApp:
                  ricevi lo stesso livello di servizio ovunque tu sia. Se la tua attività è anche a Padova, vedi la
                  nostra pagina dedicata alla{" "}
                  <Link to="/realizzazione-siti-web-padova" className="text-accent hover:underline font-medium">
                    realizzazione siti web a Padova
                  </Link>{" "}
                  e al{" "}
                  <Link to="/posizionamento-google-e-ai" className="text-accent hover:underline font-medium">
                    posizionamento su Google e AI
                  </Link>
                  .
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti su Google ADS</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <p className="text-muted-foreground mb-8">
                  Risposte dirette alle domande più comuni sulla pubblicità su Google.
                </p>
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
                  Hai altre domande?{" "}
                  <Link to="/faq-realizzazione-siti-web" className="text-accent hover:underline font-medium">
                    Vedi la FAQ generale
                  </Link>{" "}
                  oppure scrivici.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA finale */}
        <section
          id="contatti-google-ads"
          className="section-padding relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]"
            aria-hidden="true"
          />
          <div className="container-section relative z-10">
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h2 className="heading-2 text-primary-foreground mb-6">
                  Richiedi la tua consulenza Google ADS gratuita
                </h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Raccontaci la tua attività e i tuoi obiettivi: ti proponiamo una strategia trasparente con stima
                  del budget e dei risultati attesi. Senza impegno, ovunque ti trovi in Italia.
                </p>
                <div className="text-center">
                  <a
                    href="https://wa.me/393514656042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Scrivici su WhatsApp
                  </a>
                  <p className="text-xs text-primary-foreground/50 mt-2 text-center">
                    <strong>Richiede WhatsApp Web su PC</strong>
                  </p>
                </div>
              </div>
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

export default PubblicitaGoogleAds;