import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import compeleteFilter from "../../../assets/imgs/complete-filter.png";
import ProductCard from "./ProductCard";
import { trim } from "../../../utils/functions/general";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";

const OurProducts = () => {
  const { t } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  const products = [
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionOne"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionTwo"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionThree"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionFour"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionFive"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
    {
      img: compeleteFilter,
      description: t("ourProducts.items.descriptionSix"),
      btn: {
        text: t("shopNow", { ns: "common" }),
        onClickHandler: () => {},
      },
    },
  ];

  const { activationArr } = useActivation(products.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef}>
      <SectionHeader title={t("ourProducts.title")} />

      <div
        className={trim(`
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-5 
          md:gap-10 
          justify-items-center
          mt-7`)}
      >
        {products.map((product, i) => (
          <ProductCard
            key={i}
            {...product}
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurProducts;