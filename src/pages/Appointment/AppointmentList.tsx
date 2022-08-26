import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppointmentTable } from "../../components/Appointment/AppointmentTable";
import {
    ADD_APPOINTMENT,
    SCHEDULE_APPOINTMENT,
} from "../../constants/navLinkConstants";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const AppointmentList = () => {
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);
    const appointmentLink = admin ? ADD_APPOINTMENT : SCHEDULE_APPOINTMENT;
    SetCurrentPage(
        admin ? "Appointments" : "Appointment",
        "Vaccination appointments",
        "appointment"
    );

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
