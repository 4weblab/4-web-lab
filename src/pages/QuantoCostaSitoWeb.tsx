import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Check, HelpCircle, ArrowRight, Cpu, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QuantoCostaSitoWeb = () => {
  return (
    <>
      <Helmet>
        <title>Quanto costa un sito web nel 2026 | Prezzi reali | 4weblab</title>
        <meta name="description" content="Quanto costa un sito web nel 2026? Prezzi reali, confronto tra soluzioni e consigli per scegliere il sito giusto per la tua attività." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/quanto-costa-un-sito-web" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/quanto-costa-un-sito-web" />
        <meta property="og:title" content="Quanto costa un sito web nel 2026 | Prezzi reali | 4weblab" />
        <meta property="og:description" content="Quanto costa un sito web nel 2026? Prezzi reali, confronto tra soluzioni e consigli per scegliere il sito giusto per la tua attività." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">

        {/* 1 — Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="costo-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#costo-hero-noise)" />
            </svg>
          </div>
          <div className="hero-spotlight" aria-hidden="true" />
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary-foreground mb-8 text-balance"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.55)', letterSpacing: '-0.03em' }}>
                [Titolo Hero]
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto text-balance leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                [Testo breve introduttivo hero]
              </p>
              <button
                onClick={() => document.getElementById('cta-finale')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-12 py-5 shadow-lg"
                style={{ boxShadow: '0 4px 20px hsl(207 90% 54% / 0.4)' }}
                aria-label="CTA hero">
                [CTA Hero]
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* 2 — Testo introduttivo */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8" style={{ letterSpacing: '-0.02em' }}>
                [Titolo sezione introduttiva]
              </h2>
              <p className="text-lg text-muted-foreground text-balance mb-6 leading-relaxed">
                [Paragrafo introduttivo 1]
              </p>
              <p className="text-base text-muted-foreground text-balance leading-relaxed">
                [Paragrafo introduttivo 2]
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3 — Sezione Prezzi (tabella responsive) */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(210 25% 98%)' }}>
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                [Titolo sezione prezzi]
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo sezione prezzi]
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left" style={{ minWidth: '600px' }}>
                    <thead>
                      <tr style={{ background: 'hsl(210 73% 15%)' }}>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm tracking-wide">[Tipologia sito]</th>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm text-center tracking-wide">[Fascia di prezzo]</th>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm text-center tracking-wide">[Tempistica]</th>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm text-center tracking-wide">[Ideale per]</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((row, idx) => (
                        <tr key={row} className={`border-b border-border/40 transition-colors hover:bg-accent/5 ${idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}>
                          <td className="py-5 px-6 text-foreground font-semibold text-sm">[Tipo sito {row}]</td>
                          <td className="py-5 px-6 text-center font-bold text-base" style={{ color: 'hsl(207 90% 44%)' }}>[€XXX – €XXX]</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">[X settimane]</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">[Target {row}]</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">[Nota prezzi]</p>
            </AnimatedSection>
          </div>
        </section>

        {/* 4 — Da cosa dipende il costo (4 card) */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                [Titolo: da cosa dipende il costo]
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo fattori di costo]
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: HelpCircle, num: 1 },
                { icon: HelpCircle, num: 2 },
                { icon: HelpCircle, num: 3 },
                { icon: HelpCircle, num: 4 },
              ].map(({ icon: Icon, num }) => (
                <StaggerItem key={num}>
                  <div className="card-glass p-8 h-full" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">[Fattore {num}]</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">[Descrizione fattore {num}]</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 5 — Confronto tra soluzioni (tabella 3 colonne) */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(210 22% 96%)' }}>
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                [Titolo confronto soluzioni]
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo confronto]
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="overflow-x-auto">
                  <table className="w-full" style={{ minWidth: '550px' }}>
                    <thead>
                      <tr style={{ background: 'hsl(210 73% 15%)' }}>
                        <th className="py-5 px-6 text-left text-primary-foreground font-bold text-sm tracking-wide">[Caratteristica]</th>
                        <th className="py-5 px-6 text-center text-primary-foreground/80 font-bold text-sm">[Soluzione A]</th>
                        <th className="py-5 px-6 text-center font-bold text-sm" style={{ background: 'hsl(207 90% 48%)', color: 'white' }}>[Soluzione B]</th>
                        <th className="py-5 px-6 text-center text-primary-foreground/80 font-bold text-sm">[Soluzione C]</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5].map((row, idx) => (
                        <tr key={row} className={`border-b border-border/40 ${idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}>
                          <td className="py-5 px-6 text-foreground text-sm font-semibold">[Riga {row}]</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">[Valore]</td>
                          <td className="py-5 px-6 text-center text-foreground text-sm font-semibold" style={{ background: 'hsl(207 90% 54% / 0.08)' }}>[Valore]</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">[Valore]</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 6 — Sezione AI */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  [Titolo sezione AI]
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">[Paragrafo AI 1]</p>
                <p className="text-muted-foreground leading-relaxed">[Paragrafo AI 2]</p>
              </div>
              <div className="card-glass p-8" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <ul className="space-y-5" role="list">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-sm">[Punto AI {i}]</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 7 — Sezione Noleggio */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(210 25% 98%)' }}>
          <div className="container-section">
            <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="card-glass p-8 order-2 md:order-1" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">[Titolo card noleggio]</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">[Descrizione noleggio]</p>
                <div className="mb-5">
                  <span className="text-3xl font-serif font-bold text-foreground">[€XX]</span>
                  <span className="text-sm text-muted-foreground ml-1">[/mese]</span>
                </div>
                <ul className="space-y-3" role="list">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-sm">[Incluso {i}]</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  [Titolo sezione noleggio]
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">[Paragrafo noleggio 1]</p>
                <p className="text-muted-foreground leading-relaxed">[Paragrafo noleggio 2]</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 8 — FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                [Titolo FAQ]
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo FAQ]
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-3xl mx-auto" delay={0.15}>
              <Accordion type="single" collapsible className="w-full">
                {[1, 2, 3, 4, 5].map((i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/60">
                    <AccordionTrigger className="text-left text-foreground text-base py-5 font-semibold">
                      [Domanda FAQ {i}]
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      [Risposta FAQ {i}]
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* 9 — CTA Finale */}
        <section id="cta-finale" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="costo-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#costo-cta-noise)" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mb-8"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.55)', letterSpacing: '-0.03em' }}>
                [Titolo CTA finale]
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 text-balance leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                [Testo CTA finale]
              </p>
              <a
                href="/#contatti"
                className="btn-primary text-lg px-12 py-5 inline-flex items-center gap-3 shadow-lg"
                style={{ boxShadow: '0 4px 24px hsl(207 90% 54% / 0.45)' }}>
                [CTA Primaria] <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-primary-foreground/50 text-sm mt-8">[Nota sotto CTA]</p>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default QuantoCostaSitoWeb;
