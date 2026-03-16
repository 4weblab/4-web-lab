import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ArrowLeft, Check, X, AlertTriangle, Lightbulb, Euro, HelpCircle, MessageCircle } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';

const faqData = [
  {
    question: 'È possibile creare un sito professionale con l\'intelligenza artificiale?',
    answer: 'Sì, è possibile creare un sito con l\'intelligenza artificiale. Tuttavia, nella maggior parte dei casi si tratta di una struttura generica che non tiene conto del mercato specifico dell\'attività.\n\nUn sito professionale richiede studio del settore, struttura strategica e impostazione SEO corretta.',
  },
  {
    question: 'Un sito creato con AI si posiziona su Google?',
    answer: 'Un sito creato con AI può essere indicizzato su Google, ma non significa che si posizionerà bene.\n\nIl posizionamento dipende da struttura tecnica, parole chiave e strategia locale.',
  },
  {
    question: 'Quanto costa realmente un sito con AI?',
    answer: 'Un sito con AI può sembrare economico all\'inizio, ma spesso comporta costi ricorrenti.\n\nTra abbonamenti, dominio e tempo investito, il costo reale può avvicinarsi a quello di un sito professionale senza offrire la stessa impostazione strategica.',
  },
  {
    question: 'Quando conviene affidarsi a un professionista?',
    answer: 'Conviene affidarsi a un professionista quando l\'obiettivo non è solo "avere un sito", ma ottenere risultati concreti.\n\nUn sito progettato correttamente fin dall\'inizio evita errori tecnici e migliora la visibilità.',
  },
];

const comparisonRows = [
  { ai: { text: 'Creato in pochi minuti', positive: true }, pro: { text: 'Strutturato sul tuo settore', positive: true } },
  { ai: { text: 'Testi automatici generici', positive: false }, pro: { text: 'Testi scritti per convincere', positive: true } },
  { ai: { text: 'Layout standard', positive: false }, pro: { text: 'Design coerente con il brand', positive: true } },
  { ai: { text: 'Nessuna strategia SEO reale', positive: false }, pro: { text: 'Impostazione SEO corretta', positive: true } },
  { ai: { text: 'Rischio invisibilità', positive: false }, pro: { text: 'Maggiori possibilità di risultati', positive: true } },
];

