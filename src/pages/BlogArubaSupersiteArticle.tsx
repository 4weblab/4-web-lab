import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, X, ZoomIn } from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SummerClosureNotice from "@/components/SummerClosureNotice";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogArubaHero from "@/assets/blog-aruba-supersite.webp";
import exampleFavesrl from "@/assets/blog-aruba-example-favesrl.webp";
import exampleImport from "@/assets/blog-aruba-example-importirrigation.webp";

const linkClass = "text-accent font-medium hover:underline";

const introParagraphs: ReactNode[] = [
  "Hai deciso che è arrivato il momento di creare un sito web per la tua attività.",
  "Fai una ricerca su Google, trovi Aruba SuperSite e la promessa sembra irresistibile: scegli un modello, inserisci i contenuti e in poco tempo il tuo sito è online.",
  "Semplice. Veloce. Economico.",
  "Ma la domanda giusta non è quanto sia facile creare un sito.",
  "La domanda è: quel sito riuscirà davvero a portarti clienti?",
  "Perché tra avere un sito online e avere un sito che genera contatti c'è una differenza enorme.",
];

type Section = { title: string; paragraphs: ReactNode[] };

const sections: Section[] = [
  {
    title: "Creare un sito è facile. Farlo funzionare è un'altra storia",
    paragraphs: [
      "Negli ultimi anni gli strumenti per creare siti web sono diventati sempre più semplici.",
      "Anche Aruba SuperSite permette di realizzare pagine web senza conoscere codice o programmazione.",
      "Questo però risolve solo una parte del problema.",
      "Un sito web non è un documento da pubblicare online. È uno strumento di marketing che deve convincere una persona a compiere un'azione: chiamarti, richiedere un preventivo, prenotare un appuntamento o acquistare un prodotto.",
      "Ed è proprio qui che molti progetti fai-da-te iniziano a mostrare i propri limiti.",
    ],
  },
  {
    title: "Il vero costo nascosto non è l'abbonamento",
    paragraphs: [
      "Molti imprenditori scelgono una piattaforma fai-da-te come Aruba SuperSite per risparmiare.",
      "In teoria sembra una buona idea. In pratica, spesso accade il contrario.",
      "Tra scelta del template, personalizzazione delle pagine, caricamento delle immagini, scrittura dei testi, configurazioni tecniche e continui tentativi di miglioramento, possono passare settimane.",
      "Tempo che potresti dedicare alla tua attività. Tempo che non produce fatturato. Tempo che difficilmente recupererai.",
      <>
        Quando si parla di un'azienda, il tempo è quasi sempre la risorsa più costosa — e spesso pesa più del prezzo annuale dell'abbonamento. Ne abbiamo parlato anche{" "}
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
      "Uno dei vantaggi delle piattaforme preconfezionate è la presenza di modelli grafici già pronti.",
      "Ma proprio questo vantaggio può trasformarsi in un limite.",
      "Molti siti realizzati con template standard finiscono per assomigliarsi: stesse strutture, stessi layout, stessa organizzazione delle informazioni.",
      "Il risultato è che il visitatore fatica a percepire una vera differenza tra te e i tuoi concorrenti.",
      "E se il tuo sito non comunica qualcosa di unico, diventa molto difficile convincere un potenziale cliente a scegliere proprio te.",
    ],
  },
  {
    title: "Essere online non significa essere visibili su Google",
    paragraphs: [
      "Uno degli errori più comuni è pensare che basti pubblicare un sito per comparire su Google. Purtroppo non funziona così.",
      "Google deve comprendere perfettamente cosa fai, dove lavori, quali problemi risolvi e perché dovrebbe mostrarti rispetto ai concorrenti.",
      <>
        Aruba SuperSite e altre piattaforme offrono strumenti SEO di base, ma gli strumenti da soli non bastano. La differenza la fanno la strategia, la struttura dei contenuti, le parole chiave utilizzate e l'esperienza complessiva del sito. Se vuoi approfondire,{" "}
        <Link to="/blog/perche-il-tuo-sito-non-si-trova-su-google" className={linkClass}>
          abbiamo dedicato una guida intera al perché un sito non compare su Google
        </Link>
        .
      </>,
      <>
        In altre parole: avere un martello non significa saper costruire una casa. E se ti serve visibilità subito, valuta anche{" "}
        <Link to="/pubblicita-google-ads" className={linkClass}>
          pubblicità su Google ADS gestita da chi conosce il tuo settore
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Quando il sito non genera contatti",
    paragraphs: [
      "Questo è probabilmente il problema più sottovalutato.",
      "Un sito può essere bello, può essere online, può perfino funzionare correttamente. Eppure non portare nemmeno un cliente.",
      "Perché un sito efficace non si limita a mostrare informazioni: deve guidare il visitatore, costruire fiducia, rispondere alle domande che una persona si pone prima di acquistare e rendere semplice il contatto.",
      "Senza questi elementi, il rischio è di avere una semplice brochure digitale che nessuno legge davvero.",
    ],
  },
  {
    title: "Aruba SuperSite è una cattiva soluzione?",
    paragraphs: [
      "No.",
      "Per alcune situazioni può essere una soluzione più che valida. Ad esempio per chi vuole pubblicare rapidamente una presenza online essenziale o per chi desidera sperimentare un progetto personale.",
      <>
        Il problema nasce quando si pretende che uno strumento pensato per la semplicità svolga il lavoro di una strategia professionale. Sono due cose completamente diverse — un po' come succede{" "}
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
      "Molte persone investono tempo e denaro in piattaforme fai-da-te senza aver prima valutato tutte le alternative. E spesso scoprono i limiti della scelta solo dopo settimane di lavoro.",
      "La realtà è che non tutte le attività hanno bisogno della stessa soluzione: un professionista, un negozio locale e un'azienda strutturata hanno esigenze completamente diverse.",
      <>
        Per questo la domanda da porsi non è "Quale piattaforma devo usare?" ma piuttosto: "Qual è il modo più efficace per ottenere risultati online?". E in molti casi la risposta passa anche da{" "}
        <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className={linkClass}>
          capire quanto costa davvero un sito web fatto bene
        </Link>
        .
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

const BlogArubaSupersiteArticle = () => {
  const pageTitle = "Aruba SuperSite conviene? Limiti e cosa sapere prima";
  const pageDescription =
    "Aruba SuperSite è davvero la soluzione giusta per il tuo sito? Limiti, tempi nascosti e cosa valutare prima di scegliere una piattaforma fai-da-te.";
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
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
            author: { "@type": "Person", name: "Carlo Fullin", url: "https://4weblab.it/" },
            publisher: { "@id": "https://4weblab.it/#business" },
            mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            url: pageUrl,
            datePublished,
            dateModified,
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

        <SummerClosureNotice />

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
                  Richiedi una valutazione gratuita
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