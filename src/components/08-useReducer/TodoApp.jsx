import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del Tiempo',
    //     done: false,
    // }
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {


    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(action);
    }
    
    const handleRemoveTodo = (id) => {
        const action = {
            type: '[TODO] remove todo',
            payload: id
        }
        dispatch(action);
         
    };

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: id
        }

        dispatch(action);
         
    };

    return (
        <>
            <h1>Todo: 10, <small>pendientes: 1</small></h1>
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
