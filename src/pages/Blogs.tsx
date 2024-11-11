import BlogsHero from "../components/sections/BlogsHero";
import ContactUs from "../components/sections/ContactUs";
import OurBlogs from "../components/sections/OurBlogs";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";

export default function Blogs() {
  return (
    <PageContainer paddingTop>
      <BlogsHero />
      <Banner contact />
      <OurBlogs />
      <ContactUs />
    </PageContainer>
  );
}
