import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import userService from "../../services/userService";
import './Lobby.css';

const Lobby = () => {
    const token = useSelector((state) => state.auth.token);
    const id = useSelector((state) => state.auth.id);

    const [appId, setAppId] = useState();
    const [gameName, setGameName] = useState('Select Game');
    const [gameBanner, setGameBanner] = useState('');
    const [lobbyName, setLobbyName] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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


    const handleGameSelect = (game) => {
        setGameName(game.name);
        setGameBanner(game.banner);
        setAppId(game.appId);
        setIsDropdownOpen(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            lobbyName,
            appId,
        };

        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="lobby-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="lobby-name"
                    type="text"
                    placeholder="Lobby name"
                    value={lobbyName}
                    onChange={(e) => setLobbyName(e.target.value)}
                />

                <div className="game-selection">
                    <div
                        className="game-name-dropdown"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {gameName}
                        <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                    </div>

                    {isDropdownOpen && (
                        <div className="game-dropdown">
                            <input
                                type="text"
                                placeholder="Search game..."
                                className="game-search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <ul className="game-dropdown-list">
                                {filteredGames && filteredGames.map(game => (
                                    <div key={game.appId}>
                                        <li
                                            onClick={() => handleGameSelect(game)}
                                            className="dropdown-item"
                                        >
                                            {game.name}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {gameName !== "Select Game" &&
                    <img
                        src={gameBanner}
                        alt={gameBanner}
                        className="game-image"
                    />}


                <div className="friend-list">
                    <button type="button" className="invite-btn">Friends to Play {gameName}</button>
                    <div className="friends">
                    </div>
                </div>
                <button type="submit" className='submit-btn'>CREATE</button>
            </form>
        </div>
    );
};

export default Lobby;
