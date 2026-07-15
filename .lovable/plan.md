# Transizione wave/curva post-Hero

## Obiettivo
Creare un elemento visivo-animato subito dopo la hero che funga da ponte verso la sezione "Chi siamo" e indichi chiaramente all'utente di scrollare verso il basso.

## Soluzione proposta
Un componente `HeroScrollTransition` posizionato in fondo alla hero con:
- **SVG wave** che collega il fondo scuro della hero al background chiaro di `AboutSection` (`bg-surface-alt`)
- **Icona centrale animata** (freccia o doppia freccia) che rimbalza/riluce in loop per suggerire lo scroll
- Stili coerenti con i token esistenti (navy, accent, glassmorphism)
- Rispetto di `prefers-reduced-motion`

## File coinvolti
1. `src/components/HeroScrollTransition.tsx` — nuovo componente
2. `src/components/Hero.tsx` — montare la transizione in fondo alla sezione
3. `src/index.css` — keyframes e classi utility per l'animazione

## Implementazione

### 1. Nuovo componente `HeroScrollTransition.tsx`
- SVG wave a tutta larghezza con viewBox 1440x120 (o simile) per garantire scalabilità
- Fill del path: `hsl(var(--surface-alt))` per fondersi con il background della sezione successiva
- Elemento centrale: cerchio glassmorfico con icona `ChevronDown` o doppia freccia
- Animazione icona: movimento verticale a onda (`translateY`) con opacità pulsante
- Posizionamento: `absolute bottom-0 left-0 right-0 z-20` dentro la hero

### 2. Modifica `Hero.tsx`
- Importare e montare `<HeroScrollTransition />` come ultimo figlio della `<section>` hero, prima della chiusura
- Rimuovere o ridurre il bottone `ArrowDown` esistente per evitare ridondanza (opzionale, da decidere in fase di build)

### 3. Aggiornamento `src/index.css`
- Aggiungere keyframe `scroll-pulse`:
  - 0%: translateY(0), opacity 1
  - 50%: translateY(8px), opacity 0.6
  - 100%: translateY(0), opacity 1
- Classe `.scroll-indicator` con `animation: scroll-pulse 2s ease-in-out infinite`
- Racchiudere in `@media (prefers-reduced-motion: reduce)` per disabilitare l'animazione

## Dettagli tecnici
- Nessuna dipendenza aggiuntiva: si usa Framer Motion già presente (o CSS puro per evitare JS aggiuntivo)
- Accessibilità: `aria-hidden="true"` sull'animazione decorativa; nessun testo nascosto per screen reader
- Mobile: wave si adatta con `preserveAspectRatio="none"`; icona centrale rimane touch-friendly
- Performance: animazione CSS su `transform` e `opacity`, nessun reflow

## Verifica
- Build del progetto senza errori
- Screenshot su desktop e mobile per confermare che:
  - La wave si fonde con il background di `AboutSection`
  - L'icona animata è visibile ma non invasiva
  - Non ci sono sovrapposizioni con testo o CTA della hero
  - L'animazione si ferma con `prefers-reduced-motion: reduce`