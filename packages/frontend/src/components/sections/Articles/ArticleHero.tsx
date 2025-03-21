import { useTranslation } from "react-i18next";
import { GrArticle } from "react-icons/gr";
import ArticlesEnum from "../../../enum/Articles";

const ArticleHero = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <div id={"article-hero"}>
      <div className="bg-full-cup-pattern bg-cover bg-top w-full h-96"></div>
      <h1 className="text-responsive-cover-sm font-semibold text-center">
        {t(`article${articleIndex}.title`)}
      </h1>
      <div className="flex items-center gap-4 flex-col md:flex-row mt-6">
        <GrArticle size={60} />
        <p className="text-responsive-md md:max-w-[90%]">
          {t(`article${articleIndex}.description`)}
        </p>
      </div>
    </div>
  );
};

export default ArticleHero;
