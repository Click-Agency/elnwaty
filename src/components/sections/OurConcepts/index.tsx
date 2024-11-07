import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import kidDrinking from "../../../assets/imgs/kid-drinking.png";
import testChemicals from "../../../assets/imgs/test-chemicals.png";
import factoryFilters from "../../../assets/imgs/factory-filters.png";
import ConceptCard from "./ConceptCard";
import useActivation from "../../../hooks/useActivation";
import useScrollInToView from "../../../hooks/useScrollInToView";

const OurConcepts = () => {
  const { t } = useTranslation(["about"]);
  const { targetRef, isInView } = useScrollInToView();

  const conceptsArr = [
    {
      title: t("ourConcepts.mission.title"),
      description: t("ourConcepts.mission.description"),
      img: kidDrinking,
    },
    {
      title: t("ourConcepts.vision.title"),
      description: t("ourConcepts.vision.description"),
      img: factoryFilters,
    },
    {
      title: t("ourConcepts.goals.title"),
      items: [
        t("ourConcepts.goals.items.goalOne"),
        t("ourConcepts.goals.items.goalTwo"),
        t("ourConcepts.goals.items.goalThree"),
      ],
      img: testChemicals,
    },
  ];

  const { activationArr } = useActivation(conceptsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef} wraperClassName="gap-6 md:gap-0">
      {conceptsArr.map((concept, i) => (
        <ConceptCard
          className={`${i % 2 !== 0 ? "md:!flex-row-reverse" : ""}`}
          key={i}
          parentIntoView={activationArr[i].active}
          {...concept}
        />
      ))}
    </SectionContainer>
  );
};

export default OurConcepts;
