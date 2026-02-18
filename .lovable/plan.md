
## Allineamento pagine satellite alla home — raffinamenti visivi

### Analisi attuale

Le due pagine satellite (`SitiWebAziendali.tsx` e `SitiWebProfessionisti.tsx`) condividono la stessa struttura di base ma presentano alcune discrepanze visive rispetto alla home aggiornata:

**Differenze rilevate:**

| Elemento | Home | Pagine Satellite |
|---|---|---|
| Padding CTA Hero | `px-12 py-5` | `px-8 py-4` (default btn-primary) |
| Hero bg | Immagine + overlay direzionale | `var(--gradient-surface)` piatto |
| Glow orb Hero | rimossi | presente (`bg-accent/5 blur-[100px]`) |
| `max-w` paragrafi Hero | `max-w-xl` sinistra | `max-w-3xl` centrato |
| H1 tracking / peso | `font-extrabold tracking-[-0.03em]` (inline) | eredita da heading-1, ma senza override esplicito |

**Cosa invece è già allineato** (eredita da `index.css` aggiornato):
- `.btn-primary` con hover scale e transizioni
- `.card-glass` e `.card-elevated` migliorati
- Tipografia H2 più bold
- `.section-padding` aumentato
- Alternanza sfondi bianchi/grigi già rispettata

---

### Soluzione proposta

Le Hero delle pagine satellite hanno un contesto diverso: niente foto di sfondo, stile più "editoriale". Invece di replicare l'overlay fotografico, si allinea lo stile della Hero satellite alla nuova estetica premium con:

**1. Glow orb rimosso** — il cerchio sfumato `bg-accent/5 blur-[100px]` è un residuo del vecchio stile. Va rimosso da entrambe le pagine.

**2. Gradient hero più profondo** — sostituire `var(--gradient-surface)` con `var(--gradient-hero)` (blu scuro) nella Hero delle satellite, allineandola al nuovo tono premium. Il testo diventa `text-primary-foreground` (bianco) come nella home. Questo crea coerenza percettiva tra home e satellite.

**3. H1 stile esplicito** — aggiungere `tracking-tight font-extrabold` inline sull'H1 (coerente con la home).

**4. CTA Hero padding** — allineare il padding del bottone nella Hero a `px-10 py-5` (tra default e quello della home, proporzionato alla Hero più compatta).

**5. Paragrafo Hero** — ridurre `max-w-3xl` a `max-w-2xl` per migliore leggibilità (coerente con la linea editoriale aggiornata).

---

### Modifiche tecniche

**File: `src/pages/SitiWebAziendali.tsx`**
- Sezione Hero: `style={{ background: 'var(--gradient-surface)' }}` → `style={{ background: 'var(--gradient-hero)' }}`
- Rimuovere `<div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />`
- H1: aggiungere `className="heading-1 mb-8 font-extrabold tracking-tight"`
- Paragrafo: `text-muted-foreground` → `text-primary-foreground/80`, `max-w-3xl` → `max-w-2xl`
- Bottone: aggiungere `px-10 py-5` alle classi esistenti del `btn-primary`

**File: `src/pages/SitiWebProfessionisti.tsx`**
- Stesse identiche modifiche della Hero (glow, gradient, H1, paragrafo, CTA)

**Nessuna modifica a:**
- Struttura sezioni interne
- SEO, meta tag, canonical
- Testi e contenuti
- Alternanza sfondi sezioni (già corretta)
- Sezione CTA finale (già usa `var(--gradient-hero)`)
