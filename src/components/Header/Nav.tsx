import { appRoutes } from "../../config";
import ButtonStyled from "../shared/ButtonStyled";
import { changeLanguage } from "i18next";
import { MdMenuOpen } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { trim } from "../../utils/functions/general";
import Drawer from "./Drawer";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import DrawerContext from "../../context/drawer.context";
import Logo from "../shared/Logo";
import useActivation from "../../hooks/useActivation";

const Nav = () => {
  const { t, i18n } = useTranslation("header");
  const { pathname } = useLocation();
  const { setOpenDrawer } = useContext(DrawerContext);

  const navArr = [
    { name: t("nav.home"), link: appRoutes.home },
    { name: t("nav.about"), link: appRoutes.about },
    { name: t("nav.impact"), link: appRoutes.impact },
    { name: t("nav.solutions"), link: appRoutes.solutions },
    { name: t("nav.partners"), link: appRoutes.partners },
    { name: t("nav.contact"), link: appRoutes.contact },
  ];

  const { activationArr } = useActivation(navArr.length, 300);

  return (
    <nav
      className={trim(`
        flex
        items-center
        justify-between
        lg:justify-evenly
        gap-3
        py-5
        px-5
        w-full
        md:px-[3%]
        lg:px-[10%]
        xl:px-[15%]`)}
    >
      {navArr.slice(0, 3).map(({ name, link }, i) => (
        <ButtonStyled
          key={i}
          className={trim(`
            !text-primary
            hidden
            md:inline-flex
            font-medium
            ${
              pathname === link
                ? `underline underline-offset-4
                 decoration-secondary decoration-4`
                : ""
            }
            ${activationArr[i].active ? `opacity-100` : `opacity-0`}`)}
          title={name}
          size="custom"
          animatedUnderline={pathname !== link}
        />
      ))}

      <Logo />

      {navArr.slice(3).map(({ name, link }, i) => (
        <ButtonStyled
          key={i}
          className={trim(`
            !text-primary
            hidden
            md:inline-flex
            font-medium
            ${
              pathname === link
                ? `underline underline-offset-4
                 decoration-secondary decoration-4`
                : ""
            }
            ${activationArr[i + 3].active ? `opacity-100` : `opacity-0`}`)}
          size="custom"
          title={name}
          animatedUnderline={pathname !== link}
        />
      ))}

      <ButtonStyled
        className={trim(`
          !text-primary 
          hidden 
          md:inline-flex 
          text-responsive-2xs 
          hover:!text-secondary
          animate-appear`)}
        size="custom"
        title={t("nav.lang")}
        onClick={() => {
          changeLanguage(i18n.language === "en" ? "ar" : "en");
        }}
      />

      <ButtonStyled
        className={`${i18n.language === "ar" ? "-scale-x-100" : ""} md:hidden`}
        size="custom"
        onClick={() => setOpenDrawer((prev) => !prev)}
        SvgIcon={<MdMenuOpen className="" color="#334d9d" size={30} />}
      />

      <Drawer
        activePath={pathname}
        lang={i18n.language}
        navArr={navArr}
        ChangeLanguageBtn={
          <ButtonStyled
            className={trim(`
              !text-primary 
              text-responsive-2xs 
              hover:!text-secondary`)}
            size="custom"
            title={t("nav.lang")}
            onClick={() => {
              changeLanguage(i18n.language === "en" ? "ar" : "en");
              setOpenDrawer(() => false);
            }}
          />
        }
      />
    </nav>
  );
};

export default Nav;