const CreareSitoConAI = () => {
  const handleContactClick = () => {
    document.getElementById('contatti-ai')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Creare un Sito con l'Intelligenza Artificiale Conviene Davvero? Guida 2026</title>
        <meta name="description" content="Scopri se creare un sito con l'intelligenza artificiale è davvero conveniente per la tua attività. Pro e contro spiegati in modo semplice e concreto." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.4weblab.it/creare-sito-con-intelligenza-artificiale" />

        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.4weblab.it/creare-sito-con-intelligenza-artificiale" />
        <meta property="og:title" content="Creare un Sito con l'Intelligenza Artificiale Conviene Davvero?" />
        <meta property="og:description" content="Un sito creato con l'AI è davvero la scelta migliore per la tua attività? Scopri differenze, costi reali e alternative professionali spiegate in modo semplice." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.4weblab.it/creare-sito-con-intelligenza-artificiale" />
        <meta name="twitter:title" content="Creare un Sito con l'Intelligenza Artificiale Conviene Davvero?" />
        <meta name="twitter:description" content="Un sito creato con l'AI è davvero la scelta migliore per la tua attività? Scopri differenze, costi reali e alternative professionali spiegate in modo semplice." />
        <meta name="twitter:image" content="https://4weblab.it/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground">
                Creare un Sito con l'Intelligenza Artificiale Conviene Davvero?
              </h1>
              <p className="body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">
                Oggi puoi generare un sito in pochi minuti con l'AI. Ma sarà davvero utile per la tua attività?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={handleContactClick} className="btn-primary inline-flex items-center gap-2 px-10 py-5">
                  Richiedi una consulenza gratuita
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/" className="btn-outline inline-flex items-center gap-2 px-10 py-5">
                  <ArrowLeft className="w-4 h-4" />
                  Torna alla Home
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Sezione 1 – Cosa fa davvero un sito AI */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Lightbulb className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa fa davvero un sito creato con l'AI</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Un generatore AI può creare una grafica base, scrivere testi generici e pubblicare una struttura online in pochi minuti.
                </p>
                <p className="mb-6">
                  Ma non può studiare il tuo mercato locale, analizzare i tuoi concorrenti, definire il tuo posizionamento o costruire una struttura pensata per trasformare visitatori in clienti.
                </p>
                <p className="font-semibold text-foreground">
                  Un sito automatico è una base grafica.<br />
                  Un sito professionale è uno strumento di lavoro.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 2 – Confronto */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <AlertTriangle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="heading-2">Confronto diretto</h3>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-10" delay={0.1}>
                <p>
                  Per capire meglio la differenza tra un sito creato automaticamente e uno progettato da un professionista, ecco un confronto chiaro e immediato.
                </p>
              </AnimatedSection>

              {/* Desktop table */}
              <AnimatedSection delay={0.2}>
                <div className="hidden md:block card-glass overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left p-5 text-sm font-semibold text-muted-foreground uppercase tracking-wider w-1/2">Sito con AI</th>
                        <th className="text-left p-5 text-sm font-semibold text-muted-foreground uppercase tracking-wider w-1/2">Sito vetrina professionale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={i} className={i < comparisonRows.length - 1 ? 'border-b border-border/20' : ''}>
                          <td className="p-5">
                            <div className="flex items-center gap-3">
                              {row.ai.positive ? (
                                <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(142 71% 45%)' }} />
                              ) : (
                                <X className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(0 84% 60%)' }} />
                              )}
                              <span className="text-foreground">{row.ai.text}</span>
                            </div>
                          </td>
                          <td className="p-5">
                            <div className="flex items-center gap-3">
                              {row.pro.positive ? (
                                <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(142 71% 45%)' }} />
                              ) : (
                                <X className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(0 84% 60%)' }} />
                              )}
                              <span className="text-foreground">{row.pro.text}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden space-y-4">
                  {comparisonRows.map((row, i) => (
                    <div key={i} className="card-glass !p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        {row.ai.positive ? (
                          <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(142 71% 45%)' }} />
                        ) : (
                          <X className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(0 84% 60%)' }} />
                        )}
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sito con AI</span>
                          <p className="text-foreground">{row.ai.text}</p>
                        </div>
                      </div>
                      <div className="border-t border-border/20 pt-3 flex items-center gap-3">
                        {row.pro.positive ? (
                          <Check className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(142 71% 45%)' }} />
                        ) : (
                          <X className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(0 84% 60%)' }} />
                        )}
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Sito professionale</span>
                          <p className="text-foreground">{row.pro.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 3 – Esempio reale */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Un esempio reale</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Un parrucchiere a Padova non ha bisogno di un sito generico.<br />
                  Ha bisogno di farsi trovare quando qualcuno cerca "parrucchiere zona X".
                </p>
                <p className="font-semibold text-foreground">
                  L'intelligenza artificiale genera una pagina.<br />
                  Un professionista costruisce una struttura pensata per farsi trovare.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 4 – Costi */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Euro className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">E dal punto di vista dei costi?</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Molti pensano che l'AI sia gratuita.<br />
                  In realtà spesso comporta:
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                  {[
                    'Abbonamento mensile',
                    'Dominio',
                    'Hosting',
                    'Tempo di gestione',
                    'Correzioni successive',
                  ].map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-destructive/5 border border-destructive/10">
                        <X className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(0 84% 60%)' }} />
                        <span className="text-foreground">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p>
                  Un sito vetrina professionale, impostato correttamente fin dall'inizio, può avere un costo contenuto ma generare risultati concreti nel tempo.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sezione 5 – FAQ */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti</h2>
              </AnimatedSection>
              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                {faqData.map((faq, index) => (
                  <StaggerItem key={index}>
                    <div className="card-glass">
                      <h3 className="heading-3 mb-4">{faq.question}</h3>
                      {faq.answer.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Sezione finale – CTA + Form */}
        <section id="contatti-ai" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="ai-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#ai-cta-noise)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="heading-2 text-primary-foreground mb-6">
                Vuoi solo una pagina online o uno strumento per lavorare meglio?
              </h2>
              <p className="body-large text-primary-foreground/70 max-w-2xl mx-auto">
                Se il tuo obiettivo è semplicemente essere online, qualsiasi generatore automatico può creare una pagina.
                Se invece vuoi uno strumento che rappresenti davvero la tua attività e ti aiuti a ottenere risultati concreti, è importante partire con basi corrette.
              </p>
            </AnimatedSection>
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch" delay={0.2}>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h3 className="heading-3 text-primary-foreground mb-6">Parliamone senza impegno</h3>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Vuoi capire se un sito professionale può fare la differenza per la tua attività? Contattaci per un confronto gratuito.
                </p>
                <div className="text-center">
                  <a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                      <circle cx="256" cy="256" r="256" fill="#25D366" />
                      <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" />
                    </svg>
                    Scrivici su Whatsapp
                  </a>
                  <p className="text-xs text-primary-foreground/50 mt-2"><strong>Richiede WhatsApp Web su PC</strong></p>
                </div>
              </div>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
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

export default CreareSitoConAI;
