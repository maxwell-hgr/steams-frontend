import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import authService from "../services/authService";
import { useDispatch } from 'react-redux';
import { profile } from "../redux/slices/userSlice";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { id, token } = useSelector((state) => state.auth);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (auth) {
            dispatch(profile());
        }
    }, [dispatch, auth]);


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