import { Divider, Typography } from "antd";
import { LoginForm } from "../../components/login/LoginForm";
import { HOME } from "../../constants/navLinkConstants";
import { SetCurrentPage } from "../../utils/SetCurrentPage";
import "./login.css";

export const Login = () => {
    SetCurrentPage("Login", "Vaccine Appointment Scheduling", "login");
    
    return (
        <div className="login container">
            <Typography.Title level={2} className="login__title">
                Login
            </Typography.Title>

            <Divider />

            <LoginForm redirectLink={HOME} admin={false}  />
        </div>
    );
};
