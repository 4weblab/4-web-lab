import blogAiWebsite from "@/assets/blog-ai-website.webp";
import blogGdprPrivacy from "@/assets/blog-gdpr-privacy.webp";
import blogOutdatedWebsite from "@/assets/blog-sito-obsoleto-2026.webp";
import blogWebsiteCost from "@/assets/blog-website-cost.webp";
import blogSiteVsSocial from "@/assets/blog-site-vs-social.webp";
import blogNotFoundOnGoogle from "@/assets/blog-sito-non-trovato-google.webp";
import blogQuotePlatforms from "@/assets/blog-piattaforme-preventivi.webp";
import blogDiyWebsite from "@/assets/blog-creare-sito-da-soli.webp";
import blogArubaSupersite from "@/assets/blog-aruba-supersite.webp";
import blogWordPressGuide from "@/assets/blog-guida-wordpress.webp";

export type BlogArticle = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  image: string;
  alt: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified: string;
  category: string;
  related: string[]; // slugs
  wordCount: number; // for reading time
};

// Reading time helper: 200 words per minute (italian average reading speed)
export const calcReadingTime = (wordCount: number) => Math.max(1, Math.ceil(wordCount / 200));

// Italian date formatter: "4 marzo 2026"
export const formatItalianDate = (iso: string): string => {
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
    "dicembre",
  ];
  return `${d} ${months[m - 1]} ${y}`;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "guida-wordpress-alternative-2026",
    path: "/blog/guida-wordpress-alternative-2026",
    title: "Guida WordPress: È Davvero Facile da Usare? Pro, Contro, Alternative",
    shortTitle: "Guida WordPress 2026",
    description:
      "WordPress ha fama di essere semplice, ma tra plugin, aggiornamenti e sicurezza la realtà è diversa. Guida completa: cosa aspettarti davvero e le alternative nel 2026.",
    excerpt:
      "WordPress ha fama di essere semplice da usare. La realtà, tra plugin e aggiornamenti, è diversa: ecco cosa aspettarti davvero.",
    image: blogWordPressGuide,
    alt: "Pannello di controllo di un sito WordPress con plugin, ingranaggi e aggiornamenti",
    datePublished: "2026-09-09",
    dateModified: "2026-09-09",
    category: "Strategia digitale",
    related: ["creare-sito-web-da-soli-conviene", "quanto-costa-un-sito-web-nel-2026"],
    wordCount: 850,
  },
  {
    slug: "aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
    path: "/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
    title: "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito",
    shortTitle: "Aruba SuperSite: conviene davvero?",
    description:
      "Aruba SuperSite è davvero la soluzione giusta per il tuo sito? Limiti, tempi nascosti e cosa valutare prima di scegliere una piattaforma fai-da-te.",
    excerpt:
      "Aruba SuperSite promette siti facili e veloci: cosa funziona, cosa no e cosa valutare prima di scegliere una piattaforma fai-da-te.",
    image: blogArubaSupersite,
    alt: "Interfaccia di una piattaforma fai-da-te per la creazione di siti web tipo Aruba SuperSite",
    datePublished: "2026-06-09",
    dateModified: "2026-06-09",
    category: "Strategia digitale",
    related: [
      "creare-sito-web-da-soli-conviene",
      "siti-web-piattaforme-preventivi-online-conviene",
    ],
    wordCount: 720,
  },
  {
    slug: "creare-sito-web-da-soli-conviene",
    path: "/blog/creare-sito-web-da-soli-conviene",
    title: "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026",
    shortTitle: "Creare sito web da soli: conviene?",
    description:
      "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.",
    excerpt:
      "WordPress, builder visuali e fai-da-te: cosa funziona davvero e perché spesso il risparmio è solo apparente.",
    image: blogDiyWebsite,
    alt: "Persona che crea un sito web da sola con laptop e builder visuale WordPress",
    datePublished: "2026-05-03",
    dateModified: "2026-05-03",
    category: "Strategia digitale",
    related: [
      "siti-web-creati-con-intelligenza-artificiale",
      "quanto-costa-un-sito-web-nel-2026",
    ],
    wordCount: 720,
  },
  {
    slug: "siti-web-piattaforme-preventivi-online-conviene",
    path: "/blog/siti-web-piattaforme-preventivi-online-conviene",
    title: "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?",
    shortTitle: "Siti web piattaforme preventivi: conviene?",
    description:
      "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?",
    excerpt:
      "Preventivi rapidi e prezzi bassi: cosa si nasconde dietro le piattaforme online e quando conviene davvero usarle.",
    image: blogQuotePlatforms,
    alt: "Laptop con piattaforme di preventivi online per la realizzazione di siti web",
    datePublished: "2026-05-02",
    dateModified: "2026-05-02",
    category: "Strategia digitale",
    related: [
      "quanto-costa-un-sito-web-nel-2026",
      "siti-web-creati-con-intelligenza-artificiale",
    ],
    wordCount: 720,
  },
  {
    slug: "quanto-costa-un-sito-web-nel-2026",
    path: "/blog/quanto-costa-un-sito-web-nel-2026",
    title: "Quanto costa un sito web nel 2026?",
    shortTitle: "Quanto costa un sito web nel 2026",
    description:
      "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    excerpt:
      "Prezzi reali per aziende, professionisti e negozi: cosa incide sul costo e quanto ha senso investire davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
    datePublished: "2026-03-04",
    dateModified: "2026-03-04",
    category: "Guide & Costi",
    related: [
      "perche-il-tuo-sito-non-si-trova-su-google",
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    ],
    wordCount: 620,
  },
  {
    slug: "sito-web-o-social-cosa-conviene-davvero-nel-2026",
    path: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
    title: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?",
    shortTitle: "Sito web o social: cosa conviene nel 2026",
    description:
      "Meglio un sito web o i social per la tua attività? Differenze, vantaggi e la scelta più solida per portare clienti nel 2026.",
    excerpt:
      "I social bastano davvero o serve un sito? Limiti, vantaggi e come usarli insieme nel modo giusto.",
    image: blogSiteVsSocial,
    alt: "Confronto tra sito web aziendale e presenza social per un'attività locale",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    category: "Strategia digitale",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "quanto-costa-un-sito-web-nel-2026",
    ],
    wordCount: 580,
  },
  {
    slug: "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    path: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    title: "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026",
    shortTitle: "Sito web obsoleto: 5 segnali nel 2026",
    description:
      "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.",
    excerpt:
      "Lentezza, invisibilità, mobile complicato: i 5 segnali che indicano un sito ormai superato.",
    image: blogOutdatedWebsite,
    alt: "Monitor e smartphone con un sito aziendale obsoleto e prestazioni in calo",
    datePublished: "2026-03-26",
    dateModified: "2026-03-26",
    category: "Strategia digitale",
    related: [
      "perche-il-tuo-sito-non-si-trova-su-google",
      "siti-web-creati-con-intelligenza-artificiale",
    ],
    wordCount: 560,
  },
  {
    slug: "siti-web-creati-con-intelligenza-artificiale",
    path: "/blog/siti-web-creati-con-intelligenza-artificiale",
    title: "Siti web creati con intelligenza artificiale: opportunità reale o rischio per le aziende?",
    shortTitle: "Siti web con intelligenza artificiale",
    description:
      "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    excerpt:
      "Generatori IA, vantaggi e limiti reali: quando convengono e quando diventano un freno per il tuo brand.",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
    datePublished: "2026-04-08",
    dateModified: "2026-04-08",
    category: "Tecnologia & AI",
    related: [
      "quanto-costa-un-sito-web-nel-2026",
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    ],
    wordCount: 720,
  },
  {
    slug: "gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    path: "/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    title: "GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)",
    shortTitle: "GDPR siti web 2026: obblighi e cookie",
    description:
      "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.",
    excerpt:
      "Cookie banner, privacy policy e gestione dei dati: cosa serve davvero per essere a norma nel 2026.",
    image: blogGdprPrivacy,
    alt: "Cookie banner e privacy policy su un sito web aziendale conforme al GDPR",
    datePublished: "2026-04-20",
    dateModified: "2026-04-20",
    category: "Privacy & Compliance",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "siti-web-creati-con-intelligenza-artificiale",
    ],
    wordCount: 540,
  },
  {
    slug: "perche-il-tuo-sito-non-si-trova-su-google",
    path: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
    title: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)",
    shortTitle: "Perché il tuo sito non si trova su Google",
    description:
      "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.",
    excerpt:
      "Sito invisibile sui motori di ricerca? Le cause più comuni e cosa fare per iniziare a farti trovare davvero.",
    image: blogNotFoundOnGoogle,
    alt: "Laptop con risultati di ricerca Google e lente di ingrandimento, sito web non posizionato",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    category: "SEO & Visibilità",
    related: [
      "sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
      "quanto-costa-un-sito-web-nel-2026",
    ],
    wordCount: 600,
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find((a) => a.slug === slug);

export const getRelatedArticles = (slug: string): BlogArticle[] => {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return article.related
    .map((s) => getArticleBySlug(s))
    .filter((a): a is BlogArticle => Boolean(a));
};