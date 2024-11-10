import PageContainer from "../components/shared/containers/PageContainer";
import BlogsHero from "../components/sections/BlogsHero";
import OurSystems from "../components/sections/OurSystems";
import Testimonials from "../components/sections/Testimonials";
import Banner from "../components/shared/Banner";
import ContactUs from "../components/sections/ContactUs";
import WhyOurTreatment from "../components/sections/WhyOurTreatment";

export default function Blogs() {
  return (
    <PageContainer>
      <BlogsHero />
      <OurSystems showTitle />
      <WhyOurTreatment />
      <Testimonials />
      <Banner contact />
      <ContactUs />
    </PageContainer>
  );
}
