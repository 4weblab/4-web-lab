import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { c as cn, H as Helmet, a as Header, A as AnimatedSection, S as StaggerContainer, b as StaggerItem, m as motion, C as ContactFormWeb3Forms, F as Footer } from "../main.mjs";
import { Users, CheckCircle2, Target, Settings, Award, Euro, Gift, Check } from "lucide-react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
import "vite-react-ssg";
import "@tanstack/react-query";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "next-themes";
import "sonner";
import "motion-dom";
import "motion-utils";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const SitiWebProfessionisti = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Siti web per Professionisti, SEO locale | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Sito web per studi e professionisti: avvocati, notai, geometri, architetti, idraulici, elettricisti. Sviluppo personalizzato e mirato, da 549€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/siti-web-per-professionisti" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
          { "@type": "ListItem", position: 2, name: "Siti web per professionisti", item: "https://4weblab.it/siti-web-per-professionisti" }
        ]
      }) }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/siti-web-per-professionisti" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Siti web per Professionisti, SEO locale | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          property: "og:description",
          content: "Sito web per studi e professionisti: avvocati, notai, geometri, architetti, idraulici, elettricisti. Sviluppo personalizzato e mirato, da 549€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://4weblab.it/siti-web-per-professionisti" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Siti web per Professionisti, SEO locale | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Sito web per studi e professionisti: avvocati, notai, geometri, architetti, idraulici, elettricisti. Sviluppo personalizzato e mirato, da 549€."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://4weblab.it/siti-web-per-professionisti#service",
        name: "Siti Web per Professionisti",
        description: "Realizziamo siti web professionali per avvocati, commercialisti, medici e liberi professionisti. Struttura chiara, SEO locale e assistenza continua.",
        serviceType: "Web Design for Professionals",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Veneto" },
          { "@type": "City", name: "Padova" },
          { "@type": "City", name: "Venezia" }
        ],
        url: "https://4weblab.it/siti-web-per-professionisti",
        inLanguage: "it-IT",
        isPartOf: { "@id": "https://4weblab.it/#website" },
        provider: { "@id": "https://4weblab.it/#business" },
        offers: {
          "@type": "Offer",
          url: "https://4weblab.it/siti-web-per-professionisti",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "549",
            priceCurrency: "EUR"
          }
        }
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
              { label: "Siti per professionisti" }
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground", children: "Siti Web per Professionisti" }),
        /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance", children: "In 4 Web Lab realizziamo siti web per professionisti o studi professionali a Padova e in tutta Italia. Il nostro approccio si fonda su un metodo strutturato, pensato per garantire affidabilità, chiarezza e risultati concreti nella crescita online. Lavoriamo da remoto con un processo organizzato che permette collaborazioni efficaci ovunque ti trovi." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              var _a;
              return (_a = document.getElementById("contatti-professionisti")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
            },
            className: "btn-primary inline-flex items-center gap-2 mt-2 px-10 py-5",
            children: "Contattaci"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "A chi è rivolto il servizio" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Il nostro servizio di realizzazione siti web per professionisti è pensato per chi opera nel mondo delle libere professioni e degli studi professionali. Ci rivolgiamo a:" }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
            "Consulenti e liberi professionisti che desiderano presentarsi online in modo autorevole",
            "Studi professionali (legali, commercialisti, architetti, ingegneri, notai) che necessitano di un sito web professionale",
            "Tecnici e periti che vogliono ampliare la propria visibilità sul territorio nazionale",
            "Professionisti indipendenti alla ricerca di una presenza digitale strutturata e affidabile ( elettricista, idraulico, pittore etc. ) "
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx("p", { children: "Indipendentemente dal settore di appartenenza, il nostro obiettivo è offrire siti web per professionisti che riflettano competenza, serietà e attenzione al cliente." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Cosa deve comunicare un sito web per professionisti" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-7", children: "Un sito web professionale per chi opera nel mondo delle professioni deve trasmettere valori fondamentali che generano fiducia e facilitano il contatto con potenziali clienti. Ecco gli elementi chiave:" }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "grid md:grid-cols-2 gap-6 mb-8", staggerDelay: 0.1, children: [
            {
              title: "Autorevolezza",
              description: "Il sito deve riflettere la competenza e l'esperienza del professionista, creando una prima impressione solida e credibile."
            },
            {
              title: "Chiarezza dei servizi",
              description: "I servizi offerti devono essere presentati in modo chiaro e comprensibile, permettendo al visitatore di capire immediatamente cosa può aspettarsi."
            },
            {
              title: "Fiducia e affidabilità",
              description: "Elementi come testimonianze, certificazioni e una comunicazione trasparente contribuiscono a costruire un rapporto di fiducia."
            },
            {
              title: "Semplicità di contatto",
              description: "Form di contatto, numeri di telefono e call-to-action ben visibili facilitano la conversione del visitatore in cliente."
            }
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "card-glass h-full hover:-translate-y-1.5 transition-all duration-400", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-2.5", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.description })
          ] }) }, index)) }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Un sito web per professionisti ben progettato diventa uno strumento di lavoro essenziale, capace di attrarre nuovi clienti e consolidare la reputazione professionale, molto più di quanto possa fare",
            " ",
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
                className: "text-accent hover:underline font-medium",
                children: "una semplice presenza sui social network"
              }
            ),
            "."
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Settings, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Il nostro metodo di lavoro" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsxs("p", { className: "mb-8", children: [
            "In 4 Web Lab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato, ideale anche per collaborazioni da remoto con professionisti in tutta Italia. Il nostro processo garantisce trasparenza in ogni fase. Puoi vedere alcuni esempi nelle nostre ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni" }),
            ". Per chi vuole ricevere richieste di consulenza già nei primi giorni online, valutiamo insieme anche ",
            /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-accent hover:underline font-medium", children: "la pubblicità su Google ADS" }),
            " dedicata ai professionisti:"
          ] }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-5 mb-8", staggerDelay: 0.1, children: [
            {
              step: "01",
              title: "Analisi e briefing",
              description: "Raccogliamo le informazioni sulla tua attività, i tuoi obiettivi e il pubblico di riferimento attraverso un confronto strutturato."
            },
            {
              step: "02",
              title: "Progettazione",
              description: "Definiamo la struttura del sito, l'architettura delle informazioni e il design in linea con la tua identità professionale."
            },
            {
              step: "03",
              title: "Sviluppo",
              description: "Realizziamo il sito web professionale con tecnologie moderne, garantendo velocità, sicurezza e ottimizzazione SEO."
            },
            {
              step: "04",
              title: "Revisione e lancio",
              description: "Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo formazione per la gestione."
            }
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground", children: item.step }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-1.5", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.description })
            ] })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx("p", { children: "Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per professionisti ovunque si trovino, mantenendo comunicazione costante e tempi certi." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "section-padding", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-accent-foreground" }) }),
          /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Perché scegliere 4 Web Lab" })
        ] }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground", delay: 0.1, children: [
          /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Siamo una realtà strutturata specializzata nella realizzazione di siti web per professionisti. Ecco cosa ci distingue:" }),
          /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-3 mb-8", staggerDelay: 0.08, children: [
            "Approccio consulenziale: non vendiamo solo un sito, ma una soluzione pensata per i tuoi obiettivi",
            "Esperienza nel settore professionale: conosciamo le esigenze specifiche di chi opera nelle libere professioni",
            "Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto",
            "Attenzione ai risultati: ogni sito è progettato per generare fiducia e facilitare il contatto con nuovi clienti",
            "Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace"
          ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }) }, index)) }),
          /* @__PURE__ */ jsx("p", { children: "Scegliere 4 Web Lab significa affidarsi a un partner affidabile per la realizzazione di un sito web professionale che rappresenti al meglio la tua attività professionale." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "section-padding bg-background", children: [
        /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs(AnimatedSection, { className: "flex items-center gap-4 mb-10", children: [
            /* @__PURE__ */ jsx("div", { className: "icon-box w-13 h-13", children: /* @__PURE__ */ jsx(Euro, { className: "w-6 h-6 text-accent-foreground" }) }),
            /* @__PURE__ */ jsx("h2", { className: "heading-2", children: "Quanto costa un sito web per professionisti" })
          ] }),
          /* @__PURE__ */ jsx(AnimatedSection, { className: "prose prose-lg max-w-none text-muted-foreground mb-12", delay: 0.1, children: /* @__PURE__ */ jsxs("p", { children: [
            "Ottimizziamo il costo di realizzazione dei nostri servizi cucendo il sito su misura del cliente, in base alle sue reali necessità e in base agli obiettivi che vuole raggiungere. Se vuoi un confronto più ampio, abbiamo riassunto",
            " ",
            /* @__PURE__ */ jsx(
              Link,
              {
                to: "/blog/quanto-costa-un-sito-web-nel-2026",
                className: "text-accent hover:underline font-medium",
                children: "cosa incide davvero sul prezzo di un sito web nel 2026"
              }
            ),
            "."
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedSection, { delay: 0.2, children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-start", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "card-glass p-10 relative overflow-hidden",
                style: {
                  border: "1px solid hsl(210 30% 88%)",
                  boxShadow: "0 8px 32px -4px hsl(210 73% 15% / 0.12), 0 2px 8px -2px hsl(210 73% 15% / 0.07)"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wide",
                      style: { background: "var(--gradient-accent)", color: "white" },
                      children: "TUTTO INCLUSO"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-accent font-semibold mb-6 bg-accent/10 px-5 py-2.5 rounded-full", children: [
                      /* @__PURE__ */ jsx(Gift, { className: "w-5 h-5", "aria-hidden": "true" }),
                      /* @__PURE__ */ jsx("span", { children: "Offerta Completa" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground block mb-2", children: "a partire da" }),
                      /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-6xl font-serif font-bold text-foreground", children: "€549" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: "una tantum · IVA esclusa" }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-4", children: "Una soluzione ideale per chi cerca la realizzazione di un sito web professionale completo, ovunque si trovi in Italia." })
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-4 mb-10", role: "list", children: [
                    "Sviluppo sito One page professionale",
                    "Personalizzazione contenuti",
                    "Scelta font e tipografia",
                    "Palette colori su misura",
                    "Ottimizzazione SEO"
                  ].map((feature, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsx(Check, { className: "w-3 h-3 text-accent", "aria-hidden": "true" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-foreground", children: feature })
                  ] }, index)) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "lg",
                      className: "w-full rounded-2xl h-13 text-base font-semibold",
                      onClick: () => {
                        var _a;
                        return (_a = document.getElementById("contatti-professionisti")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                      },
                      children: "Richiedi preventivo"
                    }
                  ) })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center h-full space-y-6", children: /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-5", staggerDelay: 0.1, children: [
              {
                title: "Struttura pensata per il tuo settore",
                description: "Ogni sito viene progettato tenendo conto delle specificità della tua professione e del tuo target di riferimento."
              },
              {
                title: "Nessun vincolo contrattuale",
                description: "4 Web Lab resta al fianco delle tue necessità di sviluppo online ma senza firme o vincoli di nessun tipo."
              },
              {
                title: "Gestione dell' hosting e dell'assistenza",
                description: "​4 Web Lab può gestire l'hosting del tuo spazio, noi ci assicuriamo che tutto funzioni sempre al meglio e tu pensi alla tua attività."
              }
            ].map((item, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-accent flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-foreground mb-1", children: item.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
              ] })
            ] }) }, index)) }) })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-2xl mx-auto mt-12 space-y-4 text-center", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/siti-web-aziendali",
              className: "block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group",
              children: /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-foreground group-hover:text-accent transition-colors", children: "Ho bisogno di un sito web per la mia azienda →" })
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
      ] }),
      /* @__PURE__ */ jsxs(
        "section",
        {
          id: "contatti-professionisti",
          className: "section-padding relative overflow-hidden",
          style: { background: "var(--gradient-hero)" },
          children: [
            /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("filter", { id: "sat-cta-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
              /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#sat-cta-noise)" })
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
                /* @__PURE__ */ jsx("h2", { className: "heading-2 text-primary-foreground mb-6", children: "Richiedi un preventivo per il tuo sito web professionale" }),
                /* @__PURE__ */ jsx("p", { className: "body-large text-primary-foreground/70 mb-8", children: "Vuoi realizzare un sito web per professionisti che ti rappresenti al meglio? Contattaci per un confronto senza impegno: lavoriamo con professionisti in tutta Italia." }),
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
  SitiWebProfessionisti as default
};
