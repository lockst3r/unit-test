import { shallow } from "enzyme";
import UserGreeting from "../UserGreeting";
import React from "react";

describe("UserGreeting", () => {
  it("Should display UserGreeting", () => {
    const wrappedComponent = shallow(<UserGreeting />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});