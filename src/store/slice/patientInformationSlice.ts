import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    deletePatient,
    getAllPatient,
    insertPatient,
    updatePatient,
} from "../../api/patientApi";
import {
    FULFILLED,
    IDLE,
    LOADING_STATUS,
    PENDING,
} from "../../constants/sliceConstants";
import { ApiResponse } from "../../domain/ApiResponse";
import { patientInformationInterface } from "../sliceInterface/patientInformationInterface";

export const patientInformationSlice = createSlice({
    name: "Patient",
    initialState: {
        loading: IDLE as LOADING_STATUS,
        data: [] as patientInformationInterface[],
        message: "" as string,
    },
    reducers: {
        setPatientDetails: (
            state,
            action: PayloadAction<patientInformationInterface>
        ) => {
            state.data.push(action.payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(insertPatient.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(updatePatient.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(deletePatient.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                getAllPatient.fulfilled,
                (
                    state,
                    action: PayloadAction<
                        ApiResponse<patientInformationInterface[]>
                    >
                ) => {
                    state.loading = FULFILLED;
                    state.data = action.payload.data;
                    state.message = action.payload.message;
                }
            );
        builder.addCase(
            insertPatient.fulfilled,
            (
                state,
                action: PayloadAction<
                    ApiResponse<patientInformationInterface[]>
                >
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
        builder.addCase(
            updatePatient.fulfilled,
            (
                state,
                action: PayloadAction<
                    ApiResponse<patientInformationInterface[]>
                >
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
        builder.addCase(
            deletePatient.fulfilled,
            (
                state,
                action: PayloadAction<
                    ApiResponse<patientInformationInterface[]>
                >
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
    },
});

export const { setPatientDetails } = patientInformationSlice.actions;
