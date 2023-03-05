import React, { useState, useEffect, useLayoutEffect } from 'react';
function App() {
  const [value, setValue] = useState(0);
  // 一个不断变化的闪烁的数字。
  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  // 这意味着useEffect钩子正试图生成随机值，并同时将其渲染到屏幕上。另一方面，useLayoutEffect钩子试图首先完成计算，然后才向我们展示生成的数字。
  // useEffect useLayoutEffect  第一个钩子是异步处理计算和DOM渲染的，而后者是先进行计算，然后才处理计算结果在屏幕上的渲染。
  console.log('render', value);
  return (
    <div className="App">
      <p>Value: {value}</p>
      <button onClick={() => setValue(0)}>Generate Random Value</button>
    </div>
  );
}
export default App;
