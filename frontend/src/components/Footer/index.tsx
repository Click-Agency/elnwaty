import { useTranslation } from "react-i18next";
import { trim } from "../../utils/functions/general";
import Logo from "../shared/Logo";
import ButtonStyled from "../shared/ButtonStyled";
import { appRoutes, info } from "../../config";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollInToView from "../../hooks/useScrollInToView";
import footerImg from "/assets/imgs/bg-wave.png";

const Footer = () => {
  const { t } = useTranslation(["footer", "header", "common"]);
  const push = useNavigate();
  const { pathname } = useLocation();

  const { targetRef, isInView } = useScrollInToView();

  const columns = [
    {
      title: t("columns.titleOne"),
      links: [
        { name: t("nav.home", { ns: "header" }), link: appRoutes.home },
        { name: t("nav.about", { ns: "header" }), link: appRoutes.about },
        { name: t("nav.products", { ns: "header" }), link: appRoutes.products },
        { name: t("nav.blogs", { ns: "header" }), link: appRoutes.blogs },
        {
          name: t("nav.treatments", { ns: "header" }),
          link: appRoutes.treatments,
        },
        {
          name: t("nav.contact", { ns: "header" }),
          link: appRoutes.contact,
        },
      ],
    },
    {
      title: t("columns.titleTwo"),
      links: [
        { icon: <FaFacebookF size={30} />, link: info.facebook },
        { icon: <FaWhatsapp size={30} />, link: info.whatsapp },
        { icon: <FaInstagram size={30} />, link: info.instagram },
      ],
    },
  ];

  const onClickHandler = (link: string) => {
    if (pathname !== link) push(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex flex-col pb-2 relative overflow-hidden">
      <img
        className="absolute block top-0 left-0 w-full h-full min-w-[1980px] z-[-1]"
        src={footerImg}
        alt="footer-img"
      />
      <div
        className={trim(`
          flex
          items-end
          pt-28
          md:pt-20
          pb-6
          md:pb-10
          min-h-[37rem]
          md:min-h-[32rem]`)}
      >
        <div
          ref={targetRef}
          className={trim(`
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          md:items-end
          w-full
          2xl:w-[70%]
          xl:w-[90%]
          lg:container
          gap-10
          containerPadding`)}
        >
          <div
            className={trim(`
            flex 
            flex-col 
            items-center 
            gap-5 
            flex-1
            transition-opacity
            ease-in-out
            duration-300
            ${isInView ? "opacity-100" : "opacity-0"}`)}
          >
            <Logo className="w-60 md:w-72" />
            <p className="text-gray-200">{t("signature")}</p>
          </div>
          {columns.map(({ title, links }, i) => (
            <div
              key={i}
              className={trim(`
              flex 
              flex-col 
              gap-3
              items-center
              flex-1
              transition-opacity
              ease-in-out
              duration-300
              ${isInView ? "opacity-100" : "opacity-0"}`)}
            >
              <h3 className="text-responsive-sm font-medium text-gray-200">
                {title}
              </h3>

              <ul
                className={trim(`
                flex 
                flex-wrap 
                justify-center 
                gap-3 
                md:grid
                md:grid-cols-2 
                lg:grid-cols-3
                md:justify-items-center`)}
              >
                {links.map((link, i) => (
                  <li key={i}>
                    <ButtonStyled
                      onClick={() => onClickHandler(link.link)}
                      size="custom"
                      title={"name" in link ? link.name : undefined}
                      className={`
                      justify-start
                      !text-gray-200
                      hover:!text-primary
                      ${
                        "icon" in link
                          ? `
                        p-2
                        rounded-xl
                        border
                        border-gray-500
                        bg-zinc-300/10`
                          : ""
                      }`}
                      SvgIcon={"icon" in link ? link.icon : undefined}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <small
        className={trim(`
          text-white 
          text-center 
          text-responsive-xs 
          font-medium`)}
      >
        &copy; {new Date().getFullYear()} {t("copyRights")}{" "}
        {t("coName", { ns: "common" })}
      </small>
    </footer>
  );
};

export default Footer;
