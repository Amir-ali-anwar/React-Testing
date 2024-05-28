import React, { useState } from "react";

const UserInputV2 = () => {
  const [text, setText] = useState("Initial Text");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setText(prevText=> prevText === 'Initial Text' ? 'Text after click' : 'Initial Text')
    setCount(prevCount=>prevCount+1)
  };

  return (
    <div>
      <button onClick={handleClick}>click me</button>
      <p className="text">{text}</p>
      <p className="count">Click count: {count}</p>
    </div>
  );
};

export default UserInputV2;
