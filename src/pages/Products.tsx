import ContactUs from "../components/sections/ContactUs";
import OurProducts from "../components/sections/OurProducts";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";
import PageHero from "../components/shared/PageHero";

export default function Products() {
  return (
    <PageContainer>
      <PageHero
        jsonTransFiles={["products"]}
        className={`        
          bg-cup-water-pattern
          bg-cover
          bg-no-repeat 
          bg-center
          h-[100vh]
          justify-center`}
      />
      <OurProducts />
      <Banner className="bg-tanks-pattern min-h-[250px] md:min-h-[700px]" />
      <Banner contact />
      <ContactUs />
    </PageContainer>
  );
}