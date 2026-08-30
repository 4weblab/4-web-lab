import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import {
  Search,
  Sparkles,
  Bot,
  ArrowRight,
  CheckCircle2,
  Compass,
  Target,
  Wrench,
  FileText,
  LineChart,
  HelpCircle,
  Lightbulb,
} from "lucide-react";

const PAGE_URL = "https://4weblab.it/posizionamento-google-e-ai";
const PAGE_TITLE = "Posizionamento SEO e AEO Padova | Google, ChatGPT & Gemini";
const PAGE_DESCRIPTION =
  "Ottimizziamo il tuo sito per scalare Google ed essere la risposta consigliata dagli assistenti IA (ChatGPT, Perplexity, Gemini). Richiedi l'audit.";

const faqItems: { question: string; answerText: string; answerNode: React.ReactNode }[] = [
  {
    question: "Qual è la differenza tra SEO, AEO e GEO?",
    answerText:
      "La SEO ottimizza un sito per i risultati classici di Google. L'AEO (Answer Engine Optimization) struttura i contenuti per essere scelti come risposta diretta da motori di risposta come Google AI Overviews e assistenti vocali. La GEO (Generative Engine Optimization) rende il brand citabile dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot.",
    answerNode:
      "La SEO ottimizza un sito per i risultati classici di Google. L'AEO (Answer Engine Optimization) struttura i contenuti per essere scelti come risposta diretta da motori di risposta come Google AI Overviews e assistenti vocali. La GEO (Generative Engine Optimization) rende il brand citabile dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot.",
  },
  {
    question: "Quanto tempo serve per vedere risultati SEO?",
    answerText:
      "I primi miglioramenti tecnici sono visibili in poche settimane. Per posizionamenti stabili su parole chiave competitive servono in genere dai 3 ai 6 mesi, mentre per AEO e GEO i risultati possono arrivare più rapidamente, perché dipendono dalla qualità e struttura dei contenuti più che dall'anzianità del dominio.",
    answerNode:
      "I primi miglioramenti tecnici sono visibili in poche settimane. Per posizionamenti stabili su parole chiave competitive servono in genere dai 3 ai 6 mesi, mentre per AEO e GEO i risultati possono arrivare più rapidamente, perché dipendono dalla qualità e struttura dei contenuti più che dall'anzianità del dominio.",
  },
  {
    question: "Lavorate solo a Padova o anche fuori provincia?",
    answerText:
      "Siamo basati a Legnaro (Padova) ma seguiamo clienti in tutta Italia da remoto. La nostra esperienza SEO locale a Padova è un valore aggiunto per le attività del territorio, ma il metodo funziona ovunque.",
    answerNode: (
      <>
        Siamo basati a Legnaro (Padova) ma seguiamo clienti in tutta Italia da remoto. Per le attività del
        territorio abbiamo una landing dedicata su{" "}
        <Link
          to="/realizzazione-siti-web-padova"
          className="text-accent hover:underline font-medium"
        >
          realizzazione siti web a Padova
        </Link>
        .
      </>
    ),
  },
  {
    question: "Includete la scrittura dei contenuti?",
    answerText:
      "Sì. La produzione di contenuti AEO-friendly (risposte concise, definizioni, FAQ strutturate, dati e citazioni) è parte centrale del servizio, perché è ciò che permette al sito di essere scelto come fonte dalle AI.",
    answerNode:
      "Sì. La produzione di contenuti AEO-friendly (risposte concise, definizioni, FAQ strutturate, dati e citazioni) è parte centrale del servizio, perché è ciò che permette al sito di essere scelto come fonte dalle AI.",
  },
  {
    question: "Come si ottimizza un sito per ChatGPT, Perplexity e Gemini?",
    answerText:
      "Le AI generative scelgono fonti chiare, autorevoli e ben strutturate. Si lavora su entità, dati strutturati JSON-LD, contenuti in formato domanda/risposta, presenza coerente del brand su fonti esterne (llms.txt, citazioni, recensioni) e accessibilità per i crawler delle AI.",
    answerNode:
      "Le AI generative scelgono fonti chiare, autorevoli e ben strutturate. Si lavora su entità, dati strutturati JSON-LD, contenuti in formato domanda/risposta, presenza coerente del brand su fonti esterne (llms.txt, citazioni, recensioni) e accessibilità per i crawler delle AI.",
  },
  {
    question: "Serve un sito nuovo o ottimizzate quello esistente?",
    answerText:
      "Possiamo lavorare su entrambi gli scenari. Su un sito esistente partiamo da un audit tecnico, di contenuti e di entità. Se la base è troppo datata o non indicizzabile può essere più efficiente realizzare un nuovo sito ottimizzato fin dalle fondamenta.",
    answerNode: (
      <>
        Possiamo lavorare su entrambi gli scenari. Su un sito esistente partiamo da un audit tecnico,
        di contenuti e di entità. Se la base è troppo datata può essere più efficiente realizzare un{" "}
        <Link to="/siti-web-aziendali" className="text-accent hover:underline font-medium">
          nuovo sito web aziendale
        </Link>{" "}
        ottimizzato fin dalle fondamenta.
      </>
    ),
  },
  {
    question: "Date garanzie di posizionamento su Google?",
    answerText:
      "No, e diffida di chi le promette. Nessuno può garantire una prima posizione su Google: l'algoritmo è in continuo aggiornamento. Garantiamo invece un metodo trasparente, KPI misurabili e azioni concrete su SEO, AEO e GEO.",
    answerNode:
      "No, e diffida di chi le promette. Nessuno può garantire una prima posizione su Google: l'algoritmo è in continuo aggiornamento. Garantiamo invece un metodo trasparente, KPI misurabili e azioni concrete su SEO, AEO e GEO.",
  },
  {
    question: "Cos'è un'entità nel contesto SEO e AEO?",
    answerText:
      "Un'entità è un concetto univoco (persona, azienda, luogo, prodotto, servizio) che Google e le AI identificano e collegano tra loro. Lavorare a livello di entità — e non solo di parole chiave — è fondamentale per essere riconosciuti come fonte autorevole su un argomento.",
    answerNode:
      "Un'entità è un concetto univoco (persona, azienda, luogo, prodotto, servizio) che Google e le AI identificano e collegano tra loro. Lavorare a livello di entità — e non solo di parole chiave — è fondamentale per essere riconosciuti come fonte autorevole su un argomento.",
  },
  {
    question: "Quanto costa il servizio SEO, AEO e GEO?",
    answerText:
      "Il costo dipende dallo stato del sito, dalla competitività del settore e dagli obiettivi. Lavoriamo a progetto e non con abbonamenti vincolanti. Dopo un primo confronto inviamo un preventivo chiaro e senza impegno.",
    answerNode:
      "Il costo dipende dallo stato del sito, dalla competitività del settore e dagli obiettivi. Lavoriamo a progetto e non con abbonamenti vincolanti. Dopo un primo confronto inviamo un preventivo chiaro e senza impegno.",
  },
];

