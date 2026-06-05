import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogNotFoundOnGoogle from "@/assets/blog-sito-non-trovato-google.jpg";

const introParagraphs = [
  "Ti è mai capitato di cercare su Google il servizio che offri e scoprire che, al posto tuo, compaiono sempre gli stessi concorrenti?",
  "Magari attività meno preparate della tua, ma online sembrano molto più presenti e organizzate.",
  "Non è fortuna, e non è nemmeno “magia”.",
  "Il punto è semplice: oggi, se non sei visibile su Google, per il cliente non esisti.",
  "È come avere un negozio perfetto, ma aperto in una strada dove non passa nessuno.",
];

const BlogNotFoundOnGoogleArticle = () => {
  const slug = "perche-il-tuo-sito-non-si-trova-su-google";
  const pageTitle = "Perché il tuo sito non si trova su Google (soluzioni 2026)";
  const pageDescription =
    "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogNotFoundOnGoogle}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = articleData?.datePublished ?? "2026-04-24";
  const dateModified = articleData?.dateModified ?? "2026-04-24";
  const articleSection = articleData?.category ?? "SEO & Visibilità";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 600);
  const headline = "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)";

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
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "Blog", to: "/blog" },
                  { label: "Perché il tuo sito non si trova su Google" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">
                Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)
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
              <AnimatedSection delay={0}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Hai un sito ma non compare su Google</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Molti imprenditori pensano che basti avere un sito per ricevere contatti.</p>
                    <p>In realtà, un sito senza posizionamento è invisibile.</p>
                    <p>Se Google non capisce cosa fai e a chi ti rivolgi, non può mostrarti nei risultati di ricerca.</p>
                    <p>
                      E questo significa finire nelle pagine che nessuno guarda. Spesso il problema non è solo
                      tecnico: è strutturale, ed è uno dei{" "}
                      <Link
                        to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        segnali tipici di un sito ormai obsoleto
                      </Link>
                      .
                    </p>
                    <p>Avere un sito è solo il primo passo. Il vero obiettivo è farsi trovare.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Le persone cercano servizi, non il nome della tua attività</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>A meno che tu non sia già conosciuto, nessuno cercherà il nome della tua azienda su Google.</p>
                    <p>Le persone cercano soluzioni ai loro problemi.</p>
                    <p>
                      Chi ha bisogno di un servizio scrive frasi semplici e dirette, spesso legate alla propria zona
                      — pensa ad esempio a chi cerca un'{" "}
                      <Link to="/realizzazione-siti-web-padova" className="text-accent font-medium hover:underline">
                        agenzia web a Padova
                      </Link>{" "}
                      invece del nome di uno studio specifico.
                    </p>
                    <p>
                      Se il tuo sito non contiene queste ricerche reali, Google non ha modo di collegarti a chi sta
                      cercando proprio quello che fai.
                    </p>
                    <p>E di conseguenza, non ti mostrerà.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Google Maps: dove nascono molti contatti</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Quando una persona cerca un servizio locale, molto spesso la prima cosa che vede è la mappa con
                      le attività nella zona.
                    </p>
                    <p>Quella è una delle principali fonti di contatto oggi.</p>
                    <p>
                      Se non sei presente o se la tua scheda non è curata, stai lasciando spazio diretto ai tuoi
                      concorrenti.
                    </p>
                    <p>Sito web e presenza su Google Maps devono lavorare insieme.</p>
                    <p>Se uno dei due è trascurato, perdi visibilità.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Se il sito è lento, gli utenti se ne vanno</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>La velocità è uno dei fattori più sottovalutati.</p>
                    <p>Se una pagina impiega troppo a caricarsi, l'utente non aspetta.</p>
                    <p>Chiude e passa al sito successivo.</p>
                    <p>Google osserva questo comportamento e lo usa per capire se il tuo sito è valido oppure no.</p>
                    <p>
                      Un sito lento non solo fa scappare le persone, ma scende anche nei risultati di ricerca. È
                      anche per questo che ha senso{" "}
                      <Link to="/quanto-costa-sito-web" className="text-accent font-medium hover:underline">
                        investire in un sito ben fatto
                      </Link>
                      , invece di ripiegare su soluzioni improvvisate.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Un sito fatto “da solo” spesso non basta</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Oggi esistono molti strumenti per creare un sito in autonomia, compresi i generatori basati su{" "}
                      <Link
                        to="/blog/siti-web-creati-con-intelligenza-artificiale"
                        className="text-accent font-medium hover:underline"
                      >
                        intelligenza artificiale
                      </Link>
                      .
                    </p>
                    <p>Il problema è che un sito non deve solo essere online, deve funzionare.</p>
                    <p>
                      Deve essere strutturato per essere capito da Google e per guidare l'utente verso un'azione.
                    </p>
                    <p>Un sito fatto senza strategia può anche essere bello, ma se non porta contatti, non serve.</p>
                    <p>E il tempo investito diventa tempo perso.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Essere su Google non è questione di fortuna.</p>
                    <p>È una questione di struttura, chiarezza e strategia.</p>
                    <p>
                      Se il tuo sito oggi non si trova, non significa che non funzioni il tuo lavoro.
                    </p>
                    <p>Significa semplicemente che non è stato costruito per essere trovato.</p>
                    <p>E nel digitale, chi non si vede, lascia spazio agli altri.</p>
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
              <h2 className="heading-2 text-foreground">Vuoi capire perché il tuo sito non compare su Google?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Possiamo analizzare il tuo sito e dirti in modo chiaro cosa non sta funzionando e cosa migliorare per
                iniziare a farti trovare davvero.
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

export default BlogNotFoundOnGoogleArticle;