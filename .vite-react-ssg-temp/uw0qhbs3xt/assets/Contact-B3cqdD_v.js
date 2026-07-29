import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, C as ContactFormWeb3Forms, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight, Ear, Search, Lightbulb, Store, Briefcase, Building2 } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const whatsappNumber = "393514656042";
const whatsappMessage = encodeURIComponent("Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.");
const Contact = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const pageTitle = "Contattaci | 4 Web Lab";
  const pageDescription = "Contatta 4 Web Lab per una consulenza gratuita. Raccontaci la tua attività e ti diremo come possiamo aiutarti a creare un sito web che porta risultati.";
  const pageUrl = "https://4weblab.it/contatti";
  const pageImage = "https://4weblab.it/og-image.webp";
  const steps = [
    {
      icon: Ear,
      title: "Ascoltiamo le tue esigenze",
      description: "Capire cosa ti serve davvero è il primo passo. Ti chiediamo come lavori, chi sono i tuoi clienti e quali risultati vuoi ottenere."
    },
    {
      icon: Search,
      title: "Analizziamo la tua attività",
      description: "Studiamo il tuo settore, la concorrenza e il pubblico a cui ti rivolgi per costruire una strategia su misura."
    },
    {
      icon: Lightbulb,
      title: "Proponiamo la soluzione giusta",
      description: "Ti consigliamo il sito più adatto: per negozi, professionisti o aziende. Senza forzature, solo ciò che serve davvero."
    }
  ];
  const solutions = [
    { icon: Store, label: "Siti per negozi", href: "/siti-web-per-negozi" },
    { icon: Briefcase, label: "Siti per professionisti", href: "/siti-web-per-professionisti" },
    { icon: Building2, label: "Siti aziendali", href: "/siti-web-aziendali" }
  ];
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Contatti", item: "https://4weblab.it/contatti" }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        mainEntity: { "@id": "https://4weblab.it/#business" }
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxDEV("filter", { id: "contact-hero-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#contact-hero-noise)" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -top-24 right-1/3 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[140px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary-foreground/5 blur-[120px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10 text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "Contatti" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 105,
              columnNumber: 13
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-1 rounded-full mx-auto mb-8 bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 111,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 text-primary-foreground mb-6", children: "Contattaci" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/75 text-balance", children: [
            "Raccontaci la tua attività e ti diremo come possiamo aiutarti a creare un sito web che porta risultati. Nel frattempo puoi sfogliare le nostre ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 114,
              columnNumber: 158
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 104,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-14", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 123,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground mb-4", children: "Come lavoriamo" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground text-balance", children: "Un metodo semplice e trasparente per capire insieme la soluzione migliore per te." }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", staggerDelay: 0.1, children: steps.map((step, idx) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("div", { className: "relative h-full p-7 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-5 right-6 text-5xl font-serif font-bold text-accent/15 leading-none", children: idx + 1 }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 134,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxDEV(step.icon, { className: "w-6 h-6 text-accent", "aria-hidden": "true" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 138,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 137,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "font-serif text-xl font-semibold text-foreground mb-2", children: step.title }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 140,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.description }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 141,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 133,
          columnNumber: 19
        }, void 0) }, idx, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxDEV("filter", { id: "contact-form-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#contact-form-noise)" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 160,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: [
          /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-10", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 164,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-primary-foreground mb-4", children: "Compila il form" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "body-large text-primary-foreground/70 text-balance", children: "Ti ricontattiamo entro poche ore con una prima valutazione gratuita e senza impegno." }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.15, className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "p-6 md:p-10 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 shadow-2xl", children: /* @__PURE__ */ jsxDEV(ContactFormWeb3Forms, {}, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 172,
            columnNumber: 15
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 171,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 183,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground mb-4", children: "Preferisci un contatto diretto?" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground text-balance", children: "Se ti è più comodo, scrivici via email o su WhatsApp. Ti rispondiamo personalmente, senza filtri o automatismi." }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 185,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 182,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-6 h-6 text-accent", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 196,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 195,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-muted-foreground", children: "Email" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 199,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground truncate", children: "info@4weblab.it" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 200,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 198,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 191,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: whatsappUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-[#25D366]/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
              "aria-label": "Contattaci su WhatsApp",
              children: [
                /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors", children: /* @__PURE__ */ jsxDEV(MessageCircle, { className: "w-6 h-6 text-[#25D366]", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 212,
                  columnNumber: 19
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 211,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-medium text-muted-foreground", children: "WhatsApp" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 215,
                    columnNumber: 19
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: "+39 351 465 6042" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Contact.tsx",
                    lineNumber: 216,
                    columnNumber: 19
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 214,
                  columnNumber: 17
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 204,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-muted-foreground/80 text-center mt-4", children: /* @__PURE__ */ jsxDEV("strong", { children: "WhatsApp da PC richiede WhatsApp Web." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 220,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 180,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-muted/30", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground mb-4", children: "Non sai da dove partire?" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large text-muted-foreground text-balance", children: [
            "Se non sei sicuro di cosa ti serve, dai un'occhiata alle pagine dedicate per capire quale soluzione è più adatta alla tua attività. Se invece vuoi portare clienti subito, puoi anche valutare la ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "gestione delle tue campagne Google ADS" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 233,
              columnNumber: 211
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 232,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto", staggerDelay: 0.08, children: solutions.map((s) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: s.href,
            className: "group flex flex-col items-center text-center gap-4 p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors", children: /* @__PURE__ */ jsxDEV(s.icon, { className: "w-7 h-7 text-accent", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 245,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 244,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "font-serif text-lg font-semibold text-foreground", children: s.label }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all", children: [
                "Scopri di più ",
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 249,
                  columnNumber: 37
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 248,
                columnNumber: 21
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 240,
            columnNumber: 19
          },
          void 0
        ) }, s.href, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 239,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 262,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large text-foreground text-balance leading-relaxed", children: "Dietro ogni progetto ci sono persone, idee e tempo dedicato. Quando ci scrivi, parli con noi: nessun call center, nessuna risposta automatica." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 263,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-base text-muted-foreground text-balance mt-4", children: "Saremo felici di ascoltare la tua storia e capire come possiamo esserti utili." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 261,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Contact.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, void 0);
};
export {
  Contact as default
};
