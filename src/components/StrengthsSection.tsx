import { Zap, Search, Smartphone, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const strengths = [
  {
    icon: Zap,
    title: 'Performance elevate',
    description: 'Caricamento rapido e Core Web Vitals al top: più utenti restano, più Google ti premia.',
  },
  {
    icon: Search,
    title: 'SEO e visibilità AI',
    description: 'Ottimizzazione per Google e per le AI (ChatGPT, Gemini, Perplexity): farti trovare, ovunque cerchino.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-first',
    description: 'Progettazione mobile-first: il sito funziona perfettamente dove i tuoi clienti lo guardano davvero.',
  },
  {
    icon: Wrench,
    title: 'Supporto dedicato',
    description: 'Un referente diretto, niente ticket impersonali: rispondiamo a te, sul tuo progetto.',
  },
];

const StrengthsSection = () => {
  return (
    <section id="punti-di-forza" className="section-padding bg-surface-alt-2" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Perché sceglierci</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Supportiamo <Link to="/realizzazione-siti-web-per-professionisti" className="text-accent hover:underline font-medium">professionisti</Link>, <Link to="/siti-web-per-negozi" className="text-accent hover:underline font-medium">negozi</Link> e <Link to="/siti-web-aziendali" className="text-accent hover:underline font-medium">piccole e medie imprese</Link> in tutta Italia nella realizzazione di siti web professionali orientati alla crescita online.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7" staggerDelay={0.08}>
          {strengths.map((strength, index) => (
            <StaggerItem key={index}>
              <article className="card-glass text-center group hover:-translate-y-2 transition-all duration-400 h-full">
                <div className="icon-box w-14 h-14 rounded-2xl mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                  <strength.icon className="w-7 h-7 text-white" aria-hidden="true" />
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
