import { Users, Target, Lightbulb, Star, Quote, Zap, Search, Smartphone } from 'lucide-react';
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

const cards: { icon: typeof Users; title: string; description: React.ReactNode }[] = [
  {
    icon: Zap,
    title: 'Il tuo sito non fa aspettare nessuno',
    description: 'Codice statico custom, zero database pesanti: pagine che si caricano all\'istante su CDN globale (Netlify). Risultato: meno abbandoni, più conversioni, vantaggio reale su Google.',
  },
  {
    icon: Search,
    title: 'Ti trovano anche le IA, non solo Google',
    description: 'Struttura semantica ottimizzata per Google e per ChatGPT, Gemini, Perplexity. Il tuo brand diventa la fonte citata, non quella ignorata.',
  },
  {
    icon: Users,
    title: 'Parli sempre con chi fa il lavoro',
    description: 'Contatto diretto con lo sviluppatore. Nessun intermediario, nessuna attesa per un cambio testo.',
  },
  {
    icon: Lightbulb,
    title: 'Un sito che non somiglia a mille altri',
    description: 'Sviluppo 100% su misura, senza template WordPress: il tuo sito è unico quanto la tua attività, ed è più sicuro.',
  },
  {
    icon: Smartphone,
    title: 'Funziona bene da telefono, dove ti cercano davvero',
    description: 'Design mobile-first: la maggior parte dei tuoi clienti ti troverà da smartphone.',
  },
  {
    icon: Target,
    title: 'Sai sempre quando va online',
    description: (
      <>
        2-4 settimane, tempi concordati e rispettati. Risultati verificabili, come il restyling per{' '}
        <Link to="/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto" className="text-accent hover:underline font-medium">R.B. s.n.c.</Link>
      </>
    ),
  },
];


const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-surface-alt" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-14 md:mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Perché scegliere 4 Web Lab per il tuo sito web a Padova</h2>
          <p className="aeo-answer body-large text-muted-foreground max-w-3xl mx-auto text-balance">
            <strong>4 Web Lab</strong> è uno studio web con base a Legnaro (<Link to="/realizzazione-siti-web-padova" className="text-accent hover:underline font-medium">Padova</Link>) che realizza siti professionali, <Link to="/posizionamento-google-e-ai" className="text-accent hover:underline font-medium">SEO per Google e per le IA</Link> (ChatGPT, Gemini, Perplexity) e <Link to="/pubblicita-google-ads" className="text-accent hover:underline font-medium">campagne Google Ads</Link> per negozi, professionisti e PMI in tutta Italia.
          </p>
          <Link
            to="/chatgpt-ads"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border-2 border-accent/60 bg-accent/5 text-accent font-semibold text-sm hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Scopri il nuovo servizio di pubblicità in Chat GPT
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {cards.map((card, index) => (
            <StaggerItem key={index}>
              <div className="card-glass h-full flex flex-col items-start gap-4 group hover:-translate-y-1.5 transition-all duration-400">
                <div className="icon-box w-13 h-13 flex-shrink-0">
                  <card.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1.5">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>


        {/* Testimonials */}
        <AnimatedSection className="text-center mt-20 mb-10">
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

export default AboutSection;
