import { useNavigate, useSearchParams } from "react-router-dom";
import PageContainer from "../components/shared/containers/PageContainer";
import { appRoutes } from "../config";
import { useEffect } from "react";
import Article1 from "../components/sections/Articles/Article1";
import Article2 from "../components/sections/Articles/Article2";
import Article3 from "../components/sections/Articles/Article3";
import Article4 from "../components/sections/Articles/Article4";
import Article5 from "../components/sections/Articles/Article5";
import ArticlesEnum from "../enum/Articles";

const articles = [
  <Article1 articleIndex={ArticlesEnum.FIRST} />,
  <Article2 articleIndex={ArticlesEnum.SECOND} />,
  <Article3 articleIndex={ArticlesEnum.THIRD} />,
  <Article4 articleIndex={ArticlesEnum.FOURTH} />,
  <Article5 articleIndex={ArticlesEnum.FIFTH} />,
];

const isVaildArticle = (ref: number | null) =>
  !ref || isNaN(Number(ref)) || Number(ref) < 0 || Number(ref) > articles.length
    ? false
    : true;

export default function Articles() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const ref = Number(searchParams.get("ref"));

  useEffect(() => {
    if (!isVaildArticle(ref)) navigate(appRoutes.blogs);
  }, [ref, navigate]);

  if (!isVaildArticle(ref)) return null;

  return <PageContainer paddingTop>{articles[ref - 1]}</PageContainer>;
}
