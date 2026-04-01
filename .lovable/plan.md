

## Add Testimonial Cards to AboutSection

Add a testimonial block at the bottom of the "Chi siamo" section with 3 Google review excerpts, styled consistently with the existing layout.

### Content (from screenshot)

| Name | Review |
|------|--------|
| Mattia Loreggian | "4 Web Lab si è occupata di crearci il sito, un logo e un'identità di brand molto precisa che adesso usiamo ovunque." |
| Jessica Trovò | "Adesso ho un sito nuovo, a norma e al prezzo giusto, e sto già vedendo i primi risultati di clientela nuova." |
| Lisa Bogana | "Carlo è riuscito a guidarmi senza complicare le cose. Il sito che abbiamo realizzato insieme mi rappresenta davvero." |

### Design

- 3 cards in a horizontal grid (`grid md:grid-cols-3 gap-6`) below the existing 2-column layout
- Each card: `card-glass` styling (matching existing cards), with:
  - Large decorative quote mark (accent color, low opacity) top-left
  - 5 gold stars (`#FBBF24` / `text-amber-400`) — vivid but harmonious
  - Review text in `text-muted-foreground`
  - Author: colored initial avatar circle (accent gradient) + name in `font-semibold`
- Wrapped in `StaggerContainer` / `StaggerItem` for consistent entrance animation
- Below cards: subtle "Leggi tutte le recensioni su Google →" link pointing to the Google Maps profile
- Section subtitle: "Le parole di chi ci ha scelto" with `section-divider`

### File modified

**`src/components/AboutSection.tsx`** — Add testimonials data array and render block after the existing grid, inside the same `container-section`. Import `Star` from lucide-react.

