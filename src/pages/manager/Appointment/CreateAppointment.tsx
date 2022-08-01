import { useSelector } from "react-redux";
import { CreateAppointmentForm } from "../../../components/Appointment/CreateAppointmentForm";
import { RootState } from "../../../store/store";

export const CreateAppointment = () => {
    const appoinmentData = useSelector(
        (state: RootState) => state.appointment.data
    );

    return (
        <div className="container">
            <CreateAppointmentForm />

            <div>
                Appointment Details
                <ul>
                    <li>Patient ID: {appoinmentData.patientId}</li>
                    <li>Site Location: {appoinmentData.siteLocation}</li>
                    <li>Service Type: {appoinmentData.serviceType}</li>
                    <li>
                        Confirmation Code: {appoinmentData.confirmationCode}
                    </li>
                </ul>
            </div>
        </div>
    );
};
