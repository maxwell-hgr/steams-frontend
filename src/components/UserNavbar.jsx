import './UserNavbar.css';

const UserNavbar = (data) => {
    const { profileImageUrl, notificationCount } = data;
    return (
        <div className="user-navbar">
            <div className="profile-container">
                {notificationCount > 0 && (
                    <div className="notification-badge">
                        {notificationCount}
                    </div>
                )}
                <img src={profileImageUrl} alt="Profile" className="profile-image" />
            </div>
        </div>
    );
};

export default UserNavbar;
