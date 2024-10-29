import { useSelector } from "react-redux";
import GameCard from "../../components/GameCard";

const Games = () => {
    const { user } = useSelector((state) => state.user);
    const { games } = user;

    console.log(games);

    return (
        <div>
            {games.map((game) => (
                <GameCard key={game.appId} banner={game.banner} name={game.name} />
            ))}
        </div>
    );
};

export default Games;