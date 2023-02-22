import todos from '../data/toDos';
import ToDoItem from './toDoItem';

export default function ToDoList() {
    return (
        <div className='toDoList'>
            <ul>
                {todos.map((todo) => {
                    return (
                        <ToDoItem
                            key={todos.indexOf(todo) + 1}
                            description={todo.description}
                            date={todo.date}
                        />
                    );
                })}
            </ul>

        </div>
    )
}