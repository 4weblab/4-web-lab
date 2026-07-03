## Modifica menu di navigazione

**File:** `src/components/Header.tsx`

Nell'array `navItems`, rimuovere le 4 voci ancora ancorate alla home:
- Chi siamo (`#chi-siamo`)
- Punti di forza (`#punti-di-forza`)
- Servizi (`#servizi`)
- Domande Frequenti (`#faq`)

Aggiungere una nuova voce **FAQ** che punta alla pagina dedicata `/faq-realizzazione-siti-web`, posizionata subito dopo "Blog".

### Nuovo ordine del menu
1. Realizzazioni
2. SEO & AI
3. Google ADS
4. Blog
5. **FAQ** → `/faq-realizzazione-siti-web`
6. Contatti

### Note
- Il link è una route interna, quindi userà `<Link>` come le altre voci (già gestito dalla logica `isRoute`).
- Nessun'altra modifica: header desktop e mobile ereditano automaticamente il nuovo array.
- Le ancore rimosse restano funzionanti se linkate da altre pagine (le sezioni in home esistono ancora), ma non compaiono più nel menu principale.
