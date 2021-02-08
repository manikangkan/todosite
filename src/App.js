import React, { useState } from "react";
import ToDoList from "./ToDoList";
import("./App.css");
export default function App() {
  const [content, setContent] = useState("");
  const [display, setDisplay] = useState([]);

  function getContent(event) {
    setContent(event.target.value);
  }

  function displayContent() {
    setDisplay((oldData) => {
      return [...oldData, content];
    });
    setContent("");
  }

  function delItem(id) {
    console.log("Delete Item");

    setDisplay((oldData) => {
      return oldData.filter((ele, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="container__header">
        <img src={process.env.PUBLIC_URL + "me.jpeg"} alt="" />
        <p>Manikangkan Das</p>
      </div>
      <div className="container__main">
        <div className="main__input">
          <input
            type="text"
            placeholder="add an item"
            onChange={getContent}
            value={content}
            autoFocus
            required
          />
          <button className="add" onClick={displayContent}>
            +
          </button>
        </div>
        <div className="input__content">
          <ul>
            {display.map((value, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  val={value}
                  onSelect={delItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
