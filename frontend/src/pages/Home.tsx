import Achievements from "../components/sections/Achievements";
import HomeHero from "../components/sections/HomeHero";
import OurServices from "../components/sections/OurServices";
// import Testimonials from "../components/sections/Testimonials";
import WelcomeBanner from "../components/sections/WelcomeBanner";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";
import Carousel from "../components/sections/Carousel";
import OurProjects from "../components/sections/OurProjects";

// client images
import clientOne from "../assets/imgs/clients/client_1.png";
import clientTwo from "../assets/imgs/clients/client_2.png";
import clientThree from "../assets/imgs/clients/client_3.jpg";
import clientFour from "../assets/imgs/clients/client_4.jpg";
import clientFive from "../assets/imgs/clients/client_5.jpg";
import clientSix from "../assets/imgs/clients/clinet_6.webp";
import clientSeven from "../assets/imgs/clients/client_7.webp";
import clientEight from "../assets/imgs/clients/client_8.png";
import clientNine from "../assets/imgs/clients/client_9.jpg";
import clientTen from "../assets/imgs/clients/client_10.jpg";
import clientEleven from "../assets/imgs/clients/client_11.webp";
import clientTwelve from "../assets/imgs/clients/client_12.png";
import clientThirteen from "../assets/imgs/clients/client_13.jpg";
import clientFourteen from "../assets/imgs/clients/client_14.jpg";
import clientFifteen from "../assets/imgs/clients/client_15.jpg";

// supplier images
import supplierOne from "../assets/imgs/suppliers/supplier_1.png";
import supplierTwo from "../assets/imgs/suppliers/supplier_2.png";
import supplierThree from "../assets/imgs/suppliers/supplier_3.png";
import supplierFour from "../assets/imgs/suppliers/supplier_4.png";
import supplierFive from "../assets/imgs/suppliers/supplier_5.png";
import supplierSix from "../assets/imgs/suppliers/supplier_6.png";
import supplierSeven from "../assets/imgs/suppliers/supplier_7.png";
import supplierEight from "../assets/svgs/suppliers/supplier_8.svg";
import supplierNine from "../assets/svgs/suppliers/supplier_9.svg";
import { useTranslation } from "react-i18next";

const clientsArr: string[] = [
  clientOne,
  clientTwo,
  clientThree,
  clientFour,
  clientFive,
  clientSix,
  clientSeven,
  clientEight,
  clientNine,
  clientTen,
  clientEleven,
  clientTwelve,
  clientThirteen,
  clientFourteen,
  clientFifteen,
];

const suppliersArr: string[] = [
  supplierOne,
  supplierTwo,
  supplierThree,
  supplierFour,
  supplierFive,
  supplierSix,
  supplierSeven,
  supplierEight,
  supplierNine,
];

export default function Home() {
  const { t } = useTranslation(["home"]);

  return (
    <PageContainer>
      <HomeHero />
      <WelcomeBanner />
      <OurServices />
      <WhyChooseUs />
      <Banner
        title
        className="bg-tanks-pattern min-h-[200px] md:min-h-[300px]"
        parallax
        parallaxBg
        parallaxClassName="bg-blue-400/30 "
      />
      <Achievements />
      <OurProjects />
      <Carousel
        title={t("ourSuppliers.title")}
        containerClassName="bg-white"
        items={suppliersArr}
        cardClassName="max-w-72"
      />
      <Carousel title={t("ourClients.title")} items={clientsArr} />
      {/* <Testimonials /> */}
    </PageContainer>
  );
}
