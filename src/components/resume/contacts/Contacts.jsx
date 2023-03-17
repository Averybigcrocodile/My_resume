import { useState } from "react";
import "./style.css";
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

  return (
    <div className="contacts">
      <div className="contacts__header">Контакти:</div>
      <div className="contacts__social">
        <div className="contacts__phone">
          <AiFillPhone className="phone" />

          {editField === "phone" ? (
            <input
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span>{phone}</span>
          )}
          <BiEditAlt
            className="editBtn"
            onClick={() => setEditField("phone")}
          />
        </div>
        <div className="contacts__mail">
          <AiFillMail className="mail" />

          {editField === "mail" ? (
            <input
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span>{mail}</span>
          )}
          <BiEditAlt className="editBtn" onClick={() => setEditField("mail")} />
        </div>
        <div className="contacts__facebook">
          <AiFillFacebook className="facebook" />

          {editField === "facebook" ? (
            <input
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span>{facebook}</span>
          )}
          <BiEditAlt
            className="editBtn"
            onClick={() => setEditField("facebook")}
          />
        </div>
        <div className="contacts__instagram">
          <AiFillInstagram className="instagram" />

          {editField === "inst" ? (
            <input
              onChange={(e) => setInst(e.target.value)}
              value={inst}
              onBlur={() => setEditField("")}
            />
          ) : (
            <span>{inst}</span>
          )}
          <BiEditAlt className="editBtn" onClick={() => setEditField("inst")} />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
