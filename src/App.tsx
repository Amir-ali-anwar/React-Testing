import { useState } from "react";
function App() {
  const [text, setText] = useState('Initial Text');
  return (
    <div>
      <h1>Hello, Vite + React!</h1>
      <p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </p>
      <button onClick={() => setText('Text after click')}>click me</button>
    </div>
  );
}

export default App;
