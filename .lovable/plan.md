## Aggiornamento sitemap dopo rimozione box promo

Le modifiche recenti hanno toccato solo due pagine pubbliche: `/` (Hero) e `/siti-web-aziendali`. Nessuna rotta aggiunta/rimossa → nessun cambio strutturale a sitemap o robots.

### Cosa aggiorno
- `public/sitemap.xml`: aggiorno `<lastmod>` a **2026-06-05** per:
  - `https://4weblab.it/` (era 2026-04-16)
  - `https://4weblab.it/siti-web-aziendali` (era 2026-02-26)

### Effetto sui crawler
Al prossimo deploy Netlify, il plugin locale **IndexNow** (`netlify/plugins/indexnow`) rileva la diff del sitemap e notifica automaticamente Bing e Yandex delle due URL aggiornate. Google scopre il cambio al prossimo crawl del sitemap.

### Cosa NON tocco
- `public/robots.txt` (nessuna direttiva da cambiare).
- Altre `lastmod` (le rispettive pagine non sono state modificate).