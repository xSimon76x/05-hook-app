import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ quote, author}) => {

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
    const uref = useRef();

    //usado para el hook del useLayoutEffect tmb
    useLayoutEffect(() => {
        const { width, height } = uref.current.getBoundingClientRect();

        setBoxSize({ width, height });

    }, [quote])

    return (
        <>
            <blockquote 
                
                className="blockquote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={uref} className="mb-1">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
