import { trim } from "../../../utils/functions/general";
import doubleQuotation from "../../../assets/imgs/double-quotation.png";

const TestimonialCard = ({
  className = "",
  img,
  name,
  feedback,
}: {
  img: string;
  name: string;
  feedback: string;
  className?: string;
}) => {
  return (
    <div
      className={trim(`
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-4
        border
        shadow-lg
        max-w-[20rem]
        bg-white
        rounded-xl
        p-10
        ${className}`)}
    >
      <img src={img} alt={name} className="w-24 h-24 rounded-full" />

      <h3 className="text-responsive-2sm font-semibold text-primary">{name}</h3>

      <div
        className={trim(`
          flex
          flex-col
          gap-1
          text-start
          justify-center
          items-center`)}
      >
        <img
          src={doubleQuotation}
          alt="dobule-quotaion"
          className="w-12 self-start"
        />

        <p className="text-responsive-2xs text-body-primary">{feedback}</p>

        <img
          src={doubleQuotation}
          alt="dobule-quotaion"
          className="w-12 self-end"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
