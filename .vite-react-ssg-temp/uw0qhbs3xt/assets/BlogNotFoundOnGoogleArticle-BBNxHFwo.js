import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { d as blogNotFoundOnGoogle } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Ti è mai capitato di cercare su Google il servizio che offri e scoprire che, al posto tuo, compaiono sempre gli stessi concorrenti?",
  "Magari attività meno preparate della tua, ma online sembrano molto più presenti e organizzate.",
  "Non è fortuna, e non è nemmeno “magia”.",
  "Il punto è semplice: oggi, se non sei visibile su Google, per il cliente non esisti.",
  "È come avere un negozio perfetto, ma aperto in una strada dove non passa nessuno."
];
const BlogNotFoundOnGoogleArticle = () => {
  const slug = "perche-il-tuo-sito-non-si-trova-su-google";
  const pageTitle = "Perché il tuo sito non si trova su Google (soluzioni 2026)";
  const pageDescription = "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogNotFoundOnGoogle}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-04-24";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-04-24";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "SEO & Visibilità";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 600);
  const headline = "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
                { label: "Perché il tuo sito non si trova su Google" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 108,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                lineNumber: 123,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 122,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 127,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 132,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                lineNumber: 134,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
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
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 148,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 146,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 145,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 166,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Hai un sito ma non compare su Google" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 167,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Molti imprenditori pensano che basti avere un sito per ricevere contatti." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "In realtà, un sito senza posizionamento è invisibile." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se Google non capisce cosa fai e a chi ti rivolgi, non può mostrarti nei risultati di ricerca." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "E questo significa finire nelle pagine che nessuno guarda. Spesso il problema non è solo tecnico: è strutturale, ed è uno dei",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "segnali tipici di un sito ormai obsoleto"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                  lineNumber: 175,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 172,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Avere un sito è solo il primo passo. Il vero obiettivo è farsi trovare." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 183,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Per chi non può aspettare i tempi della SEO, una scorciatoia concreta è",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/pubblicita-google-ads",
                  className: "text-accent font-medium hover:underline",
                  children: "investire in pubblicità su Google ADS"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                  lineNumber: 186,
                  columnNumber: 23
                },
                void 0
              ),
              " ",
              "e iniziare a comparire da subito sopra ai risultati organici."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 184,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 165,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 164,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 200,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Le persone cercano servizi, non il nome della tua attività" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 201,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "A meno che tu non sia già conosciuto, nessuno cercherà il nome della tua azienda su Google." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 203,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Le persone cercano soluzioni ai loro problemi." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 204,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Chi ha bisogno di un servizio scrive frasi semplici e dirette, spesso legate alla propria zona — pensa ad esempio a chi cerca un'",
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "agenzia web a Padova" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                lineNumber: 208,
                columnNumber: 23
              }, void 0),
              " ",
              "invece del nome di uno studio specifico."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 205,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se il tuo sito non contiene queste ricerche reali, Google non ha modo di collegarti a chi sta cercando proprio quello che fai." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 213,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E di conseguenza, non ti mostrerà." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 217,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 202,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 199,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 198,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 224,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Google Maps: dove nascono molti contatti" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 225,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Quando una persona cerca un servizio locale, molto spesso la prima cosa che vede è la mappa con le attività nella zona." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 227,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Quella è una delle principali fonti di contatto oggi." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 231,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se non sei presente o se la tua scheda non è curata, stai lasciando spazio diretto ai tuoi concorrenti." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 232,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Sito web e presenza su Google Maps devono lavorare insieme." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 236,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se uno dei due è trascurato, perdi visibilità." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 237,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 226,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 244,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Se il sito è lento, gli utenti se ne vanno" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 245,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "La velocità è uno dei fattori più sottovalutati." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 247,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se una pagina impiega troppo a caricarsi, l'utente non aspetta." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Chiude e passa al sito successivo." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 249,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Google osserva questo comportamento e lo usa per capire se il tuo sito è valido oppure no." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Un sito lento non solo fa scappare le persone, ma scende anche nei risultati di ricerca. È anche per questo che ha senso",
              " ",
              /* @__PURE__ */ jsxDEV(Link, { to: "/quanto-costa-sito-web", className: "text-accent font-medium hover:underline", children: "investire in un sito ben fatto" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                lineNumber: 254,
                columnNumber: 23
              }, void 0),
              ", invece di ripiegare su soluzioni improvvisate."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 251,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 246,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 243,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 265,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Un sito fatto “da solo” spesso non basta" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 266,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: [
              "Oggi esistono molti strumenti per creare un sito in autonomia, compresi i generatori basati su",
              " ",
              /* @__PURE__ */ jsxDEV(
                Link,
                {
                  to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                  className: "text-accent font-medium hover:underline",
                  children: "intelligenza artificiale"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
                  lineNumber: 270,
                  columnNumber: 23
                },
                void 0
              ),
              "."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 268,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Il problema è che un sito non deve solo essere online, deve funzionare." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 278,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Deve essere strutturato per essere capito da Google e per guidare l'utente verso un'azione." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 279,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Un sito fatto senza strategia può anche essere bello, ma se non porta contatti, non serve." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 282,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E il tempo investito diventa tempo perso." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 283,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 267,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 264,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 263,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 290,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: "Conclusione" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 291,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "Essere su Google non è questione di fortuna." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 293,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "È una questione di struttura, chiarezza e strategia." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 294,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Se il tuo sito oggi non si trova, non significa che non funzioni il tuo lavoro." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 295,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "Significa semplicemente che non è stato costruito per essere trovato." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 298,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "E nel digitale, chi non si vede, lascia spazio agli altri." }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 292,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 289,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 288,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: slug }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 307,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 312,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Vuoi capire perché il tuo sito non compare su Google?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 313,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Possiamo analizzare il tuo sito e dirti in modo chiaro cosa non sta funzionando e cosa migliorare per iniziare a farti trovare davvero." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 314,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
            lineNumber: 321,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 319,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
          lineNumber: 318,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 311,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 310,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
        lineNumber: 309,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
      lineNumber: 329,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogNotFoundOnGoogleArticle.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, void 0);
};
export {
  BlogNotFoundOnGoogleArticle as default
};
