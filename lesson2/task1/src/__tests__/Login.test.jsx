import { expect, it } from "@jest/globals";
import { shallow } from "enzyme";
import Login from "../Login";
import React from "react";

describe("Login", () => {
  it("Should check that the callback have been called ", () => {
    const mockLogin = jest.fn();
    const wrappedComponent = shallow(<Login onLogin={mockLogin} />);
    wrappedComponent.find(".login").simulate("click");
    expect(mockLogin).toBeCalled();
  });
});
