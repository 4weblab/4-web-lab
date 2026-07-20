import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as Helmet, a as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { g as getArticleBySlug, c as calcReadingTime, f as formatItalianDate, R as RelatedArticles } from "./RelatedArticles-BgZwHpsj.js";
import { d as blogNotFoundOnGoogle } from "./blog-aruba-supersite-DvMlriuU.js";
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
                { label: "Perché il tuo sito non si trova su Google" }
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm", children: "Blog 4 Web Lab" }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 mt-6 text-balance text-primary-foreground", children: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)" }),
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
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Hai un sito ma non compare su Google" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Molti imprenditori pensano che basti avere un sito per ricevere contatti." }),
            /* @__PURE__ */ jsx("p", { children: "In realtà, un sito senza posizionamento è invisibile." }),
            /* @__PURE__ */ jsx("p", { children: "Se Google non capisce cosa fai e a chi ti rivolgi, non può mostrarti nei risultati di ricerca." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "E questo significa finire nelle pagine che nessuno guarda. Spesso il problema non è solo tecnico: è strutturale, ed è uno dei",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
                  className: "text-accent font-medium hover:underline",
                  children: "segnali tipici di un sito ormai obsoleto"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Avere un sito è solo il primo passo. Il vero obiettivo è farsi trovare." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Per chi non può aspettare i tempi della SEO, una scorciatoia concreta è",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/pubblicita-google-ads",
                  className: "text-accent font-medium hover:underline",
                  children: "investire in pubblicità su Google ADS"
                }
              ),
              " ",
              "e iniziare a comparire da subito sopra ai risultati organici."
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.04, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Le persone cercano servizi, non il nome della tua attività" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "A meno che tu non sia già conosciuto, nessuno cercherà il nome della tua azienda su Google." }),
            /* @__PURE__ */ jsx("p", { children: "Le persone cercano soluzioni ai loro problemi." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Chi ha bisogno di un servizio scrive frasi semplici e dirette, spesso legate alla propria zona — pensa ad esempio a chi cerca un'",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/realizzazione-siti-web-padova", className: "text-accent font-medium hover:underline", children: "agenzia web a Padova" }),
              " ",
              "invece del nome di uno studio specifico."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Se il tuo sito non contiene queste ricerche reali, Google non ha modo di collegarti a chi sta cercando proprio quello che fai." }),
            /* @__PURE__ */ jsx("p", { children: "E di conseguenza, non ti mostrerà." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.08, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Google Maps: dove nascono molti contatti" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Quando una persona cerca un servizio locale, molto spesso la prima cosa che vede è la mappa con le attività nella zona." }),
            /* @__PURE__ */ jsx("p", { children: "Quella è una delle principali fonti di contatto oggi." }),
            /* @__PURE__ */ jsx("p", { children: "Se non sei presente o se la tua scheda non è curata, stai lasciando spazio diretto ai tuoi concorrenti." }),
            /* @__PURE__ */ jsx("p", { children: "Sito web e presenza su Google Maps devono lavorare insieme." }),
            /* @__PURE__ */ jsx("p", { children: "Se uno dei due è trascurato, perdi visibilità." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.12, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Se il sito è lento, gli utenti se ne vanno" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "La velocità è uno dei fattori più sottovalutati." }),
            /* @__PURE__ */ jsx("p", { children: "Se una pagina impiega troppo a caricarsi, l'utente non aspetta." }),
            /* @__PURE__ */ jsx("p", { children: "Chiude e passa al sito successivo." }),
            /* @__PURE__ */ jsx("p", { children: "Google osserva questo comportamento e lo usa per capire se il tuo sito è valido oppure no." }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Un sito lento non solo fa scappare le persone, ma scende anche nei risultati di ricerca. È anche per questo che ha senso",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/quanto-costa-sito-web", className: "text-accent font-medium hover:underline", children: "investire in un sito ben fatto" }),
              ", invece di ripiegare su soluzioni improvvisate."
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.16, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Un sito fatto “da solo” spesso non basta" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Oggi esistono molti strumenti per creare un sito in autonomia, compresi i generatori basati su",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/siti-web-creati-con-intelligenza-artificiale",
                  className: "text-accent font-medium hover:underline",
                  children: "intelligenza artificiale"
                }
              ),
              "."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "Il problema è che un sito non deve solo essere online, deve funzionare." }),
            /* @__PURE__ */ jsx("p", { children: "Deve essere strutturato per essere capito da Google e per guidare l'utente verso un'azione." }),
            /* @__PURE__ */ jsx("p", { children: "Un sito fatto senza strategia può anche essere bello, ma se non porta contatti, non serve." }),
            /* @__PURE__ */ jsx("p", { children: "E il tempo investito diventa tempo perso." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxs("article", { className: "rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 h-1 w-14 rounded-full bg-accent" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-3 text-foreground", children: "Conclusione" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "Essere su Google non è questione di fortuna." }),
            /* @__PURE__ */ jsx("p", { children: "È una questione di struttura, chiarezza e strategia." }),
            /* @__PURE__ */ jsx("p", { children: "Se il tuo sito oggi non si trova, non significa che non funzioni il tuo lavoro." }),
            /* @__PURE__ */ jsx("p", { children: "Significa semplicemente che non è stato costruito per essere trovato." }),
            /* @__PURE__ */ jsx("p", { children: "E nel digitale, chi non si vede, lascia spazio agli altri." })
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(RelatedArticles, { currentSlug: slug }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-foreground", children: "Vuoi capire perché il tuo sito non compare su Google?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large mt-5 text-muted-foreground", children: "Possiamo analizzare il tuo sito e dirti in modo chiaro cosa non sta funzionando e cosa migliorare per iniziare a farti trovare davvero." }),
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
  BlogNotFoundOnGoogleArticle as default
};
