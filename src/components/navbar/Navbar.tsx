import { Button, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ADD_PATIENT, HOME, LOGIN, LOGOUT, REGISTER_PATIENT } from "../../constants/navLinkConstants";
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
                    {loggedInStatus()}
                </Menu>
                <Outlet />
            </div>
        </div>
    );
};
