import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogAiWebsite from "@/assets/blog-ai-website.webp";

const introParagraphs = [
  "Hai visto le pubblicità, probabilmente più di una volta. Rispondi a due domande, l’intelligenza artificiale genera il tuo sito in pochi minuti, e in teoria sei pronto a partire. Zero competenze richieste, zero righe di codice da scrivere, spesso zero euro spesi. Se hai poco tempo, un budget limitato e la sensazione di dover “esistere online” il prima possibile, è difficile non essere tentati: perché pagare di più, aspettare settimane e affidarsi a qualcuno, quando puoi avere tutto subito e gratis?",
  "La domanda però non è se puoi avere un sito in cinque minuti. Puoi. La domanda è un’altra, e conta più di ogni altra cosa: quel sito ti porterà davvero dei clienti, o resterà una vetrina online che nessuno vedrà mai? In questo articolo non troverai uno spot contro l’intelligenza artificiale — troverai un confronto onesto, pensato per farti capire quando questi strumenti sono davvero la scelta giusta per la tua attività, e quando invece rischiano di costarti più di quanto ti fanno risparmiare.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs: ReactNode[];
};

const sections: Section[] = [
  {
    title: "Perché ti conviene provarci (quando ha senso)",
    paragraphs: [
      "Partiamo da un punto fermo: i vantaggi di questi strumenti sono reali, non marketing. Liquidarli come inutili sarebbe disonesto, perché per alcune situazioni risolvono davvero un problema concreto — quello di non avere nulla online.",
      "Il primo vantaggio è la velocità. Piattaforme come Wix, Framer AI o 10Web ti mettono in mano una struttura completa in pochi minuti: pagine, sezioni, immagini, testi di partenza. Quello che con un progetto su misura richiede settimane, qui lo hai prima di finire il caffè.",
      "Il secondo è il rischio economico praticamente nullo. Se devi validare un’idea, testare una nicchia o capire se un servizio interessa a qualcuno, non ha senso investire prima di avere una risposta: qui puoi farlo spendendo zero, o pochi euro al mese, e cambiare direzione senza rimpianti.",
      "Per questo, se la tua attività è appena nata, il budget è davvero zero e l’obiettivo è semplicemente esistere online mentre capisci la strada, un sito generato dall’intelligenza artificiale è una scelta sensata. Meglio un sito semplice che nessun sito.",
    ],
  },
  {
    title: "Cosa rischi davvero (quando la tua attività è già avviata)",
    paragraphs: [
      "Il discorso cambia completamente nel momento in cui la tua attività è già in piedi, ha clienti, una reputazione e dei concorrenti. Qui il sito non serve più a “esserci”: serve a farti scegliere. Ed è esattamente dove questi strumenti mostrano i loro limiti.",
      "Il primo problema è la struttura generica. I siti generati automaticamente si somigliano tutti: stesse sezioni, stessa sequenza, stessa aria. Chi ti visita non lo nota consapevolmente, ma percepisce qualcosa di anonimo — e l’anonimato, quando devi trasmettere competenza, lavora contro di te.",
      "Il secondo sono i testi. L’intelligenza artificiale non conosce la tua attività: scrive di una versione media del tuo settore. Il risultato sono frasi corrette ma vuote, che non raccontano come lavori, cosa ti distingue e perché un cliente dovrebbe fidarsi di te invece del concorrente a due strade di distanza.",
      <>
        Il terzo, e il più costoso, è la visibilità. Essere online non significa essere trovati:
        senza un lavoro reale sulle ricerche locali, sull’intento di chi cerca e sulla struttura
        delle pagine, il sito resta invisibile. Se vuoi capire cosa serve davvero, abbiamo
        spiegato in dettaglio{" "}
        <Link to="/posizionamento-google-e-ai" className={linkClass}>
          come far comparire davvero il tuo sito su Google
        </Link>
        .
      </>,
      "Il quarto è la mancanza di un percorso. Un sito che funziona non è una somma di sezioni: è una strada che porta il visitatore da “chi sono questi” a “li contatto”. Questa logica nasce da scelte strategiche su cosa dire, in quale ordine e con quale invito all’azione — ed è esattamente ciò che un generatore automatico non può progettare per te.",
    ],
  },
  {
    title: "Quanto costa davvero (il confronto che conta)",
    paragraphs: [
      "Il confronto non è tra gratis e 990€: è tra un abbonamento che paghi per sempre e un sito che diventa tuo. Venti o trenta euro al mese sembrano nulla, ma in tre anni superano il costo di un progetto professionale — e alla fine non possiedi nulla, perché se smetti di pagare il sito sparisce.",
      <>
        Il metro giusto è un altro: quanti clienti ti porta. Un sito che non genera contatti è
        costato troppo anche se era gratuito; uno che ti porta due lavori in più all’anno si
        ripaga da solo. Abbiamo messo nero su bianco{" "}
        <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className={linkClass}>
          quanto costa davvero un sito web nel 2026
        </Link>{" "}
        e cosa incide sul prezzo finale.
      </>,
    ],
  },
  {
    title: "Come lavoriamo diversamente",
    paragraphs: [
      <>
        Noi partiamo dalla tua attività, non da un modello: capiamo chi sono i tuoi clienti, cosa
        cercano e cosa li convince, poi costruiamo struttura, testi e percorso attorno a questo.
        Il risultato è un sito veloce, scritto su misura e pensato per essere trovato — come i{" "}
        <Link to="/siti-web-per-professionisti" className={linkClass}>
          siti web per professionisti
        </Link>{" "}
        che realizziamo ogni giorno, a partire da 990€ una tantum, senza canoni obbligatori e con
        il sito che resta di tua proprietà.
      </>,
    ],
  },
];

