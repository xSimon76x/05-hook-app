import { TodoItem } from "./TodoItem"

export const TodoList = ({todoList}) => {
    return (
        <ul className="list-group">
            {
                todoList.map(todo => (

                    <TodoItem key={todo.id} todo={todo} />

                ))
            }
        </ul>
    )
}
