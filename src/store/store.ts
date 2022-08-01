import { configureStore } from "@reduxjs/toolkit";
import { appointmentSlice } from "./slice/appointmentSlice";
import { authenticationSlice } from "./slice/authenticationSlice";
import { patientInformationSlice } from "./slice/patientInformationSlice";

export const store = configureStore({
    reducer: {
        login: authenticationSlice.reducer,
        patient: patientInformationSlice.reducer,
        appointment: appointmentSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
