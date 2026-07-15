import { Users, Target, Lightbulb, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';

const testimonials = [
  {
    name: 'Mattia Loreggian',
    initial: 'M',
    text: '4 Web Lab si è occupata di crearci il sito, un logo e un\'identità di brand molto precisa che adesso usiamo ovunque.',
  },
  {
    name: 'Jessica Trovò',
    initial: 'J',
    text: 'Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova.',
  },
  {
    name: 'Lisa Bogana',
    initial: 'L',
    text: 'Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero.',
  },
];

const cards = [{
  icon: Users,
  title: 'Approccio Personale',
  description: 'Lavoriamo fianco a fianco con te. Parli direttamente con chi sviluppa il tuo sito, senza intermediari o sistemi a ticket.'
}, {
  icon: Target,
  title: 'Orientati ai Risultati',
  description: 'Non solo estetica: ogni linea di codice e di copy è progettata per intercettare i clienti e convertire i visitatori in contatti reali.'
}, {
  icon: Lightbulb,
  title: 'Design Sartoriale (Zero Template)',
  description: 'Nessun modello pre-fatto o stampino. Il tuo brand riceve un design esclusivo, flessibile e cucito al millimetro sulle tue necessità.'
}];

const guarantees = [
  {
    label: 'Tempi certi e zero attese',
    text: 'Analisi, sviluppo e pubblicazione in 2-4 settimane, con gestione diretta da remoto.',
  },
  {
    label: 'Tecnologia e Performance',
    text: 'Siti web statici ultra-veloci ospitati su hosting Netlify. Massima sicurezza, zero canoni nascosti.',
  },
  {
    label: 'Casi reali, non solo demo',
    text: <>Guarda il restyling completo di <Link to="/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto" className="text-accent hover:underline font-medium">R.B. s.n.c.</Link> o naviga tutti i nostri <Link to="/realizzazioni" className="text-accent hover:underline font-medium">concept e realizzazioni</Link>.</>,
  },
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-surface-alt" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Il web si è evoluto. Il tuo sito è pronto per le AI?</h2>
          <p className="aeo-answer body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            <strong>4 Web Lab</strong> è uno studio web con sede a <Link to="/realizzazione-siti-web-padova" className="text-accent hover:underline font-medium">Padova</Link> che realizza siti professionali, <Link to="/posizionamento-google-e-ai" className="text-accent hover:underline font-medium">SEO per Google e per le AI</Link> (ChatGPT, Gemini, Perplexity) e <Link to="/pubblicita-google-ads" className="text-accent hover:underline font-medium">campagne Google Ads</Link> per negozi, professionisti e PMI in tutta Italia.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection className="md:pt-2" direction="left">
            <h3 className="sr-only">Le garanzie tecniche</h3>
            <ul className="space-y-5">
              {guarantees.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-foreground">{item.label}:</strong>{' '}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <StaggerContainer className="grid gap-4" staggerDelay={0.12}>
            {cards.map((card, index) => (
              <StaggerItem key={index}>
                <div className="card-glass flex items-start gap-5 group hover:-translate-y-1.5 transition-all duration-400">
                  <div className="icon-box w-13 h-13 flex-shrink-0">
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg mb-1.5">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Testimonials */}
        <AnimatedSection className="text-center mt-20 mb-10">
          <div className="section-divider" />
          <h3 className="heading-3 mb-2">«Cosa dicono i nostri clienti»</h3>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="card-glass relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-400 h-full flex flex-col">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/15" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-6 flex-1">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.initial}
                  </div>
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/FQ8UkcNRm8YHWq8LA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors"
          >
            Leggi tutte le recensioni su Google →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
