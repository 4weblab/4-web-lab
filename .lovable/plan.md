# Riduzione del 50% delle card "Continua a leggere" negli articoli del blog

Le card della sezione "Continua a leggere" (componente `RelatedArticles`) usate alla fine di ogni articolo verranno rimpicciolite di circa il 50% in dimensione visiva. La pagina `/blog` non è interessata: usa una griglia diversa, definita direttamente in `Blog.tsx`, completamente separata da questo componente.

## Cosa cambia

Modifica unica al file `src/components/RelatedArticles.tsx`. Essendo un componente condiviso, l'effetto si propaga automaticamente a tutti gli articoli esistenti **e a quelli futuri**, senza bisogno di toccare le singole pagine.

### Riduzioni applicate

- **Larghezza massima del blocco**: da `max-w-5xl` (1024px) a `max-w-2xl` (672px) → blocco compatto e centrato.
- **Padding interno card**: da `p-6 md:p-7` a `p-4 md:p-5`.
- **Immagine**: aspect ratio invariato (`16/10`), ma riduzione visiva proporzionale alla card più stretta. `width/height` degli attributi `<img>` aggiornati a `512×320` (mantengono il rapporto).
- **Titolo card (h3)**: da `text-lg md:text-xl` a `text-sm md:text-base`.
- **Excerpt**: da `body-base` a `text-xs`, `line-clamp-2` invariato.
- **Categoria pill**: da `text-xs` a `text-[10px]`.
- **Link "Leggi l'articolo"**: da `text-sm` a `text-xs`, icona da `h-4 w-4` a `h-3 w-3`.
- **Gap tra card**: da `gap-6 md:gap-8` a `gap-4 md:gap-5`.
- **Margine separatore interno**: da `mt-5 pt-4` a `mt-3 pt-3`.
- **Bordo arrotondato**: `rounded-2xl` → `rounded-xl` per coerenza visiva con la nuova scala.

### Cosa resta invariato

- Heading "Continua a leggere" e sottotitolo della sezione (immutati per leggibilità).
- Layout responsive: 1 colonna mobile, 2 colonne desktop.
- Animazioni hover (translate, ombra, scale immagine).
- `section-padding` esterno della sezione.
- Pagina `/blog`: nessuna modifica, usa un proprio layout interno in `src/pages/Blog.tsx`.

## File coinvolti

**Modificati:**
- `src/components/RelatedArticles.tsx` (unica modifica necessaria)

**Non toccati:** nessun file articolo, nessuna pagina, nessun dato. La propagazione è automatica per articoli esistenti e futuri.

## Esito atteso

Le card consigliate a fine articolo diventano circa il 50% più piccole, lasciando più peso visivo alla CTA finale. La pagina indice `/blog` continua a mostrare le card grandi originali. Nessuna regressione su layout, link o accessibilità.