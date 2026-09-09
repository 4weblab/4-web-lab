import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CheckCircle2, MapPin, Briefcase, Settings, Globe, MessageCircle, Sparkles, Image as ImageIcon, Link2 } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ContactFormWeb3Forms from "@/components/ContactFormWeb3Forms";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Layers, HelpCircle } from "lucide-react";
import dentalHero from "@/assets/dental-hero.webp";
import rbSncEdilizia from "@/assets/rb-snc-edilizia.webp";
import elisaPiovanPt from "@/assets/elisa-piovan-pt.webp";

const SitiWebPadova = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    window.location.href = "/#contatti";
  };

  return (
    <>
      <Helmet>
        <title>Sviluppo Siti Web Padova e Provincia | 4 Web Lab</title>
        <meta name="description" content="Cerchi una web agency a Padova? Realizziamo siti professionali su misura per attività locali e PMI. Consegna in 2-4 settimane. Preventivo in 24h." />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta property="og:title" content="Sviluppo Siti Web Padova e Provincia | 4 Web Lab" />
        <meta property="og:description" content="Cerchi una web agency a Padova? Realizziamo siti professionali su misura per attività locali e PMI. Consegna in 2-4 settimane. Preventivo in 24h." />
        <meta property="og:image" content="https://4weblab.it/og-image.webp" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/realizzazione-siti-web-padova" />
        <meta name="twitter:title" content="Sviluppo Siti Web Padova e Provincia | 4 Web Lab" />
        <meta name="twitter:description" content="Cerchi una web agency a Padova? Realizziamo siti professionali su misura per attività locali e PMI. Consegna in 2-4 settimane. Preventivo in 24h." />
        <meta name="twitter:image" content="https://4weblab.it/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
                  { "@type": "ListItem", position: 2, name: "Realizzazione siti web Padova", item: "https://4weblab.it/realizzazione-siti-web-padova" },
                ],
              },
              {
                "@type": "LocalBusiness",
                "additionalType": "https://schema.org/InternetMarketingService",
                "@id": "https://4weblab.it/#localbusiness",
                name: "4 Web Lab",
                alternateName: ["Web Studio Padova", "Agenzia Web Padova"],
                url: "https://4weblab.it/",
                telephone: "+39 351 465 6042",
                priceRange: "€490+",
                image: "https://4weblab.it/og-image.webp",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Legnaro",
                  addressRegion: "PD",
                  postalCode: "35020",
                  addressCountry: "IT",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 45.3434,
                  longitude: 11.9569,
                },
                parentOrganization: { "@id": "https://4weblab.it/#business" },
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                ],
              },
              {
                "@type": "Service",
                "@id": "https://4weblab.it/realizzazione-siti-web-padova#service",
                name: "Realizzazione Siti Web a Padova",
                alternateName: [
                  "Sviluppo siti web Padova",
                  "Creazione siti web Padova",
                  "Realizzazione siti internet Padova",
                  "Web studio Padova",
                ],
                description:
                  "Agenzia web a Padova: realizziamo siti professionali per negozi, studi e aziende del territorio con SEO locale e assistenza dedicata.",
                serviceType: "Web Design",
                areaServed: [
                  { "@type": "AdministrativeArea", name: "Veneto" },
                  { "@type": "City", name: "Padova" },
                  { "@type": "City", name: "Venezia" },
                ],
                url: "https://4weblab.it/realizzazione-siti-web-padova",
                inLanguage: "it-IT",
                isPartOf: { "@id": "https://4weblab.it/#website" },
                provider: { "@id": "https://4weblab.it/#business" },
                offers: {
                  "@type": "AggregateOffer",
                  url: "https://4weblab.it/realizzazione-siti-web-padova",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "EUR",
                  lowPrice: "490",
                  highPrice: "1890",
                  offerCount: 3,
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quanto costa realizzare un sito web a Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un sito web a Padova costa da 490€ una tantum per un sito vetrina per negozi, da 990€ per i professionisti e da 1890€ per le aziende. Tutti i prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "In quanto tempo viene realizzato un sito a Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "4 Web Lab realizza e pubblica un sito web a Padova in 2-4 settimane. I siti monopagina o per negozi sono pronti in circa 14 giorni, mentre i progetti aziendali articolati richiedono 3-4 settimane."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Lavorate solo a Padova città o anche in provincia?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Operiamo in tutta la provincia di Padova: Padova città, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Legnaro, Este, Monselice, Cittadella e Piove di Sacco. La nostra sede operativa è a Legnaro (PD)."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "È possibile incontrarvi di persona a Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: per i progetti che lo richiedono organizziamo incontri di persona a Padova e provincia, su appuntamento. Per la maggior parte delle collaborazioni preferiamo invece confronti rapidi da remoto o telefonici, per ottimizzare i tempi del progetto."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Offrite SEO locale per posizionarsi su Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: ogni sito realizzato a Padova viene ottimizzato per la SEO locale con title, meta description, contenuti e dati strutturati pensati per la ricerca geolocalizzata (es. 'parrucchiere Padova', 'commercialista Padova'). Su richiesta gestiamo anche la scheda Google Business Profile."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Realizzate siti anche per clienti fuori Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sì: lavoriamo con clienti in tutto il Veneto e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Cosa fa un web studio a Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Un web studio a Padova si occupa di progettazione, sviluppo, pubblicazione e manutenzione di siti web per attività locali. 4 Web Lab segue l'intero ciclo: analisi, design, sviluppo SEO-friendly, hosting, ottimizzazione locale per Padova e supporto continuativo."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Qual è la differenza tra realizzazione, creazione e sviluppo di un sito web?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sono termini usati come sinonimi: realizzazione, creazione e sviluppo di un sito web indicano lo stesso processo, ovvero la progettazione e costruzione di un sito internet professionale. La differenza è solo terminologica; il risultato è un sito online, ottimizzato per Google e pronto a generare contatti."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Come scegliere un'agenzia per la creazione di siti internet a Padova?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Per scegliere un'agenzia di creazione siti internet a Padova valuta: portfolio di lavori realizzati, trasparenza dei prezzi, competenze SEO locali, recensioni Google, tempi di risposta e disponibilità di un referente diretto. 4 Web Lab ha sede a Legnaro (PD), prezzi pubblici da 490€ e risposte entro 24h."
                    }
                  }
                ]
              },
              {
                "@type": "SpeakableSpecification",
                cssSelector: [".aeo-definition", ".aeo-faq-answer"],
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="page-hero">
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
                className="heading-1 text-primary-foreground mb-6 text-balance"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" }}
              >
                Siti Web che Generano Clienti a Padova e Provincia
              </h1>
              <p
                className="body-large text-primary-foreground/90 mb-4 text-balance"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                Il web studio locale per artigiani, professionisti e PMI che vogliono crescere online.
              </p>
              <p
                className="body-large text-primary-foreground/95 mb-10 max-w-3xl mx-auto text-balance"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
              >
                Il cliente che cerca il tuo servizio a Padova oggi, deve trovare te — non il concorrente. Sede a Legnaro (PD), preventivo personalizzato gratuito in 24 ore.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => document.getElementById("contatti-padova")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary text-lg px-10 py-4"
                  aria-label="Richiedi un preventivo gratuito"
                >
                  Richiedi un preventivo gratuito
                </button>
                <a
                  href="https://wa.me/393514656042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground/95 hover:bg-primary-foreground/10 transition-all text-base font-semibold"
                >
                  <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
                </a>
              </div>
              <p className="text-primary-foreground/95 text-sm sm:text-base font-medium mt-6">
                Sede a Legnaro (PD) • Risposta entro 24 ore • Assistenza e supporto inclusi
              </p>
            </AnimatedSection>
          </div>
        </section>


        {/* Answer Box AEO – risposte rapide */}
        <section className="py-12 bg-background border-b border-border/40">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="aeo-definition rounded-2xl border border-accent/15 bg-accent/5 p-6 md:p-8">
                  <h3 className="text-foreground font-semibold mb-4 text-base">
                    In sintesi: Realizzazione Siti Web a Padova con 4 Web Lab
                  </h3>
                  <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc pl-5">
                    <li><strong className="text-foreground">Sede:</strong> Legnaro (PD) – operativi in tutta la provincia di Padova e Veneto.</li>
                    <li><strong className="text-foreground">Servizi inclusi:</strong> Progettazione web, ottimizzazione SEO locale, design responsivo e supporto tecnico continuo.</li>
                    <li><strong className="text-foreground">Tempi di consegna:</strong> 2-4 settimane.</li>
                    <li><strong className="text-foreground">Target:</strong> Negozi, artigiani, liberi professionisti e PMI locali.</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 1 – Perché scegliere un web studio a Padova */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto mb-12">
              <AnimatedSection>
                <h2 className="heading-2 mb-4">Come un Web Studio Locale Posiziona la tua Attività su Google</h2>
                <p className="aeo-definition body-base text-muted-foreground leading-relaxed">
                  Realizzare un sito web a Padova non significa solo creare una bella vetrina grafica, ma strutturare una vera e propria calamita per i clienti locali. Ottimizziamo il tuo sito per intercettare le ricerche geolocalizzate dei tuoi potenziali clienti (es. "idraulico Padova", "centro estetico Legnaro", "consulente finanziario Padova"). Il vantaggio di scegliere uno studio del territorio è la combinazione tra una strategia SEO locale mirata, comunicazione diretta e la conoscenza reale del tessuto imprenditoriale padovano.
                </p>
              </AnimatedSection>
            </div>
          </div>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Testo a sinistra */}
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="icon-box w-13 h-13">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="heading-2">Web studio a Padova: perché la prossimità fa la differenza</h3>
                  </div>
                  <p className="body-base text-muted-foreground">
                    Con noi non aspetti in coda a un call center: parli subito con chi sviluppa e gestisce il tuo sito, raggiungibile in 15 minuti dal centro di Padova.
                  </p>
                </div>

                {/* Lista a destra */}
                <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                  {[
                    "Profonda conoscenza del mercato locale",
                    "Comunicazione diretta e senza intermediari",
                    "Incontri di persona e supporto sul territorio",
                    "Assistenza e aggiornamenti post-lancio",
                    "Struttura snella e tempi di risposta rapidi",
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
                <h2 className="heading-2 mb-4">
                  Soluzioni Web su Misura per il Tuo Business a Padova
                </h2>
                <p className="body-large text-muted-foreground max-w-3xl mx-auto text-balance">
                  Progettiamo esperienze digitali specifiche per ogni tipo di attività locale e aziendale.
                </p>
              </AnimatedSection>

              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
                {[
                  {
                    title: "Siti per Professionisti & Studi",
                    description:
                      "Il paziente o cliente che ti cerca su Google deve trovare subito fiducia: siti per medici, avvocati, psicologi e consulenti, ottimizzati per posizionare il tuo nome e facilitare prenotazioni o contatti diretti.",
                    link: "/siti-web-per-professionisti",
                    linkLabel: "Scopri il servizio",
                  },
                  {
                    title: "Siti per Negozi & Attività Locali",
                    description:
                      "Porta il cliente dalla ricerca online al tuo punto vendita: siti pronti per la Local SEO per negozi, artigiani, ristoranti e showroom del territorio padovano.",
                    link: "/siti-web-per-negozi",
                    linkLabel: "Scopri il servizio",
                  },
                  {
                    title: "Siti Aziendali & Lead Generation",
                    description:
                      "Trasforma i visitatori in contatti commerciali qualificati: piattaforme complete per PMI e aziende strutturate che vogliono una presenza online solida e performante.",
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
            <div className="max-w-5xl mx-auto mb-16">
              <AnimatedSection className="flex items-center gap-4 mb-6">
                <div className="icon-box w-13 h-13">
                  <Layers className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Piani e Costi per la Realizzazione di Siti Web a Padova</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-8" delay={0.1}>
                <p>
                  Confronto sintetico tra le tre tipologie di sito web più richieste a Padova e provincia, con target tipico, numero medio di pagine e range di prezzo una tantum.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <div className="overflow-x-auto rounded-2xl border border-border/60 bg-white shadow-sm">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-accent/8 text-foreground">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Caratteristica</th>
                        <th className="px-5 py-4 font-semibold">Sito per negozi</th>
                        <th className="px-5 py-4 font-semibold">Sito per professionisti</th>
                        <th className="px-5 py-4 font-semibold">Sito aziendale</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border/50">
                        <td className="px-5 py-4 font-medium text-foreground">Target tipico</td>
                        <td className="px-5 py-4">Attività commerciali di Padova</td>
                        <td className="px-5 py-4">Studi e liberi professionisti</td>
                        <td className="px-5 py-4">PMI della provincia di Padova</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="px-5 py-4 font-medium text-foreground">Pagine medie</td>
                        <td className="px-5 py-4">1–3</td>
                        <td className="px-5 py-4">3–6</td>
                        <td className="px-5 py-4">5–15</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="px-5 py-4 font-medium text-foreground">Obiettivo principale</td>
                        <td className="px-5 py-4">Visibilità locale e contatti</td>
                        <td className="px-5 py-4">Autorevolezza e prenotazioni</td>
                        <td className="px-5 py-4">Lead generation e brand</td>
                      </tr>
                      <tr className="border-t border-border/50">
                        <td className="px-5 py-4 font-medium text-foreground">Prezzo indicativo</td>
                        <td className="px-5 py-4">da 490€</td>
                        <td className="px-5 py-4">da 990€</td>
                        <td className="px-5 py-4">da 1890€</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </AnimatedSection>
            </div>
          </div>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-12">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Realizzazione Siti Web a Padova: il Nostro Metodo in 4 Step</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="body-base text-muted-foreground mb-10 max-w-3xl">
                  Sai sempre a che punto siamo, senza sorprese: dall'idea al lancio, in un processo trasparente pensato per portarti risultati reali.
                </p>
              </AnimatedSection>

              <StaggerContainer className="space-y-6" staggerDelay={0.12}>
                {[
                  {
                    step: "01",
                    title: "01. Analisi Strategica & Obiettivi",
                    description:
                      "Studiamo il tuo settore di riferimento a Padova, i tuoi competitor locali e i tuoi obiettivi di business per definire le fondamenta strategiche del progetto prima di scrivere una sola riga di codice.",
                  },
                  {
                    step: "02",
                    title: "02. Design Web & Esperienza Utente (UX)",
                    description:
                      "Progettiamo la struttura del sito e l'interfaccia grafica su misura. Ogni elemento visivo e testuale viene posizionato per guidare l'utente verso l'azione (contatto, chiamata o acquisto) in modo semplice e intuitivo.",
                  },
                  {
                    step: "03",
                    title: "03. Sviluppo Ottimizzato SEO & AI Ready",
                    description:
                      "Sviluppiamo il sito web utilizzando tecnologie moderne e pulite. Ci assicuriamo che le pagine siano ultra-veloci da caricare, perfettamente ottimizzate per i dispositivi mobile e strutturate per essere lette al meglio da Google e dagli assistenti AI.",
                  },
                  {
                    step: "04",
                    title: "04. Lancio, Monitoraggio & Supporto Continuo",
                    description:
                      "Mettiamo online il sito configurando gli strumenti di analisi (Google Search Console e Analytics). Dopo il lancio, non ti lasciamo solo: ti garantiamo supporto continuo, assistenza tecnica e manutenzione per mantenere il sito sempre aggiornato.",
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

        {/* Sezione 4 – Zone servite GEO */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="mb-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="icon-box w-13 h-13">
                    <Globe className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="heading-2">Sviluppo Siti Web a Padova e Provincia: la Tua Agenzia di Prossimità</h2>
                </div>
                <p className="body-large text-muted-foreground max-w-3xl">
                  Ovunque tu sia in provincia di Padova, hai lo stesso supporto diretto — anche di persona, se ti serve.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Padova", "Abano Terme", "Albignasego", "Selvazzano Dentro", "Vigonza",
                    "Cadoneghe", "Rubano", "Legnaro", "Este", "Monselice", "Cittadella",
                    "Piove di Sacco", "Vigodarzere", "Saonara",
                  ].map((comune) => (
                    <span
                      key={comune}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-sm text-foreground/80"
                    >
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {comune}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Con sede operativa a <Link to="/realizzazione-siti-web-legnaro" className="text-accent hover:underline font-medium">Legnaro (PD)</Link>, siamo il punto di riferimento concreto per le attività che cercano un servizio di <strong>sviluppo e creazione di siti internet a Padova</strong> e provincia, con un'attenzione particolare anche a <Link to="/realizzazione-siti-web-piove-di-sacco" className="text-accent hover:underline font-medium">Piove di Sacco</Link> e alla Saccisica. Lavoriamo fianco a fianco con{" "}
                  <Link to="/siti-web-per-professionisti" className="text-accent hover:underline font-medium">
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
                  del territorio, unendo la flessibilità e l'ascolto di uno studio locale alla solidità di strategie collaudate.
                </p>
                <p className="mb-6">
                  Che la tua attività si trovi nel centro storico di Padova o in uno dei comuni limitrofi, l'approccio non cambia: progettiamo soluzioni su misura capaci di convertire i visitatori in clienti.
                </p>
                <p>
                  Vuoi accelerare i risultati fin da subito? Oltre alla realizzazione del sito, pianifichiamo e gestiamo{" "}
                  <Link to="/pubblicita-google-ads" className="text-accent hover:underline font-medium">
                    <strong>campagne Google Ads</strong>
                  </Link>{" "}
                  per portare traffico qualificato sulle tue pagine fin dal primo giorno di pubblicazione.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione Realizzazioni teaser */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-3">
                <div className="icon-box w-13 h-13">
                  <ImageIcon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il Nostro Portfolio: Storie di Successo e Concept Innovativi</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <p className="text-muted-foreground mb-10 max-w-3xl">
                  Dai un'occhiata ad alcuni dei siti web che abbiamo realizzato per le attività del territorio padovano e ai nostri prototipi di design ad alta conversione.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
                {[
                  { img: rbSncEdilizia, title: "R.B. s.n.c. – Cittadella (PD)", desc: "Progetto web completo con ottimizzazione SEO e campagne Google Ads mirate per massimizzare le richieste di preventivo di un'azienda locale leader nella rimozione eternit.", to: "/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto", badge: null },
                  { img: dentalHero, title: "Studio dentistico – concept", desc: "Concept di sito web premium progettato per medici e studi dentistici. Un design pulito ed elegante studiato per trasmettere massima fiducia e facilitare la prenotazione delle visite.", to: "/realizzazioni/demo-studio-dentistico-premium", badge: null },
                  { img: elisaPiovanPt, title: "Elisa Piovan — Personal Trainer (Padova)", desc: "Restyling completo del sito professionale di Elisa Piovan: struttura, grafica e ottimizzazione SEO, AEO e GEO, con hosting gestito per garantire i migliori punteggi PageSpeed Insights.", to: null, badge: "In costruzione" },
                ].map((item, i) => {
                  const inner = (
                    <>
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <img src={item.img} alt={item.title} loading="lazy" width="640" height="400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        {item.badge && (
                          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 shadow-md">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-foreground animate-pulse" />
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </>
                  );
                  return (
                    <StaggerItem key={i}>
                      {item.to ? (
                        <Link to={item.to} className="block group card-elevated overflow-hidden p-0 h-full">{inner}</Link>
                      ) : (
                        <div className="block group card-elevated overflow-hidden p-0 h-full cursor-default">{inner}</div>
                      )}
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
              <div className="text-center mt-10">
                <Link to="/realizzazioni" className="inline-flex items-center gap-2 text-accent font-semibold link-underline">
                  Esplora tutti i nostri progetti →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione Interlinking discorsivo */}
        <section className="section-padding" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-6">
                <div className="icon-box w-13 h-13">
                  <Link2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="heading-2">Approfondisci il servizio adatto alla tua attività</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Se hai un'attività commerciale a Padova puoi partire dalla pagina dedicata ai <Link to="/siti-web-per-negozi" className="text-accent hover:underline font-medium">siti web per negozi</Link>, mentre per studi e liberi professionisti abbiamo una sezione specifica sulla <Link to="/siti-web-per-professionisti" className="text-accent hover:underline font-medium">realizzazione di siti web per professionisti</Link>. Le PMI strutturate trovano un percorso dedicato nella pagina <Link to="/siti-web-aziendali" className="text-accent hover:underline font-medium">siti web aziendali</Link>, con architetture multipagina e lead generation.
                  </p>
                  <p>
                    Per capire meglio costi, tempistiche e tecnologie ti consigliamo la guida <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className="text-accent hover:underline font-medium">quanto costa un sito web nel 2026</Link>, l'approfondimento su <Link to="/blog/siti-web-creati-con-intelligenza-artificiale" className="text-accent hover:underline font-medium">siti creati con intelligenza artificiale</Link> e l'analisi su <Link to="/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere" className="text-accent hover:underline font-medium">Aruba SuperSite</Link> per chi sta valutando soluzioni fai-da-te. Se invece ti interessa la visibilità organica oltre Padova, dai un'occhiata alla pagina <Link to="/posizionamento-google-e-ai" className="text-accent hover:underline font-medium">posizionamento Google e AI</Link>.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione FAQ – AEO answer-first */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-6">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti sui siti web a Padova</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.05}>
                <p className="text-muted-foreground mb-8">
                  Risposte rapide alle domande più comuni di chi cerca un'agenzia web a Padova.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    {
                      question: "Quanto costa realizzare un sito web a Padova?",
                      answer:
                        "Un sito web a Padova costa da 490€ una tantum per un sito vetrina per negozi, da 990€ per i professionisti e da 1890€ per le aziende. Tutti i prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base.",
                    },
                    {
                      question: "In quanto tempo viene realizzato un sito a Padova?",
                      answer:
                        "4 Web Lab realizza e pubblica un sito web a Padova in 2-4 settimane. I siti monopagina o per negozi sono pronti in circa 14 giorni, mentre i progetti aziendali articolati richiedono 3-4 settimane.",
                    },
                    {
                      question: "Lavorate solo a Padova città o anche in provincia?",
                      answer:
                        "Operiamo in tutta la provincia di Padova: Padova città, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Legnaro, Este, Monselice, Cittadella e Piove di Sacco. La nostra sede operativa è a Legnaro (PD).",
                    },
                    {
                      question: "È possibile incontrarvi di persona a Padova?",
                      answer:
                        "Sì: per i progetti che lo richiedono organizziamo incontri di persona a Padova e provincia, su appuntamento. Per la maggior parte delle collaborazioni preferiamo confronti rapidi da remoto o telefonici, per ottimizzare i tempi del progetto.",
                    },
                    {
                      question: "Offrite SEO locale per posizionarsi su Padova?",
                      answer:
                        "Sì: ogni sito realizzato a Padova viene ottimizzato per la SEO locale con title, meta description, contenuti e dati strutturati pensati per la ricerca geolocalizzata (es. \"parrucchiere Padova\", \"commercialista Padova\"). Su richiesta gestiamo anche la scheda Google Business Profile.",
                    },
                    {
                      question: "Realizzate siti anche per clienti fuori Padova?",
                      answer:
                        <>
                          Sì: lavoriamo con clienti in tutto il Veneto e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto. Trovi altre risposte nella nostra{" "}
                          <Link to="/faq-realizzazione-siti-web" className="text-accent hover:underline font-medium">
                            FAQ completa sulla realizzazione siti web
                          </Link>
                          .
                        </>,
                    },
                    {
                      question: "Cosa fa un web studio a Padova?",
                      answer:
                        "Un web studio a Padova si occupa di progettazione, sviluppo, pubblicazione e manutenzione di siti web per attività locali. 4 Web Lab segue l'intero ciclo: analisi, design, sviluppo SEO-friendly, hosting, ottimizzazione locale per Padova e supporto continuativo.",
                    },
                    {
                      question: "Qual è la differenza tra realizzazione, creazione e sviluppo di un sito web?",
                      answer:
                        "Sono termini usati come sinonimi: realizzazione, creazione e sviluppo di un sito web indicano lo stesso processo, ovvero la progettazione e costruzione di un sito internet professionale. La differenza è puramente terminologica; il risultato è un sito online, ottimizzato per Google e pronto a generare contatti.",
                    },
                    {
                      question: "Come scegliere un'agenzia per la creazione di siti internet a Padova?",
                      answer:
                        "Per scegliere un'agenzia di creazione siti internet a Padova valuta: portfolio di lavori realizzati, trasparenza dei prezzi, competenze SEO locali, recensioni Google, tempi di risposta e disponibilità di un referente diretto. 4 Web Lab ha sede a Legnaro (PD), prezzi pubblici da 490€ e risposte entro 24h.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-padova-${index}`}
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
                <p className="heading-2 text-primary-foreground mb-6">
                  Il tuo prossimo cliente a Padova ti sta già cercando
                </p>
                <p className="body-large text-primary-foreground/70 mb-8">Raccontaci la tua attività: preventivo personalizzato in 24 ore, senza impegno.</p>
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
                <p className="text-xs text-primary-foreground/60 mt-4 text-center">
                  Sede operativa a Legnaro (PD) – serviamo Padova città e tutta la provincia.
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

export default SitiWebPadova;
