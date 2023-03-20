import "./style.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Experience = () => {
  const [value, setValue] = useState("");
  const [experience, setExperience] = useState([]);
  const [addExperience, setAddExperience] = useState(false);

  let result = experience.map((item, index) => {
    return (
      <div key={index} className="experience">
        <div>
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
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

  function handleBlur() {
    setExperience([...experience, value]);
    setAddExperience(false);
  }

  return (
    <div className="experience">
      <div className="setExperience">
        <div>Навички і знання:</div>
        {!addExperience ? (
          <AiOutlinePlus onClick={() => setAddExperience(true)} />
        ) : (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleBlur}
          />
        )}
      </div>
      {result}
    </div>
  );
};

export default Experience;
