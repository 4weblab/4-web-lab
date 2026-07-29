import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { b as blogArubaHero, a as blogDiyWebsite, c as blogQuotePlatforms, d as blogNotFoundOnGoogle, e as blogOutdatedWebsite, f as blogGdprPrivacy, g as blogSiteVsSocial, h as blogAiWebsite, i as blogWebsiteCost } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
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
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "keywords", content: pageKeywords }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://4weblab.it/blog" }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 134,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 179,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl",
            style: { background: "hsl(var(--accent))" }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 185,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl",
            style: { background: "hsl(207 90% 70%)" }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 190,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-px",
            style: {
              background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)"
            }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 195,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxDEV(
            PageBreadcrumb,
            {
              className: "!mx-0 !justify-start",
              items: [
                { label: "Home", to: "/" },
                { label: "Blog" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 206,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, void 0),
            "Blog 4 Web Lab"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-primary-foreground text-balance", children: "Guide e consigli per creare un sito web che porta clienti" }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 217,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-6 text-primary-foreground/80 max-w-2xl", children: "Articoli pratici su costi, SEO, GDPR e intelligenza artificiale per aziende, professionisti e attività locali a Padova e in tutta Italia." }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 220,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "mt-3 text-primary-foreground/65 text-sm max-w-2xl", children: [
            "Vedi anche le nostre ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni e concept di siti web" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 225,
              columnNumber: 38
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 224,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
            "Richiedi una consulenza",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 205,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 183,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "pt-16 md:pt-20 pb-20 md:pb-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "section-divider !mx-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 241,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Il blog di 4 Web Lab: contenuti utili per scegliere bene" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-4 body-base text-muted-foreground", children: [
          /* @__PURE__ */ jsxDEV("p", { children: [
            "Nel blog di ",
            /* @__PURE__ */ jsxDEV("strong", { children: "4 Web Lab" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 247,
              columnNumber: 31
            }, void 0),
            " raccogliamo guide pratiche, casi reali e approfondimenti tecnici pensati per chi sta valutando di",
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "realizzare un sito web" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 249,
              columnNumber: 19
            }, void 0),
            " o rifare quello esistente. Niente teoria astratta: solo consigli operativi nati dal lavoro quotidiano della nostra ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "agenzia web di Padova" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 251,
              columnNumber: 26
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "Trovi articoli dedicati a ",
            /* @__PURE__ */ jsxDEV("strong", { children: "costi reali di un sito web" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 254,
              columnNumber: 45
            }, void 0),
            ", scelte tecniche, ",
            /* @__PURE__ */ jsxDEV("strong", { children: "SEO locale" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 255,
              columnNumber: 36
            }, void 0),
            ", conformità",
            " ",
            /* @__PURE__ */ jsxDEV("strong", { children: "GDPR" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 256,
              columnNumber: 19
            }, void 0),
            ", cookie e privacy, oltre a guide sull'uso dell'",
            /* @__PURE__ */ jsxDEV("strong", { children: "intelligenza artificiale" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 257,
              columnNumber: 24
            }, void 0),
            " nella creazione di siti. Ogni contenuto è pensato per aziende, ",
            /* @__PURE__ */ jsxDEV("strong", { children: "professionisti" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 258,
              columnNumber: 57
            }, void 0),
            " ",
            "(avvocati, commercialisti, medici), negozi e attività locali che vogliono capire come ottenere risultati concreti dal proprio sito."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 253,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: [
            "Se preferisci parlarne direttamente con noi,",
            " ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "text-accent font-medium hover:underline", children: "richiedi una valutazione gratuita" }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 264,
              columnNumber: 19
            }, void 0),
            ": analizziamo insieme la tua situazione e ti diciamo, senza giri di parole, cosa conviene fare."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 262,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 245,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 240,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 239,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 238,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "section",
        {
          className: "section-padding",
          style: { background: "var(--gradient-surface)" },
          children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: [
            /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-2xl mb-12 md:mb-16", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "section-divider !mx-0" }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 282,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Ultime guide e approfondimenti" }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 283,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "body-base text-muted-foreground mt-4", children: "Articoli aggiornati su siti web, SEO, costi, GDPR e intelligenza artificiale per aiutarti a fare scelte consapevoli." }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 284,
                columnNumber: 15
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 281,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: articles.map((article) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV("article", { className: "group h-full overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] hover:border-accent/30 flex flex-col", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "relative overflow-hidden aspect-[16/10] bg-muted", children: /* @__PURE__ */ jsxDEV(
                "img",
                {
                  src: article.image,
                  alt: article.alt,
                  width: 1024,
                  height: 640,
                  loading: "lazy",
                  className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 295,
                  columnNumber: 23
                },
                void 0
              ) }, void 0, false, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 294,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col flex-1 p-6 md:p-8", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-xl md:text-2xl font-semibold leading-snug text-foreground", children: article.title }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 305,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "body-base text-muted-foreground mt-3 line-clamp-2", children: article.description }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "mt-6 pt-4 border-t border-border/50", children: /* @__PURE__ */ jsxDEV(
                  Link,
                  {
                    to: article.slug,
                    className: "inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all",
                    children: [
                      "Leggi di più",
                      /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                        fileName: "/dev-server/src/pages/Blog.tsx",
                        lineNumber: 317,
                        columnNumber: 27
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/Blog.tsx",
                    lineNumber: 312,
                    columnNumber: 25
                  },
                  void 0
                ) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 311,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Blog.tsx",
                lineNumber: 304,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 293,
              columnNumber: 19
            }, void 0) }, article.title, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 292,
              columnNumber: 17
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 290,
              columnNumber: 13
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 280,
            columnNumber: 11
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 276,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "section-divider mx-auto" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 332,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Esplora i nostri servizi" }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-base text-muted-foreground mt-4", children: "Hai trovato utile il blog? Scopri le soluzioni che proponiamo per aziende, professionisti e attività locali." }, void 0, false, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 334,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/siti-web-aziendali",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "Siti web aziendali" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 344,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 345,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 340,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 339,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/siti-web-per-professionisti",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "Siti web per professionisti" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 353,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 354,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 349,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 348,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/quanto-costa-sito-web",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "Quanto costa un sito web" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 362,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 363,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 358,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 357,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/realizzazione-siti-web-padova",
              className: "group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]",
              children: [
                /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-foreground", children: "Realizzazione siti web Padova" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 371,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 text-accent transition-transform group-hover:translate-x-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Blog.tsx",
                  lineNumber: 372,
                  columnNumber: 21
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/Blog.tsx",
              lineNumber: 367,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/pages/Blog.tsx",
            lineNumber: 366,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Blog.tsx",
          lineNumber: 338,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 331,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 330,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Blog.tsx",
        lineNumber: 329,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 181,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Blog.tsx",
      lineNumber: 381,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Blog.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, void 0);
};
export {
  Blog as default
};
