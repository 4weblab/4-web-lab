import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { H as Helmet, A as AnimatedSection } from "../main.mjs";
import { P as PageBreadcrumb } from "./PageBreadcrumb-DNP5WCMC.js";
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
import "react-fast-compare";
import "invariant";
import "shallowequal";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pageTitle = "Privacy Policy | 4 Web Lab";
  const pageDescription = "Informativa sul trattamento dei dati personali di 4 Web Lab, ai sensi del GDPR. Scopri come raccogliamo e utilizziamo i tuoi dati.";
  const pageUrl = "https://4weblab.it/privacy";
  const pageImage = "https://4weblab.it/og-image.webp";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
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
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://4weblab.it/privacy" }
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
              { label: "Privacy Policy" }
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "heading-1 text-primary-foreground", children: "Privacy Policy" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "container-section section-padding", children: /* @__PURE__ */ jsx(AnimatedSection, { children: /* @__PURE__ */ jsxs("article", { className: "prose prose-slate max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-8", children: [
        "Ultimo aggiornamento: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("it-IT", { month: "long", year: "numeric" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "1. Titolare del trattamento" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "Il Titolare del trattamento dei dati personali è:" }),
        /* @__PURE__ */ jsxs("address", { className: "not-italic text-muted-foreground p-5 rounded-2xl border border-border/40 leading-relaxed", style: { background: "var(--glass-bg)", backdropFilter: "blur(8px)" }, children: [
          /* @__PURE__ */ jsx("strong", { children: "4 Web Lab di Fullin Carlo" }),
          /* @__PURE__ */ jsx("br", {}),
          "Via Belluno 44",
          /* @__PURE__ */ jsx("br", {}),
          "35020 Legnaro (PD)",
          /* @__PURE__ */ jsx("br", {}),
          "P.IVA: 05765760284",
          /* @__PURE__ */ jsx("br", {}),
          "Email: info@4weblab.it"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "2. Dati raccolti" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "Il presente sito web raccoglie esclusivamente i seguenti dati:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dati di navigazione:" }),
            " informazioni tecniche acquisite automaticamente dal server (indirizzo IP anonimizzato, tipo di browser, sistema operativo, orario di accesso). Questi dati sono utilizzati esclusivamente per finalità statistiche aggregate e anonime."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dati forniti volontariamente:" }),
            " eventuali dati personali comunicati dall'utente tramite il contatto WhatsApp (nome, numero di telefono, contenuto dei messaggi)."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Dati raccolti tramite strumenti di misurazione:" }),
            " previo consenso dell'utente, il sito utilizza ",
            /* @__PURE__ */ jsx("strong", { children: "Google Analytics 4" }),
            " per raccogliere in forma aggregata e pseudonima dati statistici sull'utilizzo del sito (pagine viste, tempo di permanenza, dispositivo, sorgente di traffico). L'indirizzo IP è anonimizzato e le funzioni pubblicitarie di Google Analytics non sono attive. Per il dettaglio dei cookie utilizzati e per revocare il consenso consulta la",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/cookie", className: "text-accent hover:underline font-medium", children: "Cookie Policy" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "3. Finalità del trattamento" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "I dati personali sono trattati per le seguenti finalità:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Rispondere alle richieste di informazioni e preventivi" }),
          /* @__PURE__ */ jsx("li", { children: "Fornire i servizi richiesti" }),
          /* @__PURE__ */ jsx("li", { children: "Adempiere agli obblighi di legge" }),
          /* @__PURE__ */ jsx("li", { children: "Garantire il corretto funzionamento del sito web" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "4. Base giuridica" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Il trattamento dei dati si fonda sul consenso dell'interessato (art. 6.1.a GDPR) espresso al momento del contatto o dell'accettazione dei cookie statistici tramite banner, sull'esecuzione di un contratto o di misure precontrattuali (art. 6.1.b GDPR), e sugli obblighi legali del titolare (art. 6.1.c GDPR)." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "5. Conservazione dei dati" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "I dati personali sono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti, e comunque non oltre i termini previsti dalla legge. I dati di contatto sono conservati per un massimo di 24 mesi dall'ultima interazione.",
          " ",
          "I dati raccolti tramite Google Analytics 4 sono conservati per 14 mesi (impostazione minima consigliata); i relativi cookie hanno durata massima 2 anni."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "6. Trasferimenti di dati extra-UE" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
          "Alcuni servizi di terze parti utilizzati dal sito (in particolare Google Analytics 4 fornito da Google Ireland Limited, con eventuale ulteriore trattamento da parte di Google LLC negli Stati Uniti) possono comportare il trasferimento di dati personali al di fuori dello Spazio Economico Europeo. Tali trasferimenti avvengono in presenza delle garanzie previste dagli artt. 44 e ss. del GDPR: adesione di Google LLC all'",
          /* @__PURE__ */ jsx("em", { children: "EU-U.S. Data Privacy Framework" }),
          ", adozione delle ",
          /* @__PURE__ */ jsx("em", { children: "Clausole Contrattuali Standard" }),
          " approvate dalla Commissione Europea e implementazione di misure tecniche e organizzative supplementari (pseudonimizzazione, anonimizzazione dell'IP, cifratura in transito e a riposo)."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "7. Diritti dell'interessato" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: "Ai sensi degli articoli 15-22 del GDPR, l'interessato ha diritto di:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Accedere ai propri dati personali" }),
          /* @__PURE__ */ jsx("li", { children: "Ottenere la rettifica o la cancellazione dei dati" }),
          /* @__PURE__ */ jsx("li", { children: "Limitare il trattamento" }),
          /* @__PURE__ */ jsx("li", { children: "Opporsi al trattamento" }),
          /* @__PURE__ */ jsx("li", { children: "Richiedere la portabilità dei dati" }),
          /* @__PURE__ */ jsx("li", { children: "Revocare il consenso in qualsiasi momento" }),
          /* @__PURE__ */ jsx("li", { children: "Proporre reclamo all'Autorità Garante per la protezione dei dati personali" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Per esercitare i propri diritti, l'interessato può contattare il Titolare all'indirizzo email indicato nella sezione 1." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "8. Sicurezza" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione. Il sito utilizza il protocollo HTTPS per garantire la cifratura delle comunicazioni." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "heading-3 mb-4", children: "9. Modifiche alla Privacy Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Il Titolare si riserva il diritto di modificare la presente Privacy Policy in qualsiasi momento, dandone comunicazione agli utenti su questa pagina. Si consiglia di consultare periodicamente questa pagina per verificare eventuali aggiornamenti." })
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
  PrivacyPolicy as default
};
