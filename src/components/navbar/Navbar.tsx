import { Button, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ADD_APPOINTMENT, ADD_PATIENT, ADD_VACCINATION, HOME, LIST_APPOINTMENT, LIST_VACCINATION, LOGIN, LOGOUT, REGISTER_PATIENT, SCHEDULE_APPOINTMENT } from "../../constants/navLinkConstants";
import { RootState } from "../../store/store";

export const Navbar = () => {
    const authentication = useSelector((state: RootState) => state.login);

    const loggedInStatus = () => {
        if (authentication.isLoggedIn)
            return (
                <Link to={LOGOUT} style={{ float: "right" }}>
                    <Button type="primary">Logout</Button>
                </Link>
            );
        else
            return (
                <Link to={LOGIN} style={{ float: "right" }}>
                    <Button>Login</Button>
                </Link>
            );
    };
    return (
        <div className="container">
            <div className="home">
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                    disabledOverflow
                >
                    <Menu.Item key="home">
                        <Link to={HOME}>
                            Vaccination Appointment Scheduling
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={ADD_PATIENT}>
                        <Link to={ADD_PATIENT}>
                            New Patient
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={REGISTER_PATIENT}>
                        <Link to={REGISTER_PATIENT}>
                            Register
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={ADD_APPOINTMENT}>
                        <Link to={ADD_APPOINTMENT}>
                            New Appointment
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={LIST_APPOINTMENT}>
                        <Link to={LIST_APPOINTMENT}>
                            List Appointment
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={LIST_VACCINATION}>
                        <Link to={LIST_VACCINATION}>
                            List Vaccine
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={SCHEDULE_APPOINTMENT}>
                        <Link to={SCHEDULE_APPOINTMENT}>
                            Schedule Appointment
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={ADD_VACCINATION}>
                        <Link to={ADD_VACCINATION}>
                            Add Vaccination service
                        </Link>
                    </Menu.Item>
                    {loggedInStatus()}
                </Menu>
                <Outlet />
            </div>
        </div>
    );
};
