import { Button, Col, Row, Space, Typography } from "antd";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { PATIENT_NAVIGATION_COMPONENT } from "../../constants/navBarConstants";
import { RootState } from "../../store/store";
import { LogInAndOutNavLinks } from "./LogInAndOutNavLinks";
import "./navbar.css";

export const UserNavbar = () => {
    const authentication = useSelector((state: RootState) => state.login.data);
    const currentPage = useSelector((state: RootState) => state.navbar.data);

    const patientNavigationComponent = PATIENT_NAVIGATION_COMPONENT.map(
        (navLink) => {
            if (authentication.token && navLink.title === "Register") return;
            if (!authentication.token && navLink.title === "Appointment")
                return;

            const buttonType =
                navLink.key === currentPage.navbarLink ? "primary" : "default";
            return (
                <Link key={navLink.key} to={navLink.path}>
                    <Button type={buttonType}>{navLink.title}</Button>
                </Link>
            );
        }
    );

    return (
        <div className="container margin-top ">
            <Row justify="space-between" align="middle" className="navbar">
                <Col flex={"row"}>
                    <Space align="baseline">
                        <Typography.Text style={{ fontSize: "1.5rem" }}>
                            {currentPage.title}
                        </Typography.Text>
                        <Typography.Text type="secondary">
                            {currentPage.subTitle}
                        </Typography.Text>
                    </Space>
                </Col>
                <Col>
                    <Space>
                        {patientNavigationComponent}
                        <LogInAndOutNavLinks />
                    </Space>
                </Col>
            </Row>
            <Outlet />
        </div>
    );
};
