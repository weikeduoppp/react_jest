import React from 'react';
import { Button } from 'antd';
import Title from "components/Title";
import AuthButton from "components/AuthButton";
const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      {/* <Title type="small" title="打字" /> */}
      <AuthButton>登录</AuthButton>
      <Button>点我</Button>
    </div>
  )
}

export default App;