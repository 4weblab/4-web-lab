import { j as jsxDEV, A as AnimatedSection } from "../main.mjs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { b as blogArubaHero, a as blogDiyWebsite, c as blogQuotePlatforms, i as blogWebsiteCost, g as blogSiteVsSocial, e as blogOutdatedWebsite, h as blogAiWebsite, f as blogGdprPrivacy, d as blogNotFoundOnGoogle } from "./blog-aruba-supersite-DvMlriuU.js";
const calcReadingTime = (wordCount) => Math.max(1, Math.ceil(wordCount / 200));
const formatItalianDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ];
  return `${d} ${months[m - 1]} ${y}`;
};
const blogArticles = [
  {
    slug: "aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
    path: "/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
    title: "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito",
    shortTitle: "Aruba SuperSite: conviene davvero?",
    description: "Aruba SuperSite è davvero la soluzione giusta per il tuo sito? Limiti, tempi nascosti e cosa valutare prima di scegliere una piattaforma fai-da-te.",
    excerpt: "Aruba SuperSite promette siti facili e veloci: cosa funziona, cosa no e cosa valutare prima di scegliere una piattaforma fai-da-te.",
    image: blogArubaHero,
    alt: "Interfaccia di una piattaforma fai-da-te per la creazione di siti web tipo Aruba SuperSite",
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    category: "Strategia digitale",
    related: [
      "creare-sito-web-da-soli-conviene",
      "siti-web-piattaforme-preventivi-online-conviene"
    ],
    wordCount: 720
  },
  {
    slug: "creare-sito-web-da-soli-conviene",
    path: "/blog/creare-sito-web-da-soli-conviene",
    title: "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026",
    shortTitle: "Creare sito web da soli: conviene?",
    description: "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.",
    excerpt: "WordPress, builder visuali e fai-da-te: cosa funziona davvero e perché spesso il risparmio è solo apparente.",
    image: blogDiyWebsite,
    alt: "Persona che crea un sito web da sola con laptop e builder visuale WordPress",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    category: "Strategia digitale",
    related: [
      "siti-web-creati-con-intelligenza-artificiale",
      "quanto-costa-un-sito-web-nel-2026"
    ],
    wordCount: 720
  },
  {
    slug: "siti-web-piattaforme-preventivi-online-conviene",
    path: "/blog/siti-web-piattaforme-preventivi-online-conviene",
    title: "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?",
    shortTitle: "Siti web piattaforme preventivi: conviene?",
    description: "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?",
    excerpt: "Preventivi rapidi e prezzi bassi: cosa si nasconde dietro le piattaforme online e quando conviene davvero usarle.",
    image: blogQuotePlatforms,
    alt: "Laptop con piattaforme di preventivi online per la realizzazione di siti web",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
    category: "Strategia digitale",
    related: [
      "quanto-costa-un-sito-web-nel-2026",
      "siti-web-creati-con-intelligenza-artificiale"
    ],
    wordCount: 720
  },
  {
    slug: "quanto-costa-un-sito-web-nel-2026",
    path: "/blog/quanto-costa-un-sito-web-nel-2026",
    title: "Quanto costa un sito web nel 2026?",
    shortTitle: "Quanto costa un sito web nel 2026",
    description: "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    excerpt: "Prezzi reali per aziende, professionisti e negozi: cosa incide sul costo e quanto ha senso investire davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
    category: "Guide & Costi",
    related: [
      "perche-il-tuo-sito-non-si-trova-su-google",
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
    ],
    wordCount: 620
  },
  {
    slug: "sito-web-o-social-cosa-conviene-davvero-nel-2026",
    path: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
    title: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?",
    shortTitle: "Sito web o social: cosa conviene nel 2026",
    description: "Meglio un sito web o i social per la tua attività? Differenze, vantaggi e la scelta più solida per portare clienti nel 2026.",
    excerpt: "I social bastano davvero o serve un sito? Limiti, vantaggi e come usarli insieme nel modo giusto.",
    image: blogSiteVsSocial,
    alt: "Confronto tra sito web aziendale e presenza social per un'attività locale",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    category: "Strategia digitale",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "quanto-costa-un-sito-web-nel-2026"
    ],
    wordCount: 580
  },
  {
    slug: "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    path: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    title: "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026",
    shortTitle: "Sito web obsoleto: 5 segnali nel 2026",
    description: "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.",
    excerpt: "Lentezza, invisibilità, mobile complicato: i 5 segnali che indicano un sito ormai superato.",
    image: blogOutdatedWebsite,
    alt: "Monitor e smartphone con un sito aziendale obsoleto e prestazioni in calo",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    category: "Strategia digitale",
    related: [
      "perche-il-tuo-sito-non-si-trova-su-google",
      "siti-web-creati-con-intelligenza-artificiale"
    ],
    wordCount: 560
  },
  {
    slug: "siti-web-creati-con-intelligenza-artificiale",
    path: "/blog/siti-web-creati-con-intelligenza-artificiale",
    title: "Siti web creati con intelligenza artificiale: opportunità reale o rischio per le aziende?",
    shortTitle: "Siti web con intelligenza artificiale",
    description: "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    excerpt: "Generatori IA, vantaggi e limiti reali: quando convengono e quando diventano un freno per il tuo brand.",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    category: "Tecnologia & AI",
    related: [
      "quanto-costa-un-sito-web-nel-2026",
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
    ],
    wordCount: 720
  },
  {
    slug: "gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    path: "/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    title: "GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)",
    shortTitle: "GDPR siti web 2026: obblighi e cookie",
    description: "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.",
    excerpt: "Cookie banner, privacy policy e gestione dei dati: cosa serve davvero per essere a norma nel 2026.",
    image: blogGdprPrivacy,
    alt: "Cookie banner e privacy policy su un sito web aziendale conforme al GDPR",
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    category: "Privacy & Compliance",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "siti-web-creati-con-intelligenza-artificiale"
    ],
    wordCount: 540
  },
  {
    slug: "perche-il-tuo-sito-non-si-trova-su-google",
    path: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
    title: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)",
    shortTitle: "Perché il tuo sito non si trova su Google",
    description: "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.",
    excerpt: "Sito invisibile sui motori di ricerca? Le cause più comuni e cosa fare per iniziare a farti trovare davvero.",
    image: blogNotFoundOnGoogle,
    alt: "Laptop con risultati di ricerca Google e lente di ingrandimento, sito web non posizionato",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    category: "SEO & Visibilità",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "quanto-costa-un-sito-web-nel-2026"
    ],
    wordCount: 600
  }
];
const getArticleBySlug = (slug) => blogArticles.find((a) => a.slug === slug);
const getRelatedArticles = (slug) => {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.related.map((s) => getArticleBySlug(s)).filter((a) => Boolean(a));
};
const RelatedArticles = ({ currentSlug }) => {
  const related = getRelatedArticles(currentSlug);
  if (related.length === 0) return null;
  return /* @__PURE__ */ jsxDEV("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "container-section", children: /* @__PURE__ */ jsxDEV(AnimatedSection, { className: "mx-auto max-w-2xl", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mb-10 text-center md:mb-12", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mx-auto mb-6 h-1 w-14 rounded-full bg-accent" }, void 0, false, {
        fileName: "/dev-server/src/components/RelatedArticles.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "heading-2 text-foreground", children: "Continua a leggere" }, void 0, false, {
        fileName: "/dev-server/src/components/RelatedArticles.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "body-base mt-4 text-muted-foreground", children: "Altri articoli dal blog di 4 Web Lab." }, void 0, false, {
        fileName: "/dev-server/src/components/RelatedArticles.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/RelatedArticles.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5", children: related.map((article) => /* @__PURE__ */ jsxDEV(
      "article",
      {
        className: "group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[var(--shadow-card-hover)]",
        children: [
          /* @__PURE__ */ jsxDEV(Link, { to: article.path, className: "block aspect-[16/10] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: article.image,
              alt: article.alt,
              width: 512,
              height: 320,
              loading: "lazy",
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 32,
              columnNumber: 19
            },
            void 0
          ) }, void 0, false, {
            fileName: "/dev-server/src/components/RelatedArticles.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-1 flex-col p-4 md:p-5", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-accent", children: article.category }, void 0, false, {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 42,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "mt-2 text-sm font-semibold leading-snug text-foreground md:text-base", children: /* @__PURE__ */ jsxDEV(Link, { to: article.path, className: "hover:text-accent transition-colors", children: article.title }, void 0, false, {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 46,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 45,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "mt-2 text-xs leading-relaxed line-clamp-2 text-muted-foreground", children: article.excerpt }, void 0, false, {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 50,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "mt-3 pt-3 border-t border-border/50", children: /* @__PURE__ */ jsxDEV(
              Link,
              {
                to: article.path,
                className: "inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all hover:gap-2",
                children: [
                  "Leggi l'articolo",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
                    fileName: "/dev-server/src/components/RelatedArticles.tsx",
                    lineNumber: 59,
                    columnNumber: 23
                  }, void 0)
                ]
              },
              void 0,
              true,
              {
                fileName: "/dev-server/src/components/RelatedArticles.tsx",
                lineNumber: 54,
                columnNumber: 21
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/components/RelatedArticles.tsx",
              lineNumber: 53,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/RelatedArticles.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, void 0)
        ]
      },
      article.slug,
      true,
      {
        fileName: "/dev-server/src/components/RelatedArticles.tsx",
        lineNumber: 27,
        columnNumber: 15
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/components/RelatedArticles.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/RelatedArticles.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/RelatedArticles.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/RelatedArticles.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, void 0);
};
export {
  RelatedArticles as R,
  calcReadingTime as c,
  formatItalianDate as f,
  getArticleBySlug as g
};
