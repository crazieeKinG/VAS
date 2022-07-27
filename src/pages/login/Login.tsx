import { Divider, Typography } from "antd";
import { LoginForm } from "../../components/login/LoginForm";
import "./login.css";

export const Login = () => {
    return (
        <div className="login container">
            <Typography.Title level={2} className="login__title">
                Login
            </Typography.Title>

            <Divider />

            <LoginForm />
        </div>
    );
};
