import { useState } from "react";
import authService from "../../services/authService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        await authService.login(data);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                Email:
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="enter" />
            </form>
        </div>
    );
};

export default Login;