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
import blogDiyWebsite from "@/assets/blog-creare-sito-da-soli.webp";

const introParagraphs = [
  "Stai pensando di creare un sito web da solo? Magari hai cercato «come creare un sito web gratis», oppure hai letto ovunque che WordPress è la soluzione più semplice per iniziare. E in effetti, oggi mettere online un sito è più facile che mai. Il problema, però, è un altro: un sito non ti serve per esistere su internet, ti serve per portarti clienti. Ed è proprio qui che il fai-da-te, nella maggior parte dei casi, rischia di trasformarsi in una perdita di tempo — e di opportunità che potevi cogliere.",
];

const faqs: { question: string; answer: string }[] = [
  {
    question: "Conviene creare un sito web da soli con WordPress?",
    answer:
      "Dipende dal tuo obiettivo. Se vuoi solo fare esperienza o testare un'idea, può avere senso. Se invece il sito deve portarti clienti in modo costante, la gestione tecnica e la mancanza di una strategia reale spesso vanificano il risparmio iniziale.",
  },
  {
    question: "Quanto tempo serve per creare un sito web da soli?",
    answer:
      "Anche per un sito semplice, tra scelta della piattaforma, personalizzazione, testi e configurazioni tecniche, si parla facilmente di diverse settimane di lavoro — tempo che nel frattempo non dedichi alla tua attività.",
  },
  {
    question: "Un sito fatto da solo può comunque essere trovato su Google?",
    answer:
      "Tecnicamente sì, ma raramente per le ricerche che contano davvero. Senza una strategia SEO pensata per la tua attività e la tua zona, il sito resta online ma difficilmente compare tra i primi risultati.",
  },
  {
    question: "Chi può costruire un sito web al posto mio se non ho tempo?",
    answer:
      "Un'agenzia come 4 Web Lab gestisce l'intero processo — strategia, testi, struttura tecnica e SEO — lasciandoti libero di occuparti della tua attività invece che del sito.",
  },
];

