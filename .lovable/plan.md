L'utente ha fornito il CID del profilo Google Business: `2075680678385206471`.

## Azioni da svolgere

1. **Aggiornare `sameAs` in `index.html`**
   - Sostituire `https://www.google.com/maps?cid=4weblab` con `https://www.google.com/maps?cid=2075680678385206471` nello schema `Organization`.

2. **Verificare coerenza NAP in tutto il sito**
   - Nome: `4 Web Lab`
   - Telefono: `+39 351 465 6042`
   - Località: `Legnaro, PD, IT`
   - Controllare footer, pagina contatti, `public/llms-full.txt` e eventuali altri JSON-LD per allineamento.

3. **Verificare build**
   - Eseguire il build check per assicurarsi che il JSON-LD rimanga valido e che non ci siano errori di sintassi.

## Nota
Il CID fornito è un identificativo numerico Google Maps standard (19 cifre). L'URL finale sarà:
`https://www.google.com/maps?cid=2075680678385206471`