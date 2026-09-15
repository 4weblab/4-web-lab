# Verifica CLS desktop e prossimi passi PageSpeed

## Esito della verifica (già eseguita)

Test Lighthouse desktop sulla preview corrente: **CLS ≈ 0.000** (praticamente zero). Gli unici micro-spostamenti rilevati (0.000001) vengono dal cursore lampeggiante dell'animazione di scrittura — trascurabili.

Il fix dei font hero funziona: il problema CLS 0.211 visto nello screenshot PageSpeed riguarda la versione **pubblicata su 4weblab.it (Netlify)**, che non include ancora le ultime modifiche. Non serve alcuna correzione al codice.

## Azioni

1. **Pubblicare/deployare** la versione corrente su Netlify (push), così il sito live riceve il fix dei font e dell'hero.
2. **Ri-testare su PageSpeed Insights** dopo il deploy: atteso CLS desktop ≈ 0 come su mobile.

## Miglioramenti opzionali rimasti (dai tuoi screenshot)

Il punteggio performance resta limitato da:

- **Mobile LCP 2.7 s**: l'immagine hero pesa sul primo rendering. Possibile riduzione: compressione ulteriore di `hero-bg-mobile.webp` (quality ~70) e taglio dimensioni.
- **Mobile TBT 290 ms / Desktop 80 ms**: JavaScript principale. Possibile riduzione: caricamento ritardato delle sezioni sotto la piega (TrustBar, carousel servizi) con lazy render.
- **Accessibilità 97** e **Agentic Browsing 2/3 (desktop)**: dettagli minori da verificare nel report esteso.

Questi interventi sono opzionali: li eseguo solo se vuoi spingere il punteggio oltre 90.
