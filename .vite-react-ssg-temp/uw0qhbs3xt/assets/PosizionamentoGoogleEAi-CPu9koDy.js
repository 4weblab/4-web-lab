import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, C as ContactFormWeb3Forms, F as Footer, b as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-D6pJqF3I.js";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { ArrowRight, Lightbulb, Search, CheckCircle2, Sparkles, Bot, Compass, Wrench, Target, FileText, LineChart, HelpCircle } from "lucide-react";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "@radix-ui/react-accordion";
import "clsx";
import "tailwind-merge";
const PAGE_URL = "https://4weblab.it/posizionamento-google-e-ai";
const PAGE_TITLE = "SEO, AEO e GEO: posizionamento Google e AI | 4 Web Lab";
const PAGE_DESCRIPTION = "Servizio SEO, AEO e GEO a Padova: ottimizziamo il tuo sito per Google e per gli assistenti AI come ChatGPT, Perplexity e Gemini. Preventivo gratuito.";
const faqItems = [
  {
    question: "Qual è la differenza tra SEO, AEO e GEO?",
    answerText: "La SEO ottimizza un sito per i risultati classici di Google. L'AEO (Answer Engine Optimization) struttura i contenuti per essere scelti come risposta diretta da motori di risposta come Google AI Overviews e assistenti vocali. La GEO (Generative Engine Optimization) rende il brand citabile dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot.",
    answerNode: "La SEO ottimizza un sito per i risultati classici di Google. L'AEO (Answer Engine Optimization) struttura i contenuti per essere scelti come risposta diretta da motori di risposta come Google AI Overviews e assistenti vocali. La GEO (Generative Engine Optimization) rende il brand citabile dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot."
  },
  {
    question: "Quanto tempo serve per vedere risultati SEO?",
    answerText: "I primi miglioramenti tecnici sono visibili in poche settimane. Per posizionamenti stabili su parole chiave competitive servono in genere dai 3 ai 6 mesi, mentre per AEO e GEO i risultati possono arrivare più rapidamente, perché dipendono dalla qualità e struttura dei contenuti più che dall'anzianità del dominio.",
    answerNode: "I primi miglioramenti tecnici sono visibili in poche settimane. Per posizionamenti stabili su parole chiave competitive servono in genere dai 3 ai 6 mesi, mentre per AEO e GEO i risultati possono arrivare più rapidamente, perché dipendono dalla qualità e struttura dei contenuti più che dall'anzianità del dominio."
  },
  {
    question: "Lavorate solo a Padova o anche fuori provincia?",
    answerText: "Siamo basati a Legnaro (Padova) ma seguiamo clienti in tutta Italia da remoto. La nostra esperienza SEO locale a Padova è un valore aggiunto per le attività del territorio, ma il metodo funziona ovunque.",
    answerNode: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      "Siamo basati a Legnaro (Padova) ma seguiamo clienti in tutta Italia da remoto. Per le attività del territorio abbiamo una landing dedicata su",
      " ",
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/realizzazione-siti-web-padova",
          className: "text-accent hover:underline font-medium",
          children: "realizzazione siti web a Padova"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        void 0
      ),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, void 0)
  },
  {
    question: "Includete la scrittura dei contenuti?",
    answerText: "Sì. La produzione di contenuti AEO-friendly (risposte concise, definizioni, FAQ strutturate, dati e citazioni) è parte centrale del servizio, perché è ciò che permette al sito di essere scelto come fonte dalle AI.",
    answerNode: "Sì. La produzione di contenuti AEO-friendly (risposte concise, definizioni, FAQ strutturate, dati e citazioni) è parte centrale del servizio, perché è ciò che permette al sito di essere scelto come fonte dalle AI."
  },
  {
    question: "Come si ottimizza un sito per ChatGPT, Perplexity e Gemini?",
    answerText: "Le AI generative scelgono fonti chiare, autorevoli e ben strutturate. Si lavora su entità, dati strutturati JSON-LD, contenuti in formato domanda/risposta, presenza coerente del brand su fonti esterne (llms.txt, citazioni, recensioni) e accessibilità per i crawler delle AI.",
    answerNode: "Le AI generative scelgono fonti chiare, autorevoli e ben strutturate. Si lavora su entità, dati strutturati JSON-LD, contenuti in formato domanda/risposta, presenza coerente del brand su fonti esterne (llms.txt, citazioni, recensioni) e accessibilità per i crawler delle AI."
  },
  {
    question: "Serve un sito nuovo o ottimizzate quello esistente?",
    answerText: "Possiamo lavorare su entrambi gli scenari. Su un sito esistente partiamo da un audit tecnico, di contenuti e di entità. Se la base è troppo datata o non indicizzabile può essere più efficiente realizzare un nuovo sito ottimizzato fin dalle fondamenta.",
    answerNode: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      "Possiamo lavorare su entrambi gli scenari. Su un sito esistente partiamo da un audit tecnico, di contenuti e di entità. Se la base è troppo datata può essere più efficiente realizzare un",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-aziendali", className: "text-accent hover:underline font-medium", children: "nuovo sito web aziendale" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, void 0),
      " ",
      "ottimizzato fin dalle fondamenta."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, void 0)
  },
  {
    question: "Date garanzie di posizionamento su Google?",
    answerText: "No, e diffida di chi le promette. Nessuno può garantire una prima posizione su Google: l'algoritmo è in continuo aggiornamento. Garantiamo invece un metodo trasparente, KPI misurabili e azioni concrete su SEO, AEO e GEO.",
    answerNode: "No, e diffida di chi le promette. Nessuno può garantire una prima posizione su Google: l'algoritmo è in continuo aggiornamento. Garantiamo invece un metodo trasparente, KPI misurabili e azioni concrete su SEO, AEO e GEO."
  },
  {
    question: "Cos'è un'entità nel contesto SEO e AEO?",
    answerText: "Un'entità è un concetto univoco (persona, azienda, luogo, prodotto, servizio) che Google e le AI identificano e collegano tra loro. Lavorare a livello di entità — e non solo di parole chiave — è fondamentale per essere riconosciuti come fonte autorevole su un argomento.",
    answerNode: "Un'entità è un concetto univoco (persona, azienda, luogo, prodotto, servizio) che Google e le AI identificano e collegano tra loro. Lavorare a livello di entità — e non solo di parole chiave — è fondamentale per essere riconosciuti come fonte autorevole su un argomento."
  },
  {
    question: "Quanto costa il servizio SEO, AEO e GEO?",
    answerText: "Il costo dipende dallo stato del sito, dalla competitività del settore e dagli obiettivi. Lavoriamo a progetto e non con abbonamenti vincolanti. Dopo un primo confronto inviamo un preventivo chiaro e senza impegno.",
    answerNode: "Il costo dipende dallo stato del sito, dalla competitività del settore e dagli obiettivi. Lavoriamo a progetto e non con abbonamenti vincolanti. Dopo un primo confronto inviamo un preventivo chiaro e senza impegno."
  }
];
const PosizionamentoGoogleEAi = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: PAGE_DESCRIPTION }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: PAGE_DESCRIPTION }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: PAGE_URL }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: PAGE_TITLE }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: PAGE_DESCRIPTION }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "SEO, AEO e GEO — Posizionamento su Google e AI",
        description: "Servizio di ottimizzazione SEO, AEO (Answer Engine Optimization) e GEO (Generative Engine Optimization) per siti web. Padova e tutta Italia.",
        serviceType: ["SEO", "Answer Engine Optimization", "Generative Engine Optimization"],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
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
          description: "Preventivo personalizzato gratuito"
        }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", "[data-aeo-answer]"]
        },
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answerText }
        }))
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
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
          { "@type": "Thing", name: "Generative Engine Optimization" }
        ],
        primaryImageOfPage: { "@type": "ImageObject", url: "https://4weblab.it/og-image.webp" }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "SEO & AI", item: PAGE_URL }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV(
          PageBreadcrumb,
          {
            items: [
              { label: "Home", to: "/" },
              { label: "SEO & AI" }
            ]
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 223,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground", children: "SEO, AEO e GEO: posizionamento su Google e sulle AI" }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance", children: "Ottimizziamo il tuo sito per Google e per gli assistenti AI come ChatGPT, Perplexity, Gemini e Copilot. Un solo metodo per essere trovati, scelti e citati." }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2 px-10 py-5",
              children: [
                "Richiedi una valutazione gratuita",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 242,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 237,
              columnNumber: 17
            },
            void 0
          ),
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
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 244,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-3", children: "Risposta entro 24h — nessun impegno" }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 253,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 222,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 221,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "rounded-2xl border border-accent/20 bg-accent/5 p-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxDEV(Lightbulb, { className: "w-6 h-6 text-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-bold text-foreground text-lg uppercase tracking-wider m-0", children: "In sintesi" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 265,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxDEV("strong", { className: "text-foreground", children: "4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 270,
            columnNumber: 19
          }, void 0),
          " è uno studio web di Legnaro (Padova) che si occupa di posizionamento su Google e sulle AI. Lavoriamo su tre livelli: ",
          /* @__PURE__ */ jsxDEV("strong", { children: "SEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 272,
            columnNumber: 28
          }, void 0),
          " per i risultati classici, ",
          /* @__PURE__ */ jsxDEV("strong", { children: "AEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 272,
            columnNumber: 75
          }, void 0),
          " per le risposte dirette (Google AI Overviews, assistenti vocali) e ",
          /* @__PURE__ */ jsxDEV("strong", { children: "GEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 273,
            columnNumber: 79
          }, void 0),
          " per essere citati dalle AI generative come ChatGPT, Perplexity, Gemini e Copilot. Serviamo Padova, il Veneto e tutta Italia in remoto. Preventivo gratuito su richiesta."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 269,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 264,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 263,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 262,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          className: "section-padding",
          style: { background: "var(--gradient-surface)" },
          children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto space-y-12", children: [
            /* @__PURE__ */ jsxDEV(AnimatedSection, { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Search, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 293,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 292,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cos'è la SEO (Search Engine Optimization)?" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 295,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 291,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-4 text-lg", children: "La SEO è l'insieme di tecniche che permettono a un sito web di apparire più in alto nei risultati organici di Google e degli altri motori di ricerca." }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 297,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-5", children: [
                "Una buona strategia SEO lavora su tre pilastri: ottimizzazione tecnica del sito (velocità, struttura, indicizzabilità), contenuti pensati per rispondere all'intento di ricerca degli utenti e autorità del dominio costruita nel tempo. È la base su cui poggiano sia l'AEO che la GEO. Se invece servono risultati immediati, la SEO si affianca bene a ",
                /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "campagne Google ADS" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 306,
                  columnNumber: 35
                }, void 0),
                " per intercettare subito le ricerche ad alto intento."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 301,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: [
                "Audit tecnico (Core Web Vitals, indicizzazione, crawl budget)",
                "Keyword research e mappatura intenti di ricerca",
                "Ottimizzazione on-page (title, meta, heading, link interni)",
                "SEO locale per città/provincia di appartenenza"
              ].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 316,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 317,
                  columnNumber: 23
                }, void 0)
              ] }, item, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 315,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 308,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 290,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(AnimatedSection, { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 327,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 326,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cos'è l'AEO (Answer Engine Optimization)?" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 329,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 325,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-4 text-lg", children: `L'AEO è l'ottimizzazione dei contenuti per essere scelti come risposta diretta dai motori di risposta: Google AI Overviews, featured snippet, assistenti vocali e box "People also ask".` }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 331,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-5", children: "Mentre la SEO porta clic verso il sito, l'AEO punta a essere la risposta. Richiede contenuti strutturati in formato domanda/risposta, dati strutturati JSON-LD, risposte concise (40–60 parole) seguite da approfondimenti, e un'architettura semantica che renda chiara l'entità trattata." }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 336,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: [
                "Contenuti in formato Q&A con risposta diretta in apertura",
                "Markup Schema.org (FAQPage, HowTo, Article, Service)",
                "Ottimizzazione per featured snippet e People Also Ask",
                "Linguaggio chiaro, dati verificabili, citazioni di fonti"
              ].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 350,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 351,
                  columnNumber: 23
                }, void 0)
              ] }, item, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 349,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 342,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 324,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(AnimatedSection, { children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Bot, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 361,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 360,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cos'è la GEO (Generative Engine Optimization)?" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 363,
                  columnNumber: 19
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 359,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold mb-4 text-lg", children: "La GEO è l'ottimizzazione del brand e dei contenuti per essere citati e raccomandati dalle AI generative come ChatGPT, Perplexity, Gemini, Claude e Microsoft Copilot." }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 365,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-5", children: "Le AI non si limitano più a indicizzare pagine: scelgono fonti su cui costruire le risposte. La GEO lavora sulla riconoscibilità dell'entità (brand, autore, azienda) attraverso menzioni coerenti su fonti autorevoli esterne, contenuti citabili, llms.txt e accessibilità ai crawler delle AI." }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 369,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2.5", children: [
                "Costruzione dell'entità brand su fonti esterne autorevoli",
                "File llms.txt e accessibilità per i crawler delle AI",
                "Contenuti citabili: dati originali, definizioni, casi studio",
                "Coerenza informativa (NAP, ruoli, servizi) su web e directory"
              ].map((item) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2.5 text-muted-foreground", children: [
                /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 383,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 384,
                  columnNumber: 23
                }, void 0)
              ] }, item, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 382,
                columnNumber: 21
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 375,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 358,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 288,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 287,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 283,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Compass, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 399,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Differenze tra SEO, AEO e GEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 401,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 397,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-[var(--shadow-sm)]", children: /* @__PURE__ */ jsxDEV("table", { className: "w-full text-left text-sm", children: [
          /* @__PURE__ */ jsxDEV("thead", { className: "bg-accent/8 text-foreground", children: /* @__PURE__ */ jsxDEV("tr", { children: [
            /* @__PURE__ */ jsxDEV("th", { className: "p-4 font-semibold", children: "Aspetto" }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 408,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "p-4 font-semibold", children: "SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 409,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "p-4 font-semibold", children: "AEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 410,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("th", { className: "p-4 font-semibold", children: "GEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 411,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 407,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 406,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("tbody", { className: "text-muted-foreground", children: [
            {
              label: "Obiettivo",
              seo: "Posizionare pagine su Google",
              aeo: "Essere la risposta diretta",
              geo: "Essere citato dalle AI generative"
            },
            {
              label: "Destinatario",
              seo: "Crawler dei motori di ricerca",
              aeo: "Answer engine e assistenti vocali",
              geo: "LLM (ChatGPT, Gemini, Perplexity, Copilot)"
            },
            {
              label: "Segnali chiave",
              seo: "Backlink, contenuti, tecnica",
              aeo: "Schema markup, struttura Q&A",
              geo: "Entità brand, menzioni esterne, autorevolezza"
            },
            {
              label: "Formato contenuto",
              seo: "Articoli e pagine ottimizzate",
              aeo: "Risposte concise + approfondimento",
              geo: "Contenuti citabili e verificabili"
            },
            {
              label: "KPI principale",
              seo: "Traffico organico, posizioni",
              aeo: "Featured snippet, AI Overviews",
              geo: "Menzioni e citazioni da AI"
            }
          ].map((row) => /* @__PURE__ */ jsxDEV("tr", { className: "border-t border-border/60", children: [
            /* @__PURE__ */ jsxDEV("td", { className: "p-4 font-semibold text-foreground", children: row.label }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 448,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "p-4", children: row.seo }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 449,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "p-4", children: row.aeo }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 450,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("td", { className: "p-4", children: row.geo }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 451,
              columnNumber: 27
            }, void 0)
          ] }, row.label, true, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 447,
            columnNumber: 25
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 414,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 405,
          columnNumber: 19
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 404,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 403,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 396,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 395,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 394,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          className: "section-padding",
          style: { background: "var(--gradient-surface)" },
          children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Wrench, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 471,
                columnNumber: 19
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 470,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Come lavoriamo" }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 473,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 469,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { children: "Un metodo trasparente, costruito su cinque fasi. Niente promesse di prime posizioni: solo azioni concrete, misurabili e documentate." }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 476,
              columnNumber: 17
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 475,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-5", staggerDelay: 0.08, children: [
              {
                step: "01",
                icon: Target,
                title: "Audit SEO, AEO e GEO",
                description: "Analizziamo lo stato tecnico del sito, l'indicizzazione, i contenuti esistenti, la presenza del brand su fonti esterne e la visibilità attuale sulle AI."
              },
              {
                step: "02",
                icon: Compass,
                title: "Strategia di entità e parole chiave",
                description: "Definiamo le entità di riferimento del business e mappiamo le query (informazionali, navigazionali, transazionali) su cui ha senso essere presenti."
              },
              {
                step: "03",
                icon: Wrench,
                title: "Ottimizzazione on-page e dati strutturati",
                description: "Interveniamo su title, meta, heading, link interni, Core Web Vitals e JSON-LD (Service, FAQPage, Article, BreadcrumbList) per parlare la lingua dei motori e delle AI."
              },
              {
                step: "04",
                icon: FileText,
                title: "Contenuti AEO e GEO friendly",
                description: "Scriviamo risposte dirette, FAQ, definizioni e approfondimenti citabili. Curiamo il file llms.txt e la coerenza dell'entità brand sulle fonti esterne."
              },
              {
                step: "05",
                icon: LineChart,
                title: "Monitoraggio e iterazione",
                description: "Misuriamo posizioni, traffico organico, presenza nei featured snippet e citazioni da AI. Iteriamo sulle azioni che generano più valore."
              }
            ].map((item, i) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: item.step }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 521,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-1.5", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 525,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 526,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 524,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 520,
              columnNumber: 21
            }, void 0) }, i, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 519,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 481,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 468,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 467,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 463,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(HelpCircle, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 542,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 541,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Domande frequenti su SEO, AEO e GEO" }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 544,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 540,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: faqItems.map((faq, index) => /* @__PURE__ */ jsxDEV(
          AccordionItem,
          {
            value: `faq-${index}`,
            className: "rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6",
            children: [
              /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground text-base pr-4", children: faq.question }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 555,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 554,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-muted-foreground text-sm leading-relaxed pb-5", children: faq.answerNode }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 557,
                columnNumber: 23
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 549,
            columnNumber: 21
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 547,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 546,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 539,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 538,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
        lineNumber: 537,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          className: "section-padding",
          style: { background: "var(--gradient-surface)" },
          children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mb-10", children: [
              /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 mb-3", children: "Approfondisci sul nostro sito" }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 576,
                columnNumber: 17
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Scopri tutti i nostri servizi e le risorse pensate per chi vuole essere trovato online — su Google e sulle AI." }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 577,
                columnNumber: 17
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 575,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", staggerDelay: 0.06, children: [
              { to: "/", title: "Home", description: "Chi siamo e cosa facciamo in 4 Web Lab." },
              {
                to: "/siti-web-aziendali",
                title: "Siti web aziendali",
                description: "Pacchetti strutturati per PMI da 899€."
              },
              {
                to: "/siti-web-per-professionisti",
                title: "Siti per professionisti",
                description: "Soluzioni per studi e liberi professionisti da 549€."
              },
              {
                to: "/siti-web-per-negozi",
                title: "Siti per negozi",
                description: "Pacchetto essenziale per attività locali da 199€."
              },
              {
                to: "/realizzazione-siti-web-padova",
                title: "Siti web a Padova",
                description: "Landing locale dedicata a Padova e provincia."
              },
              {
                to: "/faq-realizzazione-siti-web",
                title: "FAQ siti web",
                description: "Risposte rapide su costi, tempi e tecnologie."
              },
              {
                to: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
                title: "Perché il sito non si trova su Google",
                description: "Articolo pratico sulle cause più comuni."
              },
              {
                to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                title: "Siti web e intelligenza artificiale",
                description: "Opportunità, rischi e cosa cambia per chi cerca online."
              },
              {
                to: "/blog",
                title: "Tutti gli articoli del blog",
                description: "Guide su SEO, costi, GDPR, AI e molto altro."
              }
            ].map((c) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: c.to,
                className: "block h-full p-5 rounded-2xl border border-border/60 bg-card hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
                children: [
                  /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground group-hover:text-accent transition-colors mb-1.5", children: [
                    c.title,
                    " →"
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                    lineNumber: 631,
                    columnNumber: 23
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: c.description }, void 0, false, {
                    fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                    lineNumber: 634,
                    columnNumber: 23
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 627,
                columnNumber: 21
              },
              void 0
            ) }, c.to, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 626,
              columnNumber: 19
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 582,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 574,
            columnNumber: 13
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
            lineNumber: 573,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 569,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "contatti",
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
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 649,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi una valutazione SEO, AEO e GEO" }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 656,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Raccontaci il tuo progetto: analizziamo lo stato attuale del tuo sito e ti proponiamo un piano concreto per essere trovato su Google e sulle AI. Nessun impegno." }, void 0, false, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 659,
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
                      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                      lineNumber: 665,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-2", children: /* @__PURE__ */ jsxDEV("strong", { children: "Richiede WhatsApp Web su PC" }, void 0, false, {
                    fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                    lineNumber: 674,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                    lineNumber: 673,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                  lineNumber: 664,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 655,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 680,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
                lineNumber: 679,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 654,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
              lineNumber: 653,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
          lineNumber: 644,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 218,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
      lineNumber: 687,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/PosizionamentoGoogleEAi.tsx",
    lineNumber: 121,
    columnNumber: 5
  }, void 0);
};
export {
  PosizionamentoGoogleEAi as default
};
