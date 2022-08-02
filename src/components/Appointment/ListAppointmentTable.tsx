import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { AppointmentDetails } from "../../store/sliceInterface/appointmentInterface";
import { RootState } from "../../store/store";
import CreateUpdateAndDeleteLinks from "../utils/CreateUpdateAndDeleteLinks";

const columns: ColumnsType<AppointmentDetails> = [
    {
        title: "Patient ID",
        dataIndex: "patientId",
    },
    {
        title: "Site Location",
        dataIndex: "siteLocation",
    },
    {
        title: "Service Type",
        dataIndex: "serviceType",
    },
    {
        title: "Actions",
        render: CreateUpdateAndDeleteLinks,
    },
];

export const ListAppointmentTable = () => {
    const data = useSelector((state: RootState) => state.appointment.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 1 }}
            />
        </div>
    );
};
