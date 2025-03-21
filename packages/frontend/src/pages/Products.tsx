import { useTranslation } from "react-i18next";
import OurProducts from "../components/sections/OurProducts";
import Banner from "../components/shared/Banner";
import PageContainer from "../components/shared/containers/PageContainer";
import PageHero from "../components/shared/PageHero";
import { Category } from "../types/products";
import { IoMdCloudDownload } from "react-icons/io";
import { info } from "../config";
import ButtonStyled from "../components/shared/ButtonStyled";

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
import FC53 from "../assets/imgs/products/fc-53.png";
import FC55 from "../assets/imgs/products/fc-55.png";
import FC54 from "../assets/imgs/products/fc-54.png";
import FC57 from "../assets/imgs/products/fc-57.png";
import brineTank from "../assets/imgs/products/brine-tank.png";
import venture from "../assets/imgs/products/venture.png";
import flowmeter from "../assets/imgs/products/flow-meter.png";
import lzt from "../assets/imgs/products/lzt.png";
import btSuper from "../assets/imgs/products/bt-super.png";
import zenClear from "../assets/imgs/products/zen-clear.png";
// import sodumHypo from "../assets/imgs/products/sodium-hypo.png";
// import hydroCloric from "../assets/imgs/products/hydro-cloric.png";
// import brekoSafe from "../assets/imgs/products/breko-safe.png";
// import hydrex from "../assets/imgs/products/hydrex.png";
// import hypersperse from "../assets/imgs/products/hypersperse.png";
// import sulphuricAcid from "../assets/imgs/products/sulphuric-acid.png";
// import flocon from "../assets/imgs/products/flocon.png";
import blueGallon from "../assets/imgs/products/blue-gallon.png";
import hth from "../assets/imgs/products/hth.png";
import aquafit from "../assets/imgs/products/aquafit.png";
import sodiumHdroxide from "../assets/imgs/products/sodium-hydroxide.png";
import bitterSalz from "../assets/imgs/products/bitter-salz.png";
import natriumpyrosulfit from "../assets/imgs/products/natriumpyrosulfit.png";
import birlasulfSm from "../assets/imgs/products/birlasulf-sm.png";
import waterSoftener from "../assets/imgs/products/water-softener.png";
import tetra from "../assets/imgs/products/tetra.png";
import sodioMeta from "../assets/imgs/products/sodio-meta.png";
import trichloAcid from "../assets/imgs/products/trichlo-acid.png";
import csHac from "../assets/imgs/products/cs-hac.png";
import blackGallon from "../assets/imgs/products/black-gallon.png";
import yellowGallon from "../assets/imgs/products/yellow-gallon.png";

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
  FC53,
  FC55,
  FC54,
  FC57,
  FH8,
  FH18,
  FH39,
  FH35,
  tanks,
  { img: brineTank, link: info.products.brine },
  { img: venture, link: info.products.venture },
  { img: lzt, link: info.products.lzt },
  { img: flowmeter, link: info.products.tubes },
  dfd25,
  pg26,
  pg4100,
  upvc9,
  upvc5,
  upvcBag,
  upvc5xl,
  dt01,
  d05,
  btSuper,
  zenClear,
  blueGallon,
  blueGallon,
  blackGallon,
  yellowGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  blueGallon,
  aquafit,
  hth,
  blueGallon,
  sodiumHdroxide,
  bitterSalz,
  natriumpyrosulfit,
  birlasulfSm,
  waterSoftener,
  tetra,
  sodioMeta,
  trichloAcid,
  csHac,
];

const getProductsArr = (
  categoriesArr: Category[],
  imgs: (string | { img: string; link: string })[]
) => {
  let totalIndex = 0;
  return Array.from({ length: categoriesArr.length }, (_, i) => {
    return categoriesArr[i].items.map((item) => {
      const imgRef = imgs[totalIndex];
      totalIndex++;
      return {
        img: typeof imgRef === "string" ? imgRef : imgRef.img,
        link: typeof imgRef === "string" ? undefined : imgRef.link,
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
          bg-cover
          h-[100vh]
          justify-center`}
      >
        <a
          href={info.products.catalog}
          target="_blank"
          rel="noopener noreferrer"
          className="m-auto"
        >
          <ButtonStyled
            title={t("download")}
            border
            hover
            bg
            SvgIcon={<IoMdCloudDownload size={40} />}
            className="rounded-md mt-2"
            IconRight
          />
        </a>
      </PageHero>

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
