import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, C as ContactFormWeb3Forms, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, ArrowRight, Ear, Search, Lightbulb, Store, Briefcase, Building2 } from "lucide-react";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: pageUrl }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Contatti", item: "https://4weblab.it/contatti" }
        ]
      }) }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: pageImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: pageImage }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        mainEntity: { "@id": "https://4weblab.it/#business" }
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("filter", { id: "contact-hero-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#contact-hero-noise)" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-24 right-1/3 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-[140px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary-foreground/5 blur-[120px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "container-section relative z-10 text-center max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "Contatti" }
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-16 h-1 rounded-full mx-auto mb-8 bg-accent" }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 text-primary-foreground mb-6", children: "Contattaci" }),
          /* @__PURE__ */ jsxs("p", { className: "body-large text-primary-foreground/75 text-balance", children: [
            "Raccontaci la tua attività e ti diremo come possiamo aiutarti a creare un sito web che porta risultati. Nel frattempo puoi sfogliare le nostre ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground mb-4", children: "Come lavoriamo" }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground text-balance", children: "Un metodo semplice e trasparente per capire insieme la soluzione migliore per te." })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", staggerDelay: 0.1, children: steps.map((step, idx) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-full p-7 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-5 right-6 text-5xl font-serif font-bold text-accent/15 leading-none", children: idx + 1 }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(step.icon, { className: "w-6 h-6 text-accent", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl font-semibold text-foreground mb-2", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.description })
        ] }) }, idx)) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("filter", { id: "contact-form-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#contact-form-noise)" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsxs("div", { className: "container-section relative z-10", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-10", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }),
            /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-4", children: "Compila il form" }),
            /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 text-balance", children: "Ti ricontattiamo entro poche ore con una prima valutazione gratuita e senza impegno." })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "p-6 md:p-10 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 shadow-2xl", children: /* @__PURE__ */ jsx(ContactFormWeb3Forms, {}) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground mb-4", children: "Preferisci un contatto diretto?" }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground text-balance", children: "Se ti è più comodo, scrivici via email o su WhatsApp. Ti rispondiamo personalmente, senza filtri o automatismi." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "mailto:info@4weblab.it",
              className: "group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors", children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-accent", "aria-hidden": "true" }) }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "Email" }),
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground truncate", children: "info@4weblab.it" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: whatsappUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group flex items-center gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-[#25D366]/50 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5",
              "aria-label": "Contattaci su WhatsApp",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/15 transition-colors", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-[#25D366]", "aria-hidden": "true" }) }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-muted-foreground", children: "WhatsApp" }),
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: "+39 351 465 6042" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/80 text-center mt-4", children: /* @__PURE__ */ jsx("strong", { children: "WhatsApp da PC richiede WhatsApp Web." }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground mb-4", children: "Non sai da dove partire?" }),
          /* @__PURE__ */ jsxs("p", { className: "body-large text-muted-foreground text-balance", children: [
            "Se non sei sicuro di cosa ti serve, dai un'occhiata alle pagine dedicate per capire quale soluzione è più adatta alla tua attività. Se invece vuoi portare clienti subito, puoi anche valutare la ",
            /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "gestione delle tue campagne Google ADS" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto", staggerDelay: 0.08, children: solutions.map((s) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: s.href,
            className: "group flex flex-col items-center text-center gap-4 p-7 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors", children: /* @__PURE__ */ jsx(s.icon, { className: "w-7 h-7 text-accent", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx("span", { className: "font-serif text-lg font-semibold text-foreground", children: s.label }),
              /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all", children: [
                "Scopri di più ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4", "aria-hidden": "true" })
              ] })
            ]
          }
        ) }, s.href)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-1 rounded-full mx-auto mb-6 bg-accent" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-foreground text-balance leading-relaxed", children: "Dietro ogni progetto ci sono persone, idee e tempo dedicato. Quando ci scrivi, parli con noi: nessun call center, nessuna risposta automatica." }),
        /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground text-balance mt-4", children: "Saremo felici di ascoltare la tua storia e capire come possiamo esserti utili." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Contact as default
};
