import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addArticles, setData } from "../../features/dataSlice";
import { ToastContainer } from "react-toastify";
import { ArticleList } from "./components/article-list/ArticleList";
import { SearchBar } from "./components/search-bar";
import { LoadMoreBtn } from "./components/load-more-btn";
import { Loader } from "../../components/loader";
import "./home.scss";
import { getFirst10Articles, getMoreArticles } from "../../utils/fetchClient";

export const Home: React.FC = () => {
  const data = useSelector((state: RootState) => state.dataStore.article);
  const dispatch = useDispatch();

  const [page, setPage] = useState(2);
  const [query, setQuery] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target.value);
  };

  useEffect(() => {
    if (!data.length) {
      setTimeout(() => {
        getFirst10Articles()
          .then((res) => {
            if (res.data.articles) {
              console.log(res.data.articles);
              dispatch(setData(res.data.articles));
            } else {
              dispatch(setData([]));
            }
          })
          .catch((error) =>
            console.log(`${error}! You have an error in fetching data`)
          );
      }, 2000);
    }
  }, []);

  const handleLoadMore = () => {
    setPage((current) => current + 1);
    getMoreArticles(page)
      .then((res) => dispatch(addArticles(res.data.articles)))
      .catch((error) =>
        console.log(`${error}! You have an error with loading data`)
      );
  };

  const filtered = data.filter((item) => {
    if (query) {
      return (
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      return item;
    }
  });

  return (
    <div className="container">
      <div className="home">
        <div className="home-basic__container">
          {!data.length ? (
            <Loader />
          ) : (
            <>
              <SearchBar query={query} handleChange={handleChange} />
              <ArticleList list={filtered} />
              <LoadMoreBtn handleLoadMore={handleLoadMore} />
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
