import type { RouteRecord } from "vite-react-ssg";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import Index from "./pages/Index";

// Wrap dynamic imports so react-router's `lazy` receives { Component }.
// Works with default exports (the convention across our pages).
const page = (loader: () => Promise<{ default: React.ComponentType<unknown> }>) =>
  async () => {
    const mod = await loader();
    return { Component: mod.default };
  };

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Index, entry: "src/pages/Index.tsx" },
      {
        path: "siti-web-per-professionisti",
        lazy: page(() => import("./pages/SitiWebProfessionisti")),
        entry: "src/pages/SitiWebProfessionisti.tsx",
      },
      {
        path: "realizzazione-siti-web-per-professionisti",
        element: <Navigate to="/siti-web-per-professionisti" replace />,
      },
      {
        path: "siti-web-aziendali",
        lazy: page(() => import("./pages/SitiWebAziendali")),
        entry: "src/pages/SitiWebAziendali.tsx",
      },
      {
        path: "realizzazione-siti-web-padova",
        lazy: page(() => import("./pages/SitiWebPadova")),
        entry: "src/pages/SitiWebPadova.tsx",
      },
      {
        path: "siti-web-per-negozi",
        lazy: page(() => import("./pages/SitiWebNegozi")),
        entry: "src/pages/SitiWebNegozi.tsx",
      },
      {
        path: "faq-realizzazione-siti-web",
        lazy: page(() => import("./pages/FaqSitiWeb")),
        entry: "src/pages/FaqSitiWeb.tsx",
      },
      {
        path: "posizionamento-google-e-ai",
        lazy: page(() => import("./pages/PosizionamentoGoogleEAi")),
        entry: "src/pages/PosizionamentoGoogleEAi.tsx",
      },
      {
        path: "pubblicita-google-ads",
        lazy: page(() => import("./pages/PubblicitaGoogleAds")),
        entry: "src/pages/PubblicitaGoogleAds.tsx",
      },
      {
        path: "creare-sito-con-intelligenza-artificiale",
        element: (
          <Navigate
            to="/blog/siti-web-creati-con-intelligenza-artificiale"
            replace
          />
        ),
      },
      {
        path: "quanto-costa-sito-web",
        element: <Navigate to="/blog/quanto-costa-un-sito-web-nel-2026" replace />,
      },
      {
        path: "blog",
        lazy: page(() => import("./pages/Blog")),
        entry: "src/pages/Blog.tsx",
      },
      {
        path: "blog/siti-web-creati-con-intelligenza-artificiale",
        lazy: page(() => import("./pages/BlogAiWebsiteArticle")),
        entry: "src/pages/BlogAiWebsiteArticle.tsx",
      },
      {
        path: "blog/quanto-costa-un-sito-web-nel-2026",
        lazy: page(() => import("./pages/BlogWebsiteCostArticle")),
        entry: "src/pages/BlogWebsiteCostArticle.tsx",
      },
      {
        path: "blog/sito-web-o-social-cosa-conviene-davvero-nel-2026",
        lazy: page(() => import("./pages/BlogSiteVsSocialArticle")),
        entry: "src/pages/BlogSiteVsSocialArticle.tsx",
      },
      {
        path: "blog/gdpr-siti-web-2026-obblighi-cookie-e-privacy",
        lazy: page(() => import("./pages/BlogGdprArticle")),
        entry: "src/pages/BlogGdprArticle.tsx",
      },
      {
        path: "blog/sito-web-obsoleto-5-segnali-che-ti-stanno-facendo-perdere-clienti-nel-2026",
        lazy: page(() => import("./pages/BlogOutdatedWebsiteArticle")),
        entry: "src/pages/BlogOutdatedWebsiteArticle.tsx",
      },
      {
        path: "blog/perche-il-tuo-sito-non-si-trova-su-google",
        lazy: page(() => import("./pages/BlogNotFoundOnGoogleArticle")),
        entry: "src/pages/BlogNotFoundOnGoogleArticle.tsx",
      },
      {
        path: "blog/siti-web-piattaforme-preventivi-online-conviene",
        lazy: page(() => import("./pages/BlogQuotePlatformsArticle")),
        entry: "src/pages/BlogQuotePlatformsArticle.tsx",
      },
      {
        path: "blog/creare-sito-web-da-soli-conviene",
        lazy: page(() => import("./pages/BlogDiyWebsiteArticle")),
        entry: "src/pages/BlogDiyWebsiteArticle.tsx",
      },
      {
        path: "blog/aruba-supersite-conviene-davvero-limiti-e-cosa-sapere",
        lazy: page(() => import("./pages/BlogArubaSupersiteArticle")),
        entry: "src/pages/BlogArubaSupersiteArticle.tsx",
      },
      {
        path: "contatti",
        lazy: page(() => import("./pages/Contact")),
        entry: "src/pages/Contact.tsx",
      },
      {
        path: "realizzazioni",
        lazy: page(() => import("./pages/Realizzazioni")),
        entry: "src/pages/Realizzazioni.tsx",
      },
      {
        path: "realizzazioni/realizzazione-sito-web-edilizia-rb-snc-veneto",
        lazy: page(() => import("./pages/DemoRbSncEdilizia")),
        entry: "src/pages/DemoRbSncEdilizia.tsx",
      },
      {
        path: "realizzazioni/demo-metalmeccanica",
        lazy: page(() => import("./pages/DemoMetalmeccanica")),
        entry: "src/pages/DemoMetalmeccanica.tsx",
      },
      {
        path: "realizzazioni/demo-studio-dentistico-premium",
        lazy: page(() => import("./pages/DemoStudioDentisticoPremium")),
        entry: "src/pages/DemoStudioDentisticoPremium.tsx",
      },
      {
        path: "realizzazioni/demo-fotovoltaico",
        lazy: page(() => import("./pages/DemoFotovoltaico")),
        entry: "src/pages/DemoFotovoltaico.tsx",
      },
      {
        path: "realizzazioni/boutique-bb-luxury-rooms",
        lazy: page(() => import("./pages/DemoBoutiqueBB")),
        entry: "src/pages/DemoBoutiqueBB.tsx",
      },
      {
        path: "realizzazioni/demo-flower-atelier",
        lazy: page(() => import("./pages/DemoFlowerAtelier")),
        entry: "src/pages/DemoFlowerAtelier.tsx",
      },
      {
        path: "realizzazioni/demo-personal-trainer-vera-method",
        lazy: page(() => import("./pages/DemoPersonalTrainerVeraMethod")),
        entry: "src/pages/DemoPersonalTrainerVeraMethod.tsx",
      },
      {
        path: "privacy",
        lazy: page(() => import("./pages/PrivacyPolicy")),
        entry: "src/pages/PrivacyPolicy.tsx",
      },
      {
        path: "cookie",
        lazy: page(() => import("./pages/CookiePolicy")),
        entry: "src/pages/CookiePolicy.tsx",
      },
      {
        path: "*",
        lazy: page(() => import("./pages/NotFound")),
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];