import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const { username, email, photoUrl } = user;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img className="avatar" src={[photoUrl]} alt="Avatar" />
                <div className="profile-info">
                    <h2>{username}</h2>
                    <p>{email}</p>
                </div>
                <div className="profile-level">
                    <p>Nível</p>
                    <div className="level-badge">
                        <span className="level-number">21</span>
                        <div className="badge-info">
                            <span>Elite Crewman</span>
                            <span>100 XP</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <div className="favorite-game">
                    <img className="game-banner" src="path/to/rede-dead-image.png" alt="Red Dead Redemption 2" />
                    <div className="game-info">
                        <h3>Red Dead Redemption 2</h3>
                        <p>84 Horas de jogo</p>
                        <p>20 Conquistas</p>
                    </div>
                </div>

                <div className="profile-sidebar">
                    <h3>Off-line</h3>
                    <div className="profile-stats">
                        <p>Insígnias <span>20</span></p>
                        <div className="badge-icons">
                            <img src="path/to/badge-1.png" alt="Insígnia 1" />
                            <img src="path/to/badge-2.png" alt="Insígnia 2" />
                            <img src="path/to/badge-3.png" alt="Insígnia 3" />
                        </div>
                        <p>Jogos <span>68</span></p>
                    </div>

                    <div className="friend-list">
                        <h3>Amigos <span>71</span></h3>
                        <div className="friend">
                            <img src="path/to/friend-avatar.png" alt="Friend" />
                            <p>SBL</p>
                            <span>Off-line</span>
                        </div>
                        {/* Outros amigos... */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
