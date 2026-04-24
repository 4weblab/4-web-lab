import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import BlogBreadcrumb from "@/components/BlogBreadcrumb";
import RelatedArticles from "@/components/RelatedArticles";
import { calcReadingTime, formatItalianDate, getArticleBySlug } from "@/data/blogArticles";
import blogSiteVsSocial from "@/assets/blog-site-vs-social.jpg";

const introParagraphs = [
  "Molte attività oggi si fanno sempre la stessa domanda: serve davvero un sito web o bastano i social?",
  "Facebook, Instagram e le altre piattaforme hanno reso molto più semplice essere presenti online. In pochi minuti è possibile creare una pagina, pubblicare contenuti e iniziare a farsi vedere.",
  "Per questo motivo, sempre più aziende decidono di fermarsi lì. Nessun sito, nessuna struttura, solo social.",
  "La logica sembra funzionare: se i clienti sono sui social, perché complicarsi la vita?",
  "Il punto è che questa scelta, nel lungo periodo, può diventare un limite molto più grande di quanto sembri.",
];

const sections = [
  {
    title: "Perché i social sembrano sufficienti",
    paragraphs: [
      "All’inizio, i social danno una sensazione di controllo e immediatezza. Pubblichi un contenuto e qualcuno lo vede. Ricevi like, commenti, magari qualche messaggio.",
      "Sembra che tutto funzioni.",
      "In realtà, quello che stai vedendo è solo una parte del quadro.",
      "La visibilità sui social non è mai completamente tua. Dipende da algoritmi, da dinamiche che cambiano continuamente e da una competizione sempre più alta.",
      "Questo significa che anche se lavori bene, non hai la certezza di essere visto.",
    ],
  },
  {
    title: "Il limite principale dei social: non sono tuoi",
    paragraphs: [
      "C’è un aspetto che spesso viene sottovalutato.",
      "Un profilo social non è una proprietà. È uno spazio che utilizzi, ma che non controlli davvero.",
      "Se una piattaforma cambia le regole, riduce la visibilità o semplicemente evolve, sei costretto ad adattarti.",
      "Non puoi decidere come verranno mostrati i tuoi contenuti. Non puoi costruire un percorso preciso per chi visita la tua pagina.",
      "Puoi solo pubblicare e sperare che venga visto.",
    ],
  },
  {
    title: "Il problema della visibilità su Google",
    paragraphs: [
      "Un altro limite importante riguarda la ricerca.",
      "Quando una persona cerca su Google un servizio, un prodotto o una soluzione, raramente trova un profilo social tra i primi risultati.",
      "Trova siti web.",
      "Questo significa che, senza un sito, stai rinunciando a una parte enorme di visibilità. Non intercetti chi sta cercando attivamente quello che fai.",
      "E questa è una differenza sostanziale.",
    ],
  },
  {
    title: "Cosa cambia davvero con un sito web",
    paragraphs: [
      "Un sito web funziona in modo completamente diverso.",
      "Non è una sequenza di contenuti come un social, ma una struttura pensata per guidare l’utente.",
      "Puoi spiegare chi sei, cosa fai, come lavori. Puoi organizzare le informazioni, costruire fiducia e accompagnare chi visita verso un’azione concreta.",
      "E soprattutto, è tuo.",
      "Non dipende da algoritmi esterni. Non cambia da un giorno all’altro senza il tuo controllo.",
    ],
  },
  {
    title: "Attenzione: non è una scelta tra sito e social",
    paragraphs: [
      "Qui nasce uno degli errori più comuni.",
      "Non si tratta di scegliere tra sito web e social. Non sono alternative.",
      "Sono strumenti diversi, con funzioni diverse.",
      "I social servono per attirare attenzione, creare relazione, rimanere presenti.",
      "Il sito serve per trasformare quell’attenzione in qualcosa di concreto: un contatto, una richiesta, un cliente.",
      "Quando usi solo i social, stai facendo metà del lavoro.",
    ],
  },
  {
    title: "Quando i social iniziano a non bastare",
    paragraphs: [
      "All’inizio possono sembrare più che sufficienti. Ma c’è un momento in cui iniziano a mostrare i loro limiti.",
      "Succede quando vuoi crescere davvero.",
      "Quando vuoi acquisire clienti in modo più costante. Quando vuoi essere percepito come professionale. Quando inizi a competere con altre attività che hanno una presenza online più strutturata.",
      "In quel momento, il sito web non è più un optional. Diventa uno strumento necessario.",
    ],
  },
  {
    title: "Conclusione",
    paragraphs: [
      "I social network sono strumenti potenti, ma non possono sostituire un sito web.",
      "Affidarsi solo ai social significa costruire la propria presenza online su qualcosa che non controlli completamente.",
      "Un sito web, invece, è una base solida. Ti permette di essere trovato, di spiegarti meglio e di guidare chi arriva verso una decisione.",
      "Se vuoi ottenere risultati concreti, non è una questione di scegliere tra sito e social.",
      "È capire come usarli insieme nel modo giusto.",
    ],
  },
];

const BlogSiteVsSocialArticle = () => {
  const pageTitle = "Sito web o social? Cosa conviene davvero nel 2026";
  const pageDescription =
    "Meglio un sito web o i social per la tua attività? Scopri differenze, vantaggi e quale scelta porta davvero clienti nel 2026.";
  const pageUrl = "https://4weblab.it/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026";
  const pageImage = `https://4weblab.it${blogSiteVsSocial}`;
  const articleData = getArticleBySlug("sito-web-o-social-cosa-conviene-davvero-nel-2026");
  const datePublished = articleData?.datePublished ?? "2026-03-15";
  const dateModified = articleData?.dateModified ?? "2026-03-15";
  const articleSection = articleData?.category ?? "Strategia digitale";
  const readingTime = calcReadingTime(articleData?.wordCount ?? 580);
  const headline = "Sito web o social network: cosa conviene davvero per un’attività nel 2026?";

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
            publisher: {
              "@type": "Organization",
              name: "4 Web Lab",
              logo: {
                "@type": "ImageObject",
                url: "https://4weblab.it/logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": pageUrl,
            },
            url: pageUrl,
            datePublished,
            dateModified,
          })}
        </script>
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
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Sito web o social network: cosa conviene davvero per un’attività nel 2026?
              </h1>
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
              {sections.map((section, index) => (
                <AnimatedSection key={section.title} delay={index * 0.04}>
                  <article className="rounded-[2rem] border border-border/60 bg-card px-6 py-8 shadow-sm md:px-10 md:py-10">
                    <div className="mb-6 h-1 w-14 rounded-full bg-accent" />
                    <h2 className="heading-3 text-foreground">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-8 text-foreground/90 md:text-lg">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
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
            <AnimatedSection className="mx-auto max-w-3xl rounded-[2rem] border border-border/60 bg-card px-6 py-8 text-center shadow-sm md:px-10 md:py-12">
              <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
              <h2 className="heading-2 text-foreground">Vuoi capire cosa serve davvero alla tua attività?</h2>
              <p className="body-large mt-5 text-muted-foreground">
                Raccontaci cosa fai e ti aiutiamo a capire come strutturare la tua presenza online in modo efficace, senza perdere tempo e senza complicazioni inutili.
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

export default BlogSiteVsSocialArticle;