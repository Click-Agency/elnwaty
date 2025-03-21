import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import { trim } from "../../../utils/functions/general";
import AchievementCard from "./AchievementCard";
import leaderIcon from "../../../assets/imgs/leader-icon.png";
import gearIcon from "../../../assets/imgs/gear-icon.png";
import earthIcon from "../../../assets/imgs/earth-icon.png";
import gearTrueIcon from "../../../assets/imgs/gear-true-icon.png";
import SectionHeader from "../../shared/SectionHeader";
import useActivation from "../../../hooks/useActivation";
import useScrollInToView from "../../../hooks/useScrollInToView";

const WhyOurTreatment = () => {
  const { t } = useTranslation(["treatments", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  const treatmentsArr = [
    {
      img: leaderIcon,
      title: t("whyOurTreatment.items.itemOne"),
    },
    {
      img: gearIcon,
      title: t("whyOurTreatment.items.itemTwo"),
    },
    {
      img: earthIcon,
      title: t("whyOurTreatment.items.itemThree"),
    },
    {
      img: gearTrueIcon,
      title: t("whyOurTreatment.items.itemFour"),
    },
  ];

  const { activationArr } = useActivation(treatmentsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer
      ref={targetRef}
      className="bg-[#e2e7f7] bg-cover py-12"
      wraperClassName="items-center text-center"
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
          <AchievementCard
            key={i}
            {...service}
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default WhyOurTreatment;
