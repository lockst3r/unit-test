import { expect, it } from "@jest/globals";
import { shallow } from "enzyme";
import User from "../User";
import React from "react";

describe("User", () => {
  it("Should render name", () => {
    const renderText = "Naruto Uzumaki";
    const wrappedComponent = shallow(<User name={renderText} />);
    expect(wrappedComponent.find(".user__name").text()).toEqual(
      "Naruto Uzumaki"
    );
  });

  it("Shoud render age", () => {
    const renderAge = 55;
    const wrappedComponent = shallow(<User age={renderAge} />);

    expect(wrappedComponent.find(".user__age").text()).toEqual("55");
  });
});
