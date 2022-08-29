import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

export const UpdateAndDeleteLinks = () => {
    return (
        <Space>
            <Link to={""}>
                <Button type="primary" icon={<EditFilled />}>Edit</Button>
            </Link>
            <Link to={""}>
                <Button type="primary" danger icon={<DeleteFilled />}>Delete</Button>
            </Link>
        </Space>
    );
};
