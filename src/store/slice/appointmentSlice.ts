import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
    deleteAppointment,
    getAllAppointments,
    getUserAppointments,
    insertAppointment,
    updateAppointment,
} from "../../api/appointmentApi";
import {
    APPOINTMENT_NAMESPACE,
    FULFILLED,
    IDLE,
    LOADING_STATUS,
    PENDING,
} from "../../constants/sliceConstants";
import { ApiResponse } from "../../domain/ApiResponse";
import { errorResponse, fulfilledResponse } from "../../utils/responseHandler";
import { setHeader } from "../../utils/setHeader";
import { appointmentInterface } from "../sliceInterface/appointmentInterface";

export const appointmentSlice = createSlice({
    name: "Appointment",
    initialState: {
        loading: IDLE as LOADING_STATUS,
        data: [] as appointmentInterface[],
        message: "" as string,
    },
    reducers: {
        setAppointment: (
            state,
            action: PayloadAction<appointmentInterface>
        ) => {
            state.data.push(action.payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getAllAppointments.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                getAllAppointments.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<appointmentInterface[]>>
                ) => {
                    state.loading = action.payload.status;
                    state.data = action.payload.data;
                    state.message = action.payload.message;
                }
            )
            .addCase(getUserAppointments.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                getUserAppointments.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<appointmentInterface[]>>
                ) => {
                    state.loading = action.payload.status;
                    state.data = action.payload.data;
                    state.message = action.payload.message;
                }
            )
            .addCase(insertAppointment.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                insertAppointment.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<appointmentInterface[]>>
                ) => {
                    state.loading = action.payload.status;
                    state.message = action.payload.message;
                }
            )
            .addCase(updateAppointment.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                updateAppointment.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<appointmentInterface[]>>
                ) => {
                    state.loading = action.payload.status;
                    state.message = action.payload.message;
                }
            )
            .addCase(deleteAppointment.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                deleteAppointment.fulfilled,
                (
                    state,
                    action: PayloadAction<ApiResponse<appointmentInterface[]>>
                ) => {
                    state.loading = action.payload.status;
                    state.message = action.payload.message;
                }
            );
    },
});

export const { setAppointment } = appointmentSlice.actions;
