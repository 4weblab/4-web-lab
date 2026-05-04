## Obiettivo
Allineare il link "Scopri i siti..." in basso in tutte e tre le card della sezione "Dicci chi sei", indipendentemente dalla lunghezza del testo descrittivo (i nuovi testi hanno lunghezze diverse).

## Modifica
**File:** `src/components/UserRoutingSection.tsx`

Nel layout interno della card (già `flex flex-col justify-end`), modificare:

1. Il container content da `justify-end` a `justify-end` invariato — ma rendere il blocco titolo+descrizione una struttura unica e spingere il CTA in fondo.

Soluzione semplice e robusta:
- Aggiungere `mt-auto` al `<span>` del CTA così viene ancorato al bordo inferiore della card.
- Cambiare `justify-end` → `justify-between` sul container, così il blocco titolo+testo resta in alto-rispetto-alla-base e il CTA in basso.

Approccio scelto (minimo impatto): aggiungere `mt-auto` al `<span>` del CTA. Questo sposta il CTA in fondo al flex column. La descrizione diventa quindi seguita da spazio elastico fino al CTA, garantendo che il link sia allineato in basso in tutte e tre le card.

## Cosa NON cambio
- Altezza minima della card, padding, immagine di sfondo, gradient, hover.
- Testi.