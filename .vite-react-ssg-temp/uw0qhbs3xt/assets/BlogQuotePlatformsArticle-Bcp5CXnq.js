import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { c as blogQuotePlatforms } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Hai bisogno di un sito web, fai una ricerca su Google e tra i primi risultati trovi piattaforme che promettono preventivi rapidi in pochi minuti.",
  "Servizi come ProntoPro, Cronoshare o portali simili funzionano proprio così: inserisci la richiesta e ricevi diverse proposte da professionisti.",
  "All'apparenza sembra la soluzione ideale. Veloce, comoda, senza impegno.",
  "Il problema è che questo modello, nella maggior parte dei casi, non è progettato per farti ottenere risultati, ma per generare volume di contatti.",
  "E quando si parla di un sito web, questo fa tutta la differenza."
];
const BlogQuotePlatformsArticle = () => {
  const slug = "siti-web-piattaforme-preventivi-online-conviene";
  const pageTitle = "Siti web piattaforme preventivi: conviene o è un errore?";
  const pageDescription = "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogQuotePlatforms}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-05-02";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-05-02";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Strategia digitale";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 720);
  const headline = "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://4weblab.it/blog" },
          { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl }
        ]
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline,
        description: pageDescription,
        image: [pageImage],
        inLanguage: "it-IT",
        articleSection,
        author: {
          "@type": "Person",
          name: "Carlo Fullin",
          url: "https://4weblab.it/"
        },
        publisher: { "@id": "https://4weblab.it/#business" },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl
        },
        url: pageUrl,
        datePublished,
        dateModified
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-[110px]"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 102,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-4xl text-center", children: [
          /* @__PURE__ */ jsxDEV(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: "Piattaforme di preventivi online" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 108,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: headline }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                lineNumber: 123,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                lineNumber: 134,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-intro-section", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-base leading-8 text-foreground md:text-lg", children: introParagraphs.map((paragraph, index) => /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: index === 3 ? "font-semibold text-foreground" : "text-foreground/90",
          children: paragraph
        },
        paragraph,
        false,
        {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 148,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 166,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Come funzionano davvero queste piattaforme" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Il meccanismo è semplice." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "I professionisti pagano per avere la possibilità di contattarti." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Non per lavorare con te, ma per poter inviare una proposta." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Questo cambia completamente la dinamica." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Chi risponde non è necessariamente il più adatto al tuo progetto, ma chi è disposto a investire per ottenere accesso al contatto." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 173,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E questo ha un impatto diretto sulla qualità del risultato finale." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 177,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 165,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 184,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Il problema dei preventivi veloci" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 185,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Ricevere più preventivi in poco tempo può sembrare un vantaggio." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 187,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "In realtà, spesso porta nella direzione opposta." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 188,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Quando il contatto ha un costo, il professionista deve recuperare rapidamente quell'investimento." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 189,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Questo riduce lo spazio per analisi, strategia e comprensione reale delle esigenze." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 192,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Il risultato è un approccio standardizzato, dove il sito diventa un prodotto da consegnare, non uno strumento costruito per funzionare." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 186,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 183,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 182,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 205,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Perché i prezzi bassi spesso costano di più" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 206,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Uno degli elementi più attrattivi è il prezzo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 208,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Molte offerte risultano più basse rispetto a quelle di professionisti che lavorano direttamente con il cliente." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 209,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma c'è un motivo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 213,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Per mantenere margine, il tempo dedicato al progetto deve essere ridotto." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 214,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "E questo si riflette su tutto: dalla struttura del sito alla qualità tecnica, fino alla capacità di portare risultati. Se vuoi capire cosa incide davvero sul prezzo, abbiamo raccolto tutto in una guida dedicata a",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/quanto-costa-un-sito-web-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "quanto costa un sito web nel 2026"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                  lineNumber: 219,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 215,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito economico che non porta clienti non è un risparmio." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 227,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "È un costo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 228,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 207,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 204,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 203,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 235,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Il problema invisibile: tecnica, SEO e performance" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 236,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito web non è solo quello che si vede." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 238,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Gran parte del suo valore sta nella struttura tecnica." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 239,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Velocità di caricamento, organizzazione dei contenuti, capacità di essere compreso da Google." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 240,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Quando questi aspetti vengono trascurati, il sito diventa invisibile: è uno dei motivi principali per cui",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
                  className: "text-accent font-medium hover:underline",
                  children: "molti siti non si trovano su Google"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                  lineNumber: 246,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Può essere online, funzionante, anche gradevole." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 254,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Ma se non viene trovato e non converte, non serve: per accelerare l'arrivo di richieste reali è spesso più efficace investire in",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/pubblicita-google-ads",
                  className: "text-accent font-medium hover:underline",
                  children: "campagne Google ADS gestite con criterio"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                  lineNumber: 258,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 255,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 237,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 234,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 233,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 272,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Cosa succede dopo la consegna" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 273,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Un altro punto critico emerge nel tempo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 275,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Chi lavora su grandi volumi tende a concentrarsi sulla consegna, non sulla continuità." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 276,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Questo significa che, una volta pubblicato il sito, spesso manca supporto, aggiornamento ed evoluzione del progetto." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 277,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E quando qualcosa non funziona, devi rivolgerti a qualcun altro per sistemarlo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 281,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 274,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 271,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 270,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 288,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Quando queste piattaforme possono avere senso" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 289,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Non sono sempre la scelta sbagliata." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 291,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Possono avere senso in situazioni molto specifiche." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 292,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ad esempio quando hai bisogno di qualcosa di estremamente semplice, senza particolari obiettivi di crescita." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Oppure quando vuoi testare rapidamente un'idea senza investire troppo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 297,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma se il sito deve diventare uno strumento di lavoro, i limiti emergono rapidamente." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 298,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 290,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.24, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 305,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "La differenza tra avere un sito e avere uno strumento che funziona" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 306,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Qui sta il punto centrale." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 310,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Un sito web può essere semplicemente una presenza online, oppure uno strumento che genera contatti e opportunità — è la stessa logica che applichiamo nella",
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "realizzazione di siti a Padova" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
                lineNumber: 314,
                columnNumber: 23
              }, void 0),
              ", dove ogni progetto parte da un obiettivo di business chiaro."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 311,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Nel primo caso, quasi qualsiasi soluzione può bastare." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 319,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Nel secondo, serve progettazione, analisi e una visione chiara." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 320,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "La differenza non è nel codice, ma nel modo in cui il sito viene pensato." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 321,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 309,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 304,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.28, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 328,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Conclusione" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 329,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Le piattaforme di preventivi online offrono velocità e semplicità." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 331,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma queste caratteristiche hanno un prezzo che spesso non è immediatamente visibile." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 332,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se l'obiettivo è avere solo un sito online, possono essere sufficienti." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 333,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se invece vuoi un sito che lavori per te, che porti clienti e che cresca nel tempo, serve un approccio diverso." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 334,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E soprattutto, serve qualcuno che lavori con te, non semplicemente per te." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
              lineNumber: 338,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 330,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 327,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 326,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: slug }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 346,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 351,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Vuoi un sito che porti davvero risultati?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 352,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Se stai valutando come realizzare il tuo sito web, possiamo aiutarti a capire quale soluzione ha davvero senso per la tua attività, senza perdere tempo e senza investimenti inutili." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 353,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una consulenza",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
            lineNumber: 360,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 358,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
          lineNumber: 357,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 350,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 349,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
        lineNumber: 348,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
      lineNumber: 368,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogQuotePlatformsArticle.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0);
};
export {
  BlogQuotePlatformsArticle as default
};
