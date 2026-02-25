import { MapPin, Navigation } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const businessData = {
  name: '4 Web Lab',
  address: 'Via Belluno 44',
  city: 'Legnaro (PD)',
  postalCode: '35020',
  country: 'Italia',
  phone: '+39 351 682 6560',
  lat: 45.3461,
  lng: 11.9536,
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Via+Belluno+44,+Legnaro,+PD,+Italia',
};

const MapSection = () => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1!2d${businessData.lng}!3d${businessData.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjEiTiA5wrAxMSc0MC4wIkU!5e0!3m2!1sit!2sit!4v1234567890`;

  return (
    <section id="mappa" className="section-padding bg-background" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <AnimatedSection className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="heading-2 mb-5">Dove siamo</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Vieni a trovarci nel nostro studio per un incontro di persona.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Address info */}
            <div className="lg:col-span-1 card-glass">
              <div className="flex items-start gap-4 mb-8">
                <div className="icon-box w-13 h-13 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg mb-1.5">Indirizzo</h3>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    {businessData.address}<br />
                    {businessData.postalCode} {businessData.city}<br />
                    {businessData.country}
                  </address>
                </div>
              </div>

              <a
                href={businessData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                aria-label="Apri indicazioni stradali su Google Maps"
              >
                <Navigation className="w-5 h-5" aria-hidden="true" />
                Apri indicazioni su Google Maps
              </a>

              <p className="text-sm text-muted-foreground mt-6 text-center">
                Lun - Ven: 9:00 - 18:00
              </p>
            </div>

            {/* Map embed */}
            <div className="lg:col-span-2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/30" style={{ boxShadow: 'var(--shadow-lg)' }}>
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mappa della sede di ${businessData.name}`}
                  className="absolute inset-0"
                />
                <noscript>
                  <a
                    href={businessData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-muted"
                  >
                    Clicca per aprire la mappa su Google Maps
                  </a>
                </noscript>
              </div>

              <p className="text-sm text-muted-foreground mt-4 text-center lg:hidden">
                Tocca la mappa per aprire le indicazioni
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MapSection;
