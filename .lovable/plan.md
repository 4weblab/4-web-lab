# Rimozione pagine demo

## Obiettivo
Eliminare completamente tutte le pagine `/demo-xxx` dal progetto e dalla sitemap.

## Cosa eliminare

**File pagina (8):**
- `src/pages/DemoDV.tsx`
- `src/pages/DemoRBT.tsx`
- `src/pages/DemoZardini.tsx`
- `src/pages/DemoComit.tsx`
- `src/pages/DemoSI2000.tsx`
- `src/pages/DemoIES.tsx`
- `src/pages/DemoSovem.tsx`
- `src/pages/DemoPlatiumed.tsx`

**Componente correlato:**
- `src/components/BarberLightbox.tsx` (se usato solo dalle demo — verificare in fase di build)

## Modifiche file

**`src/App.tsx`**
- Rimuovere gli 8 import `lazy(() => import("./pages/DemoXxx"))`
- Rimuovere le 8 `<Route path="/demo-xxx" ...>`

**`public/sitemap.xml`**
- Rimuovere le entry `/demo-dv` e `/demo-rbt` aggiunte di recente

**`src/pages/Realizzazioni.tsx`**
- Verificare e rimuovere eventuali link interni verso `/realizzazioni/demo-*` o `/demo-*` (la pagina Realizzazioni è stata creata con riferimenti a future route demo)

## Note
- Nessuna delle route `/demo-*` viene linkata dall'header/footer principali, quindi nessun impatto sulla navigazione globale.
- Dopo la rimozione, controllare che non restino import orfani che rompano il build.
