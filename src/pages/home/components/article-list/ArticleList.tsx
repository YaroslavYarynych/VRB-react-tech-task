import { Article } from "../../../../components/article";
import { ArticleType } from "../../../../utils/types";

type Props = {
  list: ArticleType[];
};

export const ArticleList: React.FC<Props> = ({ list }) => {
  return (
    <div className="home__container">
      {list.map((item) => (
        <Article
          key={Math.round(Math.random() * 1000000 - 1000)}
          img={item.urlToImage}
          title={item.title}
          desctiption={item.description}
          id={item.source.id}
          author={item.author}
        />
      ))}
    </div>
  );
};
