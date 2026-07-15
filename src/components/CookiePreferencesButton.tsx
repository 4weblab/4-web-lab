import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { openPreferences, CONSENT_UPDATED_EVENT, getConsent } from '@/lib/consent';

/**
 * Pulsante flottante sempre visibile per riaprire il pannello preferenze cookie.
 * Posizionato in basso-sinistra per non collidere con il WhatsApp button (basso-destra).
 */
const CookiePreferencesButton = () => {
  // Rimane nascosto finché l'utente non ha espresso una prima scelta,
  // così non si sovrappone al banner iniziale.
  const [hasChosen, setHasChosen] = useState(false);

  useEffect(() => {
    setHasChosen(!!getConsent());
    const onUpdate = () => setHasChosen(!!getConsent());
    window.addEventListener(CONSENT_UPDATED_EVENT, onUpdate);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onUpdate);
  }, []);

  if (!hasChosen) return null;

  return (
    <button
      type="button"
      onClick={openPreferences}
      aria-label="Gestisci preferenze cookie"
      title="Gestisci preferenze cookie"
      className="fixed bottom-4 left-4 z-40 w-11 h-11 rounded-full flex items-center justify-center border border-border/50 text-primary hover:text-accent transition-colors"
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <Cookie className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};

export default CookiePreferencesButton;