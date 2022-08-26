import { useSelector } from "react-redux";
import { PatientForm } from "../../components/Patient/PatientForm";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const Register = () => {
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    SetCurrentPage(
        admin ? "Patient" : "Registration",
        admin ? "Manage patient" : "Patient registration form",
        admin ? "patient" : "register"
    );

    return <PatientForm admin={admin} />;
};
