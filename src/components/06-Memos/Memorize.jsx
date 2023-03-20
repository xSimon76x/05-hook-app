import { useState } from 'react';
import { useCounter } from '../../hooks'
import { Small } from './Small';


export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [change, setChange] = useState(false);

    return (
        <>
            <div>Memorize</div>

            <h1>Counter: <Small value={counter} /></h1>
            <hr />

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
