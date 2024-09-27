import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authState: {
        isLogin: false,
        accessToken: '',
        id: '',
    },
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.authState = action.payload;
        },
    },
});

export const { setAuthState } = authSlice.actions;
export const authReducer = authSlice.reducer;