

## Piano

Aggiungere sotto la riga copyright `© 2026 4 Web Lab. Tutti i diritti riservati.` una seconda riga con il nome completo e la partita IVA.

### Modifica in `src/components/Footer.tsx` (riga 71)

Dopo il `<p>` del copyright, aggiungere un nuovo `<p>` con:

```tsx
<p className="text-primary-foreground/45 text-sm whitespace-nowrap">
  © {currentYear} {businessInfo.name}. Tutti i diritti riservati.
</p>
<p className="text-primary-foreground/45 text-sm">
  {businessInfo.fullName} — {businessInfo.vatNumber}
</p>
```

Questo produrrà: **4 Web Lab di Fullin Carlo — P.IVA: 05765760284**

Un solo file modificato: `src/components/Footer.tsx`.

