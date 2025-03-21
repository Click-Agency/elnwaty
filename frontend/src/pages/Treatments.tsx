import PageContainer from "../components/shared/containers/PageContainer";
import TreatmentsHero from "../components/sections/TreatmentsHero";
import OurTreatments from "../components/sections/OurTreatments";
// import Testimonials from "../components/sections/Testimonials";
import Banner from "../components/shared/Banner";
import WhyOurTreatment from "../components/sections/WhyOurTreatment";

export default function Systems() {
  return (
    <PageContainer>
      <TreatmentsHero />
      <OurTreatments />
      <WhyOurTreatment />
      {/* <Testimonials /> */}
      <Banner contact />
    </PageContainer>
  );
}
