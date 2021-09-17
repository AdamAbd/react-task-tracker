import React from "react";
import Task from "./Task";

export default function Tasks(props) {
  return (
    <div>
      {props.task.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            onDelete={props.onDelete}
            onToogle={props.onToogle}
          >
            {task.text}
          </Task>
        );
      })}
    </div>
  );
}
