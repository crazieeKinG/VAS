import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PatientForm } from "../../components/Patient/PatientForm";
import { patientInformationInterface } from "../../store/sliceInterface/patientInformationInterface";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const Register = () => {
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    SetCurrentPage(
        admin ? "Patient" : "Registration",
        admin ? "Manage patient" : "Patient registration form",
        admin ? "patient" : "register"
    );

    const { patientId } = useParams();
    let initialState = {};

    const allPatients = useSelector((state: RootState) => state.patient.data);

    if (patientId) {
        const selectedData = allPatients.filter(
            (patient: patientInformationInterface) => patient.id === +patientId
        );

        initialState = {
            ...selectedData[0],
            dob: moment(selectedData[0].dob),
        };
    }

    return <PatientForm admin={admin} initialState={initialState} />;
};
