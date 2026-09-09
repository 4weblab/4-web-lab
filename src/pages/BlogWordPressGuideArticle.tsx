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
import blogWordPressGuide from "@/assets/blog-guida-wordpress.webp";

const introParagraphs = [
  "Hai cercato \"guida wordpress\" perché qualcuno ti ha detto che è la piattaforma più facile per gestire un sito.",
  "O forse un'agenzia te l'ha già consegnato, e ora sei lì a capire come si aggiorna una pagina.",
  "La verità?",
  "WordPress non è difficile da installare. È impegnativo da mantenere.",
  "E nessuno te lo dice prima, perché nel frattempo il progetto è già chiuso e fatturato.",
  "In questa guida vediamo cosa significa davvero gestire un sito WordPress, e quali alternative esistono nel 2026.",
];

const linkClass = "text-accent font-medium hover:underline";

type Section = {
  title: string;
  paragraphs?: ReactNode[];
  bullets?: string[];
  closing?: ReactNode[];
};

const sections: Section[] = [
  {
    title: "Cos'è WordPress e perché te lo consigliano quasi tutti",
    paragraphs: [
      "WordPress è un CMS open source, nato nel 2003, che oggi alimenta oltre il 40% dei siti web nel mondo.",
      "È gratuito, flessibile, con un ecosistema di plugin e temi enorme: per questo agenzie e freelance lo propongono quasi come scelta di default.",
      "Il problema è che \u201Cpiù diffuso\u201D non significa \u201Cpiù facile da gestire\u201D. Sono due cose diverse, spesso confuse apposta.",
    ],
  },
  {
    title: "Perché \u201Cè facile\u201D è vero solo a metà",
    paragraphs: [
      "È vero che pubblicare un articolo su WordPress richiede pochi click.",
      "Ma gestire un sito non è solo scrivere contenuti: significa aggiornare core, temi e ogni plugin installato, monitorare la sicurezza, gestire i backup, capire perché improvvisamente il sito è più lento del solito.",
      "Nessuna di queste attività è \u201Cfacile\u201D per chi non lavora nel digitale ogni giorno. E se le trascuri, il rischio non è estetico: è un sito violato, offline, o penalizzato da Google.",
    ],
  },
  {
    title: "Cosa significa davvero gestire un sito WordPress nel tempo",
    paragraphs: ["Ecco cosa ti aspetta, realisticamente, nei mesi dopo la consegna del sito:"],
    bullets: [
      "Aggiornamenti periodici di WordPress, tema e plugin (spesso decine)",
      "Rischio di conflitti tra plugin che rompono il sito da un giorno all'altro",
      "Backup da configurare e verificare, non automatici di default",
      "Monitoraggio sicurezza costante: WordPress è il CMS più attaccato al mondo, proprio perché il più diffuso",
      "Rallentamenti nel tempo se non ottimizzato regolarmente",
    ],
    closing: [
      "Tutto questo ha un costo: o il tuo tempo, o un canone di manutenzione mensile che nessuno ti aveva menzionato in fase di preventivo.",
    ],
  },
  {
    title: "Quando WordPress ha senso (e quando no)",
    paragraphs: [
      "Non tutto è da buttare: se gestisci tu stesso contenuti ogni giorno, hai bisogno di funzionalità molto specifiche (community, forum, e-commerce complesso) o ti serve un ecosistema di plugin enorme, WordPress può essere la scelta giusta.",
      "Ha meno senso se il tuo obiettivo è un sito vetrina, un sito per professionisti o un sito aziendale che deve solo essere veloce, sicuro e generare contatti \u2014 senza che tu debba diventare, di fatto, l'amministratore di sistema del tuo stesso sito.",
    ],
  },
  {
    title: "Le alternative disponibili nel 2026",
    paragraphs: [
      "Se il tuo obiettivo è avere un sito che lavora per te senza diventare un secondo lavoro, esistono architetture pensate apposta per eliminare la manutenzione continua.",
      "Un sito su architettura statica moderna elimina database e plugin di terze parti alla radice: niente aggiornamenti di sicurezza da gestire, tempi di caricamento quasi istantanei, un solo referente da contattare quando serve una modifica.",
    ],
    closing: [
      <>
        Se hai un negozio o un'attività locale, trovi il pacchetto pensato per te nella pagina{" "}
        <Link to="/siti-web-per-negozi" className={linkClass}>
          siti web per negozi
        </Link>
        . Se sei un libero professionista o gestisci uno studio, la soluzione più adatta è nella pagina{" "}
        <Link to="/siti-web-per-professionisti" className={linkClass}>
          siti web per professionisti
        </Link>
        . Per aziende strutturate con obiettivi di lead generation più complessi, c'è la pagina{" "}
        <Link to="/siti-web-aziendali" className={linkClass}>
          siti web aziendali
        </Link>
        .
      </>,
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "WordPress non è né un mostro né la soluzione perfetta: è uno strumento, con vantaggi e costi di gestione reali.",
      "La domanda giusta non è \u201CWordPress sì o no\u201D, ma: quanto tempo vuoi dedicare a mantenerlo, e chi lo farà quando tu non potrai?",
      "Se la risposta è \u201Cnessuno\u201D, forse la scelta giusta è un'architettura che quella domanda non te la fa nemmeno porre.",
    ],
  },
];

