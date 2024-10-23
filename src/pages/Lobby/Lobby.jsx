import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import userService from "../../services/userService";
import lobbyService from '../../services/lobbyService';
import './Lobby.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Lobby = () => {
    const token = useSelector((state) => state.auth.token);
    const id = useSelector((state) => state.auth.id);

    const [games, setGames] = useState([]);
    const [appId, setAppId] = useState();
    const [gameName, setGameName] = useState('Select Game');
    const [gameBanner, setGameBanner] = useState('');
    const [name, setName] = useState('');
    const [friends, setFriends] = useState([]);
    const [selectedFriends, setSelectedFriends] = useState([]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFriendsOpen, setIsFriendsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchFriend, setSearchFriend] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const res = await userService.games(token, id);
                setGames(res);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, [id, token]);

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredFriends = friends.filter(friend =>
        friend.username.toLowerCase().includes(searchFriend.toLowerCase())
    );

    const handleGameSelect = (game) => {
        setSelectedFriends([]);
        setGameName(game.name);
        setGameBanner(game.banner);
        setAppId(game.appId);
        getFriendsWithGame(game.appId);
        setIsDropdownOpen(false);
    };

    const getFriendsWithGame = async (appId) => {
        try {
            const res = await userService.friendsWithGame(token, appId);
            setFriends(res);
        } catch (error) {
            console.error('Error fetching friends:', error);
        }
    };

    const handleFriendSelect = (friend) => {
        if (!selectedFriends.includes(friend)) {
            setSelectedFriends([...selectedFriends, friend]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            appId,
            usersId: selectedFriends.map(friend => friend.id),
        };

        try {
            await lobbyService.create(formData, token);
            navigate("/");
        } catch (error) {
            console.error('Error creating lobby:', error);
        }
    };

    return (
        <div className="lobby-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="lobby-name"
                    type="text"
                    placeholder="Lobby name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                                {filteredGames.map(game => (
                                    <li
                                        key={game.appId}
                                        onClick={() => handleGameSelect(game)}
                                        className="dropdown-item"
                                    >
                                        {game.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {gameName !== "Select Game" && (
                    <>
                        <img
                            src={gameBanner}
                            alt={gameName}
                            className="game-image"
                        />
                        <div className="friend-list">
                            <button type="button" className="invite-btn" onClick={() => setIsFriendsOpen(!isFriendsOpen)}>
                                Friends to Play {gameName}
                            </button>
                            {isFriendsOpen && (
                                <div className="friends-dropdown">
                                    <input
                                        type="text"
                                        placeholder="Search friend..."
                                        className="friend-search"
                                        value={searchFriend}
                                        onChange={(e) => setSearchFriend(e.target.value)}
                                    />
                                    <ul className="friend-dropdown-list">
                                        {filteredFriends.map(friend => (
                                            <li
                                                key={friend.id}
                                                onClick={() => handleFriendSelect(friend)}
                                                className="dropdown-item"
                                            >
                                                {friend.username}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="friends">
                                {selectedFriends.map(friend => (
                                    <img key={friend.id} src={friend.photoUrl} alt="friend-avatar" className='friend-avatar' />
                                ))}
                            </div>
                        </div>
                    </>
                )}

                <button type="submit" className="submit-btn">CREATE</button>
            </form>
        </div>
    );
};

export default Lobby;
