## Allineamento schema `areaServed` al GBP

Modifica `areaServed` in 2 file per coerenza totale con i tag GBP (Padova + Veneto).

### File 1: `src/App.tsx` (ProfessionalService globale `#business`)
Sostituire l'attuale `areaServed` esteso con:
```js
areaServed: [
  { "@type": "City", name: "Padova" },
  { "@type": "AdministrativeArea", name: "Veneto" }
]
```

### File 2: `src/pages/SitiWebPadova.tsx` (Service schema)
Sostituire l'attuale `areaServed` (singola City Padova con containedInPlace IT) con lo stesso array:
```js
areaServed: [
  { "@type": "City", name: "Padova" },
  { "@type": "AdministrativeArea", name: "Veneto" }
]
```

### Nessuna altra modifica
- Nessun cambio a copy, layout, altri schemi
- Nessun nuovo file

### Risultato atteso
Entità unica e coerente tra GBP ↔ schema sito → rafforza E-E-A-T locale, elimina segnali contraddittori per Google.
