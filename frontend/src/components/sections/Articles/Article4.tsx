import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import ArticleHero from "./ArticleHero";
import readingArticle4 from "../../../assets/imgs/reading-article.jpg";
import ArticleFooter from "./ArticleFooter";
import ArticlesEnum from "../../../enum/Articles";

const Article4 = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t, i18n } = useTranslation(["articles", "common"]);

  return (
    <SectionContainer className="animate-appear">
      <ArticleHero articleIndex={articleIndex} />
      <div className="flex flex-col-reverse md:flex-row mt-5 md:gap-10">
        <article className="flex-1 flex flex-col">
          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title1")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article4.content.itemsTitle1", {
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
              {t("article4.content.title2")}
            </h2>
            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article4.content.itemsTitle2", {
                    returnObjects: true,
                  })
                ) as {
                  title: string;
                  steps: { title: string; subSteps: string[] }[];
                }[]
              ).map(({ title, steps }, i) => (
                <li className="mt-2" key={i + "i"}>
                  <h3 className="text-responsive-2sm font-medium">{title}</h3>

                  <ol
                    className={`list-decimal ${
                      i18n.dir() === "ltr" ? "pl-7" : "pr-7"
                    } mt-2`}
                  >
                    {steps.map((step, j) => (
                      <li key={j + "j"} className="text-responsive-xs mt-2">
                        <h4 className="font-medium">{step.title}</h4>

                        <ol
                          className={`list-decimal ${
                            i18n.dir() === "ltr" ? "pl-7" : "pr-7"
                          }`}
                        >
                          {step.subSteps.map((subStep, k) => (
                            <li key={k + "k"} className="text-responsive-xs">
                              {subStep}
                            </li>
                          ))}
                        </ol>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title3")}
            </h2>

            <ul className="text-responsive-2md">
              {(
                Object.values(
                  t("article4.content.itemsTitle3", {
                    returnObjects: true,
                  })
                ) as {
                  title: string;
                  steps: { title: string; description: string }[];
                }[]
              ).map(({ title, steps }, i) => (
                <li className="mt-2" key={i + "i"}>
                  <h3 className="text-responsive-2sm font-medium">{title}</h3>

                  <ol
                    className={`list-decimal ${
                      i18n.dir() === "ltr" ? "pl-7" : "pr-7"
                    }`}
                  >
                    {steps.map(({ title, description }, j) => (
                      <li className="mt-2" key={j + "j"}>
                        <strong className="text-responsive-2sm font-medium">
                          {title}:{" "}
                        </strong>
                        <span className="text-responsive-xs">
                          {description}
                        </span>
                      </li>
                    ))}
                  </ol>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="flex-1 flex flex-col">
          <img src={readingArticle4} alt="reading-article" />
          <p className="text-responsive-md">{t("article4.info")}</p>

          <div className="mt-5">
            <h2 className="text-responsive-sm font-semibold">
              {t("article4.content.title4")}
            </h2>
            <p className="text-responsive-2md">
              {t("article4.content.descriptionTitle4")}
            </p>
            <ol
              className={`list-decimal ${
                i18n.dir() === "ltr" ? "pl-7" : "pr-7"
              }`}
            >
              {(
                Object.values(
                  t("article4.content.itemsTitle4", {
                    returnObjects: true,
                  })
                ) as string[]
              ).map((title, i) => (
                <li className="mt-2" key={i + "i"}>
                  {title}
                </li>
              ))}
            </ol>
          </div>
        </article>
      </div>
      <ArticleFooter articleIndex={articleIndex} />
      <p className="text-center text-responsive-xs mt-2">
        {t("article4.info2")}
      </p>
    </SectionContainer>
  );
};

export default Article4;
