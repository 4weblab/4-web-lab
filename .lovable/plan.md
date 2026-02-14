

## Sostituzione bottone WhatsApp nella sezione contatti della home page

Sostituire l'attuale `motion.a` con icona Lucide `MessageCircle` (riga 60-71 di `ContactSection.tsx`) con un bottone in stile satellite: sfondo verde `#25D366`, bordi arrotondati `rounded-full`, logo WhatsApp SVG ufficiale e link `wa.me`.

### Dettagli tecnici

**File**: `src/components/ContactSection.tsx`

- Rimuovere l'import di `MessageCircle` da lucide-react (se non usato altrove nella sezione)
- Sostituire il blocco `motion.a` (righe ~60-71) con un tag `<a>` stilizzato identico a quello delle pagine satellite:
  - Classi: `inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`
  - Icona SVG WhatsApp ufficiale (cerchio verde + logo bianco)
  - Testo: "Scrivici su Whatsapp"
  - Attributi `href`, `target="_blank"`, `rel="noopener noreferrer"` mantenuti

