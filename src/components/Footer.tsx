import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openPreferences } from '@/lib/consent';

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

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:pb-16 pb-[calc(var(--mobile-cta-height)+1rem)]">
      <div className="container-section">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Colonna 1 - Brand */}
          <div className="text-left sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 hover:opacity-80 transition-opacity duration-300">
              <img
                alt="4 Web Lab logo"
                className="w-10 h-10 rounded-xl object-contain"
                src="/logo-72.webp"
                srcSet="/logo-72.webp 72w, /logo-144.webp 144w"
                sizes="40px"
                width={40}
                height={40}
                loading="lazy"
                decoding="async" />
              <span className="font-serif text-xl font-bold">{businessInfo.name}</span>
            </Link>
            <p className="text-primary-foreground/60 leading-relaxed text-sm">
              Studio di soluzioni web per negozi, professionisti ed aziende con base a Legnaro (Padova), attivo su Padova e provincia. Creiamo siti professionali, ottimizzati per i motori di ricerca e orientati alla conversione per attività in tutta Italia.
            </p>
            <div className="mt-5">
              <Link to="/zone-servite" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4 text-xs font-semibold uppercase tracking-wider">
                Zone Servite
              </Link>
            </div>
          </div>

          {/* Colonna 2 - Soluzioni */}
          <div className="text-left">
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Soluzioni
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/siti-web-per-negozi" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Siti per Negozi
                </Link>
              </li>
              <li>
                <Link to="/siti-web-per-professionisti" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Siti per Professionisti
                </Link>
              </li>
              <li>
                <Link to="/siti-web-aziendali" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Siti per Aziende
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Esplora */}
          <div className="text-left">
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Esplora
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/posizionamento-google-e-ai" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  SEO & AI
                </Link>
              </li>
              <li>
                <Link to="/pubblicita-google-ads" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Google ADS
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq-realizzazione-siti-web" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Domande Frequenti (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/chatgpt-ads" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  ChatGPT Ads
                </Link>
              </li>
              <li>
                <Link to="/realizzazione-siti-web-padova" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-300 hover:underline underline-offset-4">
                  Siti Web a Padova
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 4 - Contatti */}
          <div className="text-left">
            <h3 className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Contatti
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+393514656042"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>+39 351 465 6042</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@4weblab.it"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>info@4weblab.it</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-1 text-sm text-primary-foreground/45">
            <span>© {currentYear} {businessInfo.name}. Tutti i diritti riservati.</span>
            <span className="hidden md:inline text-primary-foreground/25">|</span>
            <span>{businessInfo.fullName} — {businessInfo.vatNumber}</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/cookie" className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4">
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={openPreferences}
              className="text-primary-foreground/45 hover:text-primary-foreground transition-colors duration-300 hover:underline underline-offset-4"
            >
              Gestisci cookie
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
