import { Button, Menu } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { HOME, LOGIN, LOGOUT } from "../../constants/navLinkConstants";
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
                    {loggedInStatus()}
                </Menu>
                <Outlet />
            </div>
        </div>
    );
};