const faqs: { question: string; answer: string; answerNode?: ReactNode }[] = [
  {
    question: "Un sito fatto con l'intelligenza artificiale viene indicizzato da Google?",
    answer:
      "Sì, tecnicamente Google può indicizzarlo senza problemi. Il vero ostacolo non è l'indicizzazione, ma il posizionamento: senza una strategia SEO reale e contenuti specifici per la tua attività e la tua zona, il sito resta indicizzato ma resta anche invisibile, sepolto nelle pagine che nessuno apre.",
  },
  {
    question: "Quanto costa un sito fatto con l'IA rispetto a uno professionale?",
    answer:
      "Le piattaforme basate su intelligenza artificiale vanno da gratis a circa 20-30€ al mese, pagati però a vita. Un sito professionale con 4 Web Lab parte da 990€ una tantum: nel tempo spesso costa meno di un abbonamento continuativo, e resta di tua proprietà.",
  },
  {
    question: "Posso passare da un sito IA a uno professionale in un secondo momento?",
    answer:
      "Sì, è un percorso molto comune. Molte attività iniziano con un sito generato dall'IA per validare un'idea o partire in fretta, e passano a una soluzione professionale quando il bisogno diventa generare clienti in modo costante e prevedibile.",
  },
  {
    question: "Un sito fatto con l'IA basta per un'attività locale a Padova?",
    answer:
      "Dipende dalla concorrenza nella tua zona specifica. Se operi in un settore con poca competizione online, può bastare per iniziare. Se i tuoi concorrenti hanno già un sito ottimizzato per le ricerche locali, un sito IA generico difficilmente riesce a competere.",
    answerNode: (
      <>
        Dipende dalla concorrenza nella tua zona specifica. Se operi in un settore con poca
        competizione online, può bastare per iniziare. Se i tuoi concorrenti hanno già un sito
        ottimizzato per le ricerche locali, un sito IA generico difficilmente riesce a competere.
        Puoi vedere tutte le{" "}
        <Link to="/zone-servite" className={linkClass}>
          zone in cui operiamo
        </Link>
        .
      </>
    ),
  },
];

const BlogAiWebsiteArticle = () => {
  const pageTitle = "Siti Web con IA: Convengono per la Tua Attività nel 2026?";
  const pageDescription =
    "Un sito fatto dall'IA in 5 minuti sembra la scelta furba. Scopri quando ti fa risparmiare davvero e quando rischia di costarti clienti. Guida 2026.";
  const pageUrl = "https://4weblab.it/blog/siti-web-creati-con-intelligenza-artificiale";
  const pageImage = `https://4weblab.it${blogAiWebsite}`;
  const articleData = getArticleBySlug("siti-web-creati-con-intelligenza-artificiale");
  const datePublished = articleData?.datePublished ?? "2026-04-08";
  const dateModified = articleData?.dateModified ?? "2026-04-08";
  const articleSection = articleData?.category ?? "Tecnologia & AI";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline = "Sito Web Fatto con l'Intelligenza Artificiale: Ti Conviene Davvero?";

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
                  { label: "Siti web con intelligenza artificiale" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Sito Web Fatto con l'Intelligenza Artificiale: Ti Conviene Davvero?
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

        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection className="mb-6 flex items-center gap-4">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti sui siti creati con l'IA</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-ai-website-${index}`}
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

        <RelatedArticles currentSlug="siti-web-creati-con-intelligenza-artificiale" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Non sai se ti basta un sito IA o ti serve qualcosa di più?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci la tua attività: ti diciamo onestamente se un sito semplice può bastare o se ti serve una struttura pensata per portarti clienti veri.
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

export default BlogAiWebsiteArticle;
