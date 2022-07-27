import { Button, Form, Input } from "antd";
import { useState } from "react";

interface Credential {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const [loginCredentials, setLoginCredentials] = useState<Credential>({
        email: "",
        password: ""
    });

    const [form] = Form.useForm();

    const handleLogin = (values: any) => {
        if (values.email !== "test@test.com" || values.password !== "admin") {
            form.setFieldsValue({
                email: values.email,
                password: "",
            });

            alert("Invalid Credentials");

            return;
        }

        setLoginCredentials(loginCredentials);
        form.resetFields();

        alert(`Logged in email: ${values.email}`);
    };

    return (
        <Form
            labelAlign="left"
            onFinish={handleLogin}
            layout="vertical"
            className="login__form"
            form={form}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
            >
                <Input type={"email"} placeholder="Enter email" />
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
