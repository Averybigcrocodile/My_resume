import "./style.css";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Education = () => {
  const [value, setValue] = useState("");
  const [schools, setSchools] = useState([]);
  const [addSchools, setAddSchools] = useState(false);

  let result = schools.map((item, index) => {
    return (
      <div key={index} className="school">
        <div>
          {index + 1}. {item}
        </div>
        <div>
          <AiOutlineClose
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

  function handleBlur() {
    setSchools([...schools, value]);
    setAddSchools(false);
  }

  return (
    <div className="education">
      <div className="setSchool">
        <div>Освіта і курси:</div>
        {!addSchools ? (
          <AiOutlinePlus onClick={() => setAddSchools(true)} />
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

export default Education;
