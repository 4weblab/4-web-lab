import { Globe, Palette, BarChart3, Wrench, RefreshCw, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

import { AnimatedSection } from './AnimatedSection';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Globe,
    title: 'Siti web professionali',
    description: 'Creazione di siti vetrina, one-page e multi-pagina per presentare al meglio la tua attività. ',
    features: ['Design personalizzato', 'Responsive su tutti i dispositivi', 'Ottimizzato per la velocità'],
  },
  {
    icon: Palette,
    title: 'Restyling e rebranding',
    description: 'Rinnoviamo il tuo sito esistente con un design moderno e funzionalità aggiornate. ',
    features: ['Analisi del sito attuale', 'Nuovo design su misura', 'Migrazione contenuti'],
  },
  {
    icon: BarChart3,
    title: 'SEO e visibilità',
    description: 'Strategie di ottimizzazione per posizionarti su Google e farti trovare dai clienti.',
    features: ['Ricerca parole chiave', 'Ottimizzazione on-page', 'Google Business Profile'],
  },
  {
    icon: Wrench,
    title: 'Manutenzione e assistenza',
    description: 'Aggiornamenti, backup e supporto tecnico per mantenere il tuo sito sempre efficiente. ',
    features: ['Aggiornamenti periodici', 'Backup automatici', 'Supporto prioritario'],
  },
  {
    icon: RefreshCw,
    title: 'Gestione contenuti',
    description: 'Aggiornamento testi, immagini e contenuti del tuo sito in modo rapido e professionale. ',
    features: ['Modifiche rapide', 'Caricamento media', 'Nuove sezioni'],
  },
  {
    icon: MessageSquare,
    title: 'Consulenza web',
    description: 'Analisi e consigli strategici per migliorare la tua presenza digitale. Servizio pensato per professionisti, negozi e aziende che operano in tutta Italia.',
    features: ['Audit del sito', 'Strategia digitale', 'Report e analisi'],
  },
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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
    <section id="servizi" className="section-padding" style={{ background: 'hsl(210 25% 98%)', scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">I nostri servizi</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Soluzioni complete per la tua presenza online, dalla creazione alla gestione quotidiana.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            {/* Navigation Arrows – Desktop only */}
            {!isMobile && (
              <>
                <motion.button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-14 z-10 w-12 h-12 rounded-full bg-card text-foreground border border-border/50 flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={!canScrollPrev}
                  aria-label="Servizio precedente"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                  whileHover={{ scale: 1.1, boxShadow: 'var(--shadow-lg)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-14 z-10 w-12 h-12 rounded-full bg-card text-foreground border border-border/50 flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={!canScrollNext}
                  aria-label="Servizio successivo"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                  whileHover={{ scale: 1.1, boxShadow: 'var(--shadow-lg)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </>
            )}

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4 first:pl-0 md:first:pl-4"
                  >
                    <article className="card-glass flex flex-col h-full group hover:-translate-y-2 transition-all duration-400 mx-2">
                      <div className="icon-box w-13 h-13 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
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

            {isMobile && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                Scorri per vedere tutti i servizi
              </p>
            )}
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
