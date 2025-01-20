import { useTranslation } from "react-i18next";
import OurProducts from "../components/sections/OurProducts";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";
import PageHero from "../components/shared/PageHero";
import { Category } from "../types/products";

// product imgs
import tanks from "../assets/imgs/products/tanks.png";
import TSD230tDsMonitor from "../assets/imgs/products/tsd-230t-ds-monitor.png";
import FC1 from "../assets/imgs/products/fc-1.png";
import FC6 from "../assets/imgs/products/fc-2.png";
import FC9 from "../assets/imgs/products/fc-9-doe.png";
import FC18 from "../assets/imgs/products/fc-18.png";
import FC25 from "../assets/imgs/products/fc-25.png";
import FC28 from "../assets/imgs/products/fc-28.png";
import FC29 from "../assets/imgs/products/fc-29.png";
import FC35 from "../assets/imgs/products/fc-35.png";
import FH8 from "../assets/imgs/products/fh-8.png";
import FH18 from "../assets/imgs/products/fh-18.png";
import FH39 from "../assets/imgs/products/fh-39.png";
import FH35 from "../assets/imgs/products/fh-35.png";
import containers from "../assets/imgs/products/containers.png";
import pg26 from "../assets/imgs/products/pg-2-6.png";
import dfd25 from "../assets/imgs/products/dfd-25.png";
import pg4100 from "../assets/imgs/products/pg-4-100.png";
import upvc9 from "../assets/imgs/products/upvc-9.png";
import upvc5 from "../assets/imgs/products/upvc-5.png";
import upvcBag from "../assets/imgs/products/upvc-bag.png";
import upvc5xl from "../assets/imgs/products/upvc-5-xl.png";
import dt01 from "../assets/imgs/products/dt-01.png";
import d05 from "../assets/imgs/products/d05.png";

const imgsArr = [
  containers,
  TSD230tDsMonitor,
  FC1,
  FC6,
  FC9,
  FC18,
  FC25,
  FC28,
  FC29,
  FC35,
  "",
  "",
  "",
  "",
  FH8,
  FH18,
  FH39,
  FH35,
  tanks,
  "",
  "",
  "",
  "",
  dfd25,
  pg26,
  pg4100,
  upvc9,
  upvc5,
  upvcBag,
  upvc5xl,
  dt01,
  d05,
];

const getProductsArr = (categoriesArr: Category[], imgs: string[]) => {
  let totalIndex = 0;
  return Array.from({ length: categoriesArr.length }, (_, i) => {
    return categoriesArr[i].items.map((item) => {
      const img = imgs[totalIndex] ?? "";
      totalIndex++;
      return {
        img,
        description: item,
      };
    });
  });
};

export default function Products() {
  const { t } = useTranslation(["products"]);

  const categoriesArr: Category[] = Object.values(
    t("categories", { returnObjects: true })
  );

  const productsArr = getProductsArr(categoriesArr, imgsArr);

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

      {categoriesArr.map(({ title }, i) => (
        <OurProducts key={i} title={title} productsArr={productsArr[i]} />
      ))}
      {/* <Banner
        title
        titleClassName="text-white mt-4 z-[1]"
        className="bg-tanks-pattern min-h-[200px] md:min-h-[400px] "
        parallax
        parallaxBg
        parallaxClassName="bg-blue-400/30"
      /> */}
      <Banner contact />
    </PageContainer>
  );
}
