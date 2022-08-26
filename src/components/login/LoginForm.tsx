import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../../store/slice/authenticationSlice";
import { RootState } from "../../store/store";
import { SetCurrentPage } from "../../utils/SetCurrentPage";

interface Props {
    redirectLink: string;
    admin: boolean;
}

export const LoginForm = ({ redirectLink, admin }: Props) => {
    const navigate = useNavigate();
    const authentication = useSelector((state: RootState) => state.login.data);
    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const redirectToHome = () => {
        navigate(redirectLink);
    };

    const checkPreLogin = () => {
        if (authentication.token && authentication.isAdmin) redirectToHome();
    };

    const handleLogin = (values: any) => {
        if (values.username !== "admin" || values.password !== "admin") {
            form.setFieldsValue({
                username: values.username,
                password: "",
            });

            alert("Invalid Credentials");

            return;
        }

        dispatch(
            loggedIn({
                username: values.username,
                token: "token",
                isAdmin: admin,
            })
        );

        form.resetFields();

        alert(`Logged in username: ${values.username}`);
        redirectToHome();
    };

    useEffect(() => {
        checkPreLogin();
    });

    return (
        <Form
            labelAlign="left"
            onFinish={handleLogin}
            layout="vertical"
            className="login__form"
            form={form}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    { required: true, message: "Please enter your username" },
                ]}
            >
                <Input placeholder="Enter username" />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: "Please enter your password" },
                ]}
            >
                <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};
