import { useState } from "react";
import userService from "../services/authService";

const User = () => {
    const [user, setUser] = useState(null);
    const [steamUrl, setSteamUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await userService.profile(steamUrl);
        setUser(res);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={e => setSteamUrl(e.target.value)}
                    value={steamUrl}
                    placeholder="Insira a Steam URL"
                />
                <input
                    type="submit"
                    value="Pesquisar perfil"
                />
            </form>
            <h1>User info</h1>
            {user ? (
                <div>
                    <p>Nome: {user.personaname}</p>
                    <p>Steam ID: {user.steamid}</p>
                    <img src={user.avatar} alt="User avatar" />
                </div>
            ) : (
                <p>Nenhum usuário encontrado.</p>
            )}
        </div>
    );
};

export default User;
