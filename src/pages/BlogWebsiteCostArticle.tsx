import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogWebsiteCost from "@/assets/blog-website-cost.jpg";

const introParagraphs = [
  "Nel 2026 una delle domande più frequenti per chi vuole creare un sito web è sempre la stessa:",
  "Quanto costa davvero un sito web?",
  "La risposta breve è: dipende.",
  "La risposta reale, invece, è più interessante.",
  "Oggi il prezzo di un sito web può variare da poche centinaia di euro fino a diverse migliaia, a seconda di come viene progettato, da chi viene realizzato e soprattutto da cosa deve fare.",
  "In questa guida vediamo i costi reali, cosa li influenza e quanto ha senso investire in base al tipo di attività.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  closing?: ReactNode[];
  subSections?: { title: string; price: string; paragraphs: string[] }[];
};

const sections: Section[] = [
  {
    title: "Da cosa dipende il costo di un sito web",
    paragraphs: [
      "Il prezzo di un sito web non è casuale. Dipende da diversi fattori concreti.",
      "Il primo è la struttura. Un sito semplice con poche pagine ha un costo molto diverso rispetto a un sito più articolato, con più sezioni e contenuti.",
      "Il secondo è il livello di personalizzazione. Template standard e soluzioni automatiche costano meno, mentre un sito progettato su misura richiede più lavoro.",
      "Un altro fattore è il contenuto. Testi scritti bene, immagini curate e una struttura pensata per l’utente fanno la differenza, ma incidono sul prezzo.",
      "Infine, c’è la strategia. Un sito creato solo per “esserci” costa meno rispetto a un sito progettato per portare contatti e clienti.",
    ],
  },
  {
    title: "Quanto costa un sito web nel 2026 in Italia",
    paragraphs: [
      "Nel mercato italiano, i prezzi sono molto variabili.",
      "Un sito web può costare:",
    ],
    bullets: [
      "200–400€ per soluzioni molto basilari o fai-da-te",
      "500–1500€ per siti realizzati da freelance o piccole realtà",
      "1500€+ per progetti più strutturati o agenzie",
    ],
    closing: [
      "Queste cifre cambiano in base a qualità, struttura e obiettivi.",
      "Il problema è che spesso chi acquista non sa cosa sta realmente comprando.",
    ],
  },
  {
    title: "I nostri prezzi: quanto costa un sito web in base alla tua attività",
    paragraphs: [
      "Per rendere le cose più chiare, è utile distinguere in base al tipo di attività.",
    ],
    subSections: [
      {
        title: "Sito web per negozi",
        price: "299€",
        paragraphs: [
          "Un sito per negozi ha l’obiettivo principale di presentare prodotti, servizi e informazioni in modo chiaro e accessibile.",
          "È una soluzione pensata per avere una presenza online efficace, senza complicazioni inutili.",
        ],
      },
      {
        title: "Sito web per professionisti",
        price: "249€",
        paragraphs: [
          "Per consulenti, liberi professionisti e attività individuali, il sito deve trasmettere fiducia e competenza.",
          "In questo caso, la struttura è orientata a valorizzare la persona e facilitare il contatto.",
        ],
      },
      {
        title: "Sito web aziendale",
        price: "699€",
        paragraphs: [
          "Per aziende strutturate, il sito diventa uno strumento più completo: presentazione, servizi, posizionamento e acquisizione contatti.",
          "Il costo varia in base alla complessità del progetto e agli obiettivi.",
        ],
      },
    ],
  },
  {
    title: "Perché alcuni siti costano molto di più",
    paragraphs: [
      "È normale trovare preventivi molto più alti rispetto a queste cifre.",
      "Questo succede perché entrano in gioco altri fattori:",
    ],
    bullets: [
      "sviluppo completamente su misura",
      "funzionalità avanzate",
      "integrazioni particolari",
      "team più grandi coinvolti nel progetto",
    ],
    closing: [
      "In alcuni casi è giustificato. In altri, si paga più del necessario rispetto ai reali bisogni dell’attività.",
    ],
  },
  {
    title: "Quanto ha senso spendere davvero",
    paragraphs: [
      "La domanda giusta non è “quanto costa”, ma:",
      "Quanto ha senso investire per la mia attività?",
      "Se il sito serve solo come presenza base, non ha senso spendere cifre elevate.",
      "Se invece deve portare clienti, allora diventa un investimento e va progettato in modo più strategico.",
      "L’obiettivo deve essere sempre uno: ottenere un ritorno, non semplicemente avere un sito online.",
    ],
  },
  {
    title: "Il rischio dei prezzi troppo bassi",
    paragraphs: [
      "Prezzi molto bassi possono sembrare vantaggiosi, ma spesso nascondono limiti importanti:",
    ],
    bullets: [
      "siti generici e poco curati",
      "nessuna strategia",
      "contenuti deboli",
      "scarsa efficacia nel generare contatti",
    ],
    closing: [
      <>
        Un sito economico che non porta risultati è, di fatto, un costo inutile. È lo stesso rischio
        che si corre con i{" "}
        <Link to="/blog/siti-web-creati-con-intelligenza-artificiale" className={linkClass}>
          siti generati con intelligenza artificiale
        </Link>
        : sembrano un affare, ma spesso restano una vetrina vuota.
      </>,
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Nel 2026 creare un sito web è più accessibile che mai.",
      "Ma questo non significa che tutte le soluzioni siano uguali.",
      "Il costo giusto è quello che ti permette di avere un sito:",
    ],
    bullets: [
      "credibile",
      "chiaro",
      "utile per la tua attività",
    ],
    closing: [
      <>
        Senza spendere più del necessario, ma senza nemmeno scendere a compromessi che ti fanno
        perdere opportunità — gli stessi compromessi che, col tempo, trasformano un sito nuovo in
        uno di quei{" "}
        <Link
          to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
          className={linkClass}
        >
          siti ormai obsoleti che fanno perdere clienti
        </Link>
        .
      </>,
    ],
  },
];

