import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogAiWebsite from "@/assets/blog-ai-website.jpg";

const introParagraphs = [
  "Negli ultimi anni, l’intelligenza artificiale è entrata in modo deciso anche nel mondo della creazione di siti web. Sempre più piattaforme promettono di generare un sito completo in pochi minuti, partendo da poche informazioni: nome dell’attività, settore, qualche preferenza grafica.",
  "Per molte aziende, soprattutto piccole realtà o professionisti, la proposta è estremamente attraente: meno costi, meno tempi, meno complicazioni.",
  "Ma la domanda vera è un’altra:",
  "Un sito creato con l’IA può davvero sostituire un lavoro professionale?",
  "La risposta, come spesso accade, non è né un sì né un no netto.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs: ReactNode[];
  subSections?: { title: string; paragraphs: string[] }[];
};

const sections: Section[] = [
  {
    title: "Perché i siti creati con IA stanno diventando così popolari",
    paragraphs: [
      "Il successo di queste soluzioni non è casuale. Ci sono motivi molto concreti dietro questa crescita.",
      "Il primo è la velocità. Oggi è possibile ottenere una struttura di sito completa in pochi minuti. Questo riduce drasticamente i tempi rispetto a uno sviluppo tradizionale.",
      "Il secondo è il costo iniziale. Molti strumenti basati su intelligenza artificiale offrono piani economici o addirittura gratuiti, rendendo l’accesso molto più semplice rispetto a un progetto su misura.",
      "Infine, la facilità d’uso. Non servono competenze tecniche, non serve conoscere codice o design: l’utente viene guidato passo dopo passo.",
      "Per chi parte da zero, è una combinazione difficile da ignorare.",
    ],
  },
  {
    title: "I vantaggi reali: quando l’IA può essere una buona scelta",
    paragraphs: [
      "Sarebbe un errore liquidare questi strumenti come inutili. In realtà, in alcuni contesti sono estremamente efficaci.",
      "Ad esempio, sono perfetti per creare una prima versione del sito. Un prototipo veloce permette di “mettere online qualcosa” e iniziare a esistere digitalmente senza lunghi tempi di attesa.",
      <>
        Sono anche una soluzione valida per attività appena nate, con budget molto limitato. In
        questi casi, avere un sito semplice è comunque meglio che non averne uno — anche se vale
        la pena confrontarli con{" "}
        <Link to="/blog/quanto-costa-un-sito-web-nel-2026" className={linkClass}>
          i prezzi reali di un sito professionale nel 2026
        </Link>
        , che spesso non sono così distanti come si pensa.
      </>,
      "Un altro utilizzo interessante è il test di nuove idee. Se vuoi validare un servizio o una nicchia, l’IA ti permette di farlo rapidamente, senza investimenti importanti.",
    ],
  },
  {
    title: "I limiti dei siti generati con intelligenza artificiale",
    paragraphs: ["Il primo limite evidente è la struttura."],
    subSections: [
      {
        title: "Struttura generica",
        paragraphs: [
          "I siti generati con IA tendono a essere molto simili tra loro: layout standard, sezioni ripetitive, poca personalità. Questo rende difficile distinguersi, soprattutto in mercati competitivi.",
        ],
      },
      {
        title: "Contenuti poco credibili",
        paragraphs: [
          "I testi generati automaticamente spesso risultano generici, poco specifici e poco credibili. Non parlano davvero dell’azienda, ma di una versione “media” di quel tipo di attività.",
        ],
      },
      {
        title: "SEO debole",
        paragraphs: [
          "Anche se alcune piattaforme promettono ottimizzazione automatica, nella pratica manca una strategia reale: nessuna analisi delle ricerche locali, nessun lavoro sull’intento dell’utente, nessuna struttura pensata per posizionarsi.",
        ],
      },
      {
        title: "Mancanza di strategia",
        paragraphs: [
          "Un sito efficace non è solo una somma di sezioni, ma un percorso progettato per guidare l’utente verso un’azione. L’intelligenza artificiale, da sola, non è in grado di costruire questo tipo di logica.",
        ],
      },
    ],
  },
  {
    title: "Quando ha senso usare un sito creato con IA",
    paragraphs: [
      "Ha senso se sei all’inizio e hai bisogno di partire velocemente.",
      "Ha senso se il budget è molto ridotto e non puoi investire subito in una soluzione professionale.",
      "Ha senso se vuoi testare un’idea senza rischiare troppo.",
    ],
  },
  {
    title: "Quando invece diventa un limite",
    paragraphs: [
      "Se vuoi trovare clienti online, un sito generato automaticamente difficilmente basta.",
      <>
        Se hai già un’attività avviata, un sito generico rischia di danneggiare la percezione del
        tuo brand. È anche uno dei motivi per cui{" "}
        <Link to="/blog/perche-il-tuo-sito-non-si-trova-su-google" className={linkClass}>
          molti siti non riescono a comparire su Google
        </Link>
        : contenuti standard, struttura uguale a mille altri.
      </>,
      "Se operi in un mercato competitivo, avere un sito simile a molti altri è un problema concreto.",
    ],
  },
  {
    title: "L’IA è uno strumento, non una soluzione",
    paragraphs: [
      "L’intelligenza artificiale è uno strumento potente, ma non è una soluzione completa.",
      "Può accelerare, può aiutare, può semplificare. Ma non sostituisce la strategia, la progettazione e la conoscenza del mercato.",
      "I risultati migliori si ottengono quando l’IA viene usata come supporto, non come sostituto.",
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "I siti web creati con intelligenza artificiale rappresentano una grande opportunità, soprattutto per chi deve iniziare.",
      "Ma non sono una scorciatoia universale.",
      "Possono essere un buon punto di partenza, ma difficilmente sono un punto di arrivo per un’azienda che vuole crescere davvero online.",
      "Se l’obiettivo è avere un sito che trasmetta fiducia, rappresenti l’attività in modo credibile e porti contatti concreti, serve qualcosa di più di un generatore automatico.",
    ],
  },
];

