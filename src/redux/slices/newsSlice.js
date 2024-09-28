import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsState: {},
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        setNewsState: (state, action) => {
            state.newsState = action.payload;
        },
    },
});

export const { setNewsState } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;