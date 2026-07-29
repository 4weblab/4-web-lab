import { j as jsxDEV, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, c as ContactSection, F as Footer, b as Fragment } from "../main.mjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { HelpCircle, ChevronDown } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-bEWc7UIl.js";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
import "clsx";
import "tailwind-merge";
const faqs = [
  {
    id: "costo-sito-web",
    question: "Quanto costa realizzare un sito web?",
    answerText: "Da 199€ una tantum per una one-page professionale. Il prezzo cresce in base a numero di pagine, funzionalità e ottimizzazione SEO: per un sito vetrina aziendale si parte da 899€, per un professionista da 549€. Un progetto più completo richiede un investimento maggiore, ma consente una comunicazione più strutturata e una migliore capacità di generare contatti nel tempo.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Da 199€" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 18,
        columnNumber: 5
      }, void 0),
      " una tantum per una one-page professionale. Il prezzo cresce in base a numero di pagine, funzionalità e ottimizzazione SEO: per un sito vetrina aziendale si parte da 899€, per un professionista da 549€. Un progetto più completo richiede un investimento maggiore, ma consente una comunicazione più strutturata e una migliore capacità di generare contatti nel tempo.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 18,
        columnNumber: 393
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Quanto costa un sito web nel 2026?" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 18,
        columnNumber: 399
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 18,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "prezzo-sito-professionista",
    question: "Qual è il prezzo di un sito web per un professionista?",
    answerText: "Da 549€ una tantum per un sito professionale già ottimizzato. Per uno studio o un libero professionista il sito deve trasmettere autorevolezza e chiarezza, con possibilità di espansione futura. L'obiettivo non è solo presenza online, ma uno strumento che faciliti il contatto e rafforzi la credibilità.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Da 549€" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, void 0),
      " una tantum per un sito professionale già ottimizzato. Per uno studio o un libero professionista il sito deve trasmettere autorevolezza e chiarezza, con possibilità di espansione futura. L'obiettivo non è solo presenza online, ma uno strumento che faciliti il contatto e rafforzi la credibilità.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 26,
        columnNumber: 324
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/siti-web-per-professionisti", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web per professionisti" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 26,
        columnNumber: 330
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 26,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "tempi-realizzazione",
    question: "In quanto tempo viene realizzato un sito web?",
    answerText: "2–4 settimane per un sito standard, in base alla complessità e alla rapidità nella consegna dei materiali. Una pianificazione chiara accelera il processo e riduce revisioni inutili.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "2–4 settimane" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, void 0),
      " per un sito standard, in base alla complessità e alla rapidità nella consegna dei materiali. Una pianificazione chiara accelera il processo e riduce revisioni inutili."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 34,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "dominio-e-hosting",
    question: "Il sito web include dominio e hosting?",
    answerText: "Sì. Il servizio comprende configurazione tecnica, hosting professionale e certificato SSL. È fondamentale che il sito sia ospitato su server affidabili per garantire sicurezza e corretta indicizzazione. Il dominio è sempre di proprietà esclusiva del cliente.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Sì." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, void 0),
      " Il servizio comprende configurazione tecnica, hosting professionale e certificato SSL. È fondamentale che il sito sia ospitato su server affidabili per garantire sicurezza e corretta indicizzazione. Il dominio è sempre di proprietà esclusiva del cliente."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 42,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "social-o-sito-web",
    question: "È meglio avere solo i social o anche un sito web?",
    answerText: "Servono entrambi, ma il sito viene prima. I social sono utili per visibilità, ma non sostituiscono un sito web: il sito è uno spazio proprietario, indipendente dagli algoritmi delle piattaforme, e rappresenta un punto di riferimento stabile per clienti e potenziali contatti.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Servono entrambi, ma il sito viene prima." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, void 0),
      " I social sono utili per visibilità, ma non sostituiscono un sito web: il sito è uno spazio proprietario, indipendente dagli algoritmi delle piattaforme, e rappresenta un punto di riferimento stabile per clienti e potenziali contatti.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 50,
        columnNumber: 297
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Sito web o social: cosa conviene davvero nel 2026?" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 50,
        columnNumber: 303
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 50,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "google-business-basta",
    question: "Google Business basta per trovare clienti?",
    answerText: "No, da solo non basta. Google Business è importante per la visibilità locale, ma un sito web permette di approfondire servizi, mostrare casi reali e migliorare il posizionamento sia nei risultati classici di Google sia negli AI Overviews.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "No, da solo non basta." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 58,
        columnNumber: 5
      }, void 0),
      " Google Business è importante per la visibilità locale, ma un sito web permette di approfondire servizi, mostrare casi reali e migliorare il posizionamento sia nei risultati classici di Google sia negli AI Overviews.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 58,
        columnNumber: 260
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Perché il tuo sito non si trova su Google" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 58,
        columnNumber: 266
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 58,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "vetrina-vs-landing",
    question: "Qual è la differenza tra sito vetrina e landing page?",
    answerText: "Il sito vetrina presenta l'attività in modo completo con più sezioni informative. La landing page è una pagina singola focalizzata su un obiettivo specifico, come la generazione di contatti per un servizio mirato.",
    answer: "Il sito vetrina presenta l'attività in modo completo con più sezioni informative. La landing page è una pagina singola focalizzata su un obiettivo specifico, come la generazione di contatti per un servizio mirato."
  },
  {
    id: "sito-web-trova-clienti",
    question: "Un sito web aiuta davvero a trovare clienti?",
    answerText: "Sì, se progettato e ottimizzato bene. Un sito professionale può generare richieste di contatto in modo costante: è uno strumento di acquisizione, non una semplice vetrina online — molto più di quanto possa fare un sito generato automaticamente con l'IA.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Sì, se progettato e ottimizzato bene." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 74,
        columnNumber: 5
      }, void 0),
      " Un sito professionale può generare richieste di contatto in modo costante: è uno strumento di acquisizione, non una semplice vetrina online — molto più di quanto possa fare un",
      " ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline", children: "sito generato automaticamente con l'IA" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 74,
        columnNumber: 240
      }, void 0),
      ". Per accelerare i risultati nelle prime settimane online, può essere affiancato a ",
      /* @__PURE__ */ jsxDEV(Link, { to: "/pubblicita-google-ads", className: "text-sm text-accent hover:underline", children: "campagne Google ADS gestite" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 74,
        columnNumber: 478
      }, void 0),
      "."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 74,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "siti-web-servono-ancora-2026-ai",
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answerText: "Sì, oggi più che mai. Gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano proprio sui contenuti dei siti web per generare le risposte: senza un sito autorevole l'attività non viene citata né nei risultati classici né in quelli generativi. Il sito resta la fonte ufficiale del brand.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Sì, oggi più che mai." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 82,
        columnNumber: 5
      }, void 0),
      " Gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano proprio sui contenuti dei siti web per generare le risposte: senza un sito autorevole l'attività non viene citata né nei risultati classici né in quelli generativi. Il sito resta la fonte ufficiale del brand.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 82,
        columnNumber: 328
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web e intelligenza artificiale" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 82,
        columnNumber: 334
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 82,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "come-comparire-ai-overviews-google",
    question: "Come fa il mio sito a comparire negli AI Overviews di Google?",
    answerText: "Servono contenuti chiari, schema JSON-LD corretto e autorevolezza tematica. Google estrae le risposte dei suoi AI Overviews da pagine ben strutturate: titoli gerarchici, risposte sintetiche in apertura, dati concreti, FAQ con schema FAQPage e velocità di caricamento elevata. Un sito tecnico e disordinato viene ignorato dall'AI.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Servono contenuti chiari, schema JSON-LD corretto e autorevolezza tematica." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 90,
        columnNumber: 5
      }, void 0),
      " Google estrae le risposte dei suoi AI Overviews da pagine ben strutturate: titoli gerarchici, risposte sintetiche in apertura, dati concreti, FAQ con schema FAQPage e velocità di caricamento elevata. Un sito tecnico e disordinato viene ignorato dall'AI.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 90,
        columnNumber: 351
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Perché il tuo sito non si trova su Google" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 90,
        columnNumber: 357
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 90,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "cosa-e-sge-search-generative-experience",
    question: "Cos'è la SGE (Search Generative Experience) e come cambia la SEO?",
    answerText: "La SGE è la modalità di ricerca generativa di Google che mostra una risposta sintetica creata dall'AI sopra i risultati classici, con citazioni alle fonti. Cambia la SEO perché premia i siti capaci di rispondere in modo diretto e strutturato a una domanda specifica, non più solo quelli posizionati per parole chiave generiche.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "La SGE è la modalità di ricerca generativa di Google" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 98,
        columnNumber: 5
      }, void 0),
      " che mostra una risposta sintetica creata dall'AI sopra i risultati classici, con citazioni alle fonti. Cambia la SEO perché premia i siti capaci di rispondere in modo diretto e strutturato a una domanda specifica, non più solo quelli posizionati per parole chiave generiche."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 98,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "sito-generato-ai-funziona",
    question: "Un sito generato con ChatGPT, Wix AI o tool no-code è affidabile?",
    answerText: "Funziona come prototipo, non come strumento di business. I siti generati automaticamente dall'AI hanno spesso codice ridondante, contenuti generici, scarsa ottimizzazione SEO e problemi di velocità. Possono andare bene per testare un'idea, ma raramente generano contatti reali e quasi mai vengono citati dagli AI Overviews.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Funziona come prototipo, non come strumento di business." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, void 0),
      " I siti generati automaticamente dall'AI hanno spesso codice ridondante, contenuti generici, scarsa ottimizzazione SEO e problemi di velocità. Possono andare bene per testare un'idea, ma raramente generano contatti reali e quasi mai vengono citati dagli AI Overviews.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 106,
        columnNumber: 345
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web creati con intelligenza artificiale" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 106,
        columnNumber: 351
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 106,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "velocita-sito-google-ai",
    question: "Quanto è importante la velocità di un sito per Google e per gli AI?",
    answerText: "È un fattore decisivo. Google misura i Core Web Vitals (LCP, INP, CLS) e penalizza i siti lenti sia nei risultati classici sia negli AI Overviews. Un sito ottimizzato carica in meno di 2,5 secondi su mobile, riduce il bounce rate e ha più probabilità di essere selezionato dall'AI come fonte attendibile.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "È un fattore decisivo." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 114,
        columnNumber: 5
      }, void 0),
      " Google misura i Core Web Vitals (LCP, INP, CLS) e penalizza i siti lenti sia nei risultati classici sia negli AI Overviews. Un sito ottimizzato carica in meno di 2,5 secondi su mobile, riduce il bounce rate e ha più probabilità di essere selezionato dall'AI come fonte attendibile.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 114,
        columnNumber: 326
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "5 segnali di un sito obsoleto" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 114,
        columnNumber: 332
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 114,
      columnNumber: 3
    }, void 0)
  },
  {
    id: "serve-blog-con-ai",
    question: "Serve ancora avere un blog se l'AI risponde direttamente agli utenti?",
    answerText: "Sì, perché l'AI cita proprio i blog. Gli AI Overviews e gli assistenti come ChatGPT, Gemini e Perplexity costruiscono le risposte aggregando contenuti di blog autorevoli e ben strutturati. Senza articoli di qualità, l'attività perde la possibilità di essere riconosciuta come fonte di settore e di intercettare nuovo traffico qualificato.",
    answer: /* @__PURE__ */ jsxDEV(Fragment, { children: [
      /* @__PURE__ */ jsxDEV("strong", { children: "Sì, perché l'AI cita proprio i blog." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 122,
        columnNumber: 5
      }, void 0),
      " Gli AI Overviews e gli assistenti come ChatGPT, Gemini e Perplexity costruiscono le risposte aggregando contenuti di blog autorevoli e ben strutturati. Senza articoli di qualità, l'attività perde la possibilità di essere riconosciuta come fonte di settore e di intercettare nuovo traffico qualificato.",
      /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 122,
        columnNumber: 360
      }, void 0),
      /* @__PURE__ */ jsxDEV(Link, { to: "/blog", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Vai al blog di 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 122,
        columnNumber: 366
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 122,
      columnNumber: 3
    }, void 0)
  }
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://4weblab.it/faq-realizzazione-siti-web#faqpage",
  url: "https://4weblab.it/faq-realizzazione-siti-web",
  inLanguage: "it-IT",
  isPartOf: { "@id": "https://4weblab.it/#website" },
  about: [
    { "@type": "Thing", name: "Realizzazione siti web" },
    { "@type": "Thing", name: "AI Overviews di Google" },
    { "@type": "Thing", name: "Search Generative Experience (SGE)" },
    { "@type": "Thing", name: "SEO 2026" },
    { "@type": "Place", name: "Padova" }
  ],
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".faq-answer"]
  },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answerText
    }
  }))
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://4weblab.it/faq-realizzazione-siti-web" }
  ]
};
const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: `rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-accent/30 bg-accent/4 shadow-md" : "border-border bg-background hover:border-accent/20 hover:bg-accent/2"}`,
      children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "aria-expanded": open,
            "aria-controls": `faq-answer-${index}`,
            id: `faq-trigger-${index}`,
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
            children: [
              /* @__PURE__ */ jsxDEV("h3", { className: "heading-3 text-base md:text-lg font-semibold text-foreground leading-snug", children: faq.question }, void 0, false, {
                fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
                lineNumber: 181,
                columnNumber: 9
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                ChevronDown,
                {
                  className: `w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`,
                  "aria-hidden": "true"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
                  lineNumber: 184,
                  columnNumber: 9
                },
                void 0
              )
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 174,
            columnNumber: 7
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          "div",
          {
            id: `faq-answer-${index}`,
            role: "region",
            "aria-labelledby": `faq-trigger-${index}`,
            className: `transition-all duration-300 ease-in-out ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
            children: /* @__PURE__ */ jsxDEV("div", { className: "faq-answer px-6 pb-6 text-muted-foreground body-base leading-relaxed", children: faq.answer }, void 0, false, {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 199,
              columnNumber: 9
            }, void 0)
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 191,
            columnNumber: 7
          },
          void 0
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 167,
      columnNumber: 5
    },
    void 0
  );
};
const FaqSitiWeb = () => {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "meta",
        {
          name: "description",
          content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova."
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 212,
          columnNumber: 9
        },
        void 0
      ),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "index, follow" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 216,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: "https://4weblab.it/faq-realizzazione-siti-web" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: "website" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: "https://4weblab.it/faq-realizzazione-siti-web" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:locale", content: "it_IT" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 225,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: "4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:url", content: "https://4weblab.it/faq-realizzazione-siti-web" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 229,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova." }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 235,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Header, { satelliteMode: true }, void 0, false, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxDEV("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxDEV("filter", { id: "faq-hero-noise", children: /* @__PURE__ */ jsxDEV("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }, void 0, false, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 247,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 246,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("rect", { width: "100%", height: "100%", filter: "url(#faq-hero-noise)" }, void 0, false, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 249,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 245,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "hero-spotlight", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]", "aria-hidden": "true" }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 253,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxDEV(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "FAQ" }
              ]
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 257,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8", children: [
            /* @__PURE__ */ jsxDEV(HelpCircle, { className: "w-4 h-4", "aria-hidden": "true" }, void 0, false, {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 264,
              columnNumber: 17
            }, void 0),
            "Domande Frequenti"
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 263,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "h1",
            {
              className: "heading-1 text-primary-foreground mb-6 text-balance",
              style: { textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" },
              children: "FAQ Siti Web 2026: Costi, Utilità, Intelligenza Artificiale e Tempi di Consegna"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 267,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "p",
            {
              className: "body-large text-primary-foreground/85 max-w-3xl mx-auto text-balance",
              style: { textShadow: "0 1px 2px rgba(0,0,0,0.4)" },
              children: "Quanto costa un sito web? Quanto tempo serve per realizzarlo? Serve davvero all'attività? In questa pagina trovi risposte sintetiche e concrete alle domande più frequenti sulla realizzazione di un sito web professionale, con indicazioni su costi, tempi e scelte strategiche."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 272,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("p", { className: "text-primary-foreground/75 text-sm mt-4", children: [
            "Vuoi vedere come traduciamo queste risposte in pratica? Dai un'occhiata alle nostre ",
            /* @__PURE__ */ jsxDEV(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni e concept" }, void 0, false, {
              fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
              lineNumber: 280,
              columnNumber: 101
            }, void 0),
            "."
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 256,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "sr-only", children: "Domande frequenti sulla realizzazione di siti web" }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 290,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(StaggerContainer, { className: "space-y-4", staggerDelay: 0.06, children: faqs.map(
          (faq, index) => /* @__PURE__ */ jsxDEV(StaggerItem, { children: /* @__PURE__ */ jsxDEV(FaqItem, { faq, index }, void 0, false, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 293,
            columnNumber: 21
          }, void 0) }, faq.id, false, {
            fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
            lineNumber: 292,
            columnNumber: 43
          }, void 0)
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
          lineNumber: 291,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 289,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 287,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV(ContactSection, {}, void 0, false, {
        fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
        lineNumber: 301,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(Footer, {}, void 0, false, {
      fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
      lineNumber: 304,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/FaqSitiWeb.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, void 0);
};
export {
  FaqSitiWeb as default
};
