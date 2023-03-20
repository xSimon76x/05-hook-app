import { memo } from "react"

export const Small = memo(({value}) => {

    console.log("Me volvi a dibujar :(");

    //TODO memoriza el componente, y este (en este caso)
    // solo se vuelve a renderizar, cuando sus props tengan algun
    // cambio de estado, sino, no se renderiza nuevamente

    return (
        <small>{value}</small>
    )
})
