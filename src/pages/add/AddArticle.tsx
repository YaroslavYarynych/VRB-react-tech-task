import { ArticleHomeBtn } from "./components/article-home-btn";
import { CreateFormArticle } from "./components/create-form";
import "./addArticle.scss";

export const AddArticle = () => (
  <div className="article-container">
    <ArticleHomeBtn />
    <CreateFormArticle />
  </div>
);
