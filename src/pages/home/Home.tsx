import { Col, List, Row, Typography } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HOME } from "../../constants/navLinkConstants";
import "./home.css";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

export const Home = () => {
    SetCurrentPage("Home", "Vaccine Appointment Scheduling", "home");

    const username = useSelector(
        (state: RootState) => state.login.data.username
    );
    return (
        <div className="home">
            <Typography.Title level={1}>Welcome! {username}</Typography.Title>
            <Row justify="space-between">
                <Col span={12}>
                    <Typography.Paragraph>
                        VAS is a startup company that focuses on providing
                        vaccines received from International Aid. VAS wants a
                        convenient platform for Nepalese to Register and Get
                        Vaccinated. So, they have decided to start a Web
                        Application accessible to everyone with an internet
                        connection to register, schedule vaccination, and update
                        new vaccination.
                    </Typography.Paragraph>
                </Col>
                <Col span={10}>
                    <Typography.Title level={3}>
                        Just few step to get COVID-19 vaccination
                    </Typography.Title>
                    <List itemLayout="horizontal">
                        <List.Item>Register</List.Item>
                        <List.Item>Login</List.Item>
                        <List.Item>Schedule an appointment</List.Item>
                        <List.Item>Get vaccinated</List.Item>
                    </List>
                </Col>
            </Row>
        </div>
    );
};
