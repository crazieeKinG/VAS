import { Col, Divider, Typography } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import "./home.css";

export const Home = () => {
    const authentication = { ...useContext(AuthContext) };

    const loggedInStatus = () => {
        if (authentication.auth?.isLoggedIn)
            return <Link to="/logout">Logout</Link>;
        else return <Link to="/login">Proceed to Login</Link>;
    };

    return (
        <div className="container">
            <div className="home">
                <Typography.Title>
                    Vaccination Appointment Scheduling
                </Typography.Title>

                {loggedInStatus()}

                <Divider />

                <Typography.Title level={3}>
                    Welcome! {authentication.auth?.username}
                </Typography.Title>
            </div>
        </div>
    );
};
