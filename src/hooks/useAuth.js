import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
    const { email } = useSelector((state) => state.auth);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (email) {
            setAuth(true);
        } else {
            setAuth(false);
        }

    }, [email]);

    return { auth };
};