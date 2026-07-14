## Obiettivo
Verificare che tutti i riferimenti `sameAs` a Google Business Profile nel sito puntino all'URL condiviso dall'utente (`https://share.google/fYQnR3BJIrKSNlkDK`) e correggere quelli non allineati.

## Esito verifica
- `index.html` (schema `Organization`): già corretto con `https://share.google/fYQnR3BJIrKSNlkDK`.
- `src/App.tsx` (schema `ProfessionalService`): contiene un `sameAs` non allineato → `https://share.google/oGOMV0sHAaV8JlqnZ`.
- `src/components/MapSection.tsx`: contiene URL Google Maps per direzioni/embed, non `sameAs`.
- Nessun altro riferimento a `sameAs` o `share.google` rilevato nel progetto.

## Modifiche previste
1. **Aggiornare `src/App.tsx`**  
   Sostituire nel `sameAs` dello schema `ProfessionalService` (riga ~90):
   - Da: `https://share.google/oGOMV0sHAaV8JlqnZ`
   - A: `https://share.google/fYQnR3BJIrKSNlkDK`
   Mantenere invariato il `sameAs` del `founder` (`Person`) che punta correttamente a LinkedIn.

2. **Verifica post-modifica**
   - Ricontrollare con `rg` che tutti i `share.google` siano identici.
   - Eseguire la build per assicurarsi che non ci siano errori.

## Nota
Gli schemi `Organization` (in `index.html`) e `ProfessionalService` (in `src/App.tsx`) condividono entrambi l'`@id` `https://4weblab.it/#business`. Questo non è strettamente un errore di `sameAs`, ma potrebbe creare ambiguità per i crawler (due entità con lo stesso identificatore). Se l'utente lo desidera, si può affrontare in un intervento separato.