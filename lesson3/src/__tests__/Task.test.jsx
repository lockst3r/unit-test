import React from "react";
import { shallow } from "enzyme";
import Task from "../Task";

describe("<Task />", () => {
  it("Should display done task", () => {
    const props = {
      text: "text",
      id: "some-id-1",
      done: true,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapperComponent = shallow(<Task {...props} />);
    expect(wrapperComponent).toMatchSnapshot();
  });

  it("Should display undone task", () => {
    const props = {
      text: "text",
      id: "some-id-1",
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapperComponent = shallow(<Task {...props} />);
    expect(wrapperComponent).toMatchSnapshot();
  });

  it("Should update event on checkbox cheked", () => {
    const props = {
      text: "text",
      id: "some-id-1",
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapperComponent = shallow(<Task {...props} />);
    wrapperComponent.find(".list-item__checkbox").simulate("change");
    expect(props.onChange).toBeCalledWith("some-id-1");
  });

  it("Should delete task", () => {
    const props = {
      text: "text",
      id: "some-id-1",
      done: false,
      onChange: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapperComponent = shallow(<Task {...props} />);
    wrapperComponent.find(".list-item__delete-btn").simulate("click");
    expect(props.onDelete).toBeCalledWith("some-id-1");
  });
});
