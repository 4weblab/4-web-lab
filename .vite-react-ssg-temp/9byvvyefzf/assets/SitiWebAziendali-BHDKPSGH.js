import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, C as ContactFormWeb3Forms, F as Footer } from "../main.mjs";
import { ArrowRight, CheckCircle2, Building2, Layers, TrendingUp, Image, Globe, MapPin, LayoutTemplate, Wrench, Settings, Award } from "lucide-react";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { h as heroImg } from "./rb-snc-edilizia-B5wIZHXg.js";
import { c as cncImg } from "./aurum-cnc-D_XL1Q1y.js";
import { i as industrialImg } from "./solaris-industrial-DjkCnBnI.js";
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
import "@radix-ui/react-accordion";
const mockupImg = "/assets/aziendali-mockup-DCD_E25R.webp";
const teamImg = "/assets/aziendali-team-ClFHnkjP.webp";
const SitiWebAziendali = () => {
  const handleContactClick = () => {
    const el = document.getElementById("contatti-aziendali");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Siti Web Aziendali Professionali da 899€ | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Siti web aziendali da 899€ per PMI. Sviluppo su misura, ottimizzazione SEO e Google Ads in Veneto e tutta Italia. Richiedi un preventivo rapido in 24h!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/siti-web-aziendali" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/siti-web-aziendali" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Siti Web Aziendali Professionali da 899€ | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Siti web aziendali da 899€ per PMI. Sviluppo su misura, ottimizzazione SEO e Google Ads in Veneto e tutta Italia. Richiedi un preventivo rapido in 24h!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://4weblab.it/siti-web-aziendali" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Siti Web Aziendali Professionali da 899€ | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Siti web aziendali da 899€ per PMI. Sviluppo su misura, ottimizzazione SEO e Google Ads in Veneto e tutta Italia. Richiedi un preventivo rapido in 24h!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "@id": "https://4weblab.it/siti-web-aziendali#breadcrumb",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Siti web aziendali", item: "https://4weblab.it/siti-web-aziendali" }
            ]
          },
          {
            "@type": "WebPage",
            "@id": "https://4weblab.it/siti-web-aziendali#webpage",
            url: "https://4weblab.it/siti-web-aziendali",
            name: "Realizzazione Siti Web Aziendali in Veneto e Italia | 4 Web Lab",
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            breadcrumb: { "@id": "https://4weblab.it/siti-web-aziendali#breadcrumb" },
            about: { "@id": "https://4weblab.it/siti-web-aziendali#service" },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".aeo-answer", ".aeo-definition", ".aeo-faq-answer"]
            }
          },
          {
            "@type": "LocalBusiness",
            "additionalType": "https://schema.org/InternetMarketingService",
            "@id": "https://4weblab.it/#localbusiness",
            name: "4 Web Lab",
            url: "https://4weblab.it/",
            telephone: "+39 351 465 6042",
            priceRange: "€899+",
            image: "https://4weblab.it/og-image.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Legnaro",
              addressRegion: "PD",
              addressCountry: "IT"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.3447,
              longitude: 11.9606
            },
            parentOrganization: { "@id": "https://4weblab.it/#business" },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" }
            ]
          },
          {
            "@type": "Service",
            "@id": "https://4weblab.it/siti-web-aziendali#service",
            name: "Realizzazione Siti Web Aziendali",
            alternateName: ["Sito web per aziende", "Sito web corporate", "Sito web multipagina B2B"],
            description: "Realizziamo siti web aziendali su misura per PMI e imprese in Veneto e in tutta Italia: design professionale, architettura scalabile, SEO integrato.",
            serviceType: "Corporate Web Design",
            category: "Web Development",
            url: "https://4weblab.it/siti-web-aziendali",
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            provider: { "@id": "https://4weblab.it/#business" },
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" }
            ],
            offers: {
              "@type": "AggregateOffer",
              url: "https://4weblab.it/siti-web-aziendali",
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              lowPrice: "899",
              highPrice: "1299",
              offerCount: 3
            }
          },
          {
            "@type": "FAQPage",
            "@id": "https://4weblab.it/siti-web-aziendali#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto costa un sito web aziendale in Veneto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un sito web aziendale in Veneto costa da 899€ una tantum per la versione base, da 1.299€ per un sito multipagina strutturato, mentre i progetti su misura vengono quotati in base agli obiettivi. I prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base."
                }
              },
              {
                "@type": "Question",
                name: "Quanto tempo serve per realizzare un sito web aziendale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un sito web aziendale richiede in media da 2 a 6 settimane: pochi giorni per una versione base, fino a 4–6 settimane per un sito multipagina strutturato con contenuti su misura, ottimizzazione SEO e integrazioni dedicate."
                }
              },
              {
                "@type": "Question",
                name: "Serve davvero un sito web per un'azienda oggi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: oltre il 90% delle persone cerca un'azienda su Google prima di contattarla. Senza un sito web professionale un'impresa perde credibilità, contatti qualificati e visibilità rispetto ai competitor già presenti online."
                }
              },
              {
                "@type": "Question",
                name: "Qual è la differenza tra sito vetrina e sito aziendale?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un sito vetrina ha 1–3 pagine e presenta in sintesi l'attività, mentre un sito aziendale è multipagina e strutturato per descrivere servizi, identità e contatti, generare lead e posizionarsi su Google con un'architettura scalabile."
                }
              },
              {
                "@type": "Question",
                name: "Quali tipi di siti web aziendali esistono?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Esistono quattro principali tipi di sito web aziendale: sito vetrina (presenza essenziale), sito multipagina (presentazione strutturata di servizi e azienda), sito corporate (grandi aziende con più sedi o lingue) ed e-commerce (vendita online di prodotti)."
                }
              },
              {
                "@type": "Question",
                name: "Realizzate siti web aziendali anche fuori Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: realizziamo siti web aziendali per imprese in tutto il Veneto (Padova, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno) e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto."
                }
              },
              {
                "@type": "Question",
                name: "Posso aggiornare il sito in autonomia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: il sito può essere progettato con un pannello di amministrazione che permette di modificare testi, immagini e nuove sezioni in autonomia, senza intervenire sul codice."
                }
              },
              {
                "@type": "Question",
                name: "Cosa fa un'agenzia di siti web aziendali?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un'agenzia di siti web aziendali progetta, sviluppa e ottimizza siti multipagina per imprese: analizza obiettivi e pubblico, definisce architettura informativa, sviluppa il sito con tecnologie moderne, integra SEO e dati strutturati, fornisce supporto continuativo e, se richiesto, gestisce campagne Google Ads per generare lead qualificati."
                }
              },
              {
                "@type": "Question",
                name: "Un sito web aziendale aiuta davvero ad acquisire clienti B2B?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: un sito aziendale strutturato e ottimizzato è il principale strumento di credibilità nel B2B. Buyer e responsabili acquisti verificano sempre online un potenziale fornitore prima di contattarlo, e un sito chiaro su servizi, casi reali e contatti aumenta in modo significativo la qualità e il volume dei lead in ingresso."
                }
              }
            ]
          },
          {
            "@type": "HowTo",
            "@id": "https://4weblab.it/siti-web-aziendali#howto",
            name: "Come realizziamo un sito web aziendale",
            description: "Il metodo in 4 fasi di 4 Web Lab per progettare e pubblicare un sito web aziendale efficace.",
            totalTime: "P30D",
            step: [
              { "@type": "HowToStep", position: 1, name: "Analisi e briefing", text: "Raccogliamo informazioni su azienda, obiettivi di business e pubblico di riferimento." },
              { "@type": "HowToStep", position: 2, name: "Progettazione", text: "Definiamo struttura, architettura informativa e design coerente con l'identità aziendale." },
              { "@type": "HowToStep", position: 3, name: "Sviluppo", text: "Sviluppiamo il sito con tecnologie moderne, performance elevate e SEO integrato." },
              { "@type": "HowToStep", position: 4, name: "Revisione e lancio", text: "Condividiamo il risultato per le modifiche, pubblichiamo il sito e forniamo supporto." }
            ]
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsx("section", { className: "page-hero", children: /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx(
          PageBreadcrumb,
          {
            items: [
              { label: "Home", to: "/" },
              { label: "Siti aziendali" }
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground", children: "Siti Web Aziendali Professionali: Performance e Conversione per il tuo Business" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance", children: "Siti aziendali multipagina, veloci e ottimizzati per Google e AI. Da 899€, in Veneto e in tutta Italia." }),
        /* @__PURE__ */ jsxs("button", { onClick: handleContactClick, className: "btn-primary inline-flex items-center gap-2 px-10 py-5", children: [
          "Richiedi una valutazione gratuita",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "aeo-answer mt-10 mx-auto max-w-3xl text-left rounded-2xl bg-primary-foreground/8 border border-primary-foreground/15 p-6 md:p-7 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-primary-foreground/95 text-base md:text-lg leading-relaxed mb-4", children: [
            /* @__PURE__ */ jsx("strong", { children: "4 Web Lab" }),
            " realizza siti web aziendali multipagina per PMI italiane, con sede a Legnaro (PD), a partire da ",
            /* @__PURE__ */ jsx("strong", { children: "899€ una tantum" }),
            ". Design su misura, SEO integrato e supporto continuativo, ovunque sia la tua impresa."
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "grid sm:grid-cols-3 gap-3 text-sm text-primary-foreground/85", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-0.5 text-accent flex-shrink-0" }),
              " Esperienza su PMI e settori tecnici"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-0.5 text-accent flex-shrink-0" }),
              " Copertura nazionale, lavoro da remoto"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-0.5 text-accent flex-shrink-0" }),
              " SEO, AI e Google Ads inclusi nel metodo"
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "mb-12 p-6 md:p-8 rounded-2xl bg-accent/5 border border-accent/15", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground text-xl mb-3", children: "Cos'è un sito web aziendale" }),
          /* @__PURE__ */ jsx("p", { className: "aeo-definition text-muted-foreground leading-relaxed", children: "Un sito web aziendale è una piattaforma digitale multipagina che rappresenta online un'impresa, ne presenta servizi, identità e valore, e supporta l'acquisizione di nuovi contatti. A differenza di un semplice sito vetrina, è strutturato, scalabile e ottimizzato per i motori di ricerca, così da accompagnare la crescita del business nel tempo." })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Building2, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Perché un'azienda ha bisogno di un sito strutturato" })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-2 gap-6", staggerDelay: 0.1, children: [
          {
            title: "Credibilità e autorevolezza",
            description: "Un sito web aziendale professionale trasmette solidità e affidabilità, elementi fondamentali per conquistare la fiducia di clienti e partner."
          },
          {
            title: "Presenza online solida",
            description: "Essere presenti online con un sito strutturato significa farsi trovare dove i clienti cercano: su Google, sui motori di ricerca, sul web."
          },
          {
            title: "Acquisizione contatti",
            description: "Un sito web per aziende ben progettato facilita la conversione dei visitatori in contatti qualificati attraverso form, call-to-action e percorsi chiari."
          },
          {
            title: "SEO e crescita nel tempo",
            description: "La realizzazione di un sito web aziendale ottimizzato per i motori di ricerca garantisce visibilità crescente e un flusso costante di nuove opportunità."
          }
        ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-2.5", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.description })
        ] }) }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Cosa realizziamo per le aziende" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", direction: "left", children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-5", children: [
              "Progettiamo siti aziendali multipagina con architetture scalabili e copy orientato alla conversione, evitando i limiti di un ",
              /* @__PURE__ */ jsx(Link, { to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026", className: "text-accent hover:underline font-medium", children: "sito datato che fa perdere clienti" }),
              "."
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "list-none space-y-2.5 not-prose", children: [
              "Architettura multipagina chiara e indicizzabile",
              "Sezioni dedicate a servizi, identità, casi e contatti",
              "CMS opzionale per aggiornare contenuti in autonomia",
              "Performance elevate (Core Web Vitals) e mobile-first",
              "Predisposizione a SEO, AI e campagne Google Ads"
            ].map((it) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-base text-muted-foreground", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mt-1 text-accent flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: it })
            ] }, it)) })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { direction: "right", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: mockupImg,
              alt: "Esempio sito web aziendale multipagina realizzato da 4 Web Lab",
              className: "rounded-2xl shadow-lg w-full aspect-[4/3] object-cover",
              loading: "lazy",
              decoding: "async"
            }
          ) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "heading-2", children: "Siti multipagina e strutturati" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsx(AnimatedSection, { direction: "left", className: "order-2 md:order-1", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: teamImg,
              alt: "Illustrazione della struttura di un sito web multipagina con pagine collegate e ottimizzazione SEO",
              className: "rounded-2xl shadow-lg w-full aspect-[4/3] object-cover",
              loading: "lazy",
              decoding: "async"
            }
          ) }),
          /* @__PURE__ */ jsxs(
            AnimatedSection,
            {
              className: "prose prose-lg max-w-none text-muted-foreground order-1 md:order-2",
              direction: "right",
              children: [
                /* @__PURE__ */ jsx("p", { className: "mb-5", children: "Un sito aziendale strutturato è un ecosistema digitale: gerarchia dei contenuti chiara, navigazione intuitiva, percorsi che guidano il visitatore alla conversione." }),
                /* @__PURE__ */ jsxs("p", { className: "mb-5", children: [
                  "Progettiamo per ",
                  /* @__PURE__ */ jsx("strong", { children: "scalare" }),
                  ": nuove pagine, nuovi servizi o nuove lingue si aggiungono senza compromettere coerenza e posizionamento SEO."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Lavoriamo da remoto in tutta Italia con un metodo collaudato. Tra le competenze parallele integrabili: ",
                  /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "posizionamento su Google e AI" }),
                  " e ",
                  /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "campagne Google Ads B2B" }),
                  "."
                ] })
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "heading-2", children: "Sito vetrina, aziendale o corporate: differenze" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsx("p", { children: "Confronto sintetico tra le tre principali tipologie di sito per un'impresa, con pagine medie, obiettivo principale, costo indicativo e profilo ideale." }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-border/60 bg-white shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-accent/8 text-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Caratteristica" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito vetrina" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito aziendale" }),
            /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito corporate" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Pagine medie" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "1–3" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "5–15" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "15+ (anche multilingua)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Obiettivo" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Presenza online di base" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Presentazione strutturata e lead generation" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Identità di gruppo, più sedi/lingue, investor relations" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Costo indicativo" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "da 549€" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "da 899€ a 1.299€+" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Preventivo su misura" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Ideale per" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Liberi professionisti, micro-imprese" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "PMI che vogliono crescere online" }),
              /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Grandi aziende, gruppi industriali" })
            ] })
          ] })
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Image, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "heading-2", children: "Alcuni siti web aziendali realizzati" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10 max-w-3xl", children: "Una selezione di lavori pubblicati e concept dedicati a imprese italiane, tra settori tecnici, servizi e attività professionali." }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6", staggerDelay: 0.1, children: [
          {
            img: heroImg,
            title: "R.B. s.n.c. – Cittadella (PD)",
            desc: "Sito web aziendale, SEO e Google Ads per impresa di rimozione eternit e rifacimento tetti.",
            to: "/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto"
          },
          {
            img: cncImg,
            title: "Azienda metalmeccanica – concept",
            desc: "Concept di sito aziendale multipagina per PMI metalmeccanica: catalogo prodotti, certificazioni e area B2B.",
            to: "/realizzazioni/demo-metalmeccanica"
          },
          {
            img: industrialImg,
            title: "Azienda fotovoltaico – concept",
            desc: "Concept di sito aziendale per impianti fotovoltaici e accumulo: case studies industriali e lead generation B2B.",
            to: "/realizzazioni/demo-fotovoltaico"
          }
        ].map((item, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(Link, { to: item.to, className: "block group card-elevated overflow-hidden p-0 h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item.img,
              alt: item.title,
              loading: "lazy",
              width: "640",
              height: "400",
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1.5", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
          ] })
        ] }) }, i)) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, className: "mt-8 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/realizzazioni", className: "inline-flex items-center gap-2 text-accent font-medium hover:underline", children: [
          "Vedi tutte le realizzazioni ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Zone servite: Veneto e tutta Italia" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          { name: "Padova", to: "/realizzazione-siti-web-padova" },
          { name: "Venezia" },
          { name: "Vicenza" },
          { name: "Verona" },
          { name: "Treviso" },
          { name: "Rovigo" },
          { name: "Belluno" }
        ].map(
          (c) => c.to ? /* @__PURE__ */ jsxs(
            Link,
            {
              to: c.to,
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-foreground hover:bg-accent/15 transition-colors",
              children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-accent" }),
                " ",
                c.name
              ]
            },
            c.name
          ) : /* @__PURE__ */ jsxs(
            "span",
            {
              className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-sm text-foreground/80",
              children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-accent" }),
                " ",
                c.name
              ]
            },
            c.name
          )
        ) }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: /* @__PURE__ */ jsxs("p", { children: [
          "La sede operativa è a ",
          /* @__PURE__ */ jsx("strong", { children: "Legnaro (PD)" }),
          ", ma realizziamo siti web aziendali per imprese di tutto il Veneto e di qualsiasi altra regione italiana, con un metodo interamente da remoto. Operiamo con ",
          /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-accent hover:underline font-medium", children: "studi professionali" }),
          ", ",
          /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "text-accent hover:underline font-medium", children: "attività commerciali" }),
          " e PMI di settori tecnici e dei servizi."
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Quanto costa un sito web aziendale?" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-10", delay: 0.1, children: /* @__PURE__ */ jsxs("p", { children: [
          "Il costo di un sito web aziendale dipende da struttura, contenuti e obiettivi. Ogni progetto di realizzazione siti web aziendali viene sviluppato su misura per creare uno strumento utile e concreto per l'azienda. Per un quadro più ampio puoi anche leggere la nostra",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/blog/quanto-costa-un-sito-web-nel-2026",
              className: "text-accent hover:underline font-medium",
              children: "guida ai costi reali di un sito web nel 2026"
            }
          ),
          "."
        ] }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-8 mb-10", staggerDelay: 0.1, children: [
          {
            icon: Globe,
            label: "Base",
            title: "Sito base",
            price: "A partire da 899€",
            priceNote: "IVA esclusa",
            description: "Soluzione essenziale per avere una presenza online chiara e professionale, con struttura semplice e contenuti mirati."
          },
          {
            icon: LayoutTemplate,
            label: "Intermedio",
            title: "Sito aziendale strutturato",
            price: "A partire da 1.299€",
            priceNote: "IVA esclusa",
            description: "Progetto completo con più pagine, organizzazione dei contenuti e struttura pensata per presentare un sito web aziendale in modo efficace."
          },
          {
            icon: Wrench,
            label: "Avanzato",
            title: "Progetto su misura",
            price: "Preventivo da definire",
            priceNote: "",
            description: "Soluzione personalizzata in base agli obiettivi dell'azienda, con funzionalità specifiche e sviluppo dedicato."
          }
        ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center p-10 border border-border/50 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-card-hover)]", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4", children: item.label }),
          /* @__PURE__ */ jsx("div", { className: "icon-box w-16 h-16 mx-auto mb-5", children: /* @__PURE__ */ jsx(item.icon, { className: "w-7 h-7 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-foreground mb-3", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5 border-t border-border/50", children: [
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground", children: item.price }),
            item.priceNote && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: item.priceNote })
          ] })
        ] }) }, index)) }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center", delay: 0.3, children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Se desideri capire quale soluzione è più adatta alla tua attività, puoi richiedere una valutazione senza impegno." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleContactClick,
              className: "btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base",
              children: [
                "Richiedi una valutazione gratuita",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Domande frequenti sui siti per imprese" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Risposte rapide alle domande più comuni sui siti web aziendali" }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: [
          {
            question: "Quanto costa un sito web aziendale in Veneto?",
            answer: "Un sito web aziendale in Veneto costa da 899€ una tantum per la versione base, da 1.299€ per un sito multipagina strutturato, mentre i progetti su misura vengono quotati in base agli obiettivi. I prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base."
          },
          {
            question: "Quanto tempo serve per realizzare un sito web aziendale?",
            answer: "Un sito web aziendale richiede in media da 2 a 6 settimane: pochi giorni per una versione base, fino a 4–6 settimane per un sito multipagina strutturato con contenuti su misura, ottimizzazione SEO e integrazioni dedicate."
          },
          {
            question: "Serve davvero un sito web per un'azienda oggi?",
            answer: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Sì: oltre il 90% delle persone cerca un'azienda su Google prima di contattarla. Senza un sito web professionale un'impresa perde credibilità, contatti qualificati e visibilità rispetto ai competitor — ne parliamo nell'articolo",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
                  className: "text-accent hover:underline font-medium",
                  children: "perché il tuo sito non si trova su Google"
                }
              ),
              "."
            ] })
          },
          {
            question: "Qual è la differenza tra sito vetrina e sito aziendale?",
            answer: "Un sito vetrina ha 1–3 pagine e presenta in sintesi l'attività, mentre un sito aziendale è multipagina e strutturato per descrivere servizi, identità e contatti, generare lead e posizionarsi su Google con un'architettura scalabile."
          },
          {
            question: "Quali tipi di siti web aziendali esistono?",
            answer: "Esistono quattro principali tipi di sito web aziendale: sito vetrina (presenza essenziale), sito multipagina (presentazione strutturata di servizi e azienda), sito corporate (grandi aziende con più sedi o lingue) ed e-commerce (vendita online di prodotti)."
          },
          {
            question: "Realizzate siti web aziendali anche fuori Padova?",
            answer: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Sì: realizziamo siti web aziendali per imprese in tutto il Veneto (Padova, Venezia, Vicenza, Verona, Treviso, Rovigo, Belluno) e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto. Trovi altre risposte nella nostra",
              " ",
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/faq-realizzazione-siti-web",
                  className: "text-accent hover:underline font-medium",
                  children: "FAQ completa sulla realizzazione siti web"
                }
              ),
              "."
            ] })
          },
          {
            question: "Posso aggiornare il sito in autonomia?",
            answer: "Sì: il sito può essere progettato con un pannello di amministrazione che permette di modificare testi, immagini e nuove sezioni in autonomia, senza intervenire sul codice."
          },
          {
            question: "Cosa fa un'agenzia di siti web aziendali?",
            answer: "Un'agenzia di siti web aziendali progetta, sviluppa e ottimizza siti multipagina per imprese: analizza obiettivi e pubblico, definisce architettura informativa, sviluppa il sito con tecnologie moderne, integra SEO e dati strutturati, fornisce supporto continuativo e, se richiesto, gestisce campagne Google Ads per generare lead qualificati."
          },
          {
            question: "Un sito web aziendale aiuta davvero ad acquisire clienti B2B?",
            answer: "Sì: un sito aziendale strutturato e ottimizzato è il principale strumento di credibilità nel B2B. Buyer e responsabili acquisti verificano sempre online un potenziale fornitore prima di contattarlo, e un sito chiaro su servizi, casi reali e contatti aumenta in modo significativo la qualità e il volume dei lead in ingresso."
          }
        ].map((faq, index) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `faq-${index}`,
            className: "rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-base pr-4", children: faq.question }) }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5", children: faq.answer })
            ]
          },
          index
        )) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Il nostro metodo" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-8", children: "In 4 Web Lab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato, pensato per collaborazioni da remoto con aziende in tutta Italia. Il nostro processo garantisce trasparenza, tempi certi e qualità in ogni fase della realizzazione del sito web aziendale." }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-5 mb-8", staggerDelay: 0.1, children: [
            {
              step: "01",
              title: "Analisi e briefing",
              description: "Raccogliamo le informazioni sulla tua azienda, i tuoi obiettivi di business e il pubblico di riferimento attraverso un confronto strutturato."
            },
            {
              step: "02",
              title: "Progettazione",
              description: "Definiamo la struttura del sito, l'architettura delle informazioni e il design in linea con l'identità aziendale e gli obiettivi di crescita."
            },
            {
              step: "03",
              title: "Sviluppo",
              description: "Realizziamo il sito web aziendale con tecnologie moderne, garantendo velocità, sicurezza, responsività e ottimizzazione SEO."
            },
            {
              step: "04",
              title: "Revisione e lancio",
              description: "Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo supporto per la gestione."
            }
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: item.step }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-1.5", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.description })
            ] })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx("p", { children: "Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per aziende ovunque si trovino, mantenendo comunicazione costante e risultati misurabili." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Perché scegliere 4 Web Lab" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Siamo una realtà strutturata specializzata nella realizzazione di siti web aziendali. Ecco cosa ci distingue:" }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
            "Specializzazione nei siti web per aziende e PMI: conosciamo le dinamiche e le esigenze delle imprese",
            "Architetture scalabili: ogni sito è progettato per crescere insieme al tuo business",
            "Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto in tutta Italia",
            "Ottimizzazione SEO integrata: ogni pagina è costruita per posizionarsi sui motori di ricerca",
            "Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace e aggiornato"
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx("p", { children: "Scegliere 4 Web Lab significa affidarsi a un partner affidabile per la realizzazione di un sito web aziendale che rappresenti al meglio la tua impresa e ne accompagni la crescita." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-4", children: [
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/siti-web-per-professionisti",
                className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
                children: /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Sito web per partita iva li fate? →" })
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/siti-web-per-negozi",
                className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
                children: /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Vorrei fare il sito del mio negozio →" })
              }
            )
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "contatti-aziendali",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("filter", { id: "az-cta-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
              /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#az-cta-noise)" })
            ] }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "grid md:grid-cols-2 gap-8 items-stretch", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center", children: [
                /* @__PURE__ */ jsx("p", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi un preventivo per il tuo sito web aziendale" }),
                /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Vuoi realizzare un sito web aziendale strutturato e professionale? Contattaci per un confronto senza impegno: lavoriamo con aziende clienti in Veneto e in tutta Italia." }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://wa.me/393514656042",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
                      children: [
                        /* @__PURE__ */ jsxs(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512",
                            role: "img",
                            "aria-label": "WhatsApp",
                            className: "w-6 h-6",
                            children: [
                              /* @__PURE__ */ jsx("circle", { cx: "256", cy: "256", r: "256", fill: "#25D366" }),
                              /* @__PURE__ */ jsx(
                                "path",
                                {
                                  fill: "#FFFFFF",
                                  d: "M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z"
                                }
                              )
                            ]
                          }
                        ),
                        "Scrivici su Whatsapp"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/50 mt-2 text-center", children: /* @__PURE__ */ jsx("strong", { children: "Richiede WhatsApp Web su PC" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: /* @__PURE__ */ jsx(ContactFormWeb3Forms, {}) })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  SitiWebAziendali as default
};
