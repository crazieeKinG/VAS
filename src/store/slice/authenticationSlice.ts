import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationInterface } from "../sliceInterface/authenticationInterface";

const defaultUserDetails: authenticationInterface = {
    username: "",
    isLoggedIn: false,
};

const initialState = () => {
    const localData = localStorage.getItem("userDetails") as string;
    return localData === null ? defaultUserDetails : JSON.parse(localData);
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialState(),
    reducers: {
        loggedIn: (state: authenticationInterface, action: PayloadAction<string>) => {
            state.username = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem("userDetails", JSON.stringify(state));
        },
        loggedOut: (state) => {
            state.username = "";
            state.isLoggedIn = false;
            localStorage.removeItem("userDetails");
        },
    },
});

export const { loggedIn, loggedOut } = authenticationSlice.actions;
