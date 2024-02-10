import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addData } from "../../../../features/dataSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../store/store";
import { ArticleType, FormData, InputData } from "../../../../utils/types";
import { Input } from "../../../../components/form/input";
import "./form-article.scss";
import "../../../../../node_modules/react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

export const CreateFormArticle = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.value
  );
  const dispatch = useDispatch();

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          const newArticle: ArticleType = {
            author: currentUser[0].author,
            content: data.description,
            description: data.description,
            publishedAt: String(new Date()),
            source: {
              id: String(Math.floor(Math.random() * 10000)),
              name: currentUser[0].author,
            },
            title: data.title,
            url: data.image,
            urlToImage: data.image,
          };

          dispatch(addData(newArticle));

          toast.success("The article has been created successfully!", {
            position: "bottom-right",
            className: "toast-message",
          });

          setTimeout(() => {
            reset();

            navigate("/");
          }, 1000);
        })}
        className="form"
      >
        {Object.keys(InputData).map((item) => (
          <Input
            key={Math.round(Math.random() * 10000 - 100)}
            data={item}
            value={item === "title" ? "4" : "20"}
            register={register}
            errors={errors}
          />
        ))}

        <button type="submit" className="link__btn">
          Add article
        </button>
      </form>

      <ToastContainer />
    </>
  );
};
