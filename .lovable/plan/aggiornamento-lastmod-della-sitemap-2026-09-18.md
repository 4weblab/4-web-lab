# Aggiornamento lastmod della sitemap

## Stato attuale

Le **pagine sono tutte presenti**: la sitemap (`public/sitemap.xml`, 40 URL) corrisponde esattamente alle 40 rotte pubbliche dell'app, incluse le nuove landing locali (Legnaro, Piove di Sacco, Ponte San Nicolò, Albignasego, Vigonza, Abano Terme, Cittadella), `/zone-servite`, `/chatgpt-ads` e tutti gli articoli del blog.

Le **date `lastmod` invece non sono corrette**: 29 pagine risultano ferme al 3 luglio 2026 anche se sono state modificate in modo sostanziale a settembre (nuovi prezzi, sezioni, FAQ, riscrittura degli articoli del blog). Un lastmod non aggiornato dice a Google che la pagina non è cambiata e può ritardare la scansione delle novità.

## Modifica

Aggiornare in `public/sitemap.xml` il `<lastmod>` di ogni pagina alla data reale dell'ultima modifica significativa (letta dalla cronologia delle versioni dei file):

| Pagina | Nuovo lastmod |
|---|---|
| `/` (Home) | 2026-09-14 |
| `/siti-web-per-negozi` | 2026-09-14 |
| `/siti-web-per-professionisti` | 2026-09-15 |
| `/siti-web-aziendali` | 2026-09-14 |
| `/realizzazione-siti-web-padova` | 2026-09-14 |
| `/faq-realizzazione-siti-web` | 2026-09-10 |
| `/posizionamento-google-e-ai` | 2026-09-15 |
| `/pubblicita-google-ads` | 2026-09-17 |
| `/chatgpt-ads` | 2026-09-17 |
| `/realizzazioni` | 2026-09-10 |
| `/zone-servite` | 2026-09-10 |
| Le 7 landing locali (legnaro, piove-di-sacco, ponte-san-nicolo, albignasego, vigonza, abano-terme, cittadella) | 2026-09-11 |
| `/blog` | 2026-09-09 |
| 5 articoli riscritti (intelligenza-artificiale, quanto-costa, aruba-supersite, creare-sito-web-da-soli, perche-non-si-trova-su-google) | 2026-09-18 |
| Articoli social/gdpr/obsoleto/preventivi-online | 2026-09-04 |
| `/privacy`, `/cookie` | 2026-09-10 |
| `/contatti` | 2026-08-30 |

Restano invariati: gli URL, le priorità, le pagine demo delle realizzazioni (non modificate di recente) e tutto il resto del file.

## Dettagli tecnici

- Unico file modificato: `public/sitemap.xml` (file statico, nessun generatore da aggiornare).
- Nessuna modifica a rotte, componenti o meta tag.
- Verifica finale: controllo che il numero di URL resti 40 e che ogni lastmod corrisponda alla tabella.
