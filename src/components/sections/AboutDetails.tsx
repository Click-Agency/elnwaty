import { trim } from "../../utils/functions/general";
import ButtonStyled from "../shared/ButtonStyled";
import SectionContainer from "../shared/containers/SectionContainer";
import tankImg from "../../assets/imgs/tank.png";
import { useTranslation } from "react-i18next";
import useScrollInToView from "../../hooks/useScrollInToView";
import useContactNav from "../../hooks/useContactNav";

export const AboutDetails = () => {
  const { t } = useTranslation(["about", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const goToContact = useContactNav();

  return (
    <SectionContainer
      ref={targetRef}
      className="bg-gray-100"
      wraperClassName="lg:flex-row flex-col-reverse items-center py-7"
    >
      <div
        className={trim(`
          flex 
          flex-col
          gap-3
          flex-1
          text-primary
          lg:min-w-[500px]
          transition-[opacity,transform]
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-10"}`)}
      >
        <h3 className="text-responsive-xl font-semibold">
          {t(`coName`, { ns: "common" })}
        </h3>

        <p className="text-responsive-2md">{t(`description`)}</p>

        <ButtonStyled
          className="md:self-start"
          hover
          bg
          ripple
          size="lg"
          title={t(`contactUs`, { ns: "common" })}
          onClick={goToContact}
        />
      </div>

      <img
        className={trim(`
          block
          w-full
          flex-1
          max-w-2xl
          transition-opacity
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}`)}
        src={tankImg}
        alt="tank-img"
      />
    </SectionContainer>
  );
};
