
Obiettivo: fare un controllo qualità orientato a ciò che PageSpeed/PageInsight può segnalare come “test non buoni”, distinguendo tra veri errori di codice, problemi di performance e segnali SEO/accessibilità.

1. Correggere i warning runtime che peggiorano qualità e affidabilità
- Risolvere i warning React presenti in console: “Function components cannot be given refs”.
- Verificare i componenti coinvolti nel rendering iniziale (`App`, `ScrollToTop`, provider UI e componenti Radix/Shadcn) per trovare quale componente riceve un `ref` senza usare `forwardRef`.
- Adeguare il componente problematico al pattern corretto oppure rimuovere il passaggio del ref se non serve.
- Obiettivo: eliminare warning in console, che sono un segnale di qualità bassa anche se non rompono la UI.

2. Ridurre il peso delle risorse più costose above the fold
- Sostituire o ottimizzare i loghi caricati da `lovable-uploads`, che risultano molto pesanti rispetto al loro uso reale in header/footer.
- Portare i logo principali in formato ottimizzato coerente con il progetto (preferibilmente WebP o PNG molto compresso) e con dimensioni adatte all’effettiva resa.
- Uniformare header e footer a una sola asset ottimizzata, così da evitare doppioni pesanti sul caricamento iniziale.
- Obiettivo: abbassare LCP/FCP e ridurre i download inutili.

3. Alleggerire il bundle iniziale della home
- Analizzare il fatto che il router carica molte pagine e demo nel bootstrap iniziale.
- Convertire in lazy loading le pagine non critiche, in particolare:
  - pagine blog
  - landing secondarie
  - demo showcase
  - policy pages
- Mantenere la home e i componenti davvero above the fold nel percorso principale.
- Obiettivo: ridurre JavaScript iniziale, parse time e tempo di interattività.

4. Rendere più robusta la strategia di animazioni
- Ridurre il costo di `framer-motion` nel caricamento iniziale della home.
- Mantenere il vincolo già presente in memoria: niente animazioni pesanti sull’LCP e sull’H1.
- Valutare:
  - rimozione di motion dagli elementi above the fold non essenziali
  - semplificazione di `AnimatedSection`
  - eventuale lazy load delle animazioni sotto la piega
- Obiettivo: migliorare FCP/INP e ridurre script execution.

5. Rifinire hero e contenuto above the fold
- Verificare che l’immagine hero resti prioritaria ma senza lavoro extra inutile.
- Controllare che non ci siano overlay, ombre, blur o animazioni che aumentano troppo style recalculation/script cost all’avvio.
- Valutare se parte della UI iniziale può essere resa più statica.
- Obiettivo: rendere il primo rendering più leggero senza cambiare il design percepito.

6. Migliorare il caricamento font
- Riesaminare il setup font in `index.html` per evitare ritardi inutili al first paint.
- Verificare:
  - famiglie realmente usate
  - pesi realmente necessari
  - possibile riduzione delle varianti richieste
- Obiettivo: diminuire il tempo di paint e i blocchi stilistici.

7. Fare una pulizia tecnica del codice
- Controllare import inutilizzati, componenti legacy e file ancora presenti ma non più usati direttamente.
- Verificare le vecchie pagine mantenute solo per redirect/legacy per evitare codice morto che confonde manutenzione e bundle strategy.
- Controllare coerenza dei meta fallback tra `index.html` e `App.tsx`, senza duplicazioni inutili.
- Obiettivo: migliorare qualità generale del codice e ridurre complessità.

8. Rieseguire la verifica finale orientata a PageSpeed
- Controllare di nuovo:
  - console pulita
  - caricamento home
  - peso immagini principali
  - numero/rilevanza degli script iniziali
  - eventuali regressioni SEO/accessibilità
- Confermare che non siano stati toccati contenuti o struttura editoriale oltre al necessario tecnico.

Dettagli tecnici emersi dall’audit attuale
- I problemi non sembrano “test unitari falliti”: il progetto ha Vitest configurato e non emergono segnali che il problema di PageSpeed dipenda dai test.
- Il vero problema è più probabilmente di qualità/performance runtime:
  - warning React sui `ref`
  - immagini logo molto pesanti in header/footer
  - tanto JavaScript iniziale caricato sulla home
  - uso esteso di `framer-motion`
- Metriche osservate sulla home:
  - FCP alto
  - full load alto
  - oltre 100 risorse caricate
  - immagini logo tra le risorse più pesanti
- File probabilmente coinvolti:
  - `src/App.tsx`
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx`
  - `src/components/Hero.tsx`
  - `src/components/AnimatedSection.tsx`
  - `src/components/ScrollToTop.tsx`
  - `src/pages/Index.tsx`
  - `index.html`

Esito atteso
- Niente warning React in console.
- Bundle iniziale più leggero.
- Header/footer con asset molto più ottimizzate.
- Home più veloce nel first paint.
- Migliore qualità percepita da PageSpeed/PageInsight senza alterare il contenuto del sito.
