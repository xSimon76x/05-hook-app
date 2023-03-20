import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // usando useCallback la funcion a dentro, se mantiene en el mismo espacio en memoria
    // por lo cual memoriza la funcion
    const increment = useCallback(
        // tambien se pueden desestructurar los objetos, si vinieran como argumento
        (value) => {
            console.log("me volvi a renderizar :( ")
            setCounter((c) => c + value);
        },
        [],
    )

    // haciendo o usando el useEffect la funcion cambia a otro espacio en memoria
    // por lo que se tiene que volver a renderizar.
    // useEffect(() => {
    //     return increment();
    
    // }, [third])
    
    

    return (
        <>
            <div>use CallbackHook: {counter} </div>
            <hr />

            <ShowIncrement increment={increment}/>
        </>
    )
}
