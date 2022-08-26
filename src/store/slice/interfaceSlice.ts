import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { navbarInterface } from "../sliceInterface/navbarInterface";

export const navbarSlice = createSlice({
    name: "navbar",
    initialState: {
        data: {
            title: "Home",
            subTitle: "Home",
            navbarLink: "home"
        },
    },
    reducers: {
        setTitle: (state, action: PayloadAction<navbarInterface>) => {
            state.data = action.payload;
        },
    },
});

export const { setTitle } = navbarSlice.actions;
