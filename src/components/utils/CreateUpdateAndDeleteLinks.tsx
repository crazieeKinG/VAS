import { Space } from "antd";
import { Link } from "react-router-dom";

const CreateUpdateAndDeleteLinks = () => {
    return (
        <Space>
            <Link to={""}>Edit</Link>
            <Link to={""}>Delete</Link>
        </Space>
    );
};

export default CreateUpdateAndDeleteLinks;
