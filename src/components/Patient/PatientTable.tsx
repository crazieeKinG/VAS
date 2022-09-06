import { EyeFilled } from "@ant-design/icons";
import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    LIST_PATIENT,
    PATIENT_APPOINTMENT,
    UPDATE_PATIENT,
} from "../../constants/navLinkConstants";
import { patientInformationInterface } from "../../store/sliceInterface/patientInformationInterface";
import { vaccineServiceInterface } from "../../store/sliceInterface/vaccineServiceInterface";
import { RootState } from "../../store/store";
import { UpdateAndDeleteLinks } from "../utils/UpdateAndDeleteLinks";

const columns: ColumnsType<patientInformationInterface> = [
    {
        key: "firstName",
        title: "First Name",
        dataIndex: "firstName",
    },
    {
        key: "lastName",
        title: "Last Name",
        dataIndex: "lastName",
    },
    {
        key: "email",
        title: "Email",
        dataIndex: "email",
    },
    {
        key: "view",
        title: "View Details",
        render: () => <Button icon={<EyeFilled />}>View</Button>,
    },
    {
        key: "actions",
        title: "Actions",
        render: (value) => (
            <UpdateAndDeleteLinks
                updateLink={`${UPDATE_PATIENT.replace(":patientId", value.id)}`}
                deleteLink={{ type: "patient", id: value.id }}
            />
        ),
    },
];

export const PatientTable = () => {
    const data = useSelector((state: RootState) => state.patient.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                rowKey="email"
            />
        </div>
    );
};
