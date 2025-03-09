import { useTranslation } from "react-i18next";
import ButtonStyled from "./ButtonStyled";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { trim } from "../../utils/functions/general";
import { info } from "../../config";

const FloatingButtons = () => {
  const { i18n } = useTranslation();

  const btnsArr = [
    {
      icon: <FaPhoneAlt className="md:w-7 md:h-7 w-6 h-6" />,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-700",
      href: `tel:${info.phone}`,
    },
    {
      icon: <FaWhatsapp className="md:w-7 md:h-7 w-6 h-6" />,
      color: "bg-green-500",
      hoverColor: "hover:bg-green-700",
      href: info.whatsapp,
    },
  ];

  return (
    <div
      className={trim(`
        fixed
        bottom-4
        flex
        flex-col
        gap-4
        animate-appear
        z-[9]
        ${i18n.dir() === "ltr" ? " right-5" : " left-5"}`)}
    >
      {btnsArr.map(({ color, hoverColor, icon, href }, i) => (
        <ButtonStyled
          key={i}
          className={trim(`
            ${color}
            ${hoverColor}
            rounded-full
            shadow-md
            md:p-3
            p-2.5
            hover:scale-110
            active:scale-95`)}
          href={href}
          target={`${href.includes("tel") ? "_self" : "_blank"}`}
          SvgIcon={icon}
        />
      ))}
    </div>
  );
};

export default FloatingButtons;
