import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Check, HelpCircle, ArrowRight, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QuantoCostaSitoWeb = () => {
  return (
    <>
      <Helmet>
        <title>Quanto costa un sito web nel 2026? Prezzi reali e guida completa | 4 Web Lab</title>
        <meta name="description" content="Quanto costa davvero un sito web nel 2026? Scopri prezzi reali per aziende e professionisti, differenze tra soluzioni economiche e professionali e come evitare errori. Preventivo gratuito." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/quanto-costa-sito-web" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://4weblab.it/quanto-costa-sito-web" />
        <meta property="og:title" content="Quanto costa un sito web nel 2026? Prezzi reali e guida completa" />
        <meta property="og:description" content="Guida chiara ai prezzi dei siti web nel 2026: differenze tra soluzioni economiche e professionali e quanto investire davvero." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quanto costa un sito web nel 2026?" />
        <meta name="twitter:description" content="Prezzi reali per realizzare un sito web professionale nel 2026." />

        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quanto costa un sito vetrina?", "acceptedAnswer": { "@type": "Answer", "text": "Dipende dal numero di pagine e dalla struttura, ma mediamente tra 900€ e 1500€." } },
              { "@type": "Question", "name": "Quanto costa rifare un sito esistente?", "acceptedAnswer": { "@type": "Answer", "text": "Dipende da quanto è recuperabile. In molti casi conviene ripartire da zero." } },
              { "@type": "Question", "name": "Quanto tempo serve per realizzare un sito web?", "acceptedAnswer": { "@type": "Answer", "text": "Da pochi giorni per una soluzione semplice a diverse settimane per progetti più strutturati." } },
              { "@type": "Question", "name": "È meglio acquistare o noleggiare un sito?", "acceptedAnswer": { "@type": "Answer", "text": "Dipende dal budget e dagli obiettivi. Il noleggio permette di partire subito senza investimento iniziale." } },
              { "@type": "Question", "name": "Perché alcuni siti costano così poco?", "acceptedAnswer": { "@type": "Answer", "text": "Perché spesso sono template standard senza strategia, contenuti o ottimizzazione." } }
            ]
          })}
        </script>

        {/* JSON-LD Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "4 Web Lab",
            "url": "https://4weblab.it",
            "logo": "https://4weblab.it/logo.png"
          })}
        </script>
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
                Richiedi una valutazione gratuita
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
              <p className="text-base text-muted-foreground text-balance leading-relaxed mt-6">
                Se cerchi una soluzione completa, puoi approfondire anche i nostri{' '}
                <Link to="/siti-web-aziendali" className="text-accent font-semibold link-underline">
                  siti web aziendali professionali
                </Link>.
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
                        { tipo: 'Noleggio sito web', prezzo: 'da 49€/mese', target: 'Chi vuole evitare investimento iniziale' },
                      ].map((row, idx) => (
                        <tr key={idx} className={`border-b border-border/40 transition-colors hover:bg-accent/5 ${
                          row.tipo === 'Noleggio sito web' 
                            ? 'bg-accent/10 border-l-4 border-l-accent' 
                            : idx % 2 === 1 ? 'bg-muted/40' : 'bg-background'
                        }`}>
                          <td className="py-5 px-6 text-foreground font-semibold text-sm">
                            {row.tipo}
                            {row.tipo === 'Noleggio sito web' && (
                              <span className="ml-2 text-xs font-bold text-accent bg-accent/15 px-2 py-0.5 rounded-full">
                                Più scelto
                              </span>
                            )}
                          </td>
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

        {/* Esempio reale */}
        <section className="py-24 md:py-32" style={{ background: 'hsl(210 22% 94%)' }}>
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto">
              <div className="rounded-2xl p-10 md:p-16 bg-card" style={{ border: '1px solid hsl(210 30% 85%)', boxShadow: '0 12px 40px -8px hsl(210 73% 15% / 0.12), 0 4px 12px -4px hsl(207 90% 54% / 0.08)' }}>
                <span className="inline-block text-xs font-extrabold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-accent/15 text-accent">Esempio reale</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8" style={{ letterSpacing: '-0.02em' }}>
                  Quanto può costare davvero un sito aziendale
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Per fare un esempio concreto, un sito aziendale con più pagine, struttura chiara e contenuti ben organizzati può richiedere un investimento nell'ordine delle migliaia di euro.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  Questo perché non si tratta solo di "avere un sito", ma di progettare uno strumento che rappresenti l'azienda e lavori nel tempo.
                </p>
                <p className="text-xl md:text-2xl font-bold text-foreground text-center leading-snug">
                  La differenza non è nel prezzo, ma nel risultato che ottieni.
                </p>
              </div>
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
                <Link to="/creare-sito-con-intelligenza-artificiale" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1 mt-3">
                  Leggi l'articolo completo <ArrowRight className="w-3 h-3" />
                </Link>
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
              <div className="card-glass p-8 order-2 md:order-1 relative" style={{ border: '2px solid hsl(207 90% 54%)' }}>
                <span className="absolute -top-3 right-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Il più scelto</span>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">PRO</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Il pacchetto completo per una presenza online solida.</p>
                <div className="mb-5">
                  <span className="text-3xl font-serif font-bold text-foreground">69€</span>
                  <span className="text-sm text-muted-foreground ml-1">/mese</span>
                </div>
                <p className="text-xs font-semibold text-muted-foreground mb-3">Pacchetto START più:</p>
                <ul className="space-y-3" role="list">
                  {[
                    'Grafica più curata',
                    'SEO base locale',
                    'Più sezioni e modifiche incluse',
                    'Report mensile',
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
                  href="/#noleggio"
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
                {[
                  { domanda: 'Quanto costa un sito vetrina?', risposta: 'Dipende dal numero di pagine e dalla struttura, ma mediamente tra 900€ e 1.500€.' },
                  { domanda: 'Quanto costa rifare un sito esistente?', risposta: 'Dipende da quanto è recuperabile. In molti casi conviene ripartire da zero.' },
                  { domanda: 'Quanto tempo serve per realizzare un sito web?', risposta: 'Da pochi giorni per una soluzione semplice a diverse settimane per progetti più strutturati.' },
                  { domanda: 'È meglio acquistare o noleggiare un sito?', risposta: 'Dipende dal budget e dagli obiettivi. Il noleggio permette di partire subito senza investimento iniziale.' },
                  { domanda: 'Perché alcuni siti costano così poco?', risposta: 'Perché spesso sono template standard senza strategia, contenuti o ottimizzazione.' },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/60">
                    <AccordionTrigger className="text-left text-foreground text-base py-5 font-semibold">
                      {faq.domanda}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                      {faq.risposta}
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
                Vuoi sapere quanto costerebbe il tuo sito?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 text-balance leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>
                Raccontaci il tuo progetto e ricevi un preventivo chiaro, senza impegno.
              </p>
              <div className="max-w-xl mx-auto text-left">
                <ContactFormWeb3Forms />
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default QuantoCostaSitoWeb;
