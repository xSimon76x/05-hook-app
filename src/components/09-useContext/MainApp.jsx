import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider";
import { AboutPage, LoginPage, HomePage, NavBar, NavBarBs } from './index';


export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>MainApp</h1> */}
            <NavBarBs />
            
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/login" element={ <LoginPage /> } />

                {/* forma para controlar, cuando se quiere ir a una ruta NO existente */}
                {/* <Route path="/*" element={ <LoginPage /> } /> */}
                <Route path="/*" element={ <Navigate to="/about" /> } />

            </Routes>
        </UserProvider>
    )
}
