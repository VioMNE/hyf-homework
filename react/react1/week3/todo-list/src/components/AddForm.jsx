// @ts-nocheck
import { useState } from "react";
import uniqid from "uniqid";

export const AddForm = ({ todos, setTodos }) => {
  const [inputDescription, setDescription] = useState("");
  const [inputDeadline, setDeadline] = useState("");

  const addHandler = () => {
    const newTodo = {
      id: uniqid(),
      description: inputDescription,
      deadline: inputDeadline,
    };

    if (newTodo.description !== "" && newTodo.deadline !== null) {
      const today = new Date();
      const deadline = new Date(newTodo.deadline);
      if (deadline < today) {
        alert(
          "Deadline has already passed. Please change it to either today or later!"
        );
      } else {
        setTodos(todos.concat(newTodo));
      }
    } else {
      alert("Enter both a description and a deadline");
    }

    setDescription("");
    document.getElementById("descriptionInput").value = "";
    setDeadline("");
  };

  return (
    <div className="addBar">
      <label>Description </label>
      <input
        id="descriptionInput"
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <br />
      <label>Deadline </label>
      <input
        id="dealineInput"
        type="date"
        onChange={(e) => {
          setDeadline(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={addHandler}>Add New Todo</button>
    </div>
  );
};
