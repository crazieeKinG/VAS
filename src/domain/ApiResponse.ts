import { LOADING_STATUS } from "../constants/sliceConstants";

export interface ApiResponse<T> {
    status: LOADING_STATUS;
    data: T;
    message: string;
}
