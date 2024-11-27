import React, { useState } from "react";

const Button = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState); // Toggle the clicked state
  };

  return (
    <button
      className={`button ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
