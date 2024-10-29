import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const { token } = useSelector((state) => state.auth);


    useEffect(() => {
        if (token) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [token]);

    return { auth };
};