/* 
  第一点：先确定参数，useCreation 的参数与useMemo的一致，第一个参数是函数，第二个参数参数是可变的数组
  第二点：我们的值要保存在 useRef中，这样可以将值缓存，从而减少无关的刷新
  第三点：更新值的判断，怎么通过第二个参数来判断是否更新 useRef里的值。

*/
import { useRef } from 'react';
import type { DependencyList } from 'react';

function isIdentical(prev: DependencyList, next: DependencyList) {
  if(prev === next) return true;
  for (let i = 0; i < prev.length; i++) {
    if(!Object.is(prev[i], next[i])) {
      return false
    }
  }
  return true;
}

export default function useCreation<T>(fn: () => T, dependence: DependencyList): T | undefined {
  const { current } = useRef({
    dependence,
    value: undefined,
    init: false
  });

  if(!current.init || !isIdentical(current.dependence, dependence)) {
    current.dependence = dependence;
    current.value = fn();
    current.init = true;
  }

  return current.value;
}
