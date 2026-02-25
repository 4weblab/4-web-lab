

## Piano

Copiare il file XML DMARC caricato nella cartella `public/` senza alcuna modifica.

### Operazione

- **Copia**: `user-uploads://google.com!4weblab.it!1771891200!1771977599.xml` → `public/google.com!4weblab.it!1771891200!1771977599.xml`

Vite servirà il file direttamente dalla root del deploy. Dopo il deploy con dominio personalizzato sarà raggiungibile a `https://4weblab.it/google.com!4weblab.it!1771891200!1771977599.xml` con Content-Type XML e HTTP 200, senza redirect né route React.

Un solo file copiato, nessuna modifica al codice.

