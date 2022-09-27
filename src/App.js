import './index.scss';
import React, { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(0);

  const OnClickPlus = () => {
    setCounter(counter + 1)
  }
  const OnClickMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button  onClick={OnClickMinus} className="minus">- Minus</button>
        <button onClick={OnClickPlus} className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;
