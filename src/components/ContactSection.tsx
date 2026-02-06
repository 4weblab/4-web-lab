import { MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const whatsappNumber = '393516826560';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.');

const features = [
  {
    icon: CheckCircle,
    title: 'Consulenza gratuita',
    description: 'Prima analisi delle tue esigenze senza impegno',
  },
  {
    icon: Clock,
    title: 'Risposta rapida',
    description: 'Ti rispondiamo entro poche ore',
  },
  {
    icon: MessageCircle,
    title: 'Contatto diretto',
    description: 'Parli subito con chi realizzerà il tuo sito',
  },
];

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contatti" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)', scrollMarginTop: 'var(--header-height)' }}>
      {/* Decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/6 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]" aria-hidden="true" />

      <div className="container-section relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-1 rounded-full mx-auto mb-8 bg-accent" />
            <h2 className="heading-2 text-primary-foreground mb-5">Parliamo del tuo progetto</h2>
            <p className="body-large text-primary-foreground/75 mb-4 text-balance">
              Lavoriamo con clienti in tutta Italia: puoi contattarci ovunque ti trovi.
            </p>
            <p className="body-large text-primary-foreground/75 mb-10 text-balance">
              Contattaci su WhatsApp per una consulenza gratuita. Rispondiamo rapidamente e senza impegno.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-9 py-4 inline-flex"
              aria-label="Contattaci su WhatsApp"
            >
              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              Scrivici su WhatsApp
            </a>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-3 gap-7 mt-14 text-left" staggerDelay={0.1} delay={0.3}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-colors duration-300 hover:bg-primary-foreground/8">
                  <feature.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-medium text-primary-foreground">{feature.title}</h3>
                    <p className="text-sm text-primary-foreground/65">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.5}>
            <p className="text-sm text-primary-foreground/50 mt-10">
              Richieste da tutta Italia – rispondiamo rapidamente a ogni contatto.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
