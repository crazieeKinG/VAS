import { Divider, Typography } from "antd";
import { LoginForm } from "../../components/login/LoginForm";
import { LIST_APPOINTMENT } from "../../constants/navLinkConstants";
import { SetCurrentPage } from "../../utils/SetCurrentPage";
import "./login.css";

export const ManagerLogin = () => {
    SetCurrentPage("Manager Login", "Vaccine Appointment Scheduling", "adminLogin");
    
    return (
        <div className="login container">
            <Typography.Title level={2} className="login__title">
                Manager Login
            </Typography.Title>

            <Divider />

            <LoginForm redirectLink={LIST_APPOINTMENT} admin={true} />
        </div>
    );
};
