import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/functions/general";

const TreatmentCard = ({
  className = "",
  img,
  title,

  parentInToView,
}: {
  className?: string;
  img: string;
  title: string;

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
        justify-start
        bg-mask-cyan-pattern
        bg-cover
        gap-5
        p-6
        shadow-lg
        rounded-3xl
        w-full
        max-w-[350px]
        transition-opacity
        duration-500
        ease-in-out
        ${isInView && parentInToView ? "opacity-100" : "opacity-0"}
        ${className}`)}
    >
      <img src={img} alt="product" className="w-full max-w-28" />

      <h3
        className={trim(`
          text-responsive-2md
          text-primary
          font-bold
          text-center
          md:min-w-[150px]`)}
      >
        {title}
      </h3>
    </div>
  );
};

export default TreatmentCard;
