import { Globe, Palette, BarChart3, Wrench, RefreshCw, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Siti web professionali',
    description: 'Creazione di siti vetrina, one-page e multi-pagina per presentare al meglio la tua attività.',
    features: ['Design personalizzato', 'Responsive su tutti i dispositivi', 'Ottimizzato per la velocità'],
  },
  {
    icon: Palette,
    title: 'Restyling e rebranding',
    description: 'Rinnoviamo il tuo sito esistente con un design moderno e funzionalità aggiornate.',
    features: ['Analisi del sito attuale', 'Nuovo design su misura', 'Migrazione contenuti'],
  },
  {
    icon: BarChart3,
    title: 'SEO e visibilità locale',
    description: 'Strategie di ottimizzazione per posizionarti su Google e farti trovare dai clienti.',
    features: ['Ricerca parole chiave', 'Ottimizzazione on-page', 'Google Business Profile'],
  },
  {
    icon: Wrench,
    title: 'Manutenzione e assistenza',
    description: 'Aggiornamenti, backup e supporto tecnico per mantenere il tuo sito sempre efficiente.',
    features: ['Aggiornamenti periodici', 'Backup automatici', 'Supporto prioritario'],
  },
  {
    icon: RefreshCw,
    title: 'Gestione contenuti',
    description: 'Aggiornamento testi, immagini e contenuti del tuo sito in modo rapido e professionale.',
    features: ['Modifiche rapide', 'Caricamento media', 'Nuove sezioni'],
  },
  {
    icon: MessageSquare,
    title: 'Consulenza web',
    description: 'Analisi e consigli strategici per migliorare la tua presenza digitale.',
    features: ['Audit del sito', 'Strategia digitale', 'Report e analisi'],
  },
];

const ServicesSection = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servizi" className="section-padding bg-background" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">I nostri servizi</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Soluzioni complete per la tua presenza online, dalla creazione alla gestione quotidiana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="card-elevated flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <service.icon className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
              </div>
              
              <h3 className="font-sans font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={handleContactClick}
            className="btn-secondary"
          >
            Richiedi informazioni sui servizi
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
