import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/functions/general";

const ClientCard = ({
  imgSrc,
  className = "",
}: {
  imgSrc: string;
  className?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <img
      ref={targetRef}
      src={imgSrc}
      alt="client"
      className={trim(`
        w-auto
        max-w-40
        transition-opacity
        duration-500
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    />
  );
};

export default ClientCard;
