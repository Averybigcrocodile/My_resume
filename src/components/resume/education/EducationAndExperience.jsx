import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import styles from "./EducationAndExperience.module.css";
import cn from "classnames";

const EducationAndExperience = () => {
  const [value, setValue] = useState("");
  const [schools, setSchools] = useState([]);
  const [addSchools, setAddSchools] = useState(false);
  const [experience, setExperience] = useState([]);
  const [addExperience, setAddExperience] = useState(false);

  let education = schools.map((item, index) => {
    return (
      <div className={cn(styles.school)} key={index}>
        <div className={cn(styles.item)}>
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
            className={cn(styles.remBtn, styles.hide_on_save)}
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
      <div className={cn(styles.habit)} key={index}>
        <div className={cn(styles.item)}>
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
            className={cn(styles.remBtn, styles.hide_on_save)}
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
    <div className={cn(styles.educationAndExperience)}>
      <div className={cn(styles.education)}>
        <div className={cn(styles.setEducation)}>
          <div className={cn(styles.education__header)}>
            Освіта і курси:
            {!addSchools ? (
              <AiOutlinePlus
                className={cn(styles.education__btn, styles.hide_on_save)}
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
        </div>
        {education}
      </div>
      <div className={cn(styles.line)}></div>
      <div className={cn(styles.experience)}>
        <div className={cn(styles.setExperience)}>
          <div className={cn(styles.experience__header)}>
            Навички і знання:
            {!addExperience ? (
              <AiOutlinePlus
                className={cn(styles.education__btn, styles.hide_on_save)}
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
        </div>
        {exp}
      </div>
    </div>
  );
};

export default EducationAndExperience;
