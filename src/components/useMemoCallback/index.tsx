import React, { useState, useCallback, useMemo } from 'react';
import Child from './child';
export default function Parent(props) {
  const [state, setState] = useState(1);

  const obj = useMemo(() => {
    name: 1;
  }, []);

  // 父组件每次渲染, 会重新创建 setName 函数
  const setName = useCallback(() => {
    setState((state) => state + 1);
  }, []);

  console.log('父组件渲染');

  return (
    <div>
      Parent
      <button onClick={setName}>点击父组件, 父组件渲染</button>
      <Child setName={setName} obj={obj} />
    </div>
  );
}
