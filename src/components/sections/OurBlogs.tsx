import { useTranslation } from "react-i18next";
import blogOneImg from "../../assets/imgs/blog-one.png";
import blogTwoImg from "../../assets/imgs/blog-two.png";
import blogThreeImg from "../../assets/imgs/blog-three.png";
import SectionContainer from "../shared/containers/SectionContainer";
import { trim } from "../../utils/functions/general";
import SimpleCard from "../shared/SimpleCard";
import useActivation from "../../hooks/useActivation";
import useScrollInToView from "../../hooks/useScrollInToView";

const OurBlogs = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  const ourBlogsArr = [
    {
      img: blogOneImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
    {
      img: blogTwoImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
    {
      img: blogThreeImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
    {
      img: blogOneImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
    {
      img: blogTwoImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
    {
      img: blogThreeImg,
      title: t("coName", { ns: "common" }),
      subTitle: t("hero.subtitle", { ns: "common" }),
    },
  ];

  const { activationArr } = useActivation(ourBlogsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer className="bg-gray-100" wraperClassName="py-5">
      <div
        ref={targetRef}
        className={trim(`
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-5 
          md:gap-10 
          justify-items-center
          mt-7`)}
      >
        {ourBlogsArr.map((blog, i) => (
          <SimpleCard
            key={i}
            {...blog}
            className="flex-col !items-start"
            imgClassName="max-w-[350px]"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OurBlogs;
