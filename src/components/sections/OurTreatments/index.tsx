import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import roSystem from "../../../assets/imgs/ro-system.png";
import filterSystem from "../../../assets/imgs/filter-system.png";
import containerSystem from "../../../assets/imgs/container-system.png";
import uvSystem from "../../../assets/imgs/uv-system.png";
import useActivation from "../../../hooks/useActivation";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import { trim } from "../../../utils/functions/general";
import TreatmentCard from "./TreatmentCard";
import { SystemArr } from "../../../types/general";
import ButtonStyled from "../../shared/ButtonStyled";
import useContactNav from "../../../hooks/useContactNav";

const OurTreatments = () => {
  const { t } = useTranslation(["treatments", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const goToContact = useContactNav();

  const imgsArr = [roSystem, filterSystem, containerSystem, uvSystem];

  const systemsArr: SystemArr = Object.values(
    t("ourTreatments.items", { returnObjects: true })
  ).map((item, i) => ({
    title: item.title,
    img: imgsArr[i],
    steps: item.steps,
  }));

  const { activationArr } = useActivation(systemsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef}>
      <SectionHeader title={t("ourTreatments.title")} />

      <div
        className={trim(`
          flex
          flex-wrap
          gap-5
          items-center
          justify-center
          mt-7`)}
      >
        {systemsArr.map((system, i) => (
          <TreatmentCard
            key={i}
            {...system}
            className="min-h-64"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>

      <ButtonStyled
        hover
        bg
        title={t("shopNow", { ns: "common" })}
        className="mt-7 md:mx-auto"
        onClick={goToContact}
      />
    </SectionContainer>
  );
};

export default OurTreatments;
