
# Attivazione Google Analytics 4 conforme al consenso

Il tag fornito da Google è corretto ma, incollato tal quale in `<head>`, caricherebbe GA4 e scriverebbe i cookie `_ga` / `_ga_HWVJ1KWYSN` **prima** che l'utente accetti — in contrasto con:
- art. 122 Codice Privacy (consenso preventivo per cookie non tecnici)
- Linee guida Garante 10 giugno 2021
- il banner a categorie che abbiamo appena implementato in `src/components/CookieBanner.tsx` + `src/lib/consent.ts`

La soluzione corretta è **Google Consent Mode v2**: gtag viene caricato subito ma in stato `denied` di default, e si passa a `granted` solo quando l'utente accetta la categoria "statistici". Se rifiuta, GA4 non scrive cookie e invia al massimo "ping" anonimi senza identificatori (comportamento previsto e documentato da Google).

## 1. Inserimento del tag in `index.html`

In `<head>`, prima dei JSON-LD, aggiungiamo:

- Uno script inline **sincrono** che inizializza `dataLayer` e imposta i default di Consent Mode v2 a `denied` per tutte le categorie pubblicitarie e analitiche, con `wait_for_update: 500` per dare tempo al banner di leggere l'eventuale scelta già salvata.
- Se in `localStorage` è già presente un consenso valido (`cookie-consent-v1` con `analytics: true`, versione e scadenza OK), aggiornare subito lo stato a `granted` prima del primo `gtag('config', ...)`, così gli utenti che tornano non perdono il pageview.
- Lo `<script async src="…gtag/js?id=G-HWVJ1KWYSN">` di Google.
- Il blocco `gtag('js', new Date()); gtag('config', 'G-HWVJ1KWYSN', { anonymize_ip: true });`.

Note tecniche:
- `anonymize_ip: true` è ridondante su GA4 (che non registra l'IP completo) ma lo dichiariamo esplicitamente perché è citato nella Cookie Policy.
- Non usiamo `send_page_view: false`: GA4 continuerà a tracciare pageview in SPA tramite l'evento di route change (punto 3).

## 2. Collegamento al banner — `src/lib/consent.ts`

Nessun cambiamento all'API pubblica. Aggiungiamo un piccolo modulo `src/lib/analytics.ts` (o in fondo a `consent.ts`, come preferisci) che:

- All'avvio dell'app (`src/main.tsx` o `src/App.tsx`) si sottoscrive all'evento `consent-updated` già emesso da `saveConsent`.
- Alla ricezione, chiama `gtag('consent', 'update', { analytics_storage: <granted|denied> })`.
- Se `analytics` passa da `granted` a `denied`, invoca anche la cancellazione dei cookie `_ga` e `_ga_HWVJ1KWYSN` dal dominio corrente (per rispettare la revoca immediata).

## 3. Pageview su cambio route (SPA)

Il sito è una SPA React Router: senza aiuto, GA4 registra solo il primo pageview. Aggiungiamo un hook `useGaPageview` montato in `src/App.tsx` che, ad ogni cambio di `location.pathname + search`, se `hasAnalyticsConsent()` è true, chiama:

```
gtag('event', 'page_view', {
  page_path: location.pathname + location.search,
  page_location: window.location.href,
  page_title: document.title,
});
```

Se il consenso è denied, non fa nulla (Consent Mode gestisce eventuali ping).

## 4. Micro-aggiornamento Cookie Policy

`src/pages/CookiePolicy.tsx`: aggiungere una riga che cita esplicitamente l'ID misurazione `G-HWVJ1KWYSN` e menzionare l'uso di **Google Consent Mode v2** nella sezione GA4 (rafforza la trasparenza richiesta dal Garante). Nessun'altra modifica legale: le sezioni già scritte (basi giuridiche, DPF/SCC, 14 mesi, revoca) restano valide.

## 5. TypeScript

Aggiungere in `src/vite-env.d.ts` (o file dedicato `src/types/gtag.d.ts`) le dichiarazioni:

```ts
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
export {};
```

## File toccati

```text
MOD  index.html                       # gtag + Consent Mode v2 default denied + bootstrap da localStorage
NEW  src/lib/analytics.ts             # bridge consent-updated → gtag('consent','update') + purge cookie GA
NEW  src/hooks/useGaPageview.ts       # pageview su cambio route in SPA
MOD  src/App.tsx                      # inizializza analytics.ts + monta useGaPageview
MOD  src/pages/CookiePolicy.tsx       # cita ID G-HWVJ1KWYSN e Consent Mode v2
NEW  src/types/gtag.d.ts              # tipi window.gtag / dataLayer
```

## Fuori scope

- Google Tag Manager (usiamo gtag.js diretto, come da snippet fornito).
- Google Ads / Floodlight / eventi e-commerce custom.
- Server-side tagging.

## Cosa vedrai dopo il deploy

- Prima visita: banner mostrato, GA4 caricato ma in `denied` → nessun cookie `_ga*`.
- Utente clicca "Accetta tutti" o attiva "Statistici": consenso salvato, `consent update → granted`, cookie `_ga` / `_ga_HWVJ1KWYSN` scritti, pageview inviato.
- Utente clicca "Rifiuta" o chiude con X: nessun cookie GA, nessun pageview identificato.
- Revoca dal pulsante flottante: cookie GA rimossi immediatamente.

Confermi e passo in build mode?
