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
import blogWebsiteCost from "@/assets/blog-website-cost.webp";

const introParagraphs = [
  "«Quanto costa un sito web?» è probabilmente la domanda che ti sei fatto per primo, prima ancora di iniziare a valutare chi farlo fare. Ed è comprensibile: online trovi risposte che vanno da poche centinaia di euro a diverse migliaia, senza che nessuno ti spieghi davvero perché la forbice sia così larga. La risposta breve — «dipende» — è vera ma inutile. Quella reale è più interessante, e soprattutto più utile per te: il prezzo di un sito cambia in base a chi sei, cosa vendi e dove operi. Un sito per un negozio a Padova non ha lo stesso bisogno di un ambulatorio medico o di uno studio di consulenza, e nemmeno lo stesso budget sensato. In questa guida trovi i prezzi reali che applichiamo, cosa li determina, e — soprattutto — quanto ha senso spendere per la tua attività specifica, non per un'attività generica da manuale.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  closing?: ReactNode[];
  subSections?: { title: string; to?: string; price: string; paragraphs: string[] }[];
};

const sections: Section[] = [
  {
    title: "Da cosa dipende il costo di un sito web",
    paragraphs: [
      "Il prezzo che ti verrà proposto per il tuo sito dipende sostanzialmente da quattro fattori, e conoscerli ti aiuta a distinguere subito un preventivo onesto da uno gonfiato — o, al contrario, da uno troppo basso per essere reale.",
      "Il primo è la struttura: un sito con poche pagine essenziali costa ovviamente meno di un progetto più articolato, con più sezioni, contenuti e funzionalità. Il secondo è il livello di personalizzazione — un template standard, magari generato automaticamente, costa meno di un sito progettato su misura per la tua attività specifica, perché richiede meno lavoro reale dietro. Il terzo fattore è il contenuto: testi scritti pensando a te e ai tuoi clienti, immagini curate, una struttura pensata per chi ti legge, richiedono tempo e competenza, e quel tempo si paga. Il quarto, il più sottovalutato, è la strategia: un sito pensato solo per «esserci» online costa meno di un sito progettato per portarti contatti e clienti veri — e non è un caso che i due valgano prezzi molto diversi.",
    ],
  },
  {
    title: "Quanto costa un sito web nel 2026 in Italia",
    paragraphs: [
      "Nel mercato italiano oggi trovi di tutto: si va dalle 200-400€ di soluzioni fai-da-te o piattaforme automatiche, ai 500-1.500€ di un freelance o una piccola realtà, fino a oltre 1.500€ per un progetto più strutturato seguito da un'agenzia. Il problema non è la forbice in sé, ma che spesso chi acquista non sa cosa sta davvero comprando — e scopre i limiti solo quando il sito è già online e non porta risultati.",
    ],
  },
  {
    title: "I nostri prezzi: quanto costa un sito web in base alla tua attività",
    paragraphs: [
      "Per rendere le cose più chiare, è utile distinguere in base al tipo di attività.",
    ],
    subSections: [
      {
        title: "Sito web per negozi",
        to: "/siti-web-per-negozi",
        price: "490€",
        paragraphs: [
          "Se hai un negozio — di quartiere o specializzato — il tuo sito ha un obiettivo preciso: far capire in un colpo d'occhio cosa vendi, dove sei e come raggiungerti. Non ti serve una struttura complessa: ti serve una vetrina digitale chiara, veloce da consultare da telefono, che risponda alle domande più immediate di chi ti sta cercando nella tua zona.",
        ],
      },
      {
        title: "Sito web per professionisti",
        to: "/siti-web-per-professionisti",
        price: "990€",
        paragraphs: [
          "Se lavori come consulente, libero professionista, osteopata o in una qualunque attività dove il cliente sceglie te prima ancora del servizio, il sito deve fare un lavoro diverso: trasmettere competenza e fiducia fin dal primo secondo. La struttura è pensata per valorizzare la tua figura professionale e rendere naturale il passo successivo — contattarti.",
        ],
      },
      {
        title: "Sito web aziendale",
        to: "/siti-web-aziendali",
        price: "1890€",
        paragraphs: [
          "Se la tua azienda è già strutturata, con più servizi o reparti da presentare, il sito diventa uno strumento più completo: deve raccontare chi sei, cosa fai, posizionarti rispetto alla concorrenza e generare contatti in modo continuativo. Il costo riflette la complessità reale del progetto, non una tariffa arbitraria.",
        ],
      },
    ],
  },
  {
    title: "Perché alcuni siti costano molto di più",
    paragraphs: [
      "È normale imbattersi in preventivi molto più alti di queste cifre, e non è necessariamente un campanello d'allarme. Spesso il costo sale perché entrano in gioco sviluppo completamente su misura, funzionalità avanzate, integrazioni particolari con altri sistemi, o un team più ampio coinvolto nel progetto. In alcuni casi questo extra è pienamente giustificato dalla complessità reale di ciò che serve. In altri, però, si finisce per pagare più del necessario rispetto ai bisogni concreti dell'attività — motivo per cui vale sempre la pena farsi spiegare, voce per voce, cosa giustifica la differenza di prezzo.",
    ],
  },
  {
    title: "Quanto ha senso spendere davvero",
    paragraphs: [
      "La domanda giusta, a questo punto, non è più «quanto costa», ma quanto ha senso investire per la tua attività specifica. Se il sito ti serve solo come presenza base — una carta d'identità online — non ha senso spendere cifre elevate. Se invece deve portarti clienti in modo attivo, allora diventa un investimento vero e proprio, e va progettato con una logica diversa. L'obiettivo, in entrambi i casi, resta lo stesso: ottenere un ritorno, non semplicemente avere un sito online che esiste e basta.",
    ],
  },
  {
    title: "Il rischio dei prezzi troppo bassi",
    closing: [
      <>
        Un prezzo molto basso può sembrare vantaggioso sulla carta, ma spesso nasconde limiti che si
        pagano più avanti: siti generici e poco curati, nessuna strategia dietro le scelte fatte,
        contenuti deboli che non convincono nessuno, e di conseguenza scarsa capacità di generare
        contatti reali. Un sito economico che non porta risultati è, di fatto, un costo inutile — lo
        stesso rischio che si corre con i{" "}
        <Link to="/blog/siti-web-creati-con-intelligenza-artificiale" className={linkClass}>
          siti generati con intelligenza artificiale
        </Link>
        : sembrano un affare, ma spesso restano una vetrina vuota. Quando il budget invece c'è, ha
        più senso destinarlo a un sito ben fatto e, se serve accelerare i risultati, a{" "}
        <Link to="/pubblicita-google-ads" className={linkClass}>
          campagne Google ADS gestite con criterio
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Un'ultima cosa, se operi a Padova",
    closing: [
      <>
        Un'ultima considerazione, se operi a Padova o nei comuni limitrofi: il prezzo giusto per te
        dipende anche da quanta concorrenza trovi già online nella tua zona. Se il tuo settore è già
        presidiato da chi ha un sito ben posizionato, investire nel minimo indispensabile rischia di
        lasciarti comunque invisibile. Puoi farti un'idea più precisa guardando la nostra pagina
        dedicata a{" "}
        <Link to="/realizzazione-siti-web-padova" className={linkClass}>
          chi realizza siti web a Padova
        </Link>{" "}
        o consultando le{" "}
        <Link to="/zone-servite" className={linkClass}>
          zone in cui operiamo
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Conclusione",
    closing: [
      <>
        Nel 2026 creare un sito web è più accessibile che mai, ma questo non significa che tutte le
        soluzioni si equivalgano. Il prezzo giusto è quello che ti permette di avere un sito
        credibile, chiaro e realmente utile per la tua attività — senza spendere più del necessario,
        ma senza nemmeno scendere a compromessi che, col tempo, ti fanno perdere opportunità. Sono
        proprio quei compromessi, spesso, a trasformare un sito nuovo in uno di quei{" "}
        <Link
          to="/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026"
          className={linkClass}
        >
          siti ormai obsoleti che fanno perdere clienti
        </Link>
        .
      </>,
    ],
  },
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Quanto costa un sito web per un negozio a Padova?",
    answer:
      "Un sito per negozio parte da 490€ una tantum. Il prezzo può salire leggermente se nella tua zona la concorrenza online è già forte e serve un lavoro più mirato sul posizionamento locale, ma per la maggior parte delle attività di quartiere questa fascia copre già tutto il necessario.",
  },
  {
    question: "Quanto costa un sito per un professionista, ad esempio un consulente o un osteopata?",
    answer:
      "Un sito per professionisti parte da 990€ una tantum. Rispetto a un sito per negozio, richiede più lavoro sulla struttura pensata per trasmettere fiducia e competenza, elementi decisivi quando il cliente sceglie te prima ancora del servizio.",
  },
  {
    question: "Perché un sito economico può costare di più nel tempo?",
    answer:
      "Perché un sito che non genera contatti è un costo, non un investimento: continui a pagarlo (in hosting, dominio, tempo) senza ottenere nulla in cambio. Un sito ben progettato, anche se costa di più all'inizio, si ripaga con i clienti che porta.",
  },
  {
    question: "Conviene chiedere un preventivo prima di decidere?",
    answer:
      "Sì, sempre. Un preventivo chiaro ti permette di capire esattamente cosa stai pagando — struttura, contenuti, strategia — prima di scegliere, evitando sia di spendere troppo sia di sottovalutare cosa ti serve davvero.",
  },
];

const BlogWebsiteCostArticle = () => {
  const pageDescription =
    "Quanto spenderai davvero per il tuo sito nel 2026 dipende da cosa deve fare per la tua attività. Prezzi reali, senza sorprese: da 490€ a soluzioni su misura.";
  const pageUrl = "https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026";
  const pageImage = `https://4weblab.it${blogWebsiteCost}`;
  const articleData = getArticleBySlug("quanto-costa-un-sito-web-nel-2026");
  const datePublished = articleData?.datePublished ?? "2026-03-04";
  const dateModified = articleData?.dateModified ?? "2026-03-04";
  const articleSection = articleData?.category ?? "Guide & Costi";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 620);
  const headline = "Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi";

  return (
    <>
      <Helmet>
        <title>Quanto Costa un Sito Web nel 2026? Listino Prezzi Italia</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Quanto Costa un Sito Web nel 2026? Listino Prezzi Italia" />
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
        <meta name="twitter:title" content="Quanto Costa un Sito Web nel 2026? Listino Prezzi Italia" />
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
                  { label: "Quanto costa un sito web nel 2026" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">
                Quanto costa un sito web nel 2026? Guida reale per aziende, professionisti e negozi
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
                <div className="space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
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
                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className={
                            typeof paragraph === "string" && paragraph.endsWith("?")
                              ? "font-semibold text-foreground"
                              : undefined
                          }
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets ? (
                      <ul className="mt-6 space-y-3 border-l-2 border-accent/25 pl-5 text-base leading-8 text-foreground/90 md:text-lg">
                        {section.bullets.map((item) => (
                          <li key={item} className="list-disc marker:text-accent">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.closing ? (
                      <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                        {section.closing.map((paragraph, cIndex) => (
                          <p key={cIndex}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}

                    {section.subSections ? (
                      <div className="mt-8 space-y-6 border-t border-border/50 pt-8">
                        {section.subSections.map((subSection) => (
                          <div key={subSection.title} className="rounded-2xl bg-muted/35 p-5 md:p-6">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground">
                                  {subSection.to ? (
                                    <Link to={subSection.to} className={linkClass}>
                                      {subSection.title}
                                    </Link>
                                  ) : (
                                    subSection.title
                                  )}
                                </h3>
                                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-accent">
                                  Prezzo a partire da
                                </p>
                                <p className="mt-1 text-3xl font-semibold text-foreground">{subSection.price}</p>
                              </div>
                            </div>
                            <div className="mt-4 space-y-4 text-base leading-8 text-foreground/85 md:text-lg">
                              {subSection.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
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
                <h2 className="heading-2">Domande frequenti sul costo di un sito web</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-website-cost-${index}`}
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

        <RelatedArticles currentSlug="quanto-costa-un-sito-web-nel-2026" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Vuoi capire quanto costa davvero il sito giusto per te?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci la tua attività e ti facciamo una valutazione concreta, senza impegno.
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

export default BlogWebsiteCostArticle;
