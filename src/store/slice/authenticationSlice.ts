import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authentication {
    username: string;
    isLoggedIn: boolean;
}

const defaultUserDetails: authentication = {
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
        loggedIn: (state: authentication, action: PayloadAction<string>) => {
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
