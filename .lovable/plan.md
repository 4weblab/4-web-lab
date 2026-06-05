# Schema markup aggiuntivo per la home

Aggiungo 3 blocchi JSON-LD mancanti alla home, senza toccare design, copy o componenti esistenti. Solo `<script type="application/ld+json">` dentro l'`<Helmet>` di `src/pages/Index.tsx`.

## Cosa aggiungo

### 1. `WebSite` con `SearchAction`
Abilita potenzialmente il sitelinks search box di Google e definisce l'entità "sito" distinta dall'azienda.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://4weblab.it/#website",
  "url": "https://4weblab.it/",
  "name": "4 Web Lab",
  "publisher": { "@id": "https://4weblab.it/#business" },
  "inLanguage": "it-IT"
}
```
(Niente `SearchAction` perché il sito non ha una pagina di ricerca interna — evito di dichiarare qualcosa che non esiste.)

### 2. `FAQPage` dalle 3 Q&A già visibili in `HomeFaqPreview`
Riuso testuale 1:1 delle domande/risposte già presenti in pagina (requisito Google: il contenuto FAQ schema deve essere visibile all'utente). Domande: "Quanto costa realizzare un sito web?", "In quanto tempo viene realizzato un sito web?", "I siti web servono ancora nel 2026 con l'arrivo dell'AI?".

### 3. `BreadcrumbList` minimale
Una sola voce ("Home" → `/`), per coerenza con le altre pagine che già emettono breadcrumb via `PageBreadcrumb`.

## Cosa NON tocco

- Il blocco `ProfessionalService` globale in `App.tsx` (resta invariato, già completo)
- Hero, copy, componenti, layout
- Nessun nuovo componente, solo Helmet inline nella home

## File modificati

- `src/pages/Index.tsx` — aggiunta di 3 `<script type="application/ld+json">` dentro l'`<Helmet>` esistente

## Verifica

- DevTools → `<head>` della home: verificare presenza dei 3 nuovi script JSON-LD
- Validazione mentale: nessuna duplicazione con il `ProfessionalService` globale (entità collegata via `@id` reference)
- Test Rich Results di Google (post-deploy) per FAQPage
