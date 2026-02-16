

## Aggiornamento sitemap.xml

### Modifiche previste

Sul file `public/sitemap.xml`:

1. Aggiunta di due nuovi blocchi `<url>` per le pagine satellite:
   - `https://www.4weblab.it/realizzazione-siti-web-per-professionisti` (changefreq: monthly, priority: 0.8)
   - `https://www.4weblab.it/siti-web-aziendali` (changefreq: monthly, priority: 0.8)

2. Rimozione del commento TODO presente nel file

3. Nessuna modifica agli URL esistenti (home, privacy, cookie)

### Dettagli tecnici

File modificato: `public/sitemap.xml`

Struttura risultante:

```text
Home          -> priority 1.0, monthly
Professionisti -> priority 0.8, monthly
Aziendali     -> priority 0.8, monthly
Privacy       -> priority 0.3, yearly  (invariato)
Cookie        -> priority 0.3, yearly  (invariato)
```

La `lastmod` delle nuove pagine sara impostata alla data odierna (2025-02-16).

