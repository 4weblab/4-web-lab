import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogGdprPrivacy from "@/assets/blog-gdpr-privacy.webp";

const introParagraphs = [
  "Molte aziende sottovalutano ancora un aspetto fondamentale del proprio sito web: la conformità a GDPR, privacy e gestione dei cookie.",
  "Spesso il sito è online, funziona ed è anche curato dal punto di vista grafico. Ma sotto la superficie mancano elementi obbligatori che possono trasformarsi in un problema concreto.",
  "Nel 2026 non si tratta più solo di inserire un banner. La gestione dei dati degli utenti è diventata un tema centrale, sia per la normativa sia per la fiducia di chi visita il sito.",
  "E ignorarlo non è più una scelta neutra.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs: ReactNode[];
};

const sections: Section[] = [
  {
    title: "GDPR siti web: quando è obbligatorio e perché devi adeguarti",
    paragraphs: [
      "Negli ultimi anni la normativa sulla protezione dei dati è diventata sempre più chiara e applicata.",
      "Un sito web, anche molto semplice, raccoglie informazioni: dati di contatto, comportamenti di navigazione, statistiche.",
      "Questo significa che ogni attività online ha una responsabilità diretta nella gestione dei dati degli utenti.",
      "Non è più una questione tecnica, ma una parte integrante della presenza online.",
    ],
  },
  {
    title: "Cookie banner obbligatorio: cosa deve avere un sito nel 2026",
    paragraphs: [
      "Uno degli aspetti più sottovalutati riguarda proprio i cookie.",
      "Molti siti mostrano ancora banner generici, spesso non conformi.",
      "Nel 2026, un banner corretto deve permettere all’utente di scegliere davvero.",
      "Non basta informare: bisogna dare un consenso reale e bloccare i cookie non necessari finché l’utente non accetta.",
      "Questo è uno dei punti più controllati e anche uno dei più facili da sbagliare.",
    ],
  },
  {
    title: "Errori GDPR siti web: cosa NON deve mancare per essere a norma",
    paragraphs: [
      "La maggior parte dei siti non è fuori norma per scelta, ma per superficialità.",
      "Spesso si trovano informative incomplete, testi copiati o sistemi di tracciamento attivi senza consenso.",
      "Sono dettagli che possono sembrare secondari, ma che fanno la differenza tra un sito corretto e uno potenzialmente problematico.",
      "Il punto è che questi errori sono molto più comuni di quanto si pensi.",
    ],
  },
  {
    title: "GDPR sanzioni siti web: cosa rischi davvero",
    paragraphs: [
      "Il rischio non è solo teorico.",
      "Le sanzioni esistono e, in alcuni casi, possono essere significative.",
      "Ma il problema più immediato è un altro: la fiducia.",
      "Un utente che non percepisce attenzione alla privacy difficilmente lascerà i propri dati.",
      "E senza fiducia, un sito smette di funzionare davvero.",
    ],
  },
  {
    title: "Privacy sito web: cosa deve avere per essere conforme al GDPR",
    paragraphs: [
      "Un sito web nel 2026 dovrebbe includere elementi chiari e ben configurati.",
      "Non si tratta di aggiungere documenti a caso, ma di costruire una struttura corretta.",
      "Una privacy policy aggiornata, una cookie policy coerente e un sistema di gestione del consenso funzionante sono ormai lo standard minimo.",
      <>
        Quando questi elementi sono implementati correttamente, il sito risulta più affidabile
        anche agli occhi dell’utente — un dettaglio che fa la differenza soprattutto su un{" "}
        <Link to="/siti-web-aziendali" className={linkClass}>
          sito aziendale strutturato
        </Link>
        , dove ogni segnale di serietà conta.
      </>,
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Molti vedono GDPR, cookie e privacy come un obbligo tecnico da risolvere velocemente.",
      "In realtà fanno parte di un sito web fatto bene.",
      <>
        Ignorarli significa esporsi a rischi e trasmettere poca attenzione ai dettagli, lo stesso
        problema che si vede su tanti{" "}
        <Link
          to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
          className={linkClass}
        >
          siti ormai datati che fanno perdere clienti ogni giorno
        </Link>
        .
      </>,
      <>
        Gestirli correttamente, invece, significa costruire una presenza online più solida, più credibile e più professionale —
        una base indispensabile anche prima di investire in{" "}
        <Link to="/pubblicita-google-ads" className={linkClass}>
          campagne Google ADS
        </Link>
        , che richiedono un sito conforme per essere davvero efficaci.
      </>,
    ],
  },
];

const BlogGdprArticle = () => {
  const pageTitle = "GDPR siti web 2026: obblighi, cookie e privacy";
  const pageDescription =
    "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.";
  const pageUrl = "https://4weblab.it/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy";
  const pageImage = `https://4weblab.it${blogGdprPrivacy}`;
  const articleData = getArticleBySlug("gdpr-siti-web-2026-obblighi-cookie-e-privacy");
  const datePublished = articleData?.datePublished ?? "2026-04-20";
  const dateModified = articleData?.dateModified ?? "2026-04-20";
  const articleSection = articleData?.category ?? "Privacy & Compliance";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 540);
  const headline = "GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)";

  return (
    <>
      <Helmet>
        <title>GDPR Siti Web 2026: Guida a Cookie Banner e Privacy</title>
        <meta name="description" content="Cosa deve avere un sito web nel 2026 per evitare sanzioni GDPR? Regole ufficiali su cookie banner, consensi GA4 e informativa privacy." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="GDPR Siti Web 2026: Guida a Cookie Banner e Privacy" />
        <meta property="og:description" content="Cosa deve avere un sito web nel 2026 per evitare sanzioni GDPR? Regole ufficiali su cookie banner, consensi GA4 e informativa privacy." />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content="Carlo Fullin" />
        <meta property="article:section" content={articleSection} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="GDPR Siti Web 2026: Guida a Cookie Banner e Privacy" />
        <meta name="twitter:description" content="Cosa deve avere un sito web nel 2026 per evitare sanzioni GDPR? Regole ufficiali su cookie banner, consensi GA4 e informativa privacy." />
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
            publisher: { "@id": "https://4weblab.it/#business" },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl,
            },
            url: pageUrl,
            datePublished,
            dateModified,
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        <section className="page-hero">
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
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "Blog", to: "/blog" },
                  { label: "GDPR siti web 2026" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                GDPR siti web 2026: obblighi, cookie e privacy (cosa devi avere per essere a norma)
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
                <div className="space-y-6 text-base leading-8 text-foreground md:text-lg">
                  {introParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={index === 3 ? "font-semibold text-foreground" : "text-foreground/90"}
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
                      {section.paragraphs.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="gdpr-siti-web-2026-obblighi-cookie-e-privacy" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Il tuo sito è davvero a norma GDPR?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se hai dubbi su privacy, cookie o gestione dei dati, possiamo aiutarti a capire cosa manca e come sistemarlo in modo semplice e corretto.
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

export default BlogGdprArticle;