import { createSlice } from '@reduxjs/toolkit';

let id = null;
let token = null;

const userStorage = JSON.parse(localStorage.getItem("user"));

if (userStorage) {
    id = userStorage.id;
    token = userStorage.token;
}

const initialState = {
    isAuthenticated: token ? true : false,
    id: id ? id : null,
    token: token ? token : null
};

console.log(initialState);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.id = action.payload.id;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.id = null;
            state.token = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;