import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "react-router-dom";
import { H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, C as ContactFormWeb3Forms, F as Footer } from "../main.mjs";
import { MessageCircle, MapPin, CheckCircle2, Briefcase, Layers, Settings, Globe, Image, Link2, HelpCircle } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-b6vWRJCV.js";
import { h as heroImg$1 } from "./dental-hero-DRkimlWq.js";
import { h as heroImg } from "./rb-snc-edilizia-B5wIZHXg.js";
import { h as heroImg$2 } from "./vera-method-hero-DK5OfB24.js";
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
const SitiWebPadova = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Creazione Siti Web Padova e Provincia | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Creazione siti web a Padova e provincia per negozi, professionisti e PMI. Ottimizzazione SEO e AI. Richiedi un'analisi gratis!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/realizzazione-siti-web-padova" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/realizzazione-siti-web-padova" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Creazione Siti Web Padova e Provincia | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Creazione siti web a Padova e provincia per negozi, professionisti e PMI. Ottimizzazione SEO e AI. Richiedi un'analisi gratis!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://4weblab.it/realizzazione-siti-web-padova" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Creazione Siti Web Padova e Provincia | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Creazione siti web a Padova e provincia per negozi, professionisti e PMI. Ottimizzazione SEO e AI. Richiedi un'analisi gratis!"
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Realizzazione siti web Padova", item: "https://4weblab.it/realizzazione-siti-web-padova" }
            ]
          },
          {
            "@type": "LocalBusiness",
            "additionalType": "https://schema.org/InternetMarketingService",
            "@id": "https://4weblab.it/#localbusiness",
            name: "4 Web Lab",
            alternateName: ["Web Studio Padova", "Agenzia Web Padova"],
            url: "https://4weblab.it/",
            telephone: "+39 351 465 6042",
            priceRange: "€199+",
            image: "https://4weblab.it/og-image.webp",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Legnaro",
              addressRegion: "PD",
              postalCode: "35020",
              addressCountry: "IT"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 45.3434,
              longitude: 11.9569
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
            "@id": "https://4weblab.it/realizzazione-siti-web-padova#service",
            name: "Realizzazione Siti Web a Padova",
            alternateName: [
              "Sviluppo siti web Padova",
              "Creazione siti web Padova",
              "Realizzazione siti internet Padova",
              "Web studio Padova"
            ],
            description: "Agenzia web a Padova: realizziamo siti professionali per negozi, studi e aziende del territorio con SEO locale e assistenza dedicata.",
            serviceType: "Web Design",
            areaServed: [
              { "@type": "AdministrativeArea", name: "Veneto" },
              { "@type": "City", name: "Padova" },
              { "@type": "City", name: "Venezia" }
            ],
            url: "https://4weblab.it/realizzazione-siti-web-padova",
            inLanguage: "it-IT",
            isPartOf: { "@id": "https://4weblab.it/#website" },
            provider: { "@id": "https://4weblab.it/#business" },
            offers: {
              "@type": "AggregateOffer",
              url: "https://4weblab.it/realizzazione-siti-web-padova",
              availability: "https://schema.org/InStock",
              priceCurrency: "EUR",
              lowPrice: "199",
              highPrice: "1299",
              offerCount: 3
            }
          },
          {
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quanto costa realizzare un sito web a Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un sito web a Padova costa da 199€ una tantum per un sito vetrina per negozi, da 549€ per i professionisti e da 899€ per le aziende. Per progetti multipagina o e-commerce il range arriva indicativamente fino a 1.299€+. Tutti i prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base."
                }
              },
              {
                "@type": "Question",
                name: "In quanto tempo viene realizzato un sito a Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un sito web a Padova viene realizzato in media in 2–6 settimane: pochi giorni per una versione base, 4–6 settimane per un sito multipagina con contenuti su misura, ottimizzazione SEO locale e integrazioni dedicate."
                }
              },
              {
                "@type": "Question",
                name: "Lavorate solo a Padova città o anche in provincia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Operiamo in tutta la provincia di Padova: Padova città, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Legnaro, Este, Monselice, Cittadella e Piove di Sacco. La nostra sede operativa è a Legnaro (PD)."
                }
              },
              {
                "@type": "Question",
                name: "È possibile incontrarvi di persona a Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: per i progetti che lo richiedono organizziamo incontri di persona a Padova e provincia, su appuntamento. Per la maggior parte delle collaborazioni preferiamo invece confronti rapidi da remoto o telefonici, per ottimizzare i tempi del progetto."
                }
              },
              {
                "@type": "Question",
                name: "Offrite SEO locale per posizionarsi su Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: ogni sito realizzato a Padova viene ottimizzato per la SEO locale con title, meta description, contenuti e dati strutturati pensati per la ricerca geolocalizzata (es. 'parrucchiere Padova', 'commercialista Padova'). Su richiesta gestiamo anche la scheda Google Business Profile."
                }
              },
              {
                "@type": "Question",
                name: "Realizzate siti anche per clienti fuori Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sì: lavoriamo con clienti in tutto il Veneto e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto."
                }
              },
              {
                "@type": "Question",
                name: "Cosa fa un web studio a Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un web studio a Padova si occupa di progettazione, sviluppo, pubblicazione e manutenzione di siti web per attività locali. 4 Web Lab segue l'intero ciclo: analisi, design, sviluppo SEO-friendly, hosting, ottimizzazione locale per Padova e supporto continuativo."
                }
              },
              {
                "@type": "Question",
                name: "Qual è la differenza tra realizzazione, creazione e sviluppo di un sito web?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sono termini usati come sinonimi: realizzazione, creazione e sviluppo di un sito web indicano lo stesso processo, ovvero la progettazione e costruzione di un sito internet professionale. La differenza è solo terminologica; il risultato è un sito online, ottimizzato per Google e pronto a generare contatti."
                }
              },
              {
                "@type": "Question",
                name: "Come scegliere un'agenzia per la creazione di siti internet a Padova?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Per scegliere un'agenzia di creazione siti internet a Padova valuta: portfolio di lavori realizzati, trasparenza dei prezzi, competenze SEO locali, recensioni Google, tempi di risposta e disponibilità di un referente diretto. 4 Web Lab ha sede a Legnaro (PD), prezzi pubblici da 199€ e risposte entro 24h."
                }
              }
            ]
          },
          {
            "@type": "SpeakableSpecification",
            cssSelector: [".aeo-definition", ".aeo-faq-answer"]
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("filter", { id: "padova-hero-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#padova-hero-noise)" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-spotlight", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(PageBreadcrumb, { items: [{ label: "Home", to: "/" }, { label: "Realizzazione siti web Padova" }] }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "heading-1 text-primary-foreground mb-6 text-balance",
              style: { textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" },
              children: "Siti Web che Generano Clienti a Padova e Provincia"
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "heading-1 text-primary-foreground mb-6 text-balance",
              style: { textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" },
              children: /* @__PURE__ */ jsx("span", { className: "block mt-3 text-[0.55em] sm:text-[0.6em] tracking-wide font-semibold opacity-90 leading-tight", children: "Il web studio locale per artigiani, professionisti e PMI che vogliono crescere online." })
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "body-large text-primary-foreground/95 mb-10 max-w-3xl mx-auto text-balance",
              style: { textShadow: "0 1px 2px rgba(0,0,0,0.4)" },
              children: "Progettiamo siti web veloci, ottimizzati SEO e pronti per i motori di ricerca e l'Intelligenza Artificiale. Con sede a Legnaro (PD), aiutiamo le attività di Padova e provincia a farsi trovare da chi cerca i loro servizi. Preventivo personalizzato gratuito in 24 ore."
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  var _a;
                  return (_a = document.getElementById("contatti-padova")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                },
                className: "btn-primary text-lg px-10 py-4",
                "aria-label": "Analizza il mio progetto gratis",
                children: "Analizza il mio progetto gratis"
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/393514656042",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 px-7 py-4 rounded-full border border-primary-foreground/30 text-primary-foreground/95 hover:bg-primary-foreground/10 transition-all text-base font-semibold",
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" }),
                  " Scrivici su WhatsApp"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/95 text-sm sm:text-base font-medium mt-6", children: "Sede a Legnaro (PD) • Risposta entro 24 ore • Assistenza e supporto inclusi" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-background border-b border-border/40", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("div", { className: "aeo-definition rounded-2xl border border-accent/15 bg-accent/5 p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-foreground font-semibold mb-4 text-base", children: "In sintesi: Realizzazione Siti Web a Padova con 4 Web Lab" }),
        /* @__PURE__ */ jsxs("ul", { className: "text-muted-foreground leading-relaxed space-y-2 list-disc pl-5", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Sede:" }),
            " Legnaro (PD) – operativi in tutta la provincia di Padova e Veneto."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Servizi inclusi:" }),
            " Progettazione web, ottimizzazione SEO locale, design responsivo e supporto tecnico continuo."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Tempi di consegna:" }),
            " In media 2-5 settimane."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Target:" }),
            " Negozi, artigiani, liberi professionisti e PMI locali."
          ] })
        ] })
      ] }) }) }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "section-padding bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto mb-12", children: /* @__PURE__ */ jsxs(AnimatedSection, { children: [
          /* @__PURE__ */ jsx("h3", { className: "heading-2 mb-4", children: "Come un Web Studio Locale Posiziona la tua Attività su Google" }),
          /* @__PURE__ */ jsx("p", { className: "aeo-definition body-base text-muted-foreground leading-relaxed", children: 'Realizzare un sito web a Padova non significa solo creare una bella vetrina grafica, ma strutturare una vera e propria calamita per i clienti locali. Ottimizziamo il tuo sito per intercettare le ricerche geolocalizzate dei tuoi potenziali clienti (es. "idraulico Padova", "centro estetico Legnaro", "consulente finanziario Padova"). Il vantaggio di scegliere uno studio del territorio è la combinazione tra una strategia SEO locale mirata, comunicazione diretta e la conoscenza reale del tessuto imprenditoriale padovano.' })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "grid md:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-accent-foreground" }) }),
              /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Web studio a Padova: perché la prossimità fa la differenza" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground", children: "Affidarsi a un'agenzia web di Padova significa avere un interlocutore vicino, raggiungibile in 15 minuti dal centro città, con una comprensione concreta del territorio veneto. Niente call center, niente risposte automatiche: parli sempre direttamente con chi sviluppa e gestisce il tuo sito." })
          ] }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-4", staggerDelay: 0.08, children: [
            "Profonda conoscenza del mercato locale",
            "Comunicazione diretta e senza intermediari",
            "Incontri di persona e supporto sul territorio",
            "Assistenza e aggiornamenti post-lancio",
            "Struttura snella e tempi di risposta rapidi"
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item })
          ] }) }, index)) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "text-center mb-14", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4 mb-4", children: /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Briefcase, { className: "w-6 h-6 text-accent-foreground" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "heading-2 mb-4", children: "Soluzioni Web su Misura per il Tuo Business a Padova" }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground max-w-3xl mx-auto text-balance", children: "Progettiamo esperienze digitali specifiche per ogni tipo di attività locale e aziendale." })
        ] }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6", staggerDelay: 0.1, children: [
          {
            title: "Siti per Professionisti & Studi",
            description: "Presenze digitali autorevoli per medici, avvocati, psicologi e consulenti. Creiamo siti ottimizzati per posizionare il tuo nome su Google, trasmettere massima fiducia e facilitare la prenotazione di appuntamenti o contatti diretti.",
            link: "/siti-web-per-professionisti",
            linkLabel: "Scopri il servizio"
          },
          {
            title: "Siti per Negozi & Attività Locali",
            description: "Siti moderni e pronti per la Local SEO dedicati a negozi, artigiani, ristoranti e showroom. Ottimizziamo la tua presenza per attirare nuovi clienti dal territorio padovano direttamente nel tuo punto vendita fisico o online.",
            link: "/siti-web-per-negozi",
            linkLabel: "Scopri il servizio"
          },
          {
            title: "Siti Aziendali & Lead Generation",
            description: "Piattaforme web complete per PMI e aziende strutturate che necessitano di una presenza online solida, performante e integrata. Progetti orientati alla generazione di contatti commerciali qualificati (lead) e alla conversione.",
            link: "/siti-web-aziendali",
            linkLabel: "Scopri il servizio"
          }
        ].map((card, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: `card-elevated h-full flex flex-col ${card.link ? "cursor-pointer" : ""}`,
            onClick: card.link ? () => navigate(card.link) : void 0,
            children: [
              /* @__PURE__ */ jsx("h3", { className: "heading-3 mb-3", children: card.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground body-base mb-6 flex-1", children: card.description }),
              card.link && /* @__PURE__ */ jsxs(
                Link,
                {
                  to: card.link,
                  className: "inline-flex items-center gap-1.5 text-accent font-semibold link-underline text-sm",
                  children: [
                    card.linkLabel,
                    " →"
                  ]
                }
              )
            ]
          }
        ) }, index)) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "section-padding bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto mb-16", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6 text-accent-foreground" }) }),
            /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Piani e Costi per la Realizzazione di Siti Web a Padova" })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-8", delay: 0.1, children: /* @__PURE__ */ jsx("p", { children: "Confronto sintetico tra le tre tipologie di sito web più richieste a Padova e provincia, con target tipico, numero medio di pagine e range di prezzo una tantum." }) }),
          /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.15, children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-border/60 bg-white shadow-sm", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left text-sm", children: [
            /* @__PURE__ */ jsx("thead", { className: "bg-accent/8 text-foreground", children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Caratteristica" }),
              /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito per negozi" }),
              /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito per professionisti" }),
              /* @__PURE__ */ jsx("th", { className: "px-5 py-4 font-semibold", children: "Sito aziendale" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Target tipico" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Attività commerciali di Padova" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Studi e liberi professionisti" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "PMI della provincia di Padova" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Pagine medie" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "1–3" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "3–6" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "5–15" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Obiettivo principale" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Visibilità locale e contatti" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Autorevolezza e prenotazioni" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "Lead generation e brand" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "border-t border-border/50", children: [
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4 font-medium text-foreground", children: "Prezzo indicativo" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "da 199€" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "da 549€" }),
                /* @__PURE__ */ jsx("td", { className: "px-5 py-4", children: "da 899€ a 1.299€+" })
              ] })
            ] })
          ] }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6 text-accent-foreground" }) }),
            /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Realizzazione Siti Web a Padova: il Nostro Metodo in 4 Step" })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "body-base text-muted-foreground mb-10 max-w-3xl", children: "Dall'idea iniziale al lancio online, seguiamo un processo strutturato e trasparente per garantirti un sito web veloce, sicuro e pronto a generare risultati reali per la tua attività." }) }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-6", staggerDelay: 0.12, children: [
            {
              step: "01",
              title: "01. Analisi Strategica & Obiettivi",
              description: "Studiamo il tuo settore di riferimento a Padova, i tuoi competitor locali e i tuoi obiettivi di business per definire le fondamenta strategiche del progetto prima di scrivere una sola riga di codice."
            },
            {
              step: "02",
              title: "02. Design Web & Esperienza Utente (UX)",
              description: "Progettiamo la struttura del sito e l'interfaccia grafica su misura. Ogni elemento visivo e testuale viene posizionato per guidare l'utente verso l'azione (contatto, chiamata o acquisto) in modo semplice e intuitivo."
            },
            {
              step: "03",
              title: "03. Sviluppo Ottimizzato SEO & AI Ready",
              description: "Sviluppiamo il sito web utilizzando tecnologie moderne e pulite. Ci assicuriamo che le pagine siano ultra-veloci da caricare, perfettamente ottimizzate per i dispositivi mobile e strutturate per essere lette al meglio da Google e dagli assistenti AI."
            },
            {
              step: "04",
              title: "04. Lancio, Monitoraggio & Supporto Continuo",
              description: "Mettiamo online il sito configurando gli strumenti di analisi (Google Search Console e Analytics). Dopo il lancio, non ti lasciamo solo: ti garantiamo supporto continuo, assistenza tecnica e manutenzione per mantenere il sito sempre aggiornato."
            }
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-14 h-14 rounded-full flex-shrink-0 text-lg font-bold text-accent-foreground", children: item.step }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground text-lg mb-1.5", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.description })
            ] })
          ] }) }, index)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "mb-10", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6 text-accent-foreground" }) }),
            /* @__PURE__ */ jsx("h3", { className: "heading-2", children: "Sviluppo Siti Web a Padova e Provincia: la Tua Agenzia di Prossimità" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "body-large text-muted-foreground max-w-3xl", children: "Copriamo capillarmente il territorio padovano per offrire una presenza digitale forte e un supporto tecnico reale, anche direttamente presso la tua sede." })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          "Padova",
          "Abano Terme",
          "Albignasego",
          "Selvazzano Dentro",
          "Vigonza",
          "Cadoneghe",
          "Rubano",
          "Legnaro",
          "Este",
          "Monselice",
          "Cittadella",
          "Piove di Sacco",
          "Vigodarzere",
          "Ponte San Nicolò",
          "Saonara"
        ].map((comune) => /* @__PURE__ */ jsxs(
          "span",
          {
            className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-sm text-foreground/80",
            children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-3.5 h-3.5 text-accent" }),
              " ",
              comune
            ]
          },
          comune
        )) }) }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
            "Con sede operativa a ",
            /* @__PURE__ */ jsx("strong", { children: "Legnaro (PD)" }),
            ", siamo il punto di riferimento concreto per le attività che cercano un servizio di ",
            /* @__PURE__ */ jsx("strong", { children: "sviluppo e creazione di siti internet a Padova" }),
            " e provincia. Lavoriamo fianco a fianco con",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-accent hover:underline font-medium", children: "professionisti" }),
            ",",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "text-accent hover:underline font-medium", children: "commercianti" }),
            " ",
            "e",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "text-accent hover:underline font-medium", children: "aziende" }),
            " ",
            "del territorio, unendo la flessibilità e l'ascolto di uno studio locale alla solidità di strategie collaudate."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Che la tua attività si trovi nel centro storico di Padova o in uno dei comuni limitrofi, l'approccio non cambia: progettiamo soluzioni su misura capaci di convertire i visitatori in clienti." }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Vuoi accelerare i risultati fin da subito? Oltre alla realizzazione del sito, pianifichiamo e gestiamo",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: /* @__PURE__ */ jsx("strong", { children: "campagne Google Ads" }) }),
            " ",
            "per portare traffico qualificato sulle tue pagine fin dal primo giorno di pubblicazione."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Image, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Il Nostro Portfolio: Storie di Successo e Concept Innovativi" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-10 max-w-3xl", children: "Dai un'occhiata ad alcuni dei siti web che abbiamo realizzato per le attività del territorio padovano e ai nostri prototipi di design ad alta conversione." }) }),
        /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-3 gap-6", staggerDelay: 0.1, children: [
          { img: heroImg, title: "R.B. s.n.c. – Cittadella (PD)", desc: "Progetto web completo con ottimizzazione SEO e campagne Google Ads mirate per massimizzare le richieste di preventivo di un'azienda locale leader nella rimozione eternit.", to: "/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto" },
          { img: heroImg$1, title: "Studio dentistico – concept", desc: "Concept di sito web premium progettato per medici e studi dentistici. Un design pulito ed elegante studiato per trasmettere massima fiducia e facilitare la prenotazione delle visite.", to: "/realizzazioni" },
          { img: heroImg$2, title: "Vera Method – concept", desc: "Concept di presenza online per personal trainer e professionisti del benessere. Struttura snella e moderna, focalizzata sulla presentazione del metodo e sulla conversione rapida.", to: "/realizzazioni/demo-personal-trainer-vera-method" }
        ].map((item, i) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs(Link, { to: item.to, className: "block group card-elevated overflow-hidden p-0 h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: item.img, alt: item.title, loading: "lazy", width: "640", height: "400", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1.5", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
          ] })
        ] }) }, i)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "inline-flex items-center gap-2 text-accent font-semibold link-underline", children: "Esplora tutti i nostri progetti →" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Link2, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("p", { className: "heading-2", children: "Approfondisci il servizio adatto alla tua attività" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Se hai un'attività commerciale a Padova puoi partire dalla pagina dedicata ai ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-negozi", className: "text-accent hover:underline font-medium", children: "siti web per negozi" }),
            ", mentre per studi e liberi professionisti abbiamo una sezione specifica sulla ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-accent hover:underline font-medium", children: "realizzazione di siti web per professionisti" }),
            ". Le PMI strutturate trovano un percorso dedicato nella pagina ",
            /* @__PURE__ */ jsx(Link, { to: "/siti-web-aziendali", className: "text-accent hover:underline font-medium", children: "siti web aziendali" }),
            ", con architetture multipagina e lead generation."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Per capire meglio costi, tempistiche e tecnologie ti consigliamo la guida ",
            /* @__PURE__ */ jsx(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-accent hover:underline font-medium", children: "quanto costa un sito web nel 2026" }),
            ", l'approfondimento su ",
            /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-accent hover:underline font-medium", children: "siti creati con intelligenza artificiale" }),
            " e l'analisi su ",
            /* @__PURE__ */ jsx(Link, { to: "/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere", className: "text-accent hover:underline font-medium", children: "Aruba SuperSite" }),
            " per chi sta valutando soluzioni fai-da-te. Se invece ti interessa la visibilità organica oltre Padova, dai un'occhiata alla pagina ",
            /* @__PURE__ */ jsx(Link, { to: "/posizionamento-google-e-ai", className: "text-accent hover:underline font-medium", children: "posizionamento Google e AI" }),
            "."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(HelpCircle, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Domande frequenti sui siti web a Padova" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.05, children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Risposte rapide alle domande più comuni di chi cerca un'agenzia web a Padova." }) }),
        /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.1, children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-3", children: [
          {
            question: "Quanto costa realizzare un sito web a Padova?",
            answer: "Un sito web a Padova costa da 199€ una tantum per un sito vetrina per negozi, da 549€ per i professionisti e da 899€ per le aziende. Per progetti multipagina o e-commerce il range arriva indicativamente fino a 1.299€+. Tutti i prezzi sono IVA esclusa e includono design, sviluppo e ottimizzazione SEO di base."
          },
          {
            question: "In quanto tempo viene realizzato un sito a Padova?",
            answer: "Un sito web a Padova viene realizzato in media in 2–6 settimane: pochi giorni per una versione base, 4–6 settimane per un sito multipagina con contenuti su misura, ottimizzazione SEO locale e integrazioni dedicate."
          },
          {
            question: "Lavorate solo a Padova città o anche in provincia?",
            answer: "Operiamo in tutta la provincia di Padova: Padova città, Abano Terme, Albignasego, Selvazzano Dentro, Vigonza, Cadoneghe, Rubano, Legnaro, Este, Monselice, Cittadella e Piove di Sacco. La nostra sede operativa è a Legnaro (PD)."
          },
          {
            question: "È possibile incontrarvi di persona a Padova?",
            answer: "Sì: per i progetti che lo richiedono organizziamo incontri di persona a Padova e provincia, su appuntamento. Per la maggior parte delle collaborazioni preferiamo confronti rapidi da remoto o telefonici, per ottimizzare i tempi del progetto."
          },
          {
            question: "Offrite SEO locale per posizionarsi su Padova?",
            answer: 'Sì: ogni sito realizzato a Padova viene ottimizzato per la SEO locale con title, meta description, contenuti e dati strutturati pensati per la ricerca geolocalizzata (es. "parrucchiere Padova", "commercialista Padova"). Su richiesta gestiamo anche la scheda Google Business Profile.'
          },
          {
            question: "Realizzate siti anche per clienti fuori Padova?",
            answer: /* @__PURE__ */ jsxs(Fragment, { children: [
              "Sì: lavoriamo con clienti in tutto il Veneto e in qualsiasi altra regione d'Italia, grazie a un metodo collaudato per collaborazioni interamente da remoto. Trovi altre risposte nella nostra",
              " ",
              /* @__PURE__ */ jsx(Link, { to: "/faq-realizzazione-siti-web", className: "text-accent hover:underline font-medium", children: "FAQ completa sulla realizzazione siti web" }),
              "."
            ] })
          },
          {
            question: "Cosa fa un web studio a Padova?",
            answer: "Un web studio a Padova si occupa di progettazione, sviluppo, pubblicazione e manutenzione di siti web per attività locali. 4 Web Lab segue l'intero ciclo: analisi, design, sviluppo SEO-friendly, hosting, ottimizzazione locale per Padova e supporto continuativo."
          },
          {
            question: "Qual è la differenza tra realizzazione, creazione e sviluppo di un sito web?",
            answer: "Sono termini usati come sinonimi: realizzazione, creazione e sviluppo di un sito web indicano lo stesso processo, ovvero la progettazione e costruzione di un sito internet professionale. La differenza è puramente terminologica; il risultato è un sito online, ottimizzato per Google e pronto a generare contatti."
          },
          {
            question: "Come scegliere un'agenzia per la creazione di siti internet a Padova?",
            answer: "Per scegliere un'agenzia di creazione siti internet a Padova valuta: portfolio di lavori realizzati, trasparenza dei prezzi, competenze SEO locali, recensioni Google, tempi di risposta e disponibilità di un referente diretto. 4 Web Lab ha sede a Legnaro (PD), prezzi pubblici da 199€ e risposte entro 24h."
          }
        ].map((faq, index) => /* @__PURE__ */ jsxs(
          AccordionItem,
          {
            value: `faq-padova-${index}`,
            className: "rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6",
            children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left py-5 hover:no-underline", children: /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground text-base pr-4", children: faq.question }) }),
              /* @__PURE__ */ jsx(AccordionContent, { className: "aeo-faq-answer text-muted-foreground text-sm leading-relaxed pb-5", children: faq.answer })
            ]
          },
          index
        )) }) })
      ] }) }) }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "contatti-padova",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("filter", { id: "padova-cta-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
              /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#padova-cta-noise)" })
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
                /* @__PURE__ */ jsx("p", { className: "heading-2 text-primary-foreground mb-6", children: "Vuoi realizzare un sito web professionale a Padova?" }),
                /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Contattaci per un confronto senza impegno." }),
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
              /* @__PURE__ */ jsxs("div", { className: "bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8", children: [
                /* @__PURE__ */ jsx(ContactFormWeb3Forms, {}),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-primary-foreground/60 mt-4 text-center", children: "Sede operativa a Legnaro (PD) – serviamo Padova città e tutta la provincia." })
              ] })
            ] }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  SitiWebPadova as default
};
