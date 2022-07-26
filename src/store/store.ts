import { configureStore } from "@reduxjs/toolkit";
import { appointmentSlice } from "./slice/appointmentSlice";
import { authenticationSlice } from "./slice/authenticationSlice";
import { navbarSlice } from "./slice/interfaceSlice";
import { patientInformationSlice } from "./slice/patientInformationSlice";
import { vaccineSlice } from "./slice/vaccineSlice";

export const store = configureStore({
    reducer: {
        login: authenticationSlice.reducer,
        patient: patientInformationSlice.reducer,
        appointment: appointmentSlice.reducer,
        vaccine: vaccineSlice.reducer,
        navbar: navbarSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
