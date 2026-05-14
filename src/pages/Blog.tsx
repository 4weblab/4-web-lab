import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import blogAiWebsite from "@/assets/blog-ai-website.jpg";
import blogGdprPrivacy from "@/assets/blog-gdpr-privacy.jpg";
import blogOutdatedWebsite from "@/assets/blog-sito-obsoleto-2026.jpg";
import blogWebsiteCost from "@/assets/blog-website-cost.jpg";
import blogSiteVsSocial from "@/assets/blog-site-vs-social.jpg";
import blogNotFoundOnGoogle from "@/assets/blog-sito-non-trovato-google.jpg";
import blogQuotePlatforms from "@/assets/blog-piattaforme-preventivi.jpg";
import blogDiyWebsite from "@/assets/blog-creare-sito-da-soli.jpg";

const articles = [
  {
    slug: "/blog/creare-sito-web-da-soli-conviene",
    title: "Creare un sito web da soli conviene davvero? Costi, rischi e cosa sapere nel 2026",
    description:
      "Vuoi creare un sito web da solo con WordPress o altri strumenti? Scopri rischi, costi reali e perché spesso non porta clienti.",
    image: blogDiyWebsite,
    alt: "Persona che crea un sito web da sola con laptop e builder visuale WordPress",
    datePublished: "2026-05-03",
  },
  {
    slug: "/blog/siti-web-piattaforme-preventivi-online-conviene",
    title: "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?",
    description:
      "Preventivi veloci e prezzi bassi: sembra la scelta giusta. Ma cosa succede davvero dietro piattaforme come ProntoPro e simili?",
    image: blogQuotePlatforms,
    alt: "Laptop con piattaforme di preventivi online per la realizzazione di siti web",
    datePublished: "2026-05-02",
  },
  {
    slug: "/blog/perche-il-tuo-sito-non-si-trova-su-google",
    title: "Perché il tuo sito non si trova su Google (e come iniziare a comparire davvero)",
    description:
      "Il tuo sito non compare su Google? Scopri perché succede e cosa fare per iniziare a farti trovare dai clienti nel 2026.",
    image: blogNotFoundOnGoogle,
    alt: "Laptop con risultati di ricerca Google e lente di ingrandimento, sito web non posizionato",
    datePublished: "2026-04-24",
  },
  {
    slug: "/blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
    title: "Sito web obsoleto: 5 segnali che ti stanno facendo perdere clienti nel 2026",
    description:
      "Il tuo sito web è vecchio o inefficace? Scopri 5 segnali che fanno perdere clienti e come capire se è il momento di rifarlo.",
    image: blogOutdatedWebsite,
    alt: "Monitor e smartphone con un sito aziendale obsoleto e prestazioni in calo",
    datePublished: "2026-03-26",
  },
  {
    slug: "/blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
    title: "GDPR siti web 2026: obblighi, cookie e privacy",
    description:
      "GDPR siti web: cosa è obbligatorio nel 2026? Scopri cookie banner, privacy policy e cosa deve avere un sito per essere a norma.",
    image: blogGdprPrivacy,
    alt: "Cookie banner e privacy policy su un sito web aziendale conforme al GDPR",
    datePublished: "2026-04-20",
  },
  {
    slug: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
    title: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?",
    description:
      "Meglio un sito web o i social per la tua attività? Differenze, vantaggi e la scelta più solida per portare clienti nel 2026.",
    image: blogSiteVsSocial,
    alt: "Confronto tra sito web aziendale e presenza social per un'attività locale",
    datePublished: "2026-03-15",
  },
  {
    slug: "/blog/siti-web-creati-con-intelligenza-artificiale",
    title: "Siti web fatti con intelligenza artificiale: opportunità o rischio?",
    description:
      "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
    datePublished: "2026-04-08",
  },
  {
    slug: "/blog/quanto-costa-un-sito-web-nel-2026",
    title: "Quanto costa un sito web nel 2026?",
    description:
      "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
    datePublished: "2026-03-04",
  },
];

