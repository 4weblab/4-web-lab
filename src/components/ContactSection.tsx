import { MessageCircle, Clock, CheckCircle } from 'lucide-react';

const whatsappNumber = '393516826560';
const whatsappMessage = encodeURIComponent('Ciao! Vorrei informazioni sui vostri servizi di creazione siti web.');

const ContactSection = () => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contatti" className="section-padding" style={{ background: 'var(--gradient-hero)', scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-1 rounded-full mx-auto mb-6 bg-accent" />
          <h2 className="heading-2 text-primary-foreground mb-4">Parliamo del tuo progetto</h2>
          <p className="body-large text-primary-foreground/80 mb-4 text-balance">
            Lavoriamo con clienti in tutta Italia: puoi contattarci ovunque ti trovi.
          </p>
          <p className="body-large text-primary-foreground/80 mb-8 text-balance">
            Contattaci su WhatsApp per una consulenza gratuita. Rispondiamo rapidamente e senza impegno.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4 inline-flex"
            aria-label="Contattaci su WhatsApp"
          >
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            Scrivici su WhatsApp
          </a>

          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-sans font-medium text-primary-foreground">Consulenza gratuita</h3>
                <p className="text-sm text-primary-foreground/70">Prima analisi delle tue esigenze senza impegno</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-sans font-medium text-primary-foreground">Risposta rapida</h3>
                <p className="text-sm text-primary-foreground/70">Ti rispondiamo entro poche ore</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-sans font-medium text-primary-foreground">Contatto diretto</h3>
                <p className="text-sm text-primary-foreground/70">Parli subito con chi realizzerà il tuo sito</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-primary-foreground/60 mt-8">
            Richieste da tutta Italia – rispondiamo rapidamente a ogni contatto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
