import ToDoList from "./components/ToDoList";
import { Timer } from "./components/Timer";
import { useState, useEffect } from "react";
import { AddForm } from "./components/AddForm";
import "./App.css";

const fetchUrl =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    addTodosFromAPI(fetchUrl);
  }, []);

  async function addTodosFromAPI(fetchUrl) {
    const response = await fetch(fetchUrl);
    const fetchedTodos = await response.json();
    setTodos(fetchedTodos);
  }

  const updateDescription = (e, description) => {
    const todoToUpdate = e.target.parentNode.id;
    const updatedTodo = todos.map((todo) => {
      if (String(todo.id) === String(todoToUpdate)) {
        todo.description = description;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  function deleteTodo(e) {
    const todoToDelete = e.target.parentNode.id;
    const newToDos = todos.filter(
      (todo) => String(todo.id) !== String(todoToDelete)
    );
    setTodos(newToDos);
  }

  return (
    <div className="App">
      <h1>Todo List </h1>
      <Timer />
      <AddForm todos={todos} setTodos={setTodos} />
      <ToDoList
        toDoList={todos}
        onDelete={deleteTodo}
        updateDescription={updateDescription}
      />
    </div>
  );
}

export default App;
