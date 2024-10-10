import { useState } from "react";
import authService from "../../services/authService";
import { Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        await authService.login(data);
    };

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">ENTER USING EMAIL</label>
                    <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">PASSWORD</label>
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">SIGN IN</button>
            </form>
            <p>
                <Link to="/register">Doesn&#39;t have an account? Sing up</Link>
            </p>
        </div>
    );
};

export default Login;