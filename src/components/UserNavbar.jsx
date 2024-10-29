import { NavLink, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import './UserNavbar.css';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const UserNavbar = (data) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { photoUrl, username } = data;
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const handleLogout = () => {
        navigate('/login');
        dispatch(logout());
    };

    return (
        <div className="profile-menu" ref={menuRef}>
            <div className="profile-header" onClick={toggleMenu}>
                <span className="profile-username">
                    {username} <FaChevronDown className="dropdown-arrow" />
                </span>
                <div className="profile-image-container">
                    <NavLink to='/profile'><img src={photoUrl} alt="Profile" className="profile-image" /></NavLink>
                </div>
            </div>
            {isOpen && (
                <div className="profile-dropdown">
                    <ul>
                        <li onClick={() => setIsOpen(false)}><NavLink to='/profile'>Meu perfil</NavLink></li>
                        <li onClick={handleLogout}><a href='/logout'>Finalizar sessão</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};
export default UserNavbar;
