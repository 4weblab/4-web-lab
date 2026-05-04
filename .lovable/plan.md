## Modifica H1 della Hero

Sostituire l'attuale H1 in `src/components/Hero.tsx` con un titolo a tre righe gerarchiche:

```
SCEGLI LA MIGLIORE
WEB AGENCY PADOVA
SITI WEB, SEO, CONSULENZA
```

### Gerarchia visiva
- **Riga 1** "SCEGLI LA MIGLIORE" → ~60-65% della dimensione della riga 2 (eyebrow/occhiello)
- **Riga 2** "WEB AGENCY PADOVA" → dimensione principale (eredita `heading-1`, peso 800)
- **Riga 3** "SITI WEB, SEO, CONSULENZA" → ~60-65% della dimensione della riga 2 (sottotitolo)

In questo modo riga 1 e 3 risultano del 30-40% più piccole rispetto alla centrale, come richiesto.

### Dettagli tecnici
- Unico `<h1>` mantenuto (SEO): le tre righe sono `<span>` interni con `display:block`, separati da margini verticali ridotti.
- Tutto in maiuscolo via testo statico (no CSS `uppercase`, così resta esattamente come scritto).
- Conservati: `text-shadow`, `font-weight: 800`, `letter-spacing: -0.03em`, `text-balance`, classe `text-primary-foreground`.
- Le righe più piccole useranno `text-[0.6em]` (≈ -40% rispetto al font principale) e `tracking-wide` per leggibilità in maiuscolo; la riga centrale resta sulla classe `heading-1`.
- Nessuna modifica a sottotitolo, CTA, box promo, immagini Hero, meta tag o JSON-LD.

### Nota SEO
Il vecchio H1 conteneva "Siti web per negozi, professionisti e aziende". Il nuovo è più sintetico ma copre comunque le keyword principali (Web Agency Padova, Siti Web, SEO, Consulenza). Title/description in `Index.tsx` restano invariati e continuano a coprire i termini long-tail.

### File toccati
- `src/components/Hero.tsx` (solo blocco `<h1>`)