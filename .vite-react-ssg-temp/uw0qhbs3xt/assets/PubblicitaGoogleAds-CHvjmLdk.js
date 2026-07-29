import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, C as ContactFormWeb3Forms, F as Footer, b as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Megaphone, Target, Zap, BarChart3, Sliders, TrendingUp, MapPin, Sparkles, Store, UserCheck, Building2, Layers, Search, ShoppingBag, Youtube, Repeat, CheckCircle2, HelpCircle } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-D6pJqF3I.js";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "@radix-ui/react-accordion";
import "clsx";
import "tailwind-merge";
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
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita per la tua strategia pubblicitaria."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 114,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Pubblicità Google ADS | Gestione Campagne | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Gestione completa campagne Google ADS per negozi, professionisti e aziende in Veneto e in tutta Italia. Consulenza gratuita."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 124,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(
            PageBreadcrumb,
            {
              items: [{ label: "Home", to: "/" }, { label: "Pubblicità Google ADS" }]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 243,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mb-6 font-extrabold tracking-tight text-primary-foreground", children: "Pubblicità su Google ADS: porta la tua attività davanti a chi sta già cercando" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/80 mb-8 text-balance", children: "Gestione completa delle campagne Google ADS per negozi, professionisti e aziende. Strategia, setup, ottimizzazione continua e report mensili chiari, per trasformare il budget pubblicitario in contatti e clienti reali." }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 249,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxDEV(
              "button",
              {
                onClick: handleContactClick,
                className: "btn-primary inline-flex items-center justify-center gap-2 px-8 py-4",
                children: [
                  "Richiedi una consulenza gratuita",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                    lineNumber: 260,
                    columnNumber: 21
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 255,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "https://wa.me/393514656042",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold shadow-lg hover:shadow-xl transition-all",
                children: "Scrivici su WhatsApp"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 262,
                columnNumber: 19
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 254,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/60 mt-3", children: [
            "Nessun impegno · Risposta entro 24h · ",
            /* @__PURE__ */ jsxDEV("strong", { children: "WhatsApp richiede WhatsApp Web su PC" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 272,
              columnNumber: 57
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 271,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroImg,
            alt: "Pubblicità Google ADS: annunci sponsorizzati in cima ai risultati di ricerca",
            width: 1536,
            height: 1024,
            fetchPriority: "high",
            decoding: "async",
            className: "rounded-2xl shadow-2xl w-full h-auto"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 276,
            columnNumber: 17
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 240,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground text-xl mb-3", children: "Cos'è Google ADS e come funziona" }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 295,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "aeo-definition text-muted-foreground leading-relaxed", children: "Google ADS (ex Google AdWords) è la piattaforma pubblicitaria di Google che permette a qualsiasi attività di mostrare annunci in cima ai risultati di ricerca, su YouTube, Gmail e su milioni di siti partner. Si paga solo quando un utente interagisce con l'annuncio (pay-per-click) e si possono controllare budget, area geografica e pubblico di destinazione in tempo reale." }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 296,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 294,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 293,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Megaphone, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 313,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 312,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Perché fare pubblicità su Google" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 315,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 311,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { children: [
          'La domanda non è più "come pubblicizzare la propria attività", ma ',
          /* @__PURE__ */ jsxDEV("strong", { children: "dove" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 319,
            columnNumber: 85
          }, void 0),
          " farlo per intercettare clienti pronti ad acquistare. Google ADS ti mette davanti a chi sta cercando attivamente ciò che offri, esattamente nel momento decisionale."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 318,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 317,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", staggerDelay: 0.08, children: [
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
        ].map((b, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 mb-4", children: /* @__PURE__ */ jsxDEV(b.icon, { className: "w-5 h-5 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 360,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 359,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: b.title }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 362,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: b.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 363,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 358,
          columnNumber: 21
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 357,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 324,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 310,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 309,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 308,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 378,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 377,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Per chi è il servizio Google ADS" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 380,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 376,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", direction: "left", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "mb-6", children: [
              "Gestiamo campagne Google ADS per qualsiasi tipo di attività che voglia farsi trovare online e generare contatti qualificati: ",
              /* @__PURE__ */ jsxDEV("strong", { children: "negozi e locali fisici" }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 386,
                columnNumber: 52
              }, void 0),
              ",",
              " ",
              /* @__PURE__ */ jsxDEV("strong", { children: "professionisti" }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 387,
                columnNumber: 21
              }, void 0),
              ", ",
              /* @__PURE__ */ jsxDEV("strong", { children: "aziende e PMI" }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 387,
                columnNumber: 54
              }, void 0),
              ". Cambia la strategia, non l'efficacia del canale."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 384,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Le campagne sono cucite addosso al settore e agli obiettivi: prenotazioni per uno studio, chiamate per un negozio di quartiere, richieste preventivo per un'azienda B2B, vendite per un e-commerce." }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 390,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 383,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: targetingImg,
              alt: "Dashboard analytics campagne Google ADS con grafico di crescita lead",
              width: 1536,
              height: 1024,
              loading: "lazy",
              decoding: "async",
              className: "rounded-2xl shadow-lg w-full h-auto"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 397,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 396,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 382,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-3 gap-6 mt-10", staggerDelay: 0.1, children: [
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
        ].map((c, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-14 h-14 mx-auto mb-4", children: /* @__PURE__ */ jsxDEV(c.icon, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 429,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 428,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2", children: c.title }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 431,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: c.desc }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 432,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 427,
          columnNumber: 21
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 426,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 408,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 375,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 374,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 373,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Layers, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 447,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 446,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Tipi di campagne Google ADS che gestiamo" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 449,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 445,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", staggerDelay: 0.06, children: [
          { icon: Search, name: "Search", desc: "Annunci testuali sui risultati di ricerca Google" },
          { icon: Sparkles, name: "Performance Max", desc: "Campagne automatiche multi-canale ad alta resa" },
          { icon: ShoppingBag, name: "Shopping", desc: "Schede prodotto con immagine e prezzo per e-commerce" },
          { icon: Layers, name: "Display", desc: "Banner visivi sui siti partner del network Google" },
          { icon: Youtube, name: "YouTube ADS", desc: "Video pubblicitari prima e durante i contenuti YouTube" },
          { icon: Repeat, name: "Remarketing", desc: "Annunci a chi ha già visitato il tuo sito web" },
          { icon: MapPin, name: "Local", desc: "Annunci geolocalizzati per portare clienti in negozio" }
        ].map((t, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 p-4 rounded-2xl bg-white border border-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-10 h-10 flex-shrink-0", children: /* @__PURE__ */ jsxDEV(t.icon, { className: "w-5 h-5 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 464,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 463,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground text-sm mb-0.5", children: t.name }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 467,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground", children: t.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 468,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 466,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 462,
          columnNumber: 21
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 461,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 451,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 444,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 443,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 442,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(BarChart3, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 484,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 483,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Il nostro metodo in 5 step" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 486,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 482,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-[1fr_1.2fr] gap-12 items-start", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: methodImg,
              alt: "Workflow gestione campagne Google ADS in 5 step",
              width: 1024,
              height: 1024,
              loading: "lazy",
              decoding: "async",
              className: "rounded-2xl shadow-lg w-full h-auto"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 490,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 489,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-4", staggerDelay: 0.08, children: howToSteps.map((s) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-5 items-start p-5 rounded-2xl bg-accent/3 border border-accent/8 hover:bg-accent/6 hover:border-accent/15 transition-all duration-400", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: s.n }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 505,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-1.5", children: s.title }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 509,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: s.desc }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 510,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 508,
              columnNumber: 27
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 504,
            columnNumber: 25
          }, void 0) }, s.n, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 503,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 501,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 500,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 488,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 481,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 480,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 479,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-14 h-14 mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 528,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 527,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 mb-6", children: "Quanto costa la pubblicità su Google?" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 530,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-6", children: "Non esiste un listino fisso per tipologia di cliente, e diffidate di chi ne propone uno. Il costo della pubblicità su Google ADS dipende da variabili reali: obiettivi che vuoi raggiungere, settore di attività, livello di concorrenza, area geografica e budget media che intendi investire." }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 531,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-8", children: [
            "Per questo il primo passo migliore è una ",
            /* @__PURE__ */ jsxDEV("strong", { children: "consulenza completamente gratuita" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 537,
              columnNumber: 60
            }, void 0),
            ": analizziamo insieme la tua attività, valutiamo il potenziale e ti proponiamo una strategia trasparente con stima del budget media e del compenso di gestione."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 536,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 526,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.15, children: [
          /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid sm:grid-cols-2 gap-4 text-left mb-10", staggerDelay: 0.08, children: [
            "Analisi attività e competitor",
            "Stima budget consigliato",
            "Strategia su misura",
            "Nessun impegno"
          ].map((item, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 p-4 rounded-2xl bg-white border border-accent/10", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 552,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-foreground font-medium", children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 553,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 551,
            columnNumber: 23
          }, void 0) }, i, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 550,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 543,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base",
              children: [
                "Richiedi la consulenza gratuita",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                  lineNumber: 563,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 558,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 542,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 525,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 524,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 523,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 576,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Google ADS in Veneto e in tutta Italia" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 578,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 574,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-4", children: [
            "La nostra sede operativa è a ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Legnaro (PD)" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 582,
              columnNumber: 48
            }, void 0),
            ", nel cuore del Veneto. Gestiamo campagne Google ADS per attività in tutta la regione — Padova, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Este, Monselice, Cittadella, Piove di Sacco, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno — e in ",
            /* @__PURE__ */ jsxDEV("strong", { children: "qualsiasi altra regione d'Italia" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 585,
              columnNumber: 51
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 581,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "Lavoriamo al 100% da remoto con un metodo collaudato di confronti via call, email e WhatsApp: ricevi lo stesso livello di servizio ovunque tu sia. Se la tua attività è anche a Padova, vedi la nostra pagina dedicata alla",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent hover:underline font-medium", children: "realizzazione siti web a Padova" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 591,
              columnNumber: 19
            }, void 0),
            " ",
            "e al",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "posizionamento su Google e AI" }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 595,
              columnNumber: 19
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 587,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 580,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 573,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 572,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 571,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(HelpCircle, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 611,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 610,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Domande frequenti su Google ADS" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 613,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 609,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mb-8", children: "Risposte dirette alle domande più comuni sulla pubblicità su Google." }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 616,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 615,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqs.map((faq, i) => /* @__PURE__ */ jsxDEV(
          AccordionItem,
          {
            value: `faq-${i}`,
            className: "rounded-2xl border border-border bg-white px-6 transition-all duration-300 hover:border-accent/15",
            children: [
              /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground text-base pr-4", children: faq.q }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 629,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 628,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(AccordionContent, { className: "aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5", children: faq.a }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 631,
                columnNumber: 23
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 623,
            columnNumber: 21
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 621,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 620,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.15, className: "mt-8 text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: [
          "Hai altre domande?",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/faq-realizzazione-siti-web", className: "text-accent hover:underline font-medium", children: "Vedi la FAQ generale" }, void 0, false, {
            fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
            lineNumber: 641,
            columnNumber: 19
          }, void 0),
          " ",
          "oppure scrivici."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 639,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 638,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 608,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 607,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
        lineNumber: 606,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "contatti-google-ads",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 657,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi la tua consulenza Google ADS gratuita" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                  lineNumber: 664,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Raccontaci la tua attività e i tuoi obiettivi: ti proponiamo una strategia trasparente con stima del budget e dei risultati attesi. Senza impegno, ovunque ti trovi in Italia." }, void 0, false, {
                  fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                  lineNumber: 667,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxDEV(
                    "a",
                    {
                      href: "https://wa.me/393514656042",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
                      children: "Scrivici su WhatsApp"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                      lineNumber: 672,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-2 text-center", children: /* @__PURE__ */ jsxDEV("strong", { children: "Richiede WhatsApp Web su PC" }, void 0, false, {
                    fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                    lineNumber: 681,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                    lineNumber: 680,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                  lineNumber: 671,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 663,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 686,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
                lineNumber: 685,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 662,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
              lineNumber: 661,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
          lineNumber: 652,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
      lineNumber: 693,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/PubblicitaGoogleAds.tsx",
    lineNumber: 102,
    columnNumber: 5
  }, void 0);
};
export {
  PubblicitaGoogleAds as default
};
