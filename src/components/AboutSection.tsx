import { Users, Target, Lightbulb } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from './AnimatedSection';
const cards = [{
  icon: Users,
  title: 'Approccio personale',
  description: 'Lavoriamo fianco a fianco con ogni cliente, comprendendo le specifiche esigenze del suo settore.'
}, {
  icon: Target,
  title: 'Orientati ai risultati',
  description: 'Non solo belli da vedere: i nostri siti sono progettati per portare contatti e clienti.'
}, {
  icon: Lightbulb,
  title: 'Soluzioni su misura',
  description: 'Niente template generici: ogni progetto è costruito sulle tue reali necessità.'
}];
const AboutSection = () => {
  return <section id="chi-siamo" className="section-padding" style={{
    background: 'hsl(210 25% 98%)',
    scrollMarginTop: 'var(--header-height)'
  }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Chi siamo</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Siamo uno studio di produzione web specializzato nella creazione di siti internet per attività commerciali, professionisti e piccole media imprese.      
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="space-y-7" direction="left">
            <p className="body-base text-muted-foreground">
              Collaboriamo con professionisti, negozi e aziende in tutta Italia, seguendo ogni progetto da remoto attraverso un processo strutturato che garantisce chiarezza, tempi certi e qualità. Non vendiamo template: progettiamo soluzioni su misura, pensate per convertire visitatori in clienti. Realizziamo siti web professionali per professionisti, negozi e aziende che operano su tutto il territorio nazionale.
            </p>
            <p className="body-base text-muted-foreground">
              Ogni progetto nasce dall'ascolto delle esigenze del cliente e si sviluppa con un approccio orientato ai risultati: 
              design curato, ottimizzazione per i motori di ricerca e performance elevate.
            </p>
            <blockquote className="body-base text-muted-foreground italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-2xl">
              "Il nostro obiettivo è rendere il web accessibile a chi vuole crescere online, senza complicazioni e con un partner di fiducia al proprio fianco."
            </blockquote>
          </AnimatedSection>

          <StaggerContainer className="grid gap-5" staggerDelay={0.12}>
            {cards.map((card, index) => <StaggerItem key={index}>
                <div className="card-glass flex items-start gap-5 group hover:-translate-y-1.5 transition-all duration-400">
                  <div className="icon-box w-13 h-13 flex-shrink-0">
                    <card.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg mb-1.5">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </StaggerItem>)}
          </StaggerContainer>
        </div>
      </div>
    </section>;
};
export default AboutSection;