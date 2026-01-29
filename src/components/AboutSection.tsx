import { Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding bg-background" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">Chi siamo</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Siamo uno studio di produzione web specializzato nella creazione di siti internet per piccole attività e PMI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="body-base text-muted-foreground">
              Aiutiamo imprenditori, artigiani, professionisti e piccole aziende a costruire una presenza online efficace. 
              Non vendiamo template: progettiamo soluzioni su misura, pensate per convertire visitatori in clienti.
            </p>
            <p className="body-base text-muted-foreground">
              Ogni progetto nasce dall'ascolto delle esigenze del cliente e si sviluppa con un approccio orientato ai risultati: 
              design curato, ottimizzazione per i motori di ricerca e performance elevate.
            </p>
            {/* TODO: Inserire descrizione specifica del team/fondatore */}
            <p className="body-base text-muted-foreground italic border-l-4 border-accent pl-4">
              "Il nostro obiettivo è rendere il web accessibile a chi vuole crescere online, senza complicazioni e con un partner di fiducia al proprio fianco."
            </p>
          </div>

          <div className="grid gap-6">
            <div className="card-elevated flex items-start gap-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gradient-accent)' }}>
                <Users className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg mb-1">Approccio personale</h3>
                <p className="text-muted-foreground text-sm">
                  Lavoriamo fianco a fianco con ogni cliente, comprendendo le specifiche esigenze del suo settore.
                </p>
              </div>
            </div>

            <div className="card-elevated flex items-start gap-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gradient-accent)' }}>
                <Target className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg mb-1">Orientati ai risultati</h3>
                <p className="text-muted-foreground text-sm">
                  Non solo belli da vedere: i nostri siti sono progettati per portare contatti e clienti.
                </p>
              </div>
            </div>

            <div className="card-elevated flex items-start gap-4 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gradient-accent)' }}>
                <Lightbulb className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg mb-1">Soluzioni su misura</h3>
                <p className="text-muted-foreground text-sm">
                  Niente template generici: ogni progetto è costruito sulle tue reali necessità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
