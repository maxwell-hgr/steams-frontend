import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import userService from "../../services/userService";
import './Lobby.css';

const Lobby = () => {
    const [appId, setAppId] = useState();
    const [gameName, setGameName] = useState('Select Game');
    const [gameBanner, setGameBanner] = useState('');
    const [lobbyName, setLobbyName] = useState('');
    const [invitedFriends, setInvitedFriends] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const token = useSelector((state) => state.auth.token);
    const id = useSelector((state) => state.auth.id);
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

    const friends = [
        { id: 1, name: 'Friend 1', avatar: 'https://image.url/friend1.jpg' },
        { id: 2, name: 'Friend 2', avatar: 'https://image.url/friend2.jpg' },
        { id: 3, name: 'Friend 3', avatar: 'https://image.url/friend3.jpg' },
        { id: 4, name: 'Friend 4', avatar: 'https://image.url/friend4.jpg' },
        { id: 5, name: 'Friend 5', avatar: 'https://image.url/friend5.jpg' }
    ];

    const handleGameSelect = (game) => {
        setGameName(game.name);
        setGameBanner(game.banner);
        setAppId(game.appId);
        setIsDropdownOpen(false);
    };

    const handleFriendInvite = (friendId) => {
        if (invitedFriends.includes(friendId)) {
            setInvitedFriends(invitedFriends.filter(id => id !== friendId));
        } else {
            setInvitedFriends([...invitedFriends, friendId]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const invitedFriendNames = invitedFriends.map(friendId =>
            friends.find(friend => friend.id === friendId).name
        );
        const formData = {
            lobbyName,
            appId,
            invitedFriends: invitedFriendNames
        };

        console.log('Form Data Submitted:', formData);
        // Aqui você pode enviar os dados para sua API ou outro destino
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
                        {friends.map(friend => (
                            <img
                                key={friend.id}
                                src={friend.avatar}
                                alt={friend.name}
                                className={`friend-avatar ${invitedFriends.includes(friend.id) ? 'invited' : ''}`}
                                onClick={() => handleFriendInvite(friend.id)}
                            />
                        ))}
                    </div>
                </div>
                <button type="submit" className='submit-btn'>CREATE</button>
            </form>
        </div>
    );
};

export default Lobby;
