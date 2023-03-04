import React, {
  FC,
  useState,
} from 'react';
import usePrevious from '../hooks/usePrevious';

const HookTest = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count)
  console.log("修改: ", prevCount, count);
  return <div onClick={() => {
    console.log("点击了")
    setCount(count + 1);
  }}>usePrevious</div>;
};

export default HookTest;
