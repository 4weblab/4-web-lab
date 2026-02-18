
# Fix: Cookie Banner che copre contenuto su mobile

## Problema identificato

Nel `CookieBanner.tsx`, la classe di posizionamento è:

```
bottom-[var(--mobile-cta-height)] md:bottom-0
```

Questo fa sì che su mobile il banner sia sollevato di `3.5rem` (il valore di `--mobile-cta-height`) dal fondo dello schermo. La variabile era pensata per cedere spazio a una CTA sticky mobile, che però non esiste più nel progetto. Risultato: il banner su mobile "fluttua" nel mezzo dello schermo coprendone i contenuti.

Su desktop (`md:bottom-0`) funziona correttamente, ancorato al fondo.

## Soluzione

**File: `src/components/CookieBanner.tsx`** — riga 28

Cambiare la classe da:
```
bottom-[var(--mobile-cta-height)] md:bottom-0
```
a:
```
bottom-0
```

Il banner sarà così sempre ancorato al bordo inferiore dello schermo, su tutti i viewport, senza coprire nessun contenuto sovrastante.

---

## Dettagli tecnici

| | Prima | Dopo |
|---|---|---|
| Mobile | `bottom: 3.5rem` (fluttua) | `bottom: 0` (fondo schermo) |
| Desktop | `bottom: 0` | `bottom: 0` (invariato) |

Nessuna modifica al CSS globale (`index.css`) o ad altri componenti è necessaria.
