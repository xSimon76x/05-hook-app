import { memo } from "react"

// Aveces es mejor importar React, y de ahi usar el memo
// para memorizar el componente -> React.memo()
export const Small = memo(({value}) => {

    console.log("Me volvi a dibujar :(");

    //TODO memoriza el componente, y este (en este caso)
    // solo se vuelve a renderizar, cuando sus props tengan algun
    // cambio de estado, sino, no se renderiza nuevamente

    return (
        <small>{value}</small>
    )
})
