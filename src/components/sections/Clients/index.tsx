import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import ClientCard from "./ClientCard";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import clientOne from "../../../assets/imgs/clients/client_1.png";
import clientTwo from "../../../assets/imgs/clients/client_2.png";
import clientThree from "../../../assets/imgs/clients/client_3.jpg";
import clientFour from "../../../assets/imgs/clients/client_4.jpg";
import clientFive from "../../../assets/imgs/clients/client_5.jpg";
import clientSix from "../../../assets/imgs/clients/clinet_6.webp";
import clientSeven from "../../../assets/imgs/clients/client_7.webp";
import clientEight from "../../../assets/imgs/clients/client_8.png";
import clientNine from "../../../assets/imgs/clients/client_9.jpg";
import clientTen from "../../../assets/imgs/clients/client_10.jpg";
import clientEleven from "../../../assets/imgs/clients/client_11.webp";
import clientTwelve from "../../../assets/imgs/clients/client_12.png";
import clientThirteen from "../../../assets/imgs/clients/client_13.jpg";
import clientFourteen from "../../../assets/imgs/clients/client_14.jpg";
import clientFifteen from "../../../assets/imgs/clients/client_15.jpg";

const clientsArr: string[] = [
  clientOne,
  clientTwo,
  clientThree,
  clientFour,
  clientFive,
  clientSix,
  clientSeven,
  clientEight,
  clientNine,
  clientTen,
  clientEleven,
  clientTwelve,
  clientThirteen,
  clientFourteen,
  clientFifteen,
];

const Clients = () => {
  const { t } = useTranslation(["home"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      ref={targetRef}
      className="bg-gray-100"
      wraperClassName="py-7"
    >
      <Swiper
        ref={targetRef}
        modules={[Autoplay]}
        loop
        slidesPerView={"auto"}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        spaceBetween={50}
        dir="ltr"
        className={t(`
          w-full 
          mt-10
          rounded-xl 
          transition-opacity
          duration-500
          ease-in-out
          select-none
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        {clientsArr.map((imgSrc, i) => (
          <SwiperSlide
            className="w-auto flex items-center justify-center"
            key={i}
          >
            <ClientCard key={i} imgSrc={imgSrc} className="w-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};

export default Clients;
