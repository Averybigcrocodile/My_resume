import MyPhoto from "../photo/MyPhoto";
import styles from "./Header.module.css";
import styles2 from "../form/MyForm.module.css";
import cn from "classnames";
import { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";

const Header = () => {
  const [name, setName] = useState("Ім'я");
  const [surname, setSurname] = useState("Прізвище");
  const [age, setAge] = useState("Вік");
  const [editField, setEditField] = useState("");

  useEffect(() => {
    name === "Ім'я" && surname === "Прізвище"
      ? (document.title = "My resume")
      : (document.title = `${name} ${surname}`);
  }, [name, surname]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setEditField("");
    }
  }

  function handleEdit(fieldName) {
    setEditField(fieldName);
  }

  return (
    <div className={cn(styles.form__header)}>
      <MyPhoto />
      <div className={cn(styles.header__info)}>
        <div>
          {editField === "name" ? (
            <input
              type="text"
              className={cn(styles.info__name)}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span className={cn(styles.info__name)}>{name}</span>
          )}

          <BiEditAlt
            className={cn(styles.btnChange, styles2.hide_on_save)}
            onClick={() => handleEdit("name")}
          />
        </div>
        <div>
          {editField === "surname" ? (
            <input
              type="text"
              className={cn(styles.info__surname)}
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span className={cn(styles.info__surname)}>{surname}</span>
          )}

          <BiEditAlt
            className={cn(styles.btnChange, styles2.hide_on_save)}
            onClick={() => handleEdit("surname")}
          />
        </div>
        <div>
          {editField === "age" ? (
            <input
              type="text"
              className={cn(styles.info__age)}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span className={cn(styles.info__age)}>{age}</span>
          )}

          <BiEditAlt
            className={cn(styles.btnChange, styles2.hide_on_save)}
            onClick={() => handleEdit("age")}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
