import { AboutDetails } from "../components/sections/AboutDetails";
import AboutHero from "../components/sections/AboutHero";
import ContactUs from "../components/sections/ContactUs";
import OurConcepts from "../components/sections/OurConcepts";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";

const About = () => {
  return (
    <PageContainer>
      <AboutHero />
      <AboutDetails />
      <Banner className="bg-mug-pattern" />
      <OurConcepts />
      <ContactUs />
    </PageContainer>
  );
};

export default About;
