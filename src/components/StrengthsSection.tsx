import { Zap, Search, Smartphone, Shield, HeadphonesIcon, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

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
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Perché sceglierci</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Supportiamo <Link to="/realizzazione-siti-web-per-professionisti" className="text-accent hover:underline font-medium">professionisti</Link>, negozi e <Link to="/realizzazione-siti-web-per-professionisti" className="text-accent hover:underline font-medium">piccole e medie imprese</Link> in tutta Italia nella realizzazione di siti web professionali orientati alla crescita online.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7" staggerDelay={0.08}>
          {strengths.map((strength, index) => (
            <StaggerItem key={index}>
              <article className="card-glass text-center group hover:-translate-y-2 transition-all duration-400 h-full">
                <div className="icon-box w-14 h-14 rounded-2xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                  <strength.icon className="w-7 h-7 text-accent-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-lg mb-3">{strength.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{strength.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StrengthsSection;
