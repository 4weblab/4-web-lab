## Obiettivo

Sostituire l'attuale "preview" delle 4 card (gradient + iniziali grandi tipo "AU", "DS", "SE", "VR") con immagini reali WebP che rappresentano visivamente il contesto di ogni demo, con ALT SEO-friendly e ottime performance.

## Mappatura immagini → demo

Riutilizzo asset già esistenti in `src/assets/` per evitare nuove generazioni e ridurre peso bundle:

| Demo | Sorgente JPG attuale | Output WebP | ALT |
|---|---|---|---|
| Metalmeccanica (AU) | `aurum-cnc.jpg` | `aurum-cnc.webp` | "Macchinario CNC in officina metalmeccanica — concept sito web 4 Web Lab" |
| Studio dentistico (DS) | `dental-room.jpg` | `dental-room.webp` | "Sala operativa di uno studio dentistico moderno — concept sito web 4 Web Lab" |
| Fotovoltaico (SE) | `solaris-industrial.jpg` | `solaris-industrial.webp` | "Impianto fotovoltaico industriale su tetto — concept sito web 4 Web Lab" |
| Boutique B&B (VR) | `bb-room-deluxe.jpg` | `bb-room-deluxe.webp` | "Camera deluxe di un boutique B&B luxury — concept sito web 4 Web Lab" |

## Implementazione tecnica

1. **Conversione WebP** — script `cwebp` (via `nix run nixpkgs#libwebp`) su 4 sorgenti, q=72, ridimensionati a max 800px lato lungo (le card sono ~400px su desktop, aspect 16/10). Target: ~25–45 KB ognuno.
2. **Modifica `src/pages/Realizzazioni.tsx`**:
   - Aggiungere campo `image: string` e `alt: string` all'interfaccia `Project` e ai 4 oggetti.
   - Importare le 4 nuove WebP come ES module per hashing/cache busting Vite.
   - Sostituire il blocco "Preview" (gradient + iniziali + griglia decorativa) con `<img>`:
     - `loading="lazy"`, `decoding="async"`, `width="800" height="500"` espliciti.
     - `className` con `w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`.
     - Mantenere il badge in alto a sinistra e l'overlay scuro hover.
   - Rimuovere campi orfani: `gradient` e `initials` dall'interfaccia e dai dati (non più usati).
3. **Performance** — nessun preload (sono below-the-fold), lazy loading nativo, dimensioni esplicite per evitare CLS.

## Out of scope

- Nessuna modifica al resto della pagina (hero, sezione metodo, CTA, JSON-LD).
- Nessuna nuova generazione AI di immagini: si riutilizza quanto già presente.
