import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { W, H as Header, A as AnimatedSection, S as StaggerContainer, a as StaggerItem, b as ContactSection, F as Footer } from "../main.mjs";
import { HelpCircle, ChevronDown } from "lucide-react";
import { P as PageBreadcrumb } from "./PageBreadcrumb-B8vRbjVJ.js";
import "vite-react-ssg";
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
const faqs = [
  {
    id: "costo-sito-web",
    question: "Quanto costa realizzare un sito web?",
    answerText: "Da 199€ una tantum per una one-page professionale. Il prezzo cresce in base a numero di pagine, funzionalità e ottimizzazione SEO: per un sito vetrina aziendale si parte da 899€, per un professionista da 549€. Un progetto più completo richiede un investimento maggiore, ma consente una comunicazione più strutturata e una migliore capacità di generare contatti nel tempo.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Da 199€" }),
      " una tantum per una one-page professionale. Il prezzo cresce in base a numero di pagine, funzionalità e ottimizzazione SEO: per un sito vetrina aziendale si parte da 899€, per un professionista da 549€. Un progetto più completo richiede un investimento maggiore, ma consente una comunicazione più strutturata e una migliore capacità di generare contatti nel tempo.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/quanto-costa-un-sito-web-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Quanto costa un sito web nel 2026?" })
    ] })
  },
  {
    id: "prezzo-sito-professionista",
    question: "Qual è il prezzo di un sito web per un professionista?",
    answerText: "Da 549€ una tantum per un sito professionale già ottimizzato. Per uno studio o un libero professionista il sito deve trasmettere autorevolezza e chiarezza, con possibilità di espansione futura. L'obiettivo non è solo presenza online, ma uno strumento che faciliti il contatto e rafforzi la credibilità.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Da 549€" }),
      " una tantum per un sito professionale già ottimizzato. Per uno studio o un libero professionista il sito deve trasmettere autorevolezza e chiarezza, con possibilità di espansione futura. L'obiettivo non è solo presenza online, ma uno strumento che faciliti il contatto e rafforzi la credibilità.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/siti-web-per-professionisti", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web per professionisti" })
    ] })
  },
  {
    id: "tempi-realizzazione",
    question: "In quanto tempo viene realizzato un sito web?",
    answerText: "2–4 settimane per un sito standard, in base alla complessità e alla rapidità nella consegna dei materiali. Una pianificazione chiara accelera il processo e riduce revisioni inutili.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "2–4 settimane" }),
      " per un sito standard, in base alla complessità e alla rapidità nella consegna dei materiali. Una pianificazione chiara accelera il processo e riduce revisioni inutili."
    ] })
  },
  {
    id: "dominio-e-hosting",
    question: "Il sito web include dominio e hosting?",
    answerText: "Sì. Il servizio comprende configurazione tecnica, hosting professionale e certificato SSL. È fondamentale che il sito sia ospitato su server affidabili per garantire sicurezza e corretta indicizzazione. Il dominio è sempre di proprietà esclusiva del cliente.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Sì." }),
      " Il servizio comprende configurazione tecnica, hosting professionale e certificato SSL. È fondamentale che il sito sia ospitato su server affidabili per garantire sicurezza e corretta indicizzazione. Il dominio è sempre di proprietà esclusiva del cliente."
    ] })
  },
  {
    id: "social-o-sito-web",
    question: "È meglio avere solo i social o anche un sito web?",
    answerText: "Servono entrambi, ma il sito viene prima. I social sono utili per visibilità, ma non sostituiscono un sito web: il sito è uno spazio proprietario, indipendente dagli algoritmi delle piattaforme, e rappresenta un punto di riferimento stabile per clienti e potenziali contatti.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Servono entrambi, ma il sito viene prima." }),
      " I social sono utili per visibilità, ma non sostituiscono un sito web: il sito è uno spazio proprietario, indipendente dagli algoritmi delle piattaforme, e rappresenta un punto di riferimento stabile per clienti e potenziali contatti.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Sito web o social: cosa conviene davvero nel 2026?" })
    ] })
  },
  {
    id: "google-business-basta",
    question: "Google Business basta per trovare clienti?",
    answerText: "No, da solo non basta. Google Business è importante per la visibilità locale, ma un sito web permette di approfondire servizi, mostrare casi reali e migliorare il posizionamento sia nei risultati classici di Google sia negli AI Overviews.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "No, da solo non basta." }),
      " Google Business è importante per la visibilità locale, ma un sito web permette di approfondire servizi, mostrare casi reali e migliorare il posizionamento sia nei risultati classici di Google sia negli AI Overviews.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Perché il tuo sito non si trova su Google" })
    ] })
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
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Sì, se progettato e ottimizzato bene." }),
      " Un sito professionale può generare richieste di contatto in modo costante: è uno strumento di acquisizione, non una semplice vetrina online — molto più di quanto possa fare un",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline", children: "sito generato automaticamente con l'IA" }),
      ". Per accelerare i risultati nelle prime settimane online, può essere affiancato a ",
      /* @__PURE__ */ jsx(Link, { to: "/pubblicita-google-ads", className: "text-sm text-accent hover:underline", children: "campagne Google ADS gestite" }),
      "."
    ] })
  },
  {
    id: "siti-web-servono-ancora-2026-ai",
    question: "I siti web servono ancora nel 2026 con l'arrivo dell'AI?",
    answerText: "Sì, oggi più che mai. Gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano proprio sui contenuti dei siti web per generare le risposte: senza un sito autorevole l'attività non viene citata né nei risultati classici né in quelli generativi. Il sito resta la fonte ufficiale del brand.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Sì, oggi più che mai." }),
      " Gli AI Overviews di Google e gli assistenti come ChatGPT o Gemini si basano proprio sui contenuti dei siti web per generare le risposte: senza un sito autorevole l'attività non viene citata né nei risultati classici né in quelli generativi. Il sito resta la fonte ufficiale del brand.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web e intelligenza artificiale" })
    ] })
  },
  {
    id: "come-comparire-ai-overviews-google",
    question: "Come fa il mio sito a comparire negli AI Overviews di Google?",
    answerText: "Servono contenuti chiari, schema JSON-LD corretto e autorevolezza tematica. Google estrae le risposte dei suoi AI Overviews da pagine ben strutturate: titoli gerarchici, risposte sintetiche in apertura, dati concreti, FAQ con schema FAQPage e velocità di caricamento elevata. Un sito tecnico e disordinato viene ignorato dall'AI.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Servono contenuti chiari, schema JSON-LD corretto e autorevolezza tematica." }),
      " Google estrae le risposte dei suoi AI Overviews da pagine ben strutturate: titoli gerarchici, risposte sintetiche in apertura, dati concreti, FAQ con schema FAQPage e velocità di caricamento elevata. Un sito tecnico e disordinato viene ignorato dall'AI.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/perche-il-tuo-sito-non-si-trova-su-google", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Perché il tuo sito non si trova su Google" })
    ] })
  },
  {
    id: "cosa-e-sge-search-generative-experience",
    question: "Cos'è la SGE (Search Generative Experience) e come cambia la SEO?",
    answerText: "La SGE è la modalità di ricerca generativa di Google che mostra una risposta sintetica creata dall'AI sopra i risultati classici, con citazioni alle fonti. Cambia la SEO perché premia i siti capaci di rispondere in modo diretto e strutturato a una domanda specifica, non più solo quelli posizionati per parole chiave generiche.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "La SGE è la modalità di ricerca generativa di Google" }),
      " che mostra una risposta sintetica creata dall'AI sopra i risultati classici, con citazioni alle fonti. Cambia la SEO perché premia i siti capaci di rispondere in modo diretto e strutturato a una domanda specifica, non più solo quelli posizionati per parole chiave generiche."
    ] })
  },
  {
    id: "sito-generato-ai-funziona",
    question: "Un sito generato con ChatGPT, Wix AI o tool no-code è affidabile?",
    answerText: "Funziona come prototipo, non come strumento di business. I siti generati automaticamente dall'AI hanno spesso codice ridondante, contenuti generici, scarsa ottimizzazione SEO e problemi di velocità. Possono andare bene per testare un'idea, ma raramente generano contatti reali e quasi mai vengono citati dagli AI Overviews.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Funziona come prototipo, non come strumento di business." }),
      " I siti generati automaticamente dall'AI hanno spesso codice ridondante, contenuti generici, scarsa ottimizzazione SEO e problemi di velocità. Possono andare bene per testare un'idea, ma raramente generano contatti reali e quasi mai vengono citati dagli AI Overviews.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/siti-web-creati-con-intelligenza-artificiale", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Siti web creati con intelligenza artificiale" })
    ] })
  },
  {
    id: "velocita-sito-google-ai",
    question: "Quanto è importante la velocità di un sito per Google e per gli AI?",
    answerText: "È un fattore decisivo. Google misura i Core Web Vitals (LCP, INP, CLS) e penalizza i siti lenti sia nei risultati classici sia negli AI Overviews. Un sito ottimizzato carica in meno di 2,5 secondi su mobile, riduce il bounce rate e ha più probabilità di essere selezionato dall'AI come fonte attendibile.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "È un fattore decisivo." }),
      " Google misura i Core Web Vitals (LCP, INP, CLS) e penalizza i siti lenti sia nei risultati classici sia negli AI Overviews. Un sito ottimizzato carica in meno di 2,5 secondi su mobile, riduce il bounce rate e ha più probabilità di essere selezionato dall'AI come fonte attendibile.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026", className: "text-sm text-accent hover:underline inline-block mt-2", children: "5 segnali di un sito obsoleto" })
    ] })
  },
  {
    id: "serve-blog-con-ai",
    question: "Serve ancora avere un blog se l'AI risponde direttamente agli utenti?",
    answerText: "Sì, perché l'AI cita proprio i blog. Gli AI Overviews e gli assistenti come ChatGPT, Gemini e Perplexity costruiscono le risposte aggregando contenuti di blog autorevoli e ben strutturati. Senza articoli di qualità, l'attività perde la possibilità di essere riconosciuta come fonte di settore e di intercettare nuovo traffico qualificato.",
    answer: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("strong", { children: "Sì, perché l'AI cita proprio i blog." }),
      " Gli AI Overviews e gli assistenti come ChatGPT, Gemini e Perplexity costruiscono le risposte aggregando contenuti di blog autorevoli e ben strutturati. Senza articoli di qualità, l'attività perde la possibilità di essere riconosciuta come fonte di settore e di intercettare nuovo traffico qualificato.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(Link, { to: "/blog", className: "text-sm text-accent hover:underline inline-block mt-2", children: "Vai al blog di 4 Web Lab" })
    ] })
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-accent/30 bg-accent/4 shadow-md" : "border-border bg-background hover:border-accent/20 hover:bg-accent/2"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            "aria-expanded": open,
            "aria-controls": `faq-answer-${index}`,
            id: `faq-trigger-${index}`,
            onClick: () => setOpen((v) => !v),
            className: "w-full flex items-center justify-between gap-4 px-6 py-5 text-left",
            children: [
              /* @__PURE__ */ jsx("h3", { className: "heading-3 text-base md:text-lg font-semibold text-foreground leading-snug", children: faq.question }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: `w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`,
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            id: `faq-answer-${index}`,
            role: "region",
            "aria-labelledby": `faq-trigger-${index}`,
            className: `transition-all duration-300 ease-in-out ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`,
            children: /* @__PURE__ */ jsx("div", { className: "faq-answer px-6 pb-6 text-muted-foreground body-base leading-relaxed", children: faq.answer })
          }
        )
      ]
    }
  );
};
const FaqSitiWeb = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(W, { children: [
      /* @__PURE__ */ jsx("title", { children: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://4weblab.it/faq-realizzazione-siti-web" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://4weblab.it/faq-realizzazione-siti-web" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "it_IT" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:url", content: "https://4weblab.it/faq-realizzazione-siti-web" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "FAQ Siti Web e AI: Costi, SGE e AI Overviews | 4 Web Lab" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "FAQ su realizzazione siti web nel 2026: costi, tempi, AI Overviews di Google, SGE e siti generati con AI. Risposte chiare da 4 Web Lab, Padova." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://4weblab.it/og-image.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(faqSchema) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) })
    ] }),
    /* @__PURE__ */ jsx(Header, { satelliteMode: true }),
    /* @__PURE__ */ jsxs("main", { id: "main-content", className: "pt-[calc(var(--header-height)+var(--notification-bar-height))]", children: [
      /* @__PURE__ */ jsxs("section", { className: "page-hero", children: [
        /* @__PURE__ */ jsx("div", { className: "noise-overlay", "aria-hidden": "true", children: /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx("filter", { id: "faq-hero-noise", children: /* @__PURE__ */ jsx("feTurbulence", { type: "fractalNoise", baseFrequency: "0.65", numOctaves: "3", stitchTiles: "stitch" }) }),
          /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", filter: "url(#faq-hero-noise)" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-spotlight", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "container-section relative z-10", children: /* @__PURE__ */ jsxs(AnimatedSection, { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            PageBreadcrumb,
            {
              items: [
                { label: "Home", to: "/" },
                { label: "FAQ" }
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8", children: [
            /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4", "aria-hidden": "true" }),
            "Domande Frequenti"
          ] }),
          /* @__PURE__ */ jsx(
            "h1",
            {
              className: "heading-1 text-primary-foreground mb-6 text-balance",
              style: { textShadow: "0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)" },
              children: "FAQ Siti Web 2026: Costi, Utilità, Intelligenza Artificiale e Tempi di Consegna"
            }
          ),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "body-large text-primary-foreground/85 max-w-3xl mx-auto text-balance",
              style: { textShadow: "0 1px 2px rgba(0,0,0,0.4)" },
              children: "Quanto costa un sito web? Quanto tempo serve per realizzarlo? Serve davvero all'attività? In questa pagina trovi risposte sintetiche e concrete alle domande più frequenti sulla realizzazione di un sito web professionale, con indicazioni su costi, tempi e scelte strategiche."
            }
          ),
          /* @__PURE__ */ jsxs("p", { className: "text-primary-foreground/75 text-sm mt-4", children: [
            "Vuoi vedere come traduciamo queste risposte in pratica? Dai un'occhiata alle nostre ",
            /* @__PURE__ */ jsx(Link, { to: "/realizzazioni", className: "text-accent hover:underline font-medium", children: "realizzazioni e concept" }),
            "."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-section", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(StaggerContainer, { className: "space-y-4", staggerDelay: 0.06, children: faqs.map(
        (faq, index) => /* @__PURE__ */ jsx(StaggerItem, { children: /* @__PURE__ */ jsx(FaqItem, { faq, index }) }, faq.id)
      ) }) }) }) }),
      /* @__PURE__ */ jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  FaqSitiWeb as default
};
