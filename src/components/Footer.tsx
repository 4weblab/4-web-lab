import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const businessInfo = {
  name: '4 Web Lab',
  fullName: '4 Web Lab S.r.l.',
  vatNumber: 'P.IVA: 00000000000',
  address: 'Via Roma 123',
  city: 'Milano',
  postalCode: '20100',
  country: 'Italia',
  phone: '+39 351 682 6560',
  whatsapp: '393516826560',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img
                alt="4 Web Lab logo"
                className="w-10 h-10 rounded-xl object-contain"
                src="/lovable-uploads/e01ad118-da3a-4298-8af4-f22d7bc20878.png" />

              <span className="font-serif text-xl font-bold">{businessInfo.name}</span>
            </div>
            <p className="text-primary-foreground/60 mb-5 max-w-md leading-relaxed">Studio di produzione web per negozi, professionisti ed aziende. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-5">Link rapidi</h3>
            <ul className="space-y-3">
              {[
              { label: 'Chi siamo', id: 'chi-siamo' },
              { label: 'Servizi', id: 'servizi' },
              { label: 'Contatti', id: 'contatti' }].
              map((item) =>
              <li key={item.id}>
                  <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 link-underline">

                    {item.label}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-sans font-bold text-lg mb-5">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+393516826560"
                  className="flex items-center gap-2.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">

                  <Phone className="w-5 h-5" aria-hidden="true" />
                  +39 351 682 6560
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">

                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/45 text-sm">
            © {currentYear} {businessInfo.name}. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-5 text-sm">
            <Link to="/privacy" className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-primary-foreground/15">|</span>
            <Link to="/cookie" className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;