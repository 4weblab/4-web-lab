import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { W, H as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BgZwHpsj.js";
import { a as blogDiyWebsite } from "./blog-aruba-supersite-DvMlriuU.js";
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
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
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
                { label: "Creare sito web da soli" }
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: headline }),
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
      /* @__PURE__ */ jsx("section", { className: "article-intro-section", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12", children: /* @__PURE__ */ jsx("div", { className: "space-y-6 text-base leading-8 text-foreground md:text-lg", children: introParagraphs.map((paragraph, index) => /* @__PURE__ */ jsx(
        "p",
        {
          className: index === 4 ? "font-semibold text-foreground" : "text-foreground/90",
          children: paragraph
        },
        paragraph
      )) }) }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Creare un sito web da soli è davvero così semplice?" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Piattaforme come WordPress, builder visuali e",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                  className: "text-accent font-medium hover:underline",
                  children: "strumenti automatici basati sull'intelligenza artificiale"
                }
              ),
              " ",
              "promettono semplicità."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "E in parte è vero." }),
            /* @__PURE__ */ jsx("p", { children: "Con pochi click puoi avere un sito online, con un design accettabile e qualche pagina pronta." }),
            /* @__PURE__ */ jsx("p", { children: "Il punto è che questo è solo l'inizio." }),
            /* @__PURE__ */ jsx("p", { children: "Un sito web non è solo una grafica, ma un insieme di elementi che devono funzionare insieme: velocità, struttura, contenuti, chiarezza." }),
            /* @__PURE__ */ jsx("p", { children: "E senza esperienza, questi aspetti vengono quasi sempre trascurati." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Il problema nascosto di WordPress e dei siti fai-da-te" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "WordPress è uno strumento potente." }),
            /* @__PURE__ */ jsx("p", { children: "Ma proprio per questo non è automatico." }),
            /* @__PURE__ */ jsx("p", { children: "Senza sapere come configurarlo correttamente, il risultato è spesso un sito lento, pieno di plugin inutili, difficile da gestire e vulnerabile dal punto di vista della sicurezza." }),
            /* @__PURE__ */ jsx("p", { children: "Il problema non è lo strumento, ma l'utilizzo." }),
            /* @__PURE__ */ jsx("p", { children: "Un sito fatto senza criterio può sembrare funzionante, ma sotto è fragile." }),
            /* @__PURE__ */ jsx("p", { children: "E questo, prima o poi, si paga." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Perché un sito fai-da-te spesso non porta clienti" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Qui sta il punto centrale." }),
            /* @__PURE__ */ jsx("p", { children: "Molti riescono a creare un sito." }),
            /* @__PURE__ */ jsx("p", { children: "Pochi riescono a creare un sito che funziona." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Senza una struttura pensata per il cliente, il sito diventa un insieme di informazioni senza direzione. Non a caso, è la stessa logica che vale quando ci si chiede",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "se conviene un sito web o i social network"
                }
              ),
              ": ciò che fa la differenza è la strategia, non lo strumento."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "L'utente entra, guarda e se ne va." }),
            /* @__PURE__ */ jsx("p", { children: "Non perché il sito sia brutto, ma perché non è progettato per guidarlo." }),
            /* @__PURE__ */ jsx("p", { children: "E senza azione, non ci sono risultati." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Il “buco nero” di Google" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Uno degli errori più comuni è pensare che basti avere un sito per comparire su Google." }),
            /* @__PURE__ */ jsx("p", { children: "In realtà, se il sito non è strutturato nel modo giusto, non verrà trovato." }),
            /* @__PURE__ */ jsx("p", { children: "Google deve capire cosa fai, per chi lavori e perché dovrebbe mostrare proprio il tuo sito agli utenti che cercano i tuoi servizi." }),
            /* @__PURE__ */ jsx("p", { children: "Se questi elementi non sono chiari, il sito resta invisibile." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "È come aprire un negozio perfetto in mezzo a un bosco. In questi casi, una strada veloce per essere trovati è affiancare al sito",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent font-medium hover:underline", children: "campagne Google ADS mirate" }),
              "."
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Il falso mito del risparmio" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Creare un sito web da soli sembra una scelta economica." }),
            /* @__PURE__ */ jsx("p", { children: "Ma raramente lo è." }),
            /* @__PURE__ */ jsx("p", { children: "Il tempo speso a capire come funziona tutto, risolvere problemi e sistemare errori ha un costo reale. A questo si aggiungono eventuali correzioni future, clienti persi e opportunità mancate." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Se vuoi avere un'idea più precisa di cosa incide davvero sul prezzo, abbiamo raccolto tutto nella nostra guida ai",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/quanto-costa-un-sito-web-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "costi reali di un sito web nel 2026"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Un sito che non porta risultati non è un risparmio." }),
            /* @__PURE__ */ jsx("p", { children: "È un costo nascosto." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Quando ha senso fare un sito da soli" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Non è sempre una scelta sbagliata." }),
            /* @__PURE__ */ jsx("p", { children: "Può avere senso se vuoi fare esperienza, se stai testando un'idea o se non hai obiettivi commerciali immediati." }),
            /* @__PURE__ */ jsx("p", { children: "Ma nel momento in cui il sito deve lavorare per te, il discorso cambia." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.24, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Conclusione" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Creare un sito web da soli oggi è possibile." }),
            /* @__PURE__ */ jsx("p", { children: "Ma creare un sito che funzioni davvero richiede qualcosa in più." }),
            /* @__PURE__ */ jsx("p", { children: "Struttura, strategia e chiarezza fanno la differenza tra un sito che esiste e un sito che porta clienti." }),
            /* @__PURE__ */ jsx("p", { children: "E nel digitale, questa differenza è tutto." })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: slug }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Vuoi capire se il tuo sito può funzionare davvero?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large mt-5 text-muted-foreground", children: "Se hai già provato a creare un sito da solo o stai pensando di farlo, possiamo aiutarti a capire cosa ha senso fare davvero per la tua attività." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "btn-primary", children: [
          "Richiedi una consulenza",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  BlogDiyWebsiteArticle as default
};
