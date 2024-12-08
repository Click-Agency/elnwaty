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
          bg-no-repeat 
          bg-center
          h-[100vh]
          justify-center`}
      />
      <OurProducts showTitle />
      <Banner
        title
        titleClassName="text-white mt-4 z-[1]"
        className="bg-tanks-pattern min-h-[200px] md:min-h-[400px] "
        parallax
        parallaxBg
        parallaxClassName="bg-blue-400/30"
      />
      <OurProducts showTitle />
      <Banner contact />
    </PageContainer>
  );
}
