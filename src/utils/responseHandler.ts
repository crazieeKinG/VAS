import { FULFILLED, REJECTED } from "../constants/sliceConstants";

export const fulfilledResponse = (data: any) => {
    return { ...data, status: FULFILLED };
};

export const errorResponse = (data: any) => {
    return { ...data, status: REJECTED };
};
