import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { hasAnalyticsConsent } from '@/lib/consent';

/**
 * Registra un pageview GA4 su ogni cambio di route (SPA), ma solo se
 * l'utente ha prestato consenso ai cookie statistici. Se il consenso è
 * negato, non fa nulla: Consent Mode gestisce eventuali segnali anonimi.
 */
export function useGaPageview() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!hasAnalyticsConsent()) return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);
}