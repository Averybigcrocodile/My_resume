import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";

const About = () => {
  const [aboutValue, setAboutValue] = useState("");
  const [qualityValue, setQualityValue] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [showQuality, setShowQuality] = useState(false);

  return (
    <div className="about">
      <div className="about__myself">
        <div className="about__header">
          Про мене:
          <div className="changeBtn">
            <BiEditAlt className="btnAdd" onClick={() => setShowAbout(true)} />
            <AiOutlineClose
              className="btnRem"
              onClick={() => setAboutValue()}
            />
          </div>
        </div>

        {!showAbout ? (
          <div className="about__text">{aboutValue}</div>
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
      <div className="about__line"></div>
      <div className="about__quality">
        <div className="about__header">
          Мої якості:
          <div className="changeBtn">
            <BiEditAlt
              className="btnAdd"
              onClick={() => setShowQuality(true)}
            />
            <AiOutlineClose
              className="btnRem"
              onClick={() => setQualityValue("")}
            />
          </div>
        </div>

        {!showQuality ? (
          <div className="about__text">{qualityValue}</div>
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
