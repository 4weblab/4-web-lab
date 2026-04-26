## Obiettivo
Rendere valido il JSON-LD globale rimuovendo il tipo non riconosciuto `WebDesignAgency` da Schema.org, che causa errore nel validatore.

## Modifica a `src/App.tsx` (riga 81)

**Prima:**
```ts
"@type": ["ProfessionalService", "WebDesignAgency"],
```

**Dopo:**
```ts
"@type": "ProfessionalService",
```

### Motivazione
`WebDesignAgency` non esiste nel vocabolario ufficiale di Schema.org, per cui i validatori (Google Rich Results Test, Schema.org Validator) lo segnalano come errore. `ProfessionalService` è il tipo canonico per agenzie di servizi professionali e mantiene la copertura semantica necessaria. L'array con un solo elemento viene convertito in stringa singola, che è il formato preferito quando il tipo è uno solo.

## File NON modificati
Nessun'altra occorrenza di `WebDesignAgency` è prevista nel codebase. Verifica rapida con `rg WebDesignAgency` prima del commit per conferma.

## Verifica post-modifica
- `tsc --noEmit` per assicurarsi che non ci siano regressioni TypeScript.
- Rilettura del blocco JSON-LD in `App.tsx` per confermare la struttura corretta.
- Suggerimento: rieseguire la validazione su https://validator.schema.org/ dopo il deploy.