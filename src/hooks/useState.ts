// 

interface hook {
  memoizedState: any; // 保存当前 hook 的 state
  next: hook;         // next 指向下一个 hook
}

let firstHook: hook = null;
// lastHook用来标记当前的最后一个 hook，在下一次新增 hook 的时候，可以快速的挂载到当前的 lastHook 的 next 上，这样可以避免了循环 firstHook 获取最后一个 hook，时间复杂度从 On 降低到 O1。
let lastHook: hook = null;

function mountHookLinkedList() {
  const hook = {
    memoizedState: null,
    next: null,
  };

  if (lastHook === null) {
    firstHook = lastHook = hook;
  } else {
    lastHook = lastHook.next = hook;
  }

  return lastHook;
}

function useState(init: any): [any, Function] {
  const hook = mountHookLinkedList()
  hook.memoizedState = init;
  const setState = () => {

  }
  return [hook.memoizedState, setState]
}

function TeamsInfo() {
  const [age, setAge] = useState(18);
  const [name, setName] = useState('income');

  console.log(`Age: ${age}; Name: ${name}`);

  return [setAge, setName];
}

const [setAge, setName] = TeamsInfo();
console.log(firstHook);