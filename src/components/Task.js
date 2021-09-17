import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task(props) {
  return (
    <div
      className={`task ${props.task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => props.onToogle(props.task.id)}
    >
      <h3>
        {props.children}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
}
