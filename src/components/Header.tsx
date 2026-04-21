import { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Punti di forza', href: '#punti-di-forza' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Domande Frequenti', href: '#faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contatti', href: '#contatti' },
];
interface HeaderProps {
  satelliteMode?: boolean;
}

const Header = ({ satelliteMode = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

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
      const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height') || '72', 10);
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
        <div className="font-serif text-xl font-semibold text-foreground flex items-center gap-2.5">
          <img
            alt="4 Web Lab logo"
            className="w-9 h-9 rounded-lg object-contain"
            src="/lovable-uploads/04336b0d-9434-4cc5-92bf-9fead391fd27.png"
            width={36}
            height={36}
            decoding="async"
          />
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-primary-foreground md:text-foreground'}`}>
            4 Web Lab
          </span>
        </div>

        {satelliteMode ? (
          <Link
            to="/"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-foreground hover:bg-muted/60"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
        ) : (
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                    activeSection === item.href.substring(1)
                      ? 'text-accent-foreground'
                      : isScrolled
                      ? 'text-foreground hover:bg-muted/60'
                      : 'text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                  style={
                    activeSection === item.href.substring(1)
                      ? { background: 'var(--gradient-accent)', boxShadow: '0 2px 8px hsl(207 90% 54% / 0.25)' }
                      : {}
                  }
                  aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Menu Button */}
        {satelliteMode ? (
          <Link
            to="/"
            className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-foreground hover:bg-muted/60"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla Home
          </Link>
        ) : (
          <button
            className="md:hidden p-2.5 rounded-xl hover:bg-muted/50 transition-colors"
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
        <AnimatePresence>
          {isOpen && !satelliteMode && (
            <motion.div
              id="mobile-menu"
              className="absolute top-full left-0 right-0 md:hidden border-b border-border/30"
              style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: 'var(--shadow-lg)',
              }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ul className="container-section py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? 'bg-accent text-accent-foreground'
                          : 'text-foreground hover:bg-muted/60'
                      }`}
                      aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
