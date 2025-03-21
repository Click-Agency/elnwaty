import { useTranslation } from "react-i18next";
import SectionContainer from "../shared/containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import useActivation from "../../hooks/useActivation";
import useScrollInToView from "../../hooks/useScrollInToView";
import { AchievementsArr } from "../../types/general";

const Achievements = () => {
  const { t } = useTranslation(["home"]);
  const { targetRef, isInView } = useScrollInToView();

  const achievementsArr: AchievementsArr = Object.values(
    t("achievements.items", { returnObjects: true })
  ).map((item) => ({
    title: item.title,
    number: item.number,
  }));

  const { activationArr } = useActivation(achievementsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer className="bg-gray-100" wraperClassName="py-5">
      <ul
        ref={targetRef}
        className={trim(`
         flex
         flex-wrap
         justify-around
         text-center
         items-center
         gap-5
         p-2`)}
      >
        {achievementsArr.map(({ number, title }, i) => (
          <li
            key={i}
            className={trim(`
              flex
              flex-col
              items-center
              justify-center
              p-4
              transition-opacity
              duration-500
              ease-in-out
              ${activationArr[i].active ? "opacity-100" : "opacity-0"}`)}
          >
            <h3 className="text-responsive-subCover font-bold text-primary">
              {number}
            </h3>
            <h6 className="text-responsive-lg font-bold text-body-primary">
              {title}
            </h6>
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
};

export default Achievements;
