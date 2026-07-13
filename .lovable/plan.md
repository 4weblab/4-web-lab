## Obiettivo
Aggiungere una **Top Notification Bar** sitewide, posizionata sopra l'Header, con icona lampadina e testo SEO tip. Responsive, HTML reale, non sovrapposta all'header.

## Implementazione

### 1. Nuovo componente `src/components/TopNotificationBar.tsx`
- `<div>` fisso in top (`fixed top-0 left-0 right-0 z-[60]`, sopra l'header che è `z-50`).
- Sfondo scuro coerente col brand: usa `bg-primary` (navy della Hero) con testo `text-primary-foreground`.
- Contenuto: `<Lightbulb />` da `lucide-react` + `<p>` con il testo richiesto.
- Layout: `flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm`.
- Su mobile il testo va a capo naturalmente (nessun `truncate`); icona `shrink-0`.
- Altezza calcolata via CSS var `--notification-bar-height` (es. `36px` desktop, `56px` mobile via media query) per offset dinamico.

### 2. Aggiornare `src/components/Header.tsx`
- Cambia `top-0` → `top-[var(--notification-bar-height)]` così l'header si sposta sotto la barra senza sovrapposizioni.

### 3. Aggiornare `src/index.css`
- Definire `--notification-bar-height` in `:root` (36px) e in media query mobile (56px, considerando eventuale wrap del testo).
- Aggiungere `scroll-padding-top` e regolare l'offset globale dei contenuti sotto header (se attualmente si basa solo su `--header-height`, sommare la nuova var dove serve — es. `.page-hero` padding-top, anchor scroll di `handleNavClick`).
- Aggiornare la logica scroll-to-anchor nell'Header per sottrarre anche `--notification-bar-height`.

### 4. Montaggio sitewide
- Inserire `<TopNotificationBar />` in `src/App.tsx` dentro `<BrowserRouter>`, prima di `<Suspense>`, così è presente in **tutte le pagine** (Home, landing, blog, demo, policy, 404).

### 5. Verifica
- Controllare che le hero (`.page-hero` e Hero home) restino visibili integralmente (nessun contenuto tagliato).
- Testare responsive: mobile <400px il testo deve andare a capo pulito senza rompere il layout.

## Dettagli tecnici
- Nessuna nuova dipendenza (Lucide già installato).
- Nessuna interazione JS: barra puramente statica, sempre visibile (no dismiss) come richiesto.
- Accessibilità: `role="note"` sul contenitore e `aria-hidden="true"` sull'icona decorativa.

## Fuori scopo
- Nessuna modifica ai contenuti pagina, SEO tag, sitemap.
- Nessun sistema di dismissal / cookie / A/B (non richiesto).
