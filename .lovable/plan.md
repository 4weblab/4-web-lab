

## Aggiunta icona WhatsApp accanto all'icona telefono

### Modifica

Nel file `src/components/Footer.tsx`, nella voce di contatto del numero di telefono (riga 49), aggiungere l'icona WhatsApp (componente `MessageCircle` di Lucide, gia importato) accanto all'icona `Phone` esistente, separati da uno slash `/`.

### Risultato visivo

Il link del telefono passera da:

```text
[icona telefono] +39 351 682 6560
```

a:

```text
[icona telefono] / [icona whatsapp] +39 351 682 6560
```

### Dettagli tecnici

- File: `src/components/Footer.tsx`, riga ~52
- Aggiungere uno span con `/` e l'icona `MessageCircle` (gia importata nel file) subito dopo l'icona `Phone` esistente
- Stesse dimensioni (`w-5 h-5`) e stile delle altre icone nel footer
- Nessun altro file modificato

