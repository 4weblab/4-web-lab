import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { H as Helmet, a as Header, A as AnimatedSection, m as motion, F as Footer } from "../main.mjs";
import { Sparkles, ArrowRight, CheckCircle2, Search, Smartphone, Target, Layout, Shield, Gauge, Image } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { c as cncImg } from "./aurum-cnc-D_XL1Q1y.js";
import { r as roomImg } from "./dental-room-CLFnv7L6.js";
import { i as industrialImg } from "./solaris-industrial-DjkCnBnI.js";
import { r as roomDeluxe } from "./bb-room-deluxe-Zi8WUYCV.js";
import { h as heroImg } from "./rb-snc-edilizia-B5wIZHXg.js";
import { h as heroImg$1 } from "./vera-method-hero-DK5OfB24.js";
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
const imgFlowerAtelier = "/assets/flower-atelier-card-D4yuqBjn.webp";
const imgComingSoon = "/assets/concept-coming-soon-wPj62JUX.webp";
const projects = [
  {
    slug: "realizzazione-sito-web-edilizia-rb-snc-veneto",
    title: "Sito web R.B. s.n.c. — rimozione eternit e rifacimento tetti, Cittadella (PD)",
    description: "Lavoro reale online: restyling completo del sito, ottimizzazione SEO on-page e campagna Google Ads attiva per un'impresa edile specializzata in rimozione amianto e rifacimento coperture nel Veneto.",
    badge: "Progetto reale",
    badgeVariant: "real",
    features: ["Restyling completo", "Ottimizzazione SEO", "Campagna Google Ads"],
    image: heroImg,
    alt: "Operai con DPI rimuovono lastre di eternit e installano nuova copertura metallica su un tetto industriale in Veneto — caso studio R.B s.n.c. realizzato da 4 Web Lab"
  },
  {
    slug: "demo-personal-trainer-vera-method",
    title: "Sito web per personal trainer — concept",
    description: "Demo premium per una personal trainer femminile: estetica antracite + coral, metodo a tre pilastri, programmi 1:1 e small group, bio EEAT e form di contatto.",
    badge: "Concept",
    features: ["Estetica empowering", "Bio EEAT dedicata", "Form contatto premium"],
    image: heroImg$1,
    alt: "Personal trainer donna in studio premium antracite con luce coral — concept sito web 4 Web Lab"
  },
  {
    slug: "demo-metalmeccanica",
    title: "Sito web per azienda metalmeccanica — concept",
    description: "Demo pensata per una PMI del settore metalmeccanico: catalogo prodotti, area certificazioni e contatti commerciali ben strutturati.",
    badge: "Concept",
    features: ["Sezione prodotti", "Area B2B", "SEO tecnica"],
    image: cncImg,
    alt: "Macchinario CNC in officina metalmeccanica — concept sito web 4 Web Lab"
  },
  {
    slug: "demo-studio-dentistico-premium",
    title: "Sito web per studio dentistico — concept",
    description: "Demo progettata per uno studio odontoiatrico moderno, con struttura chiara, servizi ordinati e CTA strategiche per la prenotazione.",
    badge: "Concept",
    features: ["SEO locale", "Mobile responsive", "CTA strategiche"],
    image: roomImg,
    alt: "Sala operativa di uno studio dentistico moderno — concept sito web 4 Web Lab"
  },
  {
    slug: "demo-fotovoltaico",
    title: "Sito web per azienda fotovoltaica — concept",
    description: "Demo premium per un'azienda di impianti fotovoltaici e accumulo energetico: dashboard energetiche, case studies industriali e form consulenza.",
    badge: "Concept",
    features: ["Dashboard energetiche", "UX dark premium", "Lead generation B2B"],
    image: industrialImg,
    alt: "Impianto fotovoltaico industriale su tetto — concept sito web 4 Web Lab"
  },
  {
    slug: "boutique-bb-luxury-rooms",
    title: "Sito web per boutique B&B e luxury rooms — concept",
    description: "Demo editoriale per un boutique B&B contemporaneo: hero cinematografica, camere premium, gallery immersiva e form prenotazione su misura.",
    badge: "Concept",
    features: ["Design editoriale", "Gallery immersiva", "UX boutique luxury"],
    image: roomDeluxe,
    alt: "Camera deluxe di un boutique B&B luxury — concept sito web 4 Web Lab"
  },
  {
    slug: "demo-flower-atelier",
    title: "Sito web per negozio (fioreria) — concept",
    description: "Demo botanica e immersiva pensata per negozi e attività locali: hero cinematica, composizioni, eventi e CTA dirette per richiedere il sito a 4 Web Lab.",
    badge: "Concept",
    features: ["Web design per negozi", "Mobile-first", "EEAT 4 Web Lab"],
    image: imgFlowerAtelier,
    alt: "Concept di sito web premium per fioreria e negozio locale — demo realizzata da 4 Web Lab"
  }
];
const methodPoints = [
  { icon: Search, title: "Struttura SEO ordinata", desc: "Gerarchia di titoli, URL puliti e dati strutturati pensati per Google." },
  { icon: Smartphone, title: "Esperienza mobile", desc: "Layout ottimizzati per smartphone, dove avviene la maggior parte delle visite." },
  { icon: Target, title: "CTA strategiche", desc: "Pulsanti e form posizionati per trasformare visitatori in contatti reali." },
  { icon: Layout, title: "Design professionale", desc: "Estetica moderna, coerente con il brand e con il settore di riferimento." },
  { icon: Shield, title: "Attenzione GDPR", desc: "Cookie banner, consensi e privacy gestiti in modo conforme." },
  { icon: Gauge, title: "Velocità e leggibilità", desc: "Prestazioni elevate e tipografia curata per una lettura confortevole." },
  { icon: Image, title: "Organizzazione contenuti", desc: "Sezioni chiare, gerarchia visiva e percorsi di navigazione intuitivi." },
  { icon: Sparkles, title: "Immagine aziendale moderna", desc: "Una presenza online che racconta professionalità e attenzione ai dettagli." }
];
const Realizzazioni = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Realizzazioni siti web reali e concept — Portfolio 4 Web Lab Padova" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Portfolio 4 Web Lab, agenzia web di Padova: lavori reali pubblicati (es. R.B s.n.c., edilizia, Cittadella) e concept per negozi (199€), professionisti (549€) e aziende (899€)."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "author", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/realizzazioni" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/realizzazioni" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Realizzazioni siti web reali e concept — Portfolio 4 Web Lab Padova" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Portfolio 4 Web Lab: lavori reali online e concept di siti web per negozi, professionisti e aziende a Padova e in tutta Italia. SEO, UX e conversione."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og/realizzazioni-4weblab.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: "Portfolio 4 Web Lab — realizzazioni e concept di siti web a Padova" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Realizzazioni siti web reali e concept — 4 Web Lab Padova" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Lavori reali pubblicati e concept di siti web per negozi, professionisti e aziende. 4 Web Lab, agenzia web di Padova." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og/realizzazioni-4weblab.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://4weblab.it/realizzazioni#collectionpage",
        url: "https://4weblab.it/realizzazioni",
        name: "Realizzazioni Siti Web Padova — Portfolio 4 Web Lab",
        description: "Portfolio di 4 Web Lab, agenzia web di Padova: demo e concept di siti web per negozi, professionisti e aziende in tutta Italia.",
        keywords: "realizzazione siti web Padova, portfolio siti web, siti web per negozi, siti web per professionisti, siti web aziendali, 4 Web Lab",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        publisher: { "@id": "https://4weblab.it/#business" },
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: projects.length,
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://4weblab.it/realizzazioni/${p.slug}`,
            name: p.title,
            description: p.description,
            image: `https://4weblab.it${p.image}`
          }))
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Realizzazioni", item: "https://4weblab.it/realizzazioni" }
        ]
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://4weblab.it/realizzazioni#service",
        serviceType: "Realizzazione siti web",
        provider: { "@id": "https://4weblab.it/#business" },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        offers: [
          { "@type": "Offer", name: "Siti web per negozi", price: "199", priceCurrency: "EUR", url: "https://4weblab.it/siti-web-per-negozi" },
          { "@type": "Offer", name: "Siti web per professionisti", price: "549", priceCurrency: "EUR", url: "https://4weblab.it/siti-web-per-professionisti" },
          { "@type": "Offer", name: "Siti web aziendali", price: "899", priceCurrency: "EUR", url: "https://4weblab.it/siti-web-aziendali" }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.18]", style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.35) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
        } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "hero-spotlight" }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-32 -right-32 w-96 h-96 rounded-full", style: {
          background: "radial-gradient(circle, hsl(207 90% 54% / 0.25) 0%, transparent 70%)"
        } }),
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full", style: {
          background: "radial-gradient(circle, hsl(24 95% 53% / 0.18) 0%, transparent 70%)"
        } }),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              variant: "light",
              items: [
                { label: "Home", to: "/" },
                { label: "Realizzazioni" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-primary-foreground/90 border border-primary-foreground/20", style: { background: "hsl(0 0% 100% / 0.06)", backdropFilter: "blur(8px)" }, children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-3.5 h-3.5" }),
            "Portfolio & Concept"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "heading-1 text-primary-foreground mb-6 text-balance", children: "Realizzazioni siti web e concept professionali" }),
          /* @__PURE__ */ jsxs("p", { className: "body-large text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-balance", children: [
            "Portfolio di ",
            /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: "4 Web Lab" }),
            ", agenzia web di Padova: demo e concept di siti web per ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "underline decoration-accent/60 underline-offset-4 hover:text-accent", children: "negozi" }),
            ",",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "underline decoration-accent/60 underline-offset-4 hover:text-accent", children: "professionisti" }),
            " e",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "underline decoration-accent/60 underline-offset-4 hover:text-accent", children: "aziende" }),
            " ",
            "a Padova e in tutta Italia."
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#contatti-finale", className: "hero-cta hero-cta-primary", children: [
            "E adesso creiamo il TUO!",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Progetti reali pubblicati e concept dimostrativi" }),
        /* @__PURE__ */ jsxs("p", { className: "body-base text-muted-foreground", children: [
          "In testa trovi un ",
          /* @__PURE__ */ jsx("strong", { children: "lavoro reale già online" }),
          ", con restyling, SEO e ",
          /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "Google ADS gestite da 4 Web Lab" }),
          ". A seguire, una selezione di ",
          /* @__PURE__ */ jsx("strong", { children: "concept dimostrativi" }),
          " sviluppati per mostrare design, struttura e comunicazione per settori specifici."
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-24 md:pb-32", style: { background: "hsl(var(--surface-alt))" }, children: /* @__PURE__ */ jsx("div", { className: "container-section pt-16 md:pt-20", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8", children: [
        projects.map((p, idx) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.45, delay: Math.min(idx * 0.05, 0.3) },
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/realizzazioni/${p.slug}`,
                "aria-label": `Apri demo: ${p.title}`,
                className: "group block h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-400 hover:-translate-y-1.5",
                style: { boxShadow: "var(--shadow-md)" },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-muted", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: p.image,
                        srcSet: `${p.image} 800w`,
                        sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
                        alt: p.alt,
                        width: 800,
                        height: 500,
                        loading: "lazy",
                        decoding: "async",
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: `absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-sm ${p.badgeVariant === "real" ? "bg-accent text-accent-foreground" : "bg-card/95 text-foreground"}`,
                        children: p.badge
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-7 flex flex-col", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300", children: p.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: p.description }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-5", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-accent flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: f })
                    ] }, f)) }),
                    /* @__PURE__ */ jsxs("span", { className: "mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent", children: [
                      "Approfondisci",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" })
                    ] })
                  ] })
                ]
              }
            )
          },
          p.slug
        )),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-50px" },
            transition: { duration: 0.45, delay: Math.min(projects.length * 0.05, 0.3) },
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: "block h-full bg-card rounded-2xl overflow-hidden border border-dashed border-border",
                style: { boxShadow: "var(--shadow-sm)" },
                "aria-label": "Nuovi concept e realizzazioni in arrivo",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-muted", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: imgComingSoon,
                        alt: "Schizzi e wireframe di nuovi concept di siti web in fase di realizzazione — 4 Web Lab",
                        width: 1280,
                        height: 800,
                        loading: "lazy",
                        decoding: "async",
                        className: "w-full h-full object-cover opacity-90"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" }),
                    /* @__PURE__ */ jsxs("span", { className: "absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-card/95 text-accent backdrop-blur-sm shadow-sm", children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3" }),
                      "In arrivo"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-7 flex flex-col", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: "Nuovi concept in fase di realizzazione" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4 leading-relaxed", children: "Stiamo lavorando a nuove demo e progetti per altri settori: ristorazione, e-commerce, studi professionali e attività locali. Torna a trovarci o contattaci per proporre il tuo settore." }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-5", children: ["Nuovi settori", "Concept esclusivi", "Aggiornamenti periodici"].map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground/80", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-accent flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: f })
                    ] }, f)) }),
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/contatti",
                        className: "mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline",
                        children: [
                          "Proponi il tuo settore",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "section-padding relative overflow-hidden", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-[0.12]", style: {
          backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "container-section relative z-10", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-3xl mx-auto text-center mb-16", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-16 h-1 rounded-full mb-6", style: { background: "var(--gradient-accent)" } }),
            /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-4 text-balance", children: "Ogni progetto mostra molto più del design" }),
            /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/75", children: "Dietro ogni realizzazione c'è un metodo: scelte tecniche, strategiche e visive che lavorano insieme per generare risultati concreti." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: methodPoints.map((m, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-50px" },
              transition: { duration: 0.4, delay: Math.min(i * 0.04, 0.24) },
              className: "rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1",
              style: {
                background: "hsl(0 0% 100% / 0.05)",
                backdropFilter: "blur(12px)",
                borderColor: "hsl(0 0% 100% / 0.12)"
              },
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl mb-4 flex items-center justify-center", style: { background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }, children: /* @__PURE__ */ jsx(m.icon, { className: "w-5 h-5 text-accent-foreground" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-primary-foreground mb-1.5", children: m.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70 leading-relaxed", children: m.desc })
              ]
            },
            m.title
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "contatti-finale", className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx(AnimatedSection, { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden p-10 md:p-16 text-center", style: { background: "var(--gradient-hero)" }, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 opacity-20", style: {
          background: "radial-gradient(ellipse at top, hsl(207 90% 54% / 0.4) 0%, transparent 60%)"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-5 text-balance", children: "Hai visto un progetto vicino alla tua attività?" }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/80 max-w-2xl mx-auto mb-8", children: "Possiamo partire da una demo esistente, adattarla al tuo settore e trasformarla in un sito professionale completo, con struttura SEO, design moderno e contenuti su misura." }),
          /* @__PURE__ */ jsxs(Link, { to: "/contatti", className: "hero-cta hero-cta-primary", children: [
            "Parliamone",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Realizzazioni as default
};
