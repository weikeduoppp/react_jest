import React from "react";
import { render } from "@testing-library/react";
import Title from "components/Title";

// 快照更新 jest --updateSnapshot

describe('Title', () => {

  it("可以正确渲染小字", () => {
    const { baseElement } = render(<Title type="small" title="打字" />);
    expect(baseElement).toMatchSnapshot();
  });
})