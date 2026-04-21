import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import blogAiWebsite from "@/assets/blog-ai-website.jpg";
import blogWebsiteCost from "@/assets/blog-website-cost.jpg";

const articles = [
  {
    slug: "#",
    title: "Siti web fatti con intelligenza artificiale: opportunità o rischio?",
    description:
      "Sempre più aziende usano l'IA per creare siti web. Ma è davvero la scelta giusta o ci sono limiti da conoscere?",
    image: blogAiWebsite,
    alt: "Interfaccia digitale per la creazione di siti web con intelligenza artificiale",
  },
  {
    slug: "#",
    title: "Quanto costa un sito web nel 2026?",
    description:
      "Una guida chiara ai costi reali di un sito web: cosa incide sul prezzo e cosa aspettarsi davvero.",
    image: blogWebsiteCost,
    alt: "Costo di realizzazione di un sito web professionale nel 2026",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | 4 Web Lab</title>
        <meta
          name="description"
          content="Blog di 4 Web Lab: articoli, guide e approfondimenti su realizzazione siti web, SEO e digital marketing."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/blog" />
        <meta property="og:title" content="Blog | 4 Web Lab" />
        <meta
          property="og:description"
          content="Blog di 4 Web Lab: articoli, guide e approfondimenti su realizzazione siti web, SEO e digital marketing."
        />
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
              <h2 className="heading-2 text-foreground">Ultimi articoli</h2>
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
