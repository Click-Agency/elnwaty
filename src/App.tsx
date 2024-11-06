import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Routers from "./routers";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.document.documentElement.lang = i18n.language;
    window.document.dir = i18n.dir();
  }, [i18n.language, i18n.dir]);

  return (
    <Layout>
      <Header />
      <Routers />
      <Footer />
    </Layout>
  );
}
