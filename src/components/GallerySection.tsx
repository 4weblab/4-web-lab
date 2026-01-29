import { ExternalLink } from 'lucide-react';

// TODO: Sostituire con immagini reali dei progetti
const projects = [
  {
    id: 1,
    title: 'Ristorante La Pergola',
    category: 'Ristorazione',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    description: 'Sito vetrina con menu digitale e prenotazioni online.',
  },
  {
    id: 2,
    title: 'Studio Legale Bianchi',
    category: 'Servizi professionali',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    description: 'Sito istituzionale con aree di competenza e contatti.',
  },
  {
    id: 3,
    title: 'Ferramenta Rossi',
    category: 'Retail',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop',
    description: 'Catalogo prodotti e informazioni punto vendita.',
  },
  {
    id: 4,
    title: 'Centro Estetico Aurora',
    category: 'Benessere',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop',
    description: 'Presentazione servizi e prenotazione appuntamenti.',
  },
  {
    id: 5,
    title: 'Officina Meccanica Verdi',
    category: 'Automotive',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop',
    description: 'Sito con servizi offerti e richiesta preventivi.',
  },
  {
    id: 6,
    title: 'Agenzia Immobiliare Casa',
    category: 'Immobiliare',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    description: 'Portale annunci con ricerca avanzata.',
  },
];

const GallerySection = () => {
  return (
    <section id="portfolio" className="section-padding" style={{ background: 'var(--gradient-surface)', scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">I nostri lavori</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Una selezione di progetti realizzati per i nostri clienti.
          </p>
        </div>

        {/* Gallery with horizontal scroll on mobile */}
        <div 
          className="gallery-scroll -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6"
          role="list"
          aria-label="Galleria progetti"
        >
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="gallery-item w-[280px] sm:w-[320px] md:w-auto flex-shrink-0 md:flex-shrink"
              role="listitem"
            >
              <div className="card-elevated overflow-hidden group h-full">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot del sito ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-medium flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      Vedi progetto
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-sans font-semibold text-lg mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
          ← Scorri per vedere altri progetti →
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
