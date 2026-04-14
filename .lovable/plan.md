

## Plan: Add WhatsApp button in Hero section

Add a "Scrivi su WhatsApp" button next to the existing "Richiedi preventivo gratuito" button in the Hero, using the same WhatsApp link from the contact section (`https://wa.me/393514656042?text=...`).

### Changes

**`src/components/Hero.tsx`**
- Import the WhatsApp SVG icon (same one used in ContactSection)
- Add the WhatsApp number/message constants
- Add a second button styled as a WhatsApp CTA (green `#25D366` background, white text, WhatsApp icon) inside the existing `flex` row alongside the primary CTA
- The link opens in a new tab with `noopener noreferrer`

Result: two buttons side by side — "Richiedi preventivo gratuito" (primary blue) and "Scrivi su WhatsApp" (green with WhatsApp icon).

