# Conversione immagini in WebP

## Stato attuale
Nel progetto ci sono **76 immagini non-WebP** (75 in `src/assets/`, più alcune in `public/`), per un totale di circa **11 MB**. Il memory di progetto stabilisce: *"All images WebP with explicit sizes"*, quindi sono tutte fuori standard.

### File più pesanti (priorità alta)
| File | Peso attuale | Stima WebP (~30%) |
|---|---|---|
| `public/lovable-uploads/04336b0d-9434-4cc5-92bf-9fead391fd27.png` | 1.14 MB | ~250 KB |
| `public/lovable-uploads/e01ad118-da3a-4298-8af4-f22d7bc20878.png` | 1.14 MB | ~250 KB |
| `src/assets/aziendali-team.png` | 635 KB | ~120 KB |
| `src/assets/flower-shop-interior.jpg` | 342 KB | ~100 KB |
| `src/assets/flower-wedding.jpg` | 339 KB | ~100 KB |
| `src/assets/comit-stalle.jpg`, `solaris-hero.jpg`, `flower-hero.jpg`, `comit-hero.jpg`, `bb-territory.jpg`, `solaris-industrial.jpg`, `flower-atelier-detail.jpg`, `sovem-workshop.jpg`, `barber-solution-bg.jpg` | 170–320 KB ciascuno | ~50–90 KB |

Risparmio totale stimato: **~7–8 MB** sul bundle/CDN, con beneficio diretto su LCP delle pagine hero (Solaris, Comit, Flower, BB, Barber, Aurum, Dental, IES, Platiumed, Zardini, SI2000, Sovem) e degli articoli del blog.

## Cosa fare
1. **Convertire in WebP** (qualità 82, no resize) tutti i file in:
   - `src/assets/*.jpg` (74 file)
   - `src/assets/aziendali-team.png`
   - `public/og-image.jpg` → mantenere ANCHE versione `.jpg` (alcuni scraper social non leggono webp) ma generare `og-image.webp` come variante; lasciare `og-image.jpg` come fallback nel meta `og:image`.
   - `public/lovable-uploads/*.png` (2 file)
2. **Aggiornare gli import** in tutto `src/` cambiando `.jpg`/`.png` → `.webp` per gli asset convertiti (i file `.png` sotto `lovable-uploads` sono referenziati via stringa: aggiornare il path).
3. **Eliminare gli originali** una volta verificato che non siano più referenziati (`favicon.png` resta com'è: serve agli OS che non supportano webp come favicon).
4. **Build check** automatico per garantire che tutti gli import risolvano.

## Cosa NON cambia
- Nessuna modifica a layout, dimensioni, `alt`, `width/height`, `fetchpriority` o componenti.
- `public/favicon.png` resta PNG (best practice favicon multi-OS).
- `og-image.jpg` resta come canonical OG (fallback compatibilità social), ma viene affiancato da `og-image.webp` se utile internamente.

## Dettagli tecnici
- Tool di conversione: `cwebp` via `nix run nixpkgs#libwebp -- cwebp -q 82 input -o output.webp`, applicato in batch con uno script bash.
- Aggiornamento import: `rg -l "\.jpg\"" src` + `sed -i` mirato per ogni file convertito, oppure script Node che mappa 1:1.
- Verifica finale: nessun import rotto, nessun riferimento residuo a `.jpg`/`.png` rimossi.
