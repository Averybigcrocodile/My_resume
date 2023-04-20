import cn from "classnames";
import styles from "./MyRelease.module.css";
import Info from "../info/Info";

const MyRelease = ({ namePh, nameMd }) => {
  return (
    <div className={cn(styles.release)}>
      <h2>Модельний реліз</h2>
      <Info namePh={namePh} nameMd={nameMd} />
    </div>
  );
};

export default MyRelease;
