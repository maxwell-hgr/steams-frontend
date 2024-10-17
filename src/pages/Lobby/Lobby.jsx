import { useState } from 'react';
import './Lobby.css';

const Lobby = () => {
    const [selectedGame, setSelectedGame] = useState('Red Dead Redemption 2');
    const [lobbyName, setLobbyName] = useState('');
    const [invitedFriends, setInvitedFriends] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const games = [
        'Red Dead Redemption 2',
        'The Witcher 3',
        'Cyberpunk 2077',
        'Grand Theft Auto V',
        'Elden Ring'
    ];

    const friends = [
        { id: 1, name: 'Friend 1', avatar: 'https://image.url/friend1.jpg' },
        { id: 2, name: 'Friend 2', avatar: 'https://image.url/friend2.jpg' },
        { id: 3, name: 'Friend 3', avatar: 'https://image.url/friend3.jpg' },
        { id: 4, name: 'Friend 4', avatar: 'https://image.url/friend4.jpg' },
        { id: 5, name: 'Friend 5', avatar: 'https://image.url/friend5.jpg' }
    ];

    const handleGameSelect = (game) => {
        setSelectedGame(game);
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
            selectedGame,
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
                        {selectedGame}
                        <span className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                    </div>

                    {isDropdownOpen && (
                        <ul className="game-dropdown-list">
                            {games.map(game => (
                                <li
                                    key={game}
                                    onClick={() => handleGameSelect(game)}
                                    className="dropdown-item"
                                >
                                    {game}
                                </li>
                            ))}
                        </ul>
                    )}

                    <img
                        src={`https://image.url/${selectedGame.toLowerCase().replace(/ /g, '-')}.jpg`}
                        alt={selectedGame}
                        className="game-image"
                    />
                </div>

                <div className="friend-list">
                    <button type="button" className="invite-btn">Invite Friends</button>
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



                <button type="submit" className="submit-lobby-btn">Submit Lobby</button>
            </form>
        </div>
    );
};

export default Lobby;
