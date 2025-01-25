import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import { trim } from "../../../utils/functions/general";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import ProductCard from "./productCard";

const OurProducts = ({
  productsArr,
  title,
}: {
  productsArr: { img: string; description: string; link?: string }[];
  title?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  const { activationArr } = useActivation(productsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef}>
      {title && <SectionHeader title={title} />}

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
        {productsArr.map((product, i) => (
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
