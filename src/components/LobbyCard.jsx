import "./LobbyCard.css";

const LobbyCard = (data) => {
    const { name, users } = data;
    return (
        <div className="lobby-card">
            <div className="lobby-header">
                <h2>{name}</h2>
            </div>
            <div className="lobby-image">
                <img src="https://wdflat.com/wp-content/uploads/Red-Dead-Redemption-2.jpg" alt="Lobby game image" />
            </div>
            <div className="lobby-avatars">
                {users.map((user) => (
                    <img className="avatar" key={user.id} src={user.photoUrl} />
                ))}
            </div>
        </div>

    );
};

export default LobbyCard;