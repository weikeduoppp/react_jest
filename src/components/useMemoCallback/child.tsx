import React, { memo } from 'react';
function Child(props) {
  console.log('子组件渲染');

  return <div>child</div>;
}
export default memo(Child);
