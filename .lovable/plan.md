

## Piano: Inserimento file BIMI SVG nella root pubblica

### Cosa fare

Copiare il file `4wl-bimi.svg` caricato nella cartella `public/` del progetto (root pubblica), senza modifiche.

### Dettagli tecnici

- **Origine**: `user-uploads://4wl-bimi.svg`
- **Destinazione**: `public/4wl-bimi.svg`
- Il file verra copiato cosi com'e, senza alcuna trasformazione o ottimizzazione
- Vite serve i file nella cartella `public/` direttamente alla root, quindi sara raggiungibile a `https://4weblab.it/4wl-bimi.svg` dopo il deploy con dominio personalizzato
- Il server restituira automaticamente `Content-Type: image/svg+xml` per i file `.svg`, con risposta HTTP 200 diretta senza redirect

### Nessuna altra modifica

Non verra modificato alcun componente, nessun import, nessun inline SVG. Il file resta un asset statico indipendente.

