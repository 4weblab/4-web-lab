

## Piano

Creare il file `public/_redirects` con la regola di rewrite per Netlify SPA routing.

### Nuovo file: `public/_redirects`

Contenuto esatto (una sola riga, nessuno spazio extra):

```
/*    /index.html   200
```

Un solo file creato. Vite copierà automaticamente i file dalla cartella `public/` nella root della build, quindi `_redirects` sarà presente nella directory di deploy.

