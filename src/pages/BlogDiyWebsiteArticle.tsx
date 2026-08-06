import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SummerClosureNotice from "@/components/SummerClosureNotice";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogDiyWebsite from "@/assets/blog-creare-sito-da-soli.webp";

const introParagraphs = [
  "Stai pensando di creare un sito web da solo?",
  "Magari hai cercato “come creare un sito web gratis” oppure hai visto che WordPress è indicato ovunque come la soluzione migliore.",
  "E in effetti, oggi mettere online un sito è facile.",
  "Il problema è un altro.",
  "Un sito web non serve a esistere, serve a portare clienti.",
  "Ed è qui che il fai-da-te, nella maggior parte dei casi, si trasforma in una perdita di tempo e di opportunità.",
];

const BlogDiyWebsiteArticle = () => {
  const slug = "creare-sito-web-da-soli-conviene";
  const pageTitle = "Creare sito web da soli: conviene davvero nel 2026?";
  const pageDescription =
    "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogDiyWebsite}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = articleData?.datePublished ?? "2026-05-03";
  const dateModified = articleData?.dateModified ?? "2026-05-03";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline = "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
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
                  { label: "Creare sito web da soli" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">
                {headline}
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

        <SummerClosureNotice />

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
              <AnimatedSection delay={0}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Creare un sito web da soli è davvero così semplice?</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Piattaforme come WordPress, builder visuali e{" "}
                      <Link
                        to="/blog/siti-web-creati-con-intelligenza-artificiale"
                        className="text-accent font-medium hover:underline"
                      >
                        strumenti automatici basati sull'intelligenza artificiale
                      </Link>{" "}
                      promettono semplicità.
                    </p>
                    <p>E in parte è vero.</p>
                    <p>Con pochi click puoi avere un sito online, con un design accettabile e qualche pagina pronta.</p>
                    <p>Il punto è che questo è solo l'inizio.</p>
                    <p>
                      Un sito web non è solo una grafica, ma un insieme di elementi che devono funzionare insieme:
                      velocità, struttura, contenuti, chiarezza.
                    </p>
                    <p>E senza esperienza, questi aspetti vengono quasi sempre trascurati.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema nascosto di WordPress e dei siti fai-da-te</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>WordPress è uno strumento potente.</p>
                    <p>Ma proprio per questo non è automatico.</p>
                    <p>
                      Senza sapere come configurarlo correttamente, il risultato è spesso un sito lento, pieno di
                      plugin inutili, difficile da gestire e vulnerabile dal punto di vista della sicurezza.
                    </p>
                    <p>Il problema non è lo strumento, ma l'utilizzo.</p>
                    <p>Un sito fatto senza criterio può sembrare funzionante, ma sotto è fragile.</p>
                    <p>E questo, prima o poi, si paga.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Perché un sito fai-da-te spesso non porta clienti</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Qui sta il punto centrale.</p>
                    <p>Molti riescono a creare un sito.</p>
                    <p>Pochi riescono a creare un sito che funziona.</p>
                    <p>
                      Senza una struttura pensata per il cliente, il sito diventa un insieme di informazioni senza
                      direzione. Non a caso, è la stessa logica che vale quando ci si chiede{" "}
                      <Link
                        to="/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        se conviene un sito web o i social network
                      </Link>
                      : ciò che fa la differenza è la strategia, non lo strumento.
                    </p>
                    <p>L'utente entra, guarda e se ne va.</p>
                    <p>Non perché il sito sia brutto, ma perché non è progettato per guidarlo.</p>
                    <p>E senza azione, non ci sono risultati.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il “buco nero” di Google</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Uno degli errori più comuni è pensare che basti avere un sito per comparire su Google.</p>
                    <p>In realtà, se il sito non è strutturato nel modo giusto, non verrà trovato.</p>
                    <p>
                      Google deve capire cosa fai, per chi lavori e perché dovrebbe mostrare proprio il tuo sito agli
                      utenti che cercano i tuoi servizi.
                    </p>
                    <p>Se questi elementi non sono chiari, il sito resta invisibile.</p>
                    <p>
                      È come aprire un negozio perfetto in mezzo a un bosco. In questi casi, una strada veloce per essere
                      trovati è affiancare al sito{" "}
                      <Link to="/pubblicita-google-ads" className="text-accent font-medium hover:underline">
                        campagne Google ADS mirate
                      </Link>
                      .
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il falso mito del risparmio</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Creare un sito web da soli sembra una scelta economica.</p>
                    <p>Ma raramente lo è.</p>
                    <p>
                      Il tempo speso a capire come funziona tutto, risolvere problemi e sistemare errori ha un costo
                      reale. A questo si aggiungono eventuali correzioni future, clienti persi e opportunità mancate.
                    </p>
                    <p>
                      Se vuoi avere un'idea più precisa di cosa incide davvero sul prezzo, abbiamo raccolto tutto
                      nella nostra guida ai{" "}
                      <Link
                        to="/blog/quanto-costa-un-sito-web-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        costi reali di un sito web nel 2026
                      </Link>
                      .
                    </p>
                    <p>Un sito che non porta risultati non è un risparmio.</p>
                    <p>È un costo nascosto.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Quando ha senso fare un sito da soli</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Non è sempre una scelta sbagliata.</p>
                    <p>
                      Può avere senso se vuoi fare esperienza, se stai testando un'idea o se non hai obiettivi
                      commerciali immediati.
                    </p>
                    <p>Ma nel momento in cui il sito deve lavorare per te, il discorso cambia.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Creare un sito web da soli oggi è possibile.</p>
                    <p>Ma creare un sito che funzioni davvero richiede qualcosa in più.</p>
                    <p>
                      Struttura, strategia e chiarezza fanno la differenza tra un sito che esiste e un sito che porta
                      clienti.
                    </p>
                    <p>E nel digitale, questa differenza è tutto.</p>
                  </div>
                </article>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <RelatedArticles currentSlug={slug} />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Vuoi capire se il tuo sito può funzionare davvero?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se hai già provato a creare un sito da solo o stai pensando di farlo, possiamo aiutarti a capire cosa
                ha senso fare davvero per la tua attività.
              </p>
              <div className="mt-8">
                <Link to="/contatti" className="btn-primary">
                  Richiedi una consulenza
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

export default BlogDiyWebsiteArticle;