import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Helmet, a as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BgZwHpsj.js";
import { i as blogWebsiteCost } from "./blog-aruba-supersite-DvMlriuU.js";
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
const introParagraphs = [
  "Nel 2026 una delle domande più frequenti per chi vuole creare un sito web è sempre la stessa:",
  "Quanto costa davvero un sito web?",
  "La risposta breve è: dipende.",
  "La risposta reale, invece, è più interessante.",
  "Oggi il prezzo di un sito web può variare da poche centinaia di euro fino a diverse migliaia, a seconda di come viene progettato, da chi viene realizzato e soprattutto da cosa deve fare.",
  "In questa guida vediamo i costi reali, cosa li influenza e quanto ha senso investire in base al tipo di attività."
];
const linkClass = "text-accent font-medium hover:underline";
const sections = [
  {
    title: "Da cosa dipende il costo di un sito web",
    paragraphs: [
      "Il prezzo di un sito web non è casuale. Dipende da diversi fattori concreti.",
      "Il primo è la struttura. Un sito semplice con poche pagine ha un costo molto diverso rispetto a un sito più articolato, con più sezioni e contenuti.",
      "Il secondo è il livello di personalizzazione. Template standard e soluzioni automatiche costano meno, mentre un sito progettato su misura richiede più lavoro.",
      "Un altro fattore è il contenuto. Testi scritti bene, immagini curate e una struttura pensata per l’utente fanno la differenza, ma incidono sul prezzo.",
      "Infine, c’è la strategia. Un sito creato solo per “esserci” costa meno rispetto a un sito progettato per portare contatti e clienti."
    ]
  },
  {
    title: "Quanto costa un sito web nel 2026 in Italia",
    paragraphs: [
      "Nel mercato italiano, i prezzi sono molto variabili.",
      "Un sito web può costare:"
    ],
    bullets: [
      "200–400€ per soluzioni molto basilari o fai-da-te",
      "500–1500€ per siti realizzati da freelance o piccole realtà",
      "1500€+ per progetti più strutturati o agenzie"
    ],
    closing: [
      "Queste cifre cambiano in base a qualità, struttura e obiettivi.",
      "Il problema è che spesso chi acquista non sa cosa sta realmente comprando."
    ]
  },
  {
    title: "I nostri prezzi: quanto costa un sito web in base alla tua attività",
    paragraphs: [
      "Per rendere le cose più chiare, è utile distinguere in base al tipo di attività."
    ],
    subSections: [
      {
        title: "Sito web per negozi",
        price: "199€",
        paragraphs: [
          "Un sito per negozi ha l’obiettivo principale di presentare prodotti, servizi e informazioni in modo chiaro e accessibile.",
          "È una soluzione pensata per avere una presenza online efficace, senza complicazioni inutili."
        ]
      },
      {
        title: "Sito web per professionisti",
        price: "549€",
        paragraphs: [
          "Per consulenti, liberi professionisti e attività individuali, il sito deve trasmettere fiducia e competenza.",
          "In questo caso, la struttura è orientata a valorizzare la persona e facilitare il contatto."
        ]
      },
      {
        title: "Sito web aziendale",
        price: "899€",
        paragraphs: [
          "Per aziende strutturate, il sito diventa uno strumento più completo: presentazione, servizi, posizionamento e acquisizione contatti.",
          "Il costo varia in base alla complessità del progetto e agli obiettivi."
        ]
      }
    ]
  },
  {
    title: "Perché alcuni siti costano molto di più",
    paragraphs: [
      "È normale trovare preventivi molto più alti rispetto a queste cifre.",
      "Questo succede perché entrano in gioco altri fattori:"
    ],
    bullets: [
      "sviluppo completamente su misura",
      "funzionalità avanzate",
      "integrazioni particolari",
      "team più grandi coinvolti nel progetto"
    ],
    closing: [
      "In alcuni casi è giustificato. In altri, si paga più del necessario rispetto ai reali bisogni dell’attività."
    ]
  },
  {
    title: "Quanto ha senso spendere davvero",
    paragraphs: [
      "La domanda giusta non è “quanto costa”, ma:",
      "Quanto ha senso investire per la mia attività?",
      "Se il sito serve solo come presenza base, non ha senso spendere cifre elevate.",
      "Se invece deve portare clienti, allora diventa un investimento e va progettato in modo più strategico.",
      "L’obiettivo deve essere sempre uno: ottenere un ritorno, non semplicemente avere un sito online."
    ]
  },
  {
    title: "Il rischio dei prezzi troppo bassi",
    paragraphs: [
      "Prezzi molto bassi possono sembrare vantaggiosi, ma spesso nascondono limiti importanti:"
    ],
    bullets: [
      "siti generici e poco curati",
      "nessuna strategia",
      "contenuti deboli",
      "scarsa efficacia nel generare contatti"
    ],
    closing: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Un sito economico che non porta risultati è, di fatto, un costo inutile. È lo stesso rischio che si corre con i",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: linkClass, children: "siti generati con intelligenza artificiale" }),
        ": sembrano un affare, ma spesso restano una vetrina vuota. Quando il budget invece c'è, ha più senso destinarlo a un sito ben fatto e a",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: linkClass, children: "campagne Google ADS gestite con criterio" }),
        "."
      ] })
    ]
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Nel 2026 creare un sito web è più accessibile che mai.",
      "Ma questo non significa che tutte le soluzioni siano uguali.",
      "Il costo giusto è quello che ti permette di avere un sito:"
    ],
    bullets: [
      "credibile",
      "chiaro",
      "utile per la tua attività"
    ],
    closing: [
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Senza spendere più del necessario, ma senza nemmeno scendere a compromessi che ti fanno perdere opportunità — gli stessi compromessi che, col tempo, trasformano un sito nuovo in uno di quei",
        " ",
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
            className: linkClass,
            children: "siti ormai obsoleti che fanno perdere clienti"
          }
        ),
        "."
      ] })
    ]
  }
];
const BlogWebsiteCostArticle = () => {
  const pageTitle = "Quanto costa un sito web nel 2026? Prezzi reali in Italia";
  const pageDescription = "Scopri quanto costa davvero un sito web nel 2026 per aziende, professionisti e negozi. Prezzi chiari e cosa aspettarti davvero.";
  const pageUrl = "https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026";
  const pageImage = `https://4weblab.it${blogWebsiteCost}`;
  const articleData = getArticleBySlug("quanto-costa-un-sito-web-nel-2026");
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-03-04";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-03-04";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Guide & Costi";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 620);
  const headline = "Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi";
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
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://4weblab.it/blog" },
          { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl }
        ]
      }) }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: pageImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: datePublished }),
      /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: dateModified }),
      /* @__PURE__ */ jsx("meta", { property: "article:author", content: "Carlo Fullin" }),
      /* @__PURE__ */ jsx("meta", { property: "article:section", content: articleSection }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: pageImage }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-[110px]"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-4xl text-center", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: "Quanto costa un sito web nel 2026" }
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: "Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
              "Pubblicato il ",
              formatItalianDate(datePublished)
            ] }),
            dateModified !== datePublished ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "·" }),
              "Aggiornato il ",
              formatItalianDate(dateModified)
            ] }) : null,
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "·" }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
              readingTime,
              " min di lettura"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "article-intro-section", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12", children: /* @__PURE__ */ jsx("div", { className: "space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: introParagraphs.map((paragraph, index) => /* @__PURE__ */ jsx(
        "p",
        {
          className: index === 1 || index === 3 ? "font-semibold text-foreground" : "text-foreground/90",
          children: paragraph
        },
        paragraph
      )) }) }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: sections.map((section, index) => {
        var _a;
        return /* @__PURE__ */ jsx(AnimatedSection, { delay: index * 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: section.title }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: (_a = section.paragraphs) == null ? void 0 : _a.map((paragraph, pIndex) => /* @__PURE__ */ jsx(
            "p",
            {
              className: typeof paragraph === "string" && paragraph.endsWith("?") ? "font-semibold text-foreground" : void 0,
              children: paragraph
            },
            pIndex
          )) }),
          section.bullets ? /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 border-l-2 border-accent/25 pl-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.bullets.map((item) => /* @__PURE__ */ jsx("li", { className: "list-disc marker:text-accent", children: item }, item)) }) : null,
          section.closing ? /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.closing.map((paragraph, cIndex) => /* @__PURE__ */ jsx("p", { children: paragraph }, cIndex)) }) : null,
          section.subSections ? /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-6 border-t border-border/50 pt-8", children: section.subSections.map((subSection) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-muted/35 p-5 md:p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground", children: subSection.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold uppercase tracking-wide text-accent", children: "Prezzo a partire da" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-3xl font-semibold text-foreground", children: subSection.price })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-4 text-base leading-8 text-foreground/85 md:text-lg", children: subSection.paragraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph)) })
          ] }, subSection.title)) }) : null
        ] }) }, section.title);
      }) }) }) }),
      /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "quanto-costa-un-sito-web-nel-2026" }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Vuoi capire quanto costa davvero il sito giusto per te?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large mt-5 text-muted-foreground", children: "Raccontaci la tua attività e ti facciamo una valutazione concreta, senza impegno." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  BlogWebsiteCostArticle as default
};
