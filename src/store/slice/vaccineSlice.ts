import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { vaccineServiceInterface } from "../sliceInterface/vaccineServiceInterface";

const defaultValue: vaccineServiceInterface = {
    serviceName: "",
    serviceLocation: "",
    startDate: "",
    endDate: "",
    doses: 0,
    gender: "",
    age: 0,
    ethinicity: "",
};

export const vaccineSlice = createSlice({
    name: "Vaccine",
    initialState: {
        data: defaultValue,
    },
    reducers: {
        setVaccine: (state, action: PayloadAction<vaccineServiceInterface>) => {
            state.data = action.payload;
        },
    },
});

export const { setVaccine } = vaccineSlice.actions;
