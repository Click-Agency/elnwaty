import { useTranslation } from "react-i18next";
import SectionContainer from "../shared/containers/SectionContainer";
import filterChangeImg from "../../assets/imgs/filter-change.png";
import { trim } from "../../utils/functions/general";
import ButtonStyled from "../shared/ButtonStyled";
import useScrollInToView from "../../hooks/useScrollInToView";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../config";

const WelcomeBanner = () => {
  const { t } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();
  //const goToContact = useContactNav();

  return (
    <SectionContainer
      ref={targetRef}
      wraperClassName="md:flex-row items-center gap-14"
    >
      <div
        className={trim(`
          group 
          max-w-[38rem] 
          overflow-hidden 
          rounded-xl 
          shadow-2xl
          transition-[opacity]
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        <img
          className={trim(`
            group-hover:scale-[1.1] 
            transition-transform 
            duration-300 
            object-cover`)}
          src={filterChangeImg}
          alt="welcome-img"
        />
      </div>

      <div className="flex flex-col">
        <h3
          className={trim(`
            text-responsive-2lg 
            text-body-primary
            transition-[transform, opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
        >
          {t("welcome.title")}
        </h3>

        <h2
          className={trim(`
            text-responsive-xl 
            font-semibold
            text-primary
            transition-[transform, opacity]
            duration-300
            delay-300
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}
            ${isInView ? "translate-y-0" : "translate-y-1/4"}`)}
        >
          {t("coName", { ns: "common" })}
        </h2>
        <p
          className={trim(`
            text-responsive-2md
            text-body-primary 
            max-w-[30rem]
            transition-[opacity]
            duration-300
            delay-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}`)}
        >
          {t("welcome.description")}
        </p>

        <ButtonStyled
          ripple
          className={`
            md:self-start 
            mt-5 
            text-responsive-2sm
            ${isInView ? "opacity-100" : "opacity-0"}`}
          hover
          title={t("contactUs", { ns: "common" })}
          bg
          onClick={() => push(appRoutes.contact)}
        />
      </div>
    </SectionContainer>
  );
};

export default WelcomeBanner;
