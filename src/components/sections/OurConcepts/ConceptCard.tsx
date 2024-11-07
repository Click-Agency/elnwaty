import useScrollInToView from "../../../hooks/useScrollInToView";
import { trim } from "../../../utils/functions/general";

const ConceptCard = ({
  title,
  description,
  items,
  img,
  parentIntoView,
  className,
}: {
  title: string;
  description?: string;
  items?: string[];
  img: string;
  parentIntoView?: boolean;
  className?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <div
      ref={targetRef}
      className={trim(`
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        md:gap-10
        gap-4
        ${className}`)}
    >
      <div
        className={trim(`
          flex 
          flex-col 
          gap-2
          text-primary
          flex-1
          transition-[opacity,transform]
          duration-500
          ease-in-out
          ${isInView && parentIntoView ? "opacity-100" : "opacity-0"}
          ${isInView && parentIntoView ? "translate-y-0" : "translate-y-10"}`)}
      >
        <h3 className="text-responsive-xl font-semibold">{title}</h3>

        {description && <p className="text-responsive-lg">{description}</p>}

        {items && (
          <ul className="flex flex-col gap-4">
            {items.map((item, index) => (
              <li className="text-responsive-lg" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <img
        className={trim(`
          flex-1 
          md:max-w-[50%]
          transition-opacity
          duration-500
          ease-in-out
          ${isInView && parentIntoView ? "opacity-100" : "opacity-0"}`)}
        src={img}
        alt={`${title}-img`}
      />
    </div>
  );
};

export default ConceptCard;