const Blog = () => {
  const pageTitle = "Blog siti web 2026: guide, costi e SEO | 4 Web Lab";
  const pageDescription =
    "Guide 2026 su siti web, costi, GDPR, SEO e AI. Consigli per aziende, professionisti e negozi da 4 Web Lab, agenzia web di Padova.";
  const pageKeywords =
    "blog siti web, guide SEO, costi sito web, GDPR siti web, intelligenza artificiale siti web, agenzia web Padova, siti web aziendali, siti web professionisti";
  const pageUrl = "https://4weblab.it/blog";
  const pageImage = "https://4weblab.it/og-image.jpg";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: pageTitle,
            description: pageDescription,
            url: pageUrl,
            inLanguage: "it-IT",
            mainEntity: {
              "@type": "Blog",
              name: "Blog 4 Web Lab",
              blogPost: articles.map((article) => ({
                "@type": "BlogPosting",
                headline: article.title,
                description: article.description,
                url: `https://4weblab.it${article.slug}`,
                image: `https://4weblab.it${article.image}`,
                datePublished: article.datePublished,
                dateModified: article.datePublished,
                inLanguage: "it-IT",
                author: {
                  "@type": "Person",
                  name: "Carlo Fullin",
                  url: "https://4weblab.it/",
                },
                publisher: { "@id": "https://4weblab.it/#business" },
              })),
            },
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content">
        {/* HERO */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{ background: "var(--gradient-hero)" }}
        >
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "hsl(var(--accent))" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "hsl(207 90% 70%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)",
            }}
          />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-3xl">
              <PageBreadcrumb
                className="!mx-0 !justify-start"
                items={[
                  { label: "Home", to: "/" },
                  { label: "Blog" },
                ]}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Guide e consigli per creare un sito web che porta clienti
              </h1>
              <p className="body-large mt-6 text-primary-foreground/80 max-w-2xl">
                Articoli pratici su costi, SEO, GDPR e intelligenza artificiale per
                aziende, professionisti e attività locali a Padova e in tutta Italia.
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

        {/* INTRO SEO */}
        <section className="pt-16 md:pt-20 pb-20 md:pb-24 bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto">
              <div className="section-divider !mx-0" />
              <h2 className="heading-2 text-foreground">
                Il blog di 4 Web Lab: contenuti utili per scegliere bene
              </h2>
              <div className="mt-6 space-y-4 body-base text-muted-foreground">
                <p>
                  Nel blog di <strong>4 Web Lab</strong> raccogliamo guide pratiche,
                  casi reali e approfondimenti tecnici pensati per chi sta valutando di{" "}
                  <strong>realizzare un sito web</strong> o rifare quello esistente. Niente
                  teoria astratta: solo consigli operativi nati dal lavoro quotidiano della
                  nostra <Link to="/realizzazione-siti-web-padova" className="text-accent font-medium hover:underline">agenzia web di Padova</Link>.
                </p>
                <p>
                  Trovi articoli dedicati a <strong>costi reali di un sito web</strong>,
                  scelte tecniche, <strong>SEO locale</strong>, conformità{" "}
                  <strong>GDPR</strong>, cookie e privacy, oltre a guide sull'uso
                  dell'<strong>intelligenza artificiale</strong> nella creazione di siti.
                  Ogni contenuto è pensato per aziende, <strong>professionisti</strong>{" "}
                  (avvocati, commercialisti, medici), negozi e attività locali che vogliono
                  capire come ottenere risultati concreti dal proprio sito.
                </p>
                <p>
                  Se preferisci parlarne direttamente con noi,{" "}
                  <Link to="/contatti" className="text-accent font-medium hover:underline">
                    richiedi una valutazione gratuita
                  </Link>
                  : analizziamo insieme la tua situazione e ti diciamo, senza giri di
                  parole, cosa conviene fare.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ARTICOLI */}
        <section
          className="section-padding"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mb-12 md:mb-16">
              <div className="section-divider !mx-0" />
              <h2 className="heading-2 text-foreground">Ultime guide e approfondimenti</h2>
              <p className="body-base text-muted-foreground mt-4">
                Articoli aggiornati su siti web, SEO, costi, GDPR e intelligenza
                artificiale per aiutarti a fare scelte consapevoli.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {articles.map((article) => (
                <StaggerItem key={article.title}>
                  <article className="group h-full overflow-hidden rounded-2xl bg-card border border-border/60 shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] hover:border-accent/30 flex flex-col">
                    <div className="relative overflow-hidden aspect-[16/10] bg-muted">
                      <img
                        src={article.image}
                        alt={article.alt}
                        width={1024}
                        height={640}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-semibold leading-snug text-foreground">
                        {article.title}
                      </h3>
                      <p className="body-base text-muted-foreground mt-3 line-clamp-2">
                        {article.description}
                      </p>
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <Link
                          to={article.slug}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                        >
                          Leggi di più
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* INTERLINKING */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="section-divider mx-auto" />
              <h2 className="heading-2 text-foreground">Esplora i nostri servizi</h2>
              <p className="body-base text-muted-foreground mt-4">
                Hai trovato utile il blog? Scopri le soluzioni che proponiamo per
                aziende, professionisti e attività locali.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <li>
                  <Link
                    to="/siti-web-aziendali"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="font-medium text-foreground">Siti web aziendali</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/siti-web-per-professionisti"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="font-medium text-foreground">Siti web per professionisti</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/quanto-costa-sito-web"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="font-medium text-foreground">Quanto costa un sito web</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/realizzazione-siti-web-padova"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card-hover)]"
                  >
                    <span className="font-medium text-foreground">Realizzazione siti web Padova</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
