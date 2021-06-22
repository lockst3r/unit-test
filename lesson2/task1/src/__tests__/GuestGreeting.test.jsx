import { shallow } from "enzyme";
import GuestGreeting from "../GuestGreeting";
import React from "react";

describe("GuestGreeting", () => {
  it("Should display GuestGreeting", () => {
    const wrappedComponent = shallow(<GuestGreeting />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});