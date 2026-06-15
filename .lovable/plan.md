
# Aggiunta flag `window.prerenderReady`

## Obiettivo
Esporre il segnale standard `window.prerenderReady` che i servizi di prerendering (Prerender.io, Rendertron, prerender-spa-plugin, ecc.) usano per capire quando la SPA è pronta per lo snapshot HTML — **senza** integrare alcun prerenderer nel build.

## Modifica unica: `src/main.tsx`

1. Dichiarare il tipo globale `window.prerenderReady`.
2. Inizializzarlo a `false` prima del render.
3. Impostarlo a `true` dopo che React ha completato il primo paint e `react-helmet-async` ha avuto modo di iniettare i tag nel `<head>` (doppio `requestAnimationFrame` dopo `createRoot().render(...)`).

```ts
declare global {
  interface Window { prerenderReady?: boolean }
}
window.prerenderReady = false;

createRoot(document.getElementById("root")!).render(<App />);

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    window.prerenderReady = true;
  });
});
```

## Cosa NON viene fatto
- Nessuna nuova dipendenza.
- Nessuna modifica a `vite.config.ts`, `netlify.toml`, sitemap, route o componenti.
- Nessun prerenderer integrato: il flag è solo "in attesa" che un servizio esterno (o un futuro plugin) lo legga.

## Effetto
- Zero impatto su utenti reali e Googlebot.
- Se in futuro colleghi Prerender.io o un plugin di build, troverà il segnale già pronto e farà lo snapshot al momento giusto (con i meta corretti di Helmet già nel DOM).