const BlogWebsiteCostArticle = () => {
  const pageTitle = "Quanto costa un sito web nel 2026? Prezzi reali in Italia";
  const pageDescription =
    "Scopri quanto costa davvero un sito web nel 2026 per aziende, professionisti e negozi. Prezzi chiari e cosa aspettarti davvero.";
  const pageUrl = "https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026";
  const pageImage = `https://4weblab.it${blogWebsiteCost}`;
  const articleData = getArticleBySlug("quanto-costa-un-sito-web-nel-2026");
  const datePublished = articleData?.datePublished ?? "2026-03-04";
  const dateModified = articleData?.dateModified ?? "2026-03-04";
  const articleSection = articleData?.category ?? "Guide & Costi";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 620);
  const headline = "Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content="Carlo Fullin" />
        <meta property="article:section" content={articleSection} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline,
            description: pageDescription,
            image: [pageImage],
            inLanguage: "it-IT",
            articleSection,
            author: {
              "@type": "Person",
              name: "Carlo Fullin",
              url: "https://4weblab.it/",
            },
            publisher: {
              "@type": "Organization",
              name: "4 Web Lab",
              logo: {
                "@type": "ImageObject",
                url: "https://4weblab.it/logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl,
            },
            url: pageUrl,
            datePublished,
            dateModified,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://4weblab.it/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://4weblab.it/blog" },
              { "@type": "ListItem", position: 3, name: pageTitle, item: pageUrl },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        <section
          className="relative overflow-hidden pt-[calc(var(--header-height)+4rem)] pb-16 md:pt-[calc(var(--header-height)+5rem)] md:pb-20"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-[110px]"
          />
          <div className="container-section relative z-10">
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <BlogBreadcrumb currentTitle="Quanto costa un sito web nel 2026" />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">
                Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi
              </h1>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-primary-foreground/70">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Pubblicato il {formatItalianDate(datePublished)}
                </span>
                {dateModified !== datePublished ? (
                  <span className="inline-flex items-center gap-1.5">
                    <span aria-hidden="true">·</span>
                    Aggiornato il {formatItalianDate(dateModified)}
                  </span>
                ) : null}
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {readingTime} min di lettura
                </span>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="article-intro-section">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl">
              <div className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-12">
                <div className="space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                  {introParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={
                        index === 1 || index === 3
                          ? "font-semibold text-foreground"
                          : "text-foreground/90"
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="article-body-section" style={{ background: "var(--gradient-surface)" }}>
          <div className="container-section">
            <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-8">
              {sections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.04}>
                  <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                    <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                    <h2 className="heading-3 text-foreground">{section.title}</h2>

                    <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className={
                            typeof paragraph === "string" && paragraph.endsWith("?")
                              ? "font-semibold text-foreground"
                              : undefined
                          }
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets ? (
                      <ul className="mt-6 space-y-3 border-l-2 border-accent/25 pl-5 text-base leading-8 text-foreground/90 md:text-lg">
                        {section.bullets.map((item) => (
                          <li key={item} className="list-disc marker:text-accent">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.closing ? (
                      <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                        {section.closing.map((paragraph, cIndex) => (
                          <p key={cIndex}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}

                    {section.subSections ? (
                      <div className="mt-8 space-y-6 border-t border-border/50 pt-8">
                        {section.subSections.map((subSection) => (
                          <div key={subSection.title} className="rounded-2xl bg-muted/35 p-5 md:p-6">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">{subSection.title}</h3>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent">
                                  Prezzo a partire da
                                </p>
                                <p className="mt-1 text-3xl font-semibold text-foreground">{subSection.price}</p>
                              </div>
                            </div>
                            <div className="mt-4 space-y-4 text-base leading-8 text-foreground/85 md:text-lg">
                              {subSection.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="quanto-costa-un-sito-web-nel-2026" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Vuoi capire quanto costa davvero il sito giusto per te?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci la tua attività e ti facciamo una valutazione concreta, senza impegno.
              </p>
              <div className="mt-8">
                <Link to="/contatti" className="btn-primary">
                  Richiedi una valutazione gratuita
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogWebsiteCostArticle;