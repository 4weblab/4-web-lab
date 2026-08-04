import { Zap, Search, Smartphone, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const strengths = [
  {
    icon: Zap,
    title: 'Performance & Core Web Vitals',
    description: "Sviluppiamo codice statico custom privo di database pesanti o plugin ridondanti, garantendo punteggi vicini al 100/100 sui principali strumenti di analisi delle prestazioni. Ogni pagina viene erogata istantaneamente tramite reti CDN globali (Netlify). Risultato: tempi di risposta minimi, massima sicurezza contro i problemi di vulnerabilità e un vantaggio competitivo concreto sui motori di ricerca.",
  },
  {
    icon: Search,
    title: 'SEO Tradizionale e AEO/GEO Native',
    description: "Ottimizziamo la struttura semantica del sito per Google e per i motori di ricerca IA (ChatGPT, Gemini, Perplexity). Rendiamo il tuo brand la fonte citata dagli agenti IA per intercettare lead qualificati.",
  },
  {
    icon: Smartphone,
    title: 'UX & Design Mobile-First',
    description: 'Interfaccia e navigazione progettate prioritariamente per smartphone e tablet: layout reattivi, codice leggero ed esperienza utente fluida su qualsiasi dispositivo.',
  },
  {
    icon: Wrench,
    title: 'Referente Tecnico Dedicato',
    description: 'Assistenza e supporto senza intermediari o sistemi di ticketing impersonali: parli ed entri in contatto diretto con chi sviluppa e gestisce il tuo sito.',
  },
];

const BentoCard = ({
  strength,
  index,
  className = '',
  featured = false,
}: {
  strength: typeof strengths[0];
  index: number;
  className?: string;
  featured?: boolean;
}) => {
  const number = String(index + 1).padStart(2, '0');
  return (
    <StaggerItem className={className}>
      <article className="group relative h-full overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-card/60 hover:shadow-[0_20px_50px_-20px_hsl(var(--accent)/0.18)] md:p-8">
        <span className="pointer-events-none absolute right-4 top-2 font-sans text-6xl font-black leading-none text-foreground/[0.04] transition-colors duration-500 group-hover:text-accent/[0.08] md:text-7xl">
          {number}
        </span>

        <div className="relative z-10 flex h-full flex-col">
          <div
            className={`mb-5 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/10 transition-transform duration-500 group-hover:scale-105 ${
              featured ? 'h-16 w-16' : 'h-12 w-12'
            }`}
          >
            <strength.icon
              className={`text-white ${featured ? 'h-8 w-8' : 'h-6 w-6'}`}
              aria-hidden="true"
            />
          </div>

          <h3
            className={`font-sans font-bold mb-3 ${
              featured ? 'text-2xl md:text-3xl' : 'text-lg'
            }`}
          >
            {strength.title}
          </h3>

          <p
            className={`leading-relaxed text-muted-foreground ${
              featured ? 'text-base md:text-lg max-w-md' : 'text-sm'
            }`}
          >
            {strength.description}
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/5 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
      </article>
    </StaggerItem>
  );
};

const StrengthsSection = () => {
  return (
    <section id="punti-di-forza" className="section-padding bg-surface-alt-2" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">I 4 Pilastri del nostro metodo Web</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Come coniughiamo velocità tecnologica, ottimizzazione per i motori AI e assistenza diretta per fare crescere la tua attività.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2"
          staggerDelay={0.1}
        >
          <BentoCard
            strength={strengths[0]}
            index={0}
            featured
            className="md:col-span-2 md:row-span-2"
          />
          <BentoCard
            strength={strengths[1]}
            index={1}
            className="md:col-span-2"
          />
          <BentoCard
            strength={strengths[2]}
            index={2}
            className="md:col-span-1"
          />
          <BentoCard
            strength={strengths[3]}
            index={3}
            className="md:col-span-1"
          />
        </StaggerContainer>
      </div>
    </section>
  );
};

export default StrengthsSection;
