import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appointmentInterface } from "../sliceInterface/appointmentInterface";

export const appointmentSlice = createSlice({
    name: "Appointment",
    initialState: {
        data: [] as appointmentInterface[],
    },
    reducers: {
        setAppointment: (state, action: PayloadAction<appointmentInterface>) => {
            state.data.push(action.payload);
        },
    },
});

export const { setAppointment } = appointmentSlice.actions;
