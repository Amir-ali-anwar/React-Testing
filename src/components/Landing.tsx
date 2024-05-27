import React, { useState } from "react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle Visibility</button>
      {isVisible && <p data-testid="custom-element">This element is visible</p>}
    </div>
  );
};

export default Landing;
