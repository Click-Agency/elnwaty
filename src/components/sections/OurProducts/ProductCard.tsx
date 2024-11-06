import { trim } from "../../../utils/functions/general";
import ButtonStyled from "../../shared/ButtonStyled";

const ProductCard = ({
  className = "",
  img,
  description,
  btn,
}: {
  className?: string;
  img: string;
  description: string;
  btn: {
    text: string;
    onClickHandler: () => void;
  };
}) => {
  return (
    <div
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
