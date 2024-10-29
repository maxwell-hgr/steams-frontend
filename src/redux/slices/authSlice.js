import { createSlice } from '@reduxjs/toolkit';


const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

const initialState = {
    isAuthenticated: Boolean(user),
    token: user ? user.token : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            localStorage.setItem("user", JSON.stringify({ id: action.payload.id, token: action.payload.token }));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem("user");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