const PosizionamentoGoogleEAi = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Posizionamento SEO e AEO Padova | Google, ChatGPT &amp; Gemini</title>
        <meta name="description" content="Ottimizziamo il tuo sito per scalare Google ed essere la risposta consigliata dagli assistenti IA (ChatGPT, Perplexity, Gemini). Richiedi l'audit." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content="Posizionamento SEO e AEO Padova | Google, ChatGPT &amp; Gemini" />
        <meta property="og:description" content="Ottimizziamo il tuo sito per scalare Google ed essere la risposta consigliata dagli assistenti IA (ChatGPT, Perplexity, Gemini). Richiedi l'audit." />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={PAGE_URL} />
        <meta name="twitter:title" content="Posizionamento SEO e AEO Padova | Google, ChatGPT &amp; Gemini" />
        <meta name="twitter:description" content="Ottimizziamo il tuo sito per scalare Google ed essere la risposta consigliata dagli assistenti IA (ChatGPT, Perplexity, Gemini). Richiedi l'audit." />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "SEO, AEO e GEO — Posizionamento su Google e AI",
            description:
              "Servizio di ottimizzazione SEO, AEO (Answer Engine Optimization) e GEO (Generative Engine Optimization) per siti web. Padova e tutta Italia.",
            serviceType: ["SEO", "Answer Engine Optimization", "Generative Engine Optimization"],
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" },
            ],
            url: PAGE_URL,
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            provider: { "@id": "https://4weblab.it/#business" },
            offers: {
              "@type": "Offer",
              url: PAGE_URL,
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              price: "0",
              description: "Preventivo personalizzato gratuito",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", "[data-aeo-answer]"],
            },
            mainEntity: faqItems.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answerText },
            })),
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": PAGE_URL,
            url: PAGE_URL,
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            about: [
              { "@type": "Thing", name: "Search Engine Optimization" },
              { "@type": "Thing", name: "Answer Engine Optimization" },
              { "@type": "Thing", name: "Generative Engine Optimization" },
            ],
            primaryImageOfPage: { "@type": "ImageObject", url: "https://4weblab.it/og-image.webp" },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "SEO & AI", item: PAGE_URL },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[calc(var(--header-height)+var(--notification-bar-height))]">
        {/* Hero */}
        <section className="page-hero">
          <div className="container-section relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "SEO & AI" },
                ]}
              />
              <h1 className="heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground">
                SEO, AEO e GEO: posizionamento su Google e sulle AI
              </h1>
              <p className="body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
                Ottimizziamo il tuo sito per Google e per gli assistenti AI come ChatGPT, Perplexity,
                Gemini e Copilot. Un solo metodo per essere trovati, scelti e citati.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleContactClick}
                  className="btn-primary inline-flex items-center gap-2 px-10 py-5"
                >
                  Richiedi una valutazione gratuita
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/393514656042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Scrivici su WhatsApp
                </a>
              </div>
              <p className="text-xs text-primary-foreground/50 mt-3">
                Risposta entro 24h — nessun impegno
              </p>
            </div>
          </div>
        </section>


        {/* In sintesi (TL;DR AEO) */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="rounded-2xl border border-accent/20 bg-accent/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-6 h-6 text-accent" />
                  <p className="font-bold text-foreground text-lg uppercase tracking-wider m-0">In sintesi</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">4 Web Lab</strong> è uno studio web di Legnaro
                  (Padova) che si occupa di posizionamento su Google e sulle AI. Lavoriamo su tre
                  livelli: <strong>SEO</strong> per i risultati classici, <strong>AEO</strong> per le
                  risposte dirette (Google AI Overviews, assistenti vocali) e <strong>GEO</strong> per
                  essere citati dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot.
                  Serviamo Padova, il Veneto e tutta Italia in remoto. Preventivo gratuito su richiesta.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Definizioni Q&A */}
        <section
          className="section-padding"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="container-section">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* SEO */}
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box w-13 h-13">
                    <Search className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="heading-2">Cos'è la SEO (Search Engine Optimization)?</h2>
                </div>
                <p className="text-foreground font-semibold mb-4 text-lg">
                  La SEO è l'insieme di tecniche che permettono a un sito web di apparire più in alto
                  nei risultati organici di Google e degli altri motori di ricerca.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Una buona strategia SEO lavora su tre pilastri: ottimizzazione tecnica del sito
                  (velocità, struttura, indicizzabilità), contenuti pensati per rispondere all'intento
                  di ricerca degli utenti e autorità del dominio costruita nel tempo. È la base su cui
                  poggiano sia l'AEO che la GEO. Se invece servono risultati immediati, la SEO si
                  affianca bene a <Link to="/pubblicita-google-ads" className="text-accent hover:underline font-medium">campagne Google ADS</Link> per intercettare subito le ricerche ad alto intento.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Audit tecnico (Core Web Vitals, indicizzazione, crawl budget)",
                    "Keyword research e mappatura intenti di ricerca",
                    "Ottimizzazione on-page (title, meta, heading, link interni)",
                    "SEO locale per città/provincia di appartenenza",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* AEO */}
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box w-13 h-13">
                    <Sparkles className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="heading-2">Cos'è l'AEO (Answer Engine Optimization)?</h2>
                </div>
                <p className="text-foreground font-semibold mb-4 text-lg">
                  L'AEO è l'ottimizzazione dei contenuti per essere scelti come risposta diretta dai
                  motori di risposta: Google AI Overviews, featured snippet, assistenti vocali e box
                  "People also ask".
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Mentre la SEO porta clic verso il sito, l'AEO punta a essere la risposta. Richiede
                  contenuti strutturati in formato domanda/risposta, dati strutturati JSON-LD,
                  risposte concise (40–60 parole) seguite da approfondimenti, e un'architettura
                  semantica che renda chiara l'entità trattata.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Contenuti in formato Q&A con risposta diretta in apertura",
                    "Markup Schema.org (FAQPage, HowTo, Article, Service)",
                    "Ottimizzazione per featured snippet e People Also Ask",
                    "Linguaggio chiaro, dati verificabili, citazioni di fonti",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* GEO */}
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box w-13 h-13">
                    <Bot className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="heading-2">Cos'è la GEO (Generative Engine Optimization)?</h2>
                </div>
                <p className="text-foreground font-semibold mb-4 text-lg">
                  La GEO è l'ottimizzazione del brand e dei contenuti per essere citati e raccomandati
                  dalle AI generative come ChatGPT, Perplexity, Gemini, Claude e Microsoft Copilot.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Le AI non si limitano più a indicizzare pagine: scelgono fonti su cui costruire le
                  risposte. La GEO lavora sulla riconoscibilità dell'entità (brand, autore, azienda)
                  attraverso menzioni coerenti su fonti autorevoli esterne, contenuti citabili,
                  llms.txt e accessibilità ai crawler delle AI.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Costruzione dell'entità brand su fonti esterne autorevoli",
                    "File llms.txt e accessibilità per i crawler delle AI",
                    "Contenuti citabili: dati originali, definizioni, casi studio",
                    "Coerenza informativa (NAP, ruoli, servizi) su web e directory",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tabella comparativa */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <Compass className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Differenze tra SEO, AEO e GEO</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-sm)]">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-accent/8 text-foreground">
                      <tr>
                        <th className="p-4 font-semibold">Aspetto</th>
                        <th className="p-4 font-semibold">SEO</th>
                        <th className="p-4 font-semibold">AEO</th>
                        <th className="p-4 font-semibold">GEO</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      {[
                        {
                          label: "Obiettivo",
                          seo: "Posizionare pagine su Google",
                          aeo: "Essere la risposta diretta",
                          geo: "Essere citato dalle AI generative",
                        },
                        {
                          label: "Destinatario",
                          seo: "Crawler dei motori di ricerca",
                          aeo: "Answer engine e assistenti vocali",
                          geo: "LLM (ChatGPT, Gemini, Perplexity, Copilot)",
                        },
                        {
                          label: "Segnali chiave",
                          seo: "Backlink, contenuti, tecnica",
                          aeo: "Schema markup, struttura Q&A",
                          geo: "Entità brand, menzioni esterne, autorevolezza",
                        },
                        {
                          label: "Formato contenuto",
                          seo: "Articoli e pagine ottimizzate",
                          aeo: "Risposte concise + approfondimento",
                          geo: "Contenuti citabili e verificabili",
                        },
                        {
                          label: "KPI principale",
                          seo: "Traffico organico, posizioni",
                          aeo: "Featured snippet, AI Overviews",
                          geo: "Menzioni e citazioni da AI",
                        },
                      ].map((row) => (
                        <tr key={row.label} className="border-t border-border/60">
                          <td className="p-4 font-semibold text-foreground">{row.label}</td>
                          <td className="p-4">{row.seo}</td>
                          <td className="p-4">{row.aeo}</td>
                          <td className="p-4">{row.geo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Come lavoriamo */}
        <section
          className="section-padding"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Wrench className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Come lavoriamo</h2>
              </AnimatedSection>
              <AnimatedSection className="text-muted-foreground mb-8" delay={0.1}>
                <p>
                  Un metodo trasparente, costruito su cinque fasi. Niente promesse di prime posizioni:
                  solo azioni concrete, misurabili e documentate.
                </p>
              </AnimatedSection>
              <StaggerContainer className="space-y-5" staggerDelay={0.08}>
                {[
                  {
                    step: "01",
                    icon: Target,
                    title: "Audit SEO, AEO e GEO",
                    description:
                      "Analizziamo lo stato tecnico del sito, l'indicizzazione, i contenuti esistenti, la presenza del brand su fonti esterne e la visibilità attuale sulle AI.",
                  },
                  {
                    step: "02",
                    icon: Compass,
                    title: "Strategia di entità e parole chiave",
                    description:
                      "Definiamo le entità di riferimento del business e mappiamo le query (informazionali, navigazionali, transazionali) su cui ha senso essere presenti.",
                  },
                  {
                    step: "03",
                    icon: Wrench,
                    title: "Ottimizzazione on-page e dati strutturati",
                    description:
                      "Interveniamo su title, meta, heading, link interni, Core Web Vitals e JSON-LD (Service, FAQPage, Article, BreadcrumbList) per parlare la lingua dei motori e delle AI.",
                  },
                  {
                    step: "04",
                    icon: FileText,
                    title: "Contenuti AEO e GEO friendly",
                    description:
                      "Scriviamo risposte dirette, FAQ, definizioni e approfondimenti citabili. Curiamo il file llms.txt e la coerenza dell'entità brand sulle fonti esterne.",
                  },
                  {
                    step: "05",
                    icon: LineChart,
                    title: "Monitoraggio e iterazione",
                    description:
                      "Misuriamo posizioni, traffico organico, presenza nei featured snippet e citazioni da AI. Iteriamo sulle azioni che generano più valore.",
                  },
                ].map((item, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                      <div className="icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-8">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti su SEO, AEO e GEO</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6"
                    >
                      <AccordionTrigger className="text-left py-5 hover:no-underline">
                        <h3 className="font-semibold text-foreground text-base pr-4">{faq.question}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.answerNode}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Interlinking — Approfondisci */}
        <section
          className="section-padding"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="text-center mb-10">
                <h2 className="heading-2 mb-3">Approfondisci sul nostro sito</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Scopri tutti i nostri servizi e le risorse pensate per chi vuole essere trovato
                  online — su Google e sulle AI.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
                {[
                  { to: "/", title: "Home", description: "Chi siamo e cosa facciamo in 4 Web Lab." },
                  {
                    to: "/siti-web-aziendali",
                    title: "Siti web aziendali",
                    description: "Pacchetti strutturati per PMI da 1890€.",
                  },
                  {
                    to: "/siti-web-per-professionisti",
                    title: "Siti per professionisti",
                    description: "Soluzioni per studi e liberi professionisti da 990€.",
                  },
                  {
                    to: "/siti-web-per-negozi",
                    title: "Siti per negozi",
                    description: "Pacchetto essenziale per attività locali da 490€.",
                  },
                  {
                    to: "/realizzazione-siti-web-padova",
                    title: "Siti web a Padova",
                    description: "Landing locale dedicata a Padova e provincia.",
                  },
                  {
                    to: "/faq-realizzazione-siti-web",
                    title: "FAQ siti web",
                    description: "Risposte rapide su costi, tempi e tecnologie.",
                  },
                  {
                    to: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
                    title: "Perché il sito non si trova su Google",
                    description: "Articolo pratico sulle cause più comuni.",
                  },
                  {
                    to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                    title: "Siti web e intelligenza artificiale",
                    description: "Opportunità, rischi e cosa cambia per chi cerca online.",
                  },
                  {
                    to: "/blog",
                    title: "Tutti gli articoli del blog",
                    description: "Guide su SEO, costi, GDPR, AI e molto altro.",
                  },
                ].map((c) => (
                  <StaggerItem key={c.to}>
                    <Link
                      to={c.to}
                      className="block h-full p-5 rounded-2xl border border-border/60 bg-card hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1.5">
                        {c.title} →
                      </h3>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section
          id="contatti"
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
                  Richiedi una valutazione SEO, AEO e GEO
                </h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Raccontaci il tuo progetto: analizziamo lo stato attuale del tuo sito e ti
                  proponiamo un piano concreto per essere trovato su Google e sulle AI. Nessun
                  impegno.
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
                  <p className="text-xs text-primary-foreground/50 mt-2">
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

export default PosizionamentoGoogleEAi;