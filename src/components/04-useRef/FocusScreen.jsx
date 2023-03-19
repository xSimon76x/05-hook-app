import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
        console.log(inputRef.current.id)
    }

    return (
        <>
            <h1>Focus Ref</h1>    
            <hr />

            <input 
                id="1"
                ref={inputRef}
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <input 
                id="2"
                ref={inputRef}
                type="text" 
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set focus
            </button>
        </>
    )
}
