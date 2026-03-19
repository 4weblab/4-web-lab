

## Riduzione gradienti di transizione nella pagina Barber

### Problema
I div di transizione tra sezioni chiare e scure sono troppo alti (`h-16 md:h-24`) e risultano visivamente brutti.

### Intervento
Ridurre l'altezza di tutti i 6 div di transizione gradient da `h-16 md:h-24` a `h-4 md:h-6` — transizioni sottili e discrete che segnano il passaggio senza occupare troppo spazio.

### File modificato
- `src/pages/SitoWebBarber.tsx` — 6 occorrenze di `h-16 md:h-24` → `h-4 md:h-6`

