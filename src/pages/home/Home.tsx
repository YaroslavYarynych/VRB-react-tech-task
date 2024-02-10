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
      fetch(
        "https://newsapi.org/v2/everything?domains=techcrunch.com&page=1&pageSize=10&apiKey=07bbb3b1f9c648cca7df57d1ebe6e7f6"
      )
        .then((res) => res.json())
        .then((data) => dispatch(setData(data.articles)))
        .catch((error) =>
          console.log(`${error}! You have an error in fetching data`)
        );
    }
  }, []);

  const handleLoadMore = () => {
    setPage((current) => current + 1);

    fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com&page=${page}&pageSize=10&apiKey=07bbb3b1f9c648cca7df57d1ebe6e7f6`
    )
      .then((data) => data.json())
      .then((res) => dispatch(addArticles(res.articles)))
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

  console.log(data);

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
