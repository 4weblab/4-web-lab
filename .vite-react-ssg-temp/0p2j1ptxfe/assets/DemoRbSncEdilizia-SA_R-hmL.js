import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { W, H as Header, A as AnimatedSection, F as Footer } from "../main.mjs";
import { Sparkles, ExternalLink, CheckCircle2, Gauge, ShieldCheck, Target, Search, Calendar, Layers, ArrowRight } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import { h as heroImg } from "./rb-snc-edilizia-B5wIZHXg.js";
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
const beforeImg = "/assets/before-2010-BAck-5g9.webp";
const afterDesktop = "/assets/after-desktop-CZtJ7sim.webp";
const afterMobile = "/assets/after-mobile-Bpnjt2Z2.webp";
const afterDetail = "/assets/after-detail-BBKdR5Rb.webp";
const psMobile = "/assets/pagespeed-mobile-De4hj-a8.webp";
const psDesktop = "/assets/pagespeed-desktop-CArMOcaZ.webp";
const URL_LIVE = "https://rb-snc.it";
const URL_PAGE = "https://4weblab.it/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto";
const DemoRbSncEdilizia = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
      /* @__PURE__ */ jsx("title", { children: "R.B. s.n.c. Cittadella · sito, SEO e Google Ads | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Case study reale: restyling completo, ottimizzazione SEO e campagna Google Ads per R.B. s.n.c., impresa edile specializzata in rimozione eternit a Cittadella (PD)."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: URL_PAGE }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: URL_PAGE }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "R.B. s.n.c. Cittadella · sito, SEO e Google Ads | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Case study reale: restyling, SEO e Google Ads per un'impresa edile di Cittadella (PD) specializzata in rimozione eternit e rifacimento tetti."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${URL_PAGE}#case-study`,
        name: "Restyling sito web, SEO e Google Ads per R.B s.n.c.",
        url: URL_PAGE,
        inLanguage: "it-IT",
        datePublished: "2026-06-29",
        dateCreated: "2026-06-29",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        author: { "@id": "https://4weblab.it/#business" },
        creator: { "@id": "https://4weblab.it/#business" },
        about: {
          "@type": "Organization",
          name: "R.B s.n.c. di Bertoluzzo e Ragazzo",
          url: URL_LIVE,
          areaServed: { "@type": "City", name: "Cittadella" },
          description: "Impresa edile specializzata in rimozione eternit (amianto) e rifacimento tetti, con sede a Cittadella (Padova)."
        },
        workExample: { "@type": "WebSite", url: URL_LIVE, name: "rb-snc.it" },
        keywords: "rimozione eternit Cittadella, rifacimento tetti Padova, sito web edilizia, Google Ads edilizia, SEO impresa edile, restyling sito edile Veneto, R.B. s.n.c."
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" },
          { "@type": "ListItem", position: 3, name: "R.B s.n.c. — Edilizia Cittadella", item: URL_PAGE }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.15]", style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px"
        } }),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              variant: "light",
              items: [
                { label: "Home", to: "/" },
                { label: "Realizzazioni", to: "/realizzazioni" },
                { label: "R.B s.n.c. — Edilizia Cittadella" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-accent-foreground bg-accent shadow-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            "Caso studio reale · pubblicato"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 text-primary-foreground mb-6 text-balance", children: "R.B. s.n.c. — sito web, SEO e Google Ads per rimozione eternit e rifacimento tetti a Cittadella" }),
          /* @__PURE__ */ jsxs("p", { className: "body-large text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-balance", children: [
            "Restyling completo del sito, ottimizzazione SEO on-page e campagna Google Ads attiva per",
            /* @__PURE__ */ jsx("strong", { children: " R.B. s.n.c. di Bertoluzzo e Ragazzo" }),
            ", impresa edile specializzata in rimozione amianto e rifacimento coperture con sede a Cittadella (PD)."
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: URL_LIVE,
              target: "_blank",
              rel: "noopener external",
              className: "hero-cta hero-cta-primary",
              children: [
                "Visita il sito live",
                /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-primary-foreground/80", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-accent" }),
              " Sito live"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Gauge, { className: "w-4 h-4 text-accent" }),
              " Lighthouse 95 / 96"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-accent" }),
              " SEO 100/100"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 text-accent" }),
              " Campagna Ads attiva"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-background pt-12 md:pt-16", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto rounded-2xl overflow-hidden", style: { boxShadow: "var(--shadow-lg)" }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImg,
          alt: "Operaio specializzato con DPI completi durante la rimozione di lastre di eternit su un tetto industriale in Veneto — caso studio R.B s.n.c. realizzato da 4 Web Lab",
          width: 1600,
          height: 1e3,
          loading: "eager",
          decoding: "async",
          className: "w-full h-auto"
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Il contesto" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-5", children: "Un sito del 2010, fermo a 16 anni fa" }),
          /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mb-4", children: "Il sito precedente di R.B. s.n.c. risaliva al 2010 e mostrava tutti i limiti di un'impostazione tecnica ormai superata. La concorrenza, nello stesso settore della bonifica amianto e del rifacimento coperture, si era già aggiornata da tempo." }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: [
            "Markup HTML legacy non più allineato agli standard attuali",
            "Esperienza mobile assente: layout pensato solo per desktop",
            "Nessuna ottimizzazione SEO, GEO o AEO",
            "Assenza totale di dati strutturati e schema markup",
            "Tempi di caricamento e Core Web Vitals fuori soglia"
          ].map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: p })
          ] }, p)) })
        ] }),
        /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl overflow-hidden border border-border bg-muted", style: { boxShadow: "var(--shadow-md)" }, children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: beforeImg,
              alt: "Screenshot del sito web precedente di R.B. s.n.c., realizzato nel 2010, con grafica datata e layout solo desktop",
              width: 1600,
              height: 721,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-auto block"
            }
          ),
          /* @__PURE__ */ jsx("figcaption", { className: "text-xs text-muted-foreground px-4 py-2 border-t border-border bg-card", children: "Sito precedente · 2010" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-muted/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Obiettivi del cliente" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-4", children: "Cosa è stato richiesto" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-5xl mx-auto", children: [
          { t: "Immagine professionale", d: "Un sito moderno, coerente con la natura tecnica e specialistica del lavoro svolto in cantiere." },
          { t: "Risultati su Google", d: "Massimizzare la visibilità organica e attivare un canale a pagamento per i preventivi qualificati." },
          { t: "Servizi chiari", d: "Presentare in modo lineare bonifica amianto, smaltimento eternit e rifacimento coperture." }
        ].map((o) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 bg-card border border-border", style: { boxShadow: "var(--shadow-sm)" }, children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-2", children: o.t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: o.d })
        ] }, o.t)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "La soluzione" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-4", children: "L'intervento, in quattro aree" }),
          /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground", children: "Il progetto è stato ricostruito da zero in circa un mese e mezzo, dal brief operativo fino alla messa online e all'attivazione della campagna pubblicitaria." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-5 max-w-5xl mx-auto", children: [
          { icon: Sparkles, t: "Restyling completo da zero", d: "Nuova architettura informativa, design system dedicato, gerarchia chiara dei contenuti, mobile-first nativo." },
          { icon: Gauge, t: "Ottimizzazione tecnica & Core Web Vitals", d: "Immagini WebP, asset minimi, font non bloccanti, LCP controllato, layout shift azzerato." },
          { icon: Search, t: "SEO on-page e SEO locale Veneto", d: "Title e meta dedicati, struttura H1-H2 coerente, schema LocalBusiness, copertura territoriale Cittadella e Veneto." },
          { icon: Target, t: "Campagna Google Ads dedicata", d: "Setup completo e gestione della campagna a pagamento, attualmente attiva e focalizzata sulle keyword di servizio." }
        ].map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 bg-card border border-border", style: { boxShadow: "var(--shadow-sm)" }, children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl mb-4 flex items-center justify-center", style: { background: "var(--gradient-accent)" }, children: /* @__PURE__ */ jsx(b.icon, { className: "w-5 h-5 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold mb-2", children: b.t }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: b.d })
        ] }, b.t)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-muted/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Before / After" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-4", children: "Il salto visivo, in due immagini" }),
          /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground", children: "A sinistra il sito storico del 2010. A destra il nuovo rb-snc.it, online dal 2026." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl overflow-hidden border border-border bg-card", style: { boxShadow: "var(--shadow-md)" }, children: [
            /* @__PURE__ */ jsx("img", { src: beforeImg, alt: "Sito web R.B. s.n.c. nel 2010, design legacy non responsive", width: 1600, height: 721, loading: "lazy", decoding: "async", className: "w-full h-auto block" }),
            /* @__PURE__ */ jsx("figcaption", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground px-4 py-2 border-t border-border", children: "Before · 2010" })
          ] }),
          /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl overflow-hidden border border-border bg-card", style: { boxShadow: "var(--shadow-md)" }, children: [
            /* @__PURE__ */ jsx("img", { src: afterDesktop, alt: "Nuovo sito web R.B. s.n.c., homepage 2026 con hero scuro e CTA arancione", width: 1600, height: 711, loading: "lazy", decoding: "async", className: "w-full h-auto block" }),
            /* @__PURE__ */ jsx("figcaption", { className: "text-xs font-semibold uppercase tracking-wider text-accent px-4 py-2 border-t border-border", children: "After · 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[1fr_2fr] gap-6 max-w-6xl mx-auto mt-6", children: [
          /* @__PURE__ */ jsx("figure", { className: "rounded-2xl overflow-hidden border border-border bg-card flex items-center justify-center p-4", style: { boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsx("img", { src: afterMobile, alt: "Vista mobile di una pagina interna del nuovo sito R.B. s.n.c., scheda intervento di bonifica amianto", width: 900, height: 780, loading: "lazy", decoding: "async", className: "w-full h-auto block max-w-[420px]" }) }),
          /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl overflow-hidden border border-border bg-card", style: { boxShadow: "var(--shadow-sm)" }, children: [
            /* @__PURE__ */ jsx("img", { src: afterDetail, alt: "Dettaglio scheda realizzazione: bonifica amianto su copertura industriale, dati strutturati e informazioni tecniche", width: 1600, height: 727, loading: "lazy", decoding: "async", className: "w-full h-auto block" }),
            /* @__PURE__ */ jsx("figcaption", { className: "text-xs text-muted-foreground px-4 py-2 border-t border-border", children: "Dettaglio scheda realizzazione · vista desktop" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-12", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Risultati misurabili" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-4", children: "Risultati tecnici verificabili" }),
          /* @__PURE__ */ jsxs("p", { className: "body-base text-muted-foreground", children: [
            "I dati di seguito provengono da Google PageSpeed Insights (Lighthouse) e sono verificabili in autonomia inserendo l'URL ",
            /* @__PURE__ */ jsx("strong", { children: "rb-snc.it" }),
            " su ",
            /* @__PURE__ */ jsx("a", { href: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Frb-snc.it%2F", target: "_blank", rel: "noopener external", className: "underline decoration-accent underline-offset-2", children: "pagespeed.web.dev" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6 max-w-5xl mx-auto", children: [
          { img: psMobile, label: "Mobile", scores: [["Prestazioni", 95], ["Accessibilità", 95], ["Best Practice", 100], ["SEO", 100]] },
          { img: psDesktop, label: "Desktop", scores: [["Prestazioni", 96], ["Accessibilità", 91], ["Best Practice", 100], ["SEO", 100]] }
        ].map((card) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl overflow-hidden border border-border bg-card", style: { boxShadow: "var(--shadow-md)" }, children: [
          /* @__PURE__ */ jsxs("div", { className: "px-5 py-3 border-b border-border flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold", children: [
              "PageSpeed · ",
              card.label
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: "rb-snc.it" })
          ] }),
          /* @__PURE__ */ jsx("img", { src: card.img, alt: `Report PageSpeed Insights ${card.label} per rb-snc.it`, width: 1400, height: card.label === "Mobile" ? 638 : 634, loading: "lazy", decoding: "async", className: "w-full h-auto block" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 border-t border-border", lang: "it", children: card.scores.map(([k, v]) => /* @__PURE__ */ jsxs("div", { className: "min-w-0 px-1.5 sm:px-3 py-3 text-center border-r last:border-r-0 border-border", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl font-bold text-foreground", children: v }),
            /* @__PURE__ */ jsx("div", { className: "text-[9px] sm:text-[10px] leading-tight uppercase tracking-wider text-muted-foreground mt-0.5 break-words hyphens-auto", children: k })
          ] }, k)) })
        ] }, card.label)) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-3xl mx-auto text-center mt-10 italic", children: "Per rispetto della privacy del cliente non vengono pubblicati dati di traffico, CTR o conversioni della campagna Google Ads. I punteggi Lighthouse sopra restano verificabili pubblicamente." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-muted/30 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center mb-10", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Timeline" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-3", children: "Un mese e mezzo dal brief al live" }),
          /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground", children: "Il progetto è partito da zero: il sito precedente non era recuperabile né come base tecnica né come impostazione di contenuti." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-5 max-w-5xl mx-auto", children: [
          { n: "01", t: "Brief & strategia", d: "Analisi del settore, mappatura servizi, keyword e architettura del nuovo sito." },
          { n: "02", t: "Design & sviluppo", d: "Design system dedicato, sviluppo mobile-first, ottimizzazione tecnica e SEO." },
          { n: "03", t: "Lancio & Ads", d: "Messa online, indicizzazione, attivazione e gestione della campagna Google Ads." }
        ].map((s) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 bg-card border border-border", style: { boxShadow: "var(--shadow-sm)" }, children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-accent mb-2", children: s.n }),
          /* @__PURE__ */ jsxs("h3", { className: "text-base font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 text-accent" }),
            " ",
            s.t
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.d })
        ] }, s.n)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3", children: "Approccio tecnico" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-2 mb-6", children: "Scelte tecniche alla base del risultato" }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
          "Design system custom (no template generici)",
          "Immagini WebP con dimensioni esplicite",
          "Dati strutturati JSON-LD (LocalBusiness, schema servizi)",
          "Layout mobile-first nativo, breakpoint controllati",
          "Accessibilità: contrasti, focus visibile, alt text",
          "Indicizzazione: sitemap, robots, canonical puliti"
        ].map((t) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2.5 text-sm text-foreground/85", children: [
          /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 text-accent flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: t })
        ] }, t)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden p-10 md:p-16 text-center", style: { background: "var(--gradient-hero)" }, children: /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-5 text-balance", children: "Vuoi un risultato simile per la tua azienda?" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/80 max-w-2xl mx-auto mb-8", children: "Sito web, SEO e Google Ads gestiti insieme da un unico partner. Parliamone senza impegno." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "hero-cta hero-cta-primary", children: [
            "Richiedi una valutazione gratuita",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: URL_LIVE,
              target: "_blank",
              rel: "noopener external",
              className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors",
              children: [
                "Apri rb-snc.it",
                /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/60 mt-4", children: "Nessun impegno. Risposta entro 24h lavorative." })
      ] }) }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DemoRbSncEdilizia as default
};
