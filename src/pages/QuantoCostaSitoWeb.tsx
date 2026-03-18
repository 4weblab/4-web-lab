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
        <title>Quanto costa un sito web | 4weblab</title>
        <meta name="description" content="Placeholder descrizione pagina costo sito web." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/quanto-costa-un-sito-web" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/quanto-costa-un-sito-web" />
        <meta property="og:title" content="Quanto costa un sito web | 4weblab" />
        <meta property="og:description" content="Placeholder descrizione pagina costo sito web." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">

        {/* 1 — Hero Section */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
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
              <h1 className="heading-1 text-primary-foreground mb-8 text-balance" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                [Titolo Hero]
              </h1>
              <p className="body-large text-primary-foreground/90 mb-10 max-w-3xl mx-auto text-balance" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                [Testo breve introduttivo hero]
              </p>
              <button
                onClick={() => document.getElementById('cta-finale')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-10 py-4"
                aria-label="CTA hero">
                [CTA Hero]
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* 2 — Testo introduttivo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <div className="section-divider" />
              <h2 className="heading-2 mb-6">[Titolo sezione introduttiva]</h2>
              <p className="body-large text-muted-foreground text-balance mb-6">
                [Paragrafo introduttivo 1]
              </p>
              <p className="text-muted-foreground text-balance">
                [Paragrafo introduttivo 2]
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 3 — Sezione Prezzi */}
        <section className="section-padding" style={{ background: 'hsl(210 25% 98%)' }}>
          <div className="container-section">
            <AnimatedSection className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">[Titolo sezione prezzi]</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo sezione prezzi]
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <StaggerItem key={i}>
                  <div className="card-glass p-8 h-full flex flex-col" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                    <h3 className="text-xl font-bold text-foreground mb-2">[Piano {i}]</h3>
                    <p className="text-muted-foreground text-sm mb-6">[Descrizione piano {i}]</p>
                    <div className="mb-6">
                      <span className="text-4xl font-serif font-bold text-foreground">[€XXX]</span>
                      <span className="text-sm text-muted-foreground ml-1">[dettaglio]</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1" role="list">
                      {[1, 2, 3, 4].map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                          <span className="text-foreground text-sm">[Feature {f}]</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full rounded-xl">
                      <a href="#cta-finale">[CTA Piano {i}]</a>
                    </Button>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 4 — Da cosa dipende il costo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">[Titolo: da cosa dipende il costo]</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo fattori di costo]
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <StaggerItem key={i}>
                  <div className="card-glass p-6" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <HelpCircle className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">[Fattore {i}]</h3>
                    <p className="text-muted-foreground text-sm">[Descrizione fattore {i}]</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* 5 — Confronto tra soluzioni */}
        <section className="section-padding" style={{ background: 'hsl(210 22% 96%)' }}>
          <div className="container-section">
            <AnimatedSection className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">[Titolo confronto soluzioni]</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo confronto]
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-4xl mx-auto overflow-x-auto" delay={0.15}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-4 text-foreground font-bold">[Caratteristica]</th>
                    <th className="py-4 px-4 text-center text-foreground font-bold">[Soluzione A]</th>
                    <th className="py-4 px-4 text-center text-foreground font-bold">[Soluzione B]</th>
                    <th className="py-4 px-4 text-center text-foreground font-bold">[Soluzione C]</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((row) => (
                    <tr key={row} className="border-b border-border/50">
                      <td className="py-3 px-4 text-foreground text-sm">[Riga {row}]</td>
                      <td className="py-3 px-4 text-center text-muted-foreground text-sm">[Valore]</td>
                      <td className="py-3 px-4 text-center text-muted-foreground text-sm">[Valore]</td>
                      <td className="py-3 px-4 text-center text-muted-foreground text-sm">[Valore]</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimatedSection>
          </div>
        </section>

        {/* 6 — Sezione AI */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h2 className="heading-2 mb-5">[Titolo sezione AI]</h2>
                <p className="text-muted-foreground mb-4">[Paragrafo AI 1]</p>
                <p className="text-muted-foreground">[Paragrafo AI 2]</p>
              </div>
              <div className="card-glass p-8" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <ul className="space-y-4" role="list">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-foreground text-sm">[Punto AI {i}]</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 7 — Sezione Noleggio */}
        <section className="section-padding" style={{ background: 'hsl(210 25% 98%)' }}>
          <div className="container-section">
            <AnimatedSection className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="card-glass p-8 order-2 md:order-1" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">[Titolo card noleggio]</h3>
                <p className="text-muted-foreground text-sm mb-4">[Descrizione noleggio]</p>
                <div className="mb-4">
                  <span className="text-3xl font-serif font-bold text-foreground">[€XX]</span>
                  <span className="text-sm text-muted-foreground ml-1">[/mese]</span>
                </div>
                <ul className="space-y-2" role="list">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-foreground text-sm">[Incluso {i}]</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="heading-2 mb-5">[Titolo sezione noleggio]</h2>
                <p className="text-muted-foreground mb-4">[Paragrafo noleggio 1]</p>
                <p className="text-muted-foreground">[Paragrafo noleggio 2]</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 8 — FAQ */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-16">
              <div className="section-divider" />
              <h2 className="heading-2 mb-5">[Titolo FAQ]</h2>
              <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
                [Sottotitolo FAQ]
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-3xl mx-auto" delay={0.15}>
              <Accordion type="single" collapsible className="w-full">
                {[1, 2, 3, 4, 5].map((i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground">
                      [Domanda FAQ {i}]
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      [Risposta FAQ {i}]
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </section>

        {/* 9 — CTA Finale */}
        <section id="cta-finale" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="costo-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#costo-cta-noise)" />
            </svg>
          </div>

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="heading-2 text-primary-foreground mb-6" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                [Titolo CTA finale]
              </h2>
              <p className="body-large text-primary-foreground/90 mb-10 text-balance" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                [Testo CTA finale]
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/#contatti" className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2">
                  [CTA Primaria] <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-primary-foreground/50 text-sm mt-6">[Nota sotto CTA]</p>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default QuantoCostaSitoWeb;
