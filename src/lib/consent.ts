/**
 * Consent management helper (GDPR / Linee guida Garante 10 giugno 2021).
 *
 * Il consenso è granulare, informato, revocabile e documentabile.
 * Nessun cookie non tecnico deve essere scritto finché `analytics` non è true.
 */

export type ConsentCategories = {
  necessary: true; // sempre attivi
  analytics: boolean;
};

export type ConsentRecord = {
  categories: ConsentCategories;
  timestamp: number; // ms epoch
  version: number;
};

// Incrementare quando cambia la Cookie Policy: il banner riapparirà a tutti.
export const CONSENT_VERSION = 1;

// Il consenso scade dopo 6 mesi (raccomandazione Garante).
export const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 * 6;

export const CONSENT_STORAGE_KEY = 'cookie-consent-v1';
// Legacy key usata dalla vecchia versione del banner (semplice boolean).
export const LEGACY_CONSENT_KEY = 'cookie-consent-accepted';

export const CONSENT_UPDATED_EVENT = 'consent-updated';
export const CONSENT_OPEN_EVENT = 'consent-open-preferences';

export function getConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (!parsed || typeof parsed !== 'object') return null;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(categories: Omit<ConsentCategories, 'necessary'>): ConsentRecord {
  const record: ConsentRecord = {
    categories: { necessary: true, analytics: !!categories.analytics },
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    // Pulizia della vecchia chiave (banner semplice "OK").
    localStorage.removeItem(LEGACY_CONSENT_KEY);
  } catch {
    // no-op (private mode / storage disabled)
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record }));
  }
  return record;
}

export function hasAnalyticsConsent(): boolean {
  return !!getConsent()?.categories.analytics;
}

export function openPreferences() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
  }
}