import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessInfo = {
  name: '4 Web Lab',
  fullName: '4 Web Lab di Fullin Carlo',
  vatNumber: 'P.IVA: 05765760284',
  address: 'Via Belluno 44',
  city: 'Legnaro (PD)',
  postalCode: '35020',
  country: 'Italia',
  phone: '+39 351 465 6042',
  whatsapp: '393514656042',
  email: 'info@4weblab.it'
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}`;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:pb-16 pb-[calc(var(--mobile-cta-height)+1rem)]">
      <div className="container-section">
        <div className="flex flex-col items-center text-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center justify-center gap-2.5 mb-6 hover:opacity-80 transition-opacity duration-300">
              <img
                alt="4 Web Lab logo"
                className="w-10 h-10 rounded-xl object-contain"
                src="/lovable-uploads/e01ad118-da3a-4298-8af4-f22d7bc20878.png" />
              <span className="font-serif text-xl font-bold">{businessInfo.name}</span>
            </Link>
            <p className="text-primary-foreground/60 max-w-md leading-relaxed">
              Studio di produzione web per negozi, professionisti ed aziende. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione.
            </p>
          </div>

          {/* Contact Info */}
          <ul className="flex flex-col sm:flex-row sm:flex-nowrap gap-x-8 gap-y-3 mt-4 items-center">
            <li>
              <a
                href="tel:+393514656042"
                className="flex items-center gap-2.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span className="text-primary-foreground/45">/</span>
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                +39 351 465 6042
              </a>
            </li>
            <li>
              <a
                href="mailto:info@4weblab.it"
                className="flex items-center gap-2.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                <Mail className="w-5 h-5" aria-hidden="true" />
                info@4weblab.it
              </a>
            </li>
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/12 pt-8 flex flex-col items-center text-center gap-x-6 gap-y-2">
          <p className="text-primary-foreground/45 text-sm whitespace-nowrap">
            © {currentYear} {businessInfo.name}. Tutti i diritti riservati.
          </p>
          <p className="text-primary-foreground/45 text-sm">
            {businessInfo.fullName} — {businessInfo.vatNumber}
          </p>
          <div className="flex items-center gap-4 mt-1">
            <Link to="/privacy" className="text-primary-foreground/45 text-sm hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/25">​</span>
            <Link to="/cookie" className="text-primary-foreground/45 text-sm hover:text-primary-foreground transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;