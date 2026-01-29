import { Check, Gift, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const includedFeatures = [
  'Sviluppo sito web professionale',
  'Personalizzazione contenuti',
  'Scelta font e tipografia',
  'Palette colori su misura',
  'Ottimizzazione SEO locale',
  '1 anno di hosting incluso',
  '1 anno di dominio incluso',
];

const PricingSection = () => {
  // TODO: Sostituire con numero WhatsApp reale
  const whatsappNumber = '391234567890';
  const message = encodeURIComponent('Ciao! Vorrei richiedere un preventivo per il sito web.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section 
      id="prezzi" 
      className="section-padding" 
      style={{ background: 'var(--gradient-surface)', scrollMarginTop: 'var(--header-height)' }}
    >
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">Un'offerta, un prezzo</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Nessun costo nascosto, nessuna sorpresa. Tutto ciò che serve per il tuo sito web professionale in un'unica soluzione.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Main pricing card */}
          <div className="card-elevated p-8 relative overflow-hidden">
            {/* Accent ribbon */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-bl-lg">
              TUTTO INCLUSO
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-accent font-medium mb-4">
                <Gift className="w-5 h-5" aria-hidden="true" />
                <span>Offerta Completa</span>
              </div>
              
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                  {/* TODO: Inserire prezzo reale */}
                  €XXX
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                una tantum · IVA esclusa
              </p>
            </div>

            {/* Features list */}
            <ul className="space-y-3 mb-8" role="list" aria-label="Cosa include l'offerta">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button 
              asChild 
              size="lg" 
              className="w-full"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Richiedi preventivo su WhatsApp"
              >
                Richiedi preventivo
              </a>
            </Button>
          </div>

          {/* Renewal info card */}
          <div className="mt-6 p-6 rounded-lg border border-border bg-card/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Dal secondo anno</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Rinnovo dominio, hosting e assistenza
                </p>
                <p className="text-lg font-semibold text-foreground">
                  €199<span className="text-sm font-normal text-muted-foreground">/anno</span>
                </p>
              </div>
            </div>
          </div>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Preventivo personalizzato senza impegno. Rispondiamo entro 24 ore.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
