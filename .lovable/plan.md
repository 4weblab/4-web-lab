# Header identico alla Home su tutte le pagine

## Obiettivo
Su tutte le pagine il menu in alto deve comportarsi come nella Home: **trasparente in cima alla pagina, sfondo bianco con bordo e ombra quando si scorre**. Nessuna pagina avrà più l'header grigio fisso dall'apertura.

## Cosa cambia (solo `src/components/Header.tsx`)
1. `isSolid = isScrolled` — la prop `satelliteMode` non forza più l'header solido all'apertura; lo stato solido dipende solo dallo scroll, come in Home.
2. `satelliteMode` resta, ma con nuovo significato: indica pagine con **hero chiara** (tutte le pagine interne). Nello stato trasparente (in cima, prima dello scroll) logo, voci di menu, icone home/indietro e icona hamburger usano testo scuro (`text-foreground`) invece di bianco — necessario perché le hero interne sono chiare, a differenza della hero scura della Home. Invariato il comportamento dopo lo scroll.
3. Le pagine continuano a passare `satelliteMode` come oggi: nessuna modifica ai file delle pagine.

## Pagine coinvolte
- Zone Servite, Blog, Contatti, FAQ, servizi (Negozi/Professionisti/Aziende, SEO & IA, Google ADS, ChatGPT Ads), landing locali (Padova, Legnaro, Piove di Sacco, Ponte San Nicolò, Albignasego, Vigonza, Abano Terme, Cittadella), Realizzazioni (lista), articoli del blog, Privacy/Cookie, NotFound: header trasparente con testo scuro in cima → bianco solido allo scroll.
- **Realizzazione R.B. s.n.c.** (`DemoRbSncEdilizia.tsx`): inclusa — hero chiara, stesso comportamento.
- **Home**: invariata (trasparente con testo chiaro sulla hero scura → solido allo scroll).
- **Demo concept** (Metalmeccanica, Fotovoltaico, Flower Atelier, Studio Dentistico, Pasticceria, B&B, Vera Method): hanno un header proprio interno alla demo, non usano `Header` — nessuna modifica.

## Dettagli tecnici
- File toccato: solo `src/components/Header.tsx` (costante `isSolid`, classi colore nello stato trasparente in base a `satelliteMode`: logo, `baseClass` nav desktop, `backIconClass`, icone Menu/X mobile).
- Sfondo solido invariato (`--glass-bg` + blur + ombra), identico alla Home allo scroll.
- Logica scroll-spy, dropdown Servizi, menu mobile: invariati.
- Verifica: build + controllo visivo Playwright su `/zone-servite`, `/blog`, `/contatti`, `/realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto` e `/` (cima e dopo scroll).
