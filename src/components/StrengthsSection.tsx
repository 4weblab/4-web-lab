import { Zap, Search, Smartphone, Shield, HeadphonesIcon, Wrench } from 'lucide-react';

const strengths = [
  {
    icon: Zap,
    title: 'Performance elevate',
    description: 'Siti veloci e ottimizzati che si caricano in un attimo, migliorando esperienza utente e posizionamento.',
  },
  {
    icon: Search,
    title: 'SEO integrata',
    description: 'Ottimizzazione per farti trovare dai clienti su Google, con strategie mirate per il posizionamento nazionale.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    description: 'Design pensato prima per smartphone, dove la maggior parte degli utenti naviga oggi.',
  },
  {
    icon: Shield,
    title: 'Sicurezza garantita',
    description: 'Protocolli HTTPS, aggiornamenti costanti e conformità alle normative privacy.',
  },
  {
    icon: Wrench,
    title: 'Supporto dedicato',
    description: 'Un referente sempre disponibile per ogni tua esigenza tecnica o creativa.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Sempre operativo',
    description: 'Assistenza continua per garantire che il tuo sito sia sempre funzionante e aggiornato.',
  },
];

const StrengthsSection = () => {
  return (
    <section id="punti-di-forza" className="section-padding" style={{ background: 'var(--gradient-surface)', scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">Perché sceglierci</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Supportiamo professionisti, negozi e piccole e medie imprese in tutta Italia nella realizzazione di siti web professionali orientati alla crescita online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => (
            <article 
              key={index} 
              className="card-elevated text-center transition-all duration-300 hover:-translate-y-1 group"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <strength.icon className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
              </div>
              <h3 className="font-sans font-semibold text-lg mb-2">{strength.title}</h3>
              <p className="text-muted-foreground text-sm">{strength.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
