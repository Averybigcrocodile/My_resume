import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./About.module.css";
import cn from "classnames";

const About = () => {
  const [aboutValue, setAboutValue] = useState("");
  const [qualityValue, setQualityValue] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showQuality, setShowQuality] = useState(false);

  return (
    <div className={cn(styles.about)}>
      <div className={cn(styles.about__myself)}>
        <div className={cn(styles.about__header)}>
          Про мене:
          <div className={cn(styles.changeBtn)}>
            <BiEditAlt
              className={cn(styles.btnAdd, styles.hide_on_save)}
              onClick={() => setShowAbout(true)}
            />
            <AiOutlineClose
              className={cn(styles.btnRem, styles.hide_on_save)}
              onClick={() => setAboutValue()}
            />
          </div>
        </div>

        {!showAbout ? (
          <div className={cn(styles.about__text)}>{aboutValue}</div>
        ) : (
          <textarea
            value={aboutValue}
            cols="30"
            rows="10"
            onChange={(e) => setAboutValue(e.target.value)}
            onBlur={() => setShowAbout(false)}
          />
        )}
      </div>
      <div className={cn(styles.about__line)}></div>
      <div className={cn(styles.about__quality)}>
        <div className={cn(styles.about__header)}>
          Мої якості:
          <div className={cn(styles.changeBtn)}>
            <BiEditAlt
              className={cn(styles.btnAdd, styles.hide_on_save)}
              onClick={() => setShowQuality(true)}
            />
            <AiOutlineClose
              className={cn(styles.btnRem, styles.hide_on_save)}
              onClick={() => setQualityValue("")}
            />
          </div>
        </div>

        {!showQuality ? (
          <div className={cn(styles.about__text)}>{qualityValue}</div>
        ) : (
          <textarea
            value={qualityValue}
            cols="30"
            rows="10"
            onChange={(e) => setQualityValue(e.target.value)}
            onBlur={() => setShowQuality(false)}
          />
        )}
      </div>
    </div>
  );
};

export default About;