const BlogDiyWebsiteArticle = () => {
  const slug = "creare-sito-web-da-soli-conviene";
  const pageDescription =
    "Vuoi creare il sito della tua attività da solo con WordPress o un builder visuale? Scopri prima cosa rischi davvero e quanto ti costa in tempo e clienti persi.";
  const pageUrl = `https://4weblab.it/blog/${slug}`;
  const pageImage = `https://4weblab.it${blogDiyWebsite}`;
  const articleData = getArticleBySlug(slug);
  const datePublished = articleData?.datePublished ?? "2026-05-03";
  const dateModified = articleData?.dateModified ?? "2026-05-03";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 720);
  const headline = "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026";

  return (
    <>
      <Helmet>
        <title>Creare un Sito Web da Soli Conviene? Rischi e Costi</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content="Creare un Sito Web da Soli Conviene? Rischi e Costi" />
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
        <meta name="twitter:title" content="Creare un Sito Web da Soli Conviene? Rischi e Costi" />
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
                  { label: "Creare sito web da soli" },
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
                  <h2 className="heading-3 text-foreground">Creare un sito web da soli è davvero così semplice?</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Piattaforme come WordPress,{" "}
                      <Link
                        to="/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere"
                        className="text-accent font-medium hover:underline"
                      >
                        piattaforme preconfezionate come Aruba SuperSite
                      </Link>
                      , builder visuali e{" "}
                      <Link
                        to="/blog/siti-web-creati-con-intelligenza-artificiale"
                        className="text-accent font-medium hover:underline"
                      >
                        strumenti automatici basati sull'intelligenza artificiale
                      </Link>{" "}
                      promettono tutte la stessa cosa: semplicità. E in parte è vero — con pochi click puoi avere un
                      sito online, con un design accettabile e qualche pagina già pronta. Il punto è che questo è solo
                      l'inizio del lavoro, non la fine. Un sito web non è soltanto una grafica da scegliere: è un
                      insieme di elementi che devono funzionare insieme — velocità di caricamento, struttura logica,
                      contenuti scritti bene, chiarezza per chi legge. E senza esperienza specifica, questi aspetti
                      vengono quasi sempre trascurati, anche senza che tu te ne accorga subito.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.04}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il problema nascosto di WordPress e dei siti fai-da-te</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      WordPress è, va detto, uno strumento potente — ed è proprio per questo che non è automatico da
                      usare bene. Senza sapere come configurarlo correttamente, il risultato più comune è un sito
                      lento, appesantito da plugin inutili, difficile da gestire nel tempo e vulnerabile dal punto di
                      vista della sicurezza. Il problema, in questi casi, non è mai lo strumento in sé, ma l'uso che se
                      ne fa: un sito costruito senza criterio può sembrare perfettamente funzionante in superficie,
                      mentre sotto è fragile — e questa fragilità, prima o poi, si paga, spesso nel momento meno
                      opportuno.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Perché un sito fai-da-te spesso non porta clienti</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Qui sta il punto centrale di tutto il discorso. Molte persone riescono a creare un sito. Poche
                      riescono a creare un sito che funziona davvero, cioè che porta risultati concreti. Senza una
                      struttura pensata attorno a chi lo visita, un sito diventa un insieme di informazioni senza una
                      direzione precisa — non a caso è la stessa logica che vale quando ci si chiede{" "}
                      <Link
                        to="/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        se conviene un sito web o i social network
                      </Link>
                      : quello che fa davvero la differenza è la strategia dietro, non lo strumento scelto per
                      costruirlo. Chi entra nel tuo sito lo guarda, e se ne va — non perché il sito sia brutto, ma
                      perché non è stato progettato per guidarlo verso un'azione. E senza un'azione concreta da parte
                      di chi visita, non ci sono risultati per te.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il “buco nero” di Google</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Uno degli errori più comuni, quando si crea un sito da soli, è pensare che basti pubblicarlo per
                      comparire su Google. In realtà, se il sito non è strutturato nel modo giusto, semplicemente non
                      verrà trovato: Google deve capire cosa fai, per chi lavori e perché dovrebbe mostrare proprio il
                      tuo sito a chi cerca i servizi che offri. Se questi elementi non sono chiari — e raramente lo
                      sono in un sito fatto senza una vera strategia SEO — il sito resta invisibile, anche se online da
                      mesi. È un po' come aprire un negozio perfetto in mezzo a un bosco: nessuno passa di lì per caso.
                      In questi casi, una strada più veloce per farti trovare nel frattempo è affiancare al sito una{" "}
                      <Link to="/pubblicita-google-ads" className="text-accent font-medium hover:underline">
                        campagna Google ADS mirata
                      </Link>
                      , gestita con criterio.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.16}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Il falso mito del risparmio</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Creare un sito web da soli sembra, sulla carta, una scelta economica. Ma raramente lo è davvero.
                      Il tempo che spendi a capire come funziona ogni cosa, a risolvere problemi tecnici e a correggere
                      errori ha un costo reale, anche se non compare in nessuna fattura. A questo si aggiungono le
                      correzioni che servono più avanti, i clienti persi nel frattempo e le opportunità mancate mentre
                      il sito non era ancora pronto o non funzionava come doveva. Se vuoi farti un'idea più precisa di
                      cosa incide davvero sul prezzo di un sito fatto bene, abbiamo raccolto tutto nella nostra guida
                      ai{" "}
                      <Link
                        to="/blog/quanto-costa-un-sito-web-nel-2026"
                        className="text-accent font-medium hover:underline"
                      >
                        costi reali di un sito web nel 2026
                      </Link>
                      . Un sito che non porta risultati, in fondo, non è affatto un risparmio: è un costo nascosto,
                      solo spostato più avanti nel tempo.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Quando ha senso fare un sito da soli</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Detto questo, non è sempre una scelta sbagliata. Farlo da soli può avere senso se vuoi
                      semplicemente fare esperienza, se stai testando un'idea di business senza ancora sapere se
                      funzionerà, o se non hai obiettivi commerciali immediati da raggiungere. Ma nel momento in cui il
                      sito deve iniziare a lavorare per te — a portarti contatti, richieste, clienti — il discorso
                      cambia radicalmente, e vale la pena valutare se non sia il momento di affidarti a chi lo fa di
                      mestiere.
                    </p>
                  </div>
                </article>
              </AnimatedSection>

              <AnimatedSection delay={0.24}>
                <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                  <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                  <h2 className="heading-3 text-foreground">Conclusione</h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                    <p>
                      Creare un sito web da soli, oggi, è certamente possibile. Ma creare un sito che funzioni davvero,
                      che porti risultati concreti alla tua attività, richiede qualcosa in più della semplice
                      pubblicazione online. Struttura, strategia e chiarezza sono gli elementi che fanno la differenza
                      tra un sito che semplicemente esiste e un sito che ti porta clienti. E nel digitale, quella
                      differenza è tutto.
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
                <h2 className="heading-2">Domande frequenti sul creare un sito da soli</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={`faq-diy-website-${index}`}
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
              <h2 className="heading-2 text-foreground">Vuoi capire se il tuo sito può funzionare davvero?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Se hai già provato a creare un sito da solo o stai pensando di farlo, possiamo aiutarti a capire cosa
                ha senso fare davvero per la tua attività.
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

export default BlogDiyWebsiteArticle;
