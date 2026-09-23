import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const zones = [
  { name: 'Legnaro', to: '/realizzazione-siti-web-legnaro' },
  { name: 'Padova', to: '/realizzazione-siti-web-padova' },
  { name: 'Piove di Sacco', to: '/realizzazione-siti-web-piove-di-sacco' },
  { name: 'Ponte San Nicolò', to: '/realizzazione-siti-web-ponte-san-nicolo' },
  { name: 'Albignasego', to: '/realizzazione-siti-web-albignasego' },
  { name: 'Vigonza', to: '/realizzazione-siti-web-vigonza' },
  { name: 'Abano Terme', to: '/realizzazione-siti-web-abano-terme' },
  { name: 'Cittadella', to: '/realizzazione-siti-web-cittadella' },
];

const HomeZoneSection = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--gradient-surface)' }}>
      <div className="container-section">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="icon-box mx-auto mb-5">
              <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 className="heading-2 mb-4">Operativi a Padova e in tutta la provincia</h2>
            <p className="body-large text-muted-foreground text-balance mb-8">
              Con base a Legnaro, seguiamo negozi, professionisti e aziende in tutta l'area. Se non vedi la tua città, chiedici: lavoriamo anche da remoto in tutta Italia.
            </p>

            <ul className="flex flex-wrap justify-center gap-3 mb-8">
              {zones.map((z) => (
                <li key={z.to}>
                  <Link
                    to={z.to}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link to="/zone-servite" className="text-accent hover:underline font-medium">
              Scopri tutte le zone servite →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HomeZoneSection;
