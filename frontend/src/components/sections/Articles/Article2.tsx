import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import ArticleHero from "./ArticleHero";
import readingArticle1 from "../../../assets/imgs/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import ArticlesEnum from "../../../enum/Articles";

const Article1 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t, i18n } = useTranslation(["articles", "common"]);

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row mt-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title1")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article2.content.itemsTitle1", {
                    returnObjects: true,
                  })
                ) as { title: string; steps: string[] }[]
              ).map(({ title, steps }, i) => (
                <li className="mt-2" key={i + "i"}>
                  <h3 className="text-responsive-2sm font-medium">{title}</h3>

                  <ol
                    className={`list-decimal ${
                      i18n.dir() === "ltr" ? "pl-7" : "pr-7"
                    }`}
                  >
                    {steps.map((step, j) => (
                      <li key={j + "j"} className="text-responsive-xs">
                        {step}
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title2")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article2.content.itemsTitle2", {
                    returnObjects: true,
                  })
                ) as { title: string; steps: string[] }[]
              ).map(({ title, steps }, i) => (
                <li className="mt-2" key={i + "i"}>
                  <h3 className="text-responsive-2sm font-medium">{title}</h3>

                  <ol
                    className={`list-decimal ${
                      i18n.dir() === "ltr" ? "pl-7" : "pr-7"
                    }`}
                  >
                    {steps.map((step, j) => (
                      <li key={j + "j"} className="text-responsive-xs">
                        {step}
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title3")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article2.content.itemsTitle3", {
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
          <img src={readingArticle1} alt="reading-article" />

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article2.content.title4")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article2.content.itemsTitle4", {
                    returnObjects: true,
                  })
                ) as string[]
              ).map((info, i) => (
                <li className="mt-2" key={i + "i"}>
                  <span className="text-responsive-xs">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
    </SectionContainer>
  );
};

export default Article1;
