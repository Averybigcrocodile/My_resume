import "./style.css";
import { AiFillSave } from "react-icons/ai";

const Save = ({ onClick }) => {
  return (
    <div className="save__btn hide-on-save" onClick={onClick}>
      <AiFillSave />
      Зберегти
    </div>
  );
};

export default Save;
