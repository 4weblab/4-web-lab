import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const faqs = [
{
  id: 'costo-sito-web',
  question: 'Quanto costa realizzare un sito web?',
  answer:
  <>Il costo di un sito web professionale parte <strong>generalmente</strong> da circa 400€ + IVA per una struttura one-page e può aumentare in base a numero di pagine, funzionalità e livello di ottimizzazione SEO. Un progetto più completo richiede un investimento maggiore, ma consente una comunicazione più strutturata e una migliore capacità di generare contatti nel tempo.</>
},
{
  id: 'prezzo-sito-professionista',
  question: 'Qual è il prezzo di un sito web per un professionista?',
  answer:
  'Per un professionista il sito deve trasmettere autorevolezza e chiarezza. Un sito essenziale ma ben strutturato può partire da una base contenuta, con possibilità di espansione futura. L\'obiettivo non è solo presenza online, ma uno strumento che faciliti il contatto e rafforzi la credibilità.'
},
{
  id: 'acquisto-o-noleggio',
  question: 'È meglio acquistare un sito web o noleggiarlo?',
  answer:
  'L\'acquisto diretto prevede un investimento iniziale unico. Il noleggio operativo consente di distribuire il costo nel tempo, spesso includendo manutenzione tecnica e aggiornamenti. La scelta dipende dal budget disponibile e dalla strategia a medio termine.'
},
{
  id: 'tempi-realizzazione',
  question: 'In quanto tempo viene realizzato un sito web?',
  answer:
  'Un sito standard può essere realizzato in 2–4 settimane, a seconda della complessità e della rapidità nella consegna dei materiali. Una pianificazione chiara accelera il processo e riduce revisioni inutili.'
},
{
  id: 'dominio-e-hosting',
  question: 'Il sito web include dominio e hosting?',
  answer:
  'Generalmente sì. Il servizio comprende configurazione tecnica, hosting professionale e certificato SSL. È fondamentale che il sito sia ospitato su server affidabili per garantire sicurezza e corretta indicizzazione. Il Dominio invece è sempre di proprietà esclusiva del cliente.'
},
{
  id: 'social-o-sito-web',
  question: 'È meglio avere solo i social o anche un sito web?',
  answer:
  'I social sono utili per visibilità, ma non sostituiscono un sito web. Il sito è uno spazio proprietario, indipendente dagli algoritmi delle piattaforme, e rappresenta un punto di riferimento stabile per clienti e potenziali contatti.'
},
{
  id: 'google-business-basta',
  question: 'Google Business basta per trovare clienti?',
  answer:
  'Google Business è importante per la visibilità locale, ma non è sufficiente da solo. Un sito web permette di approfondire servizi, mostrare casi reali e migliorare il posizionamento nei risultati di ricerca.'
},
{
  id: 'vetrina-vs-landing',
  question: 'Qual è la differenza tra sito vetrina e landing page?',
  answer:
  'Il sito vetrina presenta l\'attività in modo completo con più sezioni informative. La landing page è focalizzata su un obiettivo specifico, come la generazione di contatti per un servizio mirato.'
},
{
  id: 'sito-web-trova-clienti',
  question: 'Un sito web aiuta davvero a trovare clienti?',
  answer:
  'Un sito ben progettato e ottimizzato può generare richieste di contatto in modo costante. È uno strumento di acquisizione, non una semplice vetrina online.'
}];


const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

const FaqItem = ({ faq, index }: {faq: typeof faqs[0];index: number;}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
      open ?
      'border-accent/30 bg-accent/4 shadow-md' :
      'border-border bg-background hover:border-accent/20 hover:bg-accent/2'}`
      }>

      <button
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
        id={`faq-trigger-${index}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">

        <h3 className="heading-3 text-base md:text-lg font-semibold text-foreground leading-snug">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-accent transition-transform duration-300 ${
          open ? 'rotate-180' : ''}`
          }
          aria-hidden="true" />

      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-trigger-${index}`}
        className={`transition-all duration-300 ease-in-out ${
        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`
        }>

        <p className="px-6 pb-6 text-muted-foreground body-base leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>);

};

const FaqSitiWeb = () => {
  return (
    <>
      <Helmet>
        <title>FAQ Realizzazione Siti Web | Costi, Tempi e Scelte Strategiche – 4 Web Lab</title>
        <meta
          name="description"
          content="Domande frequenti sulla realizzazione di siti web professionali: costi, tempi di sviluppo, differenze tra sito vetrina e landing page. Risposte chiare e professionali." />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/faq-realizzazione-siti-web" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/faq-realizzazione-siti-web" />
        <meta property="og:title" content="FAQ Realizzazione Siti Web | Costi, Tempi e Scelte Strategiche – 4 Web Lab" />
        <meta property="og:description" content="Domande frequenti sulla realizzazione di siti web professionali: costi, tempi di sviluppo, differenze tra sito vetrina e landing page. Risposte chiare e professionali." />
        <meta property="og:image" content="https://4weblab.it/og-image.jpg" />
        <meta property="og:locale" content="it_IT" />

        {/* JSON-LD FAQPage */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" className="pt-[var(--header-height)]">
        {/* Hero */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: 'var(--gradient-hero)' }}>

          <div className="noise-overlay" aria-hidden="true">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="faq-hero-noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#faq-hero-noise)" />
            </svg>
          </div>
          <div className="hero-spotlight" aria-hidden="true" />
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-[100px]" aria-hidden="true" />

          <div className="container-section relative z-10">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-sm font-medium mb-8">
                <HelpCircle className="w-4 h-4" aria-hidden="true" />
                Domande Frequenti
              </div>
              <h1
                className="heading-1 text-primary-foreground mb-6 text-balance"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0,0,0,0.2)' }}>

                Domande Frequenti sulla Realizzazione di Siti Web
              </h1>
              <p
                className="body-large text-primary-foreground/85 max-w-3xl mx-auto text-balance"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}>

                Quanto costa un sito web? Quanto tempo serve per realizzarlo? Conviene acquistarlo o noleggiarlo?
In questa pagina trovi risposte sintetiche e concrete alle domande più frequenti sulla realizzazione di un sito web professionale, con indicazioni su costi, tempi e scelte strategiche.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="section-padding bg-background">
          <div className="container-section">
            <div className="max-w-3xl mx-auto">
              <StaggerContainer className="space-y-4" staggerDelay={0.06}>
                {faqs.map((faq, index) => <StaggerItem key={faq.id}>
                    <FaqItem faq={faq} index={index} />
                  </StaggerItem>
                )}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>);

};

export default FaqSitiWeb;