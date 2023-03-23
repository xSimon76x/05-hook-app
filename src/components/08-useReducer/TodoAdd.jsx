import { useRef } from "react"

export const TodoAdd = ({handleNewTodo}) => {

    const inputRef = useRef();

    return (
        <form>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
                onClick={() => handleNewTodo(inputRef)}
            >
                Agregar
            </button>
        </form>
    )
}
