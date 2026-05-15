import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Smartphone,
  Search,
  Shield,
  Gauge,
  Layout,
  Target,
  Image as ImageIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { AnimatedSection } from "@/components/AnimatedSection";

interface Project {
  slug: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
  gradient: string;
  initials: string;
}

const projects: Project[] = [
  {
    slug: "demo-metalmeccanica",
    title: "Concept sito per azienda metalmeccanica",
    description:
      "Demo pensata per una PMI del settore metalmeccanico: catalogo prodotti, area certificazioni e contatti commerciali ben strutturati.",
    badge: "Concept",
    features: ["Sezione prodotti", "Area B2B", "SEO tecnica"],
    gradient: "linear-gradient(135deg, hsl(210 73% 22%) 0%, hsl(207 60% 38%) 100%)",
    initials: "AU",
  },
  {
    slug: "demo-studio-dentistico-premium",
    title: "Concept sito per studio dentistico",
    description:
      "Demo progettata per uno studio odontoiatrico moderno, con struttura chiara, servizi ordinati e CTA strategiche per la prenotazione.",
    badge: "Concept",
    features: ["SEO locale", "Mobile responsive", "CTA strategiche"],
    gradient: "linear-gradient(135deg, hsl(190 70% 35%) 0%, hsl(207 80% 50%) 100%)",
    initials: "DS",
  },
  {
    slug: "demo-fotovoltaico",
    title: "Concept sito per azienda fotovoltaica",
    description:
      "Demo premium per un'azienda di impianti fotovoltaici e accumulo energetico: dashboard energetiche, case studies industriali e form consulenza.",
    badge: "Concept",
    features: ["Dashboard energetiche", "UX dark premium", "Lead generation B2B"],
    gradient: "linear-gradient(135deg, hsl(220 60% 10%) 0%, hsl(150 80% 35%) 100%)",
    initials: "SE",
  },
  {
    slug: "boutique-bb-luxury-rooms",
    title: "Concept sito per boutique B&B / Luxury Rooms",
    description:
      "Demo editoriale per un boutique B&B contemporaneo: hero cinematografica, camere premium, gallery immersiva e form prenotazione su misura.",
    badge: "Concept",
    features: ["Design editoriale", "Gallery immersiva", "UX boutique luxury"],
    gradient: "linear-gradient(135deg, hsl(28 25% 18%) 0%, hsl(35 35% 55%) 100%)",
    initials: "VR",
  },
];

const methodPoints = [
  { icon: Search, title: "Struttura SEO ordinata", desc: "Gerarchia di titoli, URL puliti e dati strutturati pensati per Google." },
  { icon: Smartphone, title: "Esperienza mobile", desc: "Layout ottimizzati per smartphone, dove avviene la maggior parte delle visite." },
  { icon: Target, title: "CTA strategiche", desc: "Pulsanti e form posizionati per trasformare visitatori in contatti reali." },
  { icon: Layout, title: "Design professionale", desc: "Estetica moderna, coerente con il brand e con il settore di riferimento." },
  { icon: Shield, title: "Attenzione GDPR", desc: "Cookie banner, consensi e privacy gestiti in modo conforme." },
  { icon: Gauge, title: "Velocità e leggibilità", desc: "Prestazioni elevate e tipografia curata per una lettura confortevole." },
  { icon: ImageIcon, title: "Organizzazione contenuti", desc: "Sezioni chiare, gerarchia visiva e percorsi di navigazione intuitivi." },
  { icon: Sparkles, title: "Immagine aziendale moderna", desc: "Una presenza online che racconta professionalità e attenzione ai dettagli." },
];

