import { useSelector } from "react-redux";

const Games = () => {
    const { user } = useSelector((state) => state.user);
    const { games } = user;

    console.log(games);

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