import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Building2, TrendingUp, Layers, Settings, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactFormWeb3Forms from '@/components/ContactFormWeb3Forms';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import mockupImg from '@/assets/aziendali-mockup.jpg';
import teamImg from '@/assets/aziendali-team.jpg';

const SitiWebAziendali = () => {
  const handleContactClick = () => {
    const el = document.getElementById('contatti-aziendali');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Siti web aziendali strutturati e multipagina | 4weblab</title>
        <meta
          name="description"
          content="Realizziamo siti web aziendali strutturati e multipagina per aziende e PMI in tutta Italia. Architetture scalabili, design professionale e ottimizzazione SEO." />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.4weblab.it/siti-web-aziendali" />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-surface)' }}>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h1 className="heading-1 mb-8">
                Siti web aziendali strutturati e multipagina
              </h1>
              <p className="body-large text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">Realizziamo siti web per aziende in tutta Italia, con architetture strutturate, scalabili e orientate alla crescita. Un sito web aziendale ben progettato è il primo passo per consolidare la presenza online della tua impresa.



              </p>
              <button onClick={handleContactClick} className="btn-primary inline-flex items-center gap-2">
                Contattaci ora
                <ArrowRight className="w-4 h-4" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* Perché un'azienda ha bisogno di un sito strutturato */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Building2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Perché un'azienda ha bisogno di un sito strutturato</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground mb-8" delay={0.1}>
                <p>
                  Un sito web aziendale non è un semplice biglietto da visita digitale: è uno strumento strategico
                  per la crescita del business. La realizzazione di un sito web per aziende richiede un approccio
                  strutturato che tenga conto di obiettivi, pubblico e posizionamento nel mercato.
                </p>
              </AnimatedSection>
              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                {[
                {
                  title: 'Credibilità e autorevolezza',
                  description: 'Un sito web aziendale professionale trasmette solidità e affidabilità, elementi fondamentali per conquistare la fiducia di clienti e partner.'
                },
                {
                  title: 'Presenza online solida',
                  description: 'Essere presenti online con un sito strutturato significa farsi trovare dove i clienti cercano: su Google, sui motori di ricerca, sul web.'
                },
                {
                  title: 'Acquisizione contatti',
                  description: 'Un sito web per aziende ben progettato facilita la conversione dei visitatori in contatti qualificati attraverso form, call-to-action e percorsi chiari.'
                },
                {
                  title: 'SEO e crescita nel tempo',
                  description: 'La realizzazione di un sito web aziendale ottimizzato per i motori di ricerca garantisce visibilità crescente e un flusso costante di nuove opportunità.'
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
            </div>
          </div>
        </section>

        {/* Cosa realizziamo per le aziende */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Layers className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Cosa realizziamo per le aziende</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" direction="left">
                  <p className="mb-6">
                    Progettiamo e sviluppiamo siti web aziendali multipagina con architetture pensate per crescere
                    insieme al business. Ogni progetto nasce da un'analisi approfondita delle esigenze dell'azienda
                    e si traduce in una struttura chiara, navigabile e orientata alla conversione.
                  </p>
                  <p className="mb-6">
                    I nostri siti web per aziende includono sezioni dedicate ai servizi, all'identità aziendale,
                    ai contatti e a ogni area strategica del business. Realizziamo architetture scalabili,
                    pronte per evolversi nel tempo con nuove pagine, funzionalità e contenuti.
                  </p>
                  <p>
                    Ogni sito è sviluppato con tecnologie moderne che garantiscono velocità, sicurezza
                    e un'esperienza utente ottimale su qualsiasi dispositivo.
                  </p>
                </AnimatedSection>
                <AnimatedSection direction="right">
                  <img
                    src={mockupImg}
                    alt="Mockup di sito web aziendale multipagina su monitor in ambiente ufficio moderno"
                    className="rounded-2xl shadow-lg w-full"
                    loading="lazy" />

                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Siti multipagina e strutturati */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <TrendingUp className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Siti multipagina e strutturati</h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection direction="left" className="order-2 md:order-1">
                  <img
                    src={teamImg}
                    alt="Team che pianifica l'architettura di un sito web aziendale strutturato"
                    className="rounded-2xl shadow-lg w-full"
                    loading="lazy" />

                </AnimatedSection>
                <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground order-1 md:order-2" direction="right">
                  <p className="mb-6">
                    Un sito web aziendale strutturato non è semplicemente un sito con più pagine: è un ecosistema
                    digitale progettato con una gerarchia dei contenuti chiara, una navigazione intuitiva
                    e un'architettura informativa che guida il visitatore verso le azioni desiderate.
                  </p>
                  <p className="mb-6">
                    Progettiamo siti web per piccole e medie imprese con strutture che facilitano l'indicizzazione
                    sui motori di ricerca, migliorano l'esperienza utente e permettono di aggiungere nuove sezioni
                    senza compromettere la coerenza complessiva.
                  </p>
                  <p>
                    La scalabilità è al centro del nostro approccio: ogni sito è pensato per accompagnare
                    la crescita dell'azienda nel tempo, adattandosi a nuove esigenze e opportunità.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Il nostro metodo */}
        <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
          <div className="container-section">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex items-center gap-4 mb-10">
                <div className="icon-box w-13 h-13">
                  <Settings className="w-6 h-6 text-accent-foreground" />
                </div>
                <h2 className="heading-2">Il nostro metodo</h2>
              </AnimatedSection>
              <AnimatedSection className="prose prose-lg max-w-none text-muted-foreground" delay={0.1}>
                <p className="mb-8">
                  In 4weblab abbiamo sviluppato un metodo di lavoro chiaro, organizzato e collaudato,
                  pensato per collaborazioni da remoto con aziende in tutta Italia. Il nostro processo
                  garantisce trasparenza, tempi certi e qualità in ogni fase della realizzazione del sito web aziendale.
                </p>
                <StaggerContainer className="space-y-5 mb-8" staggerDelay={0.1}>
                  {[
                  {
                    step: '01',
                    title: 'Analisi e briefing',
                    description: 'Raccogliamo le informazioni sulla tua azienda, i tuoi obiettivi di business e il pubblico di riferimento attraverso un confronto strutturato.'
                  },
                  {
                    step: '02',
                    title: 'Progettazione',
                    description: 'Definiamo la struttura del sito, l\'architettura delle informazioni e il design in linea con l\'identità aziendale e gli obiettivi di crescita.'
                  },
                  {
                    step: '03',
                    title: 'Sviluppo',
                    description: 'Realizziamo il sito web aziendale con tecnologie moderne, garantendo velocità, sicurezza, responsività e ottimizzazione SEO.'
                  },
                  {
                    step: '04',
                    title: 'Revisione e lancio',
                    description: 'Condividiamo il risultato per eventuali modifiche e, una volta approvato, pubblichiamo il sito e forniamo supporto per la gestione.'
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
                  Questo approccio ci permette di seguire con efficacia la realizzazione di siti web per aziende
                  ovunque si trovino, mantenendo comunicazione costante e risultati misurabili.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Perché scegliere 4weblab */}
        <section className="section-padding bg-background">
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
                  Siamo una realtà strutturata specializzata nella realizzazione di siti web aziendali.
                  Ecco cosa ci distingue:
                </p>
                <StaggerContainer className="space-y-3 mb-8" staggerDelay={0.08}>
                  {[
                  'Specializzazione nei siti web per aziende e PMI: conosciamo le dinamiche e le esigenze delle imprese',
                  'Architetture scalabili: ogni sito è progettato per crescere insieme al tuo business',
                  'Metodo collaudato: processi chiari e organizzati per collaborazioni efficaci da remoto in tutta Italia',
                  'Ottimizzazione SEO integrata: ogni pagina è costruita per posizionarsi sui motori di ricerca',
                  'Supporto continuativo: assistenza anche dopo il lancio per garantire che il sito resti sempre efficace e aggiornato'].
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
                  Scegliere 4weblab significa affidarsi a un partner affidabile per la realizzazione di un sito web aziendale
                  che rappresenti al meglio la tua impresa e ne accompagni la crescita.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contatti-aziendali" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="az-cta-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#az-cta-noise)" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
          <div className="container-section relative z-10">
            <AnimatedSection className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Box sinistra - CTA */}
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 flex flex-col justify-center">
                <h2 className="heading-2 text-primary-foreground mb-6">Richiedi un preventivo per il tuo sito web aziendale</h2>
                <p className="body-large text-primary-foreground/70 mb-8">
                  Vuoi realizzare un sito web aziendale strutturato e professionale? Contattaci per un confronto senza impegno: lavoriamo con Aziende in tutta Italia.
                
                </p>
                <div>
                  <button onClick={handleContactClick} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                      <circle cx="256" cy="256" r="256" fill="#25D366" />
                      <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" />
                    </svg>
                    Scrivici su Whatsapp
                  </button>
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

export default SitiWebAziendali;