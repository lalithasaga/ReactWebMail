import React from "react";
import "./Inbox.css";
import Emailrow from "./Emailrow";
import { useSelector } from "react-redux";

function Inbox({ emails }) {
  const loggedInEmail = useSelector((state) => state.Auth.email);
  const isRead = useSelector((state) => state.mail.isRead);

  const filteredEmails = emails.filter((email) => {
    const toEmail = email.data.to.replace(/[@.]/g, "");
    const fromEmail = email.data.from.replace(/[@.]/g, "");

    return toEmail === loggedInEmail;
  });

  return (
    <div className="emailList">
      <div className="emailList-list">
        {filteredEmails.map(({ id, data: { to, from, subject, message, timestamp } }) => (
          <Emailrow
            id={id}
            key={id}
            title1={from}
            title2={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
            isRead={isRead[id] || false} // Pass the read status from Redux
          />
        ))}
      </div>
    </div>
  );
}

export default Inbox;