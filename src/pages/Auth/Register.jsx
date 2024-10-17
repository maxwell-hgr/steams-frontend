import { useState } from "react";
import authService from "../../services/authService";
import { useDispatch } from "react-redux";
import { login } from '../../redux/slices/authSlice';
import "./Auth.css";

const Register = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [steamUrl, setSteamUrl] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password, steamUrl };
        const res = await authService.register(data);
        dispatch(login(res));
    };

    return (
        <div id="register">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">EMAIL</label>
                    <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="steamUrl">STEAM URL</label>
                    <input id="text" type="text" value={steamUrl} onChange={e => setSteamUrl(e.target.value)} />
                </div>
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    );
};

export default Register;