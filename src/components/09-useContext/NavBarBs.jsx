import { NavLink } from 'react-router-dom'
export const NavBarBs = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounder-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">useContext</a>
             
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to='/about'
                        >
                            About
                        </NavLink>
                        <NavLink 
                            className={ ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            to='/login'
                        >
                            Login
                        </NavLink>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
