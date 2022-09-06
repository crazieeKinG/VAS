import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    deleteVaccine,
    getAllVaccine,
    insertVaccine,
    updateVaccine,
} from "../../api/vaccineApi";
import {
    FULFILLED,
    IDLE,
    LOADING_STATUS,
    PENDING,
} from "../../constants/sliceConstants";
import { ApiResponse } from "../../domain/ApiResponse";
import { vaccineServiceInterface } from "../sliceInterface/vaccineServiceInterface";

export const vaccineSlice = createSlice({
    name: "Vaccine",
    initialState: {
        loading: IDLE as LOADING_STATUS,
        data: [] as vaccineServiceInterface[],
        message: "" as string,
    },
    reducers: {
        setVaccine: (state, action: PayloadAction<vaccineServiceInterface>) => {
            state.data.push(action.payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(insertVaccine.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(updateVaccine.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(deleteVaccine.pending, (state) => {
                state.loading = PENDING;
            })
            .addCase(
                getAllVaccine.fulfilled,
                (
                    state,
                    action: PayloadAction<
                        ApiResponse<vaccineServiceInterface[]>
                    >
                ) => {
                    state.loading = FULFILLED;
                    state.data = action.payload.data;
                    state.message = action.payload.message;
                }
            );
        builder.addCase(
            insertVaccine.fulfilled,
            (
                state,
                action: PayloadAction<ApiResponse<vaccineServiceInterface[]>>
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
        builder.addCase(
            updateVaccine.fulfilled,
            (
                state,
                action: PayloadAction<ApiResponse<vaccineServiceInterface[]>>
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
        builder.addCase(
            deleteVaccine.fulfilled,
            (
                state,
                action: PayloadAction<ApiResponse<vaccineServiceInterface[]>>
            ) => {
                state.loading = FULFILLED;
                state.message = action.payload.message;
            }
        );
    },
});

export const { setVaccine } = vaccineSlice.actions;
