## Obiettivo
Aggiungere il markup strutturato `BreadcrumbList` alla pagina `/posizionamento-google-e-ai` per abilitare il breadcrumb nei risultati Google e rinforzare il segnale di gerarchia per crawler e LLM.

## Modifica
**File**: `src/pages/PosizionamentoGoogleEAi.tsx`

Aggiungere un quarto blocco `<script type="application/ld+json">` dentro `<Helmet>`, subito dopo lo schema `WebPage`:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://4weblab.it/" },
    { "@type": "ListItem", "position": 2, "name": "SEO & AI", "item": "https://4weblab.it/posizionamento-google-e-ai" }
  ]
}
```

## Impatto
- Nessuna modifica visuale.
- Nessun impatto su performance.
- Coerenza con il `PageBreadcrumb` già visibile nella hero.
