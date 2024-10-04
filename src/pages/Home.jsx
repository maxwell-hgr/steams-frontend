import { useState } from "react";
const Home = () => {
    const [lobbies, setLobbies] = useState([]);



    return (
        <div>
            <h1>Lobbies</h1>
            {lobbies && lobbies.map((lobby) => (
                <h2 key={lobby.id}>{lobby.id}</h2>
            ))}
            <p>
                *Achievements
            </p>
        </div>
    );

};

export default Home;