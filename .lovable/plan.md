## Obiettivo
Uniformare il campo `areaServed` in tutti i JSON-LD che descrivono 4 Web Lab (entità `#business` / `#localbusiness` e pagine di servizio), impostandolo esattamente su:

- **Veneto** (`AdministrativeArea`)
- **Padova** (`City`)
- **Venezia** (`City`)

I concept/clienti (R.B. s.n.c. a Cittadella, Vera Method a Padova) non verranno toccati.

## File da modificare

1. **`index.html`** — schema statico `#business`
2. **`src/App.tsx`** — schema globale `#business`
3. **`src/pages/Index.tsx`** — schema `Service` homepage
4. **`src/pages/SitiWebPadova.tsx`** — `#localbusiness` + `Service`
5. **`src/pages/SitiWebAziendali.tsx`** — `#localbusiness` + `Service`
6. **`src/pages/PubblicitaGoogleAds.tsx`** — `#localbusiness` + `Service`
7. **`src/pages/SitiWebProfessionisti.tsx`** — schema `Service`
8. **`src/pages/SitiWebNegozi.tsx`** — schema `Service`
9. **`src/pages/Realizzazioni.tsx`** — schema `Service`
10. **`src/pages/PosizionamentoGoogleEAi.tsx`** — schema `Service`

## Modifica tecnica

In ogni `areaServed` dei file sopra, sostituire il contenuto esistente con:

```json
"areaServed": [
  { "@type": "AdministrativeArea", "name": "Veneto" },
  { "@type": "City", "name": "Padova" },
  { "@type": "City", "name": "Venezia" }
]
```

Per i file con doppia definizione (`#localbusiness` e `Service`), applicare lo stesso array a entrambe.

## File NON modificati

- `src/pages/DemoRbSncEdilizia.tsx` (area specifica cliente: Cittadella)
- `src/pages/DemoPersonalTrainerVeraMethod.tsx` (area concept: Padova)

## Verifica

- `rg -n "areaServed"` per confermare che tutte le occorrenze di 4 Web Lab siano allineate.
- Build del progetto per assicurare che non ci siano errori di sintassi JSON/TSX.
