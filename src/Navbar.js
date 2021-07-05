import react from 'react';
import { NavLink } from 'react-router-dom';

const Navbar =()=>{


    return(
        <>
        <NavLink to="/" className="homeNav">
            <nav className="navbar">
                <h1>React Redux Contact App</h1>
            </nav>
        </NavLink>
        </>
    )
}

export default Navbar;