import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogOutdatedWebsite from "@/assets/blog-sito-obsoleto-2026.jpg";

const introParagraphs = [
  "Nel 2026 la differenza tra un sito web che porta clienti e uno che resta fermo a fare da semplice vetrina è diventata molto evidente.",
  "Molte attività hanno ancora un sito online, ma questo non significa che stia funzionando.",
  "Anzi, in molti casi il sito è proprio il punto debole della presenza digitale: lento, poco chiaro, difficile da usare o semplicemente poco credibile.",
  "Il problema è che questi segnali non sono sempre evidenti a chi lo gestisce, ma lo sono eccome per chi lo visita.",
  "Se ti riconosci anche solo in uno di questi casi, è probabile che tu stia perdendo opportunità senza accorgertene.",
];

const sections = [
  {
    title: "Il sito è lento: quando pochi secondi fanno la differenza",
    paragraphs: [
      "Uno dei segnali più chiari di un sito obsoleto è la velocità.",
      "O meglio, la mancanza di velocità.",
      "Se una pagina impiega più di qualche secondo per caricarsi, l’utente semplicemente se ne va. Non aspetta, non torna indietro, non ci pensa due volte.",
      "Questo succede ancora più spesso da smartphone, dove la connessione e la pazienza sono ancora più limitate.",
      "Un sito lento non è solo fastidioso: trasmette anche una sensazione di scarsa professionalità.",
      "E nel frattempo, Google lo penalizza.",
    ],
  },
  {
    title: "Non si trova su Google (e oggi nemmeno nelle ricerche AI)",
    paragraphs: [
      "Un altro segnale evidente è l’invisibilità.",
      "Se il tuo sito non compare quando qualcuno cerca i tuoi servizi, per il mercato è come se non esistesse.",
      "Nel 2026 questo problema si è ampliato: non si tratta più solo di comparire su Google, ma anche di essere presenti nelle risposte generate dall’intelligenza artificiale.",
      "I siti con contenuti generici, senza struttura e senza chiarezza, vengono semplicemente ignorati.",
      "E questo significa perdere una quantità enorme di traffico potenziale.",
    ],
  },
  {
    title: "Su smartphone è difficile da usare",
    paragraphs: [
      "Oggi la maggior parte delle persone visita i siti da telefono.",
      "Eppure, molti siti sono ancora progettati come se il desktop fosse il centro di tutto.",
      "Il risultato è semplice: testi piccoli, pulsanti difficili da cliccare, menu complicati.",
      "Quando un utente deve fare fatica per capire o navigare, abbandona.",
      "E passa al sito successivo.",
    ],
  },
  {
    title: "Non trasmette fiducia",
    paragraphs: [
      "Questo è uno dei punti più sottovalutati.",
      "Un sito può funzionare tecnicamente, ma risultare comunque debole.",
      "Foto generiche, contenuti vaghi, assenza di elementi reali dell’azienda: tutto questo crea distanza.",
      "Nel 2026, con la quantità di contenuti generati automaticamente, le persone cercano segnali umani.",
      "Vogliono capire chi c’è dietro.",
      "Se il tuo sito non comunica autenticità, difficilmente convincerà qualcuno a contattarti.",
    ],
  },
  {
    title: "Non porta azioni concrete",
    paragraphs: [
      "Il segnale più importante è questo.",
      "Un sito moderno non deve solo informare, deve far fare qualcosa.",
      "Contattarti, prenotare, chiedere informazioni.",
      "Se l’utente entra, guarda e poi esce senza fare nulla, il problema non è il traffico.",
      "È il sito.",
      "Molti siti sono ancora pensati come brochure: spiegano, ma non guidano.",
      "E senza una direzione chiara, l’utente non agisce.",
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Un sito web non è obsoleto perché è vecchio, ma perché non è più efficace.",
      "Può essere online, funzionare tecnicamente e avere anche un buon design.",
      "Ma se è lento, invisibile, difficile da usare o poco credibile, sta già facendo perdere opportunità.",
      "E nel digitale, le opportunità perse finiscono sempre a qualcun altro.",
    ],
  },
];

const BlogOutdatedWebsiteArticle = () => {
  const pageTitle = "Sito web obsoleto: 5 segnali che perdi clienti nel 2026";
  const pageDescription =
    "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.";
  const pageUrl = "https://4weblab.it/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026";
  const pageImage = `https://4weblab.it${blogOutdatedWebsite}`;
  const articleData = getArticleBySlug("sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026");
  const datePublished = articleData?.datePublished ?? "2026-03-26";
  const dateModified = articleData?.dateModified ?? "2026-03-26";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 560);
  const headline = "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026";

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
              <BlogBreadcrumb currentTitle="Sito web obsoleto: 5 segnali" />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">
                Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026
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
                      className={index === 4 ? "font-semibold text-foreground" : "text-foreground/90"}
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
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug="sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Il tuo sito web sta davvero funzionando?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se hai riconosciuto anche solo uno di questi segnali, è il momento di capire cosa non sta funzionando davvero.
              </p>
              <p className="body-large mt-3 text-muted-foreground">
                Possiamo analizzare il tuo sito e dirti in modo chiaro cosa migliorare, senza complicazioni inutili.
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

export default BlogOutdatedWebsiteArticle;