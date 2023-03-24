import { useState } from "react";
import "./ToDoItem.css";

const ToDoItem = (props) => {
  const [toDoStatus, setToDoStatus] = useState(false);

  return (
    <li className="toDoItem" key={props.todo.id} id={props.todo.id}>
      <label className={toDoStatus ? "done" : "notDone"}>{props.todo.description}</label>
      <input type="checkbox" checked={toDoStatus} onChange={() => setToDoStatus(!toDoStatus)} />
      <button onClick={props.deleteTodo}>Delete</button>
    </li>
  );
};

export default ToDoItem;

