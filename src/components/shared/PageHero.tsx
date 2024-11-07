import { useTranslation } from "react-i18next";
import SectionContainer from "./containers/SectionContainer";
import SectionHeader from "./SectionHeader";
import { trim } from "../../utils/functions/general";
import useScrollInToView from "../../hooks/useScrollInToView";
import { ReactNode } from "react";

const AboutHero = ({
  className = "",
  jsonTransFiles,
  children,
}: {
  children?: ReactNode;
  className?: string;
  jsonTransFiles: string[];
}) => {
  const { t } = useTranslation(jsonTransFiles);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer ref={targetRef} className={trim(className)}>
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
      {children}
    </SectionContainer>
  );
};

export default AboutHero;
