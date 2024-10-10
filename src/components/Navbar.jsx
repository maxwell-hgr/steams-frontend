import authService from "../services/authService";

const Navbar = () => {
    const handleLogout = () => {
        authService.logout();
    };

    return (
        <div>
            <span onClick={handleLogout}>Sair</span>
        </div>
    );
};

export default Navbar;