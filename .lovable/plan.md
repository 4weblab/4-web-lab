

## Piano: Fix navigazione cross-page con hash (#noleggio)

**Problema**: Il componente `ScrollToTop` ascolta i cambiamenti di `pathname` e forza `window.scrollTo(0, 0)`. Quando si clicca il link `/#noleggio` dalla pagina `/quanto-costa-sito-web`, il pathname cambia a `/`, ScrollToTop scatta e riporta la pagina in cima, annullando lo scroll verso `#noleggio`.

**File da modificare**: `src/components/ScrollToTop.tsx`

**Soluzione**: Modificare `ScrollToTop` per ignorare la navigazione quando c'è un hash nell'URL. Se `location.hash` è presente, lasciare che il browser gestisca lo scroll nativo verso l'ancora.

```tsx
const { pathname, hash } = useLocation();

useEffect(() => {
  if (!hash) {
    window.scrollTo(0, 0);
  }
}, [pathname, hash]);
```

Modifica minima, un solo file, risolve il conflitto senza effetti collaterali.

