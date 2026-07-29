import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, m as motion, C as ContactFormWeb3Forms, F as Footer, b as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Users, CheckCircle2, Target, Settings, Award, Euro, Gift, Check } from "lucide-react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { c as cn, P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-D6pJqF3I.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-accordion";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, false, {
      fileName: "/dev-server/src/components/ui/button.tsx",
      lineNumber: 42,
      columnNumber: 12
    }, void 0);
  }
);
Button.displayName = "Button";
const faqItems = [
  {
    q: "Quanto tempo occorre per la realizzazione del sito?",
    a: "Mediamente consegniamo il sito web pronto e collaudato entro 2-4 settimane dalla fase di analisi e ricezione dei materiali."
  },
  {
    q: "Il sito sarà visibile su Google?",
    a: "Sì, ogni progetto include l'ottimizzazione SEO on-page di base (struttura dei contenuti, meta tag, velocizzazione del caricamento ed indicizzazione su Google)."
  },
  {
    q: "Posso aggiornare i contenuti in autonomia dopo il lancio?",
    a: "Certamente. Ti forniremo una formazione completa per permetterti di gestire testi, contatti e aggiornamenti in totale autonomia."
  },
  {
    q: "Come funziona la collaborazione da remoto?",
    a: "Lavoriamo con professionisti in tutta Italia tramite briefing online, strumenti condivisi e aggiornamenti continui sulle fasi di sviluppo."
  }
];
const SitiWebProfessionisti = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Siti Web per Professionisti e Studi | Da 549€ | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "Realizziamo siti web su misura per professionisti e studi tecnici o legali. Soluzioni veloci, ottimizzate SEO e pensate per acquisire clienti. Richiedi un preventivo!"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 54,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://4weblab.it/siti-web-per-professionisti" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Siti web per professionisti", item: "https://4weblab.it/siti-web-per-professionisti" }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://4weblab.it/siti-web-per-professionisti" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "Siti web per Professionisti, SEO locale | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          property: "og:description",
          content: "Sito web per studi e professionisti: avvocati, notai, geometri, architetti, idraulici, elettricisti. Sviluppo personalizzato e mirato, da 549€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 79,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: "https://4weblab.it/siti-web-per-professionisti" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "Siti web per Professionisti, SEO locale | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "twitter:description",
          content: "Sito web per studi e professionisti: avvocati, notai, geometri, architetti, idraulici, elettricisti. Sviluppo personalizzato e mirato, da 549€."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 84,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://4weblab.it/siti-web-per-professionisti#service",
        name: "Siti Web per Professionisti",
        description: "Realizziamo siti web professionali per avvocati, commercialisti, medici e liberi professionisti. Struttura chiara, SEO locale e assistenza continua.",
        serviceType: "Web Design for Professionals",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        url: "https://4weblab.it/siti-web-per-professionisti",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        provider: { "@id": "https://4weblab.it/#business" },
        offers: {
          "@type": "Offer",
          url: "https://4weblab.it/siti-web-per-professionisti",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "549",
            priceCurrency: "EUR"
          }
        }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a }
        }))
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV(
          PageBreadcrumb,
          {
            items: [
              { label: "Home", to: "/" },
              { label: "Siti per professionisti" }
            ]
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 139,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground", children: "Siti Web per Professionisti e Studi Professionali" }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance", children: "Realizziamo siti web per liberi professionisti e studi a Padova e in tutta Italia. Sviluppiamo soluzioni su misura, veloci e ottimizzate per attirare nuovi clienti e posizionare il tuo brand con autorevolezza." }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => {
              var _a;
              return (_a = document.getElementById("contatti-professionisti")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: "btn-primary inline-flex items-center gap-2 mt-2 px-10 py-5",
            children: "Contattaci"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 153,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Users, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 171,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "A chi è rivolto il servizio" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-6", children: "Il nostro servizio di realizzazione siti web per professionisti è pensato per chi opera nel mondo delle libere professioni e degli studi professionali. Ci rivolgiamo a:" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
            "Consulenti e liberi professionisti che desiderano presentarsi online in modo autorevole",
            "Studi professionali (legali, commercialisti, architetti, ingegneri, notai) che necessitano di un sito web professionale",
            "Tecnici e periti che vogliono ampliare la propria visibilità sul territorio nazionale",
            "Professionisti indipendenti alla ricerca di una presenza digitale strutturata e affidabile ( elettricista, idraulico, pittore etc. ) "
          ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20 hover:-translate-y-[3px] hover:shadow-md", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 189,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 190,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 188,
            columnNumber: 23
          }, void 0) }, index, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 187,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Indipendentemente dal settore di appartenenza, il nostro obiettivo è offrire siti web per professionisti che riflettano competenza, serietà e attenzione al cliente." }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 195,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 175,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Target, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 210,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Cosa deve comunicare un sito web per professionisti" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 208,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-7", children: "Un sito web professionale per chi opera nel mondo delle professioni deve trasmettere valori fondamentali che generano fiducia e facilitano il contatto con potenziali clienti. Ecco gli elementi chiave:" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-2 gap-6 mb-8", staggerDelay: 0.1, children: [
            {
              title: "Autorevolezza",
              description: "Il sito deve riflettere la competenza e l'esperienza del professionista, creando una prima impressione solida e credibile."
            },
            {
              title: "Chiarezza dei servizi",
              description: "I servizi offerti devono essere presentati in modo chiaro e comprensibile, permettendo al visitatore di capire immediatamente cosa può aspettarsi."
            },
            {
              title: "Fiducia e affidabilità",
              description: "Elementi come testimonianze, certificazioni e una comunicazione trasparente contribuiscono a costruire un rapporto di fiducia."
            },
            {
              title: "Semplicità di contatto",
              description: "Form di contatto, numeri di telefono e call-to-action ben visibili facilitano la conversione del visitatore in cliente."
            }
          ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "card-glass h-full hover:-translate-y-[3px] hover:shadow-md transition-all duration-400", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-2.5", children: item.title }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 245,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: item.description }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 246,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 244,
            columnNumber: 23
          }, void 0) }, index, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 243,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "Un sito web per professionisti ben progettato diventa uno strumento di lavoro essenziale, capace di attrarre nuovi clienti e consolidare la reputazione professionale, molto più di quanto possa fare",
            " ",
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
                className: "text-accent hover:underline font-medium",
                children: "una semplice presenza sui social network"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 254,
                columnNumber: 19
              },
              void 0
            ),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 251,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 214,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 206,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Settings, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 273,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 272,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Il nostro metodo di lavoro" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 275,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 271,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-8", children: [
            "In 4 Web Lab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato, ideale anche per collaborazioni da remoto con professionisti in tutta Italia. Il nostro processo garantisce trasparenza in ogni fase. Puoi vedere alcuni esempi nelle nostre ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 281,
              columnNumber: 72
            }, void 0),
            ". Per chi vuole ricevere richieste di consulenza già nei primi giorni online, valutiamo insieme anche ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "la pubblicità su Google ADS" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 281,
              columnNumber: 272
            }, void 0),
            " dedicata ai professionisti:"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 278,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-5 mb-8", staggerDelay: 0.1, children: [
            {
              step: "01",
              title: "Analisi e briefing",
              description: "Raccogliamo le informazioni sulla tua attività, i tuoi obiettivi e il pubblico di riferimento attraverso un confronto strutturato."
            },
            {
              step: "02",
              title: "Progettazione",
              description: "Definiamo la struttura del sito, l'architettura delle informazioni e il design in linea con la tua identità professionale."
            },
            {
              step: "03",
              title: "Sviluppo",
              description: "Realizziamo il sito web professionale con tecnologie moderne, garantendo velocità, sicurezza e ottimizzazione SEO."
            },
            {
              step: "04",
              title: "Revisione e lancio",
              description: "Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo formazione per la gestione."
            }
          ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: item.step }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 312,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-1.5", children: item.title }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 316,
                columnNumber: 27
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm", children: item.description }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 317,
                columnNumber: 27
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 315,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 311,
            columnNumber: 23
          }, void 0) }, index, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 310,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 283,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per professionisti ovunque si trovino, mantenendo comunicazione costante e tempi certi." }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 323,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 277,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 270,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 269,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 268,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Award, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 338,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Perché scegliere 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 340,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 336,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxDEV("p", { className: "mb-6", children: "Siamo una realtà strutturata specializzata nella realizzazione di siti web per professionisti. Ecco cosa ci distingue:" }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 343,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
            "Approccio consulenziale: non vendiamo solo un sito, ma una soluzione pensata per i tuoi obiettivi",
            "Esperienza nel settore professionale: conosciamo le esigenze specifiche di chi opera nelle libere professioni",
            "Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto",
            "Attenzione ai risultati: ogni sito è progettato per generare fiducia e facilitare il contatto con nuovi clienti",
            "Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace"
          ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20 hover:-translate-y-[3px] hover:shadow-md", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 357,
              columnNumber: 25
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 358,
              columnNumber: 25
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 356,
            columnNumber: 23
          }, void 0) }, index, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 355,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 347,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "Scegliere 4 Web Lab significa affidarsi a un partner affidabile per la realizzazione di un sito web professionale che rappresenti al meglio la tua attività professionale." }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 363,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 342,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 335,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 334,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 333,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsxDEV(Euro, { className: "w-6 h-6 text-accent-foreground" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 378,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 377,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Quanto costa un sito web per professionisti" }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 380,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 376,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-12", delay: 0.1, children: /* @__PURE__ */ jsxDEV("p", { children: [
            "Ottimizziamo il costo di realizzazione dei nostri servizi cucendo il sito su misura del cliente, in base alle sue reali necessità e in base agli obiettivi che vuole raggiungere. Se vuoi un confronto più ampio, abbiamo riassunto",
            " ",
            /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: "/blog/quanto-costa-un-sito-web-nel-2026",
                className: "text-accent hover:underline font-medium",
                children: "cosa incide davvero sul prezzo di un sito web nel 2026"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 387,
                columnNumber: 19
              },
              void 0
            ),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 383,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 382,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-8 items-start", children: [
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "card-glass p-10 relative overflow-hidden",
                style: {
                  border: "1px solid hsl(210 30% 88%)",
                  boxShadow: "0 8px 32px -4px hsl(210 73% 15% / 0.12), 0 2px 8px -2px hsl(210 73% 15% / 0.07)"
                },
                children: [
                  /* @__PURE__ */ jsxDEV(
                    "div",
                    {
                      className: "absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wide",
                      style: { background: "var(--gradient-accent)", color: "white" },
                      children: "TUTTO INCLUSO"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 407,
                      columnNumber: 21
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-10", children: [
                    /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 text-accent font-semibold mb-6 bg-accent/10 px-5 py-2.5 rounded-full", children: [
                      /* @__PURE__ */ jsxDEV(Gift, { className: "w-5 h-5", "aria-hidden": "true" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                        lineNumber: 415,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("span", { children: "Offerta Completa" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                        lineNumber: 416,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 414,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-muted-foreground block mb-2", children: "a partire da" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                        lineNumber: 419,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-5xl md:text-6xl font-serif font-bold text-foreground", children: "€549" }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                        lineNumber: 420,
                        columnNumber: 25
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 418,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm", children: "una tantum · IVA esclusa" }, void 0, false, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 422,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-sm mt-4", children: "La soluzione One-Page ideale per liberi professionisti che vogliono una presenza online completa, moderna ed efficace." }, void 0, false, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 423,
                      columnNumber: 23
                    }, void 0)
                  ] }, void 0, true, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 413,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4 mb-10", role: "list", children: [
                    {
                      label: "Sviluppo sito One page professionale",
                      tooltip: "Possibilità di espansione a sito multi-pagina su richiesta."
                    },
                    { label: "Personalizzazione contenuti" },
                    { label: "Scelta font e tipografia" },
                    { label: "Palette colori su misura" },
                    { label: "Ottimizzazione SEO" }
                  ].map((feature, index) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsxDEV("span", { className: "flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxDEV(Check, { className: "w-3 h-3 text-accent", "aria-hidden": "true" }, void 0, false, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 441,
                      columnNumber: 29
                    }, void 0) }, void 0, false, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 440,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("span", { className: "text-foreground", children: [
                      feature.tooltip ? /* @__PURE__ */ jsxDEV(
                        "span",
                        {
                          className: "underline decoration-dotted decoration-accent/60 underline-offset-4 cursor-help",
                          title: feature.tooltip,
                          children: feature.label
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                          lineNumber: 445,
                          columnNumber: 31
                        },
                        void 0
                      ) : feature.label,
                      feature.tooltip && /* @__PURE__ */ jsxDEV("span", { className: "block text-xs text-muted-foreground mt-1", children: feature.tooltip }, void 0, false, {
                        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                        lineNumber: 455,
                        columnNumber: 31
                      }, void 0)
                    ] }, void 0, true, {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 443,
                      columnNumber: 27
                    }, void 0)
                  ] }, index, true, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 439,
                    columnNumber: 25
                  }, void 0)) }, void 0, false, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 428,
                    columnNumber: 21
                  }, void 0),
                  /* @__PURE__ */ jsxDEV(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: /* @__PURE__ */ jsxDEV(
                    Button,
                    {
                      size: "lg",
                      className: "w-full rounded-2xl h-13 text-base font-semibold",
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("contatti-professionisti")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      children: "Richiedi preventivo"
                    },
                    void 0,
                    false,
                    {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 464,
                      columnNumber: 23
                    },
                    void 0
                  ) }, void 0, false, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 463,
                    columnNumber: 21
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 400,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center h-full space-y-6", children: /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-5", staggerDelay: 0.1, children: [
              {
                title: "Struttura pensata per il tuo settore",
                description: "Ogni sito viene progettato tenendo conto delle specificità della tua professione e del tuo target di riferimento."
              },
              {
                title: "Nessun vincolo contrattuale",
                description: "4 Web Lab resta al fianco delle tue necessità di sviluppo online ma senza firme o vincoli di nessun tipo."
              },
              {
                title: "Gestione dell' hosting e dell'assistenza",
                description: "​4 Web Lab può gestire l'hosting del tuo spazio, noi ci assicuriamo che tutto funzioni sempre al meglio e tu pensi alla tua attività."
              }
            ].map((item, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
              /* @__PURE__ */ jsxDEV(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 498,
                columnNumber: 29
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "font-bold text-foreground mb-1", children: item.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                  lineNumber: 500,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground", children: item.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                  lineNumber: 501,
                  columnNumber: 31
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 499,
                columnNumber: 29
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 497,
              columnNumber: 27
            }, void 0) }, index, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 496,
              columnNumber: 25
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 478,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 477,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 398,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 397,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 375,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 374,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto mt-12 space-y-4 text-center", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/siti-web-aziendali",
              className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
              children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Ho bisogno di un sito web per la mia azienda →" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 518,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 514,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/siti-web-per-negozi",
              className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
              children: /* @__PURE__ */ jsxDEV("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Vorrei fare il sito del mio negozio →" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 526,
                columnNumber: 15
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 522,
              columnNumber: 13
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 513,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 373,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "text-center mb-10", children: /* @__PURE__ */ jsxDEV("h2", { className: "heading-2", children: "Domande Frequenti sui Siti Web per Professionisti" }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 538,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 537,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxDEV(Accordion, { type: "single", collapsible: true, className: "w-full space-y-3", children: faqItems.map((item, index) => /* @__PURE__ */ jsxDEV(
          AccordionItem,
          {
            value: `item-${index}`,
            className: "rounded-2xl border border-border/60 bg-card px-5 transition-all duration-300 hover:shadow-md",
            children: [
              /* @__PURE__ */ jsxDEV(AccordionTrigger, { className: "text-left font-semibold text-foreground", children: item.q }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 548,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV(AccordionContent, { className: "text-muted-foreground", children: item.a }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 551,
                columnNumber: 23
              }, void 0)
            ]
          },
          index,
          true,
          {
            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
            lineNumber: 543,
            columnNumber: 21
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 541,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 540,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 536,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 535,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
        lineNumber: 534,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          id: "contatti-professionisti",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsxDEV("filter", { id: "sat-cta-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 572,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 571,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#sat-cta-noise)" }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 574,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 570,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 569,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "div",
              {
                className: "absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]",
                "aria-hidden": "true"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 577,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi un preventivo per il tuo sito web professionale" }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                  lineNumber: 585,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Vuoi realizzare un sito web per professionisti che ti rappresenti al meglio? Contattaci per un confronto senza impegno: lavoriamo con professionisti in tutta Italia." }, void 0, false, {
                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                  lineNumber: 588,
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
                        /* @__PURE__ */ jsxDEV(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            role: "img",
                            "aria-label": "WhatsApp",
                            className: "w-6 h-6",
                            children: [
                              /* @__PURE__ */ jsxDEV("circle", { cx: "256", cy: "256", r: "256", fill: "#25D366" }, void 0, false, {
                                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                                lineNumber: 606,
                                columnNumber: 23
                              }, void 0),
                              /* @__PURE__ */ jsxDEV(
                                "path",
                                {
                                  fill: "#FFFFFF",
                                  d: "M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z"
                                },
                                void 0,
                                false,
                                {
                                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                                  lineNumber: 607,
                                  columnNumber: 23
                                },
                                void 0
                              )
                            ]
                          },
                          void 0,
                          true,
                          {
                            fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                            lineNumber: 599,
                            columnNumber: 21
                          },
                          void 0
                        ),
                        "Scrivici su Whatsapp"
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                      lineNumber: 593,
                      columnNumber: 19
                    },
                    void 0
                  ),
                  /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-primary-foreground/50 mt-2 text-center", children: /* @__PURE__ */ jsxDEV("strong", { children: "Richiede WhatsApp Web su PC" }, void 0, false, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 615,
                    columnNumber: 21
                  }, void 0) }, void 0, false, {
                    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                    lineNumber: 614,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                  lineNumber: 592,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 584,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 622,
                columnNumber: 17
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
                lineNumber: 621,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 582,
              columnNumber: 13
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
              lineNumber: 581,
              columnNumber: 11
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
          lineNumber: 563,
          columnNumber: 9
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
      lineNumber: 629,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/SitiWebProfessionisti.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, void 0);
};
export {
  SitiWebProfessionisti as default
};
