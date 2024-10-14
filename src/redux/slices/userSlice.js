import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../../services/userService";

const initialState = {
    user: {},
};

export const profile = createAsyncThunk(
    "user/profile",
    async (user, thunkAPI) => {
        const token = thunkAPI.getState().auth.token;
        const data = await userService.profile(token);
        return data;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(profile.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    }
});

export default userSlice.reducer;