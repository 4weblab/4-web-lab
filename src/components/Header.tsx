import { useState, useEffect, useRef, Fragment } from 'react';
import { Menu, X, ArrowLeft, ChevronDown, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Realizzazioni', href: '/realizzazioni' },
  { label: 'Zone Servite', href: '/zone-servite' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq-realizzazione-siti-web' },
  { label: 'Contatti', href: '/contatti' },
];

const serviceItems = [
  { label: 'Siti per Negozi', href: '/siti-web-per-negozi' },
  { label: 'Siti per Professionisti', href: '/siti-web-per-professionisti' },
  { label: 'Siti per Aziende', href: '/siti-web-aziendali' },
  { label: 'SEO, AEO & GEO', href: '/posizionamento-google-e-ai', separatorBefore: true },
  { label: 'Google ADS', href: '/pubblicita-google-ads' },
  { label: 'ChatGPT Ads', href: '/chatgpt-ads' },
];
interface HeaderProps {
  satelliteMode?: boolean;
}

const Header = ({ satelliteMode = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith('/blog/') && pathname !== '/blog';
  const isSolid = isScrolled;
  // Testo chiaro solo sopra hero scure (Home) e solo prima dello scroll
  const lightText = !isSolid && !satelliteMode;

  const backIconClass = `inline-flex items-center justify-center p-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
    lightText
      ? 'text-primary-foreground hover:bg-primary-foreground/10'
      : 'text-foreground hover:bg-muted/60'
  }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const sectionId = href.substring(1);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const styles = getComputedStyle(document.documentElement);
      const headerHeight = parseFloat(styles.getPropertyValue('--header-height')) * 16 || 72;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'border-b border-border/30'
          : 'bg-transparent'
      }`}
      style={{
        height: 'var(--header-height)',
        ...(isSolid
          ? {
              background: 'var(--glass-bg)',
              backdropFilter: `blur(${isSolid ? '20px' : '0px'})`,
              WebkitBackdropFilter: `blur(${isSolid ? '20px' : '0px'})`,
              boxShadow: 'var(--shadow-sm)',
            }
          : {}),
      }}
    >
      <nav className="container-section h-full flex items-center justify-between" aria-label="Navigazione principale">
        <Link to="/" aria-label="Vai alla home" className="font-serif text-xl font-semibold text-foreground flex items-center gap-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <img alt="4 Web Lab logo" className="w-9 h-9 rounded-lg object-contain" src="/logo-72.webp" srcSet="/logo-72.webp 72w, /logo-144.webp 144w" sizes="36px" width={36} height={36} decoding="async" />
          <span className={`transition-colors duration-300 ${lightText ? 'text-primary-foreground lg:text-foreground' : 'text-foreground'}`}>
            4 Web Lab
          </span>
        </Link>

        {satelliteMode && (
          <div className="flex items-center gap-1.5 ml-auto lg:ml-0 mr-1 lg:mr-0">
            {isBlogArticle && (
              <Link to="/blog" className={backIconClass} aria-label="Torna agli articoli">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            )}
            <Link to="/" className={backIconClass} aria-label="Torna alla Home">
              <Home className="w-5 h-5" />
            </Link>
          </div>
        )}

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith('/');
              const isActive = !isRoute && activeSection === item.href.substring(1);
              const baseClass = `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                isActive
                  ? 'text-accent-foreground'
                  : isSolid
                  ? 'text-foreground hover:bg-muted/60'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`;
              const activeStyle = isActive
                ? { background: 'var(--gradient-accent)', boxShadow: '0 2px 8px hsl(207 90% 54% / 0.25)' }
                : {};
              return (
                <Fragment key={item.href}>
                  <li>
                    {isRoute ? (
                      <Link to={item.href} className={baseClass} style={activeStyle}>
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={baseClass}
                        style={activeStyle}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                  {item.href === '/' && (
                    <li
                      key="servizi"
                      className="relative"
                      ref={servicesRef}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        type="button"
                        className={`${baseClass} inline-flex items-center gap-1.5`}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        onClick={() => setServicesOpen((v) => !v)}
                      >
                        Servizi
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="absolute left-0 top-full pt-2">
                          <ul
                            className="min-w-[15rem] rounded-xl border border-border/40 bg-background/95 py-2"
                            style={{
                              backdropFilter: 'blur(14px)',
                              WebkitBackdropFilter: 'blur(14px)',
                              boxShadow: 'var(--shadow-lg)',
                            }}
                          >
                            {serviceItems.map((service) => (
                              <li key={service.label} className={service.separatorBefore ? 'mt-2 border-t border-border/40 pt-2' : ''}>
                                <Link
                                  to={service.href}
                                  className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted/60 transition-colors duration-300"
                                  onClick={() => setServicesOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isSolid ? 'text-foreground' : 'text-primary-foreground'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
            <div
              id="mobile-menu"
              className="absolute top-full left-0 right-0 lg:hidden border-b border-border/30 bg-background/95"
              style={{
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <ul className="container-section py-4 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isRoute = item.href.startsWith('/');
                  const isActive = !isRoute && activeSection === item.href.substring(1);
                  const cls = `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-muted/60'
                  }`;
                  return (
                    <Fragment key={item.href}>
                      <li>
                        {isRoute ? (
                          <Link to={item.href} className={cls} onClick={() => setIsOpen(false)}>
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href);
                            }}
                            className={cls}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                      {item.href === '/' && (
                        <li>
                          <button
                            type="button"
                            className={`${cls} w-full flex items-center justify-between text-left`}
                            aria-expanded={mobileServicesOpen}
                            onClick={() => setMobileServicesOpen((v) => !v)}
                          >
                            Servizi
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {mobileServicesOpen && (
                            <ul className="mt-1 mb-1 ml-3 border-l border-border/40 pl-3 flex flex-col gap-1">
                              {serviceItems.map((service) => (
                                <li key={service.label} className={service.separatorBefore ? 'mt-1 border-t border-border/40 pt-1' : ''}>
                                  <Link
                                    to={service.href}
                                    className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted/60 transition-all duration-300"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                  >
                                    {service.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )}
                    </Fragment>
                  );
                })}
              </ul>
            </div>
          )}
      </nav>
    </header>
  );
};

export default Header;
