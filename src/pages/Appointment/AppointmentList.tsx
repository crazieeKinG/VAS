import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllAppointments, getUserAppointments } from "../../api/appointmentApi";
import { getAllVaccine } from "../../api/vaccineApi";
import { AppointmentTable } from "../../components/Appointment/AppointmentTable";
import {
    ADD_APPOINTMENT,
    SCHEDULE_APPOINTMENT,
} from "../../constants/navLinkConstants";
import { AppDispatch, RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const AppointmentList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    const appointmentLink = admin ? ADD_APPOINTMENT : SCHEDULE_APPOINTMENT;
    SetCurrentPage(
        admin ? "Appointments" : "Appointment",
        "Vaccination appointments",
        "appointment"
    );

    useEffect(() => {
        admin
            ? dispatch(getAllAppointments())
            : dispatch(getUserAppointments());
    }, []);

    return (
        <div className="margin-top">
            <Row justify="end">
                <Col>
                    <Link to={appointmentLink}>
                        <Button type="primary" icon={<PlusOutlined />}>
                            New Appointment
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Divider />
            <AppointmentTable />
        </div>
    );
};
