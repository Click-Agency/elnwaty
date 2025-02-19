import BlogsHero from "../components/sections/BlogsHero";
import OurBlogs from "../components/sections/OurBlogs";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";

export default function Blogs() {
  return (
    <PageContainer paddingTop>
      <BlogsHero />
      <Banner contact />
      <OurBlogs />
    </PageContainer>
  );
}
