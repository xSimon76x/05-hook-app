
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from '../../hooks/useTodo'

export const TodoApp = () => {

    const {
        state,
        todosCount,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    } = useTodo();

    return (
        <>
            <h1>Todo: {todosCount}, <small>pendientes: {pendingTodosCount} </small></h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todoList={state} onDeleteTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>

            </div>
        </>
    )
}
