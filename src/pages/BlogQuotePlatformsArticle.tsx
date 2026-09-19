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
import blogQuotePlatforms from "@/assets/blog-piattaforme-preventivi.webp";

const introParagraphs = [
  "Hai bisogno di un sito web, fai una ricerca su Google, e tra i primi risultati trovi piattaforme che promettono preventivi rapidi in pochi minuti. Servizi come ProntoPro, Cronoshare o portali simili funzionano proprio così: inserisci la tua richiesta e ricevi diverse proposte da professionisti, spesso già nel giro di poche ore. All'apparenza sembra la soluzione ideale — veloce, comoda, senza impegno. Il problema è che questo modello, nella maggior parte dei casi, non è progettato per farti ottenere il risultato migliore, ma per generare il maggior volume possibile di contatti per la piattaforma stessa. E quando si parla di un sito web che deve davvero lavorare per la tua attività, questa differenza cambia tutto.",
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "ProntoPro e piattaforme simili sono affidabili per farsi fare un sito web?",
    answer:
      "Possono funzionare per progetti molto semplici o test rapidi, ma il modello con cui operano — pagamento per il contatto, non per il progetto — spinge verso tempi ridotti e minore personalizzazione, elementi che pesano se il sito deve portarti clienti in modo continuativo.",
  },
  {
    question: "Perché i preventivi su queste piattaforme sono più bassi?",
    answer:
      "Perché il professionista ha già pagato per accedere al tuo contatto, e deve recuperare quell'investimento riducendo il tempo dedicato al progetto. Il prezzo più basso riflette meno lavoro reale, non solo meno margine.",
  },
  {
    question: "Conviene passare da una piattaforma di preventivi a un'agenzia in un secondo momento?",
    answer:
      "Sì, è un percorso comune, soprattutto quando il sito iniziale non porta più i risultati sperati o serve un aggiornamento strutturale. Un'agenzia può ripartire dalla base esistente o ricostruire con un approccio più mirato.",
  },
  {
    question: "Come faccio a valutare se il mio progetto ha bisogno di una piattaforma o di un'agenzia?",
    answer:
      "Dipende dall'obiettivo: se ti serve solo una presenza minima e temporanea, una piattaforma può bastare. Se il sito deve generare clienti in modo continuativo per la tua attività, un lavoro su misura fa la differenza.",
  },
];

