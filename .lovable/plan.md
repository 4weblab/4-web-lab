
## Aggiunta offset di ~100px allo scroll del pulsante "Contattaci ora"

Modificare la funzione `handleContactClick` in `src/pages/SitiWebAziendali.tsx` per utilizzare `window.scrollTo` con un offset negativo di 100px rispetto alla posizione dell'elemento target, invece di `scrollIntoView`.

### Dettaglio tecnico

Sostituire il corpo della funzione (righe 13-17) con:

```tsx
const handleContactClick = () => {
  const el = document.getElementById('contatti-aziendali');
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};
```

Questo fa scrollare la pagina fino a 100px **prima** della sezione contatti, dando piu respiro visivo.
