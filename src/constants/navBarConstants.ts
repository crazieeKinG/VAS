import {
    HOME,
    LIST_APPOINTMENT,
    LIST_PATIENT,
    LIST_VACCINATION,
    PATIENT_APPOINTMENT,
    REGISTER_PATIENT,
} from "./navLinkConstants";

export const PATIENT_NAVIGATION_COMPONENT = [
    {
        key: "home",
        path: HOME,
        title: "Home",
    },
    { key: "register", path: REGISTER_PATIENT, title: "Register" },
    { key: "appointment", path: PATIENT_APPOINTMENT, title: "Appointment" },
];

export const MANAGER_NAVIGATION_COMPONENT = [
    { key: "appointment", path: LIST_APPOINTMENT, title: "Appointment" },
    { key: "patient", path: LIST_PATIENT, title: "Patient" },
    { key: "vaccine", path: LIST_VACCINATION, title: "Vaccine" },
];
