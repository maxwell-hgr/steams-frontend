import { createSlice } from '@reduxjs/toolkit';

let email = null;
let token = null;

const userStorage = JSON.parse(localStorage.getItem("user"));

if (userStorage) {
    email = userStorage.email;
    token = userStorage.token;
}

const initialState = {
    isAuthenticated: token ? true : false,
    email: email ? email : null,
    token: token ? token : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.email = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
