
import React, { FC, useEffect, useState, useReducer, useRef, useLayoutEffect } from "react";

const initState = {
  count: 0
}

function reducer(state, [type, payload]) {
  switch (type) {
    case "count": 
      return {
        ...state,
        count: state.count + payload
      }
  }
  return state;
}

const HookTest = () => {
  const [count,setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initState)
  const fn = () => {
    console.log(state);
};
  const ref = useRef(fn);

  useLayoutEffect(() => {
      ref.current = fn;
  });
 

  useEffect(() => {
      setInterval(() => {
          // setCount(count + 1);
          // 把整个 state 的管理移动到 reducer 中，这将会消除 `useEffect` 内部对本地 state 的引用
          dispatch(["count", 1])
      }, 500);
  }, []);


  useEffect(() => {
      setInterval(() => ref.current(), 500);
  }, []);

  return <div>guang</div>;
  return (
    <div>1</div>
  );
};

export default HookTest;