import { Link } from 'react-router-dom';
import { Store, Briefcase, Building2, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import cardNegozio from '@/assets/card-negozio.webp';
import cardProfessionista from '@/assets/card-professionista.webp';
import cardAzienda from '@/assets/card-azienda.webp';

const cards = [
  {
    title: 'Siti Web per Negozi e Attività Locali',
    text: 'Il negozio sotto casa che tutti trovano online. Sito ultra-veloce pensato per chi cerca "vicino a me": ottimizzato per Google Maps e per le ricerche geolocalizzate delle IA. Da 490€',
    cta: 'Scopri i siti per negozi',
    link: '/siti-web-per-negozi',
    image: cardNegozio,
    imageAlt: 'Vetrina di un negozio locale con prodotti esposti',
    icon: Store,
  },
  {
    title: 'Siti Web per Liberi Professionisti',
    text: 'Il tuo nome, la prima cosa che l\'IA consiglia. Piattaforma su misura per costruire autorevolezza, acquisire lead qualificati e comparire quando qualcuno chiede a ChatGPT "chi mi consiglia per..." Da 990€',
    cta: 'Scopri i siti per professionisti',
    link: '/siti-web-per-professionisti',
    image: cardProfessionista,
    imageAlt: 'Professionista al lavoro in uno studio mentre consulta il computer',
    icon: Briefcase,
  },
  {
    title: 'Siti Web Aziendali per PMI',
    text: 'Contatti B2B, non solo visite. Architetture avanzate per PMI che vogliono posizionamento SEO/AEO serio e generazione lead misurabile, non solo una vetrina. Da 1890€',
    cta: 'Scopri i siti aziendali',
    link: '/siti-web-aziendali',
    image: cardAzienda,
    imageAlt: 'Team aziendale in riunione in un ambiente di lavoro moderno',
    icon: Building2,
  },
];

const UserRoutingSection = () => {
  return (
    <section className="py-28 md:py-36 bg-surface-alt relative overflow-hidden">
      <span id="sitiweb" aria-hidden="true" className="block relative -top-24" />
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="container-section relative">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Soluzioni Web e Pricing per ogni Tipologia di Business</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Qualsiasi sia la tua attività, il sito deve fare una cosa sola: portarti clienti. Scegli il tuo profilo.
          </p>
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
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"


                    width={800}
                    height={512}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 md:p-9">
                    <div className="flex items-center gap-3 mb-3 mt-auto">
                      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-accent/80 transition-colors duration-500 shrink-0">
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-white/85 text-base leading-relaxed mb-6 max-w-sm min-h-[8rem] md:min-h-[9rem]">
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