const BlogQuotePlatformsArticle = () => {
  const slug = "siti-web-piattaforme-preventivi-online-conviene";
  const pageTitle = "Siti web piattaforme preventivi: conviene o è un errore?";
  const pageDescription =
    "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogQuotePlatforms}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = articleData?.datePublished ?? "2026-05-02";
  const dateModified = articleData?.dateModified ?? "2026-05-02";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline = "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?";

  return (
    <>
      <Helmet>
        <title>Piattaforme Preventivi Web (ProntoPro): Conviene?</title>
        <meta name="description" content="Preventivi siti web a basso costo su piattaforme online: conveniente o errore strategico? Ecco cosa succede davvero alla qualità del codice." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Piattaforme Preventivi Web (ProntoPro): Conviene?" />
        <meta property="og:description" content="Preventivi siti web a basso costo su piattaforme online: conveniente o errore strategico? Ecco cosa succede davvero alla qualità del codice." />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta property="article:author" content="Carlo Fullin" />
        <meta property="article:section" content={articleSection} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content="Piattaforme Preventivi Web (ProntoPro): Conviene?" />
        <meta name="twitter:description" content="Preventivi siti web a basso costo su piattaforme online: conveniente o errore strategico? Ecco cosa succede davvero alla qualità del codice." />
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
                  <h2 className="heading-3 text-foreground">Come funzionano davvero queste piattaforme</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Il meccanismo, in realtà, è piuttosto semplice: i professionisti pagano per avere la
                      possibilità di contattarti, non per lavorare con te. Pagano cioè per l'accesso al tuo contatto,
                      non per il progetto in sé — ed è una differenza che cambia completamente la dinamica di tutto
                      il processo. Chi ti risponde per primo, spesso, non è necessariamente il più adatto al tuo
                      progetto specifico, ma semplicemente chi è disposto a investire per ottenere quell'accesso. E
                      questo, inevitabilmente, ha un impatto diretto sulla qualità del risultato che poi ricevi.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema dei preventivi veloci</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Ricevere più preventivi in poco tempo può sembrarti, sulla carta, un vantaggio evidente. In
                      realtà spesso porta nella direzione opposta: quando il contatto ha avuto un costo per il
                      professionista, lui deve recuperare rapidamente quell'investimento, e questo riduce
                      inevitabilmente lo spazio per analisi, strategia e comprensione reale delle tue esigenze
                      specifiche. Il risultato è quasi sempre un approccio standardizzato, dove il tuo sito diventa
                      un prodotto da consegnare in fretta, non uno strumento costruito apposta per funzionare per la
                      tua attività.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Perché i prezzi bassi spesso costano di più</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Uno degli elementi più attrattivi di queste piattaforme è senza dubbio il prezzo: molte offerte
                      risultano più basse rispetto a quelle di professionisti che lavorano direttamente con il
                      cliente, senza intermediari. Ma c'è un motivo preciso dietro questa differenza — per mantenere
                      un margine sufficiente dopo aver pagato l'accesso al contatto, il tempo dedicato al tuo
                      progetto deve necessariamente essere ridotto. E questo si riflette su tutto: dalla struttura
                      del sito alla qualità tecnica, fino alla sua reale capacità di portarti risultati nel tempo. Se
                      vuoi farti un'idea più precisa di cosa incide davvero sul prezzo di un sito fatto bene, abbiamo
                      raccolto tutto in una guida dedicata a{" "}
                      <Link
                        to="/blog/quanto-costa-un-sito-web-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        quanto costa un sito web nel 2026
                      </Link>
                      . Un sito economico che non ti porta clienti, in fondo, non è affatto un risparmio: è
                      semplicemente un costo, spostato più avanti nel tempo.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema invisibile: tecnica, SEO e performance</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Un sito web non è solo quello che si vede a colpo d'occhio: gran parte del suo valore reale sta
                      nella struttura tecnica che sta dietro — velocità di caricamento, organizzazione dei contenuti,
                      capacità di essere compreso davvero da Google. Quando questi aspetti vengono trascurati, come
                      spesso accade quando il tempo dedicato al progetto è limitato, il sito diventa di fatto
                      invisibile: è uno dei motivi principali per cui{" "}
                      <Link
                        to="/blog/perche-il-tuo-sito-non-si-trova-su-google"
                        className="text-accent font-medium hover:underline"
                      >
                        molti siti non si trovano su Google
                      </Link>
                      . Può essere online, tecnicamente funzionante, persino gradevole da vedere — ma se non viene
                      trovato e non converte chi lo visita in un contatto, semplicemente non ti serve. Per accelerare
                      l'arrivo di richieste reali nel frattempo, è spesso più efficace investire in{" "}
                      <Link
                        to="/pubblicita-google-ads"
                        className="text-accent font-medium hover:underline"
                      >
                        campagne Google ADS gestite con criterio
                      </Link>
                      , piuttosto che sperare che il traffico arrivi da solo.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Cosa succede dopo la consegna</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Un altro punto critico, forse il più sottovalutato, emerge nel tempo. Chi lavora su grandi
                      volumi di progetti tende naturalmente a concentrarsi sulla consegna, non sulla continuità del
                      rapporto. Questo significa che, una volta pubblicato il sito, spesso manca supporto reale,
                      aggiornamento e capacità di far evolvere il progetto insieme alla tua attività. E quando
                      qualcosa smette di funzionare — e prima o poi succede — ti trovi a dover cercare qualcun altro
                      per sistemarlo, ripartendo praticamente da zero.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Quando queste piattaforme possono avere senso</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Non sono sempre, in assoluto, la scelta sbagliata — possono avere senso in situazioni molto
                      specifiche. Ad esempio quando hai bisogno di qualcosa di estremamente semplice, senza
                      particolari obiettivi di crescita nel breve periodo, oppure quando vuoi{" "}
                      <Link
                        to="/blog/creare-sito-web-da-soli-conviene"
                        className="text-accent font-medium hover:underline"
                      >
                        testare rapidamente un'idea
                      </Link>{" "}
                      di business senza investire troppo prima di sapere se funzionerà. Ma nel momento in cui il sito
                      deve diventare un vero strumento di lavoro per la tua attività, i limiti di questo modello
                      emergono molto rapidamente.
                    </p>
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
                    <p>
                      Qui sta, in fondo, il punto centrale di tutto il discorso. Un sito web può essere semplicemente
                      una presenza online, oppure può essere uno strumento che genera contatti e opportunità concrete
                      per la tua attività — è la stessa logica che applichiamo, ad esempio, nella{" "}
                      <Link to="/realizzazione-siti-web-padova" className="text-accent font-medium hover:underline">
                        realizzazione di siti a Padova
                      </Link>
                      , dove ogni progetto parte sempre da un obiettivo di business chiaro, non da un template da
                      riempire. Nel primo caso, quasi qualsiasi soluzione può bastare. Nel secondo, serve
                      progettazione reale, analisi e una visione chiara di dove vuoi arrivare. La differenza, alla
                      fine, non è mai nel codice: è nel modo in cui il sito viene pensato fin dall'inizio.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.28}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Le piattaforme di preventivi online offrono innegabilmente velocità e semplicità. Ma queste
                      caratteristiche hanno un prezzo che spesso non è immediatamente visibile al momento della
                      scelta. Se il tuo unico obiettivo è avere un sito online, possono anche essere sufficienti. Se
                      invece vuoi un sito che lavori davvero per te, che ti porti clienti e che cresca nel tempo
                      insieme alla tua attività, serve un approccio diverso — e soprattutto serve qualcuno che lavori
                      con te, non semplicemente per te.
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
                <h2 className="heading-2">Domande frequenti sulle piattaforme di preventivi</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-quote-platforms-${index}`}
                      className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline">
                        <span className="pr-4 text-base font-semibold text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="aeo-faq-answer pb-5 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
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
              <h2 className="heading-2 text-foreground">Vuoi un sito che porti davvero risultati?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se stai valutando come realizzare il tuo sito web, possiamo aiutarti a capire quale soluzione ha
                davvero senso per la tua attività, senza perdere tempo e senza investimenti inutili.
              </p>
              <div className="mt-8">
                <Link to="/contatti" className="btn-primary">
                  Richiedi Preventivo Gratuito in 24h
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
