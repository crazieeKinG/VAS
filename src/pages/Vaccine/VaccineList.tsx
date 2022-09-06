import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllVaccine } from "../../api/vaccineApi";
import { VaccineServiceTable } from "../../components/Vaccine/VaccineServiceTable";
import { ADD_VACCINATION } from "../../constants/navLinkConstants";
import { AppDispatch } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const VaccineList = () => {
    const dispatch = useDispatch<AppDispatch>();
    SetCurrentPage("Vaccination", "Manage vaccine services", "vaccine");

    useEffect(() => {
        dispatch(getAllVaccine());
    }, []);

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
