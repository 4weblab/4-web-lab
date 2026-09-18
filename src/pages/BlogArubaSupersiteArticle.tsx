import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, HelpCircle, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogArubaHero from "@/assets/blog-aruba-supersite.webp";
import exampleFavesrl from "@/assets/blog-aruba-example-favesrl.webp";
import exampleImport from "@/assets/blog-aruba-example-importirrigation.webp";

const linkClass = "text-accent font-medium hover:underline";

const introParagraphs: ReactNode[] = [
  "Hai deciso che è arrivato il momento di creare un sito web per la tua attività. Fai una ricerca su Google, trovi Aruba SuperSite, e la promessa sembra fatta apposta per te: scegli un modello, inserisci i tuoi contenuti, e in poco tempo il sito è online. Semplice, veloce, economico — tre parole che, quando devi decidere in fretta con un budget limitato, pesano parecchio. Ma la domanda che conta davvero non è quanto sia facile creare un sito con questo strumento. È un'altra: quel sito riuscirà a portarti clienti veri, o resterà solo una pagina online che nessuno troverà mai? Tra avere un sito e avere un sito che lavora per te, la differenza è enorme — ed è quello che vediamo in questa guida, con qualche esempio reale.",
];

type Section = { title: string; paragraphs: ReactNode[] };

