
# Fix: Validazione visiva dei campi obbligatori con scroll al primo errore

## Problema attuale

Il form usa `noValidate` (la validazione nativa del browser è disabilitata), ma la logica `onSubmit` controlla solo `phone` ed `email` prima dell'invio. I campi `first_name` e `last_name` hanno l'attributo HTML `required` ma non vengono mai letti né validati a livello JavaScript. Risultato: il form si invia con Nome e/o Cognome vuoti (o mostra solo un errore generico), senza alcun feedback visivo sul campo problematico.

## Soluzione

Tutto in un unico file: **`src/components/ContactFormWeb3Forms.tsx`**

### 1. Stato degli errori per campo

Aggiungere uno stato `fieldErrors` che traccia quali campi hanno errori:

```ts
const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
```

I campi validati saranno: `first_name`, `last_name`, `phone`, `email`.

### 2. Ref per lo scroll

Aggiungere un `ref` al `<form>` per trovare il primo campo in errore e scorrere fino a lui:

```ts
const formRef = useRef<HTMLFormElement>(null);
```

### 3. Logica di validazione in `onSubmit`

Prima di qualsiasi altro controllo (honeypot, rate limit, ecc.), leggere i valori dei campi obbligatori e costruire `fieldErrors`. Se ci sono errori:
- `setFieldErrors(errors)` — aggiorna lo stato
- Trovare il primo `input` con `data-field` corrispondente al primo errore e chiamare `.scrollIntoView({ behavior: "smooth", block: "center" })` + `.focus()`
- `return` senza inviare

Al successo, `setFieldErrors({})` per pulire tutto.

### 4. Classi CSS condizionali

Ogni input obbligatorio riceverà classi aggiuntive in base alla presenza o assenza di un errore nel proprio campo:

```ts
// Base (nessun errore):
border-primary-foreground/15

// Errore:
border-red-500 ring-2 ring-red-500/30
```

Aggiungere anche un piccolo messaggio di errore sotto ogni campo invalido:

```tsx
{fieldErrors.first_name && (
  <span className="text-xs text-red-400 mt-0.5">{fieldErrors.first_name}</span>
)}
```

### 5. Reset degli errori su `onChange`

Ogni campo obbligatorio avrà un `onChange` che rimuove il proprio errore non appena l'utente inizia a digitare, per un feedback immediato e non punitivo.

---

## Campi coperti dalla validazione

| Campo | Regola |
|---|---|
| `first_name` | Non vuoto |
| `last_name` | Non vuoto |
| `phone` | Non vuoto (solo se canale = Telefono) |
| `email` | Non vuoto (solo se canale = Email) |

I campi `phone` ed `email` mantengono la logica attuale ma vengono integrati nel nuovo sistema `fieldErrors` (bordo rosso + messaggio inline) invece del solo messaggio globale.

---

## Comportamento atteso dopo la fix

1. Utente clicca "Invia richiesta" con Nome vuoto
2. Il campo Nome ottiene bordo rosso + testo `"Campo obbligatorio"` sotto di esso
3. La pagina scrolla automaticamente al primo campo in errore (Nome) e lo mette a fuoco
4. L'utente inizia a digitare → il bordo rosso scompare immediatamente
5. Se anche Cognome è vuoto, appare il suo errore ma lo scroll porta al Nome (primo in ordine)
