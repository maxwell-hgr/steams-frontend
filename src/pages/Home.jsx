import { useEffect, useState } from "react";
import { api, requestConfig } from "../utils/config";

const Home = () => {
    const [lobbies, setLobbies] = useState([]);

    useEffect(() => {
        async function fetchLobbies() {
            const config = requestConfig("GET", null);
            try {
                const res = await fetch(api + "/lobbies", config);
                let data = await res.json();
                if (!Array.isArray(data)) {
                    data = [];
                }
                setLobbies(data);
            } catch (err) {
                console.error("Error fetching lobbies:", err);
                setLobbies([]);
            }
        }
        fetchLobbies();
    }, []);

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

}

export default Home;