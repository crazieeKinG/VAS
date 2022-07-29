interface address {
    state: string;
    street: string;
    city: string;
}

interface insurance {
    insuranceId: string;
    memberId: string;
    insuranceProvider: string;
}

export interface patientInformationInterface {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
    ethnicity: string;
    address: address;
    payment: insurance;
    document: File;
}