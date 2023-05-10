import React, { useState } from 'react';
function SearchInput(props) {
  const { selectList, change } = props;
  const [state, setState] = useState({
    searchValue: '',
    selectValue: ''
  });
  function onInput(e) {
    // console.log(e.target.value);
    // onChange()
    setState({
      ...state,
      searchValue: e.target.value,
    });
    change({
      searchValue: e.target.value,
      selectValue: state.selectValue,
    });
  }
  function selectChange(e) {
    // console.log(e.target.value);
    // onChange
    setState({
      ...state,
      selectValue: e.target.value,
    });
    change({
      selectValue: e.target.value,
      searchValue: state.searchValue,
    });
  }

  // 你的代码
  return (
    <div>
      <select onChange={selectChange}>
        {selectList.map((d) => {
          return (
            <option key={d.label} value={d.value}>
              {d.label}
            </option>
          );
        })}
      </select>
      <input onInput={onInput}></input>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchInput
          selectList={[
            { label: '全部', value: '' },
            { label: '图片', value: 'image' },
            { label: '视频', value: 'video' },
            { label: '音乐', value: 'audio' },
            { label: '文档', value: 'file' },
          ]}
          change={(e) => {
            console.log(e);
          }}
        ></SearchInput>
      </div>
    );
  }
}

export default App;
