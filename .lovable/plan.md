

## Piano

Modificare il pulsante "Richiedi preventivo" in `src/components/PricingSection.tsx` per rimuovere il link WhatsApp e sostituirlo con un'ancora che scorre alla sezione contatti (`#contatti`), dove si trova il form.

### Modifica in `src/components/PricingSection.tsx`

**Riga 67**: Sostituire il tag `<a>` con link WhatsApp con un'ancora interna alla sezione contatti.

```tsx
// Da:
<a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Richiedi preventivo su WhatsApp">
  Richiedi preventivo
</a>

// A:
<a href="#contatti" aria-label="Richiedi preventivo">
  Richiedi preventivo
</a>
```

Si possono anche rimuovere le variabili `whatsappNumber`, `message` e `whatsappLink` (righe 11-13) poiché non più utilizzate.

Un solo file modificato.

