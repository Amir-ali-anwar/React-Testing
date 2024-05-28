import React, { useState } from "react";

function UserInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label htmlFor="user-input">Enter your name:</label>
      <input
        type="text"
        id="user-input"
        value="new search term"
        onChange={handleChange}
      />
      <p>Hello, {inputValue}!</p>
    </form>
  );
}

export default UserInput;
