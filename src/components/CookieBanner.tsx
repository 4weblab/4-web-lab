import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  CONSENT_OPEN_EVENT,
  getConsent,
  saveConsent,
} from '@/lib/consent';

type View = 'banner' | 'preferences';

const CookieBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [view, setView] = useState<View>('banner');
  const [analyticsOn, setAnalyticsOn] = useState(false);

  // Mostra il banner al primo caricamento se non c'è un consenso valido.
  useEffect(() => {
    const current = getConsent();
    if (!current) {
      const timer = setTimeout(() => {
        setMounted(true);
        // Doppio rAF per assicurare che la classe di transizione venga applicata dopo il mount.
        requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Riapertura dal pulsante flottante / footer / link nella Cookie Policy.
  useEffect(() => {
    const openHandler = () => {
      const current = getConsent();
      setAnalyticsOn(!!current?.categories.analytics);
      setView('preferences');
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsVisible(true)));
    };
    window.addEventListener(CONSENT_OPEN_EVENT, openHandler);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, openHandler);
  }, []);

  const close = useCallback(() => {
    setIsVisible(false);
    // Attende la transizione CSS prima di smontare il nodo e resettare la vista.
    setTimeout(() => {
      setMounted(false);
      setView('banner');
    }, 400);
  }, []);

  const handleAcceptAll = () => {
    saveConsent({ analytics: true });
    close();
  };

  const handleRejectAll = () => {
    saveConsent({ analytics: false });
    close();
  };

  const handleOpenPreferences = () => {
    const current = getConsent();
    setAnalyticsOn(!!current?.categories.analytics);
    setView('preferences');
  };

  const handleSavePreferences = () => {
    saveConsent({ analytics: analyticsOn });
    close();
  };

  // Chiusura con X = rifiuto (nessun consenso implicito).
  const handleDismiss = () => {
    saveConsent({ analytics: false });
    close();
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 border-t border-border/30"
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'var(--shadow-lg)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'opacity, transform',
      }}
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
          <div className="container-section py-3 sm:py-5 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-muted/50"
              aria-label="Chiudi banner (equivale a rifiuto dei cookie non necessari)"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>

            {view === 'banner' ? (
              <div className="flex flex-col gap-3 pr-10 sm:gap-4">
                <div>
                  <h2
                    id="cookie-banner-title"
                    className="text-sm sm:text-lg font-semibold text-foreground mb-1"
                  >
                    Rispettiamo la tua privacy
                  </h2>
                  <p
                    id="cookie-banner-description"
                    className="text-xs sm:text-sm text-muted-foreground leading-snug sm:leading-relaxed"
                  >
                    Utilizziamo cookie tecnici necessari al funzionamento del sito e,
                    previo tuo consenso, cookie statistici di terze parti (Google Analytics 4)
                    per misurare in forma aggregata come viene utilizzato il sito.
                    Puoi accettare tutti i cookie, rifiutarli o scegliere quali attivare.
                    Il consenso è revocabile in qualsiasi momento.{' '}
                    <Link to="/cookie" className="text-accent hover:underline font-medium">
                      Leggi la Cookie Policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="py-2 px-2 sm:px-5 text-xs sm:text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors"
                    type="button"
                  >
                    Rifiuta
                  </button>
                  <button
                    onClick={handleOpenPreferences}
                    className="py-2 px-2 sm:px-5 text-xs sm:text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors"
                    type="button"
                  >
                    Personalizza
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary py-2 px-2 sm:px-5 text-xs sm:text-sm rounded-xl"
                    type="button"
                  >
                    Accetta
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 pr-10">
                <div>
                  <h2
                    id="cookie-banner-title"
                    className="text-base sm:text-lg font-semibold text-foreground mb-1"
                  >
                    Preferenze cookie
                  </h2>
                  <p
                    id="cookie-banner-description"
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    Scegli quali categorie di cookie vuoi abilitare. I cookie tecnici
                    sono sempre attivi in quanto strettamente necessari.
                  </p>
                </div>

                <div className="flex flex-col gap-3 max-h-[45vh] overflow-y-auto pr-1">
                  {/* Necessari */}
                  <div className="flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        Cookie tecnici
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Strettamente necessari al funzionamento del sito
                        (memorizzazione del consenso, anti-spam del modulo di contatto).
                        Non richiedono consenso ex art. 122 Codice Privacy.
                      </p>
                    </div>
                    <span
                      className="shrink-0 inline-flex items-center h-6 px-2 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-muted text-muted-foreground"
                      aria-label="Sempre attivi"
                    >
                      Sempre attivi
                    </span>
                  </div>

                  {/* Analytics */}
                  <label className="flex items-start justify-between gap-4 rounded-xl border border-border/50 p-3 sm:p-4 cursor-pointer">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">
                        Cookie statistici (Google Analytics 4)
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        Ci aiutano a capire in forma aggregata come i visitatori
                        utilizzano il sito. IP anonimizzato, dati conservati 14 mesi,
                        trasferimento verso USA con Clausole Contrattuali Standard e
                        Data Privacy Framework.
                      </p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={analyticsOn}
                      aria-label="Attiva o disattiva cookie statistici"
                      onClick={() => setAnalyticsOn((v) => !v)}
                      className={`shrink-0 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        analyticsOn ? 'bg-accent' : 'bg-muted-foreground/30'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          analyticsOn ? 'translate-x-5' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors"
                    type="button"
                  >
                    Rifiuta tutti
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="py-2 px-5 text-sm rounded-xl border border-border bg-background hover:bg-muted/60 text-foreground font-medium transition-colors"
                    type="button"
                  >
                    Accetta tutti
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="btn-primary py-2 px-5 text-sm rounded-xl sm:ml-auto"
                    type="button"
                  >
                    Salva preferenze
                  </button>
                </div>
              </div>
            )}
          </div>
    </div>
  );
};

export default CookieBanner;
