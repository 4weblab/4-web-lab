import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogQuotePlatforms from "@/assets/blog-piattaforme-preventivi.jpg";

const introParagraphs = [
  "Hai bisogno di un sito web, fai una ricerca su Google e tra i primi risultati trovi piattaforme che promettono preventivi rapidi in pochi minuti.",
  "Servizi come ProntoPro, Cronoshare o portali simili funzionano proprio così: inserisci la richiesta e ricevi diverse proposte da professionisti.",
  "All'apparenza sembra la soluzione ideale. Veloce, comoda, senza impegno.",
  "Il problema è che questo modello, nella maggior parte dei casi, non è progettato per farti ottenere risultati, ma per generare volume di contatti.",
  "E quando si parla di un sito web, questo fa tutta la differenza.",
];

const BlogQuotePlatformsArticle = () => {
  const slug = "siti-web-piattaforme-preventivi-online-conviene";
  const pageTitle = "Siti web piattaforme preventivi: conviene davvero?";
  const pageDescription =
    "Conviene usare piattaforme di preventivi per creare un sito web? Scopri rischi, limiti e quando è meglio evitarle.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogQuotePlatforms}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = articleData?.datePublished ?? "2026-05-02";
  const dateModified = articleData?.dateModified ?? "2026-05-02";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline = "Siti web su piattaforme di preventivi online: conviene davvero per il tuo business?";

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
                  { label: "Piattaforme di preventivi online" },
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
                  <h2 className="heading-3 text-foreground">Come funzionano davvero queste piattaforme</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Il meccanismo è semplice.</p>
                    <p>I professionisti pagano per avere la possibilità di contattarti.</p>
                    <p>Non per lavorare con te, ma per poter inviare una proposta.</p>
                    <p>Questo cambia completamente la dinamica.</p>
                    <p>
                      Chi risponde non è necessariamente il più adatto al tuo progetto, ma chi è disposto a
                      investire per ottenere accesso al contatto.
                    </p>
                    <p>E questo ha un impatto diretto sulla qualità del risultato finale.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema dei preventivi veloci</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Ricevere più preventivi in poco tempo può sembrare un vantaggio.</p>
                    <p>In realtà, spesso porta nella direzione opposta.</p>
                    <p>
                      Quando il contatto ha un costo, il professionista deve recuperare rapidamente quell'investimento.
                    </p>
                    <p>
                      Questo riduce lo spazio per analisi, strategia e comprensione reale delle esigenze.
                    </p>
                    <p>
                      Il risultato è un approccio standardizzato, dove il sito diventa un prodotto da consegnare,
                      non uno strumento costruito per funzionare.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Perché i prezzi bassi spesso costano di più</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Uno degli elementi più attrattivi è il prezzo.</p>
                    <p>
                      Molte offerte risultano più basse rispetto a quelle di professionisti che lavorano
                      direttamente con il cliente.
                    </p>
                    <p>Ma c'è un motivo.</p>
                    <p>Per mantenere margine, il tempo dedicato al progetto deve essere ridotto.</p>
                    <p>
                      E questo si riflette su tutto: dalla struttura del sito alla qualità tecnica, fino alla
                      capacità di portare risultati. Se vuoi capire cosa incide davvero sul prezzo, abbiamo
                      raccolto tutto in una guida dedicata a{" "}
                      <Link
                        to="/blog/quanto-costa-un-sito-web-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        quanto costa un sito web nel 2026
                      </Link>
                      .
                    </p>
                    <p>Un sito economico che non porta clienti non è un risparmio.</p>
                    <p>È un costo.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema invisibile: tecnica, SEO e performance</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Un sito web non è solo quello che si vede.</p>
                    <p>Gran parte del suo valore sta nella struttura tecnica.</p>
                    <p>
                      Velocità di caricamento, organizzazione dei contenuti, capacità di essere compreso da Google.
                    </p>
                    <p>
                      Quando questi aspetti vengono trascurati, il sito diventa invisibile: è uno dei motivi
                      principali per cui{" "}
                      <Link
                        to="/blog/perche-il-tuo-sito-non-si-trova-su-google"
                        className="text-accent font-medium hover:underline"
                      >
                        molti siti non si trovano su Google
                      </Link>
                      .
                    </p>
                    <p>Può essere online, funzionante, anche gradevole.</p>
                    <p>Ma se non viene trovato e non converte, non serve.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Cosa succede dopo la consegna</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Un altro punto critico emerge nel tempo.</p>
                    <p>Chi lavora su grandi volumi tende a concentrarsi sulla consegna, non sulla continuità.</p>
                    <p>
                      Questo significa che, una volta pubblicato il sito, spesso manca supporto, aggiornamento
                      ed evoluzione del progetto.
                    </p>
                    <p>E quando qualcosa non funziona, devi rivolgerti a qualcun altro per sistemarlo.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Quando queste piattaforme possono avere senso</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Non sono sempre la scelta sbagliata.</p>
                    <p>Possono avere senso in situazioni molto specifiche.</p>
                    <p>
                      Ad esempio quando hai bisogno di qualcosa di estremamente semplice, senza particolari
                      obiettivi di crescita.
                    </p>
                    <p>Oppure quando vuoi testare rapidamente un'idea senza investire troppo.</p>
                    <p>Ma se il sito deve diventare uno strumento di lavoro, i limiti emergono rapidamente.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">
                    La differenza tra avere un sito e avere uno strumento che funziona
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Qui sta il punto centrale.</p>
                    <p>
                      Un sito web può essere semplicemente una presenza online, oppure uno strumento che genera
                      contatti e opportunità — è la stessa logica che applichiamo nella{" "}
                      <Link to="/realizzazione-siti-web-padova" className="text-accent font-medium hover:underline">
                        realizzazione di siti a Padova
                      </Link>
                      , dove ogni progetto parte da un obiettivo di business chiaro.
                    </p>
                    <p>Nel primo caso, quasi qualsiasi soluzione può bastare.</p>
                    <p>Nel secondo, serve progettazione, analisi e una visione chiara.</p>
                    <p>La differenza non è nel codice, ma nel modo in cui il sito viene pensato.</p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.28}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>Le piattaforme di preventivi online offrono velocità e semplicità.</p>
                    <p>Ma queste caratteristiche hanno un prezzo che spesso non è immediatamente visibile.</p>
                    <p>Se l'obiettivo è avere solo un sito online, possono essere sufficienti.</p>
                    <p>
                      Se invece vuoi un sito che lavori per te, che porti clienti e che cresca nel tempo, serve
                      un approccio diverso.
                    </p>
                    <p>E soprattutto, serve qualcuno che lavori con te, non semplicemente per te.</p>
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
              <h2 className="heading-2 text-foreground">Vuoi un sito che porti davvero risultati?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se stai valutando come realizzare il tuo sito web, possiamo aiutarti a capire quale soluzione ha
                davvero senso per la tua attività, senza perdere tempo e senza investimenti inutili.
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

export default BlogQuotePlatformsArticle;
