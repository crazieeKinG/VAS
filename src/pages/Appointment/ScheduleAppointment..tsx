import moment from "moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllVaccine } from "../../api/vaccineApi";
import { AppointmentForm } from "../../components/Appointment/AppointmentForm";
import { appointmentInterface } from "../../store/sliceInterface/appointmentInterface";
import { AppDispatch, RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const ScheduleAppointment = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { appointmentId } = useParams();
    let initialState = {};

    const allAppointments = useSelector(
        (state: RootState) => state.appointment.data
    );

    if (appointmentId) {
        const selectedData = allAppointments.filter(
            (appointment: appointmentInterface) =>
                appointment.id === +appointmentId
        );

        initialState = {
            ...selectedData[0],
            appointmentDate: moment(selectedData[0].appointmentDate),
        };
    }

    const admin = useSelector((state: RootState) => state.login.data.isAdmin);

    SetCurrentPage(
        admin ? "Appointments" : "Appointment",
        "Vaccination appointments",
        "appointment"
    );

    useEffect(() => {
        dispatch(getAllVaccine());
    }, []);

    return <AppointmentForm admin={admin} initialState={initialState} />;
};
