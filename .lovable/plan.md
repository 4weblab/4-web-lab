

## Internal Linking Update

Add contextual internal links across 5 pages without modifying existing headings, meta, or layout.

### 1. Home (Index) — RentalSection.tsx

After the CTA button area (line ~207), add a paragraph with three inline links:

```
<p className="text-sm text-muted-foreground mt-8 text-center">
  <Link to="/creare-sito-con-intelligenza-artificiale" className="text-accent hover:underline">Scopri come creare un sito con intelligenza artificiale</Link> · <Link to="/realizzazione-siti-web-padova" className="text-accent hover:underline">Realizzazione siti web a Padova</Link> · <Link to="/sito-web-barber" className="text-accent hover:underline">Sito web dedicato per barber shop</Link>
</p>
```

Add `Link` import from react-router-dom.

### 2. Pagina AI (CreareSitoConAI.tsx)

After the FAQ section (line ~309, before the CTA finale), add a paragraph block with three links:

```
<div className="container-section pb-8">
  <p className="text-muted-foreground text-center text-sm">
    <Link to="/quanto-costa-sito-web">Scopri i prezzi reali 2026 e il nostro modello a noleggio</Link> · 
    <Link to="/sito-web-barber">Vedi esempi di siti per barber shop</Link> · 
    <Link to="/realizzazione-siti-web-padova">Realizzazione siti web a Padova</Link>
  </p>
</div>
```

Verify `Link` is already imported.

### 3. Pagina Quanto costa (QuantoCostaSitoWeb.tsx)

After the FAQ accordion section (line ~411, before CTA finale), add:

```
<p className="text-center text-muted-foreground text-sm mt-10">
  <Link to="/creare-sito-con-intelligenza-artificiale">Creare un sito con intelligenza artificiale: conviene davvero nel 2026?</Link> · 
  <Link to="/sito-web-barber">Soluzioni dedicate per barber shop e parrucchieri</Link>
</p>
```

Verify `Link` is imported.

### 4. Pagina Barber (SitoWebBarber.tsx)

**After the pricing section** (line ~399, after the CTA "Richiedi il tuo sito"), add a paragraph:

```
<p className="text-center text-[#4A4A4A] mt-4 text-sm">
  <Link to="/quanto-costa-sito-web" className="text-[#C8A96A] hover:underline">Scopri tutti i prezzi e pacchetti aggiornati 2026</Link>
</p>
```

**After the FAQ section** (line ~434, after the Accordion), add:

```
<p className="text-center text-[#BFBFBF] mt-8 text-sm">
  <Link to="/creare-sito-con-intelligenza-artificiale" className="text-[#C8A96A] hover:underline">Confronta pro e contro dei siti creati con intelligenza artificiale</Link>
</p>
```

`Link` is already imported.

### 5. Pagina Padova (SitiWebPadova.tsx)

After the "Operativi a Padova e provincia" text (line ~241, after the second `<p>`), add:

```
<p className="mt-6">
  Offriamo anche soluzioni specifiche come la realizzazione di <Link to="/sito-web-barber" className="text-accent hover:underline font-medium">sito web per barber shop a Padova</Link>. Per approfondire i costi, consulta la nostra guida su <Link to="/quanto-costa-sito-web" className="text-accent hover:underline font-medium">quanto costa un sito web nel 2026</Link>, oppure scopri se conviene <Link to="/creare-sito-con-intelligenza-artificiale" className="text-accent hover:underline font-medium">creare un sito con intelligenza artificiale</Link>.
</p>
```

### Technical details

- **Files modified**: `RentalSection.tsx`, `CreareSitoConAI.tsx`, `QuantoCostaSitoWeb.tsx`, `SitoWebBarber.tsx`, `SitiWebPadova.tsx`
- Only `RentalSection.tsx` needs a new `Link` import; the others already have it
- All links use `<Link to="...">` for SPA navigation
- Styling matches each page's existing design tokens (accent colors for main site, gold `#C8A96A` for barber page)

