## Aggiungere card preview articolo Aruba in /blog

**File:** `src/pages/Blog.tsx`

1. Aggiungere import: `import blogArubaSupersite from "@/assets/blog-aruba-supersite.jpg";`
2. Inserire come **primo** elemento dell'array `articles`:
   - `slug`: `/blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere`
   - `title`: "Aruba SuperSite conviene davvero? Limiti, tempo perso e cosa sapere"
   - `description`: sintesi SEO-friendly su limiti del fai-da-te Aruba SuperSite e vantaggi di un sito professionale
   - `image`: `blogArubaSupersite`
   - `alt`: alt descrittivo con keyword
   - `datePublished`: `2026-06-09`

Nessuna altra modifica: route, sitemap, `blogArticles.ts` e pagina articolo già a posto. Il JSON-LD `CollectionPage > blogPost` si aggiorna automaticamente.