import { IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function EmailRow({ id, title1, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isRead = localStorage.getItem(`emailReadStatus:${id}`) === "true";

  useEffect(() => {
    // Store the read status in local storage when it changes
    localStorage.setItem(`emailReadStatus:${id}`, isRead);
  }, [id, isRead]);

  const openMail = () => {
    const isRead = true; // Mark the email as read
    dispatch(
      selectMail({
        id,
        title1,
        subject,
        description,
        time,
        isRead,
      })
    );
    localStorage.setItem(`emailReadStatus:${id}`, isRead); // Store the updated read status in local storage
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className={`emailRow ${isRead ? "read" : "unread"}`}>
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
        {!isRead && (
          <IconButton>
            <FiberManualRecordIcon
              style={{ color: "blue", fontSize: "8px" }}
            />
          </IconButton>
        )}
      </div>
      <h3 className="emailRow-title">{title1}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