const sections: Section[] = [
  {
    title: "Creare un sito è facile. Farlo funzionare è un'altra storia",
    paragraphs: [
      "Negli ultimi anni gli strumenti per creare siti web sono diventati incredibilmente più semplici, e Aruba SuperSite ne è un esempio concreto: ti permette di mettere online delle pagine senza scrivere una riga di codice né avere competenze tecniche. Questo però risolve solo una parte del tuo problema. Il sito che stai per creare non è un documento da pubblicare e dimenticare: è uno strumento che deve convincere chi lo visita a fare qualcosa di preciso — chiamarti, chiederti un preventivo, prenotare un appuntamento, comprare da te invece che dal tuo concorrente. Ed è esattamente qui che molti progetti fai-da-te, per quanto ben intenzionati, iniziano a mostrare i loro limiti.",
    ],
  },
  {
    title: "Il vero costo nascosto non è l'abbonamento",
    paragraphs: [
      <>
        Se hai scelto — o stai valutando — una piattaforma come Aruba SuperSite, probabilmente l'hai fatto per risparmiare. Sulla carta è una logica corretta. Nella pratica, però, succede spesso il contrario: tra scegliere il template giusto, personalizzare ogni pagina, caricare le immagini, scrivere i testi, sistemare le configurazioni tecniche e provare più volte a migliorare il risultato, possono passare settimane — settimane che dedichi al sito invece che alla tua attività, e che non produrranno un euro di fatturato nel frattempo. Per un'azienda, il tempo è quasi sempre la risorsa più costosa che hai, molto più del prezzo dell'abbonamento annuale che stai cercando di evitare, come abbiamo approfondito{" "}
        <Link to="/blog/creare-sito-web-da-soli-conviene" className={linkClass}>
          nella guida dedicata al fai-da-te
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Il rischio di avere un sito uguale a tanti altri",
    paragraphs: [
      "Uno dei punti di forza di queste piattaforme è avere modelli grafici già pronti da compilare. Ma è proprio questo vantaggio a trasformarsi, per te, in un limite concreto: i siti realizzati con template standard finiscono per assomigliarsi tutti — stessa struttura, stesso layout, stessa organizzazione dei contenuti. Il risultato è che chi visita il tuo sito fa fatica a percepire una vera differenza tra te e chi fa il tuo stesso lavoro nella tua zona. E se il tuo sito non comunica nulla di unico su di te, diventa molto più difficile convincere qualcuno a scegliere proprio te invece che il primo risultato su Google.",
    ],
  },
  {
    title: "Essere online non significa essere visibili su Google",
    paragraphs: [
      <>
        Uno degli errori più comuni — capita a chi usa Aruba SuperSite come a chi usa qualunque altro strumento fai-da-te — è pensare che basti pubblicare un sito per comparire su Google. Non funziona così: Google deve capire perfettamente cosa fai, dove lavori, quali problemi risolvi e perché dovrebbe mostrare proprio te rispetto a chi fa il tuo stesso mestiere. Aruba SuperSite offre strumenti SEO di base, ma gli strumenti da soli non bastano se manca una strategia dietro: la struttura dei contenuti, le parole chiave giuste per la tua zona, l'esperienza complessiva di chi visita il sito —{" "}
        <Link to="/blog/perche-il-tuo-sito-non-si-trova-su-google" className={linkClass}>
          abbiamo dedicato una guida intera al perché un sito non compare su Google
        </Link>
        . In altre parole, avere un martello non significa saper costruire una casa — e se ti serve visibilità subito, mentre lavori sulla parte organica, vale la pena valutare anche{" "}
        <Link to="/pubblicita-google-ads" className={linkClass}>
          una campagna pubblicitaria gestita da chi conosce il tuo settore
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Quando il sito non genera contatti",
    paragraphs: [
      "Questo è probabilmente il problema più sottovalutato di tutti. Il tuo sito può essere bello, può essere online, può funzionare correttamente dal punto di vista tecnico — e non portarti comunque nemmeno un cliente. Perché un sito che funziona davvero non si limita a mostrare informazioni: deve guidare chi lo visita, costruire fiducia, rispondere alle domande che una persona si fa prima di comprare, e rendere naturale il passo successivo, cioè contattarti. Senza questi elementi, quello che hai in mano è una brochure digitale ben fatta — ma che quasi nessuno legge fino in fondo, e che ancora meno persone useranno per contattarti.",
    ],
  },
  {
    title: "Aruba SuperSite è una cattiva soluzione?",
    paragraphs: [
      <>
        No, e sarebbe disonesto dire il contrario. Per alcune situazioni specifiche può essere una scelta più che valida: se vuoi pubblicare in fretta una presenza online essenziale, o se stai sperimentando un progetto personale senza pretese commerciali, ti risponde bene. Il problema nasce quando pretendi che uno strumento pensato per la semplicità faccia il lavoro di una strategia professionale — sono due cose completamente diverse, un po' come succede{" "}
        <Link to="/blog/siti-web-piattaforme-preventivi-online-conviene" className={linkClass}>
          con le piattaforme di preventivi online
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Prima di spendere soldi, spendi qualche minuto per informarti",
    paragraphs: [
      <>
        Molte persone investono tempo e denaro in piattaforme fai-da-te senza aver prima valutato con chi hanno davvero a che fare in termini di esigenze: un professionista, un negozio locale e un'azienda strutturata hanno bisogni completamente diversi, e spesso scoprono i limiti della scelta fatta solo dopo settimane di lavoro già investite. Per questo la domanda giusta da farti non è «quale piattaforma devo usare», ma «qual è il modo più efficace per ottenere risultati online per la mia attività specifica» — e la risposta passa spesso anche da{" "}
        <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className={linkClass}>
          capire quanto costa davvero un sito fatto bene
        </Link>
        , che probabilmente è meno distante da quello che pensi di quanto sembri all'inizio.
      </>,
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "Aruba SuperSite può aiutarti a pubblicare un sito. Ma pubblicare un sito e ottenere risultati sono due obiettivi molto diversi.",
      "Prima di investire settimane nel tentativo di costruire tutto da solo, può essere utile confrontarsi con chi realizza siti web ogni giorno e conosce le strategie che funzionano davvero.",
      "Una semplice consulenza può evitarti errori, perdite di tempo e costi che spesso emergono solo quando il progetto è già stato avviato.",
      "Se stai valutando la creazione del tuo sito web a Padova o in tutta Italia, contattaci prima di prendere una decisione: ti aiuteremo a capire quale soluzione ha davvero senso per la tua attività, senza impegno e senza tecnicismi inutili.",
    ],
  },
];

type ExampleImage = { src: string; alt: string; caption: string };

const examples: ExampleImage[] = [
  {
    src: exampleFavesrl,
    alt: "Esempio di sito web aziendale realizzato con una piattaforma fai-da-te — settore metalmeccanico",
    caption: "Esempio reale: home page di un'azienda metalmeccanica realizzata con una piattaforma fai-da-te.",
  },
  {
    src: exampleImport,
    alt: "Esempio di sito web realizzato con piattaforma fai-da-te — settore irrigazione",
    caption: "Esempio reale: home page di un'attività del settore irrigazione realizzata con una piattaforma fai-da-te.",
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Un sito fatto con Aruba SuperSite viene indicizzato da Google?",
    answer:
      "Sì, tecnicamente può essere indicizzato senza problemi particolari. Il vero limite non è tecnico ma strategico: senza un lavoro reale sulle parole chiave della tua zona e sui contenuti specifici della tua attività, il sito resta online ma difficilmente compare tra i primi risultati.",
  },
  {
    question: "Quanto costa un sito con Aruba SuperSite rispetto a uno fatto da un'agenzia?",
    answer:
      "Aruba SuperSite ha piani che partono da pochi euro al mese, pagati però nel tempo senza scadenza. Un sito professionale con 4 Web Lab parte da 990€ una tantum: nel medio periodo spesso costa meno di un abbonamento continuativo, e il sito resta di tua proprietà.",
  },
  {
    question: "Posso passare da Aruba SuperSite a un sito professionale in un secondo momento?",
    answer:
      "Sì, è un percorso molto comune. Molte attività iniziano con una piattaforma fai-da-te per testare un'idea o partire in fretta, e passano a una soluzione professionale quando il bisogno diventa generare clienti in modo costante.",
  },
  {
    question: "Chi può aiutarmi a creare un sito se non ho tempo o competenze per farlo da solo?",
    answer:
      "Un'agenzia specializzata come 4 Web Lab si occupa dell'intero processo al posto tuo: strategia, testi, struttura tecnica e SEO, lasciandoti il tempo di occuparti della tua attività invece che del sito.",
  },
];

const BlogArubaSupersiteArticle = () => {
  const pageTitle = "Aruba SuperSite conviene? Limiti e cosa sapere prima";
  const pageDescription =
    "Aruba SuperSite promette un sito in pochi minuti. Prima di sceglierlo per la tua attività, scopri cosa rischi davvero e quando ti conviene un'alternativa.";
  const pageUrl = "https://4weblab.it/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere";
  const pageImage = `https://4weblab.it${blogArubaHero}`;
  const articleData = getArticleBySlug("aruba-supersite-conviene-davvero-limiti-e-cosa-sapere");
  const datePublished = articleData?.datePublished ?? "2026-06-09";
  const dateModified = articleData?.dateModified ?? "2026-06-09";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline =
    "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, closeLightbox]);

  const active = lightboxIndex !== null ? examples[lightboxIndex] : null;

  return (
    <>
      <Helmet>
        <title>Aruba SuperSite Conviene? Limiti e Alternative 2026</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Aruba SuperSite Conviene? Limiti e Alternative 2026" />
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
        <meta name="twitter:title" content="Aruba SuperSite Conviene? Limiti e Alternative 2026" />
        <meta name="twitter:description" content={pageDescription} />
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
                author: { "@type": "Person", name: "Carlo Fullin", url: "https://4weblab.it/" },
                publisher: { "@id": "https://4weblab.it/#business" },
                mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
                url: pageUrl,
                datePublished,
                dateModified,
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        <section className="page-hero">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-primary-foreground/10 blur-[110px]" />
          <div className="container-section relative z-10">
            <AnimatedSection className="mx-auto max-w-4xl text-center">
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  { label: "Blog", to: "/blog" },
                  { label: "Aruba SuperSite: conviene davvero?" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere prima di creare il tuo sito
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
                    <p key={index} className={index === 3 ? "font-semibold text-foreground" : "text-foreground/90"}>
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

              {/* Esempi di siti fai-da-te */}
              <AnimatedSection delay={sections.length * 0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Esempi di siti realizzati con piattaforme fai-da-te</h2>
                  <p className="mt-6 text-base leading-8 text-foreground/90 md:text-lg">
                    Per rendere il discorso più concreto, ecco due esempi reali di siti web realizzati con piattaforme fai-da-te.
                    Clicca su un'immagine per ingrandirla a schermo intero.
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {examples.map((ex, i) => (
                      <button
                        key={ex.src}
                        type="button"
                        onClick={() => setLightboxIndex(i)}
                        className="group relative overflow-hidden rounded-2xl border border-border/60 bg-muted text-left shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`Ingrandisci: ${ex.caption}`}
                      >
                        <img
                          src={ex.src}
                          alt={ex.alt}
                          width={800}
                          height={600}
                          loading="lazy"
                          className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
                          <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
                          Ingrandisci
                        </span>
                        <span className="block px-4 py-3 text-xs text-muted-foreground md:text-sm">
                          {ex.caption}
                        </span>
                      </button>
                    ))}
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
                <h2 className="heading-2">Domande frequenti su Aruba SuperSite</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-aruba-supersite-${index}`}
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

        <RelatedArticles currentSlug="aruba-supersite-conviene-davvero-limiti-e-cosa-sapere" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Stai valutando Aruba SuperSite o un'alternativa professionale?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci cosa fai e ti aiutiamo a capire qual è la soluzione più efficace per la tua attività, senza tecnicismi e senza impegno.
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

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm md:p-8"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            autoFocus
            aria-label="Chiudi immagine"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent md:right-6 md:top-6 md:h-12 md:w-12"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure
            className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="max-w-2xl text-center text-sm text-foreground/80 md:text-base">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
};

export default BlogArubaSupersiteArticle;