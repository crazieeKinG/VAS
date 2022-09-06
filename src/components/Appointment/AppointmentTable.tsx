import { getValue } from "@testing-library/user-event/dist/utils";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { UPDATE_APPOINTMENT } from "../../constants/navLinkConstants";
import { appointmentInterface } from "../../store/sliceInterface/appointmentInterface";
import { RootState } from "../../store/store";
import { UpdateAndDeleteLinks } from "../utils/UpdateAndDeleteLinks";

export const AppointmentTable = () => {
    const data = useSelector((state: RootState) => state.appointment.data);
    const admin = useSelector((state: RootState) => state.login.data.isAdmin);

    const columns: ColumnsType<appointmentInterface> = [
        {
            key: "patientId",
            title: "Patient ID",
            dataIndex: "patientId",
        },
        {
            key: "siteLocation",
            title: "Site Location",
            dataIndex: "siteLocation",
        },
        { key: "serviceType", title: "Service Type", dataIndex: "serviceType" },
        {
            key: "appointmentDate",
            title: "Appointment Date",
            dataIndex: "appointmentDate",
        },
        {
            key: "actions",
            title: "Actions",
            render: (value) =>
                admin ? (
                    <UpdateAndDeleteLinks
                        updateLink={`${UPDATE_APPOINTMENT.replace(
                            ":appointmentId",
                            value.id
                        )}`}
                        deleteLink={{ type: "appointment", id: value.id }}
                    />
                ) : (
                    "-"
                ),
        },
    ];

    return (
        <div className="margin-top">
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
                rowKey="id"
            />
        </div>
    );
};
