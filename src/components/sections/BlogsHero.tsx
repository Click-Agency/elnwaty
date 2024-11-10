import SectionContainer from "../shared/containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import SectionHeader from "../shared/SectionHeader";
import { useTranslation } from "react-i18next";
import useScrollInToView from "../../hooks/useScrollInToView";

const BlogsHero = () => {
  const { t } = useTranslation(["blogs"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={trim(`
        bg-cover
        relative
        h-[90vh]`)}
      wraperClassName="h-full pt-52 items-center text-center"
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
      <div className="bg-factory-pattern bg-cover absolute z-[1] top-0 right-0 w-full h-full mask-hero-top"></div>
      <p
        className={trim(`
          text-primary 
          text-responsive-sm
          transition-opacity
          duration-500
          ease-in-out
          delay-500
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {t("description")}
      </p>
    </SectionContainer>
  );
};

export default BlogsHero;
