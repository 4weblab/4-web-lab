
Obiettivo: fare in modo che tutti i percorsi interni verso `/creare-sito-con-intelligenza-artificiale` portino al nuovo articolo `/blog/siti-web-creati-con-intelligenza-artificiale`, evitando duplicazioni e mantenendo coerenza SEO.

1. Aggiornare tutti i link interni trovati
Sostituire il vecchio URL con il nuovo articolo blog nei punti attualmente presenti:
- `src/pages/SitiWebPadova.tsx`
- `src/pages/QuantoCostaSitoWeb.tsx`
- `src/components/RentalSection.tsx`

2. Trasformare il vecchio percorso in redirect applicativo
Modificare `src/App.tsx` in modo che la route:
- `/creare-sito-con-intelligenza-artificiale`
non carichi più la vecchia pagina, ma reindirizzi a:
- `/blog/siti-web-creati-con-intelligenza-artificiale`

Implementazione prevista:
- aggiunta di `Navigate` da `react-router-dom`
- sostituzione della route esistente con redirect `replace`

3. Pulire il router senza rompere nulla
In `src/App.tsx`:
- rimuovere l’import di `CreareSitoConAI` se non più usato
- lasciare invariata la route del nuovo articolo blog già presente

4. Allineare la sitemap al nuovo URL canonico
Aggiornare `public/sitemap.xml` per:
- rimuovere l’URL vecchio `/creare-sito-con-intelligenza-artificiale`
- inserire l’URL nuovo `/blog/siti-web-creati-con-intelligenza-artificiale`

Questo evita di continuare a segnalare ai motori di ricerca una pagina superata.

5. Cosa non verrà toccato
- `public/_redirects`, perché su Lovable non viene usato
- contenuto del nuovo articolo blog
- layout delle pagine coinvolte
- il file `src/pages/CreareSitoConAI.tsx`, salvo eventuale inutilizzo nel router

Risultato atteso
- tutti i link interni porteranno al nuovo articolo
- chi visita il vecchio URL verrà inoltrato correttamente al nuovo
- sitemap coerente con la nuova struttura
- nessun link interno obsoleto verso la vecchia pagina

Dettagli tecnici
- File da modificare: `src/App.tsx`, `src/pages/SitiWebPadova.tsx`, `src/pages/QuantoCostaSitoWeb.tsx`, `src/components/RentalSection.tsx`, `public/sitemap.xml`
- Redirect previsto: `Navigate to="/blog/siti-web-creati-con-intelligenza-artificiale" replace`
