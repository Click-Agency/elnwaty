import { useTranslation } from "react-i18next";
import SectionContainer from "../shared/containers/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import { trim } from "../../utils/functions/general";
import useScrollInToView from "../../hooks/useScrollInToView";

const AboutHero = () => {
  const { t } = useTranslation(["about"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={trim(`
        bg-move-slim-pattern
        md:bg-contain
        bg-no-repeat 
        md:bg-bottom
        h-[70vh]
        justify-center`)}
    >
      <SectionHeader
        title={t("title")}
        className={trim(`
          !text-responsive-cover
          transition-[transform, opacity]
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
      />
    </SectionContainer>
  );
};

export default AboutHero;
