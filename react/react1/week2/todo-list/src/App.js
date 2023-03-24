import ToDoList from "./components/ToDoList";
import { Timer } from "./components/Timer";
import todos from "./data/todos";
import { useState } from "react";
import "./App.css";

const newTodosArray = [
  "Pick up the kids",
  "Edit CV",
  "Go shopping",
  "Make a meal plan",
  "Write a cover letter",
  "Search for a job",
  "Make family plans for the weekend",
  "Clean the house",
];

const ids = [1, 2, 3];

function App() {
  const [toDoList, setTodos] = useState(todos);

  const addRandomTodo = () => {
    const newToDo = {
      id: ids[ids.length - 1] + 1,
      description:
        newTodosArray[Math.floor(Math.random() * newTodosArray.length)],
    };
    ids.push(newToDo.id);
    setTodos((prevTodos) => {
      return [...prevTodos, newToDo];
    });
  };

  function deleteTodo(e) {
    const todoToDelete = e.target.parentNode.id;
    const newToDos = toDoList.filter(
      (todo) => todo.id !== parseInt(todoToDelete)
    );
    setTodos(newToDos);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Timer />
      <div className="addTodoButton">
        <button onClick={addRandomTodo}>Add a random to-do</button>
      </div>
      <ToDoList toDoList={toDoList} onDelete={deleteTodo} />
    </div>
  );
}

export default App;