import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patientInformationInterface } from "../sliceInterface/patientInformationInterface";

const defaultPatientDetails: patientInformationInterface = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    ethnicity: "",
    street: "",
    state: "",
    city: "",
    insuranceId: "",
    memberId: "",
    insuranceProvider: "",
    document: {} as File,
};

export const patientInformationSlice = createSlice({
    name: "Patient",
    initialState: {
        data: [] as patientInformationInterface[],
    },
    reducers: {
        setPatientDetails: (
            state,
            action: PayloadAction<patientInformationInterface>
        ) => {
            state.data.push(action.payload);
        },
    },
});

export const { setPatientDetails } = patientInformationSlice.actions;
