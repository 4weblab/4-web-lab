

## Piano: Sostituzione numero telefono in tutto il sito

Sostituire `3516826560` con `3514656042` in tutti i file dove compare, mantenendo il prefisso `+39` dove presente e aggiornando anche il formato con spazi.

### File da modificare (9 file, sostituzione globale)

| File | Occorrenze |
|------|-----------|
| `src/components/Footer.tsx` | `+39 351 682 6560` → `+39 351 465 6042`, `393516826560` → `393514656042`, `tel:+393516826560` → `tel:+393514656042` |
| `src/components/ContactSection.tsx` | `393516826560` → `393514656042` |
| `src/components/WhatsAppButton.tsx` | `393516826560` → `393514656042` |
| `src/components/MapSection.tsx` | `+39 351 682 6560` → `+39 351 465 6042` |
| `src/App.tsx` | `+393516826560` → `+393514656042` |
| `src/pages/Index.tsx` | `+393516826560` → `+393514656042` |
| `src/pages/SitiWebAziendali.tsx` | `393516826560` → `393514656042` |
| `src/pages/SitiWebPadova.tsx` | `393516826560` → `393514656042` |
| `src/pages/SitiWebProfessionisti.tsx` | `393516826560` → `393514656042` |
| `src/pages/CreareSitoConAI.tsx` | `393516826560` → `393514656042` |

In ogni file verrà effettuato un find-and-replace di `6826560` → `4656042` e di `682 6560` → `465 6042`, coprendo tutte le varianti di formattazione.

