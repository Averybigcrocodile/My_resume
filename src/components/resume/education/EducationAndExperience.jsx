import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import "./style.css";

const EducationAndExperience = () => {
  const [value, setValue] = useState("");
  const [schools, setSchools] = useState([]);
  const [addSchools, setAddSchools] = useState(false);
  const [experience, setExperience] = useState([]);
  const [addExperience, setAddExperience] = useState(false);

  let education = schools.map((item, index) => {
    return (
      <div className="school" key={index}>
        <div className="item">
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
            className="remBtn hide-on-save"
            onClick={() =>
              setSchools([
                ...schools.slice(0, index),
                ...schools.slice(index + 1),
              ])
            }
          />
        </div>
      </div>
    );
  });

  let exp = experience.map((item, index) => {
    return (
      <div className="habit" key={index}>
        <div className="item">
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
            className="remBtn hide-on-save"
            onClick={() =>
              setExperience([
                ...experience.slice(0, index),
                ...experience.slice(index + 1),
              ])
            }
          />
        </div>
      </div>
    );
  });

  function handleBlurExperience() {
    setExperience([...experience, value]);
    setAddExperience(false);
    setValue("");
  }

  function handleBlurSchool() {
    setSchools([...schools, value]);
    setAddSchools(false);
    setValue("");
  }

  function handkeKeyEducation(e) {
    if (e.key === "Enter") {
      setSchools([...schools, value]);
      setAddSchools(false);
      setValue("");
    }
  }
  function handkeKeyExperience(e) {
    if (e.key === "Enter") {
      setExperience([...experience, value]);
      setAddExperience(false);
      setValue("");
    }
  }

  return (
    <div className="educationAndExperience">
      <div className="education">
        <div className="setEducation">
          <div>Освіта і курси:</div>
          {!addSchools ? (
            <AiOutlinePlus
              className="education__btn hide-on-save"
              onClick={() => setAddSchools(true)}
            />
          ) : (
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlurSchool}
              onKeyDown={handkeKeyEducation}
            />
          )}
        </div>
        {education}
      </div>
      <div className="line"></div>
      <div className="experience">
        <div className="setExperience">
          <div>Навички і знання:</div>
          {!addExperience ? (
            <AiOutlinePlus
              className="education__btn hide-on-save"
              onClick={() => setAddExperience(true)}
            />
          ) : (
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={handleBlurExperience}
              onKeyDown={handkeKeyExperience}
            />
          )}
        </div>
        {exp}
      </div>
    </div>
  );
};

export default EducationAndExperience;
