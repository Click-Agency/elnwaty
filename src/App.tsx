import Providers from "./providers";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./routers";

export default function App() {
  return (
    <Providers>
      <Layout>
        <Header />
        <Routers />
        <Footer />
      </Layout>
    </Providers>
  );
}
