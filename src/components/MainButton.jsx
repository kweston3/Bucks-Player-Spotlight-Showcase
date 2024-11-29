import React, { useState } from "react";

const MainButton = ({ text }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState); // Toggle the clicked state
  };

  return (
    <button
      className={`main-button ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
