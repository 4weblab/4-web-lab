import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, C as ContactFormWeb3Forms, F as Footer } from "../main.mjs";
import { ArrowRight, Megaphone, Target, Zap, BarChart3, Sliders, TrendingUp, MapPin, Sparkles, Store, UserCheck, Building2, Layers, Search, ShoppingBag, Youtube, Repeat, CheckCircle2, HelpCircle } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import "vite-react-ssg";
import "react";
import "@tanstack/react-query";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "next-themes";
import "sonner";
import "motion-dom";
import "motion-utils";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "@radix-ui/react-accordion";
const heroImg = "/assets/google-ads-hero-Bbn56VMI.webp";
const targetingImg = "/assets/google-ads-targeting-oY9KauLb.webp";
const methodImg = "/assets/google-ads-method-CE9iS6Cp.webp";
const PAGE_URL = "https://4weblab.it/pubblicita-google-ads";
const faqs = [
  {
    q: "Quanto costa fare pubblicità su Google?",
    a: "Il costo della pubblicità su Google ADS è composto da due voci: il budget media speso direttamente su Google (gestito dal cliente) e il compenso per la gestione professionale delle campagne. Non esiste un listino fisso perché il budget ideale dipende da settore, obiettivi, concorrenza e area geografica: per questo offriamo una consulenza iniziale gratuita per definire la strategia più sostenibile."
  },
  {
    q: "In quanto tempo si vedono i risultati con Google ADS?",
    a: "Con Google ADS i primi click e contatti arrivano nelle prime 24–72 ore dalla pubblicazione delle campagne. I risultati ottimali si raggiungono in genere dopo 4–8 settimane di ottimizzazione continua, quando l'algoritmo ha raccolto dati sufficienti per migliorare progressivamente costi e conversioni."
  },
  {
    q: "Qual è il budget minimo consigliato per Google ADS?",
    a: "Non esiste un budget minimo imposto da Google, ma per ottenere dati significativi e risultati misurabili consigliamo di partire da un investimento mensile coerente con il proprio mercato di riferimento. In consulenza gratuita analizziamo concorrenza e parole chiave e ti proponiamo una soglia realistica per il tuo settore."
  },
  {
    q: "Google ADS funziona per piccole attività locali?",
    a: "Sì: Google ADS è particolarmente efficace per attività locali (negozi, professionisti, studi) perché permette di intercettare solo chi cerca un prodotto o servizio in una specifica area geografica, anche a livello di quartiere o raggio in km. Il targeting geografico riduce gli sprechi e massimizza le richieste qualificate."
  },
  {
    q: "Qual è la differenza tra Google ADS e SEO?",
    a: "Google ADS porta visibilità immediata a pagamento: gli annunci compaiono in cima ai risultati di ricerca fin dal primo giorno e si paga per click. La SEO è il posizionamento organico nel medio-lungo periodo, gratuito ma più lento. I due canali sono complementari e funzionano al meglio se usati insieme."
  },
  {
    q: "Gestite campagne Google ADS anche fuori dal Veneto?",
    a: "Sì: gestiamo campagne Google ADS per clienti in tutta Italia. La nostra sede operativa è a Legnaro (PD), ma lavoriamo al 100% da remoto con confronti regolari via call, email e WhatsApp, garantendo lo stesso livello di servizio ovunque si trovi l'attività."
  },
  {
    q: "Cosa include la consulenza gratuita iniziale?",
    a: "La consulenza gratuita include analisi della tua attività e dei competitor, individuazione delle parole chiave principali, stima del budget consigliato e proposta di strategia con tipologie di campagne più adatte ai tuoi obiettivi. Nessun impegno: al termine ricevi un quadro chiaro per decidere se procedere."
  }
];
const howToSteps = [
  {
    n: "01",
    title: "Analisi & obiettivi",
    desc: "Studiamo attività, mercato, concorrenza e definiamo insieme gli obiettivi misurabili (chiamate, richieste preventivo, vendite, prenotazioni)."
  },
  {
    n: "02",
    title: "Strategia & keyword",
    desc: "Selezioniamo le parole chiave a più alto intento di acquisto, scegliamo le tipologie di campagna e impostiamo budget e targeting geografico."
  },
  {
    n: "03",
    title: "Setup campagne",
    desc: "Configuriamo account Google ADS, conversioni tracciate, annunci, estensioni e landing page coerenti per massimizzare il tasso di conversione."
  },
  {
    n: "04",
    title: "Ottimizzazione continua",
    desc: "Monitoriamo quotidianamente costi, conversioni e qualità del traffico, escludiamo keyword inefficaci e miglioriamo offerte e creatività."
  },
  {
    n: "05",
    title: "Report mensile",
    desc: "Ricevi un report chiaro con risultati, costo per contatto, ROI stimato e prossimi passi strategici. Sempre comprensibile, senza tecnicismi inutili."
  }
];
const PubblicitaGoogleAds = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti-google-ads");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita per la tua strategia pubblicitaria."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: PAGE_URL }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: PAGE_URL }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: PAGE_URL }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}#breadcrumb`,
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Pubblicità Google ADS", item: PAGE_URL }
            ]
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
              cssSelector: [".aeo-definition", ".aeo-faq-answer"]
            }
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
              addressCountry: "IT"
            },
            geo: { "@type": "GeoCoordinates", latitude: 45.3447, longitude: 11.9606 },
            parentOrganization: { "@id": "https://4weblab.it/#business" },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" }
            ]
          },
          {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            name: "Gestione Campagne Google ADS",
            serviceType: "Google Ads Management",
            category: "Digital Advertising",
            description: "Gestione completa di campagne Google ADS (Search, Performance Max, Shopping, Display, YouTube, Remarketing, Local) per negozi, professionisti e aziende in Veneto e in tutta Italia. Setup, ottimizzazione continua e report mensile.",
            url: PAGE_URL,
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            provider: { "@id": "https://4weblab.it/#business" },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" }
            ],
            offers: {
              "@type": "Offer",
              url: PAGE_URL,
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "EUR",
                description: "Preventivo personalizzato in base a obiettivi, settore e area geografica. Consulenza strategica iniziale gratuita."
              }
            }
          },
          {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a }
            }))
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
              text: s.desc
            }))
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              items: [{ label: "Home", to: "/" }, { label: "Pubblicità Google ADS" }]
            }
          ),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mb-6 font-extrabold tracking-tight text-primary-foreground", children: "Pubblicità su Google ADS: porta la tua attività davanti a chi sta già cercando" }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/80 mb-8 text-balance", children: "Gestione completa delle campagne Google ADS per negozi, professionisti e aziende. Strategia, setup, ottimizzazione continua e report mensili chiari, per trasformare il budget pubblicitario in contatti e clienti reali." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleContactClick,
                className: "btn-primary inline-flex items-center justify-center gap-2 px-8 py-4",
                children: [
                  "Richiedi una consulenza gratuita",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/393514656042",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-xl transition-all",
                children: "Scrivici su WhatsApp"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-primary-foreground/60 mt-3", children: [
            "Nessun impegno · Risposta entro 24h · ",
            /* @__PURE__ */ jsx("strong", { children: "WhatsApp richiede WhatsApp Web su PC" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: heroImg,
            alt: "Pubblicità Google ADS: annunci sponsorizzati in cima ai risultati di ricerca",
            width: 1536,
            height: 1024,
            fetchPriority: "high",
            decoding: "async",
            className: "rounded-2xl shadow-2xl w-full h-auto"
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-foreground text-xl mb-3", children: "Cos'è Google ADS e come funziona" }),
        /* @__PURE__ */ jsx("p", { className: "aeo-definition text-muted-foreground leading-relaxed", children: "Google ADS (ex Google AdWords) è la piattaforma pubblicitaria di Google che permette a qualsiasi attività di mostrare annunci in cima ai risultati di ricerca, su YouTube, Gmail e su milioni di siti partner. Si paga solo quando un utente interagisce con l'annuncio (pay-per-click) e si possono controllare budget, area geografica e pubblico di destinazione in tempo reale." })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Megaphone, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Perché fare pubblicità su Google" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsxs("p", { children: [
          'La domanda non è più "come pubblicizzare la propria attività", ma ',
          /* @__PURE__ */ jsx("strong", { children: "dove" }),
          " farlo per intercettare clienti pronti ad acquistare. Google ADS ti mette davanti a chi sta cercando attivamente ciò che offri, esattamente nel momento decisionale."
        ] }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", staggerDelay: 0.08, children: [
          {
            icon: Target,
            title: "Intento di acquisto alto",
            desc: "Intercetti utenti che stanno già cercando il tuo prodotto o servizio: il pubblico più caldo possibile."
          },
          {
            icon: Zap,
            title: "Risultati immediati",
            desc: "Le campagne portano traffico qualificato dal primo giorno, senza attendere i tempi della SEO organica."
          },
          {
            icon: BarChart3,
            title: "Tutto misurabile",
            desc: "Sai esattamente quanto spendi, quanti contatti ricevi e qual è il costo per cliente acquisito."
          },
          {
            icon: Sliders,
            title: "Budget sotto controllo",
            desc: "Stabilisci tu il budget giornaliero o mensile. Puoi aumentarlo, ridurlo o metterlo in pausa in ogni momento."
          },
          {
            icon: TrendingUp,
            title: "Scalabile",
            desc: "Una volta trovata la formula che funziona, puoi aumentare l'investimento e moltiplicare i risultati."
          },
          {
            icon: MapPin,
            title: "Targeting locale preciso",
            desc: "Mostri gli annunci solo nella tua area di interesse: città, provincia, quartiere o raggio in km."
          }
        ].map((b, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-12 h-12 mb-4", children: /* @__PURE__ */ jsx(b.icon, { className: "w-5 h-5 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-2", children: b.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: b.desc })
        ] }) }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Per chi è il servizio Google ADS" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", direction: "left", children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
              "Gestiamo campagne Google ADS per qualsiasi tipo di attività che voglia farsi trovare online e generare contatti qualificati: ",
              /* @__PURE__ */ jsx("strong", { children: "negozi e locali fisici" }),
              ",",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "professionisti" }),
              ", ",
              /* @__PURE__ */ jsx("strong", { children: "aziende e PMI" }),
              ". Cambia la strategia, non l'efficacia del canale."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Le campagne sono cucite addosso al settore e agli obiettivi: prenotazioni per uno studio, chiamate per un negozio di quartiere, richieste preventivo per un'azienda B2B, vendite per un e-commerce." })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: targetingImg,
              alt: "Dashboard analytics campagne Google ADS con grafico di crescita lead",
              width: 1536,
              height: 1024,
              loading: "lazy",
              decoding: "async",
              className: "rounded-2xl shadow-lg w-full h-auto"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6 mt-10", staggerDelay: 0.1, children: [
          {
            icon: Store,
            title: "Negozi e locali fisici",
            desc: "Più clienti in negozio, prenotazioni tavoli, indicazioni stradali e telefonate dirette grazie alle campagne Search e Local."
          },
          {
            icon: UserCheck,
            title: "Professionisti",
            desc: "Studi medici, legali, consulenti, personal trainer: campagne per generare appuntamenti e richieste di preventivo qualificate."
          },
          {
            icon: Building2,
            title: "Aziende e PMI",
            desc: "Lead generation B2B, lancio prodotti, presenza nei mercati di interesse e vendite e-commerce con Performance Max e Shopping."
          }
        ].map((c, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-14 h-14 mx-auto mb-4", children: /* @__PURE__ */ jsx(c.icon, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-2", children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: c.desc })
        ] }) }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Tipi di campagne Google ADS che gestiamo" })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", staggerDelay: 0.06, children: [
          { icon: Search, name: "Search", desc: "Annunci testuali sui risultati di ricerca Google" },
          { icon: Sparkles, name: "Performance Max", desc: "Campagne automatiche multi-canale ad alta resa" },
          { icon: ShoppingBag, name: "Shopping", desc: "Schede prodotto con immagine e prezzo per e-commerce" },
          { icon: Layers, name: "Display", desc: "Banner visivi sui siti partner del network Google" },
          { icon: Youtube, name: "YouTube ADS", desc: "Video pubblicitari prima e durante i contenuti YouTube" },
          { icon: Repeat, name: "Remarketing", desc: "Annunci a chi ha già visitato il tuo sito web" },
          { icon: MapPin, name: "Local", desc: "Annunci geolocalizzati per portare clienti in negozio" }
        ].map((t, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 rounded-2xl bg-white border border-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-10 h-10 flex-shrink-0", children: /* @__PURE__ */ jsx(t.icon, { className: "w-5 h-5 text-accent-foreground" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-sm mb-0.5", children: t.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: t.desc })
          ] })
        ] }) }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(BarChart3, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Il nostro metodo in 5 step" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_1.2fr] gap-12 items-start", children: [
          /* @__PURE__ */ jsx(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: methodImg,
              alt: "Workflow gestione campagne Google ADS in 5 step",
              width: 1024,
              height: 1024,
              loading: "lazy",
              decoding: "async",
              className: "rounded-2xl shadow-lg w-full h-auto"
            }
          ) }),
          /* @__PURE__ */ jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-4", staggerDelay: 0.08, children: howToSteps.map((s) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-start p-5 rounded-2xl bg-accent/3 border border-accent/8 hover:bg-accent/6 hover:border-accent/15 transition-all duration-400", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: s.n }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-1.5", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: s.desc })
            ] })
          ] }) }, s.n)) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-14 h-14 mx-auto mb-6", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-6", children: "Quanto costa la pubblicità su Google?" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Non esiste un listino fisso per tipologia di cliente, e diffidate di chi ne propone uno. Il costo della pubblicità su Google ADS dipende da variabili reali: obiettivi che vuoi raggiungere, settore di attività, livello di concorrenza, area geografica e budget media che intendi investire." }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mb-8", children: [
            "Per questo il primo passo migliore è una ",
            /* @__PURE__ */ jsx("strong", { children: "consulenza completamente gratuita" }),
            ": analizziamo insieme la tua attività, valutiamo il potenziale e ti proponiamo una strategia trasparente con stima del budget media e del compenso di gestione."
          ] })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { delay: 0.15, children: [
          /* @__PURE__ */ jsx(StaggerContainer, { className: "grid sm:grid-cols-2 gap-4 text-left mb-10", staggerDelay: 0.08, children: [
            "Analisi attività e competitor",
            "Stima budget consigliato",
            "Strategia su misura",
            "Nessun impegno"
          ].map((item, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 rounded-2xl bg-white border border-accent/10", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground font-medium", children: item })
          ] }) }, i)) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base",
              children: [
                "Richiedi la consulenza gratuita",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Google ADS in Veneto e in tutta Italia" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
            "La nostra sede operativa è a ",
            /* @__PURE__ */ jsx("strong", { children: "Legnaro (PD)" }),
            ", nel cuore del Veneto. Gestiamo campagne Google ADS per attività in tutta la regione — Padova, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Este, Monselice, Cittadella, Piove di Sacco, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno — e in ",
            /* @__PURE__ */ jsx("strong", { children: "qualsiasi altra regione d'Italia" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Lavoriamo al 100% da remoto con un metodo collaudato di confronti via call, email e WhatsApp: ricevi lo stesso livello di servizio ovunque tu sia. Se la tua attività è anche a Padova, vedi la nostra pagina dedicata alla",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent hover:underline font-medium", children: "realizzazione siti web a Padova" }),
            " ",
            "e al",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "posizionamento su Google e AI" }),
            "."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Domande frequenti su Google ADS" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Risposte dirette alle domande più comuni sulla pubblicità su Google." }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `faq-${i}`,
            className: "rounded-2xl border border-border bg-white px-6 transition-all duration-300 hover:border-accent/15",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-base pr-4", children: faq.q }) }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5", children: faq.a })
            ]
          },
          i
        )) }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, className: "mt-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Hai altre domande?",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/faq-realizzazione-siti-web", className: "text-accent hover:underline font-medium", children: "Vedi la FAQ generale" }),
          " ",
          "oppure scrivici."
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "contatti-google-ads",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi la tua consulenza Google ADS gratuita" }),
                /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Raccontaci la tua attività e i tuoi obiettivi: ti proponiamo una strategia trasparente con stima del budget e dei risultati attesi. Senza impegno, ovunque ti trovi in Italia." }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "https://wa.me/393514656042",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
                      children: "Scrivici su WhatsApp"
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/50 mt-2 text-center", children: /* @__PURE__ */ jsx("strong", { children: "Richiede WhatsApp Web su PC" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsx(ContactFormWeb3Forms, {}) })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PubblicitaGoogleAds as default
};
