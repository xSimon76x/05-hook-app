import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Tiempo',
        done: false,
    }
]

export const TodoApp = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (todo) => {
        console.log('asd ', todo.current.value)
    }

    return (
        <>
            <h1>Todo: 10, <small>pendientes: 1</small></h1>
            <hr />

            <div className="row">

                <div className="col-7">
                    <TodoList todoList={state} />
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
