import { useState } from "react"

export const CounterApp = () => {

    const [ counter, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    const { counter1, counter2, counter3 } = counter

    // Independiente de la posicion de la propiedad, el operador "spreed" trae
    // lo del objeto, y puedes sobreescribir la propiedad que deseas
        
    return (
        <>
            <div>CounterApp</div>

            <h1>counter1: {counter1}</h1>
            <h1>counter2: {counter2}</h1>
            <h1>counter3: {counter3}</h1>

            <hr />

            <button className="btn btn-primary" onClick={() => setCounter({
                ...counter, counter1: counter1 +1
            })}>+1</button>
        </>
    )
}
