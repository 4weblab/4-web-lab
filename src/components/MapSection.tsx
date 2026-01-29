import { MapPin, Navigation } from 'lucide-react';

// TODO: Sostituire con i dati reali dell'attività
const businessData = {
  name: '4 Web Lab',
  address: 'Via Roma 123',
  city: 'Milano',
  postalCode: '20100',
  country: 'Italia',
  phone: '+39 02 1234567',
  // Coordinate per l'embed di Google Maps (Milano centro come placeholder)
  lat: 45.4642,
  lng: 9.1900,
  // URL per le indicazioni stradali
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Via+Roma+123,+Milano,+Italia',
};

const MapSection = () => {
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1!2d${businessData.lng}!3d${businessData.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjEiTiA5wrAxMSc0MC4wIkU!5e0!3m2!1sit!2sit!4v1234567890`;

  return (
    <section id="mappa" className="section-padding bg-background" style={{ scrollMarginTop: 'var(--header-height)' }}>
      <div className="container-section">
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="heading-2 mb-4">Dove siamo</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto text-balance">
            Vieni a trovarci nel nostro studio per un incontro di persona.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Address info */}
          <div className="lg:col-span-1 card-elevated">
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--gradient-accent)' }}
              >
                <MapPin className="w-6 h-6 text-accent-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-lg mb-1">Indirizzo</h3>
                <address className="text-muted-foreground not-italic">
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

            <p className="text-sm text-muted-foreground mt-4 text-center">
              {/* TODO: Inserire orari reali */}
              Lun - Ven: 9:00 - 18:00
            </p>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
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
              {/* Fallback for no JS or embed issues */}
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
            
            {/* Mobile tap hint */}
            <p className="text-sm text-muted-foreground mt-3 text-center lg:hidden">
              Tocca la mappa per aprire le indicazioni
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
