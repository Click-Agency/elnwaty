import PageContainer from "../components/shared/containers/PageContainer";
import SystemsHero from "../components/sections/SystemsHero";
import OurSystems from "../components/sections/OurSystems";
import Testimonials from "../components/sections/Testimonials";
import Banner from "../components/shared/Banner";
import ContactUs from "../components/sections/ContactUs";
import WhyOurTreatment from "../components/sections/WhyOurTreatment";

export default function Systems() {
  return (
    <PageContainer>
      <SystemsHero />
      <OurSystems showTitle />
      <WhyOurTreatment />
      <Testimonials />
      <Banner contact />
      <ContactUs />
    </PageContainer>
  );
}
