import { useState } from "react";
import styles from "./Contacts.module.css";
import cn from "classnames";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const Contacts = () => {
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [inst, setInst] = useState("");
  const [facebook, setFacebook] = useState("");
  const [editField, setEditField] = useState("");

  function handleKeyPressPhone(e) {
    if (e.key === "Enter") {
      setEditField(phone);
    }
  }
  function handleKeyPressMail(e) {
    if (e.key === "Enter") {
      setEditField(mail);
    }
  }
  function handleKeyPressInst(e) {
    if (e.key === "Enter") {
      setEditField(inst);
    }
  }
  function handleKeyPressFacebook(e) {
    if (e.key === "Enter") {
      setEditField(facebook);
    }
  }

  return (
    <div className={cn(styles.contacts)}>
      <div className={cn(styles.contacts__header)}>Контакти:</div>
      <div className={cn(styles.contacts__social)}>
        <div className={cn(styles.contacts__phone)}>
          <AiFillPhone className={cn(styles.phone)} />

          {editField === "phone" ? (
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              onBlur={() => setEditField("")}
              onKeyDown={handleKeyPressPhone}
            />
          ) : (
            <span>{phone}</span>
          )}
          <BiEditAlt
            className={cn(styles.editBtn, styles.hide_on_save)}
            onClick={() => setEditField("phone")}
          />
        </div>
        <div className={cn(styles.contacts__mail)}>
          <AiFillMail className="mail" />

          {editField === "mail" ? (
            <input
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              onBlur={() => setEditField("")}
              onKeyDown={handleKeyPressMail}
            />
          ) : (
            <span>{mail}</span>
          )}
          <BiEditAlt
            className={cn(styles.editBtn, styles.hide_on_save)}
            onClick={() => setEditField("mail")}
          />
        </div>
        <div className={cn(styles.contacts__facebook)}>
          <AiFillFacebook className="facebook" />

          {editField === "facebook" ? (
            <input
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              onBlur={() => setEditField("")}
              onKeyDown={handleKeyPressFacebook}
            />
          ) : (
            <span>{facebook}</span>
          )}
          <BiEditAlt
            className={cn(styles.editBtn, styles.hide_on_save)}
            onClick={() => setEditField("facebook")}
          />
        </div>
        <div className={cn(styles.contacts__instagram)}>
          <AiFillInstagram className="instagram" />

          {editField === "inst" ? (
            <input
              onChange={(e) => setInst(e.target.value)}
              value={inst}
              onBlur={() => setEditField("")}
              onKeyDown={handleKeyPressInst}
            />
          ) : (
            <span>{inst}</span>
          )}
          <BiEditAlt
            className={cn(styles.editBtn, styles.hide_on_save)}
            onClick={() => setEditField("inst")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
