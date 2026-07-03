import { Globe, Palette, BarChart3, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    icon: Globe,
    title: 'Siti web professionali',
    description: 'Siti vetrina, one-page e multi-pagina su misura, ottimizzati per velocità e conversioni.',
    features: ['Design personalizzato', 'Responsive su tutti i dispositivi', 'Ottimizzato per la velocità'],
    link: '#sitiweb',
  },
  {
    icon: BarChart3,
    title: 'SEO e visibilità su Google e AI',
    description: 'Posizionamento organico su Google e citazioni nelle AI generative (ChatGPT, Gemini, Perplexity).',
    features: ['SEO tecnica e on-page', 'AEO per AI Overviews', 'GEO per LLM e assistenti'],
    link: '/posizionamento-google-e-ai',
  },
  {
    icon: Megaphone,
    title: 'Campagne Google Ads',
    description: 'Lead e contatti qualificati in tempi rapidi grazie a campagne Search e Performance Max gestite a budget controllato.',
    features: ['Setup account e tracking', 'Campagne Search e PMax', 'Ottimizzazione continua'],
    link: '/pubblicita-google-ads',
  },
  {
    icon: Palette,
    title: 'Restyling e rebranding',
    description: 'Rinnoviamo il sito esistente con design moderno, performance e SEO aggiornate alle ultime best practice.',
    features: ['Analisi del sito attuale', 'Nuovo design su misura', 'Migrazione contenuti senza perdite SEO'],
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const handleServiceClick = (link: string) => {
    if (link.startsWith('#')) {
      const el = document.getElementById(link.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(link);
    }
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleContactClick = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servizi" className="section-padding bg-surface-alt" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Cosa possiamo fare per la tua presenza online</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Quattro servizi pensati per farti trovare, scegliere e ricontattare: sito, SEO, Google Ads e restyling.
          </p>
        </AnimatedSection>

        {/* Desktop: static 4-col grid (no JS carousel) */}
        <AnimatedSection delay={0.2} className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article
                key={index}
                className={`card-glass flex flex-col h-full group hover:-translate-y-2 transition-all duration-400${service.link ? ' cursor-pointer' : ''}`}
                onClick={service.link ? () => handleServiceClick(service.link!) : undefined}
              >
                <div className="icon-box w-13 h-13 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-sans font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm">
                  {service.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* Mobile: carousel */}
        <AnimatedSection delay={0.2} className="md:hidden">
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full pl-4 first:pl-0"
                  >
                    <article
                      className={`card-glass flex flex-col h-full group hover:-translate-y-2 transition-all duration-400 mx-2${service.link ? ' cursor-pointer' : ''}`}
                      onClick={service.link ? () => handleServiceClick(service.link!) : undefined}
                    >
                      <div className="icon-box w-13 h-13 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>

                      <h3 className="font-sans font-bold text-xl mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mt-auto">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2.5 mt-10" role="tablist" aria-label="Navigazione servizi">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    selectedIndex === index
                      ? 'bg-accent w-8'
                      : 'bg-muted-foreground/20 w-2.5 hover:bg-muted-foreground/35'
                  }`}
                  role="tab"
                  aria-selected={selectedIndex === index}
                  aria-label={`Vai al servizio ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Scorri per vedere tutti i servizi
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-14 md:mt-16" delay={0.3}>
          <button onClick={handleContactClick} className="btn-secondary">
            Richiedi informazioni sui servizi
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
