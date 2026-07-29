import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { e as blogOutdatedWebsite } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Nel 2026 la differenza tra un sito web che porta clienti e uno che resta fermo a fare da semplice vetrina è diventata molto evidente.",
  "Molte attività hanno ancora un sito online, ma questo non significa che stia funzionando.",
  "Anzi, in molti casi il sito è proprio il punto debole della presenza digitale: lento, poco chiaro, difficile da usare o semplicemente poco credibile.",
  "Il problema è che questi segnali non sono sempre evidenti a chi lo gestisce, ma lo sono eccome per chi lo visita.",
  "Se ti riconosci anche solo in uno di questi casi, è probabile che tu stia perdendo opportunità senza accorgertene."
];
const linkClass = "text-accent font-medium hover:underline";
const sections = [
  {
    title: "Il sito è lento: quando pochi secondi fanno la differenza",
    paragraphs: [
      "Uno dei segnali più chiari di un sito obsoleto è la velocità.",
      "O meglio, la mancanza di velocità.",
      "Se una pagina impiega più di qualche secondo per caricarsi, l’utente semplicemente se ne va. Non aspetta, non torna indietro, non ci pensa due volte.",
      "Questo succede ancora più spesso da smartphone, dove la connessione e la pazienza sono ancora più limitate.",
      "Un sito lento non è solo fastidioso: trasmette anche una sensazione di scarsa professionalità.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "E nel frattempo, Google lo penalizza: uno dei motivi principali per cui",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: linkClass, children: "molti siti finiscono per non comparire mai nei risultati di ricerca" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, void 0)
    ]
  },
  {
    title: "Non si trova su Google (e oggi nemmeno nelle ricerche AI)",
    paragraphs: [
      "Un altro segnale evidente è l’invisibilità.",
      "Se il tuo sito non compare quando qualcuno cerca i tuoi servizi, per il mercato è come se non esistesse.",
      "Nel 2026 questo problema si è ampliato: non si tratta più solo di comparire su Google, ma anche di essere presenti nelle risposte generate dall’intelligenza artificiale.",
      "I siti con contenuti generici, senza struttura e senza chiarezza, vengono semplicemente ignorati.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "E questo significa perdere una quantità enorme di traffico potenziale, sia organico sia da",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: linkClass, children: "campagne Google ADS" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 55,
          columnNumber: 9
        }, void 0),
        ", che su un sito obsoleto rendono molto meno."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, void 0)
    ]
  },
  {
    title: "Su smartphone è difficile da usare",
    paragraphs: [
      "Oggi la maggior parte delle persone visita i siti da telefono.",
      "Eppure, molti siti sono ancora progettati come se il desktop fosse il centro di tutto.",
      "Il risultato è semplice: testi piccoli, pulsanti difficili da cliccare, menu complicati.",
      "Quando un utente deve fare fatica per capire o navigare, abbandona.",
      "E passa al sito successivo."
    ]
  },
  {
    title: "Non trasmette fiducia",
    paragraphs: [
      "Questo è uno dei punti più sottovalutati.",
      "Un sito può funzionare tecnicamente, ma risultare comunque debole.",
      "Foto generiche, contenuti vaghi, assenza di elementi reali dell’azienda: tutto questo crea distanza.",
      "Nel 2026, con la quantità di contenuti generati automaticamente, le persone cercano segnali umani.",
      "Vogliono capire chi c’è dietro.",
      "Se il tuo sito non comunica autenticità, difficilmente convincerà qualcuno a contattarti."
    ]
  },
  {
    title: "Non porta azioni concrete",
    paragraphs: [
      "Il segnale più importante è questo.",
      "Un sito moderno non deve solo informare, deve far fare qualcosa.",
      "Contattarti, prenotare, chiedere informazioni.",
      "Se l’utente entra, guarda e poi esce senza fare nulla, il problema non è il traffico.",
      "È il sito.",
      "Molti siti sono ancora pensati come brochure: spiegano, ma non guidano.",
      "E senza una direzione chiara, l’utente non agisce."
    ]
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Un sito web non è obsoleto perché è vecchio, ma perché non è più efficace.",
      "Può essere online, funzionare tecnicamente e avere anche un buon design.",
      "Ma se è lento, invisibile, difficile da usare o poco credibile, sta già facendo perdere opportunità.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "E nel digitale, le opportunità perse finiscono sempre a qualcun altro. Se stai pensando di rifarlo, vale la pena partire da",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: linkClass, children: "una panoramica chiara dei costi reali nel 2026" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, void 0)
    ]
  }
];
const BlogOutdatedWebsiteArticle = () => {
  const pageTitle = "Sito web obsoleto: 5 segnali che perdi clienti nel 2026";
  const pageDescription = "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.";
  const pageUrl = "https://4weblab.it/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026";
  const pageImage = `https://4weblab.it${blogOutdatedWebsite}`;
  const articleData = getArticleBySlug("sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026");
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-03-26";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-03-26";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Strategia digitale";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 560);
  const headline = "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 132,
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
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 144,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 145,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 148,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 151,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 159,
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
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
      lineNumber: 186,
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
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 190,
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
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 194,
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
                { label: "Sito web obsoleto: 5 segnali" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
              lineNumber: 200,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
              lineNumber: 214,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
                lineNumber: 220,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
              lineNumber: 219,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
                lineNumber: 226,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
              lineNumber: 225,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 213,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 189,
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
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 240,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 238,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 237,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 236,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 235,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: sections.map((section, index) => /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: index * 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 259,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: section.title }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 260,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsxDEV("p", { children: paragraph }, pIndex, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 263,
          columnNumber: 25
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 261,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 258,
        columnNumber: 19
      }, void 0) }, section.title, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 257,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 255,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 254,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 253,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 278,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Il tuo sito web sta davvero funzionando?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 279,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Se hai riconosciuto anche solo uno di questi segnali, è il momento di capire cosa non sta funzionando davvero." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 280,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-3 text-muted-foreground", children: "Possiamo analizzare il tuo sito e dirti in modo chiaro cosa migliorare, senza complicazioni inutili." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 283,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
            lineNumber: 289,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 287,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
          lineNumber: 286,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 277,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 276,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogOutdatedWebsiteArticle.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, void 0);
};
export {
  BlogOutdatedWebsiteArticle as default
};
