import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage, LoginPage, HomePage } from './index';


export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/login" element={ <LoginPage /> } />

                {/* forma para controlar, cuando se quiere ir a una ruta NO existente */}
                {/* <Route path="/*" element={ <LoginPage /> } /> */}
                <Route path="/*" element={ <Navigate to="/about" /> } />

            </Routes>
        </>
    )
}
