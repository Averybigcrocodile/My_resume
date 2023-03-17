import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";

const Photo = () => {
  const [img, setImg] = useState(null);

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  return (
    <div className="imgUser">
      {img ? (
        <div>
          <img className="imgUser__img" src={img} alt="Users photo" />
          <AiOutlineClose className="remImg" onClick={() => setImg(null)} />
        </div>
      ) : (
        <div className="input__wrapper">
          <input
            type="file"
            accept="img/*"
            onChange={handleImgChange}
            id="input__file"
            className="input input__file"
          />
          <div>
            <label for="input__file" class="input__file-button">
              Оберіть файл
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
