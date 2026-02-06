import { Check, Gift, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from './AnimatedSection';

const includedFeatures = ['Sviluppo sito web professionale', 'Personalizzazione contenuti', 'Scelta font e tipografia', 'Palette colori su misura', 'Ottimizzazione SEO locale', '1 anno di hosting incluso', '1 anno di dominio incluso'];

const PricingSection = () => {
  const whatsappNumber = '391234567890';
  const message = encodeURIComponent('Ciao! Vorrei richiedere un preventivo per il sito web.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="prezzi" className="section-padding" style={{ background: 'var(--gradient-surface)', scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-14">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">La nostra soluzione ad acquisto diretto</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Nessun costo nascosto, nessuna sorpresa. Tutto ciò che serve per il tuo sito web professionale in un'unica soluzione. Per chi preferisce acquistare il sito in un'unica soluzione, senza canone mensile
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-lg mx-auto" delay={0.15}>
          {/* Main pricing card */}
          <div className="card-glass p-9 relative overflow-hidden border-accent/20">
            {/* Accent ribbon */}
            <div className="absolute top-0 right-0 px-5 py-1.5 rounded-bl-xl text-xs font-bold" style={{ background: 'var(--gradient-accent)', color: 'white' }}>
              TUTTO INCLUSO
            </div>

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-accent font-medium mb-5 bg-accent/10 px-4 py-2 rounded-full">
                <Gift className="w-5 h-5" aria-hidden="true" />
                <span>Offerta Completa</span>
              </div>

              <div className="mb-3">
                <span className="text-sm text-muted-foreground block mb-2">a partire da</span>
                <span className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                  €599
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                una tantum · IVA esclusa
              </p>
              <p className="text-muted-foreground text-sm mt-4">
                Una soluzione ideale per chi cerca la realizzazione di un sito web professionale completo, ovunque si trovi in Italia.
              </p>
            </div>

            {/* Features list */}
            <ul className="space-y-3.5 mb-10" role="list" aria-label="Cosa include l'offerta">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                  </span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button asChild size="lg" className="w-full rounded-xl h-12 text-base font-medium">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Richiedi preventivo su WhatsApp">
                Richiedi preventivo
              </a>
            </Button>
          </div>

          {/* Renewal info card */}
          <div className="mt-7 card-glass">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-muted flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Dal secondo anno</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  Rinnovo dominio, hosting e assistenza
                </p>
                <p className="text-lg font-semibold text-foreground">
                  €199<span className="text-sm font-normal text-muted-foreground">/anno · IVA esclusa</span>
                </p>
              </div>
            </div>
          </div>

          {/* Trust note */}
          <p className="text-center text-sm text-muted-foreground mt-7">
            Preventivo personalizzato senza impegno. Rispondiamo entro 24 ore.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
