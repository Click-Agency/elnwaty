import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import Background from "./Background";
import testimonialsOne from "../../../assets/imgs/testimonials-1.png";
import testimonialsTwo from "../../../assets/imgs/testimonials-2.png";
import testimonialsThree from "../../../assets/imgs/testimonials-3.png";
import TestimonialCard from "./TestimonialCard";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  const { t } = useTranslation(["home"]);
  const { targetRef, isInView } = useScrollInToView();

  const testimonialsArr = [
    {
      img: testimonialsOne,
      name: t("testimonials.items.cardOne.name"),
      feedback: t("testimonials.items.cardOne.feedback"),
    },
    {
      img: testimonialsTwo,
      name: t("testimonials.items.cardTwo.name"),
      feedback: t("testimonials.items.cardTwo.feedback"),
    },
    {
      img: testimonialsThree,
      name: t("testimonials.items.cardThree.name"),
      feedback: t("testimonials.items.cardThree.feedback"),
    },
    {
      img: testimonialsThree,
      name: t("testimonials.items.cardThree.name"),
      feedback: t("testimonials.items.cardThree.feedback"),
    },
    {
      img: testimonialsThree,
      name: t("testimonials.items.cardThree.name"),
      feedback: t("testimonials.items.cardThree.feedback"),
    },
  ];

  const { activationArr } = useActivation(testimonialsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer
      ref={targetRef}
      className="relative"
      wraperClassName="py-7"
    >
      <Background />
      <SectionHeader
        className="underline underline-offset-[1rem]"
        title={t("testimonials.title")}
      />

      <Swiper
        ref={targetRef}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        loop
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={20}
        dir="ltr"
        className={t(`
          w-full 
          mt-10
          rounded-xl 
          transition-[opacity,transform]
          duration-500
          ease-in-out
          ${isInView ? "translate-y-0" : "translate-y-10"}
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {testimonialsArr.map((testimonial, i) => (
          <SwiperSlide className="w-auto" key={i}>
            <TestimonialCard
              key={i}
              {...testimonial}
              className="w-auto"
              parentInToView={activationArr[i].active}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Testimonials;
