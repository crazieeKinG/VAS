import { Button, Form, Input } from "antd";

export const LoginForm = () => {
    const handleLogin = (values: any) => {
        alert(`Logged in email: ${values.email}`);
    };

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
