# Sostituire Vera Method con Elisa Piovan nel portfolio di SitiWebPadova

## Obiettivo
Nella pagina `src/pages/SitiWebPadova.tsx`, sezione "Il Nostro Portfolio: Storie di Successo e Concept Innovativi", sostituire la card "Vera Method – concept" con i dati di Elisa Piovan (Personal Trainer, Padova) presi da `src/pages/Realizzazioni.tsx`.

## Modifiche (2 edit mirati)

### 1. Import asset (riga 14)
Sostituire:
```ts
import veraMethodHero from "@/assets/vera-method-hero.webp";
```
con:
```ts
import elisaPiovanPt from "@/assets/elisa-piovan-pt.webp";
```
L'asset `src/assets/elisa-piovan-pt.webp` esiste già (verificato) ed è già usato in Realizzazioni.tsx.

### 2. Card portfolio (riga 605)
Sostituire la card Vera Method:
```ts
{ img: veraMethodHero, title: "Vera Method – concept", desc: "Concept di presenza online per personal trainer e professionisti del benessere. Struttura snella e moderna, focalizzata sulla presentazione del metodo e sulla conversione rapida.", to: "/realizzazioni/demo-personal-trainer-vera-method" },
```
con la card Elisa Piovan (dati coerenti con Realizzazioni.tsx):
```ts
{ img: elisaPiovanPt, title: "Elisa Piovan — Personal Trainer (Padova)", desc: "Restyling completo del sito professionale di Elisa Piovan: struttura, grafica e ottimizzazione SEO, AEO e GEO, con hosting gestito per garantire i migliori punteggi PageSpeed Insights.", to: "/realizzazioni/sito-web-elisa-piovan-personal-trainer-padova" },
```

## Verifica post-modifica
- Build SSG OK (nessun riferimento orfano a `veraMethodHero`).
- La route `/realizzazioni/sito-web-elisa-piovan-personal-trainer-padova` risponde 200.
- Le altre due card (R.B. s.n.c. e Studio dentistico) restano invariate.

## Note
- Nessuna modifica al JSON-LD o ai metadati della pagina.
- L'import `veraMethodHero` diventa inutilizzato in questo file e viene rimosso (verificare che non sia usato altrove nella stessa pagina: grep conferma uso solo a riga 605).
