import React from "react";
import "./Inbox.css";
import { useSelector } from "react-redux";
import SentRow from "./SentRow";

function Sent({ emails }) {
    const loggedInEmail = useSelector((state) => state.Auth.email);
  
    const filteredEmails = emails.filter((email) => {
      const toEmail = email.data.to.replace(/[@.]/g, "");
      const fromEmail = email.data.from.replace(/[@.]/g, "");
  
      console.log(toEmail,fromEmail);
  
      return  fromEmail === loggedInEmail;
    });
  return (
    <div className="emailList">
      <div className="emailList-list">
        {filteredEmails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <SentRow
            id={id}
            key={id}
            title2={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Sent;
