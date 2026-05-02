## Obiettivo

Hai aggiornato titolo e descrizione del nuovo articolo in `src/data/blogArticles.ts`. Verificando il resto del codice, ci sono **due file** che contengono ancora versioni non perfettamente allineate e vanno sistemati per coerenza (SEO, social share, card del blog).

## File da aggiornare

### 1. `src/pages/Blog.tsx` (card nella pagina /blog)

Attualmente la card è hardcoded e duplica i testi di `blogArticles.ts`. La descrizione è già stata aggiornata, ma è meglio verificare che titolo e descrizione siano identici a quelli del data file. Stato attuale:
- title: "Siti web su piattaforme di preventivi online: conviene davvero o è un errore costoso?" ✓
- description: "Preventivi veloci e prezzi bassi: sembra la scelta giusta…" ✓

Risulta già allineato — nessuna modifica necessaria qui.

### 2. `src/pages/BlogQuotePlatformsArticle.tsx` (pagina articolo)

Qui c'è un disallineamento sul **meta title del browser/SEO**:

- riga 22: `pageTitle = "Siti web piattaforme preventivi: conviene davvero?"`
  → è ancora la versione vecchia/short. Va aggiornato per riflettere il nuovo titolo. Proposta: usare lo `shortTitle` da `blogArticles.ts` ("Siti web piattaforme preventivi: conviene?") oppure una versione più aderente al nuovo H1, es:
  - **"Siti web piattaforme preventivi: conviene o è un errore?"** (≈ 56 caratteri, ottimale per Google)

- riga 32 (`headline`) e riga 24 (`pageDescription`): già allineati al nuovo testo ✓

## Modifica proposta

In `src/pages/BlogQuotePlatformsArticle.tsx` aggiornare solo il meta title:

```ts
const pageTitle = "Siti web piattaforme preventivi: conviene o è un errore?";
```

Questo aggiorna:
- `<title>` del browser
- `og:title` per condivisioni social (Facebook/LinkedIn/WhatsApp)
- `twitter:title`
- `headline` nel JSON-LD `BlogPosting` (se collegato — da verificare in fase di applicazione)

## Note

- `public/sitemap.xml` non contiene il titolo, solo l'URL → nessuna modifica.
- Nessun altro file fa riferimento al vecchio titolo "…per il tuo business" o alla vecchia descrizione "Conviene usare piattaforme…".
- Conferma il meta title proposto oppure indicane uno alternativo (max ~60 caratteri consigliato per SERP).
