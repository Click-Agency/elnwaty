import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import { trim } from "../../../utils/functions/general";
import TreatmentCard from "./TreatmentCard";
import leaderIcon from "../../../assets/imgs/leader-icon.png";
import gearIcon from "../../../assets/imgs/gear-icon.png";
import earthIcon from "../../../assets/imgs/earth-icon.png";
import gearTrueIcon from "../../../assets/imgs/gear-true-icon.png";
import SectionHeader from "../../shared/SectionHeader";
import useActivation from "../../../hooks/useActivation";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useContactNav from "../../../hooks/useContactNav";
import ButtonStyled from "../../shared/ButtonStyled";

const WhyOurTreatment = () => {
  const { t } = useTranslation(["systems", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const goToContact = useContactNav();

  const treatmentsArr = [
    {
      img: leaderIcon,
      title: t("whyOurTreatment.items.itemOne.title"),
      description: t("whyOurTreatment.items.itemOne.description"),
    },
    {
      img: gearIcon,
      title: t("whyOurTreatment.items.itemTwo.title"),
      description: t("whyOurTreatment.items.itemTwo.description"),
    },
    {
      img: earthIcon,
      title: t("whyOurTreatment.items.itemThree.title"),
      description: t("whyOurTreatment.items.itemThree.description"),
    },
    {
      img: gearTrueIcon,
      title: t("whyOurTreatment.items.itemFour.title"),
      description: t("whyOurTreatment.items.itemFour.description"),
    },
  ];

  const { activationArr } = useActivation(treatmentsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer
      ref={targetRef}
      className="bg-[#e2e7f7] bg-cover py-12"
      wraperClassName="items-center text-center gap-2"
    >
      <SectionHeader
        title={t("whyOurTreatment.title")}
        className="text-primary !font-bold max-w-3xl"
      />

      <div
        className={trim(`
          flex
          md:flex-row
          flex-col
          gap-5
          mt-16
          flex-wrap
          xl:flex-nowrap
          justify-center`)}
      >
        {treatmentsArr.map((service, i) => (
          <TreatmentCard
            key={i}
            {...service}
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
      <ButtonStyled
      className="mt-10"
        bg
        size="lg"
        hover
        onClick={goToContact}
        title={t("getOffer", { ns: "common" })}
      />
    </SectionContainer>
  );
};

export default WhyOurTreatment;
