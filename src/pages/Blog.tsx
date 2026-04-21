import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | 4 Web Lab</title>
        <meta
          name="description"
          content="Blog di 4 Web Lab: articoli, guide e approfondimenti su realizzazione siti web, SEO e digital marketing."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://4weblab.it/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://4weblab.it/blog" />
        <meta property="og:title" content="Blog | 4 Web Lab" />
        <meta
          property="og:description"
          content="Blog di 4 Web Lab: articoli, guide e approfondimenti su realizzazione siti web, SEO e digital marketing."
        />
      </Helmet>

      <Header satelliteMode />

      <main id="main-content" style={{ minHeight: "calc(100vh - var(--header-height))" }} />

      <Footer />
    </>
  );
};

export default Blog;
