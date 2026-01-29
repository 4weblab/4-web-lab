import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      // Small delay to not interfere with initial page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg animate-slide-in-up"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="container-section py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p id="cookie-banner-title" className="sr-only">Informativa sui cookie</p>
            <p id="cookie-banner-description" className="text-sm text-muted-foreground">
              Questo sito utilizza solo cookie tecnici necessari al funzionamento. 
              Continuando la navigazione accetti l'utilizzo dei cookie.{' '}
              <Link to="/cookie" className="text-accent hover:underline">
                Maggiori informazioni
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="btn-primary py-2 px-4 text-sm"
              aria-label="Accetta i cookie e chiudi il banner"
            >
              OK
            </button>
            <button
              onClick={handleAccept}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Chiudi banner cookie"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
