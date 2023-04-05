import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./MyPhoto.module.css";
import cn from "classnames";

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
    <div className={cn(styles.imgUser)}>
      {img ? (
        <div className={cn(styles.imgUser__img_cont)}>
          <img className={cn(styles.imgUser__img)} src={img} alt="img" />
          <AiOutlineClose
            className={cn(styles.remImg)}
            onClick={() => setImg(null)}
          />
        </div>
      ) : (
        <div className={cn(styles.input__wrapper)}>
          <input
            type="file"
            accept="img/*"
            onChange={handleImgChange}
            id="input__file"
            className={cn(styles.input, styles.input__file)}
          />
          <div>
            <label
              htmlFor="input__file"
              className={cn(styles.input__file_button)}
            >
              Оберіть файл
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
