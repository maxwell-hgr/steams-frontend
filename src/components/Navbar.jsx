//import authService from "../services/authService";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    // const handleLogout = () => {
    //     authService.logout();
    // };

    return (
        <nav id="nav">
            <Link to="/">
                <h2>STEAMS</h2>
            </Link>
            <ul id="nav-links">
                <li>
                    <NavLink to="/">
                        HOME
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/lobbies">
                        CREATE
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/friends">
                        FRIENDS
                    </NavLink>
                </li>
            </ul>
            <h3><NavLink to="/login">Login</NavLink></h3>
        </nav>
    );
};

export default Navbar;