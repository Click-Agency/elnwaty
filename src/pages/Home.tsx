import ContactUs from "../components/sections/ContactUs";
import HomeHero from "../components/sections/HomeHero";
import OurProducts from "../components/sections/OurProducts";
import OurServices from "../components/sections/OurServices";
import Testimonials from "../components/sections/Testimonials";
import WelcomeBanner from "../components/sections/WelcomeBanner";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PageContainer from "../components/shared/containers/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <HomeHero />
      <WelcomeBanner />
      <OurServices />
      <WhyChooseUs />
      <OurProducts />
      <Testimonials />
      <ContactUs />
    </PageContainer>
  );
}