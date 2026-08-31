# Perché il mobile fa 72 e il desktop 99

## Diagnosi (misurata sul sito live in emulazione mobile con rete 4G lenta + CPU 4x)

L'LCP mobile è l'immagine hero (`/hero/hero-bg-mobile.webp`, solo 62 KB) che però finisce di scaricarsi a **5,0 s** e viene dipinta a **5,1 s** (misura riprodotta: 7,1 s su PageSpeed).

Il motivo non è l'immagine: nella stessa finestra il browser scarica **35 file di font in parallelo, circa 600 KB**, tutti a priorità alta, saturando la banda mobile:

- `@fontsource-variable/inter/wght.css` e `@fontsource/playfair-display/{600,700,800}.css` importano **tutti i subset Unicode** (latin, latin-ext, cyrillic, cyrillic-ext, greek, greek-ext, vietnamese) — anche quelli inutili per un sito italiano.
- Playfair carica anche i **duplicati legacy `.woff`** oltre ai `.woff2` (doppio peso per nulla: nessun browser attuale ha bisogno del woff).
- I subset pesanti (`inter-latin-ext` 85 KB, `inter-latin` 48 KB) finiscono di arrivare a 5,4 s, in concorrenza diretta con l'hero.

Su desktop la banda è ~6x superiore, quindi gli stessi 600 KB non spostano l'LCP (0,9 s) e il punteggio resta 99. È un problema puramente di contesa di banda, non di codice della pagina.

Contribuiscono in secondo piano: le 3 immagini card di `UserRoutingSection` (~150 KB) che partono comunque a 0,7 s pur essendo `loading="lazy"` (Chrome le considera vicine al viewport), e il CSS di 18 KB ancora richiesto in blocco.

## Interventi previsti

1. **Font: caricare solo i subset e i formati necessari**
   - Sostituire gli import globali con i soli file latini in woff2 (`@fontsource-variable/inter/latin-wght.css`, `@fontsource/playfair-display/latin-{600,700,800}.css` o equivalenti subset-only disponibili nel pacchetto).
   - Se un peso di Playfair non è realmente usato, eliminarlo.
   - Risultato atteso: da ~35 richieste / ~600 KB a 3-4 richieste / ~90 KB.
2. **Preload del solo font critico** (Playfair latin usato nell'H1) con `font-display: swap`, così il titolo non attende la rete e l'hero non viene messo in coda.
3. **Rinviare le immagini non critiche**: alzare la distanza dal viewport delle card di `UserRoutingSection` (wrapper con dimensioni fisse + `decoding="async"`) in modo che non competano con l'hero durante il primo secondo.
4. **Verifica**: rimisurazione con la stessa emulazione mobile (rete lenta + CPU 4x) confrontando LCP prima/dopo, e controllo che nessun glifo scompaia (accenti italiani inclusi).

## Nota tecnica

Nessuna modifica ai testi, al layout o alla grafica: cambiano solo gli import dei font in `src/main.tsx`, eventuali `@font-face`/preload in `index.html` e gli attributi di caricamento delle immagini non-hero.
