import { MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
import { motion } from 'framer-motion';
import ContactFormWeb3Forms from './ContactFormWeb3Forms';

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
            <p className="body-large text-primary-foreground/70 mb-12 text-balance">Contattaci per una consulenza gratuita. Rispondiamo rapidamente e senza impegno.

            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Contattaci su WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="WhatsApp" className="w-6 h-6">
                <circle cx="256" cy="256" r="256" fill="#25D366" />
                <path fill="#FFFFFF" d="M371.1 140.9c-30.9-30.9-72-47.9-115.7-47.9-90.2 0-163.6 73.4-163.6 163.6 0 28.8 7.5 56.9 21.7 81.7L88 419l83.8-24.9c23.9 13 50.8 19.9 78.6 19.9h.1c90.2 0 163.6-73.4 163.6-163.6 0-43.7-17-84.8-47.9-115.5zm-115.7 249.4h-.1c-24.4 0-48.3-6.6-69.2-19.1l-5-3-49.7 14.8 14.9-48.4-3.3-5.2c-13.9-22.1-21.3-47.6-21.3-73.7 0-77.1 62.7-139.8 139.9-139.8 37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99 0 77.1-62.7 139.8-139.9 139.8zm76.7-104.9c-4.2-2.1-24.8-12.2-28.7-13.6-3.9-1.4-6.7-2.1-9.5 2.1-2.8 4.2-10.9 13.6-13.4 16.4-2.5 2.8-4.9 3.2-9.1 1.1-4.2-2.1-17.6-6.5-33.5-20.8-12.4-11.1-20.8-24.9-23.3-29.1-2.5-4.2-.3-6.4 1.9-8.5 2-2 4.2-4.9 6.3-7.4 2.1-2.5 2.8-4.2 4.2-7 1.4-2.8.7-5.3-.3-7.4-1.1-2.1-9.5-22.9-13-31.4-3.4-8.2-6.9-7.1-9.5-7.3-2.5-.1-5.3-.1-8.1-.1-2.8 0-7.4 1.1-11.2 5.3-3.9 4.2-14.7 14.4-14.7 35.1 0 20.7 15.1 40.7 17.2 43.5 2.1 2.8 29.7 45.4 72 63 10.1 4.4 18 7 24.1 9 10.1 3.2 19.3 2.8 26.5 1.7 8.1-1.2 24.8-10.1 28.3-19.9 3.5-9.8 3.5-18.2 2.5-19.9-1.1-1.8-3.9-2.8-8.1-4.9z" />
              </svg>
              Scrivici su Whatsapp
            </a>
            <p className="text-xs text-primary-foreground/50 mt-2"><strong>Richiede WhatsApp Web su PC</strong></p>
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
            <div className="mt-16 p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10">
              <h3 className="font-sans font-semibold text-primary-foreground text-lg mb-6 text-center">Oppure compila il form</h3>
              <ContactFormWeb3Forms />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>);

};

export default ContactSection;