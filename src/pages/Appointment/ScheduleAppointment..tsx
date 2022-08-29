import { useSelector } from "react-redux";
import { AppointmentForm } from "../../components/Appointment/AppointmentForm";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const ScheduleAppointment = () => {
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    SetCurrentPage(
        admin ? "Appointments" : "Appointment",
        "Vaccination appointments",
        "appointment"
    );

    return <AppointmentForm admin={admin} />;
};
