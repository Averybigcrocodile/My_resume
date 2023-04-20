import cn from "classnames";
import styles from "./Photographer.module.css";
import { useState } from "react";

const Photographer = ({ nameChange, phoneChange }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    nameChange(name);
    phoneChange(phone);
  };

  return (
    <div className={cn(styles.photographer)}>
      <h1>Інформація про фотографа</h1>
      <div className={cn(styles.inputs)}>
        <span>Ім'я та прізвище:</span>
        <input
          className={cn(styles.photographer__name)}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={cn(styles.inputs)}>
        <span>Телефон:</span>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className={cn(styles.btn)} onClick={handleClick}>
        Далі
      </button>
    </div>
  );
};

export default Photographer;
