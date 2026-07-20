import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { W, H as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Calendar, Clock, ZoomIn, ArrowRight, X } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BgZwHpsj.js";
import { b as blogArubaHero } from "./blog-aruba-supersite-DvMlriuU.js";
import "vite-react-ssg";
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
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const exampleFavesrl = "/assets/blog-aruba-example-favesrl-DFZj0k3v.webp";
const exampleImport = "/assets/blog-aruba-example-importirrigation-CIG1LwUH.webp";
const linkClass = "text-accent font-medium hover:underline";
const introParagraphs = [
  "Hai deciso che è arrivato il momento di creare un sito web per la tua attività.",
  "Fai una ricerca su Google, trovi Aruba SuperSite e la promessa sembra irresistibile: scegli un modello, inserisci i contenuti e in poco tempo il tuo sito è online.",
  "Semplice. Veloce. Economico.",
  "Ma la domanda giusta non è quanto sia facile creare un sito.",
  "La domanda è: quel sito riuscirà davvero a portarti clienti?",
  "Perché tra avere un sito online e avere un sito che genera contatti c'è una differenza enorme."
];
const sections = [
  {
    title: "Creare un sito è facile. Farlo funzionare è un'altra storia",
    paragraphs: [
      "Negli ultimi anni gli strumenti per creare siti web sono diventati sempre più semplici.",
      "Anche Aruba SuperSite permette di realizzare pagine web senza conoscere codice o programmazione.",
      "Questo però risolve solo una parte del problema.",
      "Un sito web non è un documento da pubblicare online. È uno strumento di marketing che deve convincere una persona a compiere un'azione: chiamarti, richiedere un preventivo, prenotare un appuntamento o acquistare un prodotto.",
      "Ed è proprio qui che molti progetti fai-da-te iniziano a mostrare i propri limiti."
    ]
  },
  {
    title: "Il vero costo nascosto non è l'abbonamento",
    paragraphs: [
      "Molti imprenditori scelgono una piattaforma fai-da-te come Aruba SuperSite per risparmiare.",
      "In teoria sembra una buona idea. In pratica, spesso accade il contrario.",
      "Tra scelta del template, personalizzazione delle pagine, caricamento delle immagini, scrittura dei testi, configurazioni tecniche e continui tentativi di miglioramento, possono passare settimane.",
      "Tempo che potresti dedicare alla tua attività. Tempo che non produce fatturato. Tempo che difficilmente recupererai.",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Quando si parla di un'azienda, il tempo è quasi sempre la risorsa più costosa — e spesso pesa più del prezzo annuale dell'abbonamento. Ne abbiamo parlato anche",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/blog/creare-sito-web-da-soli-conviene", className: linkClass, children: "nella guida dedicata al fai-da-te" }),
        "."
      ] })
    ]
  },
  {
    title: "Il rischio di avere un sito uguale a tanti altri",
    paragraphs: [
      "Uno dei vantaggi delle piattaforme preconfezionate è la presenza di modelli grafici già pronti.",
      "Ma proprio questo vantaggio può trasformarsi in un limite.",
      "Molti siti realizzati con template standard finiscono per assomigliarsi: stesse strutture, stessi layout, stessa organizzazione delle informazioni.",
      "Il risultato è che il visitatore fatica a percepire una vera differenza tra te e i tuoi concorrenti.",
      "E se il tuo sito non comunica qualcosa di unico, diventa molto difficile convincere un potenziale cliente a scegliere proprio te."
    ]
  },
  {
    title: "Essere online non significa essere visibili su Google",
    paragraphs: [
      "Uno degli errori più comuni è pensare che basti pubblicare un sito per comparire su Google. Purtroppo non funziona così.",
      "Google deve comprendere perfettamente cosa fai, dove lavori, quali problemi risolvi e perché dovrebbe mostrarti rispetto ai concorrenti.",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Aruba SuperSite e altre piattaforme offrono strumenti SEO di base, ma gli strumenti da soli non bastano. La differenza la fanno la strategia, la struttura dei contenuti, le parole chiave utilizzate e l'esperienza complessiva del sito. Se vuoi approfondire,",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: linkClass, children: "abbiamo dedicato una guida intera al perché un sito non compare su Google" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "In altre parole: avere un martello non significa saper costruire una casa. E se ti serve visibilità subito, valuta anche",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: linkClass, children: "pubblicità su Google ADS gestita da chi conosce il tuo settore" }),
        "."
      ] })
    ]
  },
  {
    title: "Quando il sito non genera contatti",
    paragraphs: [
      "Questo è probabilmente il problema più sottovalutato.",
      "Un sito può essere bello, può essere online, può perfino funzionare correttamente. Eppure non portare nemmeno un cliente.",
      "Perché un sito efficace non si limita a mostrare informazioni: deve guidare il visitatore, costruire fiducia, rispondere alle domande che una persona si pone prima di acquistare e rendere semplice il contatto.",
      "Senza questi elementi, il rischio è di avere una semplice brochure digitale che nessuno legge davvero."
    ]
  },
  {
    title: "Aruba SuperSite è una cattiva soluzione?",
    paragraphs: [
      "No.",
      "Per alcune situazioni può essere una soluzione più che valida. Ad esempio per chi vuole pubblicare rapidamente una presenza online essenziale o per chi desidera sperimentare un progetto personale.",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Il problema nasce quando si pretende che uno strumento pensato per la semplicità svolga il lavoro di una strategia professionale. Sono due cose completamente diverse — un po' come succede",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-piattaforme-preventivi-online-conviene", className: linkClass, children: "con le piattaforme di preventivi online" }),
        "."
      ] })
    ]
  },
  {
    title: "Prima di spendere soldi, spendi qualche minuto per informarti",
    paragraphs: [
      "Molte persone investono tempo e denaro in piattaforme fai-da-te senza aver prima valutato tutte le alternative. E spesso scoprono i limiti della scelta solo dopo settimane di lavoro.",
      "La realtà è che non tutte le attività hanno bisogno della stessa soluzione: un professionista, un negozio locale e un'azienda strutturata hanno esigenze completamente diverse.",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        'Per questo la domanda da porsi non è "Quale piattaforma devo usare?" ma piuttosto: "Qual è il modo più efficace per ottenere risultati online?". E in molti casi la risposta passa anche da',
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: linkClass, children: "capire quanto costa davvero un sito web fatto bene" }),
        "."
      ] })
    ]
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Aruba SuperSite può aiutarti a pubblicare un sito. Ma pubblicare un sito e ottenere risultati sono due obiettivi molto diversi.",
      "Prima di investire settimane nel tentativo di costruire tutto da solo, può essere utile confrontarsi con chi realizza siti web ogni giorno e conosce le strategie che funzionano davvero.",
      "Una semplice consulenza può evitarti errori, perdite di tempo e costi che spesso emergono solo quando il progetto è già stato avviato.",
      "Se stai valutando la creazione del tuo sito web a Padova o in tutta Italia, contattaci prima di prendere una decisione: ti aiuteremo a capire quale soluzione ha davvero senso per la tua attività, senza impegno e senza tecnicismi inutili."
    ]
  }
];
const examples = [
  {
    src: exampleFavesrl,
    alt: "Esempio di sito web aziendale realizzato con una piattaforma fai-da-te — settore metalmeccanico",
    caption: "Esempio reale: home page di un'azienda metalmeccanica realizzata con una piattaforma fai-da-te."
  },
  {
    src: exampleImport,
    alt: "Esempio di sito web realizzato con piattaforma fai-da-te — settore irrigazione",
    caption: "Esempio reale: home page di un'attività del settore irrigazione realizzata con una piattaforma fai-da-te."
  }
];
const BlogArubaSupersiteArticle = () => {
  const pageTitle = "Aruba SuperSite conviene? Limiti e cosa sapere prima";
  const pageDescription = "Aruba SuperSite è davvero la soluzione giusta per il tuo sito? Limiti, tempi nascosti e cosa valutare prima di scegliere una piattaforma fai-da-te.";
  const pageUrl = "https://4weblab.it/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere";
  const pageImage = `https://4weblab.it${blogArubaHero}`;
  const articleData = getArticleBySlug("aruba-supersite-conviene-davvero-limiti-e-cosa-sapere");
  const datePublished = (articleData == null ? void 0 : articleData.datePublished) ?? "2026-06-09";
  const dateModified = (articleData == null ? void 0 : articleData.dateModified) ?? "2026-06-09";
  const articleSection = (articleData == null ? void 0 : articleData.category) ?? "Strategia digitale";
  const readingTime = calcReadingTime((articleData == null ? void 0 : articleData.wordCount) ?? 720);
  const headline = "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito";
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox]);
  const active = lightboxIndex !== null ? examples[lightboxIndex] : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }),
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
        author: { "@type": "Person", name: "Carlo Fullin", url: "https://4weblab.it/" },
        publisher: { "@id": "https://4weblab.it/#business" },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        url: pageUrl,
        datePublished,
        dateModified
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-[110px]" }),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-4xl text-center", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: "Aruba SuperSite: conviene davvero?" }
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mt-6 text-primary-foreground text-balance", children: "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito" }),
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
      /* @__PURE__ */ jsx("section", { className: "article-intro-section", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 text-base leading-8 text-foreground md:text-lg", children: introParagraphs.map((paragraph, index) => /* @__PURE__ */ jsx("p", { className: index === 3 ? "font-semibold text-foreground" : "text-foreground/90", children: paragraph }, index)) }) }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        sections.map((section, index) => /* @__PURE__ */ jsx(AnimatedSection, { delay: index * 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: section.title }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: section.paragraphs.map((paragraph, pIndex) => /* @__PURE__ */ jsx("p", { children: paragraph }, pIndex)) })
        ] }) }, section.title)),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: sections.length * 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Esempi di siti realizzati con piattaforme fai-da-te" }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-8 text-foreground/90 md:text-lg", children: "Per rendere il discorso più concreto, ecco due esempi reali di siti web realizzati con piattaforme fai-da-te. Clicca su un'immagine per ingrandirla a schermo intero." }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-5 md:grid-cols-2", children: examples.map((ex, i) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setLightboxIndex(i),
              className: "group relative overflow-hidden rounded-2xl border border-border/60 bg-muted text-left shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              "aria-label": `Ingrandisci: ${ex.caption}`,
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: ex.src,
                    alt: ex.alt,
                    width: 800,
                    height: 600,
                    loading: "lazy",
                    className: "h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur", children: [
                  /* @__PURE__ */ jsx(ZoomIn, { className: "h-3.5 w-3.5", "aria-hidden": "true" }),
                  "Ingrandisci"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "block px-4 py-3 text-xs text-muted-foreground md:text-sm", children: ex.caption })
              ]
            },
            ex.src
          )) })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: "aruba-supersite-conviene-davvero-limiti-e-cosa-sapere" }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Stai valutando Aruba SuperSite o un'alternativa professionale?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large mt-5 text-muted-foreground", children: "Raccontaci cosa fai e ti aiutiamo a capire qual è la soluzione più efficace per la tua attività, senza tecnicismi e senza impegno." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    active ? /* @__PURE__ */ jsxs(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": active.caption,
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm md:p-8",
        onClick: closeLightbox,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: closeLightbox,
              autoFocus: true,
              "aria-label": "Chiudi immagine",
              className: "absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:right-6 md:top-6 md:h-12 md:w-12",
              children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6", "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "figure",
            {
              className: "relative flex max-h-[90vh] max-w-[95vw] flex-col items-center gap-3",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: active.src,
                    alt: active.alt,
                    className: "max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                  }
                ),
                /* @__PURE__ */ jsx("figcaption", { className: "max-w-2xl text-center text-sm text-foreground/80 md:text-base", children: active.caption })
              ]
            }
          )
        ]
      }
    ) : null
  ] });
};
export {
  BlogArubaSupersiteArticle as default
};
