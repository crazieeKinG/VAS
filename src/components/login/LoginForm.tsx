import { Alert, Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FULFILLED, PENDING, REJECTED } from "../../constants/sliceConstants";
import { login } from "../../store/slice/authenticationSlice";
import { AppDispatch, RootState } from "../../store/store";

interface Props {
    redirectLink: string;
    admin: boolean;
}

export const LoginForm = ({ redirectLink, admin }: Props) => {
    const navigate = useNavigate();
    const { loading, data, message } = useSelector(
        (state: RootState) => state.login
    );
    const dispatch = useDispatch<AppDispatch>();

    const redirect = () => {
        navigate(redirectLink);
    };

    const checkPreLogin = () => {
        if (data.accessToken && data.isAdmin === admin) redirect();
    };

    const handleLogin = async (values: any) => {
        await dispatch(login(values));
        console.log(loading);
    };

    useEffect(() => {
        checkPreLogin();
        if (loading === FULFILLED && data.isAdmin === admin) redirect();
    }, [loading]);

    return (
        <Form
            labelAlign="left"
            onFinish={handleLogin}
            layout="vertical"
            className="login__form"
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
            >
                <Input placeholder="Enter email" />
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
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading === PENDING}
                >
                    Login
                </Button>
                {loading === REJECTED && (
                    <Alert
                        message={message}
                        showIcon
                        style={{ marginTop: "1rem" }}
                        type="error"
                    />
                )}
                {!data.isAdmin && true === admin && loading === FULFILLED && (
                    <Alert
                        message="User not Authorizied"
                        showIcon
                        style={{ marginTop: "1rem" }}
                        type="error"
                    />
                )}
            </Form.Item>
        </Form>
    );
};
