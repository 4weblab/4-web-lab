import { Link } from 'react-router-dom';
import { Store, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import cardNegozio from '@/assets/card-negozio.jpg';
import cardProfessionista from '@/assets/card-professionista.jpg';
import cardAzienda from '@/assets/card-azienda.jpg';

const cards = [
  {
    title: 'Ho un negozio',
    text: 'Se hai un negozio fisico e vuoi portare più clienti dal web al punto vendita, questa è la soluzione giusta per te.',
    cta: 'Scopri i siti per negozi',
    link: '/siti-web-per-negozi',
    image: cardNegozio,
    icon: Store,
  },
  {
    title: 'Sono un professionista',
    text: 'Se lavori come libero professionista e vuoi presentarti online in modo credibile e acquisire nuovi contatti.',
    cta: 'Scopri i siti per professionisti',
    link: '/realizzazione-siti-web-per-professionisti',
    image: cardProfessionista,
    icon: Briefcase,
  },
  {
    title: 'Ho un\'azienda',
    text: 'Se hai un\'azienda e hai bisogno di un sito strutturato, completo e pensato per crescere nel tempo.',
    cta: 'Scopri i siti aziendali',
    link: '/siti-web-aziendali',
    image: cardAzienda,
    icon: Building2,
  },
];

const UserRoutingSection = () => {
  return (
    <section className="py-28 md:py-36 bg-surface-alt relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container-section relative">
        <AnimatedSection className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Dicci chi sei, al resto pensiamo noi</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Ogni attività ha esigenze diverse. Scegli il tuo caso e scopri il sito web più adatto.
          </p>
        </AnimatedSection>

        {/* Psychological transition block */}
        <AnimatedSection className="text-center mb-16" delay={0.1}>
          <div className="inline-block bg-background/80 backdrop-blur-sm border border-border/60 rounded-2xl px-8 py-5 shadow-sm">
            <p className="text-foreground font-medium text-lg leading-relaxed">
              Non esiste un sito giusto per tutti.<br />
              <span className="text-accent">Esiste quello giusto per il tuo tipo di attività.</span>
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15} delay={0.2}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.link}>
                <Link
                  to={card.link}
                  className="group block relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[420px] md:min-h-[480px]"
                >
                  {/* Background image */}
                  <img
                    src={card.image}
                    alt=""
                    loading="lazy"
                    width={800}
                    height={512}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-9">
                    {/* Icon badge */}
                    <div className="absolute top-6 left-7 w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent/80 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-white/85 text-base leading-relaxed mb-6 max-w-sm">
                      {card.text}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-base group-hover:gap-3 transition-all duration-300">
                      {card.cta}
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default UserRoutingSection;
