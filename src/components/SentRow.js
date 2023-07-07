import { IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { useDispatch } from "react-redux";
import { selectMail } from "./Redux/MailSlice";
import { useNavigate } from "react-router-dom";

function SentRow({ id, title1, title2, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title1,
        title2,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title2}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default SentRow;
