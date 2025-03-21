import useScrollInToView from "../../../hooks/useScrollInToView";
import { SystemArr } from "../../../types/general";
import { trim } from "../../../utils/functions/general";

const TreatmentCard = ({
  className = "",
  img,
  title,
  steps,
}: SystemArr[0] & {
  className?: string;
  parentInToView?: boolean;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <div
      ref={targetRef}
      className={trim(`
        flex
        flex-col
        items-center
        gap-5
        p-8
        border-2
        shadow-lg
        rounded-xl
        transition-[opacity,transform]
        duration-500
        md:max-w-[75%]
        ease-in-out
        ${isInView ? "opacity-100" : "opacity-0"}
        ${isInView ? "translate-y-0" : "translate-y-10"}
        ${className}`)}
    >
      <img src={img} alt="product" className="w-full max-w-[350px]" />

      <h3
        className={trim(`
          text-responsive-lg
          text-primary
          font-semibold`)}
      >
        {title}
      </h3>

      <ul
        className={trim(`
          flex
          flex-col
          gap-2
          text-responsive-2sm
          text-primary`)}
      >
        {steps.map(({ title, description }, i) => (
          <li className="flex gap-0.5 md:gap-2 md:flex-row flex-col" key={i}>
            <h6 className="text-nowrap font-medium text-responsive-2sm">
              {title}:
            </h6>
            <p className="text-responsive-xs">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TreatmentCard;
