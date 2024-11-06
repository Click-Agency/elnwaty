import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import Background from "./Background";
import testimonialsOne from "../../../assets/imgs/testimonials-1.png";
import testimonialsTwo from "../../../assets/imgs/testimonials-2.png";
import testimonialsThree from "../../../assets/imgs/testimonials-3.png";
import TestimonialCard from "./TestimonialCard";
import { trim } from "../../../utils/functions/general";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";

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

      <div
        className={trim(`
          flex 
          flex-wrap 
          justify-center 
          items-center
          gap-5
          mt-10`)}
      >
        {testimonialsArr.map((testimonial, i) => (
          <TestimonialCard
            key={i}
            {...testimonial}
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
