import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import ContactFormWeb3Forms from './ContactFormWeb3Forms';

const whatsappNumber = '393514656042';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.');

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
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Colonna sinistra: copy + canali rapidi */}
          <AnimatedSection className="lg:pr-4">
            <div className="w-16 h-1 rounded-full mb-8 bg-accent" />
            <h2 className="heading-2 text-primary-foreground mb-5">Inizia il tuo progetto web con 4 Web Lab</h2>
            <p className="body-large text-primary-foreground/70 mb-10 text-balance">
              Richiedi un'analisi gratuita del tuo sito web. Parli ed entri in contatto diretto con uno sviluppatore web a Padova. Analizziamo la tua presenza online per individuare le criticità che rallentano il tuo posizionamento SEO e la visibilità sui motori AI (ChatGPT, Gemini, Perplexity).
            </p>

            <ul className="space-y-5">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/[0.03] px-5 py-2.5 text-sm font-medium text-primary-foreground hover:border-accent/60 hover:bg-accent/10 hover:text-accent transition-all duration-300"
                  aria-label="Avvia una chat rapida su WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                  Avvia una chat rapida
                </a>
                <span className="block text-xs text-primary-foreground/40 mt-1.5 ml-1">
                  <strong>WhatsApp</strong> · richiede WhatsApp Web su PC
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5">Email</p>
                  <a
                    href="mailto:info@4weblab.it"
                    className="text-primary-foreground hover:text-accent transition-colors"
                  >
                    info@4weblab.it
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-0.5">Località</p>
                  <p className="text-primary-foreground">Padova – Italia</p>
                  <p className="text-sm text-primary-foreground/60">Disponibili da remoto in tutta Italia</p>
                </div>
              </li>
            </ul>
          </AnimatedSection>

          {/* Colonna destra: form glassmorphic */}
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-3xl border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <ContactFormWeb3Forms />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>);

};

export default ContactSection;