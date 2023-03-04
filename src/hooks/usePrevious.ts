import { useEffect, useLayoutEffect, useRef } from "react";

export default function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>();

  // !! 异步执行
  useEffect(() => {
    console.log('执行useEffect');
    ref.current = state;
  });
  useLayoutEffect(() => {
    console.log('执行useLayoutEffect');
  })
  
  // 返回的是上一个值
  console.log('usePrevious', ref.current);
  return ref.current;
}
