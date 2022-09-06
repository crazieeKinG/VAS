export interface patientInformationInterface {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    gender: string;
    ethnicity: string;
    state: string;
    street: string;
    city: string;
    insuranceId: string;
    memberId: string;
    insuranceProvider: string;
    photo?: File;
}
