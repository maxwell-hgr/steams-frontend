import { useState } from "react";
import authService from "../../services/authService";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [steamUrl, setSteamUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password, steamUrl };
        await authService.register(data);
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                Email:
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} />
                Password:
                <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                SteamUrl:
                <input type="text" onChange={e => setSteamUrl(e.target.value)} value={steamUrl} />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;