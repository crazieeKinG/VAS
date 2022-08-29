import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { vaccineServiceInterface } from "../../store/sliceInterface/vaccineServiceInterface";
import { RootState } from "../../store/store";
import { UpdateAndDeleteLinks } from "../utils/UpdateAndDeleteLinks";

const columns: ColumnsType<vaccineServiceInterface> = [
    { key: "serviceName", title: "Service Name", dataIndex: "serviceName" },
    {
        key: "serviceLocation",
        title: "Service Location",
        dataIndex: "serviceLocation",
    },
    { key: "startDate", title: "Start Date", dataIndex: "startDate" },
    { key: "enddate", title: "End Date", dataIndex: "endDate" },
    { key: "actions", title: "Actions", render: UpdateAndDeleteLinks },
];

export const VaccineServiceTable = () => {
    const data = useSelector((state: RootState) => state.vaccine.data);

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 2 }}
                rowKey="serviceName"
            />
        </div>
    );
};
