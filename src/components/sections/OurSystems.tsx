import { useTranslation } from "react-i18next";
import SectionContainer from "../shared/containers/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import ItemCard from "../shared/ItemCard";
import { trim } from "../../utils/functions/general";
import useScrollInToView from "../../hooks/useScrollInToView";
import useActivation from "../../hooks/useActivation";
import roSystem from "../../assets/imgs/ro-system.png";
import filterSystem from "../../assets/imgs/filter-system.png";
import containerSystem from "../../assets/imgs/container-system.png";
import uvSystem from "../../assets/imgs/uv-system.png";

const OurSystems = ({ showTitle }: { showTitle?: boolean }) => {
  const { t } = useTranslation(["systems"]);
  const { targetRef, isInView } = useScrollInToView();

  const systemsArr = [
    {
      img: roSystem,
      description: t("ourSystems.items.titleOne"),
    },
    {
      img: filterSystem,
      description: t("ourSystems.items.titleTwo"),
    },
    {
      img: containerSystem,
      description: t("ourSystems.items.titleThree"),
    },
    {
      img: uvSystem,
      description: t("ourSystems.items.titleFour"),
    },
  ];

  const { activationArr } = useActivation(systemsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef}>
      {showTitle && <SectionHeader title={t("ourSystems.title")} />}

      <div
        className={trim(`
          flex
          flex-wrap
          lg:flex-nowrap
          gap-5
          justify-center
          items-center
          mt-7`)}
      >
        {systemsArr.map((system, i) => (
          <ItemCard
            key={i}
            {...system}
            className="min-h-64"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurSystems;
