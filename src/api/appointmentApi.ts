import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APPOINTMENT_NAMESPACE } from "../constants/sliceConstants";
import { appointmentInterface } from "../store/sliceInterface/appointmentInterface";
import { errorResponse, fulfilledResponse } from "../utils/responseHandler";
import { setHeader } from "../utils/setHeader";

export const getAllAppointments = createAsyncThunk(
    `${APPOINTMENT_NAMESPACE}/getAllAppointments`,
    async () => {
        try {
            const response = await axios.get("/appointments", setHeader());
            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const getUserAppointments = createAsyncThunk(
    `${APPOINTMENT_NAMESPACE}/getUserAppointments`,
    async () => {
        try {
            const response = await axios.get("/appointments/user", setHeader());
            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const insertAppointment = createAsyncThunk(
    `${APPOINTMENT_NAMESPACE}/insertAppointment`,
    async (appointment: appointmentInterface) => {
        try {
            const response = await axios.post(
                "/appointments",
                appointment,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const updateAppointment = createAsyncThunk(
    `${APPOINTMENT_NAMESPACE}/updateAppointment`,
    async (appointment: appointmentInterface) => {
        try {
            const response = await axios.put(
                `/appointments/${appointment.id}`,
                appointment,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const deleteAppointment = createAsyncThunk(
    `${APPOINTMENT_NAMESPACE}/deleteAppointment`,
    async (appointmentId: string) => {
        try {
            const response = await axios.delete(
                `/appointments/${appointmentId}`,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
