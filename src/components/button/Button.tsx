import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/userSlice";
import "./button.scss";

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "Log out") {
      dispatch(deleteUser());
      localStorage.clear();
      navigate("/");
      return;
    }

    navigate("/create");
  };
  return (
    <button
      className="link__btn"
      type={title === "Add article" ? "submit" : "button"}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