const comparisonRows = [
  {
    aspect: "Velocità di caricamento",
    wp: "Dipende da hosting, tema e plugin installati",
    us: "Ottimizzata nativamente, punteggi vicini al 100/100",
  },
  {
    aspect: "Aggiornamenti di sicurezza",
    wp: "A tuo carico (o di chi paghi per farlo)",
    us: "Nessun aggiornamento di plugin/core da gestire",
  },
  {
    aspect: "Rischio vulnerabilità",
    wp: "Alto, per la diffusione stessa della piattaforma",
    us: "Drasticamente ridotto: niente database né plugin di terze parti da violare",
  },
  {
    aspect: "Modifica contenuti",
    wp: "Editor a blocchi, curva di apprendimento reale",
    us: "Richiesta diretta a chi segue il sito, senza doverla imparare tu",
  },
  {
    aspect: "Costi nel tempo",
    wp: "Hosting + manutenzione + eventuali plugin premium",
    us: "Costo iniziale, senza canoni di manutenzione ricorrenti nascosti",
  },
];

const faqs = [
  {
    question: "WordPress è sicuro?",
    answer:
      "WordPress in sé è sicuro se mantenuto aggiornato correttamente, ma essendo il CMS più diffuso al mondo è anche il più preso di mira dagli attacchi automatizzati. La sicurezza dipende interamente da quanto costantemente vengono aggiornati core, temi e plugin.",
  },
  {
    question: "Quanto costa mantenere un sito WordPress nel tempo?",
    answer:
      "Oltre al costo iniziale di realizzazione, un sito WordPress richiede tipicamente un canone di manutenzione (aggiornamenti, backup, sicurezza) che può variare da qualche decina a oltre 100€ al mese, a seconda della complessità del sito.",
  },
  {
    question: "WordPress è davvero facile da usare per un principiante?",
    answer:
      "Pubblicare un contenuto è semplice, ma la gestione tecnica (aggiornamenti, plugin, sicurezza, ottimizzazione) richiede competenze che un principiante normalmente non ha, ed è qui che emergono la maggior parte delle difficoltà nel tempo.",
  },
  {
    question: "Quali sono le alternative a WordPress per un sito aziendale?",
    answer:
      "Le architetture statiche moderne, come quelle utilizzate da 4 Web Lab, sono pensate per aziende e professionisti che vogliono un sito veloce, sicuro e senza manutenzione continua, senza rinunciare a design personalizzato e SEO.",
  },
  {
    question: "Conviene passare da WordPress a un sito senza CMS tradizionale?",
    answer:
      "Se il sito attuale richiede manutenzione costante, rallenta nel tempo o ha già subito problemi di sicurezza, una migrazione verso un'architettura più moderna può ridurre drasticamente i costi di gestione a lungo termine.",
  },
];

const BlogWordPressGuideArticle = () => {
  const pageTitle = "Guida WordPress: È Davvero Facile da Usare? Pro, Contro, Alternative";
  const pageDescription =
    "WordPress ha fama di essere semplice, ma tra plugin, aggiornamenti e sicurezza la realtà è diversa. Guida completa: cosa aspettarti davvero e le alternative nel 2026.";
  const pageUrl = "https://4weblab.it/blog/guida-wordpress-alternative-2026";
  const pageImage = `https://4weblab.it${blogWordPressGuide}`;
  const articleData = getArticleBySlug("guida-wordpress-alternative-2026");
  const datePublished = articleData?.datePublished ?? "2026-09-09";
  const dateModified = articleData?.dateModified ?? "2026-09-09";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 850);
  const headline = "Guida WordPress 2026: È Davvero Così Facile da Usare?";

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
                  { label: "Guida WordPress 2026" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-balance text-primary-foreground">{headline}</h1>
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
                  {introParagraphs.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={
                        index === 2 || index === 3
                          ? "font-semibold text-foreground"
                          : "text-foreground/90"
                      }
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
              {sections.slice(0, 3).map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.04}>
                  <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                    <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                    <h2 className="heading-3 text-foreground">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
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
                  </article>
                </AnimatedSection>
              ))}

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">
                    WordPress vs un sito su architettura moderna: il confronto pratico
                  </h2>
                  <p className="mt-6 text-base leading-8 text-foreground/90 md:text-lg">
                    Ecco cosa cambia concretamente tra i due approcci:
                  </p>
                  <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead className="bg-accent/8">
                        <tr>
                          <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                            Aspetto
                          </th>
                          <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                            WordPress (CMS tradizionale)
                          </th>
                          <th scope="col" className="px-4 py-3 font-semibold text-foreground">
                            Sito 4 Web Lab (architettura statica)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonRows.map((row) => (
                          <tr key={row.aspect} className="border-t border-border/70">
                            <th scope="row" className="px-4 py-3 font-semibold text-foreground">
                              {row.aspect}
                            </th>
                            <td className="px-4 py-3 text-muted-foreground">{row.wp}</td>
                            <td className="px-4 py-3 text-foreground/90">{row.us}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              </AnimatedSection>

              {sections.slice(3).map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.04}>
                  <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                    <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                    <h2 className="heading-3 text-foreground">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                      {section.paragraphs?.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                    {section.closing ? (
                      <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                        {section.closing.map((paragraph, cIndex) => (
                          <p key={cIndex}>{paragraph}</p>
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
                <h2 className="heading-2">Domande frequenti su WordPress</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-wordpress-${index}`}
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

        <RelatedArticles currentSlug="guida-wordpress-alternative-2026" />

        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Hai già un sito WordPress che ti sta dando pensieri?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci la situazione: ti diciamo onestamente se ha senso ottimizzarlo o se conviene ripartire con un'architettura più semplice da gestire.
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

export default BlogWordPressGuideArticle;
