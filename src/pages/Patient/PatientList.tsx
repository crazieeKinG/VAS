import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import { PatientTable } from "../../components/Patient/PatientTable";
import { ADD_PATIENT } from "../../constants/navLinkConstants";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const PatientList = () => {
    SetCurrentPage("Patient", "Manage patients", "patient");
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
