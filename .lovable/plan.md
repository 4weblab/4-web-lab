# Box avviso chiusura estiva 4 Web Lab

## Obiettivo
Aggiungere un box informativo con effetto glass leggero subito sotto la hero di tutte le pagine del sito, **escluse le pagine demo** (`/realizzazioni/demo-*` e `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto`), per comunicare la chiusura estiva dall'8 al 23 agosto.

## Cosa verrà fatto

### 1. Nuovo componente riutilizzabile
Creare `src/components/SummerClosureNotice.tsx` con:
- Stile glassmorphism coerente con il design system attuale (`--glass-bg`, `backdrop-blur`, bordo sottile, ombra `--shadow-glass`).
- Icona decorativa (es. `Sun` di lucide) in accent color.
- Testo fornito dall'utente, suddiviso in titolo, corpo e firma.
- Layout responsive: padding e tipografia adattati a mobile/tablet/desktop.
- Attributi ARIA appropriati (`role="note"`, `aria-label="Avviso chiusura estiva"`).
- Opzionalmente un pulsante di chiusura che salva la preferenza in `localStorage` per non mostrare più l'avviso nella stessa sessione.

### 2. Inserimento nelle pagine
Aggiungere `<SummerClosureNotice />` **subito dopo la sezione hero** nelle seguenti pagine:
- `src/pages/Index.tsx` (dopo `<Hero />`)
- `src/pages/SitiWebProfessionisti.tsx`
- `src/pages/SitiWebAziendali.tsx`
- `src/pages/SitiWebPadova.tsx`
- `src/pages/SitiWebNegozi.tsx`
- `src/pages/FaqSitiWeb.tsx`
- `src/pages/PosizionamentoGoogleEAi.tsx`
- `src/pages/PubblicitaGoogleAds.tsx`
- `src/pages/Blog.tsx`
- Tutti gli articoli del blog (`Blog*Article.tsx`)
- `src/pages/Contact.tsx`
- `src/pages/Realizzazioni.tsx`
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/CookiePolicy.tsx`
- `src/pages/NotFound.tsx`

**Pagine demo da NON toccare:**
- `DemoRbSncEdilizia.tsx`
- `DemoMetalmeccanica.tsx`
- `DemoStudioDentisticoPremium.tsx`
- `DemoFotovoltaico.tsx`
- `DemoBoutiqueBB.tsx`
- `DemoFlowerAtelier.tsx`
- `DemoPersonalTrainerVeraMethod.tsx`

### 3. Verifica
- Eseguire `bun run build` per verificare che il build SSG passi senza errori.
- Controllare visivamente il rendering su home e 2-3 pagine interne per confermare posizionamento, leggibilità e coerenza cromatica.
