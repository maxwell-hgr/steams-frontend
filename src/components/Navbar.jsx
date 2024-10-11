//import authService from "../services/authService";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import UserNavbar from "./UserNavbar";

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
            <div>
                <UserNavbar username="dole" profileImageUrl="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1986840/548ed028087f655ac27720723081bece8e5d5f88.gif" notificationCount="3" />
            </div>
        </nav>
    );
};

export default Navbar;