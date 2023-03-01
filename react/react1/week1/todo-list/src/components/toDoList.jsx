import todos from '../data/toDos';
import ToDoItem from './toDoItem';

export default function ToDoList() {
    return (
        <div className='toDoList'>
            <ul>
                {todos.map((todo) => {
                    return (
                        <ToDoItem
                            todo={todo}
                            description={todo.description}
                            date={todo.date}
                        />
                    );
                })}
            </ul>

        </div>
    )
}