import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import {
  Store, SearchX, MessageCircleWarning, ShieldAlert, Globe,
  ArrowRight, CheckCircle2, Check, Smartphone, Zap, MapPin,
  Settings, Award, Euro, HelpCircle, ShoppingBag, Users, Eye,
  Layers, Navigation
} from 'lucide-react';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import storefrontImg from '@/assets/negozi-storefront.jpg';
import mobileSearchImg from '@/assets/negozi-mobile-search.jpg';

const SitiWebNegozi = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contatti-negozi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Siti Web per Negozi a Padova e in Italia | 4 Web Lab</title>
        <meta
          name="description"
          content="Realizziamo siti web professionali per negozi fisici e attività locali a Padova e in tutta Italia. Porta nuovi clienti da Google al tuo punto vendita. Da 299€."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/siti-web-per-negozi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/siti-web-per-negozi" />
        <meta property="og:title" content="Siti Web per Negozi a Padova e in Italia | 4 Web Lab" />
        <meta property="og:description" content="Realizziamo siti web professionali per negozi fisici e attività locali. Porta nuovi clienti da Google al tuo punto vendita. Da 299€." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quanto tempo serve per realizzare un sito web per negozi?",
                "acceptedAnswer": { "@type": "Answer", "text": "Tra 7 e 15 giorni lavorativi." }
              },
              {
                "@type": "Question",
                "name": "Posso modificare il sito del mio negozio?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sì, oppure lo gestiamo noi." }
              },
              {
                "@type": "Question",
                "name": "Il sito del negozio sarà su Google?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sì, il sito è strutturato per essere indicizzato." }
              },
              {
                "@type": "Question",
                "name": "È adatto ai piccoli negozi?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sì, è pensato per attività locali di qualsiasi dimensione." }
              }
            ]
          })}
        </script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">

        {/* ─── HERO ─── */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground">
                Siti Web per Negozi a Padova (e in tutta Italia)
              </h1>
              <p className="body-large text-primary-foreground/80 mb-6 max-w-2xl mx-auto text-balance">
                Realizziamo siti web professionali per negozi fisici e attività locali, pensati per portarti nuovi clienti da Google e trasformare chi ti trova online in visite reali in negozio.
              </p>

              <div className="inline-flex items-center gap-2 text-accent font-semibold bg-accent/10 px-6 py-3 rounded-full mb-8">
                <Euro className="w-5 h-5" aria-hidden="true" />
                <span>Siti web per negozi a partire da 299€</span>
              </div>

              <div>
                <button
                  onClick={handleContactClick}
                  className="btn-primary inline-flex items-center gap-2 px-10 py-5"
                >
                  Richiedi un preventivo gratuito
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-xs text-primary-foreground/50 mt-3">Risposta entro 24h – senza impegno</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ─── PERCHÉ UN NEGOZIO HA BISOGNO DI UN SITO ─── */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Store className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché oggi un negozio senza sito web perde clienti ogni giorno</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-8" delay={0.1}>
                <p>
                  Sempre più persone cercano prodotti e negozi su Google prima di uscire di casa. Se il tuo negozio non ha un sito web professionale, semplicemente non esisti per chi sta cercando proprio quello che vendi.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                {[
                  {
                    icon: SearchX,
                    title: 'Sei invisibile su Google',
                    description: 'Se qualcuno cerca il tuo prodotto a Padova e non trova il tuo negozio, troverà quello di un concorrente.',
                  },
                  {
                    icon: MessageCircleWarning,
                    title: 'I social non bastano',
                    description: 'Facebook e Instagram aiutano, ma non sostituiscono un sito web strutturato e trovabile su Google.',
                  },
                  {
                    icon: ShieldAlert,
                    title: 'Perdi fiducia',
                    description: 'Un cliente si fida molto di più di un negozio con un sito chiaro, aggiornato e professionale.',
                  },
                  {
                    icon: Globe,
                    title: 'Non controlli la tua presenza online',
                    description: 'Il sito è l\'unico spazio davvero tuo, non dipendi da piattaforme esterne.',
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400">
                      <div className="icon-box w-12 h-12 rounded-2xl mb-4">
                        <item.icon className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2.5">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ─── COSA REALIZZIAMO ─── */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Layers className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa realizziamo per il tuo negozio</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-10" delay={0.1}>
                <p>
                  Non creiamo semplici siti vetrina, ma strumenti pensati per aiutarti a portare clienti reali nel tuo punto vendita.
                </p>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left">
                  <img
                    src={storefrontImg}
                    alt="Negozio con vetrina curata che rappresenta la realizzazione siti web per negozi"
                    className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                  />
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <StaggerContainer className="space-y-3" staggerDelay={0.08}>
                    {[
                      'Presentazione del negozio',
                      'Schede prodotti o categorie',
                      'Orari e contatti',
                      'Google Maps integrata',
                      'Pulsante WhatsApp',
                      'Collegamenti social',
                      'Struttura ottimizzata per Google',
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{item}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SITI PER NEGOZI LOCALI ─── */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Siti web progettati per negozi locali</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground order-2 md:order-1" direction="left">
                  <p className="mb-8">
                    Un sito per negozio deve essere semplice, veloce e immediato. L'obiettivo è portare il cliente in negozio nel minor tempo possibile.
                  </p>
                  <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                    {[
                      { icon: Navigation, text: 'Navigazione semplice' },
                      { icon: Smartphone, text: 'Ottimizzato mobile' },
                      { icon: Zap, text: 'Caricamento veloce' },
                      { icon: MapPin, text: 'SEO locale (ricerche tipo "negozio + città")' },
                    ].map((item, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-center gap-4 p-5 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                          <div className="icon-box w-10 h-10 rounded-xl flex-shrink-0">
                            <item.icon className="w-5 h-5 text-accent-foreground" aria-hidden="true" />
                          </div>
                          <span className="font-semibold text-foreground">{item.text}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </AnimatedSection>
                <AnimatedSection className="order-1 md:order-2" direction="right">
                  <img
                    src={mobileSearchImg}
                    alt="Ricerca locale su smartphone per trovare negozi nella zona"
                    className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1280}
                    height={960}
                  />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENEFICI ─── */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa ottieni con un sito web per il tuo negozio</h2>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
                {[
                  {
                    icon: Users,
                    title: 'Più clienti dal web',
                    description: 'Chi cerca i tuoi prodotti online può trovarti facilmente.',
                  },
                  {
                    icon: Award,
                    title: 'Maggiore credibilità',
                    description: 'Un sito professionale trasmette fiducia immediata.',
                  },
                  {
                    icon: ShoppingBag,
                    title: 'Più visite in negozio',
                    description: 'Il sito diventa un ponte tra online e punto vendita.',
                  },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400 text-center p-10 border border-border/50 shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-card-hover)]">
                      <div className="icon-box w-16 h-16 mx-auto mb-5">
                        <item.icon className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ─── PREZZO ─── */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Euro className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Quanto costa un sito web per negozi</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="card-glass p-10 relative overflow-hidden" style={{ border: '1px solid hsl(210 30% 88%)', boxShadow: '0 8px 32px -4px hsl(210 73% 15% / 0.12), 0 2px 8px -2px hsl(210 73% 15% / 0.07)' }}>
                  <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wide" style={{ background: 'var(--gradient-accent)', color: 'white' }}>
                    SITO COMPLETO
                  </div>
                  <div className="text-center mb-10">
                    <span className="text-sm text-muted-foreground block mb-2">a partire da</span>
                    <span className="text-5xl md:text-6xl font-serif font-bold text-foreground">€299</span>
                    <p className="text-muted-foreground text-sm mt-2">IVA esclusa</p>
                  </div>
                  <ul className="space-y-4 mb-10 max-w-md mx-auto" role="list">
                    {[
                      'Sito completo',
                      'Design professionale',
                      'Ottimizzazione base Google',
                      'Versione mobile',
                      'Inserimento contenuti',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                        </span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground text-center mb-6">Il prezzo varia in base alle esigenze.</p>
                  <div className="text-center">
                    <button
                      onClick={handleContactClick}
                      className="btn-primary inline-flex items-center gap-2.5 px-10 py-5 text-base"
                    >
                      Richiedi un preventivo gratuito
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <HelpCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Domande frequenti sui siti web per negozi</h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {[
                    { question: 'Quanto tempo serve?', answer: 'I tempi di realizzazione variano in base alla complessità del sito, ma per la maggior parte dei negozi riusciamo a consegnare il progetto completo in 7-15 giorni lavorativi. In questo tempo includiamo progettazione, sviluppo e inserimento dei contenuti iniziali.' },
                    { question: 'Posso modificarlo?', answer: 'Sì, il sito può essere progettato per essere aggiornato in autonomia in modo semplice. In alternativa, puoi affidare a noi la gestione e gli aggiornamenti, così non devi preoccuparti di nulla e hai sempre un sito aggiornato e funzionante.' },
                    { question: 'Sarò su Google?', answer: 'Il sito viene strutturato per essere correttamente indicizzato su Google, con una base SEO solida pensata per le ricerche locali. Questo significa che il tuo negozio può comparire quando qualcuno cerca i tuoi prodotti o servizi nella tua zona.' },
                    { question: 'È adatto ai piccoli negozi?', answer: 'Assolutamente sì. Questo tipo di sito è pensato proprio per negozi locali, attività indipendenti e piccole realtà che vogliono migliorare la propria presenza online senza investimenti complessi o soluzioni inutilmente complicate.' },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`} className="rounded-2xl border border-border bg-accent/3 px-6 transition-all duration-300 hover:border-accent/15 hover:bg-accent/6">
                      <AccordionTrigger className="text-left py-5 hover:no-underline">
                        <h3 className="font-semibold text-foreground text-base pr-4">{faq.question}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── METODO ─── */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il nostro metodo di lavoro</h2>
              </AnimatedSection>
              <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                {[
                  { step: '01', title: 'Analisi del negozio', description: 'Studiamo la tua attività, i tuoi prodotti e il pubblico di riferimento per definire la struttura ideale.' },
                  { step: '02', title: 'Struttura del sito', description: 'Progettiamo l\'architettura delle pagine, la navigazione e i contenuti per massimizzare l\'efficacia.' },
                  { step: '03', title: 'Realizzazione', description: 'Sviluppiamo il sito con tecnologie moderne, design professionale e ottimizzazione per dispositivi mobili.' },
                  { step: '04', title: 'Pubblicazione', description: 'Mettiamo online il sito, configuriamo Google e ti forniamo il supporto per la gestione.' },
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                      <div className="icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* ─── PERCHÉ SCEGLIERCI ─── */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché scegliere 4 Web Lab</h2>
              </AnimatedSection>
              <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                {[
                  'Specializzati in attività locali e negozi fisici',
                  'Approccio semplice e diretto, senza complicazioni',
                  'Niente tecnicismi inutili: pensiamo noi a tutto',
                  'Supporto diretto e veloce via WhatsApp o telefono',
                  'Clienti in tutta Italia, con un metodo collaudato da remoto',
                ].map((item, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <AnimatedSection delay={0.2}>
                <div className="mt-8 space-y-4">
                  <Link to="/siti-web-aziendali" className="block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Ho bisogno di un sito web per la mia azienda →</span>
                  </Link>
                  <Link to="/realizzazione-siti-web-per-professionisti" className="block p-5 rounded-2xl border border-border/60 bg-white hover:border-accent/30 hover:shadow-md transition-all duration-300 group">
                    <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">Cerco un sito per la mia attività professionale →</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ─── CTA FINALE ─── */}
        <section id="contatti-negozi" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="negozi-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#negozi-cta-noise)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h2 className="heading-2 text-primary-foreground mb-6">Richiedi un preventivo per il tuo sito web</h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Raccontaci il tuo negozio e ti proponiamo la soluzione più adatta, senza impegno.
                </p>
                <div className="text-center">
                  <a
                    href="https://wa.me/393514656042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                      <circle cx="256" cy="256" r="256" fill="#25D366" />
                      <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" />
                    </svg>
                    Scrivici su WhatsApp
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

export default SitiWebNegozi;
