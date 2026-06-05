## Uniformazione `about` nelle WebPage delle 3 demo

Allineare le 3 demo a BoutiqueBB/FlowerAtelier: il `WebPage.about` deve puntare al concept (oggetto della pagina), non all'agenzia (che resta `author`/`publisher`/`creator`).

### Modifiche

- `src/pages/DemoMetalmeccanica.tsx` L1047: `about: { "@id": "https://4weblab.it/#business" }` → `about: { "@id": "https://4weblab.it/realizzazioni/demo-metalmeccanica#concept" }`
- `src/pages/DemoStudioDentisticoPremium.tsx` L1559: `about: { "@id": "https://4weblab.it/#business" }` → `about: { "@id": canonical + "#concept" }`
- `src/pages/DemoFotovoltaico.tsx` L1328: `about: { "@id": "https://4weblab.it/#business" }` → `about: { "@id": "https://4weblab.it/realizzazioni/demo-fotovoltaico#concept" }`

### Cosa NON tocco
- `foundingDate: "2026"` confermato dall'utente, resta invariato
- Tutto il resto del graph (è già perfetto)

Fine audit schema markup.
