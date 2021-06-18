import { expect, it } from "@jest/globals";
import { shallow } from "enzyme";
import Message from "../Message";
import React from "react";

describe("Message", () => {
  it("Must render the received text", () => {
    const renderText = "text for render";
    const wrappedComponent = shallow(<Message text={renderText} />);
    expect(wrappedComponent.find(".message").text()).toEqual("text for render");
  });

  it("Shoud to check if the component is hidden", () => {
    const wrappedComponent = shallow(<Message text={""} />);

    expect(wrappedComponent.find(".mailbox_count").exists()).toEqual(false);
  });
});
