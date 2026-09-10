# Header bianco uniforme su tutte le pagine

## Problema
L'header "solido" usa `--glass-bg` (bianco al 72% con sfocatura). Sopra gli sfondi chiari delle pagine interne (es. Zone Servite, Blog, Contatti) risulta grigio-azzurro, mentre sulla home (hero scura) appare bianco.

## Modifica
Un unico intervento in `src/components/Header.tsx`:

- Nello stato "solido" (`isSolid`), lo sfondo dell'header passa da `var(--glass-bg)` traslucido a **bianco pieno opaco** (`hsl(var(--card))`, cioè `#FFFFFF`), mantenendo sfocatura e ombra come effetto aggiuntivo.

Risultato:
- **Home**: invariata — trasparente in cima, bianco pieno allo scroll.
- **Tutte le altre pagine** (Zone Servite, Blog, Contatti, servizi, landing locali, FAQ, privacy/cookie, articoli blog…): header bianco pieno fin da subito, identico alla home dopo lo scroll.
- **Pagine concept/realizzazioni singole** (DemoRbSncEdilizia e demo con header proprio come Metalmeccanica, Fotovoltaico, Flower Atelier): nessuna modifica, restano come sono.

## Dettagli tecnici
- File toccato: solo `src/components/Header.tsx` (1 riga di stile inline: `background`).
- Nessuna modifica a logica di scroll, `satelliteMode`, menu mobile, dropdown Servizi, o altre pagine.
- Verifica: build + controllo visivo dell'header su `/zone-servite`, `/blog`, `/contatti` e `/`.
