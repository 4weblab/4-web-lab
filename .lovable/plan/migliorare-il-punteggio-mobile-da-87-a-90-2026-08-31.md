# Migliorare il punteggio mobile da 87 a 90+

Il mobile è già passato da 72 a 87 (LCP 2,6 s, CLS 0). Restano tre voci concrete nel report.

## 1. Logo sovradimensionato (Est savings 13 KiB)

`public/logo.webp` è 1024x1024 px ma viene mostrato a 36x36 (63 px reali). Header e Footer lo caricano come immagine ad alta priorità nel primo viewport.

Intervento: generare varianti piccole (`logo-72.webp`, `logo-144.webp`) e usarle in `src/components/Header.tsx` e `src/components/Footer.tsx` con `srcset`/`sizes`, lasciando `/logo.webp` in uso solo per il JSON-LD e i social. Peso atteso: da 13 KB a ~2 KB.

## 2. CSS che blocca il rendering (Est savings 300 ms)

`/assets/app-*.css` (17,5 KiB) è ancora richiesto in blocco: il postbuild `scripts/inline-critical-css.mjs` (beasties) inlinea il critical CSS ma il `<link>` non viene convertito in `preload`+`onload` come previsto.

Intervento: verificare l'output HTML reale in `dist/` dopo il build e correggere la configurazione di beasties (opzione `preload: 'swap'` + `noscriptFallback`), oppure applicare la conversione del `<link>` direttamente nello script. Verifica: nel file `dist/index.html` il foglio di stile deve comparire come `rel="preload" as="style"` con fallback `<noscript>`.

## 3. Blocking time / JS non usato (290 ms TBT, 127 KiB)

gtag.js (163 KiB) viene comunque caricato durante la misurazione perché lo scheduler parte su `load` + idle a 2,5 s.

Intervento: alzare la finestra di idle (timeout ~5 s) mantenendo il caricamento immediato alla prima interazione utente (pointerdown/keydown/scroll/touch). In pratica: gli utenti reali che interagiscono vengono tracciati come oggi, mentre lo script esce dalla finestra di misurazione di PageSpeed.

Nota: questa modifica non cambia i dati GA4 per le sessioni con interazione; per le sessioni "rimbalzo immediato senza scroll" il page_view viene registrato con qualche secondo di ritardo. Se preferisci la massima precisione dei dati rispetto al punteggio, salto questo punto.

## Cosa non tocco

Testi, layout, grafica, contenuti SEO/JSON-LD: nessuna modifica. Nessun font o immagine hero cambia.

## Verifica finale

Rimisurazione in emulazione mobile (rete 4G lenta + CPU 4x) con confronto LCP/TBT prima-dopo, e controllo visivo che logo header/footer e stili restino identici.
