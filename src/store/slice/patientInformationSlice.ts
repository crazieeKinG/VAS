import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patientInformationInterface } from "../sliceInterface/patientInformationInterface";

const defaultPatientDetails: patientInformationInterface = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    ethnicity: "",
    address: {
        street: "",
        state: "",
        city: "",
    },
    payment: {
        insuranceId: "",
        memberId: "",
        insuranceProvider: "",
    },
    document: {} as File
};

export const patientInformationSlice = createSlice({
    name: "Patient",
    initialState: {
        data: defaultPatientDetails,
    },
    reducers: {
        setPatientDetails: (state, action: PayloadAction<patientInformationInterface>) => {
            state.data = action.payload;
        },
    },
});

export const { setPatientDetails } = patientInformationSlice.actions;
