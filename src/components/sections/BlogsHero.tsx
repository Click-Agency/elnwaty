import SectionContainer from "../shared/containers/SectionContainer";
import SimpleCard from "../shared/SimpleCard";
import { trim } from "../../utils/functions/general";
import { useTranslation } from "react-i18next";
import blogOneImg from "../../assets/imgs/blog-one.png";
import blogTwoImg from "../../assets/imgs/blog-two.png";
import blogThreeImg from "../../assets/imgs/blog-three.png";
import useScrollInToView from "../../hooks/useScrollInToView";
import useActivation from "../../hooks/useActivation";

const BlogsHero = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  const blogsArr = [
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

  const { activationArr } = useActivation(blogsArr.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef} wraperClassName="lg:flex-row pt-6 gap-6">
      <div
        className={trim(`
          relative
          flex-1
          flex
          flex-col
          min-h-[300px]
          bg-cover
          bg-center
          bg-full-cup-pattern
          transition-opacity
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}`)}
      >
        <div
          className={trim(`
            absolute
            bottom-0
            left-0
            flex
            flex-col
            w-full
            p-6
            text-white
            bg-gradient-t-dark`)}
        >
          <h3 className="text-responsive-lg">
            {t("coName", { ns: "common" })}
          </h3>
          <h4 className="text-responsive-md font-thin">
            {t("hero.subtitle", { ns: "common" })}
          </h4>
        </div>
      </div>

      <div
        className={trim(`
          flex 
          lg:flex-col 
          justify-center 
          lg:items-start 
          items-center 
          flex-wrap
          gap-8 
          md:gap-5 
          flex-1`)}
      >
        {blogsArr.map((blog, i) => (
          <SimpleCard
            key={i}
            {...blog}
            className="lg:flex-row flex-col"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default BlogsHero;
