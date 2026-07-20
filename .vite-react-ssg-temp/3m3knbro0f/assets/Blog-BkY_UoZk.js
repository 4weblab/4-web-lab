import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { b as blogArubaHero, a as blogDiyWebsite, c as blogQuotePlatforms, d as blogNotFoundOnGoogle, e as blogOutdatedWebsite, f as blogGdprPrivacy, g as blogSiteVsSocial, h as blogAiWebsite, i as blogWebsiteCost } from "./blog-aruba-supersite-DvMlriuU.js";
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
const articles = [
  {
    slug: "/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
    title: "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere",
    description: "Aruba SuperSite sembra la scorciatoia perfetta per creare un sito da soli. Ecco i limiti reali, il tempo perso e cosa valutare prima di iniziare.",
    image: blogArubaHero,
    alt: "Schermata di Aruba SuperSite con editor drag and drop per creare un sito web da soli",
    datePublished: "2026-06-09"
  },
  {
    slug: "/blog/creare-sito-web-da-soli-conviene",
    title: "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026",
    description: "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.",
    image: blogDiyWebsite,
    alt: "Persona che crea un sito web da sola con laptop e builder visuale WordPress",
    datePublished: "2026-05-03"
  },
  {
    slug: "/blog/siti-web-piattaforme-preventivi-online-conviene",
    title: "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?",
    description: "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?",
    image: blogQuotePlatforms,
    alt: "Laptop con piattaforme di preventivi online per la realizzazione di siti web",
    datePublished: "2026-05-02"
  },
  {
    slug: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
    title: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)",
    description: "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.",
    image: blogNotFoundOnGoogle,
    alt: "Laptop con risultati di ricerca Google e lente di ingrandimento, sito web non posizionato",
    datePublished: "2026-04-24"
  },
  {
    slug: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    title: "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026",
    description: "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.",
    image: blogOutdatedWebsite,
    alt: "Monitor e smartphone con un sito aziendale obsoleto e prestazioni in calo",
    datePublished: "2026-03-26"
  },
  {
    slug: "/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    title: "GDPR siti web 2026: obblighi, cookie e privacy",
    description: "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.",
    image: blogGdprPrivacy,
    alt: "Cookie banner e privacy policy su un sito web aziendale conforme al GDPR",
    datePublished: "2026-04-20"
  },
  {
    slug: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
    title: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?",
    description: "Meglio un sito web o i social per la tua attività? Differenze, vantaggi e la scelta più solida per portare clienti nel 2026.",
    image: blogSiteVsSocial,
    alt: "Confronto tra sito web aziendale e presenza social per un'attività locale",
    datePublished: "2026-03-15"
  },
  {
    slug: "/blog/siti-web-creati-con-intelligenza-artificiale",
    title: "Siti web fatti con intelligenza artificiale: opportunità o rischio?",
    description: "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
    datePublished: "2026-04-08"
  },
  {
    slug: "/blog/quanto-costa-un-sito-web-nel-2026",
    title: "Quanto costa un sito web nel 2026?",
    description: "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
    datePublished: "2026-03-04"
  }
];
const Blog = () => {
  const pageTitle = "Blog siti web 2026: guide, costi e SEO | 4 Web Lab";
  const pageDescription = "Guide 2026 su siti web, costi, GDPR, SEO e AI. Consigli per aziende, professionisti e negozi da 4 Web Lab, agenzia web di Padova.";
  const pageKeywords = "blog siti web, guide SEO, costi sito web, GDPR siti web, intelligenza artificiale siti web, agenzia web Padova, siti web aziendali, siti web professionisti";
  const pageUrl = "https://4weblab.it/blog";
  const pageImage = "https://4weblab.it/og-image.webp";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: pageKeywords }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: pageUrl }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://4weblab.it/blog" }
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
        "@type": "CollectionPage",
        name: pageTitle,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        publisher: { "@id": "https://4weblab.it/#business" },
        mainEntity: {
          "@type": "Blog",
          name: "Blog 4 Web Lab",
          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            url: `https://4weblab.it${article.slug}`,
            image: `https://4weblab.it${article.image}`,
            datePublished: article.datePublished,
            dateModified: article.datePublished,
            inLanguage: "it-IT",
            author: {
              "@type": "Person",
              name: "Carlo Fullin",
              url: "https://4weblab.it/"
            },
            publisher: { "@id": "https://4weblab.it/#business" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://4weblab.it${article.slug}`
            }
          }))
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl",
            style: { background: "hsl(var(--accent))" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl",
            style: { background: "hsl(207 90% 70%)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              className: "!mx-0 !justify-start",
              items: [
                { label: "Home", to: "/" },
                { label: "Blog" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
            "Blog 4 Web Lab"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mt-6 text-primary-foreground text-balance", children: "Guide e consigli per creare un sito web che porta clienti" }),
          /* @__PURE__ */ jsx("p", { className: "body-large mt-6 text-primary-foreground/80 max-w-2xl", children: "Articoli pratici su costi, SEO, GDPR e intelligenza artificiale per aziende, professionisti e attività locali a Padova e in tutta Italia." }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3 text-primary-foreground/65 text-sm max-w-2xl", children: [
            "Vedi anche le nostre ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni e concept di siti web" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "btn-primary", children: [
            "Richiedi una consulenza",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "pt-16 md:pt-20 pb-20 md:pb-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "section-divider !mx-0" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Il blog di 4 Web Lab: contenuti utili per scegliere bene" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 body-base text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Nel blog di ",
            /* @__PURE__ */ jsx("strong", { children: "4 Web Lab" }),
            " raccogliamo guide pratiche, casi reali e approfondimenti tecnici pensati per chi sta valutando di",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "realizzare un sito web" }),
            " o rifare quello esistente. Niente teoria astratta: solo consigli operativi nati dal lavoro quotidiano della nostra ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "agenzia web di Padova" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Trovi articoli dedicati a ",
            /* @__PURE__ */ jsx("strong", { children: "costi reali di un sito web" }),
            ", scelte tecniche, ",
            /* @__PURE__ */ jsx("strong", { children: "SEO locale" }),
            ", conformità",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "GDPR" }),
            ", cookie e privacy, oltre a guide sull'uso dell'",
            /* @__PURE__ */ jsx("strong", { children: "intelligenza artificiale" }),
            " nella creazione di siti. Ogni contenuto è pensato per aziende, ",
            /* @__PURE__ */ jsx("strong", { children: "professionisti" }),
            " ",
            "(avvocati, commercialisti, medici), negozi e attività locali che vogliono capire come ottenere risultati concreti dal proprio sito."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Se preferisci parlarne direttamente con noi,",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/contatti", className: "text-accent font-medium hover:underline", children: "richiedi una valutazione gratuita" }),
            ": analizziamo insieme la tua situazione e ti diciamo, senza giri di parole, cosa conviene fare."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(
        "section",
        {
          className: "section-padding",
          style: { background: "var(--gradient-surface)" },
          children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
            /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mb-12 md:mb-16", children: [
              /* @__PURE__ */ jsx("div", { className: "section-divider !mx-0" }),
              /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Ultime guide e approfondimenti" }),
              /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mt-4", children: "Articoli aggiornati su siti web, SEO, costi, GDPR e intelligenza artificiale per aiutarti a fare scelte consapevoli." })
            ] }),
            /* @__PURE__ */ jsx(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: articles.map((article) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("article", { className: "group h-full overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] hover:border-accent/30 flex flex-col", children: [
              /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden aspect-[16/10] bg-muted", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: article.image,
                  alt: article.alt,
                  width: 1024,
                  height: 640,
                  loading: "lazy",
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col flex-1 p-6 md:p-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-semibold leading-snug text-foreground", children: article.title }),
                /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mt-3 line-clamp-2", children: article.description }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 pt-4 border-t border-border/50", children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: article.slug,
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all",
                    children: [
                      "Leggi di più",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ) })
              ] })
            ] }) }, article.title)) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "section-divider mx-auto" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Esplora i nostri servizi" }),
        /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mt-4", children: "Hai trovato utile il blog? Scopri le soluzioni che proponiamo per aziende, professionisti e attività locali." }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/siti-web-aziendali",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Siti web aziendali" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/siti-web-per-professionisti",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Siti web per professionisti" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/quanto-costa-sito-web",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Quanto costa un sito web" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/realizzazione-siti-web-padova",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: "Realizzazione siti web Padova" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" })
              ]
            }
          ) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Blog as default
};
