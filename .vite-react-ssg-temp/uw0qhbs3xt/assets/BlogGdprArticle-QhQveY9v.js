import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { f as blogGdprPrivacy } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Molte aziende sottovalutano ancora un aspetto fondamentale del proprio sito web: la conformità a GDPR, privacy e gestione dei cookie.",
  "Spesso il sito è online, funziona ed è anche curato dal punto di vista grafico. Ma sotto la superficie mancano elementi obbligatori che possono trasformarsi in un problema concreto.",
  "Nel 2026 non si tratta più solo di inserire un banner. La gestione dei dati degli utenti è diventata un tema centrale, sia per la normativa sia per la fiducia di chi visita il sito.",
  "E ignorarlo non è più una scelta neutra."
];
const linkClass = "text-accent font-medium hover:underline";
const sections = [
  {
    title: "GDPR siti web: quando è obbligatorio e perché devi adeguarti",
    paragraphs: [
      "Negli ultimi anni la normativa sulla protezione dei dati è diventata sempre più chiara e applicata.",
      "Un sito web, anche molto semplice, raccoglie informazioni: dati di contatto, comportamenti di navigazione, statistiche.",
      "Questo significa che ogni attività online ha una responsabilità diretta nella gestione dei dati degli utenti.",
      "Non è più una questione tecnica, ma una parte integrante della presenza online."
    ]
  },
  {
    title: "Cookie banner obbligatorio: cosa deve avere un sito nel 2026",
    paragraphs: [
      "Uno degli aspetti più sottovalutati riguarda proprio i cookie.",
      "Molti siti mostrano ancora banner generici, spesso non conformi.",
      "Nel 2026, un banner corretto deve permettere all’utente di scegliere davvero.",
      "Non basta informare: bisogna dare un consenso reale e bloccare i cookie non necessari finché l’utente non accetta.",
      "Questo è uno dei punti più controllati e anche uno dei più facili da sbagliare."
    ]
  },
  {
    title: "Errori GDPR siti web: cosa NON deve mancare per essere a norma",
    paragraphs: [
      "La maggior parte dei siti non è fuori norma per scelta, ma per superficialità.",
      "Spesso si trovano informative incomplete, testi copiati o sistemi di tracciamento attivi senza consenso.",
      "Sono dettagli che possono sembrare secondari, ma che fanno la differenza tra un sito corretto e uno potenzialmente problematico.",
      "Il punto è che questi errori sono molto più comuni di quanto si pensi."
    ]
  },
  {
    title: "GDPR sanzioni siti web: cosa rischi davvero",
    paragraphs: [
      "Il rischio non è solo teorico.",
      "Le sanzioni esistono e, in alcuni casi, possono essere significative.",
      "Ma il problema più immediato è un altro: la fiducia.",
      "Un utente che non percepisce attenzione alla privacy difficilmente lascerà i propri dati.",
      "E senza fiducia, un sito smette di funzionare davvero."
    ]
  },
  {
    title: "Privacy sito web: cosa deve avere per essere conforme al GDPR",
    paragraphs: [
      "Un sito web nel 2026 dovrebbe includere elementi chiari e ben configurati.",
      "Non si tratta di aggiungere documenti a caso, ma di costruire una struttura corretta.",
      "Una privacy policy aggiornata, una cookie policy coerente e un sistema di gestione del consenso funzionante sono ormai lo standard minimo.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "Quando questi elementi sono implementati correttamente, il sito risulta più affidabile anche agli occhi dell’utente — un dettaglio che fa la differenza soprattutto su un",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-aziendali", className: linkClass, children: "sito aziendale strutturato" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 75,
          columnNumber: 9
        }, void 0),
        ", dove ogni segnale di serietà conta."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, void 0)
    ]
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Molti vedono GDPR, cookie e privacy come un obbligo tecnico da risolvere velocemente.",
      "In realtà fanno parte di un sito web fatto bene.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "Ignorarli significa esporsi a rischi e trasmettere poca attenzione ai dettagli, lo stesso problema che si vede su tanti",
        " ",
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
            className: linkClass,
            children: "siti ormai datati che fanno perdere clienti ogni giorno"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 90,
            columnNumber: 9
          },
          void 0
        ),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 87,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "Gestirli correttamente, invece, significa costruire una presenza online più solida, più credibile e più professionale — una base indispensabile anche prima di investire in",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: linkClass, children: "campagne Google ADS" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 101,
          columnNumber: 9
        }, void 0),
        ", che richiedono un sito conforme per essere davvero efficaci."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 98,
        columnNumber: 7
      }, void 0)
    ]
  }
];
const BlogGdprArticle = () => {
  const pageTitle = "GDPR siti web 2026: obblighi, cookie e privacy";
  const pageDescription = "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.";
  const pageUrl = "https://4weblab.it/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy";
  const pageImage = `https://4weblab.it${blogGdprPrivacy}`;
  const articleData = getArticleBySlug("gdpr-siti-web-2026-obblighi-cookie-e-privacy");
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-04-20";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-04-20";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Privacy & Compliance";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 540);
  const headline = "GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 129,
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
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 156,
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
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
      lineNumber: 183,
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
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 187,
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
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 191,
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
                { label: "GDPR siti web 2026" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
              lineNumber: 197,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-primary-foreground text-balance", children: "GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
                lineNumber: 212,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
              lineNumber: 211,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
                lineNumber: 217,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
                lineNumber: 223,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
              lineNumber: 222,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 196,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 186,
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
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 237,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 235,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 234,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 233,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 232,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: sections.map((section, index) => /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: index * 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 256,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: section.title }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 257,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsxDEV("p", { children: paragraph }, pIndex, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 260,
          columnNumber: 25
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 258,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 255,
        columnNumber: 19
      }, void 0) }, section.title, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 254,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 252,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 251,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: "gdpr-siti-web-2026-obblighi-cookie-e-privacy" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 270,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 275,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Il tuo sito è davvero a norma GDPR?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 276,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Se hai dubbi su privacy, cookie o gestione dei dati, possiamo aiutarti a capire cosa manca e come sistemarlo in modo semplice e corretto." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 277,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
            lineNumber: 283,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 281,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 274,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 273,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
        lineNumber: 272,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogGdprArticle.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, void 0);
};
export {
  BlogGdprArticle as default
};
