import { useTranslation } from "react-i18next";
import SectionContainer from "../shared/containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import ButtonStyled from "../shared/ButtonStyled";
import useScrollInToView from "../../hooks/useScrollInToView";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../config";

const HomeHero = () => {
  const { t, i18n } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();

  return (
    <SectionContainer
      ref={targetRef}
      className={`
        bg-hero-pattern 
        bg-auto
        bg-no-repeat
        md:bg-top 
        bg-center
        h-screen
        justify-center`}
      wraperClassName={`${i18n.language === "en" ? "md:items-end" : ""}`}
    >
      <div
        className={trim(`
          flex 
          flex-col 
          md:items-stretch
          items-center 
          md:gap-4 
          text-center 
          md:text-justify`)}
      >
        <h1
          className={trim(`
            text-responsive-cover
            font-semibold
            text-primary
            transition-[transform, opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
        >
          {t("hero.title")}
        </h1>
        <div
          className={trim(`
            pl-5 
            md:leading-[3.8rem]
            mb-4 
            transition-[opacity]
            duration-500
            ease-in-out
            delay-300
            ${isInView ? "opacity-100" : "opacity-0"}
            ${i18n.language === "ar" ? "md:max-w-[70%]" : ""}`)}
        >
          <h3
            className={trim(`
              text-responsive-subCover 
              text-primary
              font-light`)}
          >
            {t("hero.subtitle")}
          </h3>
          <h3
            className={trim(`
              text-responsive-subCover 
              text-primary
              font-bold`)}
          >
            {t("coName", { ns: "common" })}
          </h3>
        </div>

        <ButtonStyled
          border
          bg
          hover
          ripple
          className={trim(`
            px-9
            py-2
            md:self-start
            text-responsive-lg
            border-2
            ${isInView ? "opacity-100" : "opacity-0"}`)}
          size="custom"
          title={t("contactUs", { ns: "common" })}
          onClick={() => push(appRoutes.contact)}
        />
      </div>
    </SectionContainer>
  );
};

export default HomeHero;
