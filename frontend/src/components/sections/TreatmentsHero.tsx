import SectionContainer from "../shared/containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import SectionHeader from "../shared/SectionHeader";
import { useTranslation } from "react-i18next";
import useScrollInToView from "../../hooks/useScrollInToView";

const SystemsHero = () => {
  const { t } = useTranslation(["treatments"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={trim(`
        bg-cover
        relative
        h-[90vh]`)}
      wraperClassName="h-full pt-52 items-center gap-2 text-center"
    >
      <div className="bg-factory-pattern bg-cover absolute z-[1] top-0 right-0 w-full h-full mask-hero-top"></div>

      <SectionHeader
        title={t("title")}
        className={trim(`
          !text-responsive-subCover
          transition-[transform, opacity]
          duration-500
          ease-in-out
          z-[1]
          text-shadow-lg
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
      />

      <p
        className={trim(`
          text-primary 
          text-responsive-sm
          transition-opacity
          duration-500
          ease-in-out
          delay-500
          z-[1]
          text-shadow-md
          font-medium
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {t("description")}
      </p>
    </SectionContainer>
  );
};

export default SystemsHero;
