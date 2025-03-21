import SectionContainer from "../shared/containers/SectionContainer";
import SimpleCard from "../shared/SimpleCard";
import { trim } from "../../utils/functions/general";
import { useTranslation } from "react-i18next";
import blogOneImg from "../../assets/imgs/blog-one.png";
import blogTwoImg from "../../assets/imgs/blog-two.png";
import blogThreeImg from "../../assets/imgs/blog-three.png";
import useScrollInToView from "../../hooks/useScrollInToView";
import useActivation from "../../hooks/useActivation";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../config";
import ArticlesEnum from "../../enum/Articles";

const BlogsHero = () => {
  const { t } = useTranslation(["blogs", "common"]);
  const { targetRef, isInView } = useScrollInToView();
  const push = useNavigate();

  const blogsHeadersArr: { title: string; subTitle: string }[] = Object.values(
    t("articles", { returnObjects: true })
  ).map((item) => ({
    title: item.title,
    subTitle: item.subTitle,
  }));

  const blogsArr = [
    {
      img: blogOneImg,
      title: blogsHeadersArr[1].title,
      subTitle: blogsHeadersArr[1].subTitle,
      onClick: () =>
        push(
          `${appRoutes.blogs}${appRoutes.articlesQuery.ref}${ArticlesEnum.SECOND}`
        ),
    },
    {
      img: blogTwoImg,
      title: blogsHeadersArr[2].title,
      subTitle: blogsHeadersArr[2].subTitle,
      onClick: () =>
        push(
          `${appRoutes.blogs}${appRoutes.articlesQuery.ref}${ArticlesEnum.THIRD}`
        ),
    },
    {
      img: blogThreeImg,
      title: blogsHeadersArr[3].title,
      subTitle: blogsHeadersArr[3].subTitle,
      onClick: () =>
        push(
          `${appRoutes.blogs}${appRoutes.articlesQuery.ref}${ArticlesEnum.FOURTH}`
        ),
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
          bg-center
          bg-full-cup-pattern
          bg-cover
          transition-opacity
          duration-500
          ease-in-out
          cursor-pointer
          group
          ${isInView ? "opacity-100" : "opacity-0"}`)}
        onClick={() =>
          push(
            `${appRoutes.blogs}${appRoutes.articlesQuery.ref}${ArticlesEnum.FIRST}`
          )
        }
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
            bg-gradient-t-dark
            group-hover:text-secondary`)}
        >
          <h3 className="text-responsive-lg">{blogsHeadersArr[1].title}</h3>
          <h4 className="text-responsive-md font-thin">
            {blogsHeadersArr[1].subTitle}
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
            className="lg:flex-row flex-col cursor-pointer hover:bg-gray-200 text-center lg:text-start max-w-[350px] lg:max-w-full"
            imgClassName="max-w-[350px] md:max-w-[250px]"
            parentInToView={activationArr[i].active}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default BlogsHero;
