import { ReactNode } from "react";
import SectionContainer from "./containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import { useTranslation } from "react-i18next";
import ButtonStyled from "./ButtonStyled";
import useScrollInToView from "../../hooks/useScrollInToView";
import useContactNav from "../../hooks/useContactNav";

const Banner = ({
  children,
  className,
  contact,
}: {
  children?: ReactNode;
  className?: string;
  contact?: boolean;
}) => {
  const { t } = useTranslation(["common"]);
  const { targetRef, isInView } = useScrollInToView();
  const goToContact = useContactNav();

  return (
    <SectionContainer
      className={`
        min-h-[200px]
        bg-cover
        bg-no-repeat
        bg-center
        ${contact ? "bg-drops-pattern" : ""}
        ${className}`}
      wraperClassName="h-full"
    >
      {contact && (
        <div
          ref={targetRef}
          className={trim(`
            flex
            flex-col
            md:flex-row
            md:justify-between
            justify-center
            items-center
            gap-6
            md:px-10
            h-full
            transition-[opacity]
            duration-500
            ease-in-out
            ${isInView ? "opacity-100" : "opacity-0"}`)}
        >
          <h2 className="text-primary text-responsive-subCover font-semibold">
            {t(`purify`)}
          </h2>
          <ButtonStyled
            size="lg"
            bg
            ripple
            hover
            title={t(`contactUs`)}
            onClick={goToContact}
          />
        </div>
      )}
      {children}
    </SectionContainer>
  );
};

export default Banner;
