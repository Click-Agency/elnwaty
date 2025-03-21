import { useTranslation } from "react-i18next";
import ArticlesEnum from "../../../enum/Articles";

const ArticleFooter = ({ articleIndex }: { articleIndex: ArticlesEnum }) => {
  const { t } = useTranslation(["articles", "common"]);

  return (
    <p className="text-responsive-xs text-center mt-7">
      {t(`article${articleIndex}.footer`)}
    </p>
  );
};

export default ArticleFooter;
