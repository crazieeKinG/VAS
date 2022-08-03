import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppointmentDetails } from "../sliceInterface/appointmentInterface";

export const appointmentSlice = createSlice({
    name: "Appointment",
    initialState: {
        data: [] as AppointmentDetails[],
    },
    reducers: {
        setAppointment: (state, action: PayloadAction<AppointmentDetails>) => {
            state.data.push(action.payload);
        },
    },
});

export const { setAppointment } = appointmentSlice.actions;
