import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/functions/general";

const ProductCard = ({
  className = "",
  img,
  description,
  parentInToView,
}: {
  className?: string;
  img: string;
  description: string;
  parentInToView: boolean;
}) => {
  const { targetRef, isInView } = useScrollInToView();
  return (
    <div
      ref={targetRef}
      className={trim(`
        flex
        flex-col
        items-center
        justify-center
        gap-5
        p-8
        border-2
        shadow-lg
        rounded-xl
        w-full
        max-w-[350px]
        transition-opacity
        duration-500
        ease-in-out
        ${isInView && parentInToView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    >
      <img src={img} alt="product" className=" max-h-[150px]" />

      <p
        className={trim(`
          text-responsive-2md
          text-primary
          font-medium
          text-center`)}
      >
        {description}
      </p>
    </div>
  );
};

export default ProductCard;
