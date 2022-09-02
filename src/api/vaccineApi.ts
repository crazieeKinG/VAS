import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { VACCINE_NAMESPACE } from "../constants/sliceConstants";
import { vaccineServiceInterface } from "../store/sliceInterface/vaccineServiceInterface";
import { errorResponse, fulfilledResponse } from "../utils/responseHandler";
import { setHeader } from "../utils/setHeader";

export const getAllVaccine = createAsyncThunk(
    `${VACCINE_NAMESPACE}/getAllVaccine`,
    async () => {
        try {
            const response = await axios.get("/vaccines", setHeader());
            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
export const insertVaccine = createAsyncThunk(
    `${VACCINE_NAMESPACE}/insertVaccine`,
    async (vaccineDetails: vaccineServiceInterface) => {
        try {
            const response = await axios.post(
                "/vaccines",
                vaccineDetails,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
export const updateVaccine = createAsyncThunk(
    `${VACCINE_NAMESPACE}/updateVaccine`,
    async (vaccineDetails: vaccineServiceInterface) => {
        try {
            const response = await axios.put(
                `/vaccines/${vaccineDetails.id}`,
                vaccineDetails,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
export const deleteVaccine = createAsyncThunk(
    `${VACCINE_NAMESPACE}/deleteVaccine`,
    async (vaccineId: string) => {
        try {
            const response = await axios.delete(
                `/vaccines/${vaccineId}`,
                setHeader()
            );

            return fulfilledResponse(response.data);
        } catch (error: any) {
            return errorResponse(error.response.data);
        }
    }
);
