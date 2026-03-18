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
                Quanto costa un sito web nel 2026?
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto text-balance leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                I prezzi dei siti web possono variare da poche centinaia a diverse migliaia di euro.
                La differenza? Non è il sito. È quello che quel sito riesce (o non riesce) a fare per la tua attività.
                <br /><br />
                In questa guida trovi prezzi reali, differenze concrete e come evitare soluzioni economiche che non portano risultati.
              </p>
              <button
                onClick={() => document.getElementById('cta-finale')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-lg px-12 py-5 shadow-lg"
                style={{ boxShadow: '0 4px 20px hsl(207 90% 54% / 0.4)' }}
                aria-label="Richiedi un preventivo gratuito">
                Richiedi un preventivo gratuito
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
                Quanto costa davvero realizzare un sito web oggi
              </h2>
              <p className="text-lg text-muted-foreground text-balance mb-6 leading-relaxed">
                Nel 2026 creare un sito web non è difficile. Farne uno che porta clienti, sì.
                Online trovi offerte da 300€, builder automatici con AI e piattaforme "fai da te" che promettono risultati immediati. Ma nella maggior parte dei casi il risultato è sempre lo stesso: un sito che esiste, ma non serve.
              </p>
              <p className="text-base text-muted-foreground text-balance mb-6 leading-relaxed">
                Il prezzo di un sito web non dipende solo da quante pagine ha, ma da come è progettato: struttura, contenuti, chiarezza, capacità di guidare l'utente a contattarti.
                Per questo motivo due siti apparentemente simili possono avere costi completamente diversi.
              </p>
              <p className="text-base text-muted-foreground text-balance leading-relaxed">
                Qui sotto trovi i prezzi reali che si vedono oggi sul mercato, senza numeri gonfiati e senza promesse inutili.
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
                Prezzi medi per realizzare un sito web in Italia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left" style={{ minWidth: '600px' }}>
                    <thead>
                      <tr style={{ background: 'hsl(210 73% 15%)' }}>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm tracking-wide">Tipologia sito</th>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm text-center tracking-wide">Fascia di prezzo</th>
                        <th className="py-5 px-6 text-primary-foreground font-bold text-sm text-center tracking-wide">Ideale per</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { tipo: 'Sito one page essenziale', prezzo: 'da 400€', target: 'Professionisti e attività locali' },
                        { tipo: 'Sito vetrina', prezzo: '900€ – 1.500€', target: 'Aziende che vogliono presentarsi online' },
                        { tipo: 'Sito aziendale completo', prezzo: '1.500€ – 2.500€+', target: 'PMI con più servizi' },
                        { tipo: 'E-commerce', prezzo: '3.000€ – 10.000€+', target: 'Vendita online' },
                        { tipo: 'Noleggio sito web', prezzo: 'da 99€/mese', target: 'Chi vuole evitare investimento iniziale' },
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-border/40 transition-colors hover:bg-accent/5 ${idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}>
                          <td className="py-5 px-6 text-foreground font-semibold text-sm">{row.tipo}</td>
                          <td className="py-5 px-6 text-center font-bold text-base" style={{ color: 'hsl(207 90% 44%)' }}>{row.prezzo}</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">{row.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">I prezzi possono variare in base alla complessità del progetto, ai contenuti e al livello di personalizzazione.</p>
            </AnimatedSection>
          </div>
        </section>

        {/* 4 — Da cosa dipende il costo (4 card) */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                Perché alcuni siti costano 300€ e altri 3000€
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { icon: HelpCircle, title: 'Struttura del sito', text: 'Un sito costruito per guidare il cliente è diverso da una semplice pagina informativa.' },
                { icon: HelpCircle, title: 'Contenuti e testi', text: 'Testi scritti per convincere fanno la differenza tra un sito che viene letto e uno che viene chiuso.' },
                { icon: HelpCircle, title: 'Design e chiarezza', text: 'Un design pulito e ordinato aumenta fiducia e contatti.' },
                { icon: HelpCircle, title: 'Ottimizzazione SEO', text: 'Un sito visibile su Google nel tempo ha un valore molto più alto rispetto a uno invisibile.' },
              ].map(({ icon: Icon, title, text }, idx) => (
                <StaggerItem key={idx}>
                  <div className="card-glass p-8 h-full" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
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
                Quale soluzione scegliere davvero
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              </p>
            </AnimatedSection>

            <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <div className="overflow-x-auto">
                  <table className="w-full" style={{ minWidth: '550px' }}>
                    <thead>
                      <tr style={{ background: 'hsl(210 73% 15%)' }}>
                        <th className="py-5 px-6 text-left text-primary-foreground font-bold text-sm tracking-wide">Soluzione</th>
                        <th className="py-5 px-6 text-center text-primary-foreground font-bold text-sm">Costo</th>
                        <th className="py-5 px-6 text-center text-primary-foreground font-bold text-sm">Risultato</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { soluzione: 'AI / fai da te', costo: 'Costo basso', risultato: 'Spesso non porta risultati' },
                        { soluzione: 'Freelance economico', costo: 'Prezzo accessibile', risultato: 'Qualità variabile' },
                        { soluzione: 'Agenzia strutturata', costo: 'Investimento maggiore', risultato: 'Strategia e supporto' },
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-border/40 ${idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}>
                          <td className="py-5 px-6 text-foreground text-sm font-semibold">{row.soluzione}</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">{row.costo}</td>
                          <td className="py-5 px-6 text-center text-muted-foreground text-sm">{row.risultato}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Il punto non è quanto spendi, ma cosa ottieni.<br />
                Un sito economico che non porta contatti è sempre una spesa, non un investimento.
              </p>
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
                  I siti creati con l'AI funzionano davvero?
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">Gli strumenti AI sono utili per creare una base veloce, ma non sostituiscono la progettazione.</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">Risultato: un sito "presente", ma che non porta risultati concreti.</p>
                <p className="text-muted-foreground leading-relaxed font-semibold">L'AI è uno strumento. Non è una strategia.</p>
              </div>
              <div className="card-glass p-8" style={{ border: '1px solid hsl(210 30% 88%)' }}>
                <p className="text-foreground font-semibold mb-5">Un sito generato automaticamente:</p>
                <ul className="space-y-5" role="list">
                  {[
                    'Non conosce il tuo cliente',
                    'Non struttura i contenuti per vendere',
                    'Non è pensato per convertire',
                  ].map((punto, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-sm">{punto}</span>
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
                <h3 className="text-xl font-bold text-foreground mb-3">Sito web a noleggio</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Parti subito senza investimento iniziale.</p>
                <div className="mb-5">
                  <span className="text-3xl font-serif font-bold text-foreground">99€</span>
                  <span className="text-sm text-muted-foreground ml-1">/mese</span>
                </div>
                <ul className="space-y-3" role="list">
                  {[
                    'Nessun investimento iniziale elevato',
                    'Sito sempre aggiornato',
                    'Assistenza inclusa',
                    'Costo prevedibile',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                      </span>
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Il sito web a noleggio: alternativa all'investimento iniziale
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">Molte attività oggi scelgono una soluzione più semplice: invece di investire subito cifre importanti, partono con un costo mensile.</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">È una soluzione ideale per chi vuole iniziare senza bloccare budget.</p>
                <a
                  href="/noleggio-sito-web"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4"
                  style={{ boxShadow: '0 4px 20px hsl(207 90% 54% / 0.4)' }}>
                  Scopri la soluzione a noleggio <ArrowRight className="w-4 h-4" />
                </a>
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
                Domande frequenti sul costo dei siti web
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
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
