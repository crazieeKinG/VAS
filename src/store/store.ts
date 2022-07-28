import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./slice/authenticationSlice";

export const store = configureStore({
    reducer: {
        login: authenticationSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>