/**
 * useState
 */
function mountState(initialState){
  const hook = mountWorkInProgressHook();
  if (typeof initialState === 'function') {initialState = initialState() } // 如果 useState 第⼀个参数为函数，执⾏函数得到初始化state
  hook.memoizedState = hook.baseState = initialState;
  const queue = (hook.queue = { ... }); // 负责记录更新的各种状态。
  const dispatch = (queue.dispatch = (dispatchAction.bind(
  null,currentlyRenderingFiber,queue, ))) // dispatchAction 为更新调度的主要函数
  return [hook.memoizedState, dispatch];
}

function dispatchAction(fiber, queue, action){
  /* 第⼀步：创建⼀个 update */
  const update = { ... }
  const pending = queue.pending;
  if (pending === null) { /* 第⼀个待更新任务 */
    update.next = update;
  } else { /* 已经有带更新任务 */
    update.next = pending.next;
    pending.next = update;
  }
  if( fiber === currentlyRenderingFiber ){
    /* 说明当前fiber正在发⽣调和渲染更新，那么不需要更新 */
  }else{
    if(fiber.expirationTime === NoWork && (alternate === null ||
      alternate.expirationTime === NoWork)){
      const lastRenderedReducer = queue.lastRenderedReducer;
      const currentState = queue.lastRenderedState; /* 上⼀次的
      state */
      const eagerState = lastRenderedReducer(currentState, action); /* 这⼀次新的
      state */
      if (is(eagerState, currentState)) { /* 如果每⼀个都
        改变相同的state，那么组件不更新 */
        return
      }
    }
  }
  scheduleUpdateOnFiber(fiber, expirationTime); /* 发起调度更新 */
}
function updateReducer(){
  // 第⼀步把待更新的pending队列取出来。合并到 baseQueue
  const first = baseQueue.next;
  let update = first;
  do {
  /* 得到新的 state */
  newState = reducer(newState, action);
   } while (update !== null && update !== first);
  hook.memoizedState = newState;
  return [hook.memoizedState, dispatch];
}

/**
 * effect
 */
function mountEffect(create,deps){
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  currentlyRenderingFiber.effectTag |= UpdateEffect | PassiveEffect;
  hook.memoizedState = pushEffect(
  HookHasEffect | hookEffectTag,
  create, // useEffect 第⼀次参数，就是副作⽤函数
  undefined,
  nextDeps, // useEffect 第⼆次参数，deps
   )
}

function updateEffect(create,deps){
  const hook = updateWorkInProgressHook();
  if (areHookInputsEqual(nextDeps, prevDeps)) { /* 如果deps项没有发⽣变化，那么更新effect
  list就可以了，⽆须设置 HookHasEffect */
  pushEffect(hookEffectTag, create, destroy, nextDeps);
  return;
   }
  /* 如果deps依赖项发⽣改变，赋予 effectTag ，在commit节点，就会再次执⾏我们的effect */
  currentlyRenderingFiber.effectTag |= fiberEffectTag
  hook.memoizedState = pushEffect(HookHasEffect |
  hookEffectTag,create,destroy,nextDeps)
}

/**
 * useRef
 */

function mountRef(initialValue) {
  const hook = mountWorkInProgressHook();
  const ref = {current: initialValue};
  hook.memoizedState = ref; // 创建ref对象。
  return ref;
}

function updateRef(initialValue){
  const hook = updateWorkInProgressHook()
  return hook.memoizedState // 取出复⽤ref对象。
}

/**
 * useMemo
 */

function mountMemo(nextCreate,deps){
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function updateMemo(nextCreate,nextDeps){
  const hook = updateWorkInProgressHook();
  const prevState = hook.memoizedState;
  const prevDeps = prevState[1]; // 之前保存的 deps 值
  if (areHookInputsEqual(nextDeps, prevDeps)) { //判断两次 deps 值
  return prevState[0];
   }
  const nextValue = nextCreate(); // 如果deps，发⽣改变，重新执⾏
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}