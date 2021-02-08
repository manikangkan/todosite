import React from "react";

export default function ToDoList(props) {
  return (
    <li>
      {props.val}
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        x
      </button>
    </li>
  );
}
