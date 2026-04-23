
Obiettivo: ridurre e uniformare lo spazio verticale eccessivo tra il primo blocco testo introduttivo e il secondo blocco contenuti in tutti gli articoli del blog, mantenendo il design coerente con il sito.

1. Individuare il punto esatto che genera lo spazio
- I quattro articoli blog usano due sezioni consecutive:
  - sezione intro con card testuale
  - sezione successiva con i blocchi H2/contenuto
- Entrambe usano `section-padding`, che applica molto spazio sopra e sotto (`py-28 md:py-36`), quindi la somma tra `padding-bottom` della prima sezione e `padding-top` della seconda crea il “vuoto” percepito.

2. Normalizzare lo spacing tra intro e corpo articolo
- Sostituire nei file articolo la coppia di sezioni consecutive con una spaziatura dedicata e più compatta tra questi due blocchi.
- Mantenere ampio il respiro generale della pagina, ma ridurre in modo controllato il tratto specifico tra:
  - card introduttiva
  - primo blocco con H2
- Applicare una soluzione uniforme su tutti gli articoli, ad esempio:
  - prima sezione con padding inferiore ridotto
  - seconda sezione con padding superiore ridotto
  - oppure una utility/class condivisa dedicata al layout articolo blog

3. Allineare tutti gli articoli esistenti
- Aggiornare in modo coerente:
  - `src/pages/BlogGdprArticle.tsx`
  - `src/pages/BlogSiteVsSocialArticle.tsx`
  - `src/pages/BlogAiWebsiteArticle.tsx`
  - `src/pages/BlogWebsiteCostArticle.tsx`
- Verificare che il ritmo verticale resti uniforme anche dove ci sono sottosezioni, card extra o CTA finali.

4. Preferire una convenzione riusabile
- Se il pattern è identico in tutti gli articoli, introdurre una classe semantica condivisa per il layout editoriale blog invece di correggere lo spacing in modo isolato file per file.
- Questo evita nuove discrepanze quando verranno aggiunti altri articoli.

5. Verifica responsive
- Controllare il risultato in ottica mobile-first:
  - spazio più compatto su mobile
  - proporzione corretta su tablet/desktop
- Assicurare che non si crei un effetto troppo “schiacciato” tra introduzione e contenuto.

Dettagli tecnici
- Il problema nasce dall’uso consecutivo di `section-padding` su due sezioni adiacenti.
- La utility globale attuale è in `src/index.css`:
  - `.section-padding { @apply py-28 md:py-36; }`
- Gli articoli blog interessati stanno in `src/pages/Blog*Article.tsx`.
- Intervento consigliato: introdurre una variante di spacing per le sezioni editoriali del blog, invece di modificare globalmente `section-padding`, così non si alterano altre pagine del sito.

Esito atteso
- Spazio tra primo e secondo blocco testo visibilmente più equilibrato.
- Stesso comportamento su tutti gli articoli del blog.
- Nessuna regressione visiva sul resto del sito.
