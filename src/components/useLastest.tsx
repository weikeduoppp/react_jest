import React, { useState, useEffect, useLayoutEffect } from 'react';
import useLastest from '../hooks/useLastest';
function App() {
  const [value, setValue] = useState(0);
  const refValue = useLastest(value);
  return (
    <div className="App">
      <p>Value: {value}, ref: {refValue}</p>
      <button onClick={() => setValue(Math.random() * 200)}>
        Generate Random Value
      </button>
    </div>
  );
}
export default App;
