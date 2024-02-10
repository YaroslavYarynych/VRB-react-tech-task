import { Button } from "../button/Button";
import "./header.scss";

export const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__btn">
        <Button title="Create article" />
        <Button title="Log out" />
      </div>
    </div>
  </header>
);