const BlogAiWebsiteArticle = () => {
  const pageTitle = "Siti web con intelligenza artificiale: pro e contro per aziende";
  const pageDescription =
    "I siti web creati con IA sono davvero una soluzione? Scopri vantaggi, limiti e quando conviene usarli per la tua attività.";
  const pageUrl = "https://4weblab.it/blog/siti-web-creati-con-intelligenza-artificiale";
  const pageImage = `https://4weblab.it${blogAiWebsite}`;
  const articleData = getArticleBySlug("siti-web-creati-con-intelligenza-artificiale");
  const datePublished = articleData?.datePublished ?? "2026-04-08";
  const dateModified = articleData?.dateModified ?? "2026-04-08";
  const articleSection = articleData?.category ?? "Tecnologia & AI";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline =
    "Siti web creati con intelligenza artificiale: opportunità reale o rischio per le aziende?";

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
                  { label: "Siti web con intelligenza artificiale" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Siti web creati con intelligenza artificiale: opportunità reale o rischio per le aziende?
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
                      className={index === 3 ? "font-semibold text-foreground" : index === 2 ? "text-foreground" : "text-foreground/90"}
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
                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>

                    {section.subSections ? (
                      <div className="mt-8 space-y-6 border-t border-border/50 pt-8">
                        {section.subSections.map((subSection) => (
                          <div key={subSection.title} className="rounded-2xl bg-muted/35 p-5 md:p-6">
                            <h3 className="text-xl font-semibold text-foreground">{subSection.title}</h3>
                            <div className="mt-3 space-y-4 text-base leading-8 text-foreground/85 md:text-lg">
                              {subSection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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

        <RelatedArticles currentSlug="siti-web-creati-con-intelligenza-artificiale" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Vuoi capire qual è la soluzione giusta per la tua attività?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci cosa fai e ti aiutiamo a capire se un sito base può bastare oppure se serve una struttura più efficace per ottenere risultati concreti.
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

export default BlogAiWebsiteArticle;