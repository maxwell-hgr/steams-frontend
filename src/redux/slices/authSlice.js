import { createSlice } from '@reduxjs/toolkit';

const getUserFromStorage = () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    return userStorage ? { id: userStorage.id, token: userStorage.token } : { id: null, token: null };
};

const { id, token } = getUserFromStorage();

const initialState = {
    isAuthenticated: Boolean(token),
    userId: id,
    authToken: token,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.userId = action.payload.id;
            state.authToken = action.payload.token;
            localStorage.setItem("user", JSON.stringify({ id: action.payload.id, token: action.payload.token })); // Armazenar no localStorage
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.userId = null;
            state.authToken = null;
            localStorage.removeItem("user"); // Limpar o localStorage
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { login, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
