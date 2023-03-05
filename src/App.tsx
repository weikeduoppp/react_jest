import React from 'react';
import { Button } from 'antd';
import Title from "components/Title";
import AuthButton from "components/AuthButton";
// import HookTest from "components/HookTest";
// import HookTest from "components/usePrevious";
// import HookTest from "components/useLayoutEffect";
// import HookTest from "components/useLastest";
import HookTest from "components/useMemoCallback";
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      {/* <Title type="small" title="打字" /> */}
      <HookTest />
      <AuthButton>登录</AuthButton>
      <Button>点我</Button>
    </div>
  )
}

export default App;