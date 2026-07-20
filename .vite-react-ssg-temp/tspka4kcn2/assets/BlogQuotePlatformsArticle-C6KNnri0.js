import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { W, H as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BgZwHpsj.js";
import { c as blogQuotePlatforms } from "./blog-aruba-supersite-DvMlriuU.js";
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
                { label: "Piattaforme di preventivi online" }
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
          className: index === 3 ? "font-semibold text-foreground" : "text-foreground/90",
          children: paragraph
        },
        paragraph
      )) }) }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "article-body-section", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-3xl flex-col gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Come funzionano davvero queste piattaforme" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Il meccanismo è semplice." }),
            /* @__PURE__ */ jsx("p", { children: "I professionisti pagano per avere la possibilità di contattarti." }),
            /* @__PURE__ */ jsx("p", { children: "Non per lavorare con te, ma per poter inviare una proposta." }),
            /* @__PURE__ */ jsx("p", { children: "Questo cambia completamente la dinamica." }),
            /* @__PURE__ */ jsx("p", { children: "Chi risponde non è necessariamente il più adatto al tuo progetto, ma chi è disposto a investire per ottenere accesso al contatto." }),
            /* @__PURE__ */ jsx("p", { children: "E questo ha un impatto diretto sulla qualità del risultato finale." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Il problema dei preventivi veloci" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Ricevere più preventivi in poco tempo può sembrare un vantaggio." }),
            /* @__PURE__ */ jsx("p", { children: "In realtà, spesso porta nella direzione opposta." }),
            /* @__PURE__ */ jsx("p", { children: "Quando il contatto ha un costo, il professionista deve recuperare rapidamente quell'investimento." }),
            /* @__PURE__ */ jsx("p", { children: "Questo riduce lo spazio per analisi, strategia e comprensione reale delle esigenze." }),
            /* @__PURE__ */ jsx("p", { children: "Il risultato è un approccio standardizzato, dove il sito diventa un prodotto da consegnare, non uno strumento costruito per funzionare." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Perché i prezzi bassi spesso costano di più" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Uno degli elementi più attrattivi è il prezzo." }),
            /* @__PURE__ */ jsx("p", { children: "Molte offerte risultano più basse rispetto a quelle di professionisti che lavorano direttamente con il cliente." }),
            /* @__PURE__ */ jsx("p", { children: "Ma c'è un motivo." }),
            /* @__PURE__ */ jsx("p", { children: "Per mantenere margine, il tempo dedicato al progetto deve essere ridotto." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "E questo si riflette su tutto: dalla struttura del sito alla qualità tecnica, fino alla capacità di portare risultati. Se vuoi capire cosa incide davvero sul prezzo, abbiamo raccolto tutto in una guida dedicata a",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/quanto-costa-un-sito-web-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "quanto costa un sito web nel 2026"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Un sito economico che non porta clienti non è un risparmio." }),
            /* @__PURE__ */ jsx("p", { children: "È un costo." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Il problema invisibile: tecnica, SEO e performance" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Un sito web non è solo quello che si vede." }),
            /* @__PURE__ */ jsx("p", { children: "Gran parte del suo valore sta nella struttura tecnica." }),
            /* @__PURE__ */ jsx("p", { children: "Velocità di caricamento, organizzazione dei contenuti, capacità di essere compreso da Google." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Quando questi aspetti vengono trascurati, il sito diventa invisibile: è uno dei motivi principali per cui",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
                  className: "text-accent font-medium hover:underline",
                  children: "molti siti non si trovano su Google"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Può essere online, funzionante, anche gradevole." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Ma se non viene trovato e non converte, non serve: per accelerare l'arrivo di richieste reali è spesso più efficace investire in",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/pubblicita-google-ads",
                  className: "text-accent font-medium hover:underline",
                  children: "campagne Google ADS gestite con criterio"
                }
              ),
              "."
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Cosa succede dopo la consegna" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Un altro punto critico emerge nel tempo." }),
            /* @__PURE__ */ jsx("p", { children: "Chi lavora su grandi volumi tende a concentrarsi sulla consegna, non sulla continuità." }),
            /* @__PURE__ */ jsx("p", { children: "Questo significa che, una volta pubblicato il sito, spesso manca supporto, aggiornamento ed evoluzione del progetto." }),
            /* @__PURE__ */ jsx("p", { children: "E quando qualcosa non funziona, devi rivolgerti a qualcun altro per sistemarlo." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Quando queste piattaforme possono avere senso" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Non sono sempre la scelta sbagliata." }),
            /* @__PURE__ */ jsx("p", { children: "Possono avere senso in situazioni molto specifiche." }),
            /* @__PURE__ */ jsx("p", { children: "Ad esempio quando hai bisogno di qualcosa di estremamente semplice, senza particolari obiettivi di crescita." }),
            /* @__PURE__ */ jsx("p", { children: "Oppure quando vuoi testare rapidamente un'idea senza investire troppo." }),
            /* @__PURE__ */ jsx("p", { children: "Ma se il sito deve diventare uno strumento di lavoro, i limiti emergono rapidamente." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.24, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "La differenza tra avere un sito e avere uno strumento che funziona" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Qui sta il punto centrale." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Un sito web può essere semplicemente una presenza online, oppure uno strumento che genera contatti e opportunità — è la stessa logica che applichiamo nella",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "realizzazione di siti a Padova" }),
              ", dove ogni progetto parte da un obiettivo di business chiaro."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Nel primo caso, quasi qualsiasi soluzione può bastare." }),
            /* @__PURE__ */ jsx("p", { children: "Nel secondo, serve progettazione, analisi e una visione chiara." }),
            /* @__PURE__ */ jsx("p", { children: "La differenza non è nel codice, ma nel modo in cui il sito viene pensato." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.28, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Conclusione" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Le piattaforme di preventivi online offrono velocità e semplicità." }),
            /* @__PURE__ */ jsx("p", { children: "Ma queste caratteristiche hanno un prezzo che spesso non è immediatamente visibile." }),
            /* @__PURE__ */ jsx("p", { children: "Se l'obiettivo è avere solo un sito online, possono essere sufficienti." }),
            /* @__PURE__ */ jsx("p", { children: "Se invece vuoi un sito che lavori per te, che porti clienti e che cresca nel tempo, serve un approccio diverso." }),
            /* @__PURE__ */ jsx("p", { children: "E soprattutto, serve qualcuno che lavori con te, non semplicemente per te." })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: slug }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Vuoi un sito che porti davvero risultati?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large mt-5 text-muted-foreground", children: "Se stai valutando come realizzare il tuo sito web, possiamo aiutarti a capire quale soluzione ha davvero senso per la tua attività, senza perdere tempo e senza investimenti inutili." }),
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
  BlogQuotePlatformsArticle as default
};
