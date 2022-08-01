import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentDetails } from "../sliceInterface/appointmentInterface";

const defaultAppointmentDetails: AppointmentDetails = {
    patientId: "",
    siteLocation: "",
    serviceType: "",
    confirmationCode: -1,
};

export const appointmentSlice = createSlice({
    name: "Appointment",
    initialState: {
        data: defaultAppointmentDetails,
    },
    reducers: {
        setAppointment: (state, action: PayloadAction<AppointmentDetails>) => {
            state.data = action.payload;
        },
    },
});

export const { setAppointment } = appointmentSlice.actions;
