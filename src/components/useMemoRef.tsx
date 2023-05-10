import React, { useState, useCallback, useMemo, useRef } from 'react';
export default function Parent(props) {
  const [state, setState] = useState(1);
  const ref = useRef(1);
  const obj = useMemo(() => (
    {
      name: ref.current,
      state: state
    }
  ), []);

  // 父组件每次渲染, 会重`新创建 setName 函数
  const setName = useCallback(() => {
    ref.current++;
    setState((state) => state + 1);
  }, []);

  console.log('父组件渲染');

  return (
    <div>
      memo.name: {obj.name} memo.state: {obj.state} ref: {ref.current}
      <button onClick={setName}>点击父组件, 父组件渲染</button>
    </div>
  );
}
