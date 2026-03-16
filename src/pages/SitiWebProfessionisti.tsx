import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { ArrowRight, CheckCircle2, Users, Target, Settings, Award, MessageCircle } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';

const SitiWebProfessionisti = () => {
  const handleContactClick = () => {
    window.location.href = '/#contatti';
  };

  return (
    <>
      <Helmet>
        <title>Realizzazione siti web per professionisti | 4weblab</title>
        <meta
          name="description"
          content="Realizziamo siti web professionali per professionisti e studi professionali in tutta Italia. Metodo strutturato, lavoro da remoto, risultati concreti." />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/realizzazione-siti-web-per-professionisti" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/realizzazione-siti-web-per-professionisti" />
        <meta property="og:title" content="Realizzazione siti web per professionisti | 4weblab" />
        <meta property="og:description" content="Realizziamo siti web professionali per professionisti e studi professionali in tutta Italia. Metodo strutturato, lavoro da remoto, risultati concreti." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-8 font-extrabold tracking-tight text-primary-foreground">
                Realizzazione siti web per professionisti
              </h1>
              <p className="body-large text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-balance">In 4weblab realizziamo siti web per professionisti e studi professionali in tutta Italia. Il nostro approccio si fonda su un metodo strutturato, pensato per garantire affidabilità, chiarezza e risultati concreti nella crescita online. Lavoriamo da remoto con un processo organizzato che permette collaborazioni efficaci ovunque ti trovi.
              </p>
              <button
                onClick={() => document.getElementById('contatti-professionisti')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary inline-flex items-center gap-2 mt-2 px-10 py-5"
              >
                Contattaci
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* A chi è rivolto */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">A chi è rivolto il servizio</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Il nostro servizio di realizzazione siti web per professionisti è pensato per chi opera nel mondo delle
                  libere professioni e degli studi professionali. Ci rivolgiamo a:
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                  {[
                  'Consulenti e liberi professionisti che desiderano presentarsi online in modo autorevole',
                  'Studi professionali (legali, commercialisti, architetti, ingegneri, notai) che necessitano di un sito web professionale',
                  'Tecnici e periti che vogliono ampliare la propria visibilità sul territorio nazionale',
                  'Professionisti indipendenti alla ricerca di una presenza digitale strutturata e affidabile'].
                  map((item, index) =>
                  <StaggerItem key={index}>
                      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    </StaggerItem>
                  )}
                </StaggerContainer>
                <p>
                  Indipendentemente dal settore di appartenenza, il nostro obiettivo è offrire siti web per professionisti
                  che riflettano competenza, serietà e attenzione al cliente.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Cosa deve comunicare un sito */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Target className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa deve comunicare un sito web per professionisti</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-7">
                  Un sito web professionale per chi opera nel mondo delle professioni deve trasmettere valori fondamentali
                  che generano fiducia e facilitano il contatto con potenziali clienti. Ecco gli elementi chiave:
                </p>
                <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-8" staggerDelay={0.1}>
                  {[
                  {
                    title: 'Autorevolezza',
                    description: 'Il sito deve riflettere la competenza e l\'esperienza del professionista, creando una prima impressione solida e credibile.'
                  },
                  {
                    title: 'Chiarezza dei servizi',
                    description: 'I servizi offerti devono essere presentati in modo chiaro e comprensibile, permettendo al visitatore di capire immediatamente cosa può aspettarsi.'
                  },
                  {
                    title: 'Fiducia e affidabilità',
                    description: 'Elementi come testimonianze, certificazioni e una comunicazione trasparente contribuiscono a costruire un rapporto di fiducia.'
                  },
                  {
                    title: 'Semplicità di contatto',
                    description: 'Form di contatto, numeri di telefono e call-to-action ben visibili facilitano la conversione del visitatore in cliente.'
                  }].
                  map((item, index) =>
                  <StaggerItem key={index}>
                      <div className="card-glass h-full hover:-translate-y-1.5 transition-all duration-400">
                        <h3 className="font-bold text-foreground mb-2.5">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </StaggerItem>
                  )}
                </StaggerContainer>
                <p>
                  Un sito web per professionisti ben progettato diventa uno strumento di lavoro essenziale,
                  capace di attrarre nuovi clienti e consolidare la reputazione professionale.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Il nostro metodo */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il nostro metodo di lavoro</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-8">
                  In 4weblab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato,
                  ideale per collaborazioni da remoto con professionisti in tutta Italia. Il nostro processo
                  garantisce trasparenza in ogni fase:
                </p>
                <StaggerContainer className="space-y-5 mb-8" staggerDelay={0.1}>
                  {[
                  {
                    step: '01',
                    title: 'Analisi e briefing',
                    description: 'Raccogliamo le informazioni sulla tua attività, i tuoi obiettivi e il pubblico di riferimento attraverso un confronto strutturato.'
                  },
                  {
                    step: '02',
                    title: 'Progettazione',
                    description: 'Definiamo la struttura del sito, l\'architettura delle informazioni e il design in linea con la tua identità professionale.'
                  },
                  {
                    step: '03',
                    title: 'Sviluppo',
                    description: 'Realizziamo il sito web professionale con tecnologie moderne, garantendo velocità, sicurezza e ottimizzazione SEO.'
                  },
                  {
                    step: '04',
                    title: 'Revisione e lancio',
                    description: 'Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo formazione per la gestione.'
                  }].
                  map((item, index) =>
                  <StaggerItem key={index}>
                      <div className="flex gap-5 items-start p-6 rounded-2xl bg-accent/3 border border-accent/8 transition-all duration-400 hover:bg-accent/6 hover:border-accent/15">
                        <div className="icon-box w-12 h-12 rounded-full flex-shrink-0 text-sm font-bold text-accent-foreground">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1.5">{item.title}</h3>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  )}
                </StaggerContainer>
                <p>
                  Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per professionisti
                  ovunque si trovino, mantenendo comunicazione costante e tempi certi.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Perché scegliere 4weblab */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Award className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché scegliere 4weblab</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-6">
                  Siamo una realtà strutturata specializzata nella realizzazione di siti web per professionisti.
                  Ecco cosa ci distingue:
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                  {[
                  'Approccio consulenziale: non vendiamo solo un sito, ma una soluzione pensata per i tuoi obiettivi',
                  'Esperienza nel settore professionale: conosciamo le esigenze specifiche di chi opera nelle libere professioni',
                  'Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto',
                  'Attenzione ai risultati: ogni sito è progettato per generare fiducia e facilitare il contatto con nuovi clienti',
                  'Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace'].
                  map((item, index) =>
                  <StaggerItem key={index}>
                      <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    </StaggerItem>
                  )}
                </StaggerContainer>
                <p>
                  Scegliere 4weblab significa affidarsi a un partner affidabile per la realizzazione di un sito web professionale
                  che rappresenti al meglio la tua attività professionale.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contatti-professionisti" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          {/* Noise texture */}
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="sat-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#sat-cta-noise)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Box sinistra - CTA */}
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h2 className="heading-2 text-primary-foreground mb-6">Richiedi un preventivo per il tuo sito web professionale</h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Vuoi realizzare un sito web per professionisti che ti rappresenti al meglio?
                  Contattaci per un confronto senza impegno: lavoriamo con professionisti in tutta Italia.
                </p>
                <div className="text-center">
                  <a <a href="https://wa.me/393514656042" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"> target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                      <circle cx="256" cy="256" r="256" fill="#25D366"/>
                      <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z"/>
                    </svg>
                    Scrivici su Whatsapp
                  </a>
                  <p className="text-xs text-primary-foreground/50 mt-2 text-center"><strong>Richiede WhatsApp Web su PC</strong></p>
                </div>
              </div>

              {/* Box destra - Form */}
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8">
                <ContactFormWeb3Forms />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      
    </>);

};

export default SitiWebProfessionisti;