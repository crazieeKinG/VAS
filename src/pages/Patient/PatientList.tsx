import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPatient } from "../../api/patientApi";
import { PatientTable } from "../../components/Patient/PatientTable";
import { ADD_PATIENT } from "../../constants/navLinkConstants";
import { AppDispatch } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const PatientList = () => {
    const dispatch = useDispatch<AppDispatch>();
    SetCurrentPage("Patient", "Manage patients", "patient");

    useEffect(() => {
        dispatch(getAllPatient());
    });
    return (
        <div className="margin-top">
            <Row justify="end">
                <Col>
                    <Link to={ADD_PATIENT}>
                        <Button type="primary" icon={<PlusOutlined />}>
                            New Patient
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Divider />
            <PatientTable />
        </div>
    );
};
