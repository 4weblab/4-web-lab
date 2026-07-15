
# Aggiornamento GDPR per attivazione Google Analytics

Interventi solo su **parte legale** e **meccanica del cookie banner**. Non viene installato lo script GA4 in questa fase: verrà attivato in un secondo momento leggendo il consenso salvato.

## 1. Nuovo Cookie Banner a categorie

File: `src/components/CookieBanner.tsx` (riscrittura)

Banner a due livelli conforme alle Linee guida Garante Privacy 10 giugno 2021:

- **Livello 1 — banner iniziale** con testo informativo breve e 3 pulsanti equivalenti per stile e prominenza (nessun "dark pattern"):
  - `Accetta tutti`
  - `Rifiuta tutti`
  - `Personalizza`
- **Livello 2 — pannello preferenze** (aperto da "Personalizza"): toggle per categoria
  - *Cookie tecnici* — sempre attivi, toggle disabilitato
  - *Cookie statistici (Google Analytics 4)* — off di default
  - Pulsante `Salva preferenze`
- Chiusura con la X = **equivalente a rifiuto** (no consenso implicito).
- Alla prima visita **nessun cookie non tecnico viene scritto** finché l'utente non sceglie.
- Il consenso è **granulare, informato, revocabile e documentabile**:
  - salvato in `localStorage` come oggetto `{ necessary: true, analytics: bool, timestamp, version }`
  - `version` incrementata quando cambia la Cookie Policy → il banner riappare automaticamente
  - durata max 6 mesi (poi ri-richiesta), come raccomandato dal Garante
- Espone un evento globale `window.dispatchEvent(new CustomEvent('consent-updated', { detail }))` e un helper `getConsent()` che in futuro attiverà/disattiverà GA4 (integrazione fuori da questo intervento).

## 2. Pulsante flottante "Gestisci cookie" sempre visibile

Nuovo file: `src/components/CookiePreferencesButton.tsx`

- Icona rotonda 40×40 fissa in basso-sinistra (non collide con il WhatsApp button in basso-destra), z-index sotto banner e sopra contenuto.
- Rispetta la palette del sito (rounded-xl, glass, accento navy/arancio).
- Riapre il pannello preferenze del CookieBanner via evento globale.
- Nascosta quando il banner è già aperto per non sovrapporsi.
- Aggiunto anche un link testuale "Gestisci preferenze cookie" nel footer e in fondo alla Cookie Policy per ridondanza legale.

## 3. Cookie Policy aggiornata

File: `src/pages/CookiePolicy.tsx`

- Rimossa la frase "Non sono presenti Google Analytics…".
- Nuova sezione **"Cookie statistici — Google Analytics 4"**:
  - finalità: misurazione anonima del traffico
  - titolare del trattamento del cookie: Google Ireland Limited
  - base giuridica: **consenso ex art. 122 Codice Privacy**
  - trasferimento extra-UE: USA con Clausole Contrattuali Standard e misure supplementari (Data Privacy Framework)
  - IP anonimizzato (GA4 non registra l'IP completo)
  - conservazione: 14 mesi (impostazione consigliata)
- Tabella cookie estesa con riga per `_ga` (2 anni) e `_ga_<container-id>` (2 anni), tipologia "Statistica — terza parte".
- Sezione **"Revoca e modifica del consenso"** che spiega:
  - pulsante flottante sempre visibile
  - link nel footer
  - possibilità di cancellare i cookie dal browser
- Aggiornata la nota base giuridica: cookie tecnici ex art. 122 c.1, cookie statistici solo previo consenso.

## 4. Privacy Policy aggiornata

File: `src/pages/PrivacyPolicy.tsx`

- Nuova sezione **"Dati raccolti tramite strumenti di misurazione"** con riferimento a GA4 (dati aggregati e pseudonimi) e rimando alla Cookie Policy.
- Nuova sezione **"Trasferimenti di dati extra-UE"** (Google USA, SCC + DPF).
- Sezione "Base giuridica" integrata con art. 6.1.a GDPR per consenso analytics.
- Sezione "Diritti dell'interessato" invariata (già completa).

## 5. Note tecniche (per il futuro developer / integrazione GA)

Fuori scope questa iterazione, ma il banner è predisposto:
- Google Consent Mode v2 può essere collegato ascoltando `consent-updated`.
- Finché `analytics=false` nessun tag GA4 deve essere caricato / il tag deve stare in `default consent denied`.

## File modificati/creati

```text
MOD  src/components/CookieBanner.tsx      # banner 3 pulsanti + pannello categorie
NEW  src/components/CookiePreferencesButton.tsx   # icona flottante permanente
MOD  src/components/Footer.tsx            # link "Gestisci cookie"
MOD  src/pages/CookiePolicy.tsx           # sezione GA4, tabella, revoca
MOD  src/pages/PrivacyPolicy.tsx          # sezione analytics + trasferimenti extra-UE
MOD  src/App.tsx                          # monta CookiePreferencesButton
```

## Fuori scope (dichiarato)

- Installazione script `gtag.js` / GA4
- Configurazione Google Tag Manager
- Consent Mode v2 (predisposizione sì, wiring reale no)
- Modifiche grafiche non richieste dall'aggiornamento legale
