
## Sostituzione sfondo Hero

### Situazione attuale
Il componente `src/components/Hero.tsx` importa l'immagine di sfondo così:
```ts
import heroBg from '@/assets/hero-bg.webp';
```
Nella cartella `src/assets/` esistono anche `hero-bg.jpg` e `hero-bg.png` (varianti non utilizzate).

### Modifiche pianificate

**1. Copia della nuova immagine**
- Copia `user-uploads://hero-4weblab-style-light-1600w.webp` → `src/assets/hero-bg.webp` (sovrascrive il file esistente, così non serve cambiare il nome nell'import)

**2. Eliminazione dei file obsoleti**
- Elimina `src/assets/hero-bg.jpg`
- Elimina `src/assets/hero-bg.png`

**3. Aggiornamento `src/components/Hero.tsx`**
- Nessuna modifica necessaria all'import se si sovrascrive `hero-bg.webp`, il riferimento resta invariato

### Note
La nuova immagine ha uno sfondo chiaro/beige, molto diverso dall'attuale scuro. Poiché la Hero usa testi bianchi su overlay scuro, l'overlay a gradiente nero esistente continuerà a garantire la leggibilità dei testi.
