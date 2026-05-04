## Problemi rilevati su mobile (390×844)

Verificati con screenshot del preview:

1. **"WEB AGENCY PADOVA" sfora orizzontalmente** — il `whitespace-nowrap` aggiunto in precedenza per evitare gli a-capo su desktop forza il testo oltre il bordo viewport su mobile, causando scroll orizzontale e il taglio della "A" finale.
2. **CTA molto sbilanciati** — il bottone arancione "Richiedi preventivo gratuito" è stato ridotto via `style` inline (padding/font), mentre "Scrivi su WhatsApp" è rimasto alle dimensioni originali. Risultato: due bottoni di taglie totalmente diverse uno sopra l'altro, con quello principale (la conversione primaria!) che appare quasi 1/3 del secondario. Pessima gerarchia visiva e pessimo per CRO.
3. **"SCEGLI LA MIGLIORE" e "SITI WEB, SEO, CONSULENZA"** stanno comodi su mobile, ma per coerenza conviene applicare la stessa logica responsive a tutte e tre le righe.

## Modifiche proposte

**File:** `src/components/Hero.tsx`

### 1. H1 responsive nowrap
Sostituire `whitespace-nowrap` con `sm:whitespace-nowrap` sui tre `<span>`. In questo modo:
- Desktop/tablet (≥640px): le tre righe restano su una sola riga come voluto.
- Mobile (<640px): il testo può andare a capo naturalmente, niente overflow.

### 2. Riportare i due CTA a dimensione coerente
Rimuovere lo `style={{ padding: '0.81rem 1.944rem', fontSize: '0.729rem' }}` dal bottone "Richiedi preventivo gratuito". Tornano entrambi alla classe `.hero-cta` standard, equilibrati e proporzionati come l'originale (e come il bottone WhatsApp).

Se davvero si vuole un CTA primario "compatto", la strada giusta è creare una variante CSS (`.hero-cta-sm`) e applicarla a entrambi i bottoni, non solo a uno. Ma il consiglio è lasciare le dimensioni originali: il CTA primario di conversione dovrebbe essere ben visibile.

## Cosa NON cambio
- Layout della sezione, immagine di sfondo, gradient overlay, promo box.
- Testo della headline e del paragrafo (già aggiornati nei messaggi precedenti).