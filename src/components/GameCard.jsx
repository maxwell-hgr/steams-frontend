import './GameCard.css';

const GameCard = (game) => {
    return (
        <div className="game-card">
            <img src={game.banner} alt={game.name} className="game-image" />
            <div className="game-info">
                <h3 className="game-title">{game.name}</h3>
                <div className="game-stats">
                    <div>
                        <span>TEMPO DE JOGO</span>
                        <span>{game.name} horas</span>
                    </div>
                    <div>
                        <span>ÚLTIMA SESSÃO</span>
                        <span>{game.name}</span>
                    </div>
                    <div>
                        <span>CONQUISTAS</span>
                        <div className="progress-bar">
                            {/* <div
                                className="progress"
                                style={{ width: `${(game.achievements.current / game.achievements.total) * 100}%` }}
                            ></div> */}
                        </div>
                        {/* <span>{game.achievements.current}/{game.achievements.total}</span> */}
                    </div>
                </div>
                <div className="game-actions">
                    <button className="action-button">Minhas estatísticas no jogo</button>
                    <button className="action-button">Meu conteúdo do jogo</button>
                </div>
            </div>
            <div className="more-options">...</div>
        </div>
    );
};

export default GameCard;
