

## Layout a due colonne nella sezione CTA finale

### Cosa cambia

La sezione CTA finale della pagina `/realizzazione-siti-web-per-professionisti` passa da un layout centrato a singola colonna a un layout a due colonne (box):

- **Box sinistra**: contiene il titolo H2, il paragrafo descrittivo e il pulsante WhatsApp "Contattaci ora" (gia esistente)
- **Box destra**: contiene un form (placeholder vuoto per ora, in attesa del codice che fornirai)

### Dettagli layout

- Griglia responsive: due colonne su desktop (`grid md:grid-cols-2`), colonna singola su mobile
- Entrambi i box avranno sfondo semi-trasparente (`bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8`) coerente con lo stile glassmorphism del sito
- Il testo nella box sinistra sara allineato a sinistra (non piu centrato)
- Il `max-w-3xl mx-auto text-center` attuale viene sostituito con la griglia a due colonne

### File modificato

`src/pages/SitiWebProfessionisti.tsx` -- sezione CTA finale (righe 254-267)

### Prossimo passo

Una volta approvato, implemento la struttura a due box con il placeholder per il form a destra. Poi potrai incollare il codice del form e lo integrero nella box destra.

