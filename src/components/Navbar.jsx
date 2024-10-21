//import authService from "../services/authService";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import UserNavbar from "./UserNavbar";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

const Navbar = () => {

    const { auth } = useAuth();
    const { user } = useSelector((state) => state.user);
    const { username, photoUrl } = user;

    return (
        <nav id="nav">
            <Link to="/">
                <h2>STEAMS</h2>
            </Link>
            {auth && (
                <>
                    <ul id="nav-links">
                        <li>
                            <NavLink to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/lobby">
                                CREATE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/games">
                                GAMES
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <UserNavbar photoUrl={photoUrl} username={username} />
                    </div>
                </>)
            }

        </nav >
    );
};

export default Navbar;