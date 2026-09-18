import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogNotFoundOnGoogle from "@/assets/blog-sito-non-trovato-google.webp";

const introParagraphs = [
  "Ti è mai capitato di cercare su Google il servizio che offri e scoprire che, al posto tuo, compaiono sempre gli stessi concorrenti — magari attività meno preparate della tua, ma che online sembrano molto più presenti e organizzate? Non è fortuna, e non è nemmeno «magia»: il punto è semplice, oggi se non sei visibile su Google, per il cliente semplicemente non esisti. È come avere un negozio perfetto, aperto però in una strada dove non passa nessuno.",
];

const faqs: { question: string; answer: string; answerNode?: React.ReactNode }[] = [
  {
    question: "Quanto tempo serve perché un sito inizi a comparire su Google?",
    answer:
      "Dipende dalla concorrenza nella tua zona e dal punto di partenza, ma servono generalmente alcuni mesi di lavoro costante su contenuti e struttura. Se ti serve visibilità immediata, una campagna Google ADS può coprire il tempo necessario alla SEO per dare risultati.",
  },
  {
    question: "Basta essere su Google Maps per farsi trovare?",
    answer:
      "No, ma è una parte fondamentale. Sito web e scheda Google Business Profile devono lavorare insieme: uno curato e l'altro trascurato lascia comunque spazio ai concorrenti.",
  },
  {
    question: "Perché il mio sito è online da mesi ma non arriva nessun contatto?",
    answer:
      "Molto spesso perché il sito non è stato costruito attorno alle ricerche reali dei tuoi clienti, o perché manca una struttura pensata per guidare chi lo visita verso un'azione concreta, come contattarti.",
  },
  {
    question: "Come faccio a sapere se il mio sito ha un problema di posizionamento?",
    answer:
      "Un'analisi tecnica del sito individua in poco tempo se il problema è strutturale, di contenuti o di velocità: è il primo passo prima di decidere come intervenire.",
    answerNode: (
      <>
        <Link to="/posizionamento-google-e-ai" className="text-accent font-medium hover:underline">
          Un'analisi tecnica del sito
        </Link>{" "}
        individua in poco tempo se il problema è strutturale, di contenuti o di velocità: è il primo passo prima di
        decidere come intervenire.
      </>
    ),
  },
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
        <title>Perché il tuo Sito Non si Trova su Google? Soluzioni</title>
        <meta name="description" content="Il tuo sito è invisibile nelle ricerche? 5 cause tecniche ed errori SEO frequenti con le istruzioni operative per farti indicizzare." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Perché il tuo Sito Non si Trova su Google? Soluzioni" />
        <meta property="og:description" content="Il tuo sito è invisibile nelle ricerche? 5 cause tecniche ed errori SEO frequenti con le istruzioni operative per farti indicizzare." />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content="Carlo Fullin" />
        <meta property="article:section" content={articleSection} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Perché il tuo Sito Non si Trova su Google? Soluzioni" />
        <meta name="twitter:description" content="Il tuo sito è invisibile nelle ricerche? 5 cause tecniche ed errori SEO frequenti con le istruzioni operative per farti indicizzare." />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
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
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              },
            ],
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
                  {introParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-foreground/90">
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
                    <p>
                      Molti imprenditori pensano che basti avere un sito per iniziare a ricevere contatti. In realtà,
                      un sito senza un vero posizionamento è, agli occhi di chi cerca, praticamente invisibile: se
                      Google non capisce con chiarezza cosa fai e a chi ti rivolgi, non ha modo di mostrarti nei
                      risultati di ricerca — e questo significa finire in pagine che nessuno guarda mai. Spesso il
                      problema non è nemmeno solo tecnico, è strutturale: è uno dei{" "}
                      <Link
                        to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        segnali tipici di un sito ormai obsoleto
                      </Link>
                      . Avere un sito, in fondo, è solo il primo passo. Il vero obiettivo è farsi trovare — e per chi
                      non può aspettare i tempi naturali della SEO, una scorciatoia concreta è{" "}
                      <Link to="/pubblicita-google-ads" className="text-accent font-medium hover:underline">
                        investire in pubblicità su Google ADS
                      </Link>
                      , per iniziare a comparire da subito sopra ai risultati organici.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Le persone cercano servizi, non il nome della tua attività</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      A meno che tu non sia già un'attività conosciuta, difficilmente qualcuno cercherà il nome della
                      tua azienda su Google. Le persone cercano soluzioni ai loro problemi, e chi ha bisogno di un
                      servizio scrive frasi semplici e dirette, spesso legate alla propria zona — pensa a chi cerca
                      un'{" "}
                      <Link to="/realizzazione-siti-web-padova" className="text-accent font-medium hover:underline">
                        agenzia web a Padova
                      </Link>{" "}
                      invece del nome di uno studio specifico che magari non conosce nemmeno. Se il tuo sito non
                      contiene queste ricerche reali — quelle che fa davvero chi ha bisogno di te — Google
                      semplicemente non ha modo di collegarti a quella persona, e di conseguenza non ti mostrerà mai.
                      È esattamente il lavoro che serve per costruire{" "}
                      <Link to="/posizionamento-google-e-ai" className="text-accent font-medium hover:underline">
                        un vero posizionamento su Google
                      </Link>
                      , pensato per la tua zona e per il tuo settore specifico.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Google Maps: dove nascono molti contatti</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Quando una persona cerca un servizio locale, molto spesso la prima cosa che vede non è nemmeno
                      l'elenco dei siti, ma la mappa con le attività della zona — ed è diventata una delle principali
                      fonti di contatto reale oggi. Se non sei presente lì, o se la tua scheda non è curata nei
                      dettagli, stai semplicemente lasciando spazio ai tuoi concorrenti diretti. Sito web e presenza su
                      Google Maps devono lavorare insieme, come due metà dello stesso lavoro: se anche uno solo dei due
                      viene trascurato, la visibilità che perdi si traduce in clienti che vanno da qualcun altro.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Se il sito è lento, gli utenti se ne vanno</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      La velocità è uno dei fattori più sottovalutati di tutti. Se una pagina impiega troppo a
                      caricarsi, chi la visita semplicemente non aspetta: chiude e passa al sito successivo, spesso
                      quello di un concorrente. Google osserva questo comportamento e lo usa concretamente per capire
                      se il tuo sito merita di essere mostrato oppure no — un sito lento non solo fa scappare le
                      persone, ma scende anche nei risultati di ricerca nel tempo. È anche per questo motivo che ha
                      senso{" "}
                      <Link
                        to="/blog/quanto-costa-un-sito-web-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        investire in un sito ben fatto
                      </Link>{" "}
                      fin dall'inizio, invece di ripiegare su soluzioni improvvisate che poi si pagano due volte.
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
                      Oggi esistono moltissimi strumenti per creare un sito in autonomia, compresi i generatori basati
                      su{" "}
                      <Link
                        to="/blog/siti-web-creati-con-intelligenza-artificiale"
                        className="text-accent font-medium hover:underline"
                      >
                        intelligenza artificiale
                      </Link>
                      . Il problema è che un sito non deve solo essere online: deve funzionare. Deve essere strutturato
                      in modo che Google lo capisca, e in modo da guidare chi lo visita verso un'azione concreta. Un
                      sito fatto senza una vera strategia dietro può anche essere esteticamente bello, ma se non porta
                      contatti, semplicemente non serve — e il tempo che hai investito per costruirlo diventa, di
                      fatto, tempo perso.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Essere su Google non è mai questione di fortuna. È una questione di struttura, chiarezza e
                      strategia messe insieme. Se il tuo sito oggi non si trova, non significa che il tuo lavoro non
                      funzioni: significa semplicemente che il sito non è stato costruito per essere trovato. E nel
                      digitale, chi non si vede lascia semplicemente spazio a chi si vede al posto suo.
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection className="mb-6 flex items-center gap-4">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti sulla visibilità su Google</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-not-found-google-${index}`}
                      className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline">
                        <span className="pr-4 text-base font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="aeo-faq-answer pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answerNode ?? faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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