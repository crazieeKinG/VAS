import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationInterface } from "../sliceInterface/authenticationInterface";

const defaultUserDetails: authenticationInterface = {
    username: "",
    token: "",
    isAdmin: false,
};

const initialState = () => {
    const localData = localStorage.getItem("token") as string;
    return localData === null ? defaultUserDetails : JSON.parse(localData);
};

export const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        data: defaultUserDetails,
    },
    reducers: {
        loggedIn: (state, action: PayloadAction<authenticationInterface>) => {
            state.data.username = action.payload.username;
            state.data.token = "token";
            state.data.isAdmin = action.payload.isAdmin;
            localStorage.setItem("username", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify("token"));
        },
        loggedOut: (state) => {
            state.data.username = "";
            state.data.token = "";
            state.data.isAdmin = false;
            localStorage.removeItem("username");
            localStorage.removeItem("token");
        },
    },
});

export const { loggedIn, loggedOut } = authenticationSlice.actions;
