import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { a as blogDiyWebsite } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Stai pensando di creare un sito web da solo?",
  "Magari hai cercato “come creare un sito web gratis” oppure hai visto che WordPress è indicato ovunque come la soluzione migliore.",
  "E in effetti, oggi mettere online un sito è facile.",
  "Il problema è un altro.",
  "Un sito web non serve a esistere, serve a portare clienti.",
  "Ed è qui che il fai-da-te, nella maggior parte dei casi, si trasforma in una perdita di tempo e di opportunità."
];
const BlogDiyWebsiteArticle = () => {
  const slug = "creare-sito-web-da-soli-conviene";
  const pageTitle = "Creare sito web da soli: conviene davvero nel 2026?";
  const pageDescription = "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogDiyWebsite}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-05-03";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-05-03";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Strategia digitale";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 720);
  const headline = "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 41,
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
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 68,
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
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
      lineNumber: 95,
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
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 99,
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
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 103,
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
                { label: "Creare sito web da soli" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 109,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 116,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: headline }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                lineNumber: 129,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                lineNumber: 135,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-intro-section", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12", children: /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-base leading-8 text-foreground md:text-lg", children: introParagraphs.map((paragraph, index) => /* @__PURE__ */ jsxDEV(
        "p",
        {
          className: index === 4 ? "font-semibold text-foreground" : "text-foreground/90",
          children: paragraph
        },
        paragraph,
        false,
        {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 149,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 146,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Creare un sito web da soli è davvero così semplice?" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Piattaforme come WordPress, builder visuali e",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                  className: "text-accent font-medium hover:underline",
                  children: "strumenti automatici basati sull'intelligenza artificiale"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                  lineNumber: 172,
                  columnNumber: 23
                },
                void 0
              ),
              " ",
              "promettono semplicità."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E in parte è vero." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 180,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Con pochi click puoi avere un sito online, con un design accettabile e qualche pagina pronta." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 181,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Il punto è che questo è solo l'inizio." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 182,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito web non è solo una grafica, ma un insieme di elementi che devono funzionare insieme: velocità, struttura, contenuti, chiarezza." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E senza esperienza, questi aspetti vengono quasi sempre trascurati." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 187,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 166,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 194,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Il problema nascosto di WordPress e dei siti fai-da-te" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 195,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "WordPress è uno strumento potente." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 197,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma proprio per questo non è automatico." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Senza sapere come configurarlo correttamente, il risultato è spesso un sito lento, pieno di plugin inutili, difficile da gestire e vulnerabile dal punto di vista della sicurezza." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 199,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Il problema non è lo strumento, ma l'utilizzo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 203,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito fatto senza criterio può sembrare funzionante, ma sotto è fragile." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E questo, prima o poi, si paga." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 205,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 196,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 212,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Perché un sito fai-da-te spesso non porta clienti" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 213,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Qui sta il punto centrale." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 215,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Molti riescono a creare un sito." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 216,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Pochi riescono a creare un sito che funziona." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Senza una struttura pensata per il cliente, il sito diventa un insieme di informazioni senza direzione. Non a caso, è la stessa logica che vale quando ci si chiede",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "se conviene un sito web o i social network"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                  lineNumber: 221,
                  columnNumber: 23
                },
                void 0
              ),
              ": ciò che fa la differenza è la strategia, non lo strumento."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 218,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "L'utente entra, guarda e se ne va." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 229,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Non perché il sito sia brutto, ma perché non è progettato per guidarlo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E senza azione, non ci sono risultati." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 231,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 214,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 238,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Il “buco nero” di Google" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 239,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Uno degli errori più comuni è pensare che basti avere un sito per comparire su Google." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 241,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "In realtà, se il sito non è strutturato nel modo giusto, non verrà trovato." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 242,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Google deve capire cosa fai, per chi lavori e perché dovrebbe mostrare proprio il tuo sito agli utenti che cercano i tuoi servizi." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 243,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se questi elementi non sono chiari, il sito resta invisibile." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 247,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "È come aprire un negozio perfetto in mezzo a un bosco. In questi casi, una strada veloce per essere trovati è affiancare al sito",
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-accent font-medium hover:underline", children: "campagne Google ADS mirate" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                lineNumber: 251,
                columnNumber: 23
              }, void 0),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 240,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 237,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 262,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Il falso mito del risparmio" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Creare un sito web da soli sembra una scelta economica." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 265,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma raramente lo è." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 266,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Il tempo speso a capire come funziona tutto, risolvere problemi e sistemare errori ha un costo reale. A questo si aggiungono eventuali correzioni future, clienti persi e opportunità mancate." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 267,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Se vuoi avere un'idea più precisa di cosa incide davvero sul prezzo, abbiamo raccolto tutto nella nostra guida ai",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/quanto-costa-un-sito-web-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "costi reali di un sito web nel 2026"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
                  lineNumber: 274,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 271,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito che non porta risultati non è un risparmio." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 282,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "È un costo nascosto." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 283,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 264,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 260,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 290,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Quando ha senso fare un sito da soli" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 291,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Non è sempre una scelta sbagliata." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Può avere senso se vuoi fare esperienza, se stai testando un'idea o se non hai obiettivi commerciali immediati." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 294,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma nel momento in cui il sito deve lavorare per te, il discorso cambia." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 298,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 292,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 289,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 288,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.24, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 305,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Conclusione" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 306,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Creare un sito web da soli oggi è possibile." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 308,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Ma creare un sito che funzioni davvero richiede qualcosa in più." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 309,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Struttura, strategia e chiarezza fanno la differenza tra un sito che esiste e un sito che porta clienti." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 310,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E nel digitale, questa differenza è tutto." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
              lineNumber: 314,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 307,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 304,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 303,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: slug }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 322,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 327,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Vuoi capire se il tuo sito può funzionare davvero?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 328,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Se hai già provato a creare un sito da solo o stai pensando di farlo, possiamo aiutarti a capire cosa ha senso fare davvero per la tua attività." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 329,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una consulenza",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
            lineNumber: 336,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 334,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
        lineNumber: 324,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
      lineNumber: 344,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogDiyWebsiteArticle.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, void 0);
};
export {
  BlogDiyWebsiteArticle as default
};
