import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import ArticleHero from "./ArticleHero";
import readingArticle3 from "../../../assets/imgs/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import ArticlesEnum from "../../../enum/Articles";

const Article3 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row mt-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title1")}
            </h2>
            <p className="text-responsive-2md">
              {t("article3.content.descriptionTitle1")}
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title2")}
            </h2>

            <p className="text-responsive-2md">
              {t("article3.content.descriptionTitle2")}
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title3")}
            </h2>

            <p className="text-responsive-2md">
              {t("article3.content.descriptionTitle3")}
            </p>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article3.content.title4")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article3.content.itemsTitle4", {
                    returnObjects: true,
                  })
                ) as {
                  title: string;
                  description: string;
                }[]
              ).map(({ title, description }, i) => (
                <li className="mt-2" key={i + "i"}>
                  <strong className="text-responsive-2sm font-medium">
                    {title}:{" "}
                  </strong>
                  <span className="text-responsive-xs">{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="flex-1 flex flex-col">
          <img src={readingArticle3} alt="reading-article" />
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article3;
