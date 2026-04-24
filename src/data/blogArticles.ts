import blogAiWebsite from "@/assets/blog-ai-website.jpg";
import blogGdprPrivacy from "@/assets/blog-gdpr-privacy.jpg";
import blogOutdatedWebsite from "@/assets/blog-sito-obsoleto-2026.jpg";
import blogWebsiteCost from "@/assets/blog-website-cost.jpg";
import blogSiteVsSocial from "@/assets/blog-site-vs-social.jpg";
import blogNotFoundOnGoogle from "@/assets/blog-sito-non-trovato-google.jpg";

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
      "siti-web-creati-con-intelligenza-artificiale",
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
      "siti-web-creati-con-intelligenza-artificiale",
      "sito-web-o-social-cosa-conviene-davvero-nel-2026",
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