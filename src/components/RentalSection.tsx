import { Link } from 'react-router-dom';
import { Check, Monitor, Zap, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const benefits = [
'Un sito web professionale già pronto',
'Hosting, pubblicazione e gestione tecnica inclusi',
'Assistenza e piccoli aggiornamenti inclusi',
'Nessuna spesa iniziale',
'Nessuna competenza tecnica richiesta'];


const clarifications = [
'Dominio di vostra proprietà',
'Il sito è fornito in licenza d\'uso finché il servizio è attivo',
'Alla cessazione del servizio, il sito viene disattivato',
'Disponibile un\'opzione di riscatto dopo un periodo minimo di 12 mesi'];


const plans = [
{
  name: 'START',
  price: '49',
  description: 'Sito one-page professionale, ideale per iniziare.',
  icon: Monitor,
  features: [
  'Sito responsive',
  'Hosting e gestione inclusi',
  'Personalizzazione base',
  'Assistenza base'],

  highlighted: false
},
{
  name: 'PRO',
  price: '69',
  description: 'Il pacchetto completo per una presenza online solida.',
  icon: Zap,
  includesFrom: 'Pacchetto START più:',
  features: [
  'Grafica più curata',
  'SEO base locale',
  'Più sezioni e modifiche incluse',
  'Report mensile'],

  highlighted: true,
  badge: 'Il più scelto'
},
{
  name: 'BUSINESS',
  price: '99',
  description: 'Per chi vuole delegare tutto.',
  icon: Briefcase,
  includesFrom: 'Pacchetto PRO più:',
  features: [
  'Testi e immagini curate',
  'Aggiornamenti continui',
  'Assistenza prioritaria',
  'Consulenza dedicata'],

  highlighted: false
}];


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
      className="section-padding relative"
      style={{ scrollMarginTop: 'var(--header-height)' }}
      className="section-padding relative bg-surface-alt-2"
      aria-labelledby="rental-heading">
      <div id="ancora_noleggio" className="absolute top-0" aria-hidden="true" />

      <div className="container-section">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 id="rental-heading" className="heading-2 mb-5">
            Il sito web a noleggio, senza pensieri * 
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Un sito professionale sempre online, con assistenza inclusa e costi chiari.
          </p>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection className="max-w-3xl mx-auto mb-16" delay={0.1}>
          <p className="text-foreground mb-8 leading-relaxed text-lg">
            Con il nostro servizio a <strong>canone mensile</strong> avrai il sito web professionale della tua attività sempre operativo, senza preoccuparti di nulla. Nessuna spesa iniziale importante, nessuna competenza tecnica richiesta.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) =>
            <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-accent/5 border border-accent/10 transition-all duration-300 hover:bg-accent/8 hover:border-accent/20">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                </span>
                <span className="text-foreground text-sm">{benefit}</span>
              </div>
            )}
          </div>

          {/* Clarifications */}
          <div className="card-glass mb-10">
            <h3 className="font-bold text-foreground mb-4 text-lg">Trasparenza totale</h3>
            <ul className="space-y-3">
              {clarifications.map((item, index) =>
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5 font-bold">•</span>
                  <span>{item}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Key phrase */}
          <blockquote className="text-center text-lg md:text-xl font-serif italic text-foreground border-l-4 border-accent pl-6 py-3 my-10 bg-accent/5 rounded-r-2xl">
            "Concentrati sulla tua attività, al sito pensiamo noi."
          </blockquote>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto mb-16" staggerDelay={0.12}>
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <StaggerItem key={plan.name}>
                <Card
                  className={`relative overflow-hidden transition-all duration-400 h-full hover:-translate-y-2 ${
                  plan.highlighted ?
                  'border-accent/60 scale-[1.02] md:scale-105 ring-1 ring-accent/20' :
                  'border-border/40 hover:border-accent/30'}`
                  }
                  style={{ boxShadow: plan.highlighted ? 'var(--shadow-accent)' : 'var(--shadow-md)' }}>

                  {plan.highlighted && plan.badge &&
                  <div className="absolute top-0 right-0">
                      <Badge className="rounded-none rounded-bl-2xl bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold tracking-wide">
                        {plan.badge}
                      </Badge>
                    </div>
                  }

                  <CardHeader className="text-center pb-4">
                    <div className={`w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 ${
                    plan.highlighted ? 'bg-accent/15' : 'bg-muted'}`
                    }>
                      <Icon className={`w-7 h-7 ${plan.highlighted ? 'text-accent' : 'text-muted-foreground'}`} aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-3">
                      <span className="text-4xl font-serif font-bold text-foreground">{plan.price} €</span>
                      <span className="text-muted-foreground text-sm">/mese</span>
                    </div>
                    <CardDescription className="mt-3 text-balance">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {plan.includesFrom &&
                    <p className="text-xs text-muted-foreground mb-3 pb-3 border-b border-border/50 italic">
                        {plan.includesFrom}
                      </p>
                    }
                    <ul className="space-y-3" role="list" aria-label={`Caratteristiche piano ${plan.name}`}>
                      {plan.features.map((feature, index) =>
                      <li key={index} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.highlighted ? 'bg-accent/20' : 'bg-muted'}`
                        }>
                            <Check className={`w-3 h-3 ${plan.highlighted ? 'text-accent' : 'text-muted-foreground'}`} aria-hidden="true" />
                          </span>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>);

          })}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-4"
            aria-label="Richiedi una proposta personalizzata">

            Richieda una proposta personalizzata
          </button>
          <p className="text-sm text-muted-foreground mt-6">
            * IVA esclusa · Durata minima 12 mesi<br/>
* Offerta esclusiva per attività commerciali e professionisti di settore         
   
          </p>
          <p className="text-sm text-muted-foreground mt-8 text-center">
            <Link to="/creare-sito-con-intelligenza-artificiale" className="text-accent hover:underline">Scopri come creare un sito con intelligenza artificiale</Link> · <Link to="/realizzazione-siti-web-padova" className="text-accent hover:underline">Realizzazione siti web a Padova</Link> · <Link to="/sito-web-barber" className="text-accent hover:underline">Sito web dedicato per barber shop</Link>
          </p>
        </AnimatedSection>
      </div>
    </section>);};

export default RentalSection;