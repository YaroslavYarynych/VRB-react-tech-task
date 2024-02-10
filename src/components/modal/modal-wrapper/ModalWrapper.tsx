import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Navigate, Outlet } from "react-router-dom";

export const ModalWrapper = () => {
  const user = useSelector((state: RootState) => state.currentUser.value);

  if (user.length) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
