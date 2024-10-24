import './FriendCard.css';

const FriendCard = (friend) => {
    const { username, photoUrl, onClick } = friend;
    return (
        <div onClick={onClick} className="friend-card">
            <img src={photoUrl} alt={username} className="friend-card-avatar" />
            <span className="friend-name">{username}</span>
        </div>
    );
};

export default FriendCard;