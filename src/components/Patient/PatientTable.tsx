import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useEffect } from "react";
import { useSelector } from "react-redux";
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
        key: "actions",
        title: "Actions",
        render: UpdateAndDeleteLinks,
    },
];

export const PatientTable = () => {
    const data = useSelector((state: RootState) => state.patient.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 1 }}
                rowKey="email"
            />
        </div>
    );
};
