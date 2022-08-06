import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { vaccineServiceInterface } from "../sliceInterface/vaccineServiceInterface";

export const vaccineSlice = createSlice({
    name: "Vaccine",
    initialState: {
        data: [] as vaccineServiceInterface[],
    },
    reducers: {
        setVaccine: (state, action: PayloadAction<vaccineServiceInterface>) => {
            state.data.push(action.payload);
        },
    },
});

export const { setVaccine } = vaccineSlice.actions;
