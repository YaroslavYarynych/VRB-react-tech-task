import "./load-more.scss";

type Props = {
  handleLoadMore: () => void;
};

export const LoadMoreBtn: React.FC<Props> = ({ handleLoadMore }) => (
  <button className="load__btn" onClick={handleLoadMore}>
    Load more
  </button>
);
