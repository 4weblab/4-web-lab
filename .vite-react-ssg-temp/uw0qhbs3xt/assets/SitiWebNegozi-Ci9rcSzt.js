import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, C as ContactFormWeb3Forms, F as Footer, b as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Store, SearchX, MessageCircleWarning, ShieldAlert, Globe, Layers, CheckCircle2, MapPin, Navigation, Smartphone, Zap, Eye, Users, Award, ShoppingBag, Euro, Check, HelpCircle, Settings } from "lucide-react";
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
const storefrontImg = "/assets/negozi-storefront-BAZWe5FI.webp";
const mobileSearchImg = "/assets/negozi-mobile-search-CoRCDXk1.webp";
const SitiWebNegozi = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti-negozi");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Siti Web per Negozi a Padova e in Italia | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Siti web per negozi a Padova da 199€ una tantum: design moderno, SEO locale e assistenza. Attira clienti da Google. Preventivo gratuito in 24h."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 30,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://4weblab.it/siti-web-per-negozi" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Siti web per negozi", item: "https://4weblab.it/siti-web-per-negozi" }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://4weblab.it/siti-web-per-negozi" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Siti Web per Negozi a Padova e in Italia | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "Siti web per negozi a Padova da 199€ una tantum: design moderno, SEO locale e assistenza. Attira clienti da Google. Preventivo gratuito in 24h." }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: "https://4weblab.it/siti-web-per-negozi" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Siti Web per Negozi a Padova e in Italia | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "Siti web per negozi a Padova da 199€ una tantum: design moderno, SEO locale e assistenza. Attira clienti da Google. Preventivo gratuito in 24h." }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quanto tempo serve per realizzare un sito web per negozi?",
            "acceptedAnswer": { "@type": "Answer", "text": "I tempi di realizzazione variano in base alla complessità del sito, ma per la maggior parte dei negozi riusciamo a consegnare il progetto completo in 7-15 giorni lavorativi. In questo tempo includiamo progettazione, sviluppo e inserimento dei contenuti iniziali." }
          },
          {
            "@type": "Question",
            "name": "Posso modificare il sito del mio negozio?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sì, il sito può essere progettato per essere aggiornato in autonomia in modo semplice. In alternativa, puoi affidare a noi la gestione e gli aggiornamenti, così non devi preoccuparti di nulla e hai sempre un sito aggiornato e funzionante." }
          },
          {
            "@type": "Question",
            "name": "Il sito del negozio sarà su Google?",
            "acceptedAnswer": { "@type": "Answer", "text": "Il sito viene strutturato per essere correttamente indicizzato su Google, con una base SEO solida pensata per le ricerche locali. Questo significa che il tuo negozio può comparire quando qualcuno cerca i tuoi prodotti o servizi nella tua zona." }
          },
          {
            "@type": "Question",
            "name": "È adatto ai piccoli negozi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Assolutamente sì. Questo tipo di sito è pensato proprio per negozi locali, attività indipendenti e piccole realtà che vogliono migliorare la propria presenza online senza investimenti complessi o soluzioni inutilmente complicate." }
          }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://4weblab.it/siti-web-per-negozi#service",
        name: "Siti Web per Negozi",
        description: "Realizziamo siti web per negozi e attività locali a Padova e in tutta Italia: design moderno, SEO locale e assistenza dedicata.",
        serviceType: "Web Design for Local Shops",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        url: "https://4weblab.it/siti-web-per-negozi",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        provider: { "@id": "https://4weblab.it/#business" },
        offers: {
          "@type": "Offer",
          url: "https://4weblab.it/siti-web-per-negozi",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "199",
            priceCurrency: "EUR"
          }
        }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV(
          PageBreadcrumb,
          {
            items: [
              { label: "Home", to: "/" },
              { label: "Siti per negozi" }
            ]
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 126,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground", children: "Siti Web per Negozi a Padova (e in tutta Italia)" }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 132,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-balance", children: "Realizziamo siti web professionali per negozi fisici e attività locali, pensati per portarti nuovi clienti da Google e trasformare chi ti trova online in visite reali in negozio." }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 135,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 text-accent font-semibold bg-accent/10 px-6 py-3 rounded-full mb-8", children: /* @__PURE__ */ jsxDEV("span", { children: "Siti web per negozi a partire da 199€" }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 140,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2 px-10 py-5",
              children: [
                "Richiedi un preventivo gratuito",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                  lineNumber: 149,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 144,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-3", children: "Risposta entro 24h – senza impegno" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 143,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Store, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Perché oggi un negozio senza sito web perde clienti ogni giorno" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { children: [
          "Sempre più persone cercano prodotti e negozi su Google prima di uscire di casa. Se il tuo negozio non ha un sito web professionale, semplicemente non esisti per chi sta cercando proprio quello che vendi — è esattamente il problema che approfondiamo nell'articolo",
          " ",
          /* @__PURE__ */ jsxDEV(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: "text-accent hover:underline font-medium", children: "perché il tuo sito non si trova su Google" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 168,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-2 gap-6", staggerDelay: 0.1, children: [
          {
            icon: SearchX,
            title: "Sei invisibile su Google",
            description: "Se qualcuno cerca il tuo prodotto a Padova e non trova il tuo negozio, troverà quello di un concorrente."
          },
          {
            icon: MessageCircleWarning,
            title: "I social non bastano",
            description: "Facebook e Instagram aiutano, ma non sostituiscono un sito web strutturato e trovabile su Google."
          },
          {
            icon: ShieldAlert,
            title: "Perdi fiducia",
            description: "Un cliente si fida molto di più di un negozio con un sito chiaro, aggiornato e professionale."
          },
          {
            icon: Globe,
            title: "Non controlli la tua presenza online",
            description: "Il sito è l'unico spazio davvero tuo, non dipendi da piattaforme esterne."
          }
        ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 rounded-2xl mb-4", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-6 h-6 text-accent-foreground", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 202,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 201,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2.5", children: item.title }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 204,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.description }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 205,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 200,
          columnNumber: 21
        }, void 0) }, index, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 199,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 159,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Layers, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 220,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 219,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cosa realizziamo per il tuo negozio" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 222,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-10", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { children: "Non creiamo semplici siti vetrina, ma strumenti pensati per aiutarti a portare clienti reali nel tuo punto vendita." }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 225,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 224,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { direction: "left", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: storefrontImg,
              alt: "Negozio con vetrina curata che rappresenta la realizzazione siti web per negozi",
              className: "rounded-2xl shadow-lg w-full aspect-[4/3] object-cover",
              loading: "lazy",
              decoding: "async",
              width: 1280,
              height: 960
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 231,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-3", staggerDelay: 0.08, children: [
            "Presentazione del negozio",
            "Schede prodotti o categorie",
            "Orari e contatti",
            "Google Maps integrata",
            "Pulsante WhatsApp",
            "Collegamenti social",
            "Struttura ottimizzata per Google"
          ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 254,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 255,
              columnNumber: 27
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 253,
            columnNumber: 25
          }, void 0) }, index, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 252,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 242,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 241,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 216,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(MapPin, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 272,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 271,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Siti web progettati per negozi locali" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 274,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground order-2 md:order-1", direction: "left", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "mb-8", children: [
              "Un sito per negozio deve essere semplice, veloce e immediato. L'obiettivo è portare il cliente in negozio nel minor tempo possibile, soprattutto per i",
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent hover:underline font-medium", children: "negozi della provincia di Padova" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 280,
                columnNumber: 21
              }, void 0),
              " ",
              "che lavorano su un bacino fortemente locale. Vedi alcune ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni e concept" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 283,
                columnNumber: 83
              }, void 0),
              ". Per accelerare l'arrivo di clienti nuovi, il sito può essere affiancato a ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "campagne Google ADS mirate sulla tua zona" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 283,
                columnNumber: 267
              }, void 0),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 278,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-4", staggerDelay: 0.1, children: [
              { icon: Navigation, text: "Navigazione semplice" },
              { icon: Smartphone, text: "Ottimizzato mobile" },
              { icon: Zap, text: "Caricamento veloce" },
              { icon: MapPin, text: 'SEO locale (ricerche tipo "negozio + città")' }
            ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 p-5 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-10 h-10 rounded-xl flex-shrink-0", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-accent-foreground", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 295,
                columnNumber: 29
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 294,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "font-semibold text-foreground", children: item.text }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 297,
                columnNumber: 27
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 293,
              columnNumber: 25
            }, void 0) }, index, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 292,
              columnNumber: 23
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 285,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 277,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "order-1 md:order-2", direction: "right", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: mobileSearchImg,
              alt: "Ricerca locale su smartphone per trovare negozi nella zona",
              className: "rounded-2xl shadow-lg w-full aspect-[4/3] object-cover",
              loading: "lazy",
              decoding: "async",
              width: 1280,
              height: 960
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 304,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 276,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 269,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 268,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 267,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Eye, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 325,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 324,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cosa ottieni con un sito web per il tuo negozio" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 327,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 323,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-3 gap-8", staggerDelay: 0.1, children: [
          {
            icon: Users,
            title: "Più clienti dal web",
            description: "Chi cerca i tuoi prodotti online può trovarti facilmente."
          },
          {
            icon: Award,
            title: "Maggiore credibilità",
            description: "Un sito professionale trasmette fiducia immediata."
          },
          {
            icon: ShoppingBag,
            title: "Più visite in negozio",
            description: "Il sito diventa un ponte tra online e punto vendita."
          }
        ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center p-10 border border-border/50 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-card-hover)]", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-16 h-16 mx-auto mb-5", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-7 h-7 text-accent-foreground", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 350,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 349,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-lg text-foreground mb-3", children: item.title }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 352,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 353,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 348,
          columnNumber: 21
        }, void 0) }, index, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 347,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 329,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 322,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 321,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 320,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Euro, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 368,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 367,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Quanto costa un sito web per negozi" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 370,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 366,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass p-10 relative overflow-hidden", style: { border: "1px solid hsl(210 30% 88%)", boxShadow: "0 8px 32px -4px hsl(210 73% 15% / 0.12), 0 2px 8px -2px hsl(210 73% 15% / 0.07)" }, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wide", style: { background: "var(--gradient-accent)", color: "white" }, children: "SITO COMPLETO" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 374,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground block mb-2", children: "a partire da" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 378,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-5xl md:text-6xl font-serif font-bold text-foreground", children: "€199" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 379,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm mt-2", children: "IVA esclusa" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 380,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 377,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 mb-10 max-w-md mx-auto", role: "list", children: [
            "Sito vetrina completo",
            "Design professionale",
            "Ottimizzazione base Google",
            "Versione mobile",
            "Inserimento contenuti"
          ].map((feature, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3 text-accent", "aria-hidden": "true" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 392,
              columnNumber: 27
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 391,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: feature }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 394,
              columnNumber: 25
            }, void 0)
          ] }, index, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 390,
            columnNumber: 23
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 382,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground text-center mb-6", children: [
            "Il prezzo varia in base alle esigenze.",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-accent hover:underline font-medium", children: "Scopri come si calcola il costo di un sito nel 2026" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 400,
              columnNumber: 21
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 398,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base",
              children: [
                "Richiedi un preventivo gratuito",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5" }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                  lineNumber: 411,
                  columnNumber: 23
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 406,
              columnNumber: 21
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 405,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 373,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 372,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 365,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 364,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 363,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(HelpCircle, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 426,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 425,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Domande frequenti sui siti web per negozi" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 424,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: [
          { question: "Quanto tempo serve?", answer: "I tempi di realizzazione variano in base alla complessità del sito, ma per la maggior parte dei negozi riusciamo a consegnare il progetto completo in 7-15 giorni lavorativi. In questo tempo includiamo progettazione, sviluppo e inserimento dei contenuti iniziali." },
          { question: "Posso modificarlo?", answer: "Sì, il sito può essere progettato per essere aggiornato in autonomia in modo semplice. In alternativa, puoi affidare a noi la gestione e gli aggiornamenti, così non devi preoccuparti di nulla e hai sempre un sito aggiornato e funzionante." },
          { question: "Sarò su Google?", answer: "Il sito viene strutturato per essere correttamente indicizzato su Google, con una base SEO solida pensata per le ricerche locali. Questo significa che il tuo negozio può comparire quando qualcuno cerca i tuoi prodotti o servizi nella tua zona." },
          { question: "È adatto ai piccoli negozi?", answer: "Assolutamente sì. Questo tipo di sito è pensato proprio per negozi locali, attività indipendenti e piccole realtà che vogliono migliorare la propria presenza online senza investimenti complessi o soluzioni inutilmente complicate." }
        ].map((faq, index) => /* @__PURE__ */ jsxDEV(AccordionItem, { value: `faq-${index}`, className: "rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6", children: [
          /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsxDEV("h3", { className: "font-semibold text-foreground text-base pr-4", children: faq.question }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 440,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 439,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-muted-foreground text-sm leading-relaxed pb-5", children: faq.answer }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 442,
            columnNumber: 23
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 438,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 431,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 430,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 423,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 422,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 421,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Settings, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 459,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 458,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Il nostro metodo di lavoro" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 461,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 457,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-5", staggerDelay: 0.1, children: [
          { step: "01", title: "Analisi del negozio", description: "Studiamo la tua attività, i tuoi prodotti e il pubblico di riferimento per definire la struttura ideale." },
          { step: "02", title: "Struttura del sito", description: "Progettiamo l'architettura delle pagine, la navigazione e i contenuti per massimizzare l'efficacia." },
          { step: "03", title: "Realizzazione", description: "Sviluppiamo il sito con tecnologie moderne, design professionale e ottimizzazione per dispositivi mobili." },
          { step: "04", title: "Pubblicazione", description: "Mettiamo online il sito, configuriamo Google e ti forniamo il supporto per la gestione." }
        ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: item.step }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 472,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-1.5", children: item.title }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 476,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.description }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 477,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 475,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 471,
          columnNumber: 21
        }, void 0) }, index, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 470,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 463,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 456,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 455,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 454,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 493,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 492,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Perché scegliere 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 495,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 491,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
          "Specializzati in attività locali e negozi fisici",
          "Approccio semplice e diretto, senza complicazioni",
          "Niente tecnicismi inutili: pensiamo noi a tutto",
          "Supporto diretto e veloce via WhatsApp o telefono",
          "Clienti in tutta Italia, con un metodo collaudato da remoto"
        ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 507,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 508,
            columnNumber: 23
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 506,
          columnNumber: 21
        }, void 0) }, index, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 505,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 497,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxDEV("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-aziendali", className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group", children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Ho bisogno di un sito web per la mia azienda →" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 516,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 515,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-professionisti", className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group", children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Cerco un sito per la mia attività professionale →" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 519,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 518,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 514,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 513,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 490,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 489,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 488,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { id: "contatti-negozi", className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxDEV("filter", { id: "negozi-cta-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 532,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 531,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#negozi-cta-noise)" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 534,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 530,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 529,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 537,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi un preventivo per il tuo sito web" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 541,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Raccontaci il tuo negozio e ti proponiamo la soluzione più adatta, senza impegno." }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 542,
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
                  children: [
                    /* @__PURE__ */ jsxDEV("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", role: "img", "aria-label": "WhatsApp", className: "w-6 h-6", children: [
                      /* @__PURE__ */ jsxDEV("circle", { cx: "256", cy: "256", r: "256", fill: "#25D366" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                        lineNumber: 553,
                        columnNumber: 23
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("path", { fill: "#FFFFFF", d: "M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                        lineNumber: 554,
                        columnNumber: 23
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                      lineNumber: 552,
                      columnNumber: 21
                    }, void 0),
                    "Scrivici su WhatsApp"
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                  lineNumber: 546,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-2", children: /* @__PURE__ */ jsxDEV("strong", { children: "Richiede WhatsApp Web su PC" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 558,
                columnNumber: 74
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
                lineNumber: 558,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
              lineNumber: 545,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 540,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 562,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
            lineNumber: 561,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 539,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
          lineNumber: 538,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
        lineNumber: 528,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
      lineNumber: 570,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/SitiWebNegozi.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
export {
  SitiWebNegozi as default
};
