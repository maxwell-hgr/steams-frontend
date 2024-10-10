const LobbyCard = (data) => {
    const { name, gameCode, users } = data;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{gameCode}</h2>
            {users.map((user) => (
                <img key={user.id} src={user.photoUrl} />
            ))}
        </div>
    );
};

export default LobbyCard;