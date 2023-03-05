import { useEffect, useRef } from 'react';

export default function useLastest<T>(state: T): T | undefined {
  const ref = useRef<T>(state);
  ref.current = state;

  // 返回的是上一个值
  console.log('useLastest', ref.current);
  return ref.current;
}
