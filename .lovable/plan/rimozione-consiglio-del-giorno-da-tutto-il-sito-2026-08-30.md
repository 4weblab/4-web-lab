# Rimozione "Consiglio del giorno" da tutto il sito

Eliminare completamente la barra di notifica superiore (`TopNotificationBar`) e ogni suo riferimento, ripulendo anche la variabile CSS `--notification-bar-height` usata per gli offset di layout.

## Modifiche

1. **Layout.tsx** — rimuovere import e render di `<TopNotificationBar />`.
2. **src/components/TopNotificationBar.tsx** — eliminare il file.
3. **src/index.css** — rimuovere la variabile `--notification-bar-height: 2.5rem` e aggiornare `scroll-padding-top` a `var(--header-height)`.
4. **Header.tsx** — rimuovere la lettura di `--notification-bar-height` e fissare il posizionamento sticky a `top: 0` (ripulire la logica JS/CSS associata).
5. **Pagine che usano la variabile nel calc dell'offset** (Hero.tsx, SitiWebPadova, SitiWebLegnaro, Realizzazioni, SitiWebProfessionisti, PubblicitaGoogleAds, SitiWebNegozi, PosizionamentoGoogleEAi, SitiWebAziendali, DemoRbSncEdilizia, FaqSitiWeb) — sostituire i `calc(var(--header-height) + var(--notification-bar-height, 0px))` con il solo `var(--header-height)`.

## Verifica

- Build SSG OK (tutte le pagine prerenderizzate senza errori).
- Controllo che non restino riferimenti a `notification-bar-height` o `TopNotificationBar`.
- Verifica visiva nel preview: niente spazio vuoto sopra l'header su mobile e desktop.
