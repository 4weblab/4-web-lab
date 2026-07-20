import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { W, A as AnimatedSection, o as openPreferences } from "../main.mjs";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import "vite-react-ssg";
import "@tanstack/react-query";
import "@radix-ui/react-tooltip";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "next-themes";
import "sonner";
import "motion-dom";
import "motion-utils";
import "prop-types";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageTitle = "Cookie Policy | 4 Web Lab";
  const pageDescription = "Informativa sull'utilizzo dei cookie nel sito di 4 Web Lab: cookie tecnici e, previo consenso, cookie statistici Google Analytics 4.";
  const pageUrl = "https://4weblab.it/cookie";
  const pageImage = "https://4weblab.it/og-image.webp";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
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
          { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://4weblab.it/cookie" }
        ]
      }) }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: pageImage }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: pageUrl }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: pageImage })
    ] }),
    /* @__PURE__ */ jsxs("header", { className: "page-hero", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-accent/5 blur-[100px]", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "container-section relative z-10", children: [
        /* @__PURE__ */ jsx(
          PageBreadcrumb,
          {
            className: "!mx-0 !justify-start !mb-5",
            items: [
              { label: "Home", to: "/" },
              { label: "Cookie Policy" }
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "heading-1 text-primary-foreground", children: "Cookie Policy" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "container-section section-padding", children: /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("article", { className: "prose prose-slate max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-8", children: [
        "Ultimo aggiornamento: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT", { month: "long", year: "numeric" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Cosa sono i cookie" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "I cookie sono piccoli file di testo che i siti web visitati inviano al dispositivo dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Cookie utilizzati da questo sito" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-5 leading-relaxed", children: [
          "Il presente sito web utilizza ",
          /* @__PURE__ */ jsx("strong", { children: "cookie tecnici" }),
          " strettamente necessari al funzionamento del sito e, ",
          /* @__PURE__ */ jsx("strong", { children: "previo consenso dell'utente" }),
          ", ",
          /* @__PURE__ */ jsx("strong", { children: "cookie statistici di terze parti" }),
          " ",
          "(Google Analytics 4) per misurare in forma aggregata l'utilizzo del sito. Non sono presenti cookie di profilazione o di marketing."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto rounded-2xl border border-border/40", style: { boxShadow: "var(--shadow-sm)" }, children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-sm min-w-[520px]", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-muted/50", children: [
            /* @__PURE__ */ jsx("th", { className: "border-b border-border/40 p-4 text-left font-semibold", children: "Nome" }),
            /* @__PURE__ */ jsx("th", { className: "border-b border-border/40 p-4 text-left font-semibold", children: "Tipo" }),
            /* @__PURE__ */ jsx("th", { className: "border-b border-border/40 p-4 text-left font-semibold", children: "Finalità" }),
            /* @__PURE__ */ jsx("th", { className: "border-b border-border/40 p-4 text-left font-semibold", children: "Durata" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { className: "text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "cookie-consent-v1" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Tecnico (localStorage)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Memorizza le scelte dell'utente sul banner cookie (categorie accettate/rifiutate)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "6 mesi" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "web3forms_last_send" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Tecnico (localStorage)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Protezione anti-spam del modulo di contatto (limite di 1 invio al minuto)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Persistente (fino a cancellazione manuale)" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "_ga" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Statistica — terza parte (Google)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Identifica in modo pseudonimo l'utente per Google Analytics 4 (misurazione aggregata del traffico)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "2 anni" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "_ga_<container-id>" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Statistica — terza parte (Google)" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "Mantiene lo stato di sessione per la property Google Analytics 4" }),
              /* @__PURE__ */ jsx("td", { className: "p-4", children: "2 anni" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-5 text-sm leading-relaxed", children: [
          /* @__PURE__ */ jsx("strong", { children: "Servizi di terze parti:" }),
          " il sito carica i font tipografici da Google Fonts (solo CSS, senza impostazione di cookie) e invia i dati del modulo di contatto al servizio Web3Forms al momento dell'invio. L'hosting su Netlify potrebbe utilizzare cookie tecnici di bilanciamento del carico, esenti da consenso ai sensi della normativa vigente."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Cookie statistici — Google Analytics 4" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
          "Il sito può utilizzare ",
          /* @__PURE__ */ jsx("strong", { children: "Google Analytics 4" }),
          ", uno strumento di analisi web fornito da ",
          /* @__PURE__ */ jsx("strong", { children: "Google Ireland Limited" }),
          " (Gordon House, Barrow Street, Dublino 4, Irlanda), per raccogliere in forma aggregata e pseudonima informazioni su come i visitatori interagiscono con il sito (pagine viste, tempo di permanenza, dispositivo, sorgente di traffico)."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed text-sm", children: [
          /* @__PURE__ */ jsx("strong", { children: "ID misurazione:" }),
          " ",
          /* @__PURE__ */ jsx("code", { children: "G-HWVJ1KWYSN" }),
          ". Il tag di Google è caricato tramite ",
          /* @__PURE__ */ jsx("strong", { children: "Google Consent Mode v2" }),
          " con stato predefinito",
          /* @__PURE__ */ jsx("em", { children: " denied" }),
          ": nessun cookie ",
          /* @__PURE__ */ jsx("em", { children: "_ga" }),
          " / ",
          /* @__PURE__ */ jsx("em", { children: "_ga_HWVJ1KWYSN" }),
          " viene scritto finché non presti consenso ai cookie statistici tramite il banner."
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Finalità:" }),
            " misurazione statistica del traffico e miglioramento dell'esperienza utente."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Base giuridica:" }),
            " consenso dell'utente ai sensi dell'art. 122 del Codice Privacy e delle Linee guida del Garante del 10 giugno 2021, nonché art. 6.1.a GDPR."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dati trattati:" }),
            " identificatori pseudonimi (cookie ",
            /* @__PURE__ */ jsx("em", { children: "_ga" }),
            ",",
            " ",
            /* @__PURE__ */ jsx("em", { children: "_ga_<container-id>" }),
            "), indirizzo IP ",
            /* @__PURE__ */ jsx("strong", { children: "anonimizzato" }),
            " ",
            "(GA4 non memorizza né registra l'IP completo), informazioni tecniche sul browser e sul dispositivo, eventi di navigazione."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Trasferimento extra-UE:" }),
            " i dati possono essere trasferiti negli Stati Uniti. Google LLC aderisce all'",
            /* @__PURE__ */ jsx("em", { children: "EU-U.S. Data Privacy Framework" }),
            " e ha adottato le ",
            /* @__PURE__ */ jsx("em", { children: "Clausole Contrattuali Standard" }),
            " approvate dalla Commissione Europea, oltre a misure tecniche e organizzative supplementari."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Conservazione:" }),
            " 14 mesi (impostazione minima consigliata) per i dati a livello utente/evento; i cookie ",
            /* @__PURE__ */ jsx("em", { children: "_ga" }),
            " hanno durata 2 anni salvo rinnovo o cancellazione."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Profilazione:" }),
            " le funzioni pubblicitarie di Google Analytics (Google Signals, remarketing, condivisione dati con Google Ads) ",
            /* @__PURE__ */ jsx("strong", { children: "non sono attive" }),
            ". Il servizio è configurato in modalità puramente statistica."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4 leading-relaxed", children: [
          "Per maggiori informazioni:",
          " ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://policies.google.com/privacy",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-accent hover:underline font-medium",
              children: "Informativa privacy di Google"
            }
          ),
          " · ",
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://tools.google.com/dlpage/gaoptout",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-accent hover:underline font-medium",
              children: "Componente di opt-out del browser"
            }
          ),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Revoca e modifica del consenso" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "Puoi modificare o revocare in qualsiasi momento le tue preferenze sui cookie statistici. La revoca ha effetto immediato e non pregiudica la liceità del trattamento avvenuto prima della revoca stessa." }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Icona flottante" }),
            " (biscotto) sempre visibile in basso a sinistra su ogni pagina del sito."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Link ",
            /* @__PURE__ */ jsx("strong", { children: '"Gestisci cookie"' }),
            " nel piè di pagina di ogni pagina."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: openPreferences,
                className: "text-accent hover:underline font-medium",
                children: "Apri ora il pannello preferenze"
              }
            ),
            "."
          ] }),
          /* @__PURE__ */ jsx("li", { children: "Eliminazione dei cookie direttamente dalle impostazioni del browser (vedi sezione seguente)." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4 text-sm leading-relaxed", children: "Il consenso ha una durata massima di 6 mesi: allo scadere, o quando la Cookie Policy viene aggiornata in modo sostanziale, il banner ti verrà nuovamente proposto." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Gestione dei cookie dal browser" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "L'utente può gestire le proprie preferenze sui cookie direttamente dal proprio browser. Ecco i link alle guide per i browser più diffusi:" }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
          { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
          { name: "Mozilla Firefox", url: "https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" },
          { name: "Safari", url: "https://support.apple.com/it-it/guide/safari/sfri11471/mac" },
          { name: "Microsoft Edge", url: "https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" }
        ].map((browser) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: browser.url, target: "_blank", rel: "noopener noreferrer", className: "text-accent hover:underline font-medium", children: browser.name }) }, browser.name)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4", children: [
          /* @__PURE__ */ jsx("strong", { children: "Nota:" }),
          " la disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito web."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Base giuridica" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed mb-3", children: [
          /* @__PURE__ */ jsx("strong", { children: "Cookie tecnici:" }),
          " non richiedono il consenso dell'utente ai sensi dell'art. 122, comma 1, del Codice Privacy e delle Linee guida del Garante per la protezione dei dati personali in materia di cookie e altri strumenti di tracciamento (10 giugno 2021), in quanto strettamente necessari all'erogazione del servizio richiesto."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsx("strong", { children: "Cookie statistici di terze parti (Google Analytics 4):" }),
          " vengono installati esclusivamente ",
          /* @__PURE__ */ jsx("strong", { children: "previo consenso esplicito, libero, specifico e informato" }),
          " dell'utente, prestato tramite il banner cookie (art. 122 Codice Privacy e art. 6.1.a GDPR). Il consenso è documentato tramite la registrazione puntuale delle scelte e delle relative marche temporali sul dispositivo dell'utente."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "Contatti" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "Per qualsiasi domanda relativa alla presente Cookie Policy, l'utente può contattare il Titolare del trattamento ai recapiti indicati nella",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-accent hover:underline font-medium", children: "Privacy Policy" }),
          "."
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("footer", { className: "py-8", style: { background: "var(--gradient-surface)" }, children: /* @__PURE__ */ jsx("div", { className: "container-section text-center", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "text-muted-foreground hover:text-foreground transition-colors duration-300",
        children: "← Torna alla home"
      }
    ) }) })
  ] });
};
export {
  CookiePolicy as default
};
