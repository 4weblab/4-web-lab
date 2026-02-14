import { MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { motion } from 'framer-motion';

const whatsappNumber = '393516826560';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.');

const features = [
{
  icon: CheckCircle,
  title: 'Consulenza gratuita',
  description: 'Prima analisi delle tue esigenze senza impegno'
},
{
  icon: Clock,
  title: 'Risposta rapida',
  description: 'Ti rispondiamo entro poche ore'
},
{
  icon: MessageCircle,
  title: 'Contatto diretto',
  description: 'Parli subito con chi realizzerà il tuo sito'
}];


const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contatti" className="section-padding relative overflow-hidden" style={{ background: 'var(--gradient-hero)', scrollMarginTop: 'var(--header-height)' }}>
      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="contact-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#contact-noise)" />
        </svg>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary-foreground/3 blur-[100px]" aria-hidden="true" />

      <div className="container-section relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-1 rounded-full mx-auto mb-8 bg-accent" />
            <h2 className="heading-2 text-primary-foreground mb-5">Parliamo del tuo progetto</h2>
            <p className="body-large text-primary-foreground/70 mb-4 text-balance">
              Lavoriamo con clienti in tutta Italia: puoi contattarci ovunque ti trovi.
            </p>
            <p className="body-large text-primary-foreground/70 mb-12 text-balance">
              Contattaci su WhatsApp per una consulenza gratuita. Rispondiamo rapidamente e senza impegno.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 inline-flex"
              aria-label="Contattaci su WhatsApp"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}>

              <MessageCircle className="w-6 h-6" aria-hidden="true" />
              Scrivici su WhatsApp
            </motion.a>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 mt-16 text-left" staggerDelay={0.1} delay={0.3}>
            {features.map((feature, index) =>
            <StaggerItem key={index}>
                <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-300 hover:bg-primary-foreground/8 hover:border-primary-foreground/15">
                  <feature.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-sans font-semibold text-primary-foreground">{feature.title}</h3>
                    <p className="text-sm text-primary-foreground/60 mt-0.5">{feature.description}</p>
                  </div>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>

          <AnimatedSection delay={0.5}>
            


          </AnimatedSection>
        </div>
      </div>
    </section>);

};

export default ContactSection;