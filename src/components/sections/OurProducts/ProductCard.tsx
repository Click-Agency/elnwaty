import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/functions/general";
import ButtonStyled from "../../shared/ButtonStyled";

const ProductCard = ({
  className = "",
  img,
  description,
  btn,
  parentInToView,
}: {
  className?: string;
  img: string;
  description: string;
  btn: {
    text: string;
    onClickHandler: () => void;
  };
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
        max-w-[350px]
        transition-opacity
        duration-500
        ease-in-out
        ${isInView && parentInToView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    >
      <img src={img} alt="product" />

      <p
        className={trim(`
          text-responsive-2md
          text-primary
          font-medium
          text-center`)}
      >
        {description}
      </p>

      <ButtonStyled
        ripple
        className="mt-auto"
        bg
        hover
        title={btn.text}
        onClick={btn.onClickHandler}
      />
    </div>
  );
};

export default ProductCard;
