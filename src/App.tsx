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
      <h1 data-testid="custom-element">Custom HTML element</h1>
      <button onClick={() => setText('Text after click')}>click me</button>
    </div>
  );
}

export default App;
