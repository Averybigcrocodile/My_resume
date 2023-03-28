import "./style.css";

const Save = ({ onClick }) => {
  return (
    <div className="save__btn hide-on-save" onClick={onClick}>
      <span>Зберегти</span>
    </div>
  );
};

export default Save;
