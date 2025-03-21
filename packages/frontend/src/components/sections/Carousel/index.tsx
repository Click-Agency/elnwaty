import SectionContainer from "../../shared/containers/SectionContainer";
import CarouselCard from "./CarouselCard";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionHeader from "../../shared/SectionHeader";
import { trim } from "../../../utils/functions/general";

const Clients = ({
  items,
  title,
  containerClassName,
  cardClassName,
}: {
  items: string[];
  title?: string;
  containerClassName?: string;
  cardClassName?: string;
}) => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className={`bg-gray-100 ${containerClassName}`}
      wraperClassName="py-7"
    >
      {title && <SectionHeader title={title} />}
      <Swiper
        ref={targetRef}
        modules={[Autoplay]}
        loop
        slidesPerView={"auto"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        dir="ltr"
        className={trim(`
          w-full 
          mt-10
          rounded-xl 
          transition-opacity
          duration-500
          ease-in-out
          select-none
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {items.map((imgSrc, i) => (
          <SwiperSlide
            className="w-auto flex items-center justify-center"
            key={i}
          >
            <CarouselCard
              key={i}
              imgSrc={imgSrc}
              className={`w-auto ${cardClassName}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Clients;
