import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
    const { id } = useSelector((state) => state.auth);

    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (id) {
            setAuth(true);
        } else {
            setAuth(false);
        }

    }, [id]);

    return { auth };
};