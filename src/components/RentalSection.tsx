import { Check, Monitor, Zap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const benefits = [
  'Un sito web professionale già pronto',
  'Hosting, pubblicazione e gestione tecnica inclusi',
  'Assistenza e piccoli aggiornamenti inclusi',
  'Nessuna spesa iniziale elevata',
  'Nessuna competenza tecnica richiesta',
];

const clarifications = [
  'Il dominio è intestato a lei',
  'Il sito è fornito in licenza d\'uso finché il servizio è attivo',
  'Alla cessazione del servizio, il sito viene disattivato',
  'È disponibile un\'opzione di riscatto dopo un periodo minimo',
];

const plans = [
  {
    name: 'START',
    price: '49',
    description: 'Sito one-page professionale, ideale per iniziare.',
    icon: Monitor,
    features: [
      'Sito responsive',
      'Hosting e gestione inclusi',
      'Assistenza base',
    ],
    highlighted: false,
  },
  {
    name: 'PRO',
    price: '69',
    description: 'Il pacchetto completo per una presenza online solida.',
    icon: Zap,
    features: [
      'Grafica più curata',
      'SEO base locale',
      'Più sezioni e modifiche incluse',
      'Report mensile',
    ],
    highlighted: true,
    badge: 'Il più scelto',
  },
  {
    name: 'BUSINESS',
    price: '99',
    description: 'Per chi vuole delegare tutto.',
    icon: Briefcase,
    features: [
      'Testi e immagini curate',
      'Aggiornamenti continui',
      'Assistenza prioritaria',
      'Consulenza dedicata',
    ],
    highlighted: false,
  },
];

const RentalSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="noleggio" 
      className="section-padding bg-background"
      style={{ scrollMarginTop: 'var(--header-height)' }}
      aria-labelledby="rental-heading"
    >
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 id="rental-heading" className="heading-2 mb-4">
            Il sito come servizio, senza pensieri
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Un sito professionale sempre online, con assistenza inclusa e costi chiari.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-foreground mb-6 leading-relaxed">
            Con il nostro servizio, lei paga un <strong>canone mensile</strong> per avere 
            un sito web professionale sempre operativo, senza preoccuparsi di nulla. 
            Nessuna spesa iniziale importante, nessuna competenza tecnica richiesta.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                </span>
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Clarifications */}
          <div className="p-6 rounded-lg border border-border bg-muted/30 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Trasparenza totale</h3>
            <ul className="space-y-2">
              {clarifications.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key phrase */}
          <blockquote className="text-center text-lg md:text-xl font-serif italic text-foreground border-l-4 border-accent pl-6 py-2 my-8">
            "Lei pensa alla sua attività, al sito pensiamo noi."
          </blockquote>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative overflow-hidden transition-all duration-300 ${
                  plan.highlighted 
                    ? 'border-accent shadow-lg scale-[1.02] md:scale-105' 
                    : 'border-border hover:border-accent/50 hover:shadow-md'
                }`}
              >
                {plan.highlighted && plan.badge && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-none rounded-bl-lg bg-accent text-accent-foreground">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    plan.highlighted ? 'bg-accent/20' : 'bg-muted'
                  }`}>
                    <Icon className={`w-6 h-6 ${plan.highlighted ? 'text-accent' : 'text-muted-foreground'}`} aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-serif font-bold text-foreground">{plan.price} €</span>
                    <span className="text-muted-foreground text-sm">/mese</span>
                  </div>
                  <CardDescription className="mt-3 text-balance">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3" role="list" aria-label={`Caratteristiche piano ${plan.name}`}>
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                          plan.highlighted ? 'bg-accent/20' : 'bg-muted'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.highlighted ? 'text-accent' : 'text-muted-foreground'}`} aria-hidden="true" />
                        </span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
            aria-label="Richiedi una proposta personalizzata"
          >
            Richieda una proposta personalizzata
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            IVA esclusa · Nessun vincolo a lungo termine
          </p>
        </div>
      </div>
    </section>
  );
};

export default RentalSection;
