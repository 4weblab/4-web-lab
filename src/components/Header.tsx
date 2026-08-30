import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Siti web', href: '/#sitiweb' },
  { label: 'Realizzazioni', href: '/realizzazioni' },
  { label: 'SEO & AI', href: '/posizionamento-google-e-ai' },
  { label: 'Google ADS', href: '/pubblicita-google-ads' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq-realizzazione-siti-web' },
  { label: 'Contatti', href: '/contatti' },
];
interface HeaderProps {
  satelliteMode?: boolean;
}

const Header = ({ satelliteMode = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const isBlogArticle = pathname.startsWith('/blog/') && pathname !== '/blog';

  const backLinkClass = `inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
    isScrolled
      ? 'text-foreground hover:bg-muted/60'
      : 'text-primary-foreground hover:bg-primary-foreground/10'
  }`;

  const mobileBackLinkClass = `inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
    isScrolled
      ? 'text-foreground hover:bg-muted/60'
      : 'text-primary-foreground hover:bg-primary-foreground/10'
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
        isScrolled
          ? 'border-b border-border/30'
          : 'bg-transparent'
      }`}
      style={{
        height: 'var(--header-height)',
        ...(isScrolled
          ? {
              background: 'var(--glass-bg)',
              backdropFilter: `blur(${isScrolled ? '20px' : '0px'})`,
              WebkitBackdropFilter: `blur(${isScrolled ? '20px' : '0px'})`,
              boxShadow: 'var(--shadow-sm)',
            }
          : {}),
      }}
    >
      <nav className="container-section h-full flex items-center justify-between" aria-label="Navigazione principale">
        <Link to="/" aria-label="Vai alla home" className="font-serif text-xl font-semibold text-foreground flex items-center gap-2.5 rounded-lg hover:opacity-90 transition-opacity">
          <img alt="4 Web Lab logo" className="w-9 h-9 rounded-lg object-contain" src="/logo.webp" width={36} height={36} decoding="async" />
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground lg:text-foreground'}`}>
            4 Web Lab
          </span>
        </Link>

        {satelliteMode ? (
          <div className="hidden lg:flex items-center gap-2">
            {isBlogArticle && (
              <Link to="/blog" className={backLinkClass}>
                <ArrowLeft className="w-4 h-4" />
                Torna agli articoli
              </Link>
            )}
            <Link to="/" className={backLinkClass}>
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>
          </div>
        ) : (
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isRoute = item.href.startsWith('/');
              const isActive = !isRoute && activeSection === item.href.substring(1);
              const baseClass = `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                isActive
                  ? 'text-accent-foreground'
                  : isScrolled
                  ? 'text-foreground hover:bg-muted/60'
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`;
              const activeStyle = isActive
                ? { background: 'var(--gradient-accent)', boxShadow: '0 2px 8px hsl(207 90% 54% / 0.25)' }
                : {};
              return (
                <li key={item.href}>
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
              );
            })}
          </ul>
        )}

        {/* Mobile Menu Button */}
        {satelliteMode ? (
          <div className="lg:hidden flex items-center gap-2">
            {isBlogArticle && (
              <Link to="/blog" className={mobileBackLinkClass}>
                <ArrowLeft className="w-4 h-4" />
                Torna agli articoli
              </Link>
            )}
            <Link to="/" className={mobileBackLinkClass}>
              <ArrowLeft className="w-4 h-4" />
              Torna alla Home
            </Link>
          </div>
        ) : (
          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            )}
          </button>
        )}

        {/* Mobile Menu */}
        {isOpen && !satelliteMode && (
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
                    <li key={item.href}>
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
