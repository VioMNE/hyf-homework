import ToDoItem from "./ToDoItem";


export default function ToDoList(props) {
  if (props.toDoList.length === 0) {
    return (
      <div className="toDoList">
        <p>No items</p>
      </div>
    );
  } else {
    return (
      <div className="toDoList">
        <ul>
          {props.toDoList.map((todo) => {
            return (
              <ToDoItem todo={todo} key={todo.id} deleteTodo={props.onDelete} />
            );
          })}
        </ul>
      </div>
    );
  }
}
