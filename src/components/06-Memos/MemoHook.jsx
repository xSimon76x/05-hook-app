import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks'

const heavyStuff = ( initialIteracion = 100 ) => {
     
    for (let index = 0; index < initialIteracion; index++) {
        console.log("me estoy repitiendo");
        
    }

    return `${initialIteracion} repetidas!`
};

export const MemoHook = () => {

    const { counter, increment } = useCounter(200);
    const [change, setChange] = useState(false);

    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <div>MemoHook</div>

            <h1>Counter: <small>{counter}</small></h1>
            <hr />

            <h4>{ memorizeValue }</h4>

            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-primary'
                onClick={() => setChange(!change)}
            >
                Show/Hide {JSON.stringify(change)}
            </button>
        </>
    )
}
