import { AboutDetails } from "../components/sections/AboutDetails";
import PageHero from "../components/shared/PageHero";
import ContactUs from "../components/sections/ContactUs";
import OurConcepts from "../components/sections/OurConcepts";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";

export default function About() {
  return (
    <PageContainer>
      <PageHero
        jsonTransFiles={["about"]}
        className={`        
          bg-move-slim-pattern
          md:bg-contain
          bg-no-repeat 
          md:bg-bottom
          h-[70vh]
          justify-center`}
      />
      <AboutDetails />
      <Banner className="bg-mug-pattern  md:min-h-[450px]" />
      <OurConcepts />
      <ContactUs />
    </PageContainer>
  );
}
