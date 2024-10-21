import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import authService from "../services/authService";

export const useAuth = () => {

    const { id, token } = useSelector((state) => state.auth);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const validate = async () => {
            try {
                const res = await authService.validateToken(token);
                if (res === parseInt(id)) {
                    setAuth(true);
                } else {
                    setAuth(false);
                }
            } catch (error) {
                console.error('Token error :', error);
            }
        };
        validate();
    }, [id, token]);

    return { auth };
};