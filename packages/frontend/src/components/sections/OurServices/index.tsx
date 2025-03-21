import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import { trim } from "../../../utils/functions/general";
import ServiceCard from "./ServiceCard";
import service1 from "../../../assets/imgs/service-1.png";
import service2 from "../../../assets/imgs/service-2.png";
import service3 from "../../../assets/imgs/service-3.png";
import service4 from "../../../assets/imgs/service-4.png";
import SectionHeader from "../../shared/SectionHeader";
import useActivation from "../../../hooks/useActivation";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { appRoutes } from "../../../config";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const { t } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();
  //const goToContact = useContactNav();

  const servicesArr = [
    {
      img: service1,
      description: t("ourServices.items.descriptionOne"),
      btn: {
        title: t("contactUs", { ns: "common" }),
        onClickHandler: () => push(appRoutes.contact),
      },
    },
    {
      img: service2,
      description: t("ourServices.items.descriptionTwo"),
      btn: {
        title: t("contactUs", { ns: "common" }),
        onClickHandler: () => push(appRoutes.contact),
      },
    },
    {
      img: service3,
      description: t("ourServices.items.descriptionThree"),
      btn: {
        title: t("contactUs", { ns: "common" }),
        onClickHandler: () => push(appRoutes.contact),
      },
    },
    {
      img: service4,
      description: t("ourServices.items.descriptionFour"),
      btn: {
        title: t("contactUs", { ns: "common" }),
        onClickHandler: () => push(appRoutes.contact),
      },
    },
  ];

  const { activationArr } = useActivation(servicesArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer
      ref={targetRef}
      className="bg-water-pattern bg-cover py-20"
      wraperClassName="items-center text-center gap-2"
    >
      <SectionHeader title={t("ourServices.title")} className="text-white" />

      <h3
        className={trim(`
          max-w-[50rem]
          text-white
          text-responsive-2md
          transition-[transform, opacity]
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-1/2"}`)}
      >
        {t("ourServices.description")}
      </h3>

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
        {servicesArr.map((service, i) => (
          <ServiceCard
            key={i}
            {...service}
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurServices;
