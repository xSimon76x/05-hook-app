import { useFetch, useCounter } from "../../hooks"
import { LoadingQuote, Quote } from "../03-examples"


export const Layout = () => {

    const { counter, increment } = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/1${counter}`);

    const {quote, author} = !!data && data[0]
    
    //Este es un hook, parecido al useEffect, pero que se renderiza
    //cuando todo lo demas del componente actual ya fue renderizado
    //y puede ir cambiando en base a una dependencia
    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading ?
                    <LoadingQuote />
                :
                    <Quote quote={quote} author={author} />
            }

            <button 
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}
            >
                Next quote
            </button>
        </>
    )
}
