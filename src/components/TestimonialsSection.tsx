import { Star, Quote } from 'lucide-react';
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

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <AnimatedSection className="text-center mb-10">
          <div className="section-divider" />
          <h2 className="heading-3 mb-2">Cosa dicono i nostri clienti a Padova e in Italia</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            4.9/5 su Google. Non parole nostre — risultati di chi ha già lavorato con noi.
          </p>
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
            Leggi le altre recensioni verificate su Google Business Profile →
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
