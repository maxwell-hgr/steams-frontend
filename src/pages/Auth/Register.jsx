import { useState } from "react";
import authService from "../../services/authService";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [steamUrl, setSteamUrl] = useState("");
    const [user, setUser] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = { email, password, steamUrl };
        console.log(body);
        const user = await authService.register(body);
        console.log(user);
    }

    return (
        <div>
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
    )
}

export default Register;