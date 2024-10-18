import { useEffect, useState } from "react";
import userService from "../../services/userService";
import { useSelector } from "react-redux";

const Games = () => {
    const token = useSelector((state) => state.auth.token);
    const id = useSelector((state) => state.auth.id);
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                console.log(token, id);
                const res = await userService.games(token, id);
                setGames(res);
            } catch (error) {
                console.error('Error fetching lobbies:', error);
            }
        };

        fetchGames();
    }, [id, token]);

    return (
        <div>
            {games && games.map(game => (
                <div key={game.appId}>
                    <img src={game.banner} alt={game.name} />
                    <h2 >{game.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Games;