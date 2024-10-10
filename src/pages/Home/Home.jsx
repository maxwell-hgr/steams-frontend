import { useEffect, useState } from "react";
import lobbyService from "../../services/lobbyService";
import LobbyCard from "../../components/LobbyCard";

const Home = () => {
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        const fetchLobbies = async () => {
            try {
                const user = localStorage.getItem("user");
                const { token } = JSON.parse(user);
                const lobbies = await lobbyService.getUserLobbies(token);
                setLobbies(lobbies);
            } catch (error) {
                console.error('Error fetching lobbies:', error);
            }
        };

        fetchLobbies();
    }, []);

    return (
        <div>
            <h1>Lobbies</h1>
            {lobbies && lobbies.map((lobby) => (
                <LobbyCard key={lobby.id} name={lobby.name} gameCode={lobby.gameCode} users={lobby.users} />
            ))}
        </div>
    );

};

export default Home;