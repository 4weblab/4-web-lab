import { j as jsxDEV, H as Header, A as AnimatedSection, F as Footer, b as Fragment } from "../main.mjs";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BkDQN2zA.js";
import { g as blogSiteVsSocial } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
import "react";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const introParagraphs = [
  "Molte attività oggi si fanno sempre la stessa domanda: serve davvero un sito web o bastano i social?",
  "Facebook, Instagram e le altre piattaforme hanno reso molto più semplice essere presenti online. In pochi minuti è possibile creare una pagina, pubblicare contenuti e iniziare a farsi vedere.",
  "Per questo motivo, sempre più aziende decidono di fermarsi lì. Nessun sito, nessuna struttura, solo social.",
  "La logica sembra funzionare: se i clienti sono sui social, perché complicarsi la vita?",
  "Il punto è che questa scelta, nel lungo periodo, può diventare un limite molto più grande di quanto sembri."
];
const linkClass = "text-accent font-medium hover:underline";
const sections = [
  {
    title: "Perché i social sembrano sufficienti",
    paragraphs: [
      "All’inizio, i social danno una sensazione di controllo e immediatezza. Pubblichi un contenuto e qualcuno lo vede. Ricevi like, commenti, magari qualche messaggio.",
      "Sembra che tutto funzioni.",
      "In realtà, quello che stai vedendo è solo una parte del quadro.",
      "La visibilità sui social non è mai completamente tua. Dipende da algoritmi, da dinamiche che cambiano continuamente e da una competizione sempre più alta.",
      "Questo significa che anche se lavori bene, non hai la certezza di essere visto."
    ]
  },
  {
    title: "Il limite principale dei social: non sono tuoi",
    paragraphs: [
      "C’è un aspetto che spesso viene sottovalutato.",
      "Un profilo social non è una proprietà. È uno spazio che utilizzi, ma che non controlli davvero.",
      "Se una piattaforma cambia le regole, riduce la visibilità o semplicemente evolve, sei costretto ad adattarti.",
      "Non puoi decidere come verranno mostrati i tuoi contenuti. Non puoi costruire un percorso preciso per chi visita la tua pagina.",
      "Puoi solo pubblicare e sperare che venga visto."
    ]
  },
  {
    title: "Il problema della visibilità su Google",
    paragraphs: [
      "Un altro limite importante riguarda la ricerca.",
      "Quando una persona cerca su Google un servizio, un prodotto o una soluzione, raramente trova un profilo social tra i primi risultati.",
      "Trova siti web.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "Questo significa che, senza un sito, stai rinunciando a una parte enorme di visibilità. Non intercetti chi sta cercando attivamente quello che fai. Se vuoi capire meglio il fenomeno,",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: linkClass, children: "abbiamo dedicato una guida intera a perché un sito non compare su Google" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, void 0),
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "E questa è una differenza sostanziale: oltre al posizionamento organico, il sito è anche la destinazione naturale di",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: linkClass, children: "campagne Google ADS" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, void 0),
        ", canale che i social semplicemente non offrono nello stesso modo."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 64,
        columnNumber: 7
      }, void 0)
    ]
  },
  {
    title: "Cosa cambia davvero con un sito web",
    paragraphs: [
      "Un sito web funziona in modo completamente diverso.",
      "Non è una sequenza di contenuti come un social, ma una struttura pensata per guidare l’utente.",
      "Puoi spiegare chi sei, cosa fai, come lavori. Puoi organizzare le informazioni, costruire fiducia e accompagnare chi visita verso un’azione concreta.",
      "E soprattutto, è tuo.",
      "Non dipende da algoritmi esterni. Non cambia da un giorno all’altro senza il tuo controllo."
    ]
  },
  {
    title: "Attenzione: non è una scelta tra sito e social",
    paragraphs: [
      "Qui nasce uno degli errori più comuni.",
      "Non si tratta di scegliere tra sito web e social. Non sono alternative.",
      "Sono strumenti diversi, con funzioni diverse.",
      "I social servono per attirare attenzione, creare relazione, rimanere presenti.",
      "Il sito serve per trasformare quell’attenzione in qualcosa di concreto: un contatto, una richiesta, un cliente.",
      "Quando usi solo i social, stai facendo metà del lavoro."
    ]
  },
  {
    title: "Quando i social iniziano a non bastare",
    paragraphs: [
      "All’inizio possono sembrare più che sufficienti. Ma c’è un momento in cui iniziano a mostrare i loro limiti.",
      "Succede quando vuoi crescere davvero.",
      "Quando vuoi acquisire clienti in modo più costante. Quando vuoi essere percepito come professionale. Quando inizi a competere con altre attività che hanno una presenza online più strutturata.",
      /* @__PURE__ */ jsxDEV(Fragment, { children: [
        "In quel momento, il sito web non è più un optional. Diventa uno strumento necessario — e la domanda diventa solo una:",
        " ",
        /* @__PURE__ */ jsxDEV(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: linkClass, children: "quanto costa davvero un sito web fatto bene" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, void 0),
        "?"
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, void 0)
    ]
  },
  {
    title: "Conclusione",
    paragraphs: [
      "I social network sono strumenti potenti, ma non possono sostituire un sito web.",
      "Affidarsi solo ai social significa costruire la propria presenza online su qualcosa che non controlli completamente.",
      "Un sito web, invece, è una base solida. Ti permette di essere trovato, di spiegarti meglio e di guidare chi arriva verso una decisione.",
      "Se vuoi ottenere risultati concreti, non è una questione di scegliere tra sito e social.",
      "È capire come usarli insieme nel modo giusto."
    ]
  }
];
const BlogSiteVsSocialArticle = () => {
  const pageTitle = "Sito web o social? Cosa conviene davvero nel 2026";
  const pageDescription = "Meglio un sito web o i social per la tua attività? Scopri differenze, vantaggi e quale scelta porta davvero clienti nel 2026.";
  const pageUrl = "https://4weblab.it/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026";
  const pageImage = `https://4weblab.it${blogSiteVsSocial}`;
  const articleData = getArticleBySlug("sito-web-o-social-cosa-conviene-davvero-nel-2026");
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-03-15";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-03-15";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Strategia digitale";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 580);
  const headline = "Sito web o social network: cosa conviene davvero per un’attività nel 2026?";
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 141,
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
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "article" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 157,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 159,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:published_time", content: datePublished }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:modified_time", content: dateModified }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 161,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:author", content: "Carlo Fullin" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "article:section", content: articleSection }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: pageUrl }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: pageTitle }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: pageDescription }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: pageImage }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 168,
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
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 169,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
      lineNumber: 195,
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
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 199,
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
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 203,
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
                { label: "Sito web o social: cosa conviene" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
              lineNumber: 209,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 216,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "heading-1 mt-6 text-primary-foreground text-balance", children: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
                lineNumber: 224,
                columnNumber: 19
              }, void 0),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
              lineNumber: 223,
              columnNumber: 17
            }, void 0),
            dateModified !== datePublished ? /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
                lineNumber: 229,
                columnNumber: 21
              }, void 0),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
              lineNumber: 228,
              columnNumber: 19
            }, void 0) : null,
            /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", children: "·" }, void 0, false, {
              fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
              lineNumber: 233,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }, void 0, false, {
                fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
                lineNumber: 235,
                columnNumber: 19
              }, void 0),
              readingTime,
              " min di lettura"
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
              lineNumber: 234,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 222,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 208,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 207,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 198,
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
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 249,
          columnNumber: 21
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 247,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 246,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 245,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 244,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: sections.map((section, index) => /* @__PURE__ */ jsxDEV(AnimatedSection, { delay: index * 0.04, children: /* @__PURE__ */ jsxDEV("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 268,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-3 text-foreground", children: section.title }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 269,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsxDEV("p", { children: paragraph }, pIndex, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 272,
          columnNumber: 25
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 270,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 267,
        columnNumber: 19
      }, void 0) }, section.title, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 266,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 264,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 263,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(RelatedArticles, { currentSlug: "sito-web-o-social-cosa-conviene-davvero-nel-2026" }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 282,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 287,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Vuoi capire cosa serve davvero alla tua attività?" }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 288,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "body-large mt-5 text-muted-foreground", children: "Raccontaci cosa fai e ti aiutiamo a capire come strutturare la tua presenza online in modo efficace, senza perdere tempo e senza complicazioni inutili." }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 289,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
            lineNumber: 295,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 293,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
          lineNumber: 292,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 286,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 285,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
        lineNumber: 284,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/BlogSiteVsSocialArticle.tsx",
    lineNumber: 136,
    columnNumber: 5
  }, void 0);
};
export {
  BlogSiteVsSocialArticle as default
};
