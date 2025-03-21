import { trim } from "../../../utils/functions/general";

const SwipeCard = ({
  bgImgClassName,
  className = "",
  description,
}: {
  description: string;
  bgImgClassName: string;
  className?: string;
}) => {
  return (
    <div
      className={trim(`
        flex
        items-center
        md:min-h-[500px]
        min-h-[300px]
        w-full
        p-14
        ${bgImgClassName}
        ${className}`)}
    >
      <p
        className={trim(`
          text-primary 
          text-responsive-lg
          max-w-[450px]`)}
      >
        {description}
      </p>
    </div>
  );
};

export default SwipeCard;
