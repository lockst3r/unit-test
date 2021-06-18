import React from "react";

const Mailbox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox_test">Messages</span>
      {unreadMessages.length > 0 && (
        <span className="mailbox_count">{unreadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
