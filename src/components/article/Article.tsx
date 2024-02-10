import { useDispatch, useSelector } from "react-redux";
import { deleteData, pinData } from "../../features/dataSlice";
import { RootState } from "../../store/store";
import { deletePin, setPin } from "../../features/pinSlice";
import { toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import "./article.scss";

type Props = {
  img: string;
  title: string;
  desctiption: string;
  author: string;
  id: string;
};

export const Article: React.FC<Props> = ({
  img,
  title,
  desctiption,
  author,
  id,
}) => {
  const [user] = useSelector((state: RootState) => state.currentUser.value);
  const pin = useSelector((state: RootState) => state.currentPin.pin);
  const dispatch = useDispatch();

  const handlePin = (author: string, id: string) => {
    if (author === user.author) {
      if (!pin.length) {
        dispatch(pinData({ id }));
        dispatch(setPin({ id }));
        toast.success("This article has been pinned successfully!", {
          position: "bottom-right",
          className: "toast-message",
        });
      } else if (pin.length === 1 && +pin[0].id === +id) {
        dispatch(deletePin());
        dispatch(pinData({ id }));
        toast.success("This article has been unpinned!", {
          position: "bottom-right",
          className: "toast-message",
        });
      } else {
        toast.error(
          "You can't pin more than one article! Please unpin the first one and try again",
          {
            position: "bottom-right",
            className: "toast-message",
          }
        );
      }
    } else {
      toast.error("You don't have permission to pin it!", {
        position: "bottom-right",
        className: "toast-message",
      });
    }
  };

  const handleDelete = (author: string, id: string) => {
    if (author === user.author) {
      dispatch(deleteData(id));
      dispatch(deletePin());

      toast.success("Article was deleted successfully!", {
        position: "bottom-right",
        className: "toast-message",
      });
    } else {
      toast.error("You don't have permission to delete it!", {
        position: "bottom-right",
        className: "toast-message",
      });
    }
  };

  return (
    <div className="article">
      <div className="article__btn art-btn">
        <button
          className="art-btn__pin"
          title="pin item"
          onClick={() => handlePin(author, id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              fill="#161616"
              d="M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"
            />
          </svg>
        </button>
        <button
          className="art-btn__delete"
          title="delete"
          onClick={() => {
            handleDelete(author, id);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#161616"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
            />
          </svg>
        </button>
      </div>
      <img src={img} alt="" className="article__img" />
      <h2 className="article__title">{title.slice(0, 70)}</h2>
      <p className="article__description">{`${desctiption.slice(0, 120)}...`}</p>
      <div className="article__container">
        <p className="article__author">{author}</p>
        <p className="icon"></p>
      </div>
    </div>
  );
};
