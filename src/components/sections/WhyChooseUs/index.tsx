import SectionContainer from "../../shared/containers/SectionContainer";
import { useTranslation } from "react-i18next";
import SectionHeader from "../../shared/SectionHeader";
import SwipeCard from "./SwipeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useScrollInToView from "../../../hooks/useScrollInToView";

const WhyChooseUs = () => {
  const { t } = useTranslation(["home"]);
  const { targetRef, isInView } = useScrollInToView();

  const cardsArr = [
    {
      bgImgClassName: "bg-mask-chemical-pattern",
      description: t("whyChooseUs.items.descriptionOne"),
    },
    {
      bgImgClassName: "bg-mask-factory-pattern",
      description: t("whyChooseUs.items.descriptionTwo"),
    },
    {
      bgImgClassName: "bg-mask-maintenance-pattern",
      description: t("whyChooseUs.items.descriptionThree"),
    },
  ];

  return (
    <SectionContainer
      className="bg-moving-wave-pattern bg-cover bg-center"
      wraperClassName="items-center gap-20 py-20 overflow-hidden"
    >
      <SectionHeader title={t("whyChooseUs.title")} />

      <Swiper
        ref={targetRef}
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        className={t(`
          w-full 
          rounded-2xl 
          shadow-xl
          transition-[opacity,transform]
          duration-500
          ease-in-out
          ${isInView ? "translate-y-0" : "translate-y-10"}
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {cardsArr.map((card, i) => (
          <SwiperSlide key={i}>
            <SwipeCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default WhyChooseUs;
