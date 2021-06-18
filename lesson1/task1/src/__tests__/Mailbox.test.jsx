import { expect, it } from "@jest/globals";
import { shallow } from "enzyme";
import Mailbox from "../Mailbox";
import React from "react";

describe("Mailbox", () => {
  it("Should not render count if no unread messages", () => {
    const wrappedComponent = shallow(<Mailbox unreadMessages={[]} />);
    expect(wrappedComponent.find(".mailbox_count").exists()).toEqual(false);
  });

  it("Should render corect count of unread messages", () => {
    const unreadMessages = [1, 2, 3];
    const wrappedComponent = shallow(
      <Mailbox unreadMessages={unreadMessages} />
    );

    expect(wrappedComponent.find(".mailbox_count").text()).toEqual("3");
  });
});
