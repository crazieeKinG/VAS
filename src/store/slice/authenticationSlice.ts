import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
    AUTHENTICATION_NAMESPACE,
    IDLE,
    LOADING_STATUS,
    PENDING,
} from "../../constants/sliceConstants";
import { ApiResponse } from "../../domain/ApiResponse";
import { errorResponse, fulfilledResponse } from "../../utils/responseHandler";
import {
    authenticationInterface,
    credentailsInterface,
} from "../sliceInterface/authenticationInterface";

const defaultUserDetails: authenticationInterface = {
    username: localStorage.getItem("username") as string,
    accessToken: localStorage.getItem("accessToken") as string,
    isAdmin: JSON.parse(localStorage.getItem("isAdmin") as string),
};

export const login = createAsyncThunk(
    `${AUTHENTICATION_NAMESPACE}/login`,
    async (credentials: credentailsInterface) => {
        try {
            const response = await axios.post("/login", credentials);

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const authenticationSlice = createSlice({
    name: AUTHENTICATION_NAMESPACE,
    initialState: {
        loading: IDLE as LOADING_STATUS,
        data: defaultUserDetails,
        message: "" as string,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("isAdmin");
            localStorage.removeItem("username");

            state.loading = IDLE;
            state.data = {} as authenticationInterface;
            state.message = "";
        },
    },
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                login.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<authenticationInterface>>
                ) => {
                    state.loading = action.payload.status;
                    state.data = action.payload.data
                        ? action.payload.data
                        : defaultUserDetails;
                    state.message = action.payload.message;

                    if (action.payload.data) {
                        localStorage.setItem(
                            "accessToken",
                            action.payload.data.accessToken
                        );
                        localStorage.setItem(
                            "username",
                            action.payload.data.username
                        );
                        localStorage.setItem(
                            "isAdmin",
                            action.payload.data.isAdmin.toString()
                        );
                    }
                }
            );
    },
});

export default authenticationSlice.reducer;
export const { logout } = authenticationSlice.actions;
