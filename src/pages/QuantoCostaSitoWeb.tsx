import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Check, HelpCircle, ArrowRight, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const QuantoCostaSitoWeb = () => {
  return (
    <>
      <Helmet>
        <title>Quanto Costa un Sito Web nel 2026? Prezzi Reali e Guida | 4 Web Lab</title>
        <meta name="description" content="Scopri i prezzi reali 2026 per un sito web professionale: confronto tra costi medi in Italia e i nostri prezzi a partire da 249€. Guida completa e preventivo gratuito." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026" />
        <meta property="og:title" content="Quanto Costa un Sito Web nel 2026? Prezzi Reali e Guida | 4 Web Lab" />
        <meta property="og:description" content="Scopri i prezzi reali 2026 per un sito web professionale: confronto tra costi medi in Italia e i nostri prezzi a partire da 249€. Guida completa e preventivo gratuito." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="4 Web Lab" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://4weblab.it/blog/quanto-costa-un-sito-web-nel-2026" />
        <meta name="twitter:title" content="Quanto costa un sito web nel 2026?" />
        <meta name="twitter:description" content="Prezzi reali per realizzare un sito web professionale nel 2026." />
        <meta name="twitter:image" content="https://4weblab.it/og-image.jpg" />

        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Quanto costa un sito web aziendale in Italia?", "acceptedAnswer": { "@type": "Answer", "text": "Il costo di un sito web aziendale in Italia varia in base a struttura, contenuti e obiettivi. Un sito semplice può partire da alcune centinaia di euro, mentre un sito aziendale strutturato richiede un investimento più alto per garantire qualità e risultati." } },
              { "@type": "Question", "name": "Quanto costa mantenere un sito web aziendale?", "acceptedAnswer": { "@type": "Answer", "text": "I costi di mantenimento includono hosting, dominio ed eventuali aggiornamenti. In molti casi sono contenuti, ma è fondamentale mantenere il sito aggiornato e funzionante nel tempo." } },
              { "@type": "Question", "name": "Ci sono costi nascosti nella realizzazione di un sito web?", "acceptedAnswer": { "@type": "Answer", "text": "Un progetto professionale è sempre chiaro fin dall'inizio. I costi possono variare solo in caso di richieste aggiuntive, ma non dovrebbero esserci sorprese se il lavoro è impostato correttamente." } },
              { "@type": "Question", "name": "Quanto tempo serve per realizzare un sito web aziendale?", "acceptedAnswer": { "@type": "Answer", "text": "Dipende dalla complessità del progetto. Un sito semplice può essere realizzato in pochi giorni, mentre un sito più strutturato richiede più tempo per essere progettato e sviluppato in modo efficace." } },
              { "@type": "Question", "name": "Quanto dura un sito web aziendale nel tempo?", "acceptedAnswer": { "@type": "Answer", "text": "Un sito ben realizzato può durare diversi anni. È comunque importante aggiornarlo periodicamente per mantenerlo efficace e in linea con le esigenze dell'azienda." } },
              { "@type": "Question", "name": "Conviene spendere poco o investire in un sito web?", "acceptedAnswer": { "@type": "Answer", "text": "Un sito economico può sembrare conveniente all'inizio, ma spesso porta a risultati limitati. Un investimento corretto permette invece di avere uno strumento che lavora davvero per l'azienda nel tempo." } }
            ]
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
                Quanto Costa un Sito Web nel 2026? Prezzi Reali e Guida Completa
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
                Quanto costa davvero un sito web nel 2026 (prezzi aggiornati)
              </h2>
              <p className="text-lg text-muted-foreground text-balance mb-6 leading-relaxed">
                Nel 2026 creare un sito web non è difficile. Farne uno che porta clienti, sì. Online trovi builder automatici con AI e piattaforme "fai da te" che promettono risultati immediati. Ma nella maggior parte dei casi il risultato è sempre lo stesso: un sito che esiste, ma non serve e non fa il suo lavoro.
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

        {/* 3 — Sezione Prezzi: card confronto */}
        <section className="py-20 md:py-28" style={{ background: 'hsl(210 25% 98%)' }}>
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                Prezzi reali dei siti web in Italia: confronto
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Quanto costa davvero un sito web e quanto puoi risparmiare
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
              {[
                {
                  title: 'Sito web per negozi',
                  description: 'Ideale per negozi fisici e attività locali che vogliono farsi trovare su Google e portare clienti in negozio.',
                  prezzoMedio: '1200€ – 2500€',
                  tuoPrezzo: '299€',
                  highlighted: false,
                  link: '/siti-web-per-negozi',
                },
                {
                  title: 'Sito web per professionisti',
                  description: 'Perfetto per liberi professionisti e studi che vogliono presentarsi online in modo professionale e acquisire nuovi contatti.',
                  prezzoMedio: '800€ – 1800€',
                  tuoPrezzo: '249€',
                  highlighted: false,
                  link: '/realizzazione-siti-web-per-professionisti',
                },
                {
                  title: 'Sito web aziendale',
                  description: 'Pensato per aziende strutturate che hanno bisogno di un sito completo, credibile e scalabile nel tempo.',
                  prezzoMedio: '1500€ – 4000€',
                  tuoPrezzo: '799€',
                  highlighted: true,
                  badge: 'Soluzione più scelta',
                  link: '/siti-web-aziendali',
                },
              ].map((card, idx) => (
                <StaggerItem key={idx}>
                  <div
                    className={`relative rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 bg-card ${
                      card.highlighted
                        ? 'ring-2 ring-accent/40 scale-[1.02] md:scale-105'
                        : 'hover:shadow-xl'
                    }`}
                    style={{
                      border: card.highlighted ? '2px solid hsl(207 90% 54%)' : '1px solid hsl(210 30% 88%)',
                      boxShadow: card.highlighted
                        ? '0 12px 40px -8px hsl(207 90% 54% / 0.18), 0 4px 12px -4px hsl(207 90% 54% / 0.1)'
                        : '0 4px 20px -4px hsl(210 73% 15% / 0.08)',
                    }}
                  >
                    {card.highlighted && card.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                        {card.badge}
                      </span>
                    )}

                    <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{card.description}</p>

                    {/* Prezzo medio */}
                    <div className="mb-4 pb-4 border-b border-border/50">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">Prezzo medio in Italia</p>
                      <p className="text-lg font-bold text-muted-foreground/70 line-through">{card.prezzoMedio}</p>
                    </div>

                    {/* Tuo prezzo */}
                    <div className="text-center py-3 rounded-xl bg-accent/8">
                      <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">A partire da</p>
                      <p className="text-3xl font-serif font-bold text-accent">{card.tuoPrezzo}</p>
                    </div>

                    <Link
                      to={card.link}
                      className="mt-6 text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1 justify-center"
                    >
                      Scopri di più <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Blocco rinforzo */}
            <AnimatedSection className="max-w-3xl mx-auto mt-16" delay={0.3}>
              <div className="card-glass p-8 md:p-10" style={{ border: '1px solid hsl(210 30% 85%)', boxShadow: '0 8px 32px -4px hsl(210 73% 15% / 0.1)' }}>
                <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Perché c'è questa differenza di prezzo?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Molte agenzie applicano prezzi elevati per coprire strutture interne complesse, costi di gestione e processi poco ottimizzati.
                  Noi lavoriamo in modo più diretto e snello, eliminando passaggi inutili e concentrandoci solo su ciò che serve davvero al cliente.
                </p>
                <p className="text-foreground font-bold">
                  Risultato: un sito professionale, senza costi gonfiati.
                </p>
              </div>
            </AnimatedSection>

            {/* Micro copy */}
            <p className="text-center text-lg md:text-xl font-serif italic text-foreground mt-10 max-w-2xl mx-auto">
              La differenza non è nel prezzo, ma in come viene costruito il progetto.
            </p>

            <p className="text-center text-sm text-muted-foreground mt-6">I prezzi possono variare in base alla complessità del progetto, ai contenuti e al livello di personalizzazione.</p>
          </div>
        </section>

        {/* Esempio reale */}
        <section className="py-24 md:py-32" style={{ background: 'hsl(210 22% 94%)' }}>
          <div className="container-section">
            <AnimatedSection className="max-w-2xl mx-auto">
              <div className="rounded-2xl p-10 md:p-16 bg-card" style={{ border: '1px solid hsl(210 30% 85%)', boxShadow: '0 12px 40px -8px hsl(210 73% 15% / 0.12), 0 4px 12px -4px hsl(207 90% 54% / 0.08)' }}>
                <span className="inline-block text-xs font-extrabold tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full bg-accent/15 text-accent">Esempio reale</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-8" style={{ letterSpacing: '-0.02em' }}>
                  Quanto può costare davvero un <Link to="/siti-web-aziendali" className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors">sito aziendale</Link>
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
                I siti creati solo con AI: costi reali e limiti
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
                <Link to="/blog/siti-web-creati-con-intelligenza-artificiale" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1 mt-3">
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


        {/* 8 — FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-section">
            <AnimatedSection className="text-center mb-14">
              <div className="section-divider" />
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-5" style={{ letterSpacing: '-0.02em' }}>
                Domande frequenti sul costo di un sito web
              </h2>
            </AnimatedSection>

            <AnimatedSection className="max-w-3xl mx-auto" delay={0.15}>
              <Accordion type="single" collapsible className="w-full">
                {[
                  { domanda: 'Quanto costa un sito web aziendale in Italia?', risposta: 'Il costo di un sito web aziendale in Italia varia in base a struttura, contenuti e obiettivi. Un sito semplice può partire da alcune centinaia di euro, mentre un sito aziendale strutturato richiede un investimento più alto per garantire qualità e risultati.' },
                  { domanda: 'Quanto costa mantenere un sito web aziendale?', risposta: 'I costi di mantenimento includono hosting, dominio ed eventuali aggiornamenti. In molti casi sono contenuti, ma è fondamentale mantenere il sito aggiornato e funzionante nel tempo.' },
                  { domanda: 'Ci sono costi nascosti nella realizzazione di un sito web?', risposta: 'Un progetto professionale è sempre chiaro fin dall\'inizio. I costi possono variare solo in caso di richieste aggiuntive, ma non dovrebbero esserci sorprese se il lavoro è impostato correttamente.' },
                  { domanda: 'Quanto tempo serve per realizzare un sito web aziendale?', risposta: 'Dipende dalla complessità del progetto. Un sito semplice può essere realizzato in pochi giorni, mentre un sito più strutturato richiede più tempo per essere progettato e sviluppato in modo efficace.' },
                  { domanda: 'Quanto dura un sito web aziendale nel tempo?', risposta: 'Un sito ben realizzato può durare diversi anni. È comunque importante aggiornarlo periodicamente per mantenerlo efficace e in linea con le esigenze dell\'azienda.' },
                  { domanda: 'Conviene spendere poco o investire in un sito web?', risposta: 'Un sito economico può sembrare conveniente all\'inizio, ma spesso porta a risultati limitati. Un investimento corretto permette invece di avere uno strumento che lavora davvero per l\'azienda nel tempo.' },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border/60">
                    <AccordionTrigger className="text-left text-foreground text-base py-5 font-semibold">
                      <h3 className="text-base font-semibold">{faq.domanda}</h3>
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
        <section id="contatti" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
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
