/**
 * Bridge tra il banner cookie e Google Analytics 4 (Consent Mode v2).
 *
 * gtag.js è caricato in index.html con `analytics_storage` di default `denied`.
 * Qui ci limitiamo a inoltrare le scelte dell'utente a Consent Mode e, in
 * caso di revoca, a rimuovere i cookie _ga / _ga_<id> dal dominio corrente.
 */

import {
  CONSENT_UPDATED_EVENT,
  hasAnalyticsConsent,
  type ConsentRecord,
} from './consent';

export const GA_MEASUREMENT_ID = 'G-HWVJ1KWYSN';

function gtagSafe(...args: unknown[]) {
  if (typeof window === 'undefined') return;
  // gtag potrebbe non essere ancora pronto in casi limite: fallback su dataLayer.
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
}

function clearGaCookies() {
  if (typeof document === 'undefined') return;
  const host = window.location.hostname;
  // Genera i possibili domini padre (es. "4weblab.it", ".4weblab.it").
  const parts = host.split('.');
  const domains = new Set<string>();
  domains.add(host);
  domains.add(`.${host}`);
  for (let i = 1; i < parts.length - 1; i++) {
    const d = parts.slice(i).join('.');
    domains.add(d);
    domains.add(`.${d}`);
  }
  const gaCookieNames = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((n) => n === '_ga' || n.startsWith('_ga_') || n === '_gid' || n === '_gat');
  for (const name of gaCookieNames) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

function applyConsent(granted: boolean) {
  gtagSafe('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
  if (granted) {
    // Invia esplicitamente un pageview iniziale ora che il consenso è concesso.
    gtagSafe('event', 'page_view', {
      page_path: window.location.pathname + window.location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  } else {
    clearGaCookies();
  }
}

let initialized = false;

export function initAnalyticsBridge() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  // Se un consenso valido esiste già al mount (utente di ritorno), riallineiamo
  // subito lo stato di Consent Mode (index.html tenta il bootstrap ma questo è
  // il fallback sicuro).
  if (hasAnalyticsConsent()) {
    gtagSafe('consent', 'update', { analytics_storage: 'granted' });
  }

  window.addEventListener(CONSENT_UPDATED_EVENT, (e: Event) => {
    const detail = (e as CustomEvent<ConsentRecord>).detail;
    const granted = !!detail?.categories.analytics;
    applyConsent(granted);
  });
}