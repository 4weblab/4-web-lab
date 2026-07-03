## Aggiungere voce "Siti web" nella navbar

**File:** `src/components/Header.tsx`

Nell'array `navItems`, inserire subito dopo `Home`:

```ts
{ label: 'Siti web', href: '/#sitiweb' },
```

La logica esistente tratta gli href che iniziano con `/` come route link (`<Link>`), quindi navigherà alla home e il browser (assieme a `ScrollToTop`) gestirà l'ancora `#sitiweb`.
