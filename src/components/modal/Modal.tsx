import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { CurrentUser, RegistrationData } from "../../utils/types";
import { Input } from "../form/input";
import "./modal.scss";

export const Modal = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CurrentUser>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="modal">
      <div className="modal__container">
        <h1 className="modal__title">Registration</h1>
        <form
          onSubmit={handleSubmit((data) => {
            const user: CurrentUser = {
              author: data.author,
              id: String(new Date()),
              password: data.password,
            };

            const array: CurrentUser[] = [];

            array.push(user);

            dispatch(setUser(array));

            localStorage.setItem("currentUser", JSON.stringify(array));

            reset();

            navigate("/");
          })}
          className="modal-form"
        >
          {Object.keys(RegistrationData).map((item) => (
            <Input
              key={Math.round(Math.random() * 10000 - 10)}
              register={register}
              errors={errors}
              data={item}
              value={item === "author" ? "4" : "8"}
            />
          ))}

          <button type="submit" className="modal-form__btn">
            Create profile
          </button>
        </form>
      </div>
    </div>
  );
};
