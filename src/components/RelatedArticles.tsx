import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getRelatedArticles } from "@/data/blogArticles";

interface RelatedArticlesProps {
  currentSlug: string;
}

const RelatedArticles = ({ currentSlug }: RelatedArticlesProps) => {
  const related = getRelatedArticles(currentSlug);
  if (related.length === 0) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <AnimatedSection className="mx-auto max-w-2xl">
          <div className="mb-10 text-center md:mb-12">
            <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-accent" />
            <h2 className="heading-2 text-foreground">Continua a leggere</h2>
            <p className="body-base mt-4 text-muted-foreground">
              Altri articoli dal blog di 4 Web Lab.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {related.map((article) => (
              <article
                key={article.slug}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[var(--shadow-card-hover)]"
              >
                <Link to={article.path} className="block aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={article.alt}
                    width={512}
                    height={320}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                    {article.category}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground md:text-base">
                    <Link to={article.path} className="hover:text-accent transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed line-clamp-2 text-muted-foreground">
                    {article.excerpt}
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <Link
                      to={article.path}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-all hover:gap-2"
                    >
                      Leggi l'articolo
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RelatedArticles;