const Realizzazioni = () => {
  const [active, setActive] = useState<Category>("Tutti");

  const filtered = active === "Tutti"
    ? projects
    : projects.filter((p) => p.categories.includes(active as Exclude<Category, "Tutti">));

  return (
    <>
      <Helmet>
        <title>Realizzazioni siti web per aziende e professionisti | 4 Web Lab</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32" style={{ background: "var(--gradient-hero)" }}>
          {/* decorative pattern */}
          <div aria-hidden className="absolute inset-0 opacity-[0.18]" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.35) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }} />
          <div aria-hidden className="hero-spotlight" />
          <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full" style={{
            background: "radial-gradient(circle, hsl(207 90% 54% / 0.25) 0%, transparent 70%)",
          }} />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full" style={{
            background: "radial-gradient(circle, hsl(24 95% 53% / 0.18) 0%, transparent 70%)",
          }} />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <PageBreadcrumb
                variant="light"
                items={[
                  { label: "Home", to: "/" },
                  { label: "Realizzazioni" },
                ]}
              />
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-primary-foreground/90 border border-primary-foreground/20" style={{ background: "hsl(0 0% 100% / 0.06)", backdropFilter: "blur(8px)" }}>
                <Sparkles className="w-3.5 h-3.5" />
                Portfolio & Concept
              </span>
              <h1 className="heading-1 text-primary-foreground mb-6 text-balance">
                Realizzazioni siti web e concept professionali
              </h1>
              <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-balance">
                Una raccolta di progetti, demo e restyling creati da 4 Web Lab per mostrare come può
                evolvere la presenza online di aziende, professionisti e attività locali.
              </p>
              <a href="#contatti-finale" className="hero-cta hero-cta-primary">
                E adesso creiamo il TUO!
                <ArrowRight className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="heading-3 mb-4">Progetti reali e concept dimostrativi</h2>
              <p className="body-base text-muted-foreground">
                Alcuni progetti presenti in questa raccolta sono lavori reali, altri sono concept
                sviluppati per mostrare possibili soluzioni di design, struttura e comunicazione
                per specifici settori professionali.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* GRID + FILTERS */}
        <section className="pb-24 md:pb-32" style={{ background: "hsl(var(--surface-alt))" }}>
          <div className="container-section pt-16 md:pt-20">
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filtra per categoria">
              {filters.map((f) => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(f)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                      isActive
                        ? "text-accent-foreground border-transparent shadow-md"
                        : "bg-card text-foreground border-border hover:border-accent/40 hover:-translate-y-0.5"
                    }`}
                    style={isActive ? { background: "var(--gradient-accent)" } : {}}
                  >
                    {f}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.3) }}
                >
                  <Link
                    to={`/realizzazioni/${p.slug}`}
                    className="group block h-full bg-card rounded-2xl overflow-hidden border border-border transition-all duration-400 hover:-translate-y-1.5"
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    {/* Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden" style={{ background: p.gradient }}>
                      <div aria-hidden className="absolute inset-0 opacity-20" style={{
                        backgroundImage:
                          "linear-gradient(transparent 96%, hsl(0 0% 100% / 0.3) 96%), linear-gradient(90deg, transparent 96%, hsl(0 0% 100% / 0.3) 96%)",
                        backgroundSize: "32px 32px",
                      }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-primary-foreground/95 font-serif font-bold text-6xl md:text-7xl tracking-tight transition-transform duration-500 group-hover:scale-110">
                          {p.initials}
                        </span>
                      </div>
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-card/95 text-foreground backdrop-blur-sm shadow-sm">
                        {p.badge}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-6 md:p-7 flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {p.description}
                      </p>
                      <ul className="space-y-1.5 mb-5">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        Apri demo
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* METODO */}
        <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div aria-hidden className="absolute inset-0 opacity-[0.12]" style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.4) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block w-16 h-1 rounded-full mb-6" style={{ background: "var(--gradient-accent)" }} />
              <h2 className="heading-2 text-primary-foreground mb-4 text-balance">
                Ogni progetto mostra molto più del design
              </h2>
              <p className="body-large text-primary-foreground/75">
                Dietro ogni realizzazione c'è un metodo: scelte tecniche, strategiche e visive
                che lavorano insieme per generare risultati concreti.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {methodPoints.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.24) }}
                  className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "hsl(0 0% 100% / 0.05)",
                    backdropFilter: "blur(12px)",
                    borderColor: "hsl(0 0% 100% / 0.12)",
                  }}
                >
                  <div className="w-11 h-11 rounded-xl mb-4 flex items-center justify-center" style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}>
                    <m.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-primary-foreground mb-1.5">{m.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINALE */}
        <section id="contatti-finale" className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
                <div aria-hidden className="absolute inset-0 opacity-20" style={{
                  background: "radial-gradient(ellipse at top, hsl(207 90% 54% / 0.4) 0%, transparent 60%)",
                }} />
                <div className="relative z-10">
                  <h2 className="heading-2 text-primary-foreground mb-5 text-balance">
                    Hai visto un progetto vicino alla tua attività?
                  </h2>
                  <p className="body-large text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                    Possiamo partire da una demo esistente, adattarla al tuo settore e trasformarla
                    in un sito professionale completo, con struttura SEO, design moderno e
                    contenuti su misura.
                  </p>
                  <Link to="/contatti" className="hero-cta hero-cta-primary">
                    Parliamone
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Realizzazioni;