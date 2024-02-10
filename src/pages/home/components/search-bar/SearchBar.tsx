import { ChangeEventHandler } from "react";
import "./search-bar.scss";

type Props = {
  query: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBar: React.FC<Props> = ({ query, handleChange }) => (
  <div className="home-input__container">
    <input
      id="home-input__search"
      type="text"
      placeholder="Write here what u search"
      value={query}
      onChange={handleChange}
    />
  </div>
);
