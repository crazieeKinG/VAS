import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Popconfirm, Space } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAppointment } from "../../api/appointmentApi";
import { deletePatient } from "../../api/patientApi";
import { deleteVaccine } from "../../api/vaccineApi";
import { IDLE, PENDING, REJECTED } from "../../constants/sliceConstants";
import { AppDispatch } from "../../store/store";

interface Props {
    updateLink: string;
    deleteLink: {
        type: any;
        id: string;
    };
}

export const UpdateAndDeleteLinks = ({ updateLink, deleteLink }: Props) => {
    const [visible, setVisible] = useState(false);
    const { type, id } = deleteLink;

    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: any) => state[type].loading);

    const deleteActions: any = {
        appointment: deleteAppointment,
        vaccine: deleteVaccine,
        patient: deletePatient,
    };

    const hide = () => {
        setVisible(false);
    };

    const show = () => {
        setVisible(true);
    };

    const handleDelete = async () => {
        await dispatch(deleteActions[type](id));
        window.location.reload();
    };

    return (
        <Space>
            <Link to={updateLink}>
                <Button type="primary" icon={<EditFilled />}>
                    Edit
                </Button>
            </Link>
            <Popconfirm
                title="Are you sure?"
                visible={visible}
                onConfirm={handleDelete}
                okButtonProps={{ loading: loading === PENDING, danger: true }}
                onCancel={hide}
            >
                <Button
                    type="primary"
                    danger
                    icon={<DeleteFilled />}
                    onClick={show}
                >
                    Delete
                </Button>
            </Popconfirm>
        </Space>
    );
};
