import { trim } from "../../../utils/functions/general";
import doubleQuotation from "../../../assets/imgs/double-quotation.png";

const Background = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={trim(`
        absolute
        w-full
        top-0
        left-0
        h-3/4
        bg-gradient-cyan
        shadow-bottom
        -z-[2]
        ${className}`)}
    >
      <img
        src={doubleQuotation}
        alt="dobule-quotaion"
        className="absolute top-6 right-3/4 w-24 -z-[1]"
      />
    </div>
  );
};

export default Background;
