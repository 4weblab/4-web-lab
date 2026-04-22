import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import blogAiWebsite from "@/assets/blog-ai-website.jpg";
import blogWebsiteCost from "@/assets/blog-website-cost.jpg";
import blogSiteVsSocial from "@/assets/blog-site-vs-social.jpg";

const articles = [
  {
    slug: "/blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
    title: "Sito web o social network: cosa conviene davvero per un’attività nel 2026?",
    description:
      "Meglio un sito web o i social per la tua attività? Differenze, vantaggi e la scelta più solida per portare clienti nel 2026.",
    image: blogSiteVsSocial,
    alt: "Confronto tra sito web aziendale e presenza social per un'attività locale",
  },
  {
    slug: "/blog/siti-web-creati-con-intelligenza-artificiale",
    title: "Siti web fatti con intelligenza artificiale: opportunità o rischio?",
    description:
      "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
  },
  {
    slug: "/blog/quanto-costa-un-sito-web-nel-2026",
    title: "Quanto costa un sito web nel 2026?",
    description:
      "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
  },
];

const Blog = () => {
  const pageTitle = "Blog siti web e SEO | 4 Web Lab";
  const pageDescription =
    "Guide pratiche su siti web, SEO e costi reali per aziende, professionisti e negozi firmate 4 Web Lab.";
  const pageUrl = "https://4weblab.it/blog";
  const pageImage = "https://4weblab.it/og-image.jpg";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
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
            mainEntity: {
              "@type": "Blog",
              name: "Blog 4 Web Lab",
              blogPost: articles.map((article) => ({
                "@type": "BlogPosting",
                headline: article.title,
                description: article.description,
                url: `https://4weblab.it${article.slug}`,
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
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Blog 4 Web Lab
              </span>
              <h1 className="heading-1 mt-6 text-primary-foreground text-balance">
                Guide e consigli per creare un sito web che porta clienti
              </h1>
              <p className="body-large mt-6 text-primary-foreground/80 max-w-2xl">
                Articoli pratici su costi, strategie e scelte tecniche per aziende,
                professionisti e attività locali.
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

        {/* ARTICOLI */}
        <section
          className="section-padding"
          style={{ background: "var(--gradient-surface)" }}
        >
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mb-12 md:mb-16">
              <div className="section-divider !mx-0" />
               <h2 className="heading-2 text-foreground">I nostri articoli</h2>
              <p className="body-base text-muted-foreground mt-4">
                Approfondimenti pensati per aiutarti a fare scelte consapevoli sul tuo sito web.
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
      </main>

      <Footer />
    </>
  );
};

export default Blog;
