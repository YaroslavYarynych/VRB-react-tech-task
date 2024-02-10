import { useSelector } from "react-redux";
import { Header } from "./components/header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "./store/store";
import "./App.scss";

export const App = () => {
  const user = useSelector((state: RootState) => state.currentUser.value);

  if (!user.length) {
    return <Navigate to="/registration" />;
  }
  return (
    <div className="wrapper">
      {user.length && <Header />}

      <Outlet />
    </div>
  );
};
