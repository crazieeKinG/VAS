import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { Link } from "react-router-dom";
import { VaccineServiceTable } from "../../components/Vaccine/VaccineServiceTable";
import { ADD_VACCINATION } from "../../constants/navLinkConstants";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const VaccineList = () => {
    SetCurrentPage("Vaccination", "Manage vaccine services", "vaccine");
    return (
        <div className="margin-top">
            <Row justify="end">
                <Col>
                    <Link to={ADD_VACCINATION}>
                        <Button type="primary" icon={<PlusOutlined />}>
                            New Vaccine
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Divider />
            <VaccineServiceTable />
        </div>
    );
};
