import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// TODO: Sostituire con dati reali (NAP - Name, Address, Phone)
const businessInfo = {
  name: '4 Web Lab',
  fullName: '4 Web Lab S.r.l.',
  vatNumber: 'P.IVA: 00000000000',
  // TODO: Inserire P.IVA reale
  address: 'Via Roma 123',
  city: 'Milano',
  postalCode: '20100',
  country: 'Italia',
  phone: '+39 351 682 6560',
  whatsapp: '393516826560',
  email: 'info@4weblab.it' // TODO: Inserire email reale
};
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${businessInfo.address}, ${businessInfo.city}`)}`;
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-section">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img alt="4 Web Lab logo" className="w-10 h-10 rounded-lg object-contain" src="/lovable-uploads/e01ad118-da3a-4298-8af4-f22d7bc20878.png" />
              <span className="font-serif text-xl font-semibold">{businessInfo.name}</span>
            </div>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Studio di produzione web per piccole attività e PMI. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione.
            </p>
            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Link rapidi</h3>
            <ul className="space-y-2">
              {[{
              label: 'Chi siamo',
              id: 'chi-siamo'
            }, {
              label: 'Servizi',
              id: 'servizi'
            }, {
              label: 'Portfolio',
              id: 'portfolio'
            }, {
              label: 'Contatti',
              id: 'contatti'
            }].map(item => <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors link-underline">
                    {item.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-semibold text-lg mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+393516826560" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +39 351 682 6560
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} {businessInfo.name}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link to="/cookie" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;