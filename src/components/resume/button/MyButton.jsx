import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const MyButton = ({ onClick, className }) => {
  return <AiOutlineFileAdd className={className} onClick={onClick} />;
};

export default MyButton;
