import { Link } from 'react-router-dom'; 

export const NavBar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
        </>
    )
}
