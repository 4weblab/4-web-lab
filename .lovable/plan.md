

## Image Optimization & Core Web Vitals Improvement

### Current state

**Images in the project (11 in `src/assets`, 2 in `public/lovable-uploads`, 1 in `public/`):**

| File | Used in | Current format | Role |
|------|---------|---------------|------|
| `hero-bg.png` | Hero (backgroundImage) | PNG | LCP element (above-the-fold) |
| `barber-hero.jpg` | SitoWebBarber hero | JPG | LCP on barber page |
| `barber-cut.jpg` | Barber services | JPG | Below fold |
| `barber-beard.jpg` | Barber services | JPG | Below fold |
| `barber-styling.jpg` | Barber services | JPG | Below fold |
| `barber-gallery.jpg` | Barber gallery | JPG | Below fold |
| `barber-identity.jpg` | Barber identity | JPG | Below fold |
| `barber-solution-bg.jpg` | Barber parallax bg | JPG | Below fold |
| `aziendali-mockup.jpg` | SitiWebAziendali | JPG | Below fold |
| `aziendali-team.jpg` | SitiWebAziendali | JPG | Below fold |
| `logo.png` | public | PNG | Small, keep as-is |
| 2x `lovable-uploads/*.png` | Header/Footer logos | PNG | Small UI elements |
| `og-image.jpg` | OG meta | JPG | Not rendered in page |

**Current issues:**
- No `<link rel="preload">` for LCP images
- No `fetchpriority` or `decoding` attributes
- Hero uses `backgroundImage` CSS (invisible to browser preload scanner)
- PNG format for hero (likely large)
- Alt texts are minimal/generic on some images
- No explicit `width`/`height` on images (CLS risk)
- Google Maps iframe loads eagerly on home page (MapSection is not on Index but exists)

---

### Plan

#### 1. Convert hero-bg.png to WebP and add preload hint

- **Cannot convert files in read-only Lovable environment.** Instead, I will:
  - Add a `<link rel="preload" as="image" href="..." fetchpriority="high">` in `index.html` for the hero background
  - Change Hero.tsx to use an `<img>` tag with `fetchpriority="high"` and `decoding="async"` instead of CSS `backgroundImage` (makes LCP discoverable by browser preload scanner)
  - Add `width` and `height` attributes or aspect-ratio styling to prevent CLS

> **Note on WebP conversion:** Vite does not auto-convert images to WebP. Converting to WebP requires either a Vite plugin (`vite-imagetools`) or manual conversion outside Lovable. I will add `vite-imagetools` and use `?format=webp` import suffixes for all images.

#### 2. Add SEO-friendly alt text to all images

Update alt attributes across all files:

| Image | Current alt | New alt |
|-------|------------|---------|
| `hero-bg` | none (aria-hidden div) | Add to new `<img>`: "Sito web professionale realizzato da 4weblab per PMI e professionisti" |
| `barber-hero` | "Interno di un barber shop moderno" | "Sito web per barber shop realizzato da 4weblab – esempio hero" |
| `barber-identity` | "Identità barber shop online" | "Esempio sito web barber shop con identità visiva personalizzata da 4weblab" |
| `barber-solution-bg` | none (aria-hidden) | Add via new img or keep aria-hidden |
| `aziendali-mockup` | "Mockup di sito web aziendale..." | "Esempio sito web aziendale multipagina realizzato da 4weblab" |
| `aziendali-team` | "Team che pianifica..." | "Team 4weblab che progetta l'architettura di un sito web aziendale" |
| Header logo | "4 Web Lab logo" | OK (keep) |
| Footer logo | "4 Web Lab logo" | OK (keep) |

#### 3. Add lazy loading and performance attributes

- **Above-the-fold images** (`hero-bg`, `barber-hero`): `loading="eager"`, `fetchpriority="high"`, `decoding="async"`
- **All other images**: `loading="lazy"`, `decoding="async"` (most barber images already have `loading="lazy"`)
- **Aziendali images**: already have `loading="lazy"` — add `decoding="async"`
- **Google Maps iframe** (MapSection): already has `loading="lazy"` — OK

#### 4. Fix CLS: add explicit dimensions

- Hero: use `<img>` with `object-cover` and `absolute inset-0` positioning (no CLS since it fills container)
- Barber service cards: already have `aspect-[4/3]` — OK
- Aziendali images: add `aspect-ratio` or `width`/`height`

#### 5. Add preload link for LCP image

In `index.html`, add:
```html
<link rel="preload" as="image" href="/src/assets/hero-bg.png" fetchpriority="high" />
```

(Vite will transform the path during build. For the barber page, preloading would need to be conditional — skip it since it's a secondary page.)

---

### Files modified

1. **`index.html`** — Add preload hint for hero image
2. **`src/components/Hero.tsx`** — Replace CSS `backgroundImage` with `<img>` tag; add `fetchpriority="high"`, `decoding="async"`, SEO alt text
3. **`src/pages/SitoWebBarber.tsx`** — Update alt texts to SEO-friendly versions; add `fetchpriority="high"` and `decoding="async"` to hero; add `decoding="async"` to all lazy images
4. **`src/pages/SitiWebAziendali.tsx`** — Update alt texts; add `decoding="async"` to images
5. **`src/components/Header.tsx`** — Add `decoding="async"` to logo
6. **`src/components/Footer.tsx`** — Add `decoding="async"` to logo

### What I cannot do in Lovable (manual steps needed)

- **Convert PNG/JPG to WebP**: Requires adding `vite-imagetools` plugin or manually replacing files. I will install `vite-imagetools` and update imports to use `?format=webp&quality=80` suffixes.
- **Compress images to target sizes**: Requires external tools (squoosh, sharp). The WebP conversion via vite-imagetools will significantly reduce sizes.

### Post-implementation summary

After changes, I will provide:
- A table of all optimized images with before/after attributes
- Remaining suggestions for further speed improvements

