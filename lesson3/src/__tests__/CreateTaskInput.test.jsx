import React from "react";
import { shallow } from "enzyme";
import CreateTaskInput from "../CreateTaskInput";

describe("<CreateTaskInput />", () => {
  it("Should create task on submit", () => {
    const mockOnCreate = jest.fn();
    const fakeEvent = {
      target: {
        value: "Visit a doctor",
      },
    };

    const wrapperComponent = shallow(
      <CreateTaskInput onCreate={mockOnCreate} />
    );
    wrapperComponent.find(".create-task__input").simulate("change", fakeEvent);
    wrapperComponent.find(".create-task__btn").simulate("click");
    expect(mockOnCreate).toBeCalledWith("Visit a doctor");
  });

  it("Should create task on submit", () => {
    const mockOnCreate = jest.fn();
    const fakeEvent = {
      target: {
        value: "Visit a doctor",
      },
    };

    const wrapperComponent = shallow(
      <CreateTaskInput onCreate={mockOnCreate}/>
    );
    wrapperComponent.find(".create-task__input").simulate("change", fakeEvent);
    wrapperComponent.find(".create-task__btn").simulate("click");
    expect(wrapperComponent.find(".create-task__input").prop('value')).toEqual('');
  });

});



//props() = свойство елемента