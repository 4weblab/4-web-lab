
## Riposizionamento testo Hero per non coprire i dettagli dell'immagine

### Analisi del problema

Dalla schermata si vede chiaramente che:
- L'immagine contiene mockup di siti web e tag grafici ("SITI WEB", "SEO", "STRATEGIA", "Caprani & Paruolo Studio Legale") disposti principalmente nella metà destra e nella zona centrale
- Il testo (h1 + paragrafo + bottone) è centrato e copre quasi tutta l'immagine
- Su mobile il problema è identico: il testo copre i libri/elementi grafici al centro

### Soluzione: layout asimmetrico testo a sinistra

Spostare il blocco testo nella metà sinistra della Hero, lasciando la metà destra libera per mostrare i mockup. Questo è un layout comune per hero con immagini compositive (testo sx / immagine dx).

### Modifiche tecniche — `src/components/Hero.tsx`

**1. Allineamento testo a sinistra**
Il wrapper `container-section` rimane centrato, ma il blocco testo interno (`max-w-5xl mx-auto`) diventa un layout a due colonne: colonna sinistra col testo (60%), colonna destra vuota/trasparente (40%) per far "respirare" i dettagli.

Cambiamenti:
- `<div className="max-w-5xl mx-auto">` → `<div className="w-full">` con un inner div che occupa solo la metà sinistra su desktop
- `text-center` sul container → rimosso sul blocco testo; mantenuto solo per il bottone su mobile
- `items-center justify-center` sul `flex` della sezione → cambia in `items-start` + padding sinistra

**Struttura proposta:**
```tsx
// Sezione: allineamento a sinistra
<div className="container-section relative z-10 py-24">
  <div className="max-w-xl text-left">   {/* max-w-xl ≈ 50% su desktop */}
    <h1 ...>...</h1>
    <p ...>...</p>
    <div className="flex ...">
      <button ...>Richiedi preventivo gratuito</button>
    </div>
  </div>
</div>
```

**2. Posizione sfondo immagine su mobile**
Su mobile l'immagine è tagliata al centro. Cambiando `bg-center` in `bg-left` l'immagine mostrerà la parte sinistra (più neutra/sfumata) e i dettagli grafici resteranno visibili senza sovrapporsi al testo.

**3. Opacità immagine**
L'immagine ha attualmente `opacity-12` (molto bassa). Per valorizzare la nuova composizione, si può alzare leggermente a `opacity-20` così i mockup sono più visibili a destra.

### Riepilogo modifiche

| File | Modifica |
|---|---|
| `src/components/Hero.tsx` | Allineamento testo a sinistra, `max-w-xl`, rimozione `text-center` e `justify-center`, `bg-left` su mobile |
| `src/components/Hero.tsx` | Opacità immagine da `opacity-12` a `opacity-20` |

Nessuna modifica a CSS o altri file.
