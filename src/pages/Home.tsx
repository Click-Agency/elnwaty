import Achievements from "../components/sections/Achievements";
import HomeHero from "../components/sections/HomeHero";
import OurProducts from "../components/sections/OurProducts";
import OurServices from "../components/sections/OurServices";
import Testimonials from "../components/sections/Testimonials";
import WelcomeBanner from "../components/sections/WelcomeBanner";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";
import Clients from "../components/sections/Clients";
import Gallery from "../components/sections/Gallery";

export default function Home() {
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
      <Gallery />
      <OurProducts showTitle />
      <Clients />
      <Testimonials />
    </PageContainer>
  );
}
