export default function ToDoItem(props) {
    return (
        <li className="toDoItem">
            <span>{props.description}</span>,
            <span>{props.date}</span>
        </li>
    )
}