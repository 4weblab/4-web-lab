import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed left-0 right-0 z-40 border-t border-border/30 bottom-[var(--mobile-cta-height)] md:bottom-0"
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'var(--shadow-lg)',
          }}
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="container-section py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <p id="cookie-banner-title" className="sr-only">Informativa sui cookie</p>
                <p id="cookie-banner-description" className="text-sm text-muted-foreground">
                  Questo sito utilizza solo cookie tecnici necessari al funzionamento.
                  Continuando la navigazione accetti l'utilizzo dei cookie.{' '}
                  <Link to="/cookie" className="text-accent hover:underline font-medium">
                    Maggiori informazioni
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAccept}
                  className="btn-primary py-2 px-5 text-sm rounded-xl"
                  aria-label="Accetta i cookie e chiudi il banner"
                >
                  OK
                </button>
                <button
                  onClick={handleAccept}
                  className="p-2.5 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-muted/50"
                  aria-label="Chiudi banner cookie"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
