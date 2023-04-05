import styles from "./Save.module.css";
import cn from "classnames";

const Save = ({ onClick }) => {
  return (
    <div
      className={cn(styles.save__btn, styles.hide_on_save)}
      onClick={onClick}
    >
      <span>Зберегти</span>
    </div>
  );
};

export default Save;
