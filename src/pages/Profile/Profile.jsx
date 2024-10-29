import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const { username, photoUrl } = user;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={photoUrl} alt="User Avatar" className="profile-avatar" />
                <div className="profile-info">
                    <h2 className="profile-name">{username}</h2>
                    <p className="profile-location">location</p>
                    <p className="profile-description">{user.description || 'Nada informado.'}</p>
                </div>
                <div className="profile-level">
                    <span>Nível <span className="level-number">22</span></span>
                    <img src={user.badge} alt="Badge" className="level-badge" />
                    <button className="edit-profile-button">Editar perfil</button>
                </div>
            </div>

            <div className="favorite-game">
                <h3>Jogo favorito</h3>
                <div className="profile-game-card">
                    <img src='https://cdn.cloudflare.steamstatic.com/steam/apps/12120/header.jpg' alt='banner' className="profile-game-image" />
                    <div className="profile-game-details">
                        <h4 className="profile-game-title">JOGO FAVORITO</h4>
                        <div className="profile-game-stats">
                            <div>
                                <span>12 Horas de jogo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-status">
                <h3>Off-line</h3>
                <p>Última vez on-line há 12</p>
                <div className="badges">
                    <span>Insígnias 255</span>
                    <div className="badge-icons">
                        <p>Badges</p>
                        {/* {user.badges.map((badge, index) => (
                            <img key={index} src={badge} alt="Badge" className="badge-icon" />
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
