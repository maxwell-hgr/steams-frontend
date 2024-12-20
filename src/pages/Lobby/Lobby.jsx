import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import lobbyService from '../../services/lobbyService';
import './Lobby.css';
import { useNavigate } from 'react-router-dom';
import FriendCard from '../../components/FriendCard';


const Lobby = () => {
    const dropdownRef = useRef(null);

    const token = useSelector((state) => state.auth.token);

    const { user } = useSelector((state) => state.user);
    const { games } = user;
    const { friends } = user;

    const [appId, setAppId] = useState();
    const [gameName, setGameName] = useState('Select Game');
    const [gameBanner, setGameBanner] = useState('');
    const [name, setName] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isFriendsOpen, setIsFriendsOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [searchFriend, setSearchFriend] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        // Adiciona o evento de clique global ao carregar o componente
        document.addEventListener('mousedown', handleClickOutside);

        // Remove o evento ao desmontar o componente
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredFriends = friends.filter(friend =>
        friend.username.toLowerCase().includes(searchFriend.toLowerCase()) &&
        friend.games.some((game) => game.appId === appId)
    );

    const handleGameSelect = (game) => {
        setSelectedFriends([]);
        setGameName(game.name);
        setGameBanner(game.banner);
        setAppId(game.appId);
        setIsDropdownOpen(false);
    };


    const handleFriendSelect = (friend) => {
        if (!selectedFriends.includes(friend)) {
            setSelectedFriends([...selectedFriends, friend]);
        }
        console.log(selectedFriends);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            appId,
            usersId: selectedFriends.map(friend => friend.id),
        };
        console.log(token);
        try {
            await lobbyService.create(formData, token);
            navigate("/");
        } catch (error) {
            console.error('Error creating lobby:', error);
        }
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsFriendsOpen(false);
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
                                <div ref={dropdownRef} className="friends-dropdown">
                                    <input
                                        type="text"
                                        placeholder="Search friend..."
                                        className="friend-search"
                                        value={searchFriend}
                                        onChange={(e) => setSearchFriend(e.target.value)}
                                    />
                                    <div className="friends-container">
                                        {filteredFriends.map(friend => (
                                            <FriendCard
                                                key={friend.id}
                                                photoUrl={friend.photoUrl}
                                                username={friend.username}
                                                onClick={() => handleFriendSelect(friend)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>
                        <div className="friends">
                            {selectedFriends.map(friend => (
                                <img key={friend.id} src={friend.photoUrl} alt="friend-avatar" className='friend-avatar' />
                            ))}
                        </div>
                    </>
                )}

                <button type="submit" className="submit-btn">CREATE</button>
            </form>
        </div>
    );
};

export default Lobby;
