import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PATIENT_NAMESPACE } from "../constants/sliceConstants";
import { patientInformationInterface } from "../store/sliceInterface/patientInformationInterface";
import { errorResponse, fulfilledResponse } from "../utils/responseHandler";
import { setHeader } from "../utils/setHeader";

export const getAllPatient = createAsyncThunk(
    `${PATIENT_NAMESPACE}/getAllPatient`,
    async () => {
        try {
            const response = await axios.get("/users", setHeader());
            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const insertPatient = createAsyncThunk(
    `${PATIENT_NAMESPACE}/insertPatient`,
    async (patientDetails: any) => {
        try {
            const response = await axios.post(
                "/users",
                patientDetails,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const updatePatient = createAsyncThunk(
    `${PATIENT_NAMESPACE}/updatePatient`,
    async (patientDetails: any) => {
        try {
            const response = await axios.put(
                `/users/${patientDetails.get("id")}`,
                patientDetails,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);

export const deletePatient = createAsyncThunk(
    `${PATIENT_NAMESPACE}/deletePatient`,
    async (patientId: string) => {
        try {
            const response = await axios.delete(
                `/users/${patientId}`,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
