import { shallow } from "enzyme";
import Logout from "../Logout";
import React from "react";

describe("Logout", () => {
  it("Should check that the callback have been called ", () => {
    const mockLogin = jest.fn();
    const wrappedComponent = shallow(<Logout onLogout={mockLogin} />);
    wrappedComponent.find(".logout").simulate("click");
    expect(mockLogin).toBeCalled();
  });
});