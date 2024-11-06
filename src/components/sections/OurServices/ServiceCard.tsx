import { useEffect, useRef } from "react";
import { trim } from "../../../utils/functions/general";
import ButtonStyled from "../../shared/ButtonStyled";

const ServiceCard = ({
  img,
  description,
  btn,
}: {
  img: string;
  description: string;
  btn: {
    title: string;
    onClickHandler: () => void;
  };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const maxWidthLg = 350;
  const minWidthLg = 250;

  const maxWidthSm = 500;
  const minWidthSm = 250;

  // a hook to handle the resizing of the card while its absolute
  useEffect(() => {
    if (!ref.current || !childRef.current) return;

    const reSizeHandler = () => {
      if (!ref.current || !childRef.current) return;

      const winWidth = window.innerWidth;

      const currhight = childRef.current.offsetHeight;

      if (winWidth > 768) {
        ref.current.style.height = `${currhight}px`;
        ref.current.style.width = `${Math.min(
          maxWidthLg,
          Math.max(
            minWidthLg,
            ((winWidth - 768) / (1920 - 768)) * (maxWidthLg - minWidthLg) +
              minWidthLg
          )
        )}px`;
      } else if (winWidth <= 768) {
        ref.current.style.height = `${currhight}px`;
        ref.current.style.width = `${Math.min(
          maxWidthSm,
          Math.max(
            minWidthSm,
            ((winWidth - 320) / (768 - 320)) * (maxWidthSm - minWidthSm) +
              minWidthSm
          )
        )}px`;
      } else {
        ref.current.style.height = `${currhight}px`;
        ref.current.style.width = `${maxWidthLg}px`;
      }
    };
    window.addEventListener("resize", reSizeHandler);
    reSizeHandler();

    return () => {
      window.removeEventListener("resize", reSizeHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={trim(`
        relative
        flex
        group`)}
    >
      <div
        ref={childRef}
        className={trim(`
          flex
          flex-col
          items-center
          text-white
          text-center
          gap-5
          py-7
          px-5
          bg-white/10
          absolute
          rounded-xl
          border-2
          border-white
          md:min-h-[27.5rem]
          justify-start
          transition-all
          duration-300
          ease-in-out
          after:contetn-[""]
          after:absolute
          after:-top-0.5
          after:left-[65%]
          after:w-4
          after:h-0.5
          after:bg-white
          after:hover:left-[30%]
          after:transition-all
          after:duration-200
          after:ease-in-out
          after:shadow-custom-glow`)}
      >
        <div className="overflow-hidden rounded-full max-w-[15rem]">
          <img
            src={img}
            alt="des-img"
            className="group-hover:scale-110 transition-all
          duration-300"
          />
        </div>
        <p className="text-responsive-2md max-w-96">{description}</p>

        <ButtonStyled
          title={btn.title}
          onClick={btn.onClickHandler}
          hover
          bg
          ripple
          size="sm"
          className={`
            mt-auto
            h-0
            opacity-0
            bottom-0
            group-hover:h-full
            group-hover:opacity-100
            transition-all
            duration-300
            ease-in-out`}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
