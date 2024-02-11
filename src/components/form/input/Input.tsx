import { FieldErrors, UseFormRegister } from "react-hook-form";
import { CurrentUser, FormData } from "../../../utils/types";
import "./input.scss";

type RegisterType = UseFormRegister<CurrentUser | FormData>;
type ErrorsType = FieldErrors<CurrentUser | any>;

type Props = {
  data: string;
  value: string;
  register: RegisterType;
  errors: ErrorsType;
};

export const Input: React.FC<Props> = ({ data, value, register, errors }) => {
  let error = null;

  switch (data) {
    case "title":
      error = errors.title;
      break;
    case "description":
      error = errors.description;
      break;

    case "image":
      error = errors.image;
      break;

    case "author":
      error = errors.author;
      break;

    case "password":
      error = errors.password;
      break;
    default:
      return;
  }

  return (
    <div className="form__container">
      <input
        {...register(data, {
          required: "This field is required.",
          minLength: {
            value: +value,
            message: `Min length is ${value}`,
          },
          pattern: {
            value:
              data === "image"
                ? /(jpg|jpeg|gif|png)(\?+.*)?$/i
                : /[a-zA-Z0-9.*]/,
            message: data === "image" ? "Invalid url" : "Invalid input",
          },
        })}
        type={data === "password" ? "password" : "text"}
        className="form__input"
        aria-invalid={error ? "true" : "false"}
        id={data}
        placeholder={`Add ${data} here`}
      />
      {(error?.type === "required" ||
        error?.type === "minLength" ||
        error?.type === "pattern") && (
        <p role="alert">{String(error?.message)}</p>
      )}
      <label className="form__label" htmlFor="title">
        {data === "author"
          ? `Write your name`
          : `Write ${data.startsWith("a") || data.startsWith("i") ? "an" : "a"} ${data}`}
      </label>
    </div>
  );